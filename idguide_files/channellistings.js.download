
/*
 * Created on : Jun 7, 2019, 4:27:17 PM
 * Author: Tran Trong Thang
 * Email: trantrongthang1207@gmail.com
 * Skype: trantrongthang1207
 */

$channellist = tv_core_js.channellist;
$arrChannelNameRoot = $arrChannelName = tv_core_js.arrChannelName;

$channelTvpassport = tv_core_js.channelTvpassport;
$arrChannelTvpassportNameRoot = $arrChannelTvpassportName = tv_core_js.channelTvpassportName;
function random_item(items)
{

    return items[Math.floor(Math.random() * items.length)];

}

//console.log($channel_source)
jQuery(document).ready(function ($) {
    var aestTime = new Date().toLocaleString("en-US", {timeZone: "America/La_Paz"});
    console.log(aestTime)
    aestTime = new Date(aestTime);
    var $date = aestTime.toLocaleDateString(), $arrDate = $date.split('/');
    var $time = aestTime.toLocaleTimeString();
    var $year = $arrDate[2];
    var $month = $arrDate[0];
    var $day = $arrDate[1];
    var $datestart = tv_core_js.datestart;
    var $url = 'https://mobilelistings.tvguide.com/Listingsweb/ws/rest/airings/80001/start/' + $datestart + '/duration/20160?channelsourceids=' + $channel_source + '|*&formattype=json';

    if ($('.tvshowchannellistings')[0]) {
        var $channel_name = random_item($arrChannelName);
        var $channel_source = $channellist[$channel_name];
        console.log('tvshowchannellistings')
        clearInterval(window.TimeOutAjax);

        TimeOutAjax = setInterval(function () {
            $channel_name = random_item($arrChannelName);
            $channel_source = $channellist[$channel_name];
            $datestart = $datestart - 2 * 60;
            var $url = 'https://mobilelistings.tvguide.com/Listingsweb/ws/rest/airings/80001/start/' + $datestart + '/duration/20160?channelsourceids=' + $channel_source + '|*&formattype=json';
            $.ajax({
                url: $url, //'http://dev.t2ads.com/test.php',
                //dataType: "html",
                success: function (data) {
                    $.ajax({
                        url: tv_core_js.ajax_url,
                        data: {'action': 'channellist', 'channellist': data, 'year': $year, 'month': $month, 'day': $day, 'channel': $channel_name},
                        type: 'POST',
                        success: function (data) {
                            if ($arrChannelName.length > 1) {
                                for (var i = 0; i < $arrChannelName.length; i++) {
                                    if ($arrChannelName[i] === $channel_name) {
                                        $arrChannelName.splice(i, 1);
                                    }
                                }
                            } else {
                                $arrChannelName = $arrChannelNameRoot
                            }
                            var aestTime2 = new Date().toLocaleString("en-US", {timeZone: "America/La_Paz"});
                            console.log(aestTime2)
                        }
                    })
                }
            })
        }, 300000);

        var $channelCur = $('.timetable-list').data('channel');
        var $channelSourceCur = $('.timetable-list').data('channel-source');
        var $dataChannel = $('.timetable-list .timetable-day').length;
        if ($dataChannel == 0) {
            var $url = 'https://mobilelistings.tvguide.com/Listingsweb/ws/rest/airings/80001/start/' + tv_core_js.datestart + '/duration/20160?channelsourceids=' + $channelSourceCur + '|*&formattype=json';
            //console.log('dd', tv_core_js.datestart, $url)
            //console.log($arrChannelName)
            $.ajax({
                url: $url, //'http://dev.t2ads.com/test.php',
                //dataType: "html",
                success: function (data) {
                    $.ajax({
                        url: tv_core_js.ajax_url,
                        data: {'action': 'loadchannellist', 'channellist': data, 'year': $year, 'month': $month, 'day': $day, 'channel': $channelCur},
                        type: 'POST',
                        dataType: 'html',
                        success: function (data) {
                            //console.log($arrChannelName)
                            if ($arrChannelName.length > 1) {
                                for (var i = 0; i < $arrChannelName.length; i++) {
                                    if ($arrChannelName[i] === $channel_name) {
                                        $arrChannelName.splice(i, 1);
                                    }
                                }
                            } else {
                                $arrChannelName = $arrChannelNameRoot
                            }
                            $('.timetable-list').html(data);
                        }
                    })
                }
            })
        }
    }

    if ($('.tvshowchanneltvpassport')[0]) {
        var $channel_name = random_item($arrChannelTvpassportName);
        var $channel_source = $channelTvpassport[$channel_name];
        console.log('tvshowchanneltvpassport')

        TimeOutAjax = setInterval(function () {
            $channel_name = random_item($arrChannelName);
            $channel_source = $channellist[$channel_name];
            $.ajax({
                url: 'https://api.getproxylist.com/proxy?country=US',
                dataType: "json",
                success: function (data) {
                    console.log(data.ip, data.port)
                    $.ajax({
                        url: tv_core_js.ajax_url,
                        data: {'action': 'loadchanneltvpassport', 'ip': data.ip, 'post': data.port, 'year': $year, 'month': $month, 'day': $day, 'channel': $channelCur},
                        type: 'POST',
                        dataType: 'html',
                        success: function (data) {
                            if ($.trim(data)) {
                                if ($arrChannelName.length > 1) {
                                    for (var i = 0; i < $arrChannelName.length; i++) {
                                        if ($arrChannelName[i] === $channel_name) {
                                            $arrChannelName.splice(i, 1);
                                        }
                                    }
                                } else {
                                    $arrChannelName = $arrChannelNameRoot
                                }
                            }
                        }
                    })
                }
            })
        }, 300000);


        var $channelCur = $('.timetable-list').data('channel');
        var $channelSourceCur = $('.timetable-list').data('channel-source');
        var $dataChannel = $('.timetable-list .timetable-day').length;
        if ($dataChannel == 0) {
            $.ajax({
                url: 'https://api.getproxylist.com/proxy?country=US',
                dataType: "json",
                success: function (data) {
                    console.log(data.ip, data.port)
                    $.ajax({
                        url: tv_core_js.ajax_url,
                        data: {'action': 'loadchanneltvpassport', 'ip': data.ip, 'post': data.port, 'year': $year, 'month': $month, 'day': $day, 'channel': $channelCur},
                        type: 'POST',
                        dataType: 'html',
                        success: function (data) {
                            if ($.trim(data)) {
                                if ($arrChannelName.length > 1) {
                                    for (var i = 0; i < $arrChannelName.length; i++) {
                                        if ($arrChannelName[i] === $channel_name) {
                                            $arrChannelName.splice(i, 1);
                                        }
                                    }
                                } else {
                                    $arrChannelName = $arrChannelNameRoot
                                }
                                $('.timetable-list').html(data);
                            }
                        }
                    })
                }
            })
        }
    }
})

