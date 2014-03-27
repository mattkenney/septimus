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
        "30th Street Station":{"id":90004,"r":"c"},
        "49th St":{"id":90314,"r":"med"},
        "Airport Terminal A":{"id":90404,"r":"apt"},
        "Airport Terminal B":{"id":90403,"r":"apt"},
        "Airport Terminal C-D":{"id":90402,"r":"apt"},
        "Airport Terminal E-F":{"id":90401,"r":"apt"},
        "Allegheny":{"id":90208,"r":"nor"},
        "Allen Lane":{"id":90804,"r":"chw"},
        "Ambler":{"id":90526,"r":"landdoy"},
        "Angora":{"id":90313,"r":"med"},
        "Ardmore":{"id":90518,"r":"pao"},
        "Ardsley":{"id":90412,"r":"warm"},
        "Bala":{"id":90002,"r":"cyn"},
        "Berwyn":{"id":90508,"r":"pao"},
        "Bethayres":{"id":90318,"r":"wtren"},
        "Bridesburg":{"id":90710,"r":"trent"},
        "Bristol":{"id":90703,"r":"trent"},
        "Bryn Mawr":{"id":90516,"r":"pao"},
        "Carpenter":{"id":90805,"r":"chw"},
        "Chalfont":{"id":90535,"r":"landdoy"},
        "Chelten Avenue":{"id":90808,"r":"chw"},
        "Cheltenham":{"id":90813,"r":"fxc"},
        "Chester TC":{"id":90207,"r":"wilm"},
        "Chestnut Hill East":{"id":90720,"r":"che"},
        "Chestnut Hill West":{"id":90801,"r":"chw"},
        "Churchmans Crossing":{"id":00000,"r":"wilm"},
        "Claymont":{"id":90204,"r":"wilm"},
        "Clifton-Aldan":{"id":90309,"r":"med"},
        "Colmar":{"id":90533,"r":"landdoy"},
        "Conshohocken":{"id":90225,"r":"nor"},
        "Cornwells Heights":{"id":90706,"r":"trent"},
        "Crestmont":{"id":90414,"r":"warm"},
        "Croydon":{"id":90704,"r":"trent"},
        "Crum Lynne":{"id":90209,"r":"wilm"},
        "Curtis Park":{"id":90216,"r":"wilm"},
        "Cynwyd":{"id":90001,"r":"cyn"},
        "Darby":{"id":90217,"r":"wilm"},
        "Daylesford":{"id":90507,"r":"pao"},
        "Delaware Valley College":{"id":90537,"r":"landdoy"},
        "Devon":{"id":90509,"r":"pao"},
        "Downingtown":{"id":90502,"r":"pao"},
        "Doylestown":{"id":90538,"r":"landdoy"},
        "East Falls":{"id":90219,"r":"nor"},
        "Eastwick Station":{"id":90405,"r":"apt"},
        "Eddington":{"id":90705,"r":"trent"},
        "Eddystone":{"id":90208,"r":"wilm"},
        "Elkins Park":{"id":90409},
        "Elm St":{"id":90228,"r":"nor"},
        "Elwyn Station":{"id":90301,"r":"med"},
        "Exton":{"id":90504,"r":"pao"},
        "Fern Rock TC":{"id":90407},
        "Fernwood":{"id":90312,"r":"med"},
        "Folcroft":{"id":90214,"r":"wilm"},
        "Forest Hills":{"id":90320,"r":"wtren"},
        "Fortuna":{"id":90532,"r":"landdoy"},
        "Fox Chase":{"id":90815,"r":"fxc"},
        "Ft Washington":{"id":90525,"r":"landdoy"},
        "Germantown":{"id":90713,"r":"che"},
        "Gladstone":{"id":90310,"r":"med"},
        "Glenolden":{"id":90213,"r":"wilm"},
        "Glenside":{"id":90411},
        "Gravers":{"id":90719,"r":"che"},
        "Gwynedd Valley":{"id":90528,"r":"landdoy"},
        "Hatboro":{"id":90416,"r":"warm"},
        "Haverford":{"id":90517,"r":"pao"},
        "Highland Ave":{"id":90206,"r":"wilm"},
        "Highland":{"id":90802,"r":"chw"},
        "Holmesburg Jct":{"id":90708,"r":"trent"},
        "Ivy Ridge":{"id":90222,"r":"nor"},
        "Jenkintown-Wyncote":{"id":90410},
        "Langhorne":{"id":90324,"r":"wtren"},
        "Lansdale":{"id":90531,"r":"landdoy"},
        "Lansdowne":{"id":90311,"r":"med"},
        "Lawndale":{"id":90812,"r":"fxc"},
        "Levittown":{"id":90702,"r":"trent"},
        "Link Belt":{"id":90534,"r":"landdoy"},
        "Main St":{"id":90227,"r":"nor"},
        "Malvern":{"id":90505,"r":"pao"},
        "Manayunk":{"id":90221,"r":"nor"},
        "Marcus Hook":{"id":90205,"r":"wilm"},
        "Market East":{"id":90006,"r":"c"},
        "Meadowbrook":{"id":90317,"r":"wtren"},
        "Media":{"id":90302,"r":"med"},
        "Melrose Park":{"id":90408},
        "Merion":{"id":90521,"r":"pao"},
        "Miquon":{"id":90223,"r":"nor"},
        "Morton":{"id":90306,"r":"med"},
        "Moylan-Rose Valley":{"id":90303,"r":"med"},
        "Mt Airy":{"id":90717,"r":"che"},
        "Narberth":{"id":90520,"r":"pao"},
        "Neshaminy Falls":{"id":90323,"r":"wtren"},
        "New Britain":{"id":90536,"r":"landdoy"},
        "Newark":{"id":90201,"r":"wilm"},
        "Noble":{"id":00000,"r":"wtren"},
        "Norristown TC":{"id":90226,"r":"nor"},
        "North Broad St":{"id":90008},
        "North Hills":{"id":90523,"r":"landdoy"},
        "North Philadelphia":{"id":90711,"r":"trent"},
        "North Wales":{"id":90529,"r":"landdoy"},
        "Norwood":{"id":90212,"r":"wilm"},
        "Olney":{"id":90811,"r":"fxc"},
        "Oreland":{"id":90524,"r":"landdoy"},
        "Overbrook":{"id":90522,"r":"pao"},
        "Paoli":{"id":90506,"r":"pao"},
        "Penllyn":{"id":90527,"r":"landdoy"},
        "Pennbrook":{"id":90530,"r":"landdoy"},
        "Philmont":{"id":90319,"r":"wtren"},
        "Primos":{"id":90308,"r":"med"},
        "Prospect Park":{"id":90211,"r":"wilm"},
        "Queen Lane":{"id":90809,"r":"chw"},
        "Radnor":{"id":90513,"r":"pao"},
        "Ridley Park":{"id":90210,"r":"wilm"},
        "Rosemont":{"id":90515,"r":"pao"},
        "Roslyn":{"id":90413,"r":"warm"},
        "Rydal":{"id":90316,"r":"wtren"},
        "Ryers":{"id":90814,"r":"fxc"},
        "Secane":{"id":90307,"r":"med"},
        "Sedgwick":{"id":00000,"r":"che"},
        "Sharon Hill":{"id":90215,"r":"wilm"},
        "Somerton":{"id":90321,"r":"wtren"},
        "Spring Mill":{"id":90224,"r":"nor"},
        "St. Davids":{"id":90512,"r":"pao"},
        "St. Martins":{"id":90803,"r":"chw"},
        "Stenton":{"id":90715,"r":"che"},
        "Strafford":{"id":90510,"r":"pao"},
        "Suburban Station":{"id":90005,"r":"c"},
        "Swarthmore":{"id":90305,"r":"med"},
        "Tacony":{"id":90709,"r":"trent"},
        "Temple U":{"id":90007},
        "Thorndale":{"id":90501,"r":"pao"},
        "Torresdale":{"id":90707,"r":"trent"},
        "Trenton":{"id":90701,"r":"trent"},
        "Trevose":{"id":90322,"r":"wtren"},
        "Tulpehocken":{"id":90807,"r":"chw"},
        "University City":{"id":90406},
        "Upsal":{"id":90806,"r":"chw"},
        "Villanova":{"id":90514,"r":"pao"},
        "Wallingford":{"id":90304,"r":"med"},
        "Warminster":{"id":90417,"r":"warm"},
        "Washington Lane":{"id":90714,"r":"che"},
        "Wayne Jct":{"id":90009},
        "Wayne-A":{"id":90511,"r":"pao","alt":"Wayne Station"},
        "West Trenton":{"id":90701,"r":"wtren"},
        "Whitford":{"id":90503,"r":"pao"},
        "Willow Grove":{"id":90514,"r":"warm"},
        "Wilmington":{"id":90203,"r":"wilm"},
        "Wissahickon":{"id":90220,"r":"nor"},
        "Wister":{"id":90712,"r":"che"},
        "Woodbourne":{"id":90325,"r":"wtren"},
        "Wyndmoor":{"id":90718,"r":"che"},
        "Wynnefield Avenue":{"id":90003,"r":"cyn"},
        "Wynnewood":{"id":90519,"r":"pao"},
        "Yardley":{"id":90326,"r":"wtren"}
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
    ,   m_alias =
    {
        "30th St":"30th Street Station",
        "Airport":"Airport Terminal E-F",
        "Chestnut H East":"Chestnut Hill East",
        "Chestnut H West":"Chestnut Hill West",
        "Norristown":"Norristown TC",
        "West Trenton Yard":"West Trenton"
    }
    ,   m_stop_names = _.map(m_stops, function (value, key) { return (value.alt || key); })
    ,   m_route_names = _.invert(m_routes)
    ,   m_recent = {}
    ,   m_from = ""
    ,   m_to = ""
    ,   m_train = ""
    ,   m_connection = ""
    ,   m_station = ""
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
    m_station = localStorage.getItem("station") || "";
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

