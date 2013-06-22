(function(){

var m_stops =
    {
        "30th Street Station":{},
        "49th St":{"r":"med"},
        "Airport Terminal A":{"r":"air"},
        "Airport Terminal B":{"r":"air"},
        "Airport Terminal C-D":{"r":"air"},
        "Airport Terminal E-F":{"r":"air"},
        "Allegheny":{"r":"nor"},
        "Allen Lane":{"r":"chw"},
        "Ambler":{"r":"lan"},
        "Angora":{"r":"med"},
        "Ardmore":{"r":"pao"},
        "Ardsley":{"r":"war"},
        "Bala":{"r":"cyn"},
        "Berwyn":{"r":"pao"},
        "Bethayres":{"r":"wtr"},
        "Bridesburg":{"r":"tre"},
        "Bristol":{"r":"tre"},
        "Bryn Mawr":{"r":"pao"},
        "Carpenter":{"r":"chw"},
        "Chalfont":{"r":"lan"},
        "Chelten Avenue":{"r":"chw"},
        "Cheltenham":{"r":"fox"},
        "Chester TC":{"r":"wil"},
        "Chestnut Hill East":{"r":"che"},
        "Chestnut Hill West":{"r":"chw"},
        "Churchmans Crossing":{"r":"wil"},
        "Claymont":{"r":"wil"},
        "Clifton-Aldan":{"r":"med"},
        "Colmar":{"r":"lan"},
        "Conshohocken":{"r":"nor"},
        "Cornwells Heights":{"r":"tre"},
        "Crestmont":{"r":"war"},
        "Croydon":{"r":"tre"},
        "Crum Lynne":{"r":"wil"},
        "Curtis Park":{"r":"wil"},
        "Cynwyd":{"r":"cyn"},
        "Darby":{"r":"wil"},
        "Daylesford":{"r":"pao"},
        "Delaware Valley College":{"r":"lan"},
        "Devon":{"r":"pao"},
        "Downingtown":{"r":"pao"},
        "Doylestown":{"r":"lan"},
        "East Falls":{"r":"nor"},
        "Eastwick Station":{"r":"air"},
        "Eddington":{"r":"tre"},
        "Eddystone":{"r":"wil"},
        "Elkins Park":{},
        "Elm St":{"r":"nor"},
        "Elwyn Station":{"r":"med"},
        "Exton":{"r":"pao"},
        "Fern Rock TC":{},
        "Fernwood":{"r":"med"},
        "Folcroft":{"r":"wil"},
        "Forest Hills":{"r":"wtr"},
        "Fortuna":{"r":"lan"},
        "Fox Chase":{"r":"fox"},
        "Ft Washington":{"r":"lan"},
        "Germantown":{"r":"che"},
        "Gladstone":{"r":"med"},
        "Glenolden":{"r":"wil"},
        "Glenside":{},
        "Gravers":{"r":"che"},
        "Gwynedd Valley":{"r":"lan"},
        "Hatboro":{"r":"war"},
        "Haverford":{"r":"pao"},
        "Highland Ave":{"r":"wil"},
        "Highland":{"r":"chw"},
        "Holmesburg Jct":{"r":"tre"},
        "Ivy Ridge":{"r":"nor"},
        "Jenkintown-Wyncote":{},
        "Langhorne":{"r":"wtr"},
        "Lansdale":{"r":"lan"},
        "Lansdowne":{"r":"med"},
        "Lawndale":{"r":"fox"},
        "Levittown":{"r":"tre"},
        "Link Belt":{"r":"lan"},
        "Main St":{"r":"nor"},
        "Malvern":{"r":"pao"},
        "Manayunk":{"r":"nor"},
        "Marcus Hook":{"r":"wil"},
        "Market East":{},
        "Meadowbrook":{"r":"wtr"},
        "Media":{"r":"med"},
        "Melrose Park":{},
        "Merion":{"r":"pao"},
        "Miquon":{"r":"nor"},
        "Morton":{"r":"med"},
        "Moylan-Rose Valley":{"r":"med"},
        "Mt Airy":{"r":"che"},
        "Narberth":{"r":"pao"},
        "Neshaminy Falls":{"r":"wtr"},
        "New Britain":{"r":"lan"},
        "Newark":{"r":"wil"},
        "Noble":{"r":"wtr"},
        "Norristown TC":{"r":"nor"},
        "North Broad St":{},
        "North Hills":{"r":"lan"},
        "North Philadelphia":{"r":"chw"},
        "North Wales":{"r":"lan"},
        "Norwood":{"r":"wil"},
        "Olney":{"r":"fox"},
        "Oreland":{"r":"lan"},
        "Overbrook":{"r":"pao"},
        "Paoli":{"r":"pao"},
        "Penllyn":{"r":"lan"},
        "Pennbrook":{"r":"lan"},
        "Philmont":{"r":"wtr"},
        "Primos":{"r":"med"},
        "Prospect Park":{"r":"wil"},
        "Queen Lane":{"r":"chw"},
        "Radnor":{"r":"pao"},
        "Ridley Park":{"r":"wil"},
        "Rosemont":{"r":"pao"},
        "Roslyn":{"r":"war"},
        "Rydal":{"r":"wtr"},
        "Ryers":{"r":"fox"},
        "Secane":{"r":"med"},
        "Sedgwick":{"r":"che"},
        "Sharon Hill":{"r":"wil"},
        "Somerton":{"r":"wtr"},
        "Spring Mill":{"r":"nor"},
        "St. Davids":{"r":"pao"},
        "St. Martins":{"r":"chw"},
        "Stenton":{"r":"che"},
        "Strafford":{"r":"pao"},
        "Suburban Station":{},
        "Swarthmore":{"r":"med"},
        "Tacony":{"r":"tre"},
        "Temple U":{},
        "Thorndale":{"r":"pao"},
        "Torresdale":{"r":"tre"},
        "Trenton":{"r":"tre"},
        "Trevose":{"r":"wtr"},
        "Tulpehocken":{"r":"chw"},
        "University City":{},
        "Upsal":{"r":"chw"},
        "Villanova":{"r":"pao"},
        "Wallingford":{"r":"med"},
        "Warminster":{"r":"war"},
        "Washington Lane":{"r":"che"},
        "Wayne Jct":{},
        "Wayne-A":{"r":"pao","alt":"Wayne Station"},
        "West Trenton":{"r":"wtr"},
        "Whitford":{"r":"pao"},
        "Willow Grove":{"r":"war"},
        "Wilmington":{"r":"wil"},
        "Wissahickon":{"r":"nor"},
        "Wister":{"r":"che"},
        "Woodbourne":{"r":"wtr"},
        "Wyndmoor":{"r":"che"},
        "Wynnefield Avenue":{"r":"cyn"},
        "Wynnewood":{"r":"pao"},
        "Yardley":{"r":"wtr"}
    }
    ,   m_routes =
    {
        "air":"Airport",
        "che":"Chestnut Hill East",
        "chw":"Chestnut Hill West",
        "cyn":"Cynwyd",
        "fox":"Fox Chase",
        "lan":"Lansdale/Doylestown",
        "med":"Media/Elwyn",
        "nor":"Manayunk/Norristown",
        "pao":"Paoli/Thorndale",
        "tre":"Trenton",
        "war":"Warminster",
        "wil":"Wilmington/Newark",
        "wtr":"West Trenton"
    }
    ,   m_stop_names = _.map(m_stops, function (value, key) { return (value.alt || key); })
    ,   m_recent = {}
    ,   m_from = ""
    ,   m_to = ""
    ,   m_train = ""
    ,   m_connection = ""
    ;

m_stop_names.sort();

if (window.localStorage && window.JSON)
{
    m_recent = JSON.parse(localStorage.getItem("recent") || "[]");
    m_from = localStorage.getItem("from") || "";
    m_to = localStorage.getItem("to") || "";
    m_train = localStorage.getItem("train") || "";
    m_connection = localStorage.getItem("connection") || "";
}

function findRoute()
{
    var fromText = $("#stopfrom input").val()
    ,   toText = $("#stopto input").val()
    ;
    if (!fromText || !toText)
    {
        alert('First choose both a "from" station and a "to" station.');
        return;
    }
    var from = matchNames(fromText)[0];
    if (!from)
    {
        alert('"' + fromText + '" is not a SEPTA station.');
        return;
    }
    var to = matchNames(toText)[0];
    if (!to)
    {
        alert('"' + toText + '" is not a SEPTA station.');
        return;
    }

    m_from = from;
    m_to = to;
    $("#routes-list") .empty();
    $.mobile.changePage("#routes");
}

function formatTime(time)
{
    var result = time;
    if (result && !result.getHours)
    {
        result = parseTime(time) || time;
    }
    if (result && result.getHours)
    {
        var hours = result.getHours()
        ,   minutes = result.getMinutes()
        ,   ampm = "AM"
        ,   result
        ;
        if (hours > 12)
        {
            hours -= 12;
            ampm = "PM";
        }
        else if (hours === 0)
        {
            hours = 12;
        }
        result = hours + ":" + String(100 + minutes).substring(1) + " " + ampm;
    }
    return result;
}

function makeDetailListener(train, connection)
{
    return function ()
    {
        m_train = train;
        m_connection = connection;
        $("#detail-list") .empty();
        $.mobile.changePage("#detail");
    };
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

    var $link = $("<a></a>")
        .attr("href", "javascript:void(0)")
        .click(makeDetailListener(data[phase + "_train"], data.Connection))
        .appendTo($item)
        ;

    $("<div></div>").appendTo($link).text(train).addClass("ui-li-desc");
    $("<div></div>").appendTo($link).text("Depart ").append(makeTime(depart, delay));
    $("<div></div>").appendTo($link).text("@ " + from);
    $("<div></div>").appendTo($link).text("Arrive ").append(makeTime(arrive, delay));
    $("<div></div>").appendTo($link).text("@ " + to);
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
        $("<span></span>").appendTo($span).text(formatTime(scheduled));
        $("<span></span>").appendTo($span).text(" (" + delay + ")");
    }
    return $span;
}

function matchNames(str)
{
    var strLower = str && str.toLowerCase();
    return _.filter(m_stop_names, function (value)
    {
        return (strLower === value.substring(0, strLower.length).toLowerCase());
    });
}

function parseTime(str)
{
    if ((/^\s*([0-9]+):([0-9]+)((:([0-9]+))|(\s*(AM|PM)))\s*$/i).test(str))
    {
        var hours = 0|RegExp.$1
        ,   minutes = 0|RegExp.$2
        ,   seconds = 0|RegExp.$4
        ,   ampm = RegExp.$7.toUpperCase()
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
        now.setSeconds(seconds);
        now.setMilliseconds(0);
    }
    return now;
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
            var matches = matchNames(text);
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

    $("#search").on("pagebeforeshow", function ()
    {
        $("#stopfrom input").val("");
        $("#stopto input").val("");
        $("#stopfrom ul,#stopto ul")
            .empty()
            .listview("refresh")
            .trigger("updatelayout")
            ;
        updateRecent();
    });
    $("#search form").on("submit", findRoute);
    $("#find").click(findRoute);
});

