(function(){

var m_stop_names =
    [
        "30th Street Station",
        "49th St",
        "Airport Terminal A",
        "Airport Terminal B",
        "Airport Terminal C-D",
        "Airport Terminal E-F",
        "Allegheny",
        "Allen Lane",
        "Ambler",
        "Angora",
        "Ardmore",
        "Ardsley",
        "Bala",
        "Berwyn",
        "Bethayres",
        "Bridesburg",
        "Bristol",
        "Bryn Mawr",
        "Carpenter",
        "Chalfont",
        "Chelten Avenue",
        "Cheltenham",
        "Chester TC",
        "Chestnut Hill East",
        "Chestnut Hill West",
        "Churchmans Crossing",
        "Claymont",
        "Clifton-Aldan",
        "Colmar",
        "Conshohocken",
        "Cornwells Heights",
        "Crestmont",
        "Croydon",
        "Crum Lynne",
        "Curtis Park",
        "Cynwyd",
        "Darby",
        "Daylesford",
        "Delaware Valley College",
        "Devon",
        "Downingtown",
        "Doylestown",
        "East Falls",
        "Eastwick Station",
        "Eddington",
        "Eddystone",
        "Elkins Park",
        "Elm St",
        "Elwyn Station",
        "Exton",
        "Fern Rock TC",
        "Fernwood",
        "Folcroft",
        "Forest Hills",
        "Ft Washington",
        "Fortuna",
        "Fox Chase",
        "Germantown",
        "Gladstone",
        "Glenolden",
        "Glenside",
        "Gravers",
        "Gwynedd Valley",
        "Hatboro",
        "Haverford",
        "Highland",
        "Highland Ave",
        "Holmesburg Jct",
        "Ivy Ridge",
        "Jenkintown-Wyncote",
        "Langhorne",
        "Lansdale",
        "Lansdowne",
        "Lawndale",
        "Levittown",
        "Link Belt",
        "Main St",
        "Malvern",
        "Manayunk",
        "Marcus Hook",
        "Market East",
        "Meadowbrook",
        "Media",
        "Melrose Park",
        "Merion",
        "Miquon",
        "Morton",
        "Mt Airy",
        "Moylan-Rose Valley",
        "Narberth",
        "Neshaminy Falls",
        "New Britain",
        "Newark",
        "Noble",
        "Norristown TC",
        "North Broad St",
        "North Hills",
        "North Philadelphia",
        "North Wales",
        "Norwood",
        "Olney",
        "Oreland",
        "Overbrook",
        "Paoli",
        "Penllyn",
        "Pennbrook",
        "Philmont",
        "Primos",
        "Prospect Park",
        "Queen Lane",
        "Radnor",
        "Ridley Park",
        "Rosemont",
        "Roslyn",
        "Rydal",
        "Ryers",
        "Secane",
        "Sedgwick",
        "Sharon Hill",
        "Somerton",
        "Spring Mill",
        "St. Davids",
        "St. Martins",
        "Stenton",
        "Strafford",
        "Suburban Station",
        "Swarthmore",
        "Tacony",
        "Temple U",
        "Thorndale",
        "Torresdale",
        "Trenton",
        "Trevose",
        "Tulpehocken",
        "University City",
        "Upsal",
        "Villanova",
        "Wallingford",
        "Warminster",
        "Washington Lane",
        "Wayne Station",
        "Wayne Jct",
        "West Trenton",
        "Whitford",
        "Willow Grove",
        "Wilmington",
        "Wissahickon",
        "Wister",
        "Woodbourne",
        "Wyndmoor",
        "Wynnefield Avenue",
        "Wynnewood",
        "Yardley"
    ]
    ,   m_recent = {}
    ,   m_from = ""
    ,   m_to = ""
    ;

if (window.localStorage && window.JSON)
{
    m_recent = JSON.parse(localStorage.getItem("recent") || "[]");
    m_from = localStorage.getItem("from") || "";
    m_to = localStorage.getItem("to") || "";
}

function findRoute()
{
    m_from = $("#stopfrom input").val();
    m_to = $("#stopto input").val();
    $.mobile.changePage("#routes");
}

function formatTime(time)
{
    if (time && time.getHours)
    {
        var hours = time.getHours()
        ,   minutes = time.getMinutes()
        ,   ampm = "AM"
        ,   result
        ;
        if (hours > 12)
        {
            hours -= 12;
            ampm = "PM";
        }
        result = hours + ":" + String(100 + minutes).substring(1) + ampm;
    }
    return result;
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

//function makeDetailListener(line, train)
//{
//    return function ()
//    {
//        $.ajax("http://www3.septa.org/hackathon/RRSchedules/",
//        {
//            data: $.param({ req1: train }),
//            dataType: "jsonp",
//            success: makeShowTrain(line, train)
//        });
//    };
//}

function makeRecentListener(recent)
{
    return function ()
    {
        $("#stopfrom input").val(recent.from);
        $("#stopto input").val(recent.to);
        findRoute();
    };
}

function makeRouteItem($list, from, to, data, phase)
{
    var $item = $("<li></li>").appendTo($list).jqmData("theme", "c")
    ,   train = data[phase + "_line"] + " " + data[phase + "_train"]
    ,   depart = data[phase + "_departure_time"] || data[phase + "_depart_time"]
    ,   arrive = data[phase + "_arrival_time"]
    ,   delay = data[phase + "_delay"]
    ;
    var $link = $item;
//            var $link = $("<a></a>")
//                .attr("href", "javascript:void(0)")
//                .click(makeDetailListener(data[phase + "_line"], data[phase + "_train"]))
//                .appendTo($item)
//                ;
    $("<div></div>").appendTo($link).text(train).addClass("ui-li-desc");
    $("<div></div>").appendTo($link).text("Depart ").append(makeTime(depart, delay));
    $("<div></div>").appendTo($link).text("@ " + from);
    $("<div></div>").appendTo($link).text("Arrive ").append(makeTime(arrive, delay));
    $("<div></div>").appendTo($link).text("@ " + to);
}

//function makeShowTrain(line, train)
//{
//    return function (data)
//    {
//        var $list = $("#detail-list");
//        $list.empty();
//        $.mobile.changePage("#detail");
//        $("<li></li>")
//            .jqmData("role", "list-divider")
//            .jqmData("theme", "c")
//            .text(line + " " + train)
//            .appendTo($list)
//            ;
//        for (var i = 0; i < data.length; i++)
//        {
//            $("<li></li>")
//                .jqmData("theme", "c")
//                .text(data[i].sched_tm + " " + data[i].station)
//                .appendTo($list)
//                ;
//        }
//        $list.listview("refresh");
//        $list.trigger("updatelayout");
//    };
//}

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

function makeTime(scheduled, delay)
{
    var $span = $("<span></span>");
    if ((/^([0-9]+) mins$/).test(delay))
    {
        var delta = 0|RegExp.$1
        ,   estimated = parseTime(scheduled)
        ;
        if (estimated)
        {
            estimated.setTime(estimated.getTime() + delta * 60000);
        }
        estimated = formatTime(estimated);
        $("<strike></strike>").appendTo($span).text(scheduled);
        $span.append(" ");
        $("<i></i>").appendTo($span).text(estimated);
    }
    else
    {
        $("<span></span>").appendTo($span).text(scheduled);
        $("<span></span>").appendTo($span).text(" (" + delay + ")");
    }
    return $span;
}

function parseTime(str)
{
    if ((/^\s*([0-9]+):([0-9]+)\s*(AM|PM)\s*$/i).test(str))
    {
        var hours = 0|RegExp.$1
        ,   minutes = 0|RegExp.$2
        ,   ampm = RegExp.$3.toUpperCase()
        ,   now = new Date()
        ;
        if (hours === 12)
        {
            hours = 0;
        }
        if (ampm === "PM")
        {
            hours += 12;
        }
        now.setHours(hours);
        now.setMinutes(minutes);
        now.setSeconds(0);
        now.setMilliseconds(0);
    }
    return now;
}

function updateRecent()
{
    var $list = $("#recent ul")
    ,   recent = _.sortBy(m_recent, "label");
    ;
    $("#stopfrom input").val("");
    $("#stopto input").val("");
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

$(document).on("pageinit", "#routes", function()
{
    function load(data)
    {
        var $list = $("#routes-list");
        $list.empty();
        if (!data || !data.length)
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
            makeRouteItem($list, m_from, data[i].Connection || m_to, data[i], "orig");
            if (data[i].isdirect === "true")
            {
                continue;
            }
            $("<span></span>")
                .text(" - 1 connection")
                .appendTo($head)
                ;
            makeRouteItem($list, data[i].Connection, m_to, data[i], "term");
        }
        $list.listview("refresh");
        $list.trigger("updatelayout");

        var recent =
            {
                from: m_from,
                to: m_to,
                label: m_from + " - " + m_to
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
            localStorage.setItem("from", m_from);
            localStorage.setItem("to", m_to);
        }
    };

    $("#routes").on("pagebeforeshow", function ()
    {
        $("#routes-list")
            .empty()
            .listview("refresh")
            .trigger("updatelayout")
            ;
    });

    $("#routes").on("pageshow", function ()
    {
        if (m_from && m_to)
        {
            $.mobile.loading("show");
            $.ajax("http://www3.septa.org/hackathon/NextToArrive/",
            {
                data: $.param({ req1: m_from, req2: m_to }),
                dataType: "jsonp",
                complete: function ()
                {
                    $.mobile.loading("hide");
                },
                success: load
            });
        }
        else
        {
            $.mobile.changePage("#search");
        }
    });
});

})();

