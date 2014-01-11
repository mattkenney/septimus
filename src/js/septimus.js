/*!
@copyright Copyright 2013, 2014 Matt Kenney
@license http://www.gnu.org/licenses/agpl.txt
@source https://github.com/mattkenney/septimus
*/
/*/
    This file is part of Septimus.

    Septimus is free software: you can redistribute it and/or modify it under
    the terms of the GNU Affero General Public License as published by the Free
    Software Foundation, either version 3 of the License, or (at your option)
    any later version.

    Septimus is distributed in the hope that it will be useful, but WITHOUT ANY
    WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for
    more details.

    You should have received a copy of the GNU Affero General Public License
    along with Septimus.  If not, see <http://www.gnu.org/licenses/>.
/*/

(function(){

    // stops
    //     r: route
    //     alt: search&display name if different
var m_stops =
    {
        "30th Street Station":{"r":"c"},
        "49th St":{"r":"med"},
        "Airport Terminal A":{"r":"apt"},
        "Airport Terminal B":{"r":"apt"},
        "Airport Terminal C-D":{"r":"apt"},
        "Airport Terminal E-F":{"r":"apt"},
        "Allegheny":{"r":"nor"},
        "Allen Lane":{"r":"chw"},
        "Ambler":{"r":"landdoy"},
        "Angora":{"r":"med"},
        "Ardmore":{"r":"pao"},
        "Ardsley":{"r":"warm"},
        "Bala":{"r":"cyn"},
        "Berwyn":{"r":"pao"},
        "Bethayres":{"r":"wtren"},
        "Bridesburg":{"r":"trent"},
        "Bristol":{"r":"trent"},
        "Bryn Mawr":{"r":"pao"},
        "Carpenter":{"r":"chw"},
        "Chalfont":{"r":"landdoy"},
        "Chelten Avenue":{"r":"chw"},
        "Cheltenham":{"r":"fxc"},
        "Chester TC":{"r":"wilm"},
        "Chestnut Hill East":{"r":"che"},
        "Chestnut Hill West":{"r":"chw"},
        "Churchmans Crossing":{"r":"wilm"},
        "Claymont":{"r":"wilm"},
        "Clifton-Aldan":{"r":"med"},
        "Colmar":{"r":"landdoy"},
        "Conshohocken":{"r":"nor"},
        "Cornwells Heights":{"r":"trent"},
        "Crestmont":{"r":"warm"},
        "Croydon":{"r":"trent"},
        "Crum Lynne":{"r":"wilm"},
        "Curtis Park":{"r":"wilm"},
        "Cynwyd":{"r":"cyn"},
        "Darby":{"r":"wilm"},
        "Daylesford":{"r":"pao"},
        "Delaware Valley College":{"r":"landdoy"},
        "Devon":{"r":"pao"},
        "Downingtown":{"r":"pao"},
        "Doylestown":{"r":"landdoy"},
        "East Falls":{"r":"nor"},
        "Eastwick Station":{"r":"apt"},
        "Eddington":{"r":"trent"},
        "Eddystone":{"r":"wilm"},
        "Elkins Park":{},
        "Elm St":{"r":"nor"},
        "Elwyn Station":{"r":"med"},
        "Exton":{"r":"pao"},
        "Fern Rock TC":{},
        "Fernwood":{"r":"med"},
        "Folcroft":{"r":"wilm"},
        "Forest Hills":{"r":"wtren"},
        "Fortuna":{"r":"landdoy"},
        "Fox Chase":{"r":"fxc"},
        "Ft Washington":{"r":"landdoy"},
        "Germantown":{"r":"che"},
        "Gladstone":{"r":"med"},
        "Glenolden":{"r":"wilm"},
        "Glenside":{},
        "Gravers":{"r":"che"},
        "Gwynedd Valley":{"r":"landdoy"},
        "Hatboro":{"r":"warm"},
        "Haverford":{"r":"pao"},
        "Highland Ave":{"r":"wilm"},
        "Highland":{"r":"chw"},
        "Holmesburg Jct":{"r":"trent"},
        "Ivy Ridge":{"r":"nor"},
        "Jenkintown-Wyncote":{},
        "Langhorne":{"r":"wtren"},
        "Lansdale":{"r":"landdoy"},
        "Lansdowne":{"r":"med"},
        "Lawndale":{"r":"fxc"},
        "Levittown":{"r":"trent"},
        "Link Belt":{"r":"landdoy"},
        "Main St":{"r":"nor"},
        "Malvern":{"r":"pao"},
        "Manayunk":{"r":"nor"},
        "Marcus Hook":{"r":"wilm"},
        "Market East":{"r":"c"},
        "Meadowbrook":{"r":"wtren"},
        "Media":{"r":"med"},
        "Melrose Park":{},
        "Merion":{"r":"pao"},
        "Miquon":{"r":"nor"},
        "Morton":{"r":"med"},
        "Moylan-Rose Valley":{"r":"med"},
        "Mt Airy":{"r":"che"},
        "Narberth":{"r":"pao"},
        "Neshaminy Falls":{"r":"wtren"},
        "New Britain":{"r":"landdoy"},
        "Newark":{"r":"wilm"},
        "Noble":{"r":"wtren"},
        "Norristown TC":{"r":"nor"},
        "North Broad St":{},
        "North Hills":{"r":"landdoy"},
        "North Philadelphia":{"r":"trent"},
        "North Wales":{"r":"landdoy"},
        "Norwood":{"r":"wilm"},
        "Olney":{"r":"fxc"},
        "Oreland":{"r":"landdoy"},
        "Overbrook":{"r":"pao"},
        "Paoli":{"r":"pao"},
        "Penllyn":{"r":"landdoy"},
        "Pennbrook":{"r":"landdoy"},
        "Philmont":{"r":"wtren"},
        "Primos":{"r":"med"},
        "Prospect Park":{"r":"wilm"},
        "Queen Lane":{"r":"chw"},
        "Radnor":{"r":"pao"},
        "Ridley Park":{"r":"wilm"},
        "Rosemont":{"r":"pao"},
        "Roslyn":{"r":"warm"},
        "Rydal":{"r":"wtren"},
        "Ryers":{"r":"fxc"},
        "Secane":{"r":"med"},
        "Sedgwick":{"r":"che"},
        "Sharon Hill":{"r":"wilm"},
        "Somerton":{"r":"wtren"},
        "Spring Mill":{"r":"nor"},
        "St. Davids":{"r":"pao"},
        "St. Martins":{"r":"chw"},
        "Stenton":{"r":"che"},
        "Strafford":{"r":"pao"},
        "Suburban Station":{"r":"c"},
        "Swarthmore":{"r":"med"},
        "Tacony":{"r":"trent"},
        "Temple U":{},
        "Thorndale":{"r":"pao"},
        "Torresdale":{"r":"trent"},
        "Trenton":{"r":"trent"},
        "Trevose":{"r":"wtren"},
        "Tulpehocken":{"r":"chw"},
        "University City":{},
        "Upsal":{"r":"chw"},
        "Villanova":{"r":"pao"},
        "Wallingford":{"r":"med"},
        "Warminster":{"r":"warm"},
        "Washington Lane":{"r":"che"},
        "Wayne Jct":{},
        "Wayne-A":{"r":"pao","alt":"Wayne Station"},
        "West Trenton":{"r":"wtren"},
        "Whitford":{"r":"pao"},
        "Willow Grove":{"r":"warm"},
        "Wilmington":{"r":"wilm"},
        "Wissahickon":{"r":"nor"},
        "Wister":{"r":"che"},
        "Woodbourne":{"r":"wtren"},
        "Wyndmoor":{"r":"che"},
        "Wynnefield Avenue":{"r":"cyn"},
        "Wynnewood":{"r":"pao"},
        "Yardley":{"r":"wtren"}
    }
    // route names
    ,   m_routes =
    {
        "apt":"Airport",
        "che":"Chestnut Hill East",
        "chw":"Chestnut Hill West",
        "cyn":"Cynwyd",
        "fxc":"Fox Chase",
        "landdoy":"Lansdale/Doylestown",
        "med":"Media/Elwyn",
        "nor":"Manayunk/Norristown",
        "pao":"Paoli/Thorndale",
        "trent":"Trenton",
        "warm":"Warminster",
        "wilm":"Wilmington/Newark",
        "wtren":"West Trenton"
    }
    ,   m_stop_names = _.map(m_stops, function (value, key) { return (value.alt || key); })
    ,   m_route_names = _.invert(m_routes)
    ,   m_recent = {}
    ,   m_from = ""
    ,   m_to = ""
    ,   m_train = ""
    ,   m_connection = ""
    ;

m_stop_names.sort();

// load state if localStorage and JSON are available
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
    $("#routes-list").empty();
    $.mobile.changePage("#routes");
}

function formatTime(time)
{
    var result = time;
    if (!moment.isMoment(result))
    {
        result = parseTime(time) || time;
    }
    if (moment.isMoment(result))
    {
        result = result.format("h:mm A");
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
    var result = 'rr_route_' + m_route_names[data[phase + "_line"]]
    ,   train = data[phase + "_line"] + " " + data[phase + "_train"]
    ,   depart = data[phase + "_departure_time"] || data[phase + "_depart_time"]
    ,   arrive = data[phase + "_arrival_time"]
    ,   delay = data[phase + "_delay"]
    ,   $item = $("<li></li>")
            .jqmData("theme", "c")
            .addClass(result)
            .appendTo($list)
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

    return result;
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
        if (moment.isMoment(estimated))
        {
            estimated.add("m", delta);
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

// match on station name prefix
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
    var result = moment("20000101 " + str, "YYYYMMDDhh:mma");
    return (result.isValid() ? result : undefined);
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
    function checkAlerts(lines)
    {
        _.each(lines, function (value, key)
        {
            $.ajax("http://www3.septa.org/hackathon/Alerts/get_alert_data.php",
            {
                data: 'req1=' + encodeURIComponent(key),
                dataType: "jsonp",
                success: loadAlerts
            });
        });
    }

    // fill the route options list
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
        var lines = {};
        for (var i = 0; i < data.length; i++)
        {
            var $head = $("<li></li>")
                .jqmData("role", "list-divider")
                .jqmData("theme", "c")
                .text(formatTime(data[i].orig_departure_time) + " - " + formatTime(data[i].term_arrival_time || data[i].orig_arrival_time))
                .appendTo($list)
                ;
                lines[makeRouteItem($list, m_from, data[i].Connection || m_to, data[i], "orig")] = true;
            if (data[i].isdirect === "true")
            {
                continue;
            }
            $("<span></span>")
                .text(" - 1 connection")
                .appendTo($head)
                ;
            lines[makeRouteItem($list, data[i].Connection, m_to, data[i], "term")] = true;
        }
        $list.listview("refresh");
        $list.trigger("updatelayout");

        checkAlerts(lines);

        // remember the current from/to, and up to ten previous searches
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

    function loadAlerts(data)
    {
        for (var i = 0; i < data.length; i++)
        {
            if (data[i].current_message && (/^rr_route_/).test(data[i].route_id))
            {
                $("<li></li>")
                    .html(data[i].current_message)
                    .jqmData("theme", "d")
                    .insertBefore($('.'+ data[i].route_id))
                    ;
            }
        }
        $('#routes-list')
            .listview("refresh")
            .trigger("updatelayout")
            ;
    }

    $("#routes").on("pagebeforeshow", function ()
    {
        // update the list in case it's been cleared
        $("#routes-list")
            .listview("refresh")
            .trigger("updatelayout")
            ;
    });

    $("#routes").on("pageshow", function ()
    {
        if ($("#routes-list li").length)
        {
            // already have list content, so just leave it
        }
        else if (m_from && m_to)
        {
            $.mobile.loading("show");
            var param = $.param({ req1: m_from, req2: m_to });
            if (window._gaq)
            {
                // track API usage
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
            // we don't have from/to, so go back to the search page
            setTimeout(function ()
            {
                $.mobile.changePage("#search");
            },0);
        }
    });
});

$(document).on("pageinit", "#detail", function()
{
    // fill the route detail list
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
            // Insert a train line list-divider when the train line changes.
            // We may have to skip ahead in the data if the current station is
            // used by more than one line.
            for (var j = i; j < data.length; j++)
            {
                if (!data[j] || !m_stops[data[j].station])
                {
                    continue;
                }
                if (!m_stops[data[j].station].r || m_stops[data[j].station].r === "c")
                {
                    continue;
                }
                var newLine = m_stops[data[j].station].r;
                break;
            }
            if (line === "-" || (m_stops[data[i].station].r && newLine && line !== newLine))
            {
                line = newLine;
                var $head = $("<li></li>")
                    .jqmData("role", "list-divider")
                    .jqmData("theme", "c")
                    .text(m_routes[newLine] + " " + m_train)
                    .appendTo($list)
                    ;
            }
            var $item = $("<li></li>").appendTo($list).jqmData("theme", "c");
            // change the theme for the "from" and "to" stations
            if (data[i].station === m_from || data[i].station === m_to || data[i].station === m_connection)
            {
                $item
                    .jqmData("role", "list-divider")
                    .jqmData("theme", "a")
                    ;
            }
            // now add the station details
            var $div = $("<div></div>").appendTo($item);
            if (data[i].sched_tm === data[i].act_tm || data[i].sched_tm === data[i].est_tm)
            {
                $div.text(formatTime(data[i].sched_tm));
            }
            else
            {
                // not on schedule, so strike the schedule time
                $("<strike></strike>").appendTo($div).text(formatTime(data[i].sched_tm));
                $div.append(" ");
                var t = parseTime(data[i].act_tm);
                if (t)
                {
                    $div.append(formatTime(t));
                }
                else
                {
                    // if the time is estimated, then show it in italic
                    $("<i></i>").appendTo($div).text(formatTime(data[i].est_tm));
                }
            }
            $("<div></div>").appendTo($item).text("@ " + (m_stops[data[i].station].alt || data[i].station));
        }
        $list.listview("refresh");
        $list.trigger("updatelayout");

        // remember the last train viewed
        if (window.localStorage && window.JSON)
        {
            localStorage.setItem("train", m_train);
        }
    }

    $("#detail").on("pagebeforeshow", function ()
    {
        // update the list in case it's been cleared
        $("#detail-list")
            .listview("refresh")
            .trigger("updatelayout")
            ;
    });

    $("#detail").on("pageshow", function ()
    {
        if ($("#detail-list li").length)
        {
            // already have list content, so just leave it
        }
        else if (m_train)
        {
            $.mobile.loading("show");
            var param = $.param({ req1: m_train });
            if (window._gaq)
            {
                // track API usage
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
            // don't have a train so go back to route options
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
        // track pageshows
        _gaq.push(["_trackEvent", "UI", "pageshow", $.mobile.activePage[0].id]);
    }
});

})();