$(document).on("pageinit", "#routes", function()
{
    function load(data)
    {
        $.mobile.loading("hide");
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
                .text(formatTime(data[i].orig_departure_time) + " - " + formatTime(data[i].term_arrival_time || data[i].orig_arrival_time))
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
            .listview("refresh")
            .trigger("updatelayout")
            ;
    });

    $("#routes").on("pageshow", function ()
    {
        if ($("#routes-list li").length)
        {
            // leave it
        }
        else if (m_from && m_to)
        {
            $.mobile.loading("show");
            var param = $.param({ req1: m_from, req2: m_to });
            if (window._gaq)
            {
                _gaq.push(["_trackEvent", "API", "NextToArrive", param]);
            }
            $.ajax("http://www3.septa.org/hackathon/NextToArrive/",
            {
                data: param,
                dataType: "jsonp",
                error: function ()
                {
                    $.mobile.loading("hide");
                    alert("There was a problem contacting SEPTA.");
                },
                success: load
            });
        }
        else
        {
            setTimeout(function ()
            {
                $.mobile.changePage("#search");
            },0);
        }
    });
});

$(document).on("pageinit", "#detail", function()
{
    function load(data)
    {
        $.mobile.loading("hide");
        var $list = $("#detail-list");
        $list.empty();
        if (!data || !data.length)
        {
            alert("No train found?!");
            return;
        }
        var line = "-";
        for (var i = 0; i < data.length; i++)
        {
            if (!data[i] || !m_stops[data[i].station])
            {
                continue;
            }
            for (var j = i; j < data.length; j++)
            {
                if (!data[j] || !m_stops[data[j].station] || !m_stops[data[j].station].r)
                {
                    continue;
                }
                var newLine = m_stops[data[j].station].r;
                if (line === newLine)
                {
                    break;
                }
                line = newLine;
                var $head = $("<li></li>")
                    .jqmData("role", "list-divider")
                    .jqmData("theme", "c")
                    .text(m_routes[newLine] + " " + m_train)
                    .appendTo($list)
                    ;
                 break;
            }
            var $item = $("<li></li>").appendTo($list).jqmData("theme", "c");
            if (data[i].station === m_from || data[i].station === m_to || data[i].station === m_connection)
            {
                $item
                    .jqmData("role", "list-divider")
                    .jqmData("theme", "a")
                    ;
            }
            var $div = $("<div></div>").appendTo($item);
            if (data[i].sched_tm === data[i].act_tm || data[i].sched_tm === data[i].est_tm)
            {
                $div.text(formatTime(data[i].sched_tm));
            }
            else
            {
                $("<strike></strike>").appendTo($div).text(formatTime(data[i].sched_tm));
                $div.append(" ");
                var t = parseTime(data[i].act_tm);
                if (t)
                {
                    $div.append(formatTime(t));
                }
                else
                {
                    $("<i></i>").appendTo($div).text(formatTime(data[i].est_tm));
                }
            }
            $("<div></div>").appendTo($item).text("@ " + (m_stops[data[i].station].alt || data[i].station));
        }
        $list.listview("refresh");
        $list.trigger("updatelayout");

        if (window.localStorage && window.JSON)
        {
            localStorage.setItem("train", m_train);
        }
    };

    $("#detail").on("pagebeforeshow", function ()
    {
        $("#detail-list")
            .listview("refresh")
            .trigger("updatelayout")
            ;
    });

    $("#detail").on("pageshow", function ()
    {
        if ($("#detail-list li").length)
        {
            // leave it
        }
        else if (m_train)
        {
            $.mobile.loading("show");
            var param = $.param({ req1: m_train });
            if (window._gaq)
            {
                _gaq.push(["_trackEvent", "API", "RRSchedules", param]);
            }
            $.ajax("http://www3.septa.org/hackathon/RRSchedules/",
            {
                data: param,
                dataType: "jsonp",
                error: function ()
                {
                    $.mobile.loading("hide");
                    alert("There was a problem contacting SEPTA.");
                },
                success: load
            });
        }
        else
        {
            setTimeout(function ()
            {
                $.mobile.changePage("#routes");
            },0);
        }
    });
});

$(document).on("pageshow", function ()
{
    if (window._gaq && $.mobile.activePage && $.mobile.activePage[0])
    {
        _gaq.push(["_trackEvent", "UI", "pageshow", $.mobile.activePage[0].id]);
    }
});

})();

