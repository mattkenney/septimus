(function(){

var m_stops
,   m_stop_names
,   m_recent = {}
;

$.get("/gtfa_public/google_rail/stops.txt", function (data)
{
    m_stops = $.csv.toArrays(data);
    m_stop_names = _.map(m_stops, function (row) { return row[1]; });
    m_stop_names.sort();
});

if (window.localStorage && window.JSON)
{
    m_recent = JSON.parse(localStorage.getItem("recent") || "[]");
}

function findRoute()
{
    var from = $("#stopfrom input").val()
    ,   to = $("#stopto input").val()
    ;
    $.ajax("http://www3.septa.org/hackathon/NextToArrive/",
    {
        data: $.param({ req1: from, req2: to }),
        dataType: "jsonp",
        success: makeRouteLoad(from, to)
    });
}

function makeRecentDeleteListener(recent)
{
    return function ()
    {
        m_recent = _.filter(m_recent, function (value) { return (value.label !== recent.label) });
        if (window.localStorage && window.JSON)
        {
            localStorage.setItem("recent", JSON.stringify(m_recent));
        }
        updateRecent();
    };
}

function makeDetailListener(line, train)
{
    return function ()
    {
        $.ajax("http://www3.septa.org/hackathon/RRSchedules/",
        {
            data: $.param({ req1: train }),
            dataType: "jsonp",
            success: makeShowTrain(line, train)
        });
    };
}

function makeRecentListener(recent)
{
    return function ()
    {
        $("#stopfrom input").val(recent.from);
        $("#stopto input").val(recent.to);
        findRoute();
    };
}

function makeRouteLoad(from, to)
{
    return function (data)
    {
        var $list = $("#routes-list");
        $list.empty();
        if (data.length)
        {
            $.mobile.changePage("#routes");
        }
        else
        {
            alert("No route found?!");
            return;
        }
        for (var i = 0; i < data.length; i++)
        {
            var $head = $("<li></li>")
                .jqmData("role", "list-divider")
                .jqmData("theme", "c")
                .text(data[i].orig_departure_time + " - " + (data[i].term_arrival_time || data[i].orig_arrival_time))
                .appendTo($list)
                ;
            var $item = $("<li></li>")
                .jqmData("theme", "c")
                .appendTo($list)
                ;
            $link = $item;
//            var $link = $("<a></a>")
//                .attr("href", "javascript:void(0)")
//                .click(makeDetailListener(data[i].orig_line, data[i].orig_train))
//                .appendTo($item)
//                ;
            $("<div></div>")
                .addClass("ui-li-desc")
                .text(data[i].orig_line + " " + data[i].orig_train)
                .appendTo($link)
                ;
            $("<div></div>")
                .text("Depart " + data[i].orig_departure_time + " (" + data[i].orig_delay + ")")
                .appendTo($link)
                ;
            $("<div></div>")
                .text("> " + from)
                .appendTo($link)
                ;
            $("<div></div>")
                .text("Arrive " + data[i].orig_arrival_time)
                .appendTo($link)
                ;
            $("<div></div>")
                .text("> " + (data[i].Connection || to))
                .appendTo($link)
                ;
            if (data[i].isdirect === "true")
            {
                continue;
            }
            $("<span></span>")
                .text(" - 1 connection")
                .appendTo($head)
                ;
            $item = $("<li></li>")
                .jqmData("theme", "c")
                .appendTo($list)
                ;
            $link = $item;
//            $link = $("<a></a>")
//                .attr("href", "javascript:void(0)")
//                .click(makeDetailListener(data[i].term_line, data[i].term_train))
//                .appendTo($item)
//                ;
            $("<div></div>")
                .addClass("ui-li-desc")
                .text(data[i].term_line + " " + data[i].term_train)
                .appendTo($link)
                ;
            $("<div></div>")
                .text("Depart " + data[i].term_depart_time + " (" + data[i].term_delay + ")")
                .appendTo($link)
                ;
            $("<div></div>")
                .text("> " + data[i].Connection)
                .appendTo($link)
                ;
            $("<div></div>")
                .text("Arrive " + data[i].term_arrival_time)
                .appendTo($link)
                ;
            $("<div></div>")
                .text("> " + to)
                .appendTo($link)
                ;
        }
        $list.listview("refresh");
        $list.trigger("updatelayout");

        var recent =
            {
                from: from,
                to: to,
                label: from + " - " + to
            };
        m_recent = _.filter(m_recent, function (value) { return (value.label !== recent.label) });
        m_recent.push(recent);
        while (m_recent.length > 10)
        {
            m_recent.shift();
        }
        if (window.localStorage && window.JSON)
        {
            localStorage.setItem("recent", JSON.stringify(m_recent));
        }
    };
}

function makeShowTrain(line, train)
{
    return function (data)
    {
        var $list = $("#detail-list");
        $list.empty();
        $.mobile.changePage("#detail");
        $("<li></li>")
            .jqmData("role", "list-divider")
            .jqmData("theme", "c")
            .text(line + " " + train)
            .appendTo($list)
            ;
        for (var i = 0; i < data.length; i++)
        {
            $("<li></li>")
                .jqmData("theme", "c")
                .text(data[i].sched_tm + " " + data[i].station)
                .appendTo($list)
                ;
        }
        $list.listview("refresh");
        $list.trigger("updatelayout");
    };
}

function makeStopListener($input, $list, text)
{
    return function ()
    {
        $input.val(text);
        $list.empty();
        $list.listview("refresh");
        $list.trigger("updatelayout");
    };
}

function updateRecent()
{
    var $list = $("#recent ul")
    ,   recent = _.sortBy(m_recent, "label");
    ;
    $list.empty();
    for (var i = 0; i < recent.length; i++)
    {
        var $item = $("<li></li>")
            .appendTo($list)
            ;
        var $link = $("<a></a>")
            .attr("href", "javascript:void(0)")
            .text(recent[i].label)
            .appendTo($item)
            .click(makeRecentListener(recent[i]))
            ;
        $link = $("<a></a>")
            .attr("href", "javascript:void(0)")
            .jqmData("icon", "delete")
            .click(makeRecentDeleteListener(recent[i]))
            .appendTo($item)
            ;
    }
    $list.listview("refresh");
    $list.trigger("updatelayout");
    $("#recent").toggle(!!recent.length);
}

$(document).on("pageinit", "#search", function()
{
    $("#stopfrom ul,#stopto ul").on("listviewbeforefilter", function (e, data)
    {
        var $input = $(data.input)
        ,   text = $(data.input).val().toLowerCase()
        ,   $list = $(this)
        ;
        $list.empty();
        if (m_stop_names && text)
        {
            var matches = _.filter(m_stop_names, function (value)
            {
                return (text === value.substring(0, text.length).toLowerCase());
            });
            for (var i = 0; i < matches.length; i++)
            {
                $("<li></li>")
                    .text(matches[i])
                    .appendTo($list)
                    .click(makeStopListener($input, $list, matches[i]))
                    ;
            }
        }
        $list.listview("refresh");
        $list.trigger("updatelayout");
    });

    $("#search").on("pagebeforeshow", updateRecent);
    $("#search form").on("submit", findRoute);
    $("#find").click(findRoute);
});

})();