function makeStationListener(station)
{
    return function ()
    {
        m_station = station.station
        $("#station-list").empty();
        $.mobile.changePage("#station");
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
    var result = moment("20000101 " + str, "YYYYMMDDhh:mma", true);
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
            .attr("data-icon", "delete")
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
            var param = $.param({ req1: key });
            if (window._gaq)
            {
                // track API usage
                _gaq.push(["_trackEvent", "API", "Alerts", param]);
            }
            $.ajax("http://www3.septa.org/hackathon/Alerts/get_alert_data.php",
            {
                data: param,
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
                .attr("data-role", "list-divider")
                .attr("data-theme", "b")
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
                    .attr("data-theme", "b")
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
        var line = "-"
        ,   $start
        ;
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
                    .attr("data-role", "list-divider")
                    .attr("data-theme", "b")
                    .text(m_routes[newLine] + " " + m_train)
                    .appendTo($list)
                    ;
            }
            var $item = $("<li></li>")
                .appendTo($list)
                ;
            // change the theme for the "from" and "to" stations
            if (data[i].station === m_from || data[i].station === m_to || data[i].station === m_connection)
            {
                $item.attr("data-theme", "c");
                if (!$start)
                {
                    $start = $item;
                }
            }
//            $item = $("<a></a>")
//                .attr("href", "javascript:void(0)")
//                .click(makeStationListener(data[i]))
//                .appendTo($item)
//                ;
            // now add the station details
            var $div = $("<span></span>")
                .addClass("block")
                .appendTo($item)
                ;
            if (data[i].sched_tm === data[i].act_tm || data[i].sched_tm === data[i].est_tm)
            {
                $div.text(formatTime(data[i].sched_tm));
            }
            else
            {
                // not on schedule, so strike the schedule time
                $("<strike></strike>")
                    .text(formatTime(data[i].sched_tm))
                    .appendTo($div)
                    ;
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
            $("<span></span>")
                .addClass("block")
                .text("@ " + (m_stops[data[i].station].alt || data[i].station))
                .appendTo($item)
                ;
        }
        $list.listview("refresh");
        $list.trigger("updatelayout");

        // remember the last train viewed
        if (window.localStorage && window.JSON)
        {
            localStorage.setItem("train", m_train);
            localStorage.setItem("connection", m_connection);
        }

        // scroll to the boarding station
        $start = $start && $start.prev();
        if ($start && $start[0] && $start.prev()[0])
        {
            setTimeout(function ()
            {
                $start[0].scrollIntoView();
            }, 200);
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
/*
$(document).on("pageinit", "#station", function()
{
    // fill the route detail list
    function load(data)
    {
        $.mobile.loading("hide");
        var $list = $("#station-list");
        $list.empty();
        if (!data)
        {
            alert("No trains found?!");
            return;
        }

        var memo = [];
        _.reduce(data, function (memo, data)
        {
            _.reduce(data, function (memo, data)
            {
                _.reduce(data, function (memo, data)
                {
                    _.reduce(data, function (memo, data)
                    {
                        memo.push(data);
                        return memo;
                    }, memo);
                    return memo;
                }, memo);
                return memo;
            }, memo);
            return memo;
        }, memo);

        for (var i = 0; i < memo.length; i++)
        {
            memo[i].next_station = m_alias[memo[i].next_station] || memo[i].next_station;
            memo[i].origin = m_alias[memo[i].origin] || memo[i].origin;
            memo[i].destination = m_alias[memo[i].destination] || memo[i].destination;

            var route = m_stops[m_station].r;
            if (!route || route === 'c') route = m_stops[memo[i].next_station] && m_stops[memo[i].next_station].r
            if (!route || route === 'c') route = m_stops[memo[i].origin] && m_stops[memo[i].origin].r
            if (!route || route === 'c') route = m_stops[memo[i].destination] && m_stops[memo[i].destination].r

            memo[i].name = m_routes[route] + ' ' + memo[i].train_id;
        }

        $list.listview("refresh");
        $list.trigger("updatelayout");

        // remember the last station viewed
        if (window.localStorage && window.JSON)
        {
            localStorage.setItem("station", m_station);
        }
    }

    $("#station").on("pagebeforeshow", function ()
    {
        // update the list in case it's been cleared
        $("#station-list")
            .listview("refresh")
            .trigger("updatelayout")
            ;
    });

    $("#station").on("pageshow", function ()
    {
        if ($("#station-list li").length)
        {
            // already have list content, so just leave it
        }
        else if (m_station)
        {
            $.mobile.loading("show");
            var param = m_stops[m_station] && m_stops[m_station].id || "00000";
            if (window._gaq)
            {
                // track API usage
                _gaq.push(["_trackEvent", "API", "Arrivals", param]);
            }
            $.ajax("/hackathon/Arrivals/" + param + "/",
            {
                dataType: "json",
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
            // don't have a station so go back to route options
            setTimeout(function ()
            {
                $.mobile.changePage("#detain");
            },0);
        }
    });
});
*/
$(document).on("pageshow", function ()
{
    if (window._gaq && $.mobile.activePage && $.mobile.activePage[0])
    {
        // track pageshows
        _gaq.push(["_trackEvent", "UI", "pageshow", $.mobile.activePage[0].id]);
    }
});

})();
