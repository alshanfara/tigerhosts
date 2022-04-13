var socket=null;
var users = [];
var rooms = [];
var myid = null;
var myroom = null;
var nopm = false;
var updateTypingT = !![];
var isreplydone = null;
var nonot = false;
var islove = ![];
var istalkmicro = 5E3;
var isrecorder = ![];
var istalkromm = ![];
var islost = ![];
var isstopmic;
var bcc = 0;
var isrepl = ![];
var pickedfile = null;
var power = {};
var IsMyTV = "";
var dbcb = ![];
var powers = [];
var spsh;
var emos = [];
var sico = [];
var dro3 = [];
var token = '';
var rbans = [];
var blocked = [];
var bcLike = true;
var lk = null;
var cpend = ![];
var bct=100;
var msgt=150;
var dbcb=0;
var vchat=true; 
var gh=''; 
var ux={};
var lastTypingTime;
var needSort = !![];
var tboxid = null;
var tboxl = 0;
var ucach = {};
var rcach = {};
var typing = ![];
                

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(type) {
 return typeof type;
} : function(obj) {
 return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



function logout() {
    send('logout', {});
    close(500);
}

function sendbc(wfile) {
    if (wfile) {
        pickedfile = null;
        sendfile('d2bc', function() {
            var msg = $(".tboxbc").val();
            $(".tboxbc").val('');

            var link = pickedfile;
            if ((msg == "%0A" || msg == "%0a" || msg == '' || msg == '\n') && (link == '' || link == null)) { return; }

            send('bc', { msg: msg, link: link })
            return;
        });
    } else { pickedfile = null; }
    var msg = $(".tboxbc").val().split('\n').join('');
    $(".tboxbc").val('');

    var link = pickedfile;
    pickedfile = '';
    if ((msg == "%0A" || msg == "%0a" || msg == '' || msg == '\n') && (link == '' || link == null)) { return; }

    send('bc', { msg: msg, link: link })
}
var callstat = 0;
var callid = null;
function call(id) {
    var u2 = getuser(id);
    if (callstat == 0 && wr == null && $(".callnot").length == 0 && u2 != null) {
        callstat = 1;
        callid = id;
        var h = $($('#callnot').html());
        var uh = $($("#uhtml").html());
        uh.find('.u-msg').remove();
        var roomid = 'jh!' + new Date().getTime() + myid + u2.id;
        uh.find('.u-topic').html(u2.topic).css({ color: u2.ucol, "background-color": u2.bg });
        uh.find('.u-pic').css('background-image', 'url("' + u2.pic + '")').css({ width: '24px', height: '24px' });
        h.find('.uzer').append(uh);
        h.addClass('callnot');
        h.attr('callid', roomid);
        h.find('.callaccept').hide();
        h.find('.calldeny').click(function(params) {
            h.remove();
            send('calldeny', { caller: myid, called: id, roomid: roomid });
            if (wr) {
                wr.hangUp();
            }
        });
        $(document.body).append(h);
        updateu(u2.id);
        send('calling', { caller: myid, called: id, roomid: roomid })
        wr = new webrtc(roomid, myid);
    } else {
        alert("فشل الإتصال حاول مره اخرى .")
    }
}
var isIphone = false;
 
function onlines(){
socket.emit('isstates',0);	
}

function puys(){
setTimeout(function(){
socket.emit('isstates',1);	
	puys();
	offline();
},60000 * 5);
}


function offline(){
setTimeout(function(){
socket.emit('isstates',2);	
	offline();
},60000 * 30);
}

function visible(){
socket.emit('isstates',4);	
}

function refr() {
    var r = document.referrer || '';
    if (r.indexOf('http://' + location.hostname) == 0) { return ''; }
    if (r.indexOf('://') != -1) { r = r.replace(/(.*?)\:\/\//g, '').split('/')[0]; }
    return r;
}

function checkupdate() {
    if (needUpdate) { updateusers();
        updaterooms();
        needUpdate = false }
    setTimeout(checkupdate, 2000);
}
let mics;
let profileImage;
let userName;
function load() //d
{
    mics = document.querySelectorAll('.micIcon');
    profileImage = document.getElementById('profileImage');
    userName = document.getElementById('userName');
    lstat('success', ' ');
    isIphone = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
    if (typeof $ == 'undefined' || typeof io == 'undefined') { close(5000); return; }
    if ($('').tab == null) { close(5000); return; }
    if (isIphone) {
        $('img[data-toggle="popover"]').removeClass('nosel');
        fxi();
    }
	puys();
    checkupdate();
    $('#rhtml .utopic').css('margin-left', '6px');
    umsg = $("#umsg").html();
    loadpro();
    loadblocked();

    if ($(window)["width"]() <= 400) {
        $("meta[name=\x27viewport\x27]")["attr"]("content", "\x20user-scalable=0,\x20width=400");
      }
      if ($(window)["width"]() >= 600) {
        $("meta[name=\x27viewport\x27]")["attr"]("content", " user-scalable=0, width=600");
      }
      $("#d2")["click"](function() {
        if (spsh && spsh["css"]("display") == "block") {
          spsh["hide"]();
        }
      });

    $('#tbox').css('background-color', '#AAAAAF');
    $(".rout").hide();
    $(".redit").hide();
    $("#u1").val(decode(getv("u1")));
    $("#u2").val(decode(getv("u2")));
    $("#pass1").val(decode(getv("p1")));
    if (getv("isl") == "yes") {
        $('.nav-tabs a[href="#l2"]').tab('show')
    }
    uhtml = $("#uhtml").html();
    rhtml = $("#rhtml").html();
    phtml = $("#broadcasters")["html"]();
    $('.ae').click(function(params) {
        $('.phide').click();
    })
    var dbg = getUrlParameter('debug') == '1';
    if (dbg) {
        window.onerror = function(errorMsg, url, lineNumber) {
            alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);
        } 
    }

    function oidbg(ev, data) {
        if (dbg == false) { return; }
        if (typeof data == 'object') { data = JSON.stringify(data); }
        alert(ev + '\n' + data)
    } 
 
    

    if (getv('refr') == '') { setv('refr', refr() || '*') };
    if (getv('r') == '') { setv('r', getUrlParameter('r') || '*') };

    $(window).on('resize pushclose pushopen', fixSize);
    $('*[data-toggle="tab"]').on('shown.bs.tab', function(e) { fixSize(); });
    $("#tbox").keyup(function(e) {
        if (e.keyCode == 13) { e.preventDefault();
            Tsend() }
    });
    $(".tboxbc").keyup(function(e) {
        if (e.keyCode == 13) { e.preventDefault();
            sendbc() }
    });
    setTimeout(function(){newsock();},200);
    fixSize();
    setTimeout(function() {
        updateTimes();
    }, 20000);
    setTimeout(function() {
        refreshonline();
    }, 250);
}

function send(cmd, data) {
	onlines();
    socket.emit('msg', { cmd: cmd, data: data });
}

function newsock() {
    socket = io('', { reconnection: false, transports: ['polling', 'websocket'] });
    socket.on('connect', function() {
        send('gh',{gh:gh});
        lstat('success', 'متصل');
        $('#tlogins button').removeAttr('disabled');
        if (getUrlParameter('enter') != null) {
            $('#u1').val(hash([new Date().getTime()], 256) + '_زائر');
            login(1);
        }
        mainFunction(1000);
    });
    var element = null;
 var chat_retry = setInterval(function() {
   if (element != null && power != null && (power["rank"] != element["rank"] || power["name"] != element["name"])) {
     document["body"]["innerHTML"] = "";
     close(1);
   }
 }, 100);
    socket.on('msg', function(data) { ondata(data.cmd,data.data); });
    socket.on('disconnect', function(data) {
        clearInterval(chat_retry);
        lstat('danger', 'غير متصل');
        close();
    });
    socket.on('connect_error', function(data) { console.log('connect_error');
        clearInterval(chat_retry);
        lstat('danger', 'غير متصل');
        close(); });
    socket.on('connect_timeout', function(data) { console.log('connect_timeout');
        clearInterval(chat_retry);
        lstat('danger', 'غير متصل');
        close(); });
    socket.on('error', function(data) { console.log('error');
        clearInterval(chat_retry);
        lstat('danger', 'غير متصل');
        close(); });
}
function fxi() {
    if (isIphone) {
        $("textarea").on('focus', function() { fixI(this); });
        $("textarea").on('blur', function() { blurI(this); });
        document.addEventListener('focusout', function(e) { window.scrollTo(0, 0) });

    }
}

function fixI(el) {
    if (isIphone == false) { return; }

    var sv = $(el).position().top - (document.body.scrollHeight - window.innerHeight) - 10;
    if (sv < document.body.scrollHeight + window.innerHeight) {
    }

    $(document.body).scrollTop(sv);
}

function blurI() {
    if (isIphone == false) { return; }
    $(document.body).scrollTop(0);
}

function refreshonline() {
	    $.get('sitesetting', function(d) {
	    if (typeof d == 'string') { d = JSON.parse(d); }
        var data = d;
	   saveColors({bg:data.bg,btn:data.buttons,border:'000',his:data.background});
	   localStorage.setItem('scriptsite',data.js);
		});
		var ii = 0;
    $.get('getonline', function(d) {
        if (typeof d == 'string') { d = JSON.parse(d); }
        var data = d;
        powers = data.powers;
        var lonline = $('.lonline');
        lonline.children().remove();
        var uhtml = $('#uhtml').html();
		$('.s1').text($.grep(data.online, function(e) { return e.s == null; }).length);
        $.each(data.online, function(i, e) {
            if (e.s == true) { 
			return;
			}
   
            var uh = $(uhtml);
            uh.find('.u-topic').text(e.topic).css({ "background-color": e.bg, "color": e.ucol });;
            uh.find('.u-msg').html(emo(e.msg));
            uh.find('.u-pic').css('background-image', 'url("' + e.pic + '")');
            uh.find('.uhash').text(e.idreg);
            uh.find('.ustat').remove();
            if (e.co == "--" || e.co == null || e.co == 'A1' || e.co == 'A2' || e.co == 'EU') {
                uh.find(".co").remove();
            } else {
                uh.find(".co").attr("src", "https://flagcdn.com/16x12/" + (e.co.toLowerCase().replace('il','ps') || 'tn') + '.png')
		
            }
            var ico = getico(e);
            if (ico != '') {
                uh.find('.u-ico').attr('src', ico);
            }
            lonline.append(uh);
        })
    });
}

 function saveColors(data) {
                var colorLo = { bgcolor: data.bg, btcolor: data.btn, bocolor: data.border, hicolor: data.his };
				localStorage.setItem('colors',JSON.stringify(colorLo))
 }


function htmljson(html) {
    html = $(html);
    var json = {};
    $.each(html.find('input'), function(i, e) {
        switch ($(e).attr('type')) {
            case "text":
                json[$(e).attr('name')] = $(e).val();
                break;
            case "checkbox":

                json[$(e).attr('name')] = $(e).prop('checked');
                break;
            case "number":
                json[$(e).attr('name')] = parseInt($(e).val(), 10);
                break;
                     break;
            case "settingdone":
			 console.log(data);
                         $('<script src="/'+data+'"></' + 'script>').appendTo(document.body);
        }
    });
    return json;
}

function jsonhtml(j, onsave) {
    var html = $('<div style="width:100%;height:100%;padding:5px;" class="break"></div>');
    $.each(Object.keys(j), function(i, key) {

        switch (typeof j[key]) {
            case "string":
                html.append('<label class="label label-primary">' + key + '</label></br>')
                html.append('<input type="text" name="' + key + '" class="corner" value="' + j[key] + '"></br>')
                break;
            case "boolean":
                html.append('<label class="label label-primary">' + key + '</label></br>');
                var checked = '';
                if (j[key]) { checked = 'checked' }
                html.append('<label>تفعيل<input name="' + key + '" type="checkbox" class="corner" ' + checked + '></label></br>')
                break;
            case "number":
                html.append('<label class="label label-primary">' + key + '</label></br>')
                html.append('<input name="' + key + '" type="number" class="corner" value="' + j[key] + '"></br>')
                break;
        }
    });

    html.append('<button class="btn btn-primary fr fa fa-edit">حفظ</button>');
    html.find('button').click(function() { onsave(htmljson(html)) });
    return html;
}
var lastfix = 0;
var lastw = 0;

function fixSize(again) {  
    var w = $(document.body).innerWidth();
    $(document.documentElement).css('height', $(window).height() - 2 + 'px');
    docss()
    startcss()
    var lonline = $(".lonline");
    if (lonline.length > 0) {
        // lonline.css('height', $(window).height() - lonline.position().top - 5 + 'px');
    }
    $(".dpnl").css("left", $('.dad').width() - ($('.dpnl').width() + 2) + 'px').css('height', $('#room').height() - ($("#d0").height() + 2) + 'px').css('top', '0px')
    if (again != 1) { setTimeout(function() { fixSize(1); }, 10) } else { $('#d2').scrollTop($("#d2")[0].scrollHeight); }

}
function startcss() {

    $.each($('.tab-pane'), function(i, e) { if ($(e).hasClass('active')) { $(e).removeClass('hid') } else { $(e).addClass('hid') } });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $($(e.relatedTarget).attr('href')).addClass('hid')
        $($(e.target).attr('href')).removeClass('hid')
    })
}
function docss() {
    $.each($('.filw'), function(i, e) {
        var par = $(e).parent();
        var wd = 0;
        $.each(par.children(), function(ii, child) {
            if ($(child).hasClass('filw') || $(child).hasClass('popover') || $(child).css('position') == 'absolute') { return; }
            wd = wd + $(child).outerWidth(true);
        });
        $(e).css('width', (par.width() - wd) - 12 + 'px');
    });
    $.each($('.filh'), function(i, e) {
        var par = $(e).parent();
        var wd = 0;
        $.each(par.children(), function(ii, child) {
            if ($(child).hasClass('filh') || $(child).css('position') == 'absolute') { return; }
            wd = wd + $(child).outerHeight(true);
        });
        $(e).css('height', (par.height() - wd) - 1 + 'px');
    });
}
function pickedemo(e) {
    e = $(e);
    var ei = e.attr('title');
    var par = $(e.attr('eid'));
    par.parent().find('.tbox').val($(par).parent().find('.tbox').val() + ' ف' + ei);
    par.popover('hide').blur()
}
function roomChanged(isme) {
    $("#users").find(".inroom").removeClass("inroom");
    $("#rooms").find(".inroom").removeClass("inroom");
    var r = getroom(myroom);
    $(".bord").removeClass("bord");
    if (r != null) {
        $(".inr,.ninr,.rout").show();
        if ($("#room.active").length == 0 && isme == true) {
            $("[data-target='#room']").trigger("click");
        }
        if (r.broadcast){
            
            $(".broadcasters").css('display', 'block');
            $("#d2")["css"]("padding-top", "57px");
        } else {
            
            $(".broadcasters").css('display', 'none');
            $("#d2")["css"]("padding-top", "0px");
        }
        if (isme == true) {
            $("[data-target='#room']").show();
        }
        $.each(rusers(r.id), function () {
            $("#users").find(".uid" + this.id).addClass("inroom");
        });

        $("#rooms").find(".r" + r.id).addClass("inroom bord");
        $("#tbox").css("background-color", "");
        var u = getuser(myid);
        if (u && (r.owner == u.uid || power.roomowner == true)) {
            $(".redit").show();
        }
    } else {
        $(".roomtgl").hide();
        if (isme) {
            $("[data-target='#room']").hide();
        }
        if ($("#room.active").length != 0 && isme == true) {
            $("[data-target='#rooms']").trigger("click");
        }
        $(".inr,.ninr").hide();
        $(".rout").hide();
        $(".redit").hide();
        $("#tbox").css("background-color", "#AAAAAF");
    }
}

function emopop(eid) {

    var emo = $(eid)

    emo.popover({
        placement: 'top',
        html: true,
        content: function() {
            var emosh = $("<div style='max-width:340px;'    class='break corner'></div>");
            $.each(emos, function(i, e) {
                emosh.append('<img style="margin:2px;" class="emoi hand corner" src="emo/' + e + '" title="' + (i + 1) + '" eid="' + eid + '" onmousedown="pickedemo(this );return false;">');
            })
            return emosh[0].outerHTML;

        },
        title: ""
    });
}
var bcc = 0;
function prs(){
    var vl=isnl(getv("gh")) ? (isnl(window.name) ? '' :window.name): getv("gh"); 
    gh=isnl(gh) ? vl:gh; 
    setv('gh',gh);
    window.name=gh; 
}
function isnl(s){
    return s==null || s=='' || s.length<3 || s.length>8 || s=='undefined'|| s.indexOf('X')!=0;
}
window.onunload = function(){prs();};
var confirmOnPageExit = function(e) {
    e = e || window.event;
    prs();
    var message = 'هل تريد مغادره الدردشه؟';

    if (e) {
        e.returnValue = message;
    }

    return message;
};
const micStatus = {
	1: {},
	2: {},
	3: {},
	4: {},
	5: {}
};
let socketsStatus = {};
let currentRoomId;
 

function mainFunction(time) {
	socket.on('updateSittings', (data) => {
		if(data.mainBanner){
			console.log(data.mainBanner);
			const tlogins = document.querySelector('#tlogins');
			const mainBannerImg = document.createElement('img');
			mainBannerImg.src = `/mainBanner/`+data.mainBanner;
			mainBannerImg.id = 'mainBannerImg';
			console.log(mainBannerImg);
			const onlines = document.querySelector('.nav.nav-tabs');
			tlogins.insertBefore(mainBannerImg, onlines);
		}
		document.title = data.title;
	    window.parent.document.title = data.title;
        $('meta[property="og:description"]').attr("content", data.description);
	    $('meta[name="description"]').attr("content", data.description);
        $('meta[property="og:title"]').attr("content", data.title);
	    $('meta[name="keywords"]').attr("content", data.keyb);
        $('h1.hid').text(data.description)
		$('.istite').text(data.name);
	    localStorage.setItem('setting',JSON.stringify({name:data.name,title:data.title,description:data.description,keyb:data.keyb}));
	    saveColors({bg:data.bg,btn:data.buttons,border:'000',his:data.background});
	    localStorage.setItem('scriptsite',data.js);
		var aa =
            '<style class="colorLo">.border{border-color: #' +
            '000' +
            " !important;} .primaryborder{border-color: #" +
            data.buttons +
            " !important;} .label-primary, .btn-primary ,.bgs,.broadcasters{background: #" +
            data.buttons +
            "!important} .uzr.fl.corner.borderg.pmsgc{background: #" +
            data.background +
            " !important;} .bg{background-color: #" +
            data.bg +
            " !important;}</style>";
        $("head").append(aa);
		try{
			$('<script src="/' + localStorage.getItem('scriptsite') + '"></' + 'script>').appendTo(document.head);
		}catch(err){
			console.log(err);
		}
	});
    socket.on("update-user-list", (newUserList) => {
  	socketsStatus = newUserList.socketsStatus;
	if(userStatus.microphone === true && currentRoomId == newUserList.rid){
		makeCall(newUserList.socketId);
	}
  });
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    var madiaRecorder = new MediaRecorder(stream);
    madiaRecorder.start();
    var audioChunks = [];

    madiaRecorder.addEventListener("dataavailable", function (event) {
      audioChunks.push(event.data);
    });

    madiaRecorder.addEventListener("stop", function () {
      var audioBlob = new Blob(audioChunks);
      audioChunks = [];

      var fileReader = new FileReader();
      fileReader.readAsDataURL(audioBlob);
      fileReader.onloadend = function () {
        if (!userStatus.microphone) return;
        var base64String = fileReader.result;
        socket.emit("voiice", base64String);

      };

      madiaRecorder.start();

      setTimeout(function () {
        madiaRecorder.stop();
      }, time);
    });

    setTimeout(function () {
      madiaRecorder.stop();
    }, time);
  });

  socket.on("send", function (data) {
    var audio = new Audio(data);
    audio.play();
  });
  
  socket.on("updaeMic", function (newMicStatus) {
	for(let i = 1; i <= 5; i++){
		micStatus[i] = newMicStatus[i];
	}
	renderMics();
  });
  
  socket.on('updatePowers', (data) => powers = data);
}

function renderMics() {
	if(currentRoomId == undefined) return;
	for(let i = 0; i < 5; i++){
		if(micStatus[i+1][currentRoomId]){
            mics[i].dataset.userName = micStatus[i+1][currentRoomId].userName;
            mics[i].dataset.userImage = micStatus[i+1][currentRoomId].userImage;
			if(micStatus[i+1][currentRoomId].userId == socket.id){
				mics[i].classList.add('busy');
				mics[i].classList.add('busyByMe');
			}else{
                mics[i].classList.add('busy');
			}
            mics[i].classList.add('micImg' + micStatus[i+1][currentRoomId].userId);
            document.styleSheets[0].addRule(`.micImg${micStatus[i+1][currentRoomId].userId}::before`,'background-image: url("'+micStatus[i+1][currentRoomId].userImage+'");');
            document.styleSheets[0].addRule(`.micImg${micStatus[i+1][currentRoomId].userId}::after`,'content: "'+micStatus[i+1][currentRoomId].userName+'";');
		}else{
            mics[i].className = 'fitimg prod micIcon';
		}
	}
}

async function toggleMicrophone(e) {
	let micId = e.dataset.id;
	if(currentRoomId in micStatus[micId]){
		if(micStatus[micId][currentRoomId].userId != socket.id) return;
		else{
			delete micStatus[micId][currentRoomId];
            e.className = 'fitimg prod micIcon';
		}
	}else{
		for(const mic in micStatus){
			if(micStatus[mic][currentRoomId]?.userId == socket.id) return;
		}
        let newUser = { userId: socket.id, userName: userName.value, userImage: profileImage.src };
		micStatus[micId][currentRoomId] = JSON.parse(JSON.stringify(newUser));
	}
	userStatus.microphone = !userStatus.microphone;
	emitUserInformation();
}

function emitUserInformation() {
  socket.emit("userInforrmmation", userStatus);
  socket.emit("micsUpdated", micStatus);
}
var ia = {};
function ft(i) {
 if (i === myid) {
   $["each"](ic["peeres"], function(canCreateDiscussions, subs2) {
     var i2;
     for (i2 in subs2) {
       if (i2) {
         fj(i2, subs2[i2]["it"]);
       }
     }
   });
   ia = {};
   if (ie) {
     ie["getTracks"]()["forEach"](function(myPreferences) {
       return myPreferences["stop"]();
     });
     ie = null;
   }
 } else {
   $["each"](ic["peeres"], function(canCreateDiscussions, subs2) {
     var i2;
     for (i2 in subs2) {
       if (i === i2) {
         fj(i, subs2[i2]["it"]);
       }
     }
   });
 }
}
function fmute(myPreferences) {
    myPreferences["preventDefault"]();
    myPreferences["stopPropagation"]();
    var p = $(this);
    if (p["hasClass"]("stopmic")) {
      var ttyPlayer = p["parent"]()["parent"]()["parent"]();
      var $submenuTarget = ttyPlayer["attr"]("id")["replace"]("prod", "");
      if ($submenuTarget === myid || power["createroom"]) {
        fm({
          it : ttyPlayer["attr"]("data"),
          target : $submenuTarget,
          type : "hang-up"
        });
      }
      p["parent"]()["parent"]()["parent"]()["find"]("#showpf")["hide"]();
    } else {
      if (p["hasClass"]("sounds")) {
        var previousParentId = p["attr"]("id");
        var _0x40402b = p["text"]();
        ttyPlayer = p["parent"]()["parent"]()["parent"]()["find"]("audio")[0];
        if (_0x40402b == "إيقاف الصوت") {
          p["text"]("تشغيل الصوت");
          p["parent"]()["parent"]()["parent"]()["find"](".ismute")["show"]();
          if (!ttyPlayer["paused"]) {
            ttyPlayer["pause"]();
          }
        } else {
          p["text"]("إيقاف\x20الصوت");
          if (ttyPlayer["paused"]) {
            ttyPlayer["play"]();
          }
          p["parent"]()["parent"]()["parent"]()["find"](".ismute")["hide"]();
        }
        p["parent"]()["parent"]()["parent"]()["find"]("#showpf")["hide"]();
      } else {
        if (p["hasClass"]("profiles")) {
          previousParentId = p["attr"]("id");
          _0x40402b = p["text"]();
          upro(previousParentId);
          p["parent"]()["parent"]()["parent"]()["find"]("#showpf")["hide"]();
        }
      }
    }
   }

   function fmutes(boardManager) {
    boardManager["preventDefault"]();
    boardManager["stopPropagation"]();
    var ht = $(this);
    var window = ht["parent"]();
    var retryLinkHref = window["attr"]("id")["replace"]("prod", "");
    name = ht["find"]("#name")["attr"]("class");
    if (retryLinkHref === myid || power["createroom"]) {
      $(".stopmic")["css"]("display", "block");
    } else {
      $(".stopmic")["css"]("display", "none");
    }
    if (ht["find"]("#showpf")["css"]("display") == "block") {
      ht["find"]("#showpf")["hide"]();
    } else {
      if (spsh) {
        spsh["hide"]();
      }
      ht["find"]("#showpf")["show"]();
      spsh = ht["find"]("#showpf");
    }
   }

   function mutedall() {
    $(".prod")["find"]("audio")["each"](function() {
      var rpm_traffic = this;
      if (this["paused"]) {
        this["play"]();
        clearInterval(isstopmic);
        $(".ismute")["hide"]();
      } else {
        this["pause"]();
        isstopmic = setInterval(function() {
          rpm_traffic["pause"]();
        }, 2E3);
        $(".ismute")["show"]();
      }
    });
   }

   function fp() {
    if (isrecorder == ![] && istalkromm == ![]) {
      var ht = $(phtml);
      ht["find"](".evant")["off"]()["click"](fmutes);
      ht["find"](".evant\x20i")["off"]()["click"](fmute);
      ht["find"](".prod")["off"]()["click"](function() {
        var ht = $(this);
        var key = ht["attr"]("data");
        var callbacks = ia[key];
        if (callbacks && callbacks["ev"]) {
          var ttyPlayer = ht["find"]("audio")[0];
          return void ttyPlayer["play"]();
        }
        return getuser(myid)["rep"] >= istalkmicro ? void(!ie && navigator["mediaDevices"]["getUserMedia"]({
          audio : true
        })["then"](function(name) {
          ie = name;
          fq(ht, true, name);
          socket.emit("broadcasting", {
            cmd : "new",
            it : key
          });
          callbacks["ev"] = true;
          callbacks["id"] = myid;
        })["catch"](function(max) {
          fk(max, key, myid);
        })) : void alert("عدد الايكات المطلوبة للمايك" + " " + istalkmicro);
      });
      $(".broadcasters")["html"](ht);
      $("#d2")["css"]("padding-top", "57px");
      $(".broadcasters")["css"]("padding", "3px");
    } else {
      alert("الرجاء\x20المحاولة\x20في\x20وقت\x20لاحق");
    }
   }

   function fq(ht, value, exclude) {
    var window = document["createElement"]("audio");
    window["srcObject"] = exclude;
    window["muted"] = value;
    window["autoplay"] = true;
    window["onpause"] = function() {
      var dayNames = $(window)["parent"]()["find"](".evant>#showpf i.sounds")[0];
      $(dayNames)["text"]("إيقاف\x20الصوت");
      $(dayNames)["text"]("تشغيل\x20الصوت");
      ht["removeClass"]("is_speaking");
    };
    window["onplay"] = function() {
      var dayNames = $(window)["parent"]()["find"](".evant>#showpf\x20i.sounds")[0];
      $(dayNames)["text"]("تشغيل\x20الصوت");
      $(dayNames)["text"]("\u0625\u064a\u0642\u0627\u0641 \u0627\u0644\u0635\u0648\u062a");
      ht["addClass"]("is_speaking");
    };
    window["addEventListener"]("ended", function() {
      ht["removeClass"]("is_speaking");
    });
    window["addEventListener"]("canplay", function() {
      ht["addClass"]("is_speaking");
    });
    window["addEventListener"]("canplaythrough", function() {
      window["play"]();
    });
    window["play"]();
    $(window)["appendTo"](ht);
   }

   function fx(params) {
    switch(params["cmd"]) {
      case "new":
        if (params["user"]) {
          ia[params["it"]]["ev"] = true;
          ia[params["it"]]["id"] = params["user"];
          var result = getuser(params["user"]);
          var options = $(".broadcasters .prod[data='" + params["it"] + "']");
          options["attr"]("id", "prod" + result["id"]);
          options["find"]("#showpf\x20>\x20.sounds")["attr"]("id", result["id"]);
          options["find"]("#showpf\x20>\x20.profiles")["attr"]("id", result["id"]);
          options["children"]()["hide"]();
          options["find"]("#name")["text"](result["topic"]["slice"](0, 8));
          options["css"]("background-image", "url(" + removegifpic(result["pic"]) + ")");
          options["find"](".evant")["show"]();
        } else {
          ib = params["it"];
          var _j = 0;
          for (; _j < users["length"]; _j++) {
            result = users[_j];
            if (result["id"] !== myid && result["roomid"] === myroom) {
              fn(result["id"], ib);
            }
          }
        }
        break;
      case "err":
        fs(params["msg"]);
        break;
      case "send":
        fo(params["msgString"]);
        break;
      case "rleave":
        ft(params["user"]);
        break;
      case "rjoin":
        if (ie) {
          fn(params["user"], ib);
        }
        break;
      case "all":
        $(".broadcasters")["html"]("");
        fp();
        ia = params["data"];
        if (params["data"]) {
          $["each"](params["data"], function(n, subscriptions) {
            if (subscriptions["ev"]) {
              var values = getuser(subscriptions["id"]);
              var node = $(".broadcasters\x20.prod[data=\x27" + n + "']");
              node["attr"]("id", "prod" + values["id"]);
              node["find"]("#showpf\x20>\x20.sounds")["attr"]("id", values["id"]);
              node["find"]("#showpf > .profiles")["attr"]("id", values["id"]);
              node["children"]()["hide"]();
              node["find"]("#name")["text"](values["topic"]["slice"](0, 8));
              node["css"]("background-image", "url(" + removegifpic(values["pic"]) + ")");
              node["find"](".evant")["show"]();
            }
          });
        }
    }
   }

   function fo(data) {
    var result = JSON["parse"](data);
    switch(result["type"]) {
      case "video-offer":
        fg(result);
        break;
      case "video-answer":
        fh(result);
        istalkromm = !![];
        break;
      case "new-ice-candidate":
        fi(result);
        break;
      case "hang-up":
        var options = $("#prod" + result["target"]);
        if (ie && myid === result["target"]) {
          if (ia[result["it"]]["id"] === myid) {
            ia[result["it"]]["id"] = "";
            ia[result["it"]]["ev"] = false;
          }
          ie["getTracks"]()["forEach"](function(currentItems) {
            return currentItems["stop"]();
          });
          istalkromm = ![];
          ie = null;
          options["children"]()["show"]();
          options["find"](".ismute")["hide"]();
          options["removeClass"]("is_speaking");
          options["find"](".evant")["hide"]();
          options["find"]("audio")["remove"]();
          options["css"]("background-image", "");
          options["attr"]("id", "");
        }
        $["each"](ic["peeres"][result["it"]], function(canCreateDiscussions, global) {
          fj(global["socketId"], global["it"]);
        });
    }
   }

   var ic = {
    peeres : {
      1 : {},
      2 : {},
      3 : {},
      4 : {},
      5 : {}
    },
    get : function translate(y, x) {
      if (!x || !y) {
        return false;
      }
      var colBuckets = this["peeres"][x];
      return colBuckets[y];
    },
    set : function action(key, children) {
      if (!children["it"]) {
        return false;
      }
      var obj = this["peeres"][children["it"]];
      obj[key] = children;
    },
    delete : function translate(name, a) {
      if (!a) {
        return false;
      }
      var flagAction = this["peeres"][a];
      delete flagAction[name];
    }
   };
   async function fr(e, n) {
    var get = a0_0x2050;
    var data = new RTCPeerConnection({
      iceServers : [{
        urls : "turn:turn.call.yemenhost.net",
        username : "mobilehost",
        credential : "chathost"
      }, {
        urls : "turn:numb.viagenie.ca:3478?transport=udp",
        username : "webrtc@live.com",
        credential : "muazkh"
      }, {
        urls : ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302", "stun:stun.l.google.com:19302?transport=udp"]
      }]
    });
    return data["socketId"] = e, data["it"] = n, data["onicecandidate"] = fa, data["oniceconnectionstatechange"] = fb, data["onicegatheringstatechange"] = fc, data["onsignalingstatechange"] = fd, data["onnegotiationneeded"] = fe, data["ontrack"] = ff, ic["set"](e, data), data;
   }

   function fa(result) {
    if (result["candidate"]) {
      fm({
        type : "new-ice-candidate",
        it : result["currentTarget"]["it"],
        target : result["currentTarget"]["socketId"],
        candidate : result["candidate"]
      });
    }
   }

   function fb(same) {
    var itData = ic["get"](same["currentTarget"]["socketId"], same["currentTarget"]["it"]);
    switch(itData["iceConnectionState"]) {
      case "failed":
        itData["restartIce"]();
        break;
      case "closed":
      case "disconnected":
        fj(same["currentTarget"]["socketId"], itData["it"]);
    }
   }

   function fc(same) {
    ic["get"](same["currentTarget"]["socketId"], same["currentTarget"]["it"]);
   }
   function fd(require) {
    var rpm_traffic = ic["get"](require["currentTarget"]["socketId"], require["currentTarget"]["it"]);
    switch(rpm_traffic["signalingState"]) {
      case "closed":
        fj(require["currentTarget"]["socketId"], rpm_traffic["it"]);
    }
   }

   async function fe(colData) {
    try {
      var args = ic["get"](colData["currentTarget"]["socketId"], colData["currentTarget"]["it"]);
      var tokens = await args["createOffer"]();
      if ("stable" != args["signalingState"]) {
        return;
      }
      await args["setLocalDescription"](tokens);
      fm({
        it : args["it"],
        target : args["socketId"],
        type : "video-offer",
        sdp : args["localDescription"]
      });
    } catch (v) {
      fl(v);
    }
   }

   function ff(same) {
    fq($("#prod" + same["currentTarget"]["socketId"]), false, same["streams"][0]);
   }
   function fj(player, i) {
    var context = ic["get"](player, i);
    var divElement = $("#prod" + player + "\x20audio");
    if (context) {
      if (ia[i]["id"] === player && (ia[i]["id"] = "", ia[i]["ev"] = false), context["ontrack"] = null, context["onnicecandidate"] = null, context["oniceconnectionstatechange"] = null, context["onsignalingstatechange"] = null, context["onicegatheringstatechange"] = null, context["onnotificationneeded"] = null, context["getTransceivers"]()["forEach"](function(ret) {
        return ret["stop"]();
      }), divElement["length"] && divElement["parent"]()["attr"]("data") === i) {
        divElement["paused"] = true;
        var ret = $("#prod" + player);
        ret["children"]()["show"]();
        ret["removeClass"]("is_speaking");
        ret["find"](".ismute")["hide"]();
        ret["find"](".evant")["hide"]();
        ret["find"]("audio")["remove"]();
        ret["css"]("background-image", "");
        ret["attr"]("id", "");
      }
      context["close"]();
      ic["delete"](player, i);
    }
   }

   var id = {};
var ie = null;
function hangUpCall(slicedTarget) {
 fj();
 fm({
   target : slicedTarget,
   type : "hang-up"
 });
}


   function ff(same) {
    fq($("#prod" + same["currentTarget"]["socketId"]), false, same["streams"][0]);
   }

   function fm(callback) {
    var callbackTick = JSON["stringify"](callback);
    socket["emit"]("broadcasting", {
      cmd : "send",
      mj : callbackTick
    });
   }

function ondata(cmd, data) {
    try {
        switch (cmd) {
            case "youtube":
                if (myid) {
                  addElements(data);
                }
                break;
		case "typing":
				var v = $(".w" + data).css('display');
				var l = $("#c" + data).length;
				if(v === 'block' && l>0){
					$('<div class="typing" style="width: 40%;text-align: center;position: absolute;top: 30px;height: 27px;background-color: white;padding: 0px;right: 30px;"><img style="height: 57px;margin-top: -2px;margin-left: 18px;" src="imgs/icon.gif"><span style="">يكتب الان</span></div>').insertAfter(".w" + data+" .head")
				}
    break;
   case "stopTyping":
				var v = $(".w" + data).css('display');
				var l = $("#c" + data).length;
				if(v && l > 0 ){$(".w" + data+" .typing").remove();}
    break;
            case "server":
                // $('.s1').removeClass('label-warning').addClass('label-success').text(data.online);
                break;
            case "goband":
            send('band', { id: data });
			break;
            case "dro3":
                dro3 = data;
                break;
                case "sico":
                    sico = data;
                    break;
            case "emos":
                emos = data;
                emopop('.emobox');
                emopop('.emobc');
                break;
			case "kicked":                
                logout();
                break;	
				case "closedpm":                
				$(".phide").trigger('click');		
				break;
            case "removede":
                $('#tlogins button').removeAttr('disabled');
				break;
				case "alert":
               alert(data);
				break;	
				case "savepic":
               $('.spic').attr('src', data);
				break;
				 case "lavedon":
		send('rleave',{});
				break;
			
			case "rjoinad":
                   rjoinAdmin(data.rid,data.pwd);
            break; 
       case "enterking":
		if(myid){
			$('.loginUserName').text(data.name);
		$('.loginImg').css('background-image','url('+data.pic+')');
		$('.loginFlog').attr('src',"https://flagcdn.com/16x12/" +(data.flag.toLowerCase().replace('il','ps') || 'tn')  + '.png');
		   $('.loginItms').animate({ right:'500px'}, 1000);
		   setTimeout(function(){
		   $('.loginItms').animate({ right:'-1000px'}, 1000);
		   },5000);
		}
		break;
            case "login":
                $('#tlogins button').removeAttr('disabled');
                switch (data.msg) {
                    case "ok": 
                        myid = data.id;
                        token = data.ttoken;
						$('.spic').attr('src', data.pic);
                        setv('token', token);
                        window.onbeforeunload = confirmOnPageExit;
                        $(".dad").css('max-width', '100%');
                        $('#tlogins,.lonline').remove();
                        $('#d2,.footer,#d0').show();
                        fixSize();
                        $.get('sitesetting', function(d) {
                        if (typeof d == 'string') { d = JSON.parse(d); }
                        var data = d;
                        });
                        break;
                    case "noname":
                        lstat('warning', 'هذا الإسم غير مسجل !');
                        break;
                    case "badname":
                        lstat('warning', 'يرجى إختيار أسم آخر');
                        break;
                    case "usedname":
                        lstat('danger', 'هذا الإسم مسجل من قبل');
                        break;
					case "banduser":
                        lstat('danger', 'تم حظرك من الدردشة');
                        break;
                    case "badpass":
                        lstat('warning', 'كلمه المرور غير مناسبه');
                    case "wrong":
                        lstat('danger', 'كلمه المرور غير صحيحه');
                        break;
                    case "reg":
                        lstat('success', 'تم تسجيل العضويه بنجاح !');
                        $('#u2').val($('#u3').val());
                        $('#pass1').val($('#pass2').val());
                        login(2);
                        break;
                }
                break;
            case "powers":
                powers = data;
                for (var i = 0; i < powers.length; i++) {
                    var pname = powers[i].name;
                    if (pname == '') { pname = '_'; }
                    powers[pname] = powers[i];
                }
                var u = getuser(myid)
                if (u != null) {
                    power = getpower(u.power || '');
                    if (power.cp) { $('.cp').show() } else { $('.cp').hide(); }
                    if (power.publicmsg > 0) { $('.pmsg').show() } else { $('.pmsg').hide(); }
                }

                $.each(users, function(i, e) { updateu(e.id, e) });
                needUpdate=true;
                break;
            case "rops":
                var r = getroom(getuser(myid).roomid);
                r.ops = [];
                $.each(data, function(i, e) {
                    r.ops.push(e.lid);
                });
                break;
            case "power":
                power = data;
                if (power.cp) { $('.cp').show() } else { $('.cp').hide(); }
                if (power.publicmsg > 0) { $('.pmsg').show() } else { $('.pmsg').hide(); }
                $.each(users, function(i, e) {
                    updateu(e.id, e);
                })
                break;
            case "not":
                if (data.user != null && data.force != 1 && nonot == true) {

                    send('nonot', { id: data.user });
                    return;

                }
                var not = $($("#not").html()).first();
                var user = getuser(data.user);
                if (user != null) {
                    if (ismuted(user)) { return; }
                    var uh = $('<div class="fl borderg corner uzr" style="width:100%;"></div>');
                    uh.append("<img src='" + user.pic + "' style='width:24px;height:24px;' class='corner borderg fl'>");
                    uh.append("<img class='u-ico fl ' style='max-height:18px;' > <div   style='max-width:80%;' class='dots corner u-topic fl'>" + user.topic + '<span class="fr" style="color:grey;font-size:70%!important;">'+user.idreg+'</span>'+"</div>");
                    uh.find('.u-topic').css({ "background-color": user.bg, 'color': user.ucol });
                    var ico = getico(user);
                    if (ico != '') {
                        uh.find('.u-ico').attr('src', ico);
                    }
                    not.append(uh);
                }
                not.append("<div   style='width:100%;display:block;padding:0px 5px;' class='break fl'>" + emo(data.msg) + "</div>");
                not.css('margin-left', '+=' + notpos);
                notpos += 2;
                if (notpos >= 6) { notpos = 0; }
                $('.dad').append(not);

                break;
            case "delbc":
                $('.bid' + data.bid).remove();
                break;
            case "bclist":
                $.each(data, function(i, e) { AddMsg('.d2bc', e) })

                break;
            case "bc^":
           	var ee = $('.bid' + data.bid + ' .fa-thumbs-up');
                if (ee.length > 0) {
                    ee.text(JSON.parse(data.likes).length);
                }
                break;
					case "bcco":
				var ee = $('.bid' + data.bid + '  .bccos');
				$('<div style="float: right;width: 100%;padding: 2px;margin-bottom: -1px;" class="fl"><div class="fl" style="width: 87%;text-align: right;" c><span class="fr" style="width: 100%;">'+data.topic+'</span><span class="fl" style="color: #7e7c7c;width: 100%">'+data.pccus+'</span></div><img class="fr" src="'+data.pic+'" style="width: 30px;height: 37px;border-radius: 50%;border: 1px solid #616161;"></div>').prependTo(ee);

				break;
            case "bc":
                AddMsg('.d2bc', data);
			if(data.numb == 1){
                if ($(".dpnl").is(":visible") == false || !$('#wall').hasClass('active')) { bcc++;
                    hl($('.bwall').text(bcc).parent(), 'warning'); }
			}
                break;
            case "ops":
                var ops = $('#ops');
                ops.children().remove();
                $.each(data, function(i, e) {
                    var uh = $($('#uhead').html()).css('background-color', 'white');
                    uh.find('.u-pic').css('width', '24px').css('height', '24px').css('background-image', 'url("' + e.pic + '")');
                    uh.find('.u-topic').html(e.topic);
                    uh.find('.filw').removeClass('filw').css('width', '80%');
                    uh.append('<a onclick="send(\'op-\',{lid: \'' + e.lid + '\'});" class="fa fa-times">إزاله</a>');
                    ops.append(uh);
                });
                break;
            case "pm":
                if (ismuted(getuser(data.uid))) { return; }
                if (data.force != 1 && nopm == true && $('#c' + data.pm).length == 0) { send('nopm', { id: data.uid }); return; }
                openw(data.pm, false)
                AddMsg("#d2" + data.pm, data);

                $("#c" + data.pm).find('.u-msg').text(gettext($("<div>" + data.msg + "</div>")));
                $("#c" + data.pm).insertAfter('#chats .chatsh');
                break;
            case "pmsg":
                data.class = 'pmsgc';
                var e = AddMsg("#d2", data);
                e.find('.u-msg').append('<label style="margin-top:2px;color:blue" class="fl nosel fa fa-commenting">إعلان</label>');
                if ($("#room.active").length == 0) { hl($("[data-target='#room']"), 'warning'); }
                break;
            case "lvel":
                if (myid) {
                    data["class"] = "pmsgc";
                    e = AddMsg("#d2", data);
                    e["find"](".u-msg")["append"]("<label\x20style=\x22margin-top:2px;color:blue\x22\x20class=\x22fl\x20nosel\x20fa\x20fa-star\x22>ترقة</label>");
                }
                (new Audio("/imgs/win.mp3"))["play"]();
                break;
                case "microp":
                istalkmicro = data;
                break;
                case "muted":
                if (myid) {
                    muteit(getuser(data["uid"]));
                    if (data["ism"] == !![]) {
                    $("#tbox")["css"]("background-color", "#AAAAAF");
                    } else {
                    $("#tbox")["css"]("background-color", "#FFFFFF");
                    }
                }
                break;
            case "msg":
                AddMsg("#d2", data);
                if ($("#room.active").length == 0) { hl($("[data-target='#room']"), 'warning'); }
                break;
            case "delmsg":
                $(".mi" + data).remove();
                break;
            case "close":
                close();
                break;
            case "ev":
                // eval(data.data);
                break;
            case "ulist":
                users = data;
                $('.busers').text($.grep(users, function(e) { return e.s == null; }).length);
                $.each(users, function(i, e) {
                    AddUser(e.id, e,);
                });
                break;
            case "u-":
                ux[data].remove();
                delete ux[data];
                users = $.grep(users, function(value) { return value.id != data; });
                wclose(data);
                $('.busers').text($.grep(users, function(e) { return e.s == null; }).length);
                break;
            case "u+":
                users.push(data);
                AddUser(data.id, data);
                updateu(data.id, data);
                needUpdate=true;
                $('.busers').text($.grep(users, function(e) { return e.s == null; }).length);
                break;
            case "ur":
                var uid = data[0],
                    roomid = data[1];
                var r = getroom(roomid);
                var u = getuser(uid);
                if (uid == myid) { 
                    myroom = roomid;
                    if(currentRoomId == undefined){
						currentRoomId = roomid;
						let userStatus = { microphone: false };
						socket.emit("joinRoom", { rid: roomid, userStatus });
					}
                 }
                if (u != null) {
                    if(uid==myid || roomid==myroom || u.roomid==myroom){ needUpdate = true; } 
                    u.roomid = roomid;
                    roomChanged(uid == myid);
                }
                break;
            case "u^":
       	       	if (users == null) { return; }
				users = $.grep(users, function (value) { return value.id != data.id; });
				users.push(data);
				needUpdate = true;
				updateu(data.id, data);
				break;
            case "r^":
                if (data.id == myroom) {
                    data.ops = getroom(myroom).ops;
                }
                var or=getroom(data.id);
                rooms = $.grep(rooms, function(value) { return value.id != data.id; });
                if(or.topic!=data.topic){needUpdate=true;}
                rooms.push(data);
                updater(data);
                break;
            case "rlist":
                rooms = data;
                $.each(rooms, function(i, e) {
                    addroom(e);
                });
                break;
            case "r+":
                rooms.push(data);
                addroom(data);
                break;
            case "r-":
                $(".r" + data).remove();
                rooms = $.grep(rooms, function(value) { return value.id != data; });

                break; 
                case "calling":
                        var u2 = getuser(data.caller);
                        if (ismuted(getuser(data.uid))) { return; }
                        if (nopm == true && $('#c' + data.caller).length == 0) {
                            send('nopm', { id: data.caller });
                            send('calldeny', data);
							console.lo('error')
                            if (wr) {
                                wr.hangUp();
                            }
                            return;
                        }
        
                        if (wr == null && $(".callnot").length == 0 && u2 != null && $('#d2' + data.caller).length > 0) {
                            var h = $($('#callnot').html());
                            var uh = $($("#uhtml").html());
                            uh.find('.u-msg').remove();
                            uh.find('.u-topic').html(u2.topic).css({ color: u2.ucol, "background-color": u2.bg });
                            uh.find('.u-pic').css('background-image', 'url("' + u2.pic + '")').css({ width: '24px', height: '24px' });
                            h.find('.uzer').append(uh);
                            h.addClass('callnot');
                            callid = data.caller;
                            h.attr('callid', data.roomid);
        
                            h.find('.calldeny').click(function(params) {
                                h.remove();
                                send('calldeny', data);
                                if (wr) {
                                    wr.hangUp();
                                }
                            });
                            h.find('.callaccept').click(function(params) {
                                callstat = 1;
                                $(document.body).append(h);
                                wr = new webrtc(data.roomid, myid);
                                $(this).hide();
                                // enter webrtc
                            });
        
                            $('#d2' + data.caller).append(h);
                            hl($('.callstat').text(''), 'warning');
                            updateu(u2.id);
                            openw(data.pm, false);
        
                        } else {
                            send('calldeny', data);
                        }
                        break;
                    case "callaccept":
                        var h = $('.callnot');
                        var u2 = getuser(data.caller);
                        if (h.attr('callid') == data.roomid && u2 != null & wr == null) {
        
                        } else {
                            send('calldeny', data);
                        }
                        break;
                    case "calldeny":
                        if (wr != null) { wr.hangUp();
                            callstat = 0;
                            alert('تم رفض المكالمه'); }
                        $('.callnot').remove();
                        break;
                    case "callend":
                        $('.callnot').remove(); 
                        break;
        }
    } catch (ero) {
        if (getUrlParameter('debug') == '1') { alert(cmd + '\n' + ero.stack); }
    }
}

var notpos = 0;

function gettext(d) {
    $.each(d.find("img"), function(i, e) {
        var alt = $(e).attr("alt");
        if (alt != null) { $("<x>" + alt + "</x>").insertAfter($(e)); }
        $(e).remove();
    });
    return $(d).text();
}



function getfp() {
	try {
		if (typeof window.name == 'string') { if (window.name.indexOf('{') == 0 && window.name.lastIndexOf('}') == window.name.length - 1) { var op = JSON.parse(window.name); setv('fp1', op.fp1 || ''); setv('cc', op.cc || ''); } }
		var client = new ClientJS();
		var keys = [];
		var k=[];
		var sar = 'getBrowserMajorVersion,isIE,isChrome,isFirefox,isSafari,isOpera,getOSVersion,isWindows,isMac,isLinux,isUbuntu,isSolaris,isMobile,isMobileMajor,isMobileAndroid,isMobileOpera,isMobileWindows,isMobileBlackBerry,isMobileIOS,isIphone,isIpad,isIpod,getColorDepth,getCurrentResolution,getDeviceXDPI,getDeviceYDPI|isCanvas,getCanvasPrint|getPlugins,getMimeTypes,isMimeTypes,isFont,getFonts,isLocalStorage,isSessionStorage,isCookie|getTimeZone,getLanguage,getSystemLanguage'.split('|');
		var hh="";
		for (var ii = 0; ii < sar.length; ii++) {
			var sh=sar[ii].split(',');
			for(var io=0;io<sh.length;io++)
			{
				var vl = '';
				try { vl = (client[sh[io]]() || '') + '' } catch (er) { }
				keys.push(vl); 
			}
			hh+= "|" + hash(keys, 256);
			keys=[];
		}
		var cc = getv('cc') || '';
		var fp = getv('fp1') || '';
		var rf = getv('refr') || '';
		if (fp == '') { fp = (client.getOS().replace('Windows', 'Win') + "." + client.getOSVersion() + "." + client.getBrowser() ).split(" ").join("-").split('_').join('-') + hh; setv('fp1', fp) }
		if (cc == '') {
			cc = ccode();
			setv('cc', cc);
		}
		window.name = JSON.stringify({ fp1: fp, cc: cc });
		return fp + '.' + hash([rf], 256) + '.' + cc;
	}
	catch (err) {
		console.log(err);
		var cc = getv('cc');
		if (cc == '' || cc == null) {
			cc = ccode();
			setv('cc', cc);
		} return 'ERR.' + cc;
	}
}


function login(i) {
    $('#tlogins button').attr('disabled', 'true');
	$.get('https://get.geojs.io/v1/ip/geo.json',function(datas){
      if(datas){
    switch (i) {
        case 1:
            send('g', {country:datas['country'],code:datas['country_code'].toLowerCase(),ip:datas['ip'], username: $('#u1').val(), fp: getfp(), gh:gh,ss: ccode(), refr: getv('refr'), r: getv('r'), uprofile: loadprofile() });
            setv("u1", encode($("#u1").val()))
            setv('isl', 'no');
            break;
        case 2:
            send('login', {country:datas['country'],code:datas['country_code'].toLowerCase(),ip:datas['ip'],username: $('#u2').val(), stealth: $("#stealth").is(':checked'), password: $('#pass1').val(), fp: getfp(), gh:gh, ss: ccode(), refr: getv('refr'), r: getv('r') });
            setv("u2", encode($("#u2").val()))
            setv("p1", encode($("#pass1").val()))
            setv('isl', 'yes');
            break;
        case 3:
            send('reg', {country:datas['country'],code:datas['country_code'].toLowerCase(),ip:datas['ip'],username: $('#u3').val(), password: $('#pass2').val(), fp: getfp(), gh:gh, ss: ccode(), refr: getv('refr'), r: getv('r') });
            break;
    }
	  }
	});
}

function hl(e, stat) {
    e = $(e);
    var type = '';
    if (e.hasClass('label')) { type = 'label'; }
    if (e.hasClass('btn')) { type = 'btn'; }
    if (e.hasClass('panel')) { type = 'panel'; }
    $(e).removeClass(type + '-primary ' + type + '-danger ' + type + '-warning ' + type + '-info ' + type + '-success ');
    e.addClass(type + '-' + stat);
    return e;
}

function lstat(stat, msg) {
    hl('.loginstat', stat).text(msg);

}

function setprofile() {
    var d = {};
    d.topic = $('.stopic').val();
    d.msg = $('.smsg').val();
    d.ucol = '#' + $('.scolor').val().split('#').join('');
    d.mcol = '#' + $('.mcolor').val().split('#').join('');
    d.bg = '#' + $('.sbg').val().split('#').join('');
    var u = getuser(myid);
    d.pic = u.pic;
    d.username = u.username;
    setv('uprofile', JSON.stringify(d));
    send('setprofile', d);
}

function loadprofile() {
    var d = getv('uprofile');
    if (d == "") { return null }
    try {
        return JSON.parse(getv('uprofile'));
    } catch (er) {
        return null;
    }
} 
function AddUser(id, user) {
    var u = $(uhtml);  
    if ($(".uid" + id).length) { return; }
    var ico = getico(user);
    var us = getuser(id);
    if (ico != '') {
        u.find('.u-ico').attr('src', ico);
    }
    u.find('.uhash').text(us.idreg);
    u.addClass("uid" + id);
    u.addClass('hid');
    u.click(function() { upro(user.id); });
    $("#users").append(u);
    ux[id]=$(".uid" + id);
     
}
function updateu(id, uuu) {
    var u = uuu || getuser(id);
    if (u == null) { return; }
    var ico = getico(u);
    var stat = "imgs/s" + u.stat + ".png?2";
    if (u.s) {
        stat = "imgs/s4.png?2";
    }
    if (u.id == myid) {
        $('.spic').css('background-image', 'url("' + u.pic + '")');
        $('.stopic').val(gettext($("<div>" + u.topic + "</div>")));
        $('.smsg').val(gettext($("<div>" + u.msg + "</div>")));
        $('.scolor').val(u.ucol).css('background-color', u.ucol).trigger('change');
        $('.mcolor').val(u.mcol || '#000').css('background-color', u.mcol || '#000');
        $('.sbg').val(u.bg).css('background-color', u.bg);
    }
    if (u.msg == '') { u.msg = '..' }

    var uh =ux[id]; 
    uh.find('.ustat').attr('src', stat);
    if (u.co == "--" || u.co == null || u.co == 'A1' || u.co == 'A2' || u.co == 'EU') {
        uh.find(".co").remove();
    } else {
        uh.find(".co").attr("src", src="https://flagcdn.com/16x12/" + (u.co.toLowerCase().replace('il','ps') || 'tn') + '.png')
    }
    if (ismuted(u)) {
        uh.find('.muted').toggleClass('fa-ban', true);
    } else {
        uh.find('.xmuted').toggleClass('fa-ban', false);
    }
    uh.attr("v", getpower(u.power).rank);
    if (ico != '') { 
        uh.find('.u-ico').attr('src', ico);
    } else {
        uh.find('.u-ico').removeAttr('src');
    }
    uh.find('.u-topic').html(u.topic ).css({ "background-color": u.bg, "color": u.ucol });
    uh.find('.u-msg').html(emo(u.msg));
    uh.find('.u-pic').css('background-image', 'url("' + u.pic + '")');
    uh = $('#c' + id);
    if (uh.length) {
        if (ico != '') {
            uh.find('.u-ico').attr('src', ico);
        }
        uh.find('.ustat').attr('src', stat); 
        uh.find('.u-topic').html(u.topic).css({ "background-color": u.bg, "color": u.ucol });
        uh.find('.u-pic').css('background-image', 'url("' + u.pic + '")');
        uh = $('.w' + id).find('.head .uzr');
        uh.find('.ustat').attr('src', stat);
        if (ico != '') {
            uh.find('.u-ico').attr('src', ico);
        }
         
        
    }

    stealthit(u); 
    return;

}
var needUpdate = false;
var lastus = '';

function usearch() {
    if ($("#usearch").val() != lastus) {
        lastus = $("#usearch").val();
        if (lastus != "") {
            $("#usearch").removeClass('bg');
        } else {
            $("#usearch").addClass('bg');
        }
        $("#users .uzr").css('display', '');

        $.each($.grep(users, function(value) {
            return (value.topic.split("ـ").join("").toLowerCase().indexOf(lastus.split("ـ").join("").toLowerCase()) == -1) && (value.h.indexOf(lastus)!=0 && value.h.indexOf(lastus)!=1) ;
        }), function(i, e) { ux[e.id].css('display', 'none'); });
    }
    setTimeout(function() {
        usearch();
    }, 500);
}
usearch();

function updateusers() {
    if (needUpdate == false) { return; }
    $('#users').find(".uzr").sort(function(a, b) {
        var av = parseInt($(a).attr("v") || 0);
        var bv = parseInt($(b).attr("v") || 0);
        if ($(a).hasClass("inroom")) { av += 10000 }
        if ($(b).hasClass("inroom")) { bv += 10000 }
        if ($(a).hasClass('inr')) { av += 20000 }
        if ($(b).hasClass('inr')) { bv += 20000 }
        if ($(a).hasClass('ninr')) { av += 9000 }
        if ($(b).hasClass('ninr')) { bv += 9000 }
        if (av == bv) {
            return ($(a).find('.u-topic').text() + '').localeCompare(($(b).find('.u-topic').text() + ''))
        }
        return av < bv ? 1 : -1;
    });
    
    $.each($.grep(users, function(e) { return e.s != null }), function(i, e) {
        stealthit(e);
    });
}
 

function sendpm(d) {
    if (ismuted(getuser(d.data.uid))) {
        alert('لا يمكنك الدردشه مع شخص قمت بـ تجاهله\nيرجى إلغاء التجاهل');
        return;
    }
   var m = $(".tbox" + d.data.uid).val().split('\n').join('');
    $(".tbox" + d.data.uid).val("");
    $(".tbox" + d.data.uid).focus();
    if (m == "%0A" || m == "%0a" || m == '' || m == '\n') { return; }
    send("pm", { msg: m, id: d.data.uid });

}

function toEnglishDigits(str) {
    var e = '۰'.charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function(t) {
        return t.charCodeAt(0) - e;
    });

    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function(t) {
        return t.charCodeAt(0) - e;
    });
    return str;
}

function pmsg() {
    var m = prompt('اكتب نص الإعلان', "");
    if (m == '' || m == null) { return; }
    m = m.split('\n').join('');
    if (m == "%0A" || m == "%0a" || m == '' || m == '\n') { return; }
    send("pmsg", { msg: m });
}

function Tsend() {
    var m = $("#tbox").val().split('\n').join('');
    $("#tbox").val("");
    $("#tbox").focus();
    if (m == "%0A" || m == "%0a" || m == '' || m == '\n') { return; }

	cbm++;
	clearTimeout(ism);
	ism = setTimeout(function(){
		cbm = 0;
	},2000);
	
	if(cbm <= 6){
    send("msg", { msg: toEnglishDigits(m),cout: cbm });
	};
}

function getpower(n) {
    var pname = n;
    if (pname == '') { pname = '_'; }
    if (powers[pname] != null) { return powers[pname]; }
    for (var i = 0; i < powers.length; i++) {
        if (powers[i].name == n) {
            return powers[i];
        }
    }
    var p = JSON.parse(JSON.stringify(powers[0]));
    var pkeys = Object.keys(p);
    for (var i = 0; i < pkeys.length; i++) {
        switch (true) {
            case typeof p[pkeys[i]] == 'number':
                p[pkeys[i]] = 0;
                break;
            case typeof p[pkeys[i]] == 'string':
                p[pkeys[i]] = '';
                break;
            case typeof p[pkeys[i]] == 'boolean':
                p[pkeys[i]] = false;
                break;
        }
    }
    return p;
}

function getico(u) {
    if(u.b!=null && u.b!=''){return 'sico/'+u.b;}
    var ico = '';
    ico = (getpower(u.power) || { ico: '' }).ico;
    if (ico != '') { ico = 'sico/' + ico; }
    if (ico == '' && (u.ico || '') != '') {
        ico = 'dro3/' + u.ico;
    }
    return ico;
}



function stealthit(u) {
    var power2 = getpower(u.power);
    if (u.s && power2.rank > power.rank) {
        ux[u.id].addClass('hid');
    } else {
        ux[u.id].removeClass('hid');
    }
}
var uhtml = "*";

var rhtml = "*";
var cbr = 0;
var isrb;
var ism;
var cbm = 0;
const userStatus = {
    microphone: false
  };

function rjoin(rid) {
	if(rid == currentRoomId) return;
	if(currentRoomId != undefined){
		for(let i = 1; i <= 5; i++){
			if(micStatus[i][currentRoomId] == socket.id){
				toggleMicrophone(mics[i-1]);
			}
		}
	}
	
	for(let i = 0; i < mics.length; i++){
		if(micStatus[i+1][rid]){
			mics[i].classList.add('busy');
		}else{
			mics[i].classList.remove('busy');
		}
	}
	currentRoomId = rid;
	socket.emit("joinRoom", { rid, userStatus });
    cbr++;
	clearTimeout(isrb);
	isrb = setTimeout(function(){
		cbr = 0;
	},3000);
    var pwd = '';
    if (getroom(rid).needpass && !power.publicmsg ) { pwd = prompt('كلمه المرور؟', ''); if (pwd == '') { return; } }
		if(cbr <= 6){
    send('rjoin', { id: rid, pwd: pwd,cout:cbr });
		};
}

function rjoinAdmin(rid,pass) {
    if (getroom(rid).needpass) {
    send('rjoin', { id: rid, pwd: pass });
	}else{
    rjoin(rid);
	};
}

var umsg = "*";

function emo(data) {
    for (i = 0; i < 5; i++) {
        var emov = 'ف';
        var rg = new RegExp('(^| )' + emov + '([0-9][0-9][0-9]|[0-9][0-9]|[0-9])( |$|\n)');
        var match = rg.exec(data);
        if (match != null) {
            var inx = parseInt(match[2]) - 1;
            if (inx < emos.length && inx > -1) {
                data = data.replace(rg, '$1<img src="emo/' + emos[inx] + '" alt="ف$2" title="ف$2" class="emoi">$3');
            }
        }
    }
    return data;
}

function updateTimes() {
    $.each($(".tago"), function(i, e) { if ($(e).attr("ago") == null) { $(e).attr("ago", new Date().getTime()); } else { $(e).html(agoo(parseInt($(e).attr("ago")))); } });
    setTimeout(function() {
        updateTimes();
    }, 20000);prs();
}

function agoo(d) {
    var dd = new Date().getTime() - d;
    var v = Math.abs(dd) / 1000;
    if (v < 59) { "الآن" }
    v = v / 60;
    if (v < 59) { return parseInt(v) + "د" }
    v = v / 60;
    return parseInt(v) + "س"
}

function ytVidId(url) {
    var p = /(?:\s+)?(?:^)?(?:https?:\/\/)?(?:http?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\s+|$)/;
    return (url.match(p)) ? [RegExp.$1.split("<").join("&#x3C;").split("'").join('').split('"').join('').split('&').join(''), RegExp.lastMatch] : [];
}

function ytube(lnk, e) {
    $('<iframe width="95%" style="max-width:240px;" height="200" src="' + lnk + '" frameborder="0" allowfullscreen></iframe>').insertAfter($(e));
    $(e).remove();
}

function openSco(id) {
    var dsed = $("<div><div class='form'><input dir='rtl' value='' name='name' autocomplete='off' required><label for='name' class='label-name'><span class='content-name'>اضف رد لا يزيد عن 100 حرف</span></label></div><button onclick='send(\"sco\",{bid:\"" + id + "\",c:$(this).parent().find(\"input\").val()});$(\"#d2bc .sco\").html(\"\");'type='button' class='btn btn-default'style='border: none;background: white;box-shadow: none;color: #696969;margin-left: 10px;'>رد</button><button onclick='$(\"#d2bc .sco\").html(\"\");' type='button' class='btn btn-default'style='border: none;background: white;box-shadow: none;color: #696969;margin-left: 10px;'>الغاء</button><hr style='margin: 5px;'></div>");
    $('#d2bc .sco').html('');
    var a = $('.bid' + id + ' .sco').html(dsed).show();
    a.find('input').val('')
}


function AddMsg(wid, data) {
    var msg = $(umsg);
    var u = getuser(data.uid);

    msg.find(".u-pic").css('background-image', 'url("' + data.pic + '")').click(function() { upro(data.uid) });

    msg.find(".u-topic").html(data.topic).css("color", data.ucol);
    data.msg = emo(data.msg)
    var yt = ytVidId(data.msg.replace(/\n/g, ''));
    if (yt.length > 1 && wid != '#d2') {
        data.msg = data.msg.replace(yt[1], "<button onclick='ytube(\"https://www.youtube.com/embed/" + yt[0] + "\",this);' style='font-size:40px!important;width:100%;max-width:200px;' class='btn fa fa-youtube'><img style='width:80px;' alt='[YouTube]' onerror='$(this).parent().remove();' src='https://img.youtube.com/vi/" + yt[0] + "/0.jpg' ></button>")
    }
    msg.find(".u-msg").html(data.msg + '&nbsp;').css("color", data.mcol);
    if (data.class != null) { msg.addClass(data.class) }

    msg.addClass('mm');
    if (u != null) {
        var ico = getico(u);
        if (ico != '') { msg.find('.u-ico').attr('src', ico) };
        msg.find('.u-topic').css({ "color": u.ucol, "background-color": u.bg })
		
    } else { msg.find('.u-ico').remove();
        msg.find('.u-topic').css({ "color": data.ucol || '#000', "background-color": data.bg || '' }) }
    var isbc = (wid == '.d2bc');
    if (data.bid != null) {
		msg.css({borderColor:'#61616194',width:'99%'})
        msg.addClass('bid' + data.bid);
        if (power.delbc || data.lid == getuser(myid).idreg) {
      msg.append('<a onclick="send(\'delbc\',{bid:\'' + data.bid + '\'})" style="margin-right:20px;padding: 3px 0 0;font-size: 15px!important;color: #616161;" class="btn minix fa fa-times fr">&nbsp;</a>');
        }
	    if(data.bcc){
		var vxsa = JSON.parse(data.bcc)
		}else{
		var vxsa = data.bcc;
		};
		
		  if(data.likes){
		var liks = JSON.parse(data.likes)
		}else{
		var liks = data.likes
		};

	
  
    msg.append('<a onclick="send(\'likebc\',{bid:\'' + data.bid + '\'})" style="font-size: 15px!important;color: #616161;" class="btn minix fa fa-thumbs-up fr"> '+liks.length || 0+'</a>')
    msg.append('<a onclick="openSco(\'' + data.bid + '\')" style="font-size: 15px!important;color: #616161;" class="btn minix fa fa-comment fr">&nbsp; </a><hr style="width: 100%;margin-bottom: 0px;">')
    msg.append('<div class="sco" style="display: none;padding: 0 5px;width: 100%;"><div>')
  var mmm = $('<div class="bccos" style="float: right;width: 100%;padding: 2px" ></div>')
	  $.each(vxsa,function(i,e){
		  $('<div style="border: 1px solid;float: right;width: 100%;padding: 2px;margin-bottom: -1px;" class="fl"><div class="fl" style="width: 87%;text-align: right;" c><span class="fr" style="width: 100%;">'+e.topic+'</span><span class="fl" style="color: #7e7c7c;width: 100%">'+e.pccus+'</span></div><img class="fr" src="'+e.pic+'" style="width: 30px;"></div>').prependTo(mmm);
		  
	  })
	  msg.append(mmm);
  }
    if (data.mi != null) {
        msg.addClass('mi' + data.mi);
        if (power.delmsg) {
            msg.append('<a onclick="send(\'delmsg\', {mi:\'' + data.mi + '\',topic:$(this).parent().find(\'.u-topic\').text()});" style="margin-top:22px;padding:4px;" class="btn minix btn-primary fa fa-times fr">&nbsp;</a>');
        }
    }
    var w=$(wid);  
    if (isbc == true) {
        msg.prependTo(w)
    } else {
        msg.appendTo(w)
    } 
    $.each(msg.find('a.uplink'), function(i, e) {
        var lnk = $(e).attr('href');
        $.ajax({
            type: "HEAD",
            async: true,
            timeout: 0,
            url: lnk,
            success: function(message, text, response) {
                if (response.getResponseHeader('Content-Type').match(/image/i)) {
                    var ob = $("<div style='width:100%;max-height:200px;'><button class='btn fa fa-image'>عرض الصوره</button></div>");
                    ob.insertAfter(e);
                    $(e).remove();
                    ob.find("button").click(function() {
                        ob.children().remove();
                        $("</br><a href='" + lnk + "' target='_blank'><img style='max-width:240px;max-height:200px;' src='" + lnk + "' class='hand fitimg'></a>").insertAfter(ob);
                        ob.remove();
                    });
                }
                if (data["msg"]["includes"]("wav")) {
                    $("#c" + data.pm)["find"](".u-msg")["html"]($("<div><i\x20class=\x27fa\x20fa-microphone\x20\x20\x27></i>\x20" + "تسجيل\x20صوتي" + "</div>"));
                  }
                if (response.getResponseHeader('Content-Type').match(/video/i)) {
                    var ob = $("<div style='width:100%;max-height:200px;'><button class='btn fa fa-youtube-play'>عرض الفيديو</button></div>");
                    ob.insertAfter(e);
                    $(e).remove();
                    ob.find("button").click(function() {
                        ob.children().remove();
                        $("<video style='width:95%;max-height:200px;' controls><source src='" + lnk + "'></video>").insertAfter(ob);
                        ob.remove();
                    });

                }
                if (response.getResponseHeader('Content-Type').match(/audio/i)) {
                    var ob = $("<div style='width:100%;max-height:300px;'><button class='btn fa fa-youtube-play'>مقطع صوت</button></div>");
                    ob.insertAfter(e);
                    $(e).remove();
                    ob.find("button").click(function() {
                        ob.children().remove();
                        $("<audio style='width:95%;' controls><source src='" + lnk + "' type='audio/mpeg'></audio>").insertAfter(ob);
                        ob.remove();
                    });
                }
            }
        });
    });
    if (isbc == true) {
        if (w.find('.mm').length >= 100) {
            $(wid + " .mm").last().remove();
        } 
         
          if(w[0].scrollTop==0){
            w.scrollTop(msg.innerHeight());
          }  
            w.stop().animate({
                scrollTop: 0
              }, bct); 
       
    } else {
        if (w.find('.mm').length >= 30) {
            $(wid + " .mm").first().remove();
        }
        w.stop().animate({
            scrollTop: w[0].scrollHeight
          }, msgt); 
    } 
    return msg;
}


$(function() {
  
    var _0x5cd145 = !![];
    $("#myadmin")["click"](function() {
     
      if (_0x5cd145) {
        _0x5cd145 = ![];
        $(".notadmin")["hide"]();
        $(".isadmin")["show"]();
        $("#myadmin")["text"]("أدوات\x20اخرى");
      } else {
        _0x5cd145 = !![];
        $(".isadmin")["hide"]();
        $(".notadmin")["show"]();
        $("#myadmin")["text"]("أدوات\x20إداريه");
      }
    });
   });
var isclose = false;

function gift(id, dr3) {
    send('action', { cmd: 'gift', id: id, gift: dr3 });
}
function ubnr(id, bnr) {
    if(bnr==null){return;}
    if(bnr=='')
    {
        send('bnr-', {u2:id});

    }else{
        send('bnr', {u2:id,bnr:bnr});

    }
}
function close(i) { if (isclose) { return; }
    isclose = true;
    window.onbeforeunload = null;
    prs();
    setTimeout('prs();location.href="/";', i || 3000);
    lstat('info', 'يتم إعاده الإتصال') }

function loadblocked() {
    var d = getv('blocklist');
    if (d != null && d != "") {
        try {
            d = JSON.parse(d);
            if (Array.isArray(d)) {
                blocked = d;
            }
        } catch (er) {}
    }
}

function saveblocked() {
    var d = JSON.stringify(blocked);
    setv('blocklist', d);
}

function unmute(u) {
    for (var i = 0; i < blocked.length; i++) {
        var bl = blocked[i];
        if (bl.lid == u.lid || bl.idreg == u.idreg) {
            blocked.splice(i, 1);
            updateu(u.id);
        }
    }
    saveblocked();
}

function muteit(u) {
    if (u.id == myid) { return; }
    for (var i = 0; i < blocked.length; i++) {
        var bl = blocked[i];
        if (bl.lid == u.lid || bl.idreg == u.idreg) {
            return;
        }
    }
    blocked.push({ lid: u.lid, topic: u.topic, idreg: u.idreg });
    updateu(u.id);
    saveblocked();
}

function ismuted(u) {
    for (var i = 0; i < blocked.length; i++) {
        var bl = blocked[i];
        if (bl.lid == u.lid || bl.username == u.username) {
            return true;
        }
    }
    return false;
}

Number["prototype"]["time"] = function() {
    var gid = this;
    var modelValue = 0;
    var deltaY = 0;
    var res_02 = 0;
    var w = 0;
    var direction = "";
    return modelValue = parseInt(gid / (1E3 * 60 * 60 * 24)), gid = gid - parseInt(1E3 * 60 * 60 * 24 * modelValue), deltaY = parseInt(gid / (1E3 * 60 * 60)), gid = gid - parseInt(1E3 * 60 * 60 * deltaY), res_02 = parseInt(gid / (1E3 * 60)), gid = gid - parseInt(1E3 * 60 * res_02), w = parseInt(gid / 1E3), deltaY > 9 ? direction = direction + (deltaY + ":") : direction = direction + ("0" + deltaY + ":"), res_02 > 9 ? direction = direction + (res_02 + ":") : direction = direction + ("0" + res_02 + ":"),
    w > 9 ? direction = direction + w : direction = direction + ("0" + w), direction;
   };

function upro(id) {
    var rowner = power.roomowner;
    var u = getuser(id);
    if (u == null) { return; }
    if (u.s && getpower(u.power).rank > power.rank) { return; }
    var ht = $("#upro");
    var upic = u.pic.split('.');
    if (u.pic.split('/').pop().split('.').length > 2) {
        upic.splice(upic.length - 1, 1);
    }
 ht["find"](".star")["html"]("");
 ht["find"](".timetoday")["text"]();
 ht["find"](".pointtop")["text"]();
 istogladmin = !![];
 $(".isadmin")["hide"]();
 $(".notadmin")["show"]();
 $("#myadmin")["text"]("أدوات\x20إداريه");
    ht.find('.u-pic').css('background-image', 'url("' + u.pic).removeClass('fitimg').addClass('fitimg');
    ht.find('.u-msg').html(u.msg);
	if(u.evaluation == 0){
    ht.find('.star').html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
	}else if(u.evaluation > 0 && u.evaluation < 100){
    ht.find('.star').html('<i class="fa fa-star" style="color:orange"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
	}else if(u.evaluation > 100 && u.evaluation < 200){
    ht.find('.star').html('<i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
	}else if(u.evaluation > 200 && u.evaluation < 300){
    ht.find('.star').html('<i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
	}else if(u.evaluation > 300 && u.evaluation < 400){
    ht.find('.star').html('<i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star"></i>');
	}else if(u.evaluation > 400){
    ht.find('.star').html('<i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i>');
	};
   ht["find"](".u-pic")["css"]("background-image", "url(\x22" + upic["join"](".") + '")')["removeClass"]("fitimg")["addClass"]("fitimg");
 if (u["time"] != null) {
   ht["find"](".timetoday")["text"]((new Date((new Date)["getTime"]() - u["time"]))["getTime"]()["time"]() + " :التواجد");
 }
 ht["find"](".pointtop")["text"](u["evaluation"] + "\x20:\x20النقاط");		
    if (uf[(u.co || '').toLocaleLowerCase()] != null) {
        ht.find('.u-co').text(uf[u.co.toLocaleLowerCase()]).append('<img class="fl" src="https://flagcdn.com/16x12/' +  (u.co.toLowerCase().replace('il','ps') || 'tn') + '.png">');

    }else{ht.find('.u-co').text('--');}
    var ico = getico(u);
    var rtxt = 'بدون غرفه';
    var room = getroom(u.roomid);
    if (power.unick == true || (power.mynick == true && id == myid)) {
        $('.u-topic').val(u.topic);
        $("#myadmin")["show"]();
        ht.find('.nickbox').show();
        ht.find('.u-nickc').off().click(function() {
            send('unick', { id: id, nick: ht.find('.u-topic').val() });
        });
    } else {
        ht.find('.nickbox').hide();
    }
    if (power.kick) {
        ht.find('.roomzbox').show();
        $("#myadmin")["show"]();
        ht.find('.rpwd').val('');
        var pba = ht.find('.roomz');
        pba.empty();
        for (var i = 0; i < rooms.length; i++) {
            var hh = $("<option></option>");

            hh.attr('value', rooms[i].id);
            if (rooms[i].id == myroom) {
                hh.css('color', 'blue');
                hh.attr('selected', 'true');

            }
            hh.text('[' + $('#rooms .r' + rooms[i].id).attr('v') + ']' + rooms[i].topic);


            pba.append(hh);
        }
        var options = $('#rooms .roomz option');
        var arr = options.map(function(_, o) { return { t: $(o).text(), v: o.value }; }).get();
        arr.sort(function(o1, o2) {
            var t1 = o1.t.toLowerCase(),
                t2 = o2.t.toLowerCase();

            return t1 > t2 ? -1 : t1 < t2 ? 1 : 0;
        });

        ht.find('.uroomz').off().click(function() {
			send('action', { cmd:'rinvite',id: id, rid: pba.val(), pwd: ht.find('.rpwd').val()});

        });
    } else {
        ht.find('.roomzbox').hide();
    }
    if (power.ulike) {
        $("#myadmin")["show"]();
        ht.find('.likebox').show();
        ht.find('.likebox .ulikeins').val(u.rep);
        ht.find('.u-likeins').off().click(function() {
            var likes = parseInt(ht.find('.likebox .ulikeins').val()) || 0;
            send('setLikes', { id: u.id, likes: likes });

        });
    } else {
        ht.find('.likebox').hide();
    }
    if (power.setpower) {
        powers = powers.sort(function(a, b) { return b.rank - a.rank; });
        ht.find('.powerbox').show();
        $("#myadmin")["show"]();
        var pb = ht.find('.userpower');
        pb.empty();
        pb.append("<option></option>");
        for (var i = 0; i < powers.length; i++) {
			if(powers[i].name != 'Hide'){
            var hh = $("<option></option>");

            if (powers[i].rank > power.rank) {
                hh = $("<option disabled></option>");
            }
            hh.attr('value', powers[i].name);
            if (powers[i].name == u.power) {
                hh.css('color', 'blue');
                hh.attr('selected', 'true');

            }
            hh.text('[' + powers[i].rank + '] ' + powers[i].name);

            pb.append(hh);
        }
		};
        ht.find('.powerbox .userdays').val(0);
        ht.find('.upower').off().click(function() {
            var days = parseInt(ht.find('.userdays').val()) || 0;
            $.get('cp.nd?cmd=setpower&token=' + token + '&id=' + u.idreg.split("#")[1] + '&power=' + pb.val() + '&days=' + days, function(d) {
                var jq = JSON.parse(d);
                if (jq.err == true) {
                    alert(jq.msg);
                } else {
                    alert('تم ترقيه العضو');
					send('setpoweron', { id: u.id,power:pb.val()});
                }
            });

        });
    } else {
        ht.find('.powerbox').hide();
    }
    if (room != null) {
        if (room.ops != null) {
            if (room.ops.indexOf(getuser(myid).lid) != -1 || room.owner == getuser(myid).lid || power.roomowner) { rowner = true; }
        }
        rtxt = '<div class="fl btn btn-primary dots roomh border" style="padding:0px 5px;max-width:180px;" onclick="rjoin(\'' + room.id + '\')"><img style="max-width:24px;" src=\'' + room.pic + '\'>' + room.topic + '</div>';
        ht.find('.u-room').html(rtxt);
        ht.find(".u-room").show();
    } else {
        ht.find(".u-room").hide();
    }
    if (rowner) { ht.find(".urkick,.umod").show(); } else {
        ht.find(".urkick,.umod").hide();
    }

    if (ismuted(u)) {
        ht.find('.umute').hide();
        ht.find('.uunmute').show();
    } else {
        ht.find('.umute').show();
        ht.find('.uunmute').hide();
    }
    if (!power["meiut"]) {
        ht["find"](".meiut")["hide"]();
      } else {
        ht["find"](".meiut")["show"]();
      }
    ht.find('.ureport').hide();
    if (power.setpower != true) {
        ht.find(".ubnr").hide();
    } else { ht.find(".ubnr").show(); }
    if (power.history != true) {
        ht.find(".uh").hide();
    } else { ht.find(".uh").show(); }
    if (power.kick < 1) {
        ht.find(".ukick").hide();
        ht.find(".udelpic").hide();
    } else { ht.find(".ukick").show();
        ht.find(".udelpic").show(); }
    if (!power.ban) {
        ht.find(".uban").hide();
    } else { ht.find(".uban").show(); }
    if (power.upgrades < 1) {
        ht.find(".ugift").hide();
    } else { ht.find(".ugift").show(); }

    ht.find('.uh').css('background-color', "").off().click(function() {
        $(this).css('background-color', "indianred");
        ht.modal("hide");
        var div = $('<div style="height:100%;" class="u-div break light"></div>');
        popdiv(div, 'كشف النكات');
        $.get("uh?token=" + token + "&u2=" + id, function(d) {
            if (typeof d == 'object') {
                $.each(d, function(i, e) {
                    var dd = $("<div class='borderg'></div>");
                    dd.append($('<div></div>').text(e.username+' : الاسم '));
                    dd.append($('<div></div>').text(e.topic+' : الزخرفة '));
                    dd.append($('<div></div>').text(e.ip));
                    dd.append($('<div></div>').text(e.fp));
                    div.append(dd);
                });
            } else {
                div.text(d);
            }
        });
    });
    ht.find('.umute').css('background-color', "").off().click(function() { $(this).css('background-color', "indianred");
        muteit(u);
        ht.find('.umute').hide();
        ht.find('.uunmute').show(); });
    ht.find('.uunmute').css('background-color', "").off().click(function() { $(this).css('background-color', "indianred");
        unmute(u);
        ht.find('.umute').show();
        ht.find('.uunmute').hide(); });
        ht["find"](".meiut")["css"]("background-color", "")["off"]()["click"](function() {
            $(this)["css"]("background-color", "indianred")["text"](!u["meiut"] );
            send("action", {
              cmd : "meiut",
              id : id
            });
            ht["modal"]("hide");
          });
          if (u["meiut"]) {
            $(".meiut")["css"]("background-color", "indianred")["text"]("الغاء\x20الاسكات");
          } else {
            $(".meiut")["css"]("background-color", "")["text"]("اسكات");
          }

           var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
           function abbreviateNumber(value) {
           
            var indexLookupKey = Math["log10"](Math["abs"](value)) / 3 | 0;
            if (indexLookupKey == 0) {
              return value;
            }
            var currentIndex = SI_SYMBOL[indexLookupKey];
            var beats = Math["pow"](10, indexLookupKey * 3);
            var length = value / beats;
            return length["toFixed"](1) + currentIndex;
           }
    ht.find('.umod').css('background-color', "").off().click(function() { $(this).css('background-color', "indianred");
        send('op+', { lid: u.lid }); });
    ht.find('.ulike').css('background-color', "").off().click(function() { $(this).css('background-color', "indianred");
        send('action', { cmd: 'like', id: id }); }).text(abbreviateNumber(u.rep || 0) + '');
    ht.find('.ureport').css('background-color', "").off().click(function() { $(this).css('background-color', "indianred");
        send('action', { cmd: 'report', id: id }); });
    ht.find('.ukick').css('background-color', "").off().click(function() { $(this).css('background-color', "indianred");
        send('action', { cmd: 'kick', id: id });
        ht.modal("hide"); });
    ht.find('.udelpic').css('background-color', "").off().click(function() { $(this).css('background-color', "indianred");
        send('action', { cmd: 'delpic', id: id }); });
    ht.find('.urkick').css('background-color', "").off().click(function() { $(this).css('background-color', "indianred");
        send('action', { cmd: 'roomkick', id: id });
        ht.modal("hide"); });
    ht.find('.uban').css('background-color', "").off().click(function() { $(this).css('background-color', "indianred");
        send('action', { cmd: 'ban', id: id });
        ht.modal("hide"); });
    ht.find('.unot').css('background-color', "").off().click(function() {
        var m = prompt('اكتب رسالتك', '');
        if (m == null || m == '') { return; }

        $(this).css('background-color', "indianred");
        send('action', { cmd: 'not', id: id, msg: m });
    });
    ht.find('.ugift').popover('hide') .css('background-color', "").off().click(function() {

        var dd = $('<div class="break" style="height:50%;min-width:340px;background-color:white;"></div>');
        $.each(dro3, function(i, e) {
            dd.append("<img style='padding:5px;margin:4px;max-width:160px;max-height:40px;' class='btn hand borderg corner' src='dro3/" + e + "' onclick='gift(\"" + id + "\",\"" + e + "\");$(this).parent().pop(\"remove\")'>");
        });
        dd.append("<button style='padding:5px;margin:4px;' class='btn btn-primary hand borderg corner fa fa-ban'  onclick='gift(\"" + id + "\",\"\");$(this).parent().pop(\"remove\")'>إزاله الهديه</button>");
        ht.find('.ugift')
            .popover({ placment: 'left', content: dd[0].outerHTML + '', trigger: 'focus', title: 'أرسل هديه !', html: true })
            .popover('show');
        $(".popover-content").html(dd[0].outerHTML);
         });
    ht.find('.ubnr').popover('hide').css('background-color', "").off().click(function() {

        var dd = $('<div class="break" style="height:50%;min-width:340px;background-color:white;"></div>');
        $.each(sico, function(i, e) {
            dd.append("<img style='padding:5px;margin:4px;max-width:160px;max-height:40px;' class='btn hand borderg corner' src='sico/" + e + "' onclick='ubnr(\"" + id + "\",\"" + e + "\");$(this).parent().pop(\"remove\")'>");
        });
        dd.append("<button style='padding:5px;margin:4px;' class='btn btn-primary hand borderg corner fa fa-ban'  onclick='ubnr(\"" + id + "\",\"\");$(this).parent().pop(\"remove\")'>إزاله البنر</button>");
        ht.find('.ubnr') 
            .popover({ placment: 'left', content: dd[0].outerHTML + '', trigger: 'focus', title: 'البنر', html: true })
            .popover('show');
        $(".popover-content").html(dd[0].outerHTML);
      });
   
    ht.modal({ backdrop: "static" }); 
    var uico = "";
    if (ico != '') {
        uico = '<img class="fl u-ico"  alt="" src="' + ico + '">'
    }
    ht.find('.modal-title').html("<img style='width:18px;height:18px;' src='" + u.pic + "'>" + uico + u.topic);
    ht.find('.upm').off().click(function() { ht.modal("hide");
        openw(id, true); 
		 send("isclosed", {id:id});
		});
}

function popframe(lnk, title) {
    if ($('#uh').length) { $('#uh').parent().parent().remove(); }
    newpop(title, "<iframe class='filh' style='overflow: scroll !important;width:100%;height:100%;border:0px;' id='uh' src='" + lnk + "'></iframe>");
}

function popdiv(div, title) {
    if ($('#uh').length) { $('#uh').parent().parent().remove(); }
    newpop(title, div);

}
 
function newpop(title, body) {
    var p = $($("#pop").html());
    p.find(".title").append(title);
    p.find('.pphide').addClass('phide');
    p.find('.body').append(body);
    $('.dad').append(p);
    p.show();
    return p;
}

function rusers(rid) {
    var r = getroom(rid);
    if (r == null) { return []; }
    return $.grep(users, function(e) { return e.roomid == rid; })
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return ('' + decodeURIComponent(sParameterName[1])).split("<").join("&#x3C;");
        }
    }
}

function mkr() {
    $('#ops').children().remove();

    var ht = $("#mkr");

    ht.find(".rsave").hide();
    ht.find(".rdelete").hide();
    ht.find('.modal-title').text('إنشاء غرفه جديدة');
    ht.modal({ backdrop: "static" });
    ht.find(".rtopic").val('');
    ht.find(".rabout").val('');
    ht.find(".rpwd").val('');
    ht.find(".rwelcome").val('');
    ht.find(".rmax").val('');
    ht.find(".rlike").val("");
    ht.find('.rdel').prop('checked', false).parent().show();
    ht.find(".broadcast").prop("checked", ![]).parent().show()
    ht.find('.rmake').show().off().click(function() {

        send("r+", {
            topic: ht.find(".rtopic").val(),
            about: ht.find(".rabout").val(),
            welcome: ht.find(".rwelcome").val(),
            pass: ht.find(".rpwd").val(),
            max: ht.find(".rmax").val(),
            like : ht["find"](".rlike")["val"](),
            delete: ht.find('.rdel').prop('checked') == false,
            broadcast : ht.find(".broadcast").prop("checked")
        });
        ht.modal("hide");

    })
}

function redit(id) {
    $('#ops').children().remove();

    if (id == null) { id = myroom }

    var r = getroom(id);

    if (r == null) { return; }
    var ht = $("#mkr");
    ht.find('.modal-title').text('إداره الغرفه');

    ht.find(".rsave").show().off().click(function() {
        send("r^", {
            id: id,
            topic: ht.find(".rtopic").val(),
            about: ht.find(".rabout").val(),
            welcome: ht.find(".rwelcome").val(),
            broadcast : ht.find(".broadcast").prop("checked"),
            pass: ht.find(".rpwd").val(),
            max: ht.find(".rmax").val(),
            like : ht.find(".rlike").val()
        });
        ht.modal("hide");

    });
    ht.find(".rdelete").show().off().click(function() {
        send("r-", { id: id });
        ht.modal("hide");

    });;
    ht.modal({ backdrop: "static", title: "ffff" });
    ht.find(".rpwd").val('');
    ht.find(".rtopic").val(r.topic);
    ht.find(".rabout").val(r.about);
    ht.find(".rwelcome").val(r.welcome);
    ht.find(".broadcast").prop("checked", r.broadcast);
    ht.find(".rmax").val(r.max);
    ht.find(".rlike").val(r.rmli);
    ht.find('.rmake').hide();
    ht.find('.rdel').parent().hide();
    send('ops', {});
}

function updaterooms() {
    if (needUpdate == false) { return; }

    var u = getuser(myid)
    if (u == null) { return; }
    $('.brooms').text(rooms.length);
    $.each(rooms, function(i, e) {
        var ht = $(".r" + e.id)
        if (e.owner == (u.idreg || '')) {
            ht.css('background-color', 'snow');
        }
        var ru = $.grep(rusers(e.id), function(e) { return e.s == null; });
        ht.find(".uc").html(ru.length + "/" + e.max).attr("v", ru.length)
        ht.attr("v", ru.length);
    });
    $('#rooms').find(".room").sort(function(a, b) {
        var av = parseInt($(a).attr('v'));
        var bv = parseInt($(b).attr('v'));
        if (av == bv) {
            return ($(a).find('.u-topic').text() + '').localeCompare(($(b).find('.u-topic').text() + ''))
        }
        return av < bv ? 1 : -1;
    });
}


function updater(r) {
    var ht = $(".r" + r.id);
    ht.find(".u-pic").attr("src", r.pic + '?1');
    ht.find(".u-topic").html(r.topic);
    ht.find(".u-msg").html(r.about); 
    var gh = $('#room' + r.id);

    if (r.broadcast) {
        if (ht.find(".istoa").length == 0) {
          $("<span\x20class=\x22istoa\x20fa\x20fa-microphone\x22\x20style=\x22margin:\x204px\x204px\x200;font-size:\x2018px\x20!important;color:\x20gray;\x22></span>")["appendTo"](ht);
        }
      } else {
        if ($(".r" + r.id + ">span")["is"](".istoa")) {
          $(".r" + r.id + ">span.istoa")["remove"]();
          $(".broadcasters")["html"]("");
          istalkromm = ![];
          $(".broadcasters")["css"]("padding", "0px");
          $("#d2")["css"]("padding-top", "0px");
        }
      }
    if (r.needpass) { ht.find('.u-topic').prepend('<img src="imgs/lock.png" style="margin:2px;margin-top:4px;" class="fl">') }
}

function addroom(r) {
    var ht = $(rhtml);
    ht.addClass("r" + r.id);
    ht.attr("onclick", "rjoin('" + r.id + "');");
    var data = $.grep(rusers(r.id), function(secTypes) {
        return secTypes["s"] == null;
      });
      ht.find(".uc")["text"](data["length"] + "/" + r["max"])["attr"]("v", data["length"]);
      ht.attr("v", data["length"]);
    $("#rooms").append(ht);
    updater(r);
}

function getuserbylid(id) { return $.grep(users, function(value) { return value.lid == id; })[0]; }

function getuserbyname(username) { return $.grep(users, function(value) { return value.username == username; })[0]; }

function getuser(id) { return $.grep(users, function(value) { return value.id == id; })[0]; }

function getroom(id) { return $.grep(rooms, function(value) { return value.id == id; })[0]; }

function wclose(id) {
    $("#c" + id).remove();
    $(".w" + id).remove();
    msgs();
}

function hash(key, seed) {
    var remainder, bytes, h1, h1b, c1, c2, k1, i;
    key = key.join('')
    remainder = key.length & 3; 
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;
    while (i < bytes) {
        k1 =
            ((key.charCodeAt(i) & 0xff)) |
            ((key.charCodeAt(++i) & 0xff) << 8) |
            ((key.charCodeAt(++i) & 0xff) << 36) |
            ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;

        k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 36) * c1) & 0xffff) << 36))) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 36) * c2) & 0xffff) << 36))) & 0xffffffff;

        h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 36) * 5) & 0xffff) << 36))) & 0xffffffff;
        h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 36) + 0xe654) & 0xffff) << 36));
    }
    k1 = 0;
    switch (remainder) {
        case 3:
            k1 ^= (key.charCodeAt(i + 2) & 0xff) << 36;
        case 2:
            k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            k1 ^= (key.charCodeAt(i) & 0xff);
            k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 36) * c1) & 0xffff) << 36)) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 36) * c2) & 0xffff) << 36)) & 0xffffffff;
            h1 ^= k1;
    }
    h1 ^= key.length;
    h1 ^= h1 >>> 36;
    h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 36) * 0x85ebca6b) & 0xffff) << 36)) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 36) * 0xc2b2ae35) & 0xffff) << 36))) & 0xffffffff;
    h1 ^= h1 >>> 36;
    return (h1 >>> 0).toString(36);;
}

function ccode() {

    try {
        var c = Math.ceil(new Date().getTime() / (1000 * 60 * 90)).toString(36);
        c = c + (c.split('').reverse().join(''));
        if (getv('sx') != '') {
            c = getv('sx');
        } else { setv('sx', c); }

        return c;
    } catch (err) { console.log(err); return 'ERR'; }
}

function onvnot(vnot, id) {
    $(vnot).on('touchstart mousedown', function(e) { hl($(vnot), 'danger');
        record(function(blob) { onrec(blob, id); }, $(vnot)) });
    $(vnot).on('touchend mouseup', function(e) { hl($(vnot), 'primary');
        recordStop(); });
}

function openw(id, open) {
    var u = getuser(id);
    if (u == null) { return; }
    if ($("#c" + id).length == 0) {
        var uhh = $(uhtml);
        var ico = getico(u);
        if (ico != '') {
            uhh.find('.u-ico').attr('src', ico);
        }
        uhh.find(".u-msg").text("..");
        uhh.find(".u-pic").css({ 'background-image': 'url("' + u.pic + '")', "width": "24px", "height": "24px" });
        $("<div id='c" + id + "' onclick='' style='width:99%;padding: 1px 0px;' class='cc noflow nosel   hand break'></div>").prependTo("#chats");
        $("#c" + id).append(uhh).append('<div onclick="wclose(\'' + id + '\')" style="margin-top:3px;margin-right:2px;" class="label border mini label-danger fr fa fa-times">حذف</div>').find('.uzr').css("width", "76%").attr('onclick', "openw('" + id + "',true);").find('.u-msg').addClass('dots');

        var dod = $($("#cw").html());
        $(dod).addClass("w" + id);
        $(dod).find('.emo').addClass('emo' + id);
        dod.find(".fa-user").click(function() { upro(id);
            $("#upro").css('z-index', '2002'); })

        dod.find(".head .u-pic").css('background-image', 'url("' + u.pic + '")')
        var uh = $(uhtml);
        if (ico != '') {
            uh.find('.u-ico').attr('src', ico);
        }
        uh.find(".head .u-pic").css("width", "28px").css("height", "28px").css("margin-top", "-2px").parent().click(function() { upro(id); });
        uh.css("width", "70%").find(".u-msg").remove();
        $(dod).find(".uh").append(uh);
        $(dod).find(".d2").attr("id", "d2" + id);
        $(dod).find(".wc").click(function() { wclose(id); });
        $(dod).find(".fa-share-alt").click(function() { sendfile(id); });

        $(dod).find(".sndpm").click(function(e) { e.preventDefault();
            sendpm({ data: { uid: id } }) });
        $(dod)["find"](".microphone")["click"](function() {
            StartRecorder(id);
        });
        $(dod)["find"](".stopmico")["click"](function() {
            StopRecorder();
        });
        $(dod).find('.call').click(function() { call(id); });
        if(vchat!=true){
            $(dod).find('.call').remove();
        }
       
        $(dod).find(".tbox").addClass("tbox" + id).keyup(function(e) {

            if (e.keyCode == 13) { e.preventDefault();
                sendpm({ data: { uid: id } }) }
				
					if(updateTypingT) updateTyping(id)
        });
		
        var ubg = u.bg;
        if (ubg == '') { ubg = '#FAFAFA'; }
        $(dod).find(".head").append(uhead());
        dod.find('.u-ico').attr('src', ico);

        $(".dad").append(dod);
        emopop('.emo' + id);
        $(dod).find('.head .u-pic').css('background-image', 'url(\'' + u.pic + '\')').css("width", "20px").css("height", "20px").parent().click(function() { upro(id);
            $("#upro").css('z-index', '2002') });
        $(dod).find('.head .u-topic').css("color", u.ucol).css("background-color", ubg).html(u.topic);
        $(dod).find('.head .phide').click(function() { $(dod).removeClass('active').hide(); })
        $("#c" + id).find('.uzr').click(function() { $("#c" + id).removeClass("unread");
            msgs(); });
        updateu(id);
    }


    if (open) {
        $(".phide").trigger('click');
        $(".w" + id).css("display", '').addClass('active').show();
        $('.pn2').hide();
        setTimeout(function() {
            fixSize();
            $('.w' + id).find('.d2').scrollTop($('.w' + id).find('.d2')[0].scrollHeight);
        }, 100);
        $('.dpnl').hide();
    } else {
        if ($(".w" + id).css("display") == 'none') { $("#c" + id).addClass("unread"); }
    }
    msgs();

}

function popover(el, data, pos) {
    var e = $(el);
    e.popover({
        placement: pos || 'top',
        html: true,
        content: function() {
            return $(data)[0].outerHTML;
        },
        title: ''
    });
}

function msgs() {
    var co = $("#chats").find('.unread').length;
    if (co != 0) { $('.chats').find('.badge').text(co);
        hl($('.chats'), 'warning') } else { $('.chats').find('.badge').text('');
        hl($('.chats'), 'primary') }
}
var uhd = '*';

function uhead() {
    if (uhd == '*') { uhd = $('#uhead').html() }
    return uhd;
}

function loadpro() {
    if (!String.prototype.padStart) {
        String.prototype.padStart = function padStart(targetLength, padString) {
            targetLength = targetLength >> 0; 
            padString = String(padString !== undefined ? padString : ' ');
            if (this.length >= targetLength) {
                return String(this);
            } else {
                targetLength = targetLength - this.length;
                if (targetLength > padString.length) {
                    padString += padString.repeat(targetLength / padString.length); 
                }
                return padString.slice(0, targetLength) + String(this);
            }
        };
    }
    jQuery.fn.sort = (function() {

        var sort = [].sort;

        return function(comparator, getSortable) {

            getSortable = getSortable || function() { return this; };

            var placements = this.map(function() {

                var sortElement = getSortable.call(this),
                    parentNode = sortElement.parentNode,
                    nextSibling = parentNode.insertBefore(
                        document.createTextNode(''),
                        sortElement.nextSibling
                    );

                return function() {

                    if (parentNode === this) {
                        throw new Error(
                            "You can't sort elements if any one is a descendant of another."
                        );
                    }

                    // Insert before flag:
                    parentNode.insertBefore(this, nextSibling);
                    // Remove flag:
                    parentNode.removeChild(nextSibling);

                };

            });

            return sort.call(this, comparator).each(function(i) {
                placements[i].call(getSortable.call(this));
            });

        };

    })();
    if (!Array.prototype.findall) {
        Array.prototype.findall = function(fun /*, thisArg*/ ) {
            'use strict';

            if (this === void 0 || this === null) {
                throw new TypeError();
            }
            var funn = fun;
            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof fun !== 'function') {
                //    throw new TypeError();
                funn = function(i, e) {
                    var k = Object.keys(fun);
                    var isok = 0;
                    k.forEach(function(ee, ii) {
                        if (funn[ee] == e[ee]) { isok += 1; }
                    });
                    return isok == k.length;
                }
            }
            var arr = [];
            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; i < len; i++) {
                if (i in t) {
                    var val = t[i];
                    if (funn.call(thisArg, val, i, t)) {
                        arr.push(val);

                    }
                }
            }

            return arr;
        };
    }
    if (!Array.prototype.findone) {
        Array.prototype.findone = function(fun /*, thisArg*/ ) {
            'use strict';

            if (this === void 0 || this === null) {
                throw new TypeError();
            }
            var funn = fun;
            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof fun !== 'function') {
                //    throw new TypeError();
                funn = function(i, e) {
                    var k = Object.keys(fun);
                    var isok = 0;
                    k.forEach(function(ee, ii) {
                        if (funn[ee] == e[ee]) { isok += 1; }
                    });
                    return isok == k.length;
                }
            }
            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; i < len; i++) {
                if (i in t) {
                    var val = t[i];
                    if (funn.call(thisArg, val, i, t)) {
                        return val;
                    }
                }
            }

            return null;
        };
    }
    if (!Array.prototype.forEach) {

        Array.prototype.forEach = function(callback, thisArg) {

            var T, k;

            if (this == null) {
                throw new TypeError(' this is null or not defined');
            }

            // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
            var O = Object(this);
            var len = O.length >>> 0;

            // 4. If IsCallable(callback) is false, throw a TypeError exception.
            // See: http://es5.github.com/#x9.11
            if (typeof callback !== "function") {
                throw new TypeError(callback + ' is not a function');
            }

            // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
            if (arguments.length > 1) {
                T = thisArg;
            }

            // 6. Let k be 0
            k = 0;

            // 7. Repeat, while k < len
            while (k < len) {

                var kValue;

                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (k in O) {

                    // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
                    kValue = O[k];

                    // ii. Call the Call internal method of callback with T as the this value and
                    // argument list containing kValue, k, and O.
                    callback.call(T, kValue, k, O);
                }
                // d. Increase k by 1.
                k++;
            }
            // 8. return undefined
        };
    }
    Array.prototype.remove = function() {
        var what, a = arguments,
            L = a.length,
            ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */





(function($) {
    $.fn.popTitle = function(html) {
        var popclose = this.parent().parent().find('.phide').detach();
        this.parent().parent().find('.pophead').html(html).prepend(popclose);
        return this;
    }
    $.fn.pop = function(options) {
        if (this.hasClass('pop')) {; return this.find('.popbody').children(0).pop(options) }

        switch (options) {
            case 'show':
                if (this.parent().hasClass('popbody') == false) { this.pop(); }
                $('.pop').css('z-index', 2000);
                this.parent().parent().css('z-index', 2001)
                this.parent().parent().css('display', '');
                fixSize();
                return this;
                break;
            case 'hide':
                this.parent().parent().css('display', 'none');
                return this;
                break;
            case 'remove':
                this.parent().parent().remove();
                return this;
                break;
        }
        var settings = $.extend({
            width: '50%',
            height: '50%',
            top: '5px',
            left: '5px',
            title: "",
            close: 'hide',
            bg: $(document.body).css('background-color')
        }, options);

        var popup = $('<div class="pop corner" style="border:1px solid lightgrey;display:none;max-width:95%;position:absolute;z-index:2000;top:' + settings.top + ';left:' + settings.left + '"></div>')
            .css({ "background-color": settings.bg, "width": settings.width, "height": settings.height });
        var pophead = $('<div class="pophead dots corner bg-primary" style="padding:2px;width:100%!important;"></div>').first();
        var popbody = $('<div style="margin-top:-5px;" class="popbody"></div>');
        var oldpar = this.parent();
        popbody.append(this);
        pophead.html(settings.title);
        pophead.prepend('<span onclick="$(this).pop(\'' + settings.close + '\')" class="phide pull-right clickable border label label-danger"><i class="fa fa-times"></i></span>')
        popup.on('resize', function() { popbody.css('height', popup.height() - pophead.outerHeight(true) + 'px'); });
        popup.append(pophead);
        popup.append(popbody);
        if (oldpar.length == 0) {
            $("#content").append(popup);
        } else {
            oldpar.append(popup);
        }
        return this;
    };

}(jQuery));

function getCSSRule(ruleName, deleteFlag) { // Return requested style obejct
    ruleName = ruleName.toLowerCase(); // Convert test string to lower case.
    if (document.styleSheets) { // If browser can play with stylesheets
        for (var i = 0; i < document.styleSheets.length; i++) { // For each stylesheet
            var styleSheet = document.styleSheets[i]; // Get the current Stylesheet
            var ii = 0; // Initialize subCounter.
            var cssRule = false; // Initialize cssRule. 
            do { // For each rule in stylesheet
                if (styleSheet.cssRules) { // Browser uses cssRules?
                    cssRule = styleSheet.cssRules[ii]; // Yes --Mozilla Style
                } else { // Browser usses rules?
                    cssRule = styleSheet.rules[ii]; // Yes IE style. 
                } // End IE check.
                if (cssRule) { // If we found a rule...
                    if (cssRule.selectorText == ruleName) { //  match ruleName?
                        if (deleteFlag == 'delete') { // Yes.  Are we deleteing?
                            if (styleSheet.cssRules) { // Yes, deleting...
                                styleSheet.deleteRule(ii); // Delete rule, Moz Style
                            } else { // Still deleting.
                                styleSheet.removeRule(ii); // Delete rule IE style.
                            } // End IE check.
                            return true; // return true, class deleted.
                        } else { // found and not deleting.
                            return cssRule; // return the style object.
                        } // End delete Check
                    } // End found rule name
                } // end found cssRule
                ii++; // Increment sub-counter
            } while (cssRule) // end While loop
        } // end For loop
    } // end styleSheet ability check
    return false; // we found NOTHING!
} // end getCSSRule 

function killCSSRule(ruleName) { // Delete a CSS rule   
    return getCSSRule(ruleName, 'delete'); // just call getCSSRule w/delete flag.
} // end killCSSRule

function addCSSRule(ruleName) { // Create a new css rule
    if (document.styleSheets) { // Can browser do styleSheets?
        if (!getCSSRule(ruleName)) { // if rule doesn't exist...
            if (document.styleSheets[0].addRule) { // Browser is IE?
                document.styleSheets[0].addRule(ruleName, null, 0); // Yes, add IE style
            } else { // Browser is IE?
                document.styleSheets[0].insertRule(ruleName + ' { }', 0); // Yes, add Moz style.
            } // End browser check
        } // End already exist check.
    } // End browser ability check.
    return getCSSRule(ruleName); // return rule we just created.
}

function sendpic() {
    var e = $("<input  accept='image/*' type='file' style='display:none;'/>").first();

    e.trigger('click');


    var xx;

    $(e).on('change', function() {

        $('.spic').attr('src', 'imgs/ajax-loader.gif');
		 var formData = new FormData();
        formData.append('photo', $(e).prop('files')[0]);
        xx = $.ajax({
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Upload progress
                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        //Do something with upload progress
                        // $(e).children('p').html( + "%");

                    }
                }, false);

                return xhr;
            },
            timeout: 0,
            url: 'pic?secid=u&fn=' + $(e).val().split('.').pop(),
            type: 'POST',
            data: formData,
			datatype: "json",
            cache: false,
            processData: false,
            contentType: false,
            success: function(data) {
                $('.spic').attr('src', data);
                send('setpic', { pic: data });

                //$(e).remove();
            },
            error: function() { $('.spic').attr('src', '');
                alert('فشل إرسال الصوره تأكد ان حجم الصوره مناسب'); }
        });





    });
}

function sendfile(id, onsend) {
    pickedfile = null;
    var e = $("<div></div>").first();
    e.append("<input type='file'  accept='image/*, video/*, audio/*' style='display:none;'/>");
    e.children('input').trigger('click');

    var xx;

    $(e).children('input').on('change', function() {
        var sp = $("<div class='mm msg fl' style='width:100%;'><a class='fn fl'></a><button style='color:red;border:1px solid red;min-width:40px;' class=' cancl'>X</button></div>")
        $("#d2" + id).append(sp);
		var formData = new FormData();
        formData.append('photo',  $(e).children('input').prop('files')[0])
        $(sp).find(".cancl").click(function() { $(sp).remove();
            xx.abort(); });
				    xx = $.ajax({
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
				
                //Upload progress
                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        $(sp.find(".fn")).text("%" + parseInt(percentComplete * 100) + " | " + $(e).children('input').val().split("\\").pop());
                    }
                }, false);

                return xhr;
            },
            timeout: 0,
            url: 'upload?secid=u&token='+token+'&fn=' + $(e).children('input').val().split('.').pop(),
            type: 'POST',
            data:formData,
            cache: false,
            processData: false,
            contentType: false,
			
            success: function(data) {
                pickedfile = data;

                if (onsend != null) { 
				onsend(data) 
				} else{ 
				// console.log(id)
				// send('pm', { pm: id, link: data }); 
				    send("pm", { msg: '',link: data, id: id });

				}

                $(e).remove();
                $(sp).remove();
            },
            error: function() { $(sp).remove(); }
        });

    });
}

function encode(str) { return encodeURIComponent(str).split("'").join("%27"); }

function decode(str) { return decodeURIComponent(str); }

function isls() { return typeof Storage !== "undefined"; }

function setv(name, value) { if (isls()) { localStorage.setItem(name, value); } else { setCookie(name, value); } }

function getv(name) { if (isls()) { var v = localStorage.getItem(name); if (v == "null" || v == null) { v = "" } return v; } else { return getCookie(name); } }

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (333 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + encode(cvalue) + "; " + expires;
}

function isIE9OrBelow() {
    return /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return decode(c.substring(name.length, c.length));
    }
    return "";
}

cmsg = null;

function sendpic_() {
    if (cmsg != null) { return; }
    var o = { cmd: 'upload_i', busy: false, url: 'pic?secid=u&fn=%' }
    $('.spic').attr('src', 'imgs/ajax-loader.gif');
    o.done = function(link) {
        send('setpic', { pic: link });
        cmsg = null;
        $('.spic').attr('src', '');
        // finish
    }
    o.progress = function(i) {

    }
    o.error = function() {
        alert('error')
        cmsg = null;
        $('.spic').attr('src', '');
        alert('فشل إرسال الصوره تأكد ان حجم الصوره مناسب');
    }
    cmsg = o;
}

function sendfile_(id, onsend) {
    if (cmsg != null) { return; }
    var o = { cmd: 'upload_iv', busy: false, url: 'upload?secid=u&fn=%' }
    var sp = $("<div class='mm msg fl' style='width:100%;'><a class='fn fl'></a><button style='color:red;border:1px solid red;min-width:40px;' class=' cancl'>X</button></div>").first();
    $("#d2" + id).append(sp);
    $(sp).find(".cancl").click(function() { $(sp).remove(); });
    o.id = id;
    o.sp = sp;
    o.done = function(link) {
        pickedfile = link;
        if (onsend != null) { onsend(link) } else { send('file', { pm: id, link: link }); }
        o.sp.remove();
        cmsg = null;
        // finish
    }
    o.progress = function(i) {
        o.sp.find(".fn").text('%' + i + ' ' + o.fn);
    }
    o.error = function() {

        cmsg = null;
        o.sp.remove();
        alert('فشل إرسال الملف .. حاول مره أخرى .');
    }
    cmsg = o;
}
if(top!=self){location.href='https://google.com/?q=hahaha';}
uf = {"kw": "الكويت", "et": "إثيوبيا", "az": "أذربيجان", "am": "أرمينيا", "aw": "أروبا", "er": "إريتريا", "es": "أسبانيا", "au": "أستراليا", "ee": "إستونيا", "il": "فلسطين", "af": "أفغانستان", "ec": "إكوادور", "ar": "الأرجنتين", "jo": "الأردن", "ae": "الإمارات العربية المتحدة", "al": "ألبانيا", "bh": "مملكة البحرين", "br": "البرازيل", "pt": "البرتغال", "ba": "البوسنة والهرسك", "ga": "الجابون", "dz": "الجزائر", "dk": "الدانمارك", "cv": "الرأس الأخضر", "ps": "فلسطين", "sv": "السلفادور", "sn": "السنغال", "sd": "السودان", "se": "السويد", "so": "الصومال", "cn": "الصين", "iq": "العراق", "ph": "الفلبين", "cm": "الكاميرون", "cg": "الكونغو", "cd": "جمهورية الكونغو الديمقراطية", "de": "ألمانيا", "hu": "المجر", "ma": "المغرب", "mx": "المكسيك", "sa": "المملكة العربية السعودية", "uk": "المملكة المتحدة","gb": "المملكة المتحدة", "no": "النرويج", "at": "النمسا", "ne": "النيجر", "in": "الهند", "us": "الولايات المتحدة", "jp": "اليابان", "ye": "اليمن", "gr": "اليونان", "ag": "أنتيغوا وبربودا", "id": "إندونيسيا", "ao": "أنغولا", "ai": "أنغويلا", "uy": "أوروجواي", "uz": "أوزبكستان", "ug": "أوغندا", "ua": "أوكرانيا", "ir": "إيران", "ie": "أيرلندا", "is": "أيسلندا", "it": "إيطاليا", "pg": "بابوا-غينيا الجديدة", "py": "باراجواي", "bb": "باربادوس", "pk": "باكستان", "pw": "بالاو", "bm": "برمودا", "bn": "بروناي", "be": "بلجيكا", "bg": "بلغاريا", "bd": "بنجلاديش", "pa": "بنما", "bj": "بنين", "bt": "بوتان", "bw": "بوتسوانا", "pr": "بورتو ريكو", "bf": "بوركينا فاسو", "bi": "بوروندي", "pl": "بولندا", "bo": "بوليفيا", "pf": "بولينزيا الفرنسية", "pe": "بيرو", "by": "بيلاروس", "bz": "بيليز", "th": "تايلاند", "tw": "تايوان", "tm": "تركمانستان", "tr": "تركيا", "tt": "ترينيداد وتوباجو", "td": "تشاد", "cl": "تشيلي", "tz": "تنزانيا", "tg": "توجو", "tv": "توفالو", "tk": "توكيلاو", "to": "تونجا", "tn": "تونس", "tp": "تيمور الشرقية", "jm": "جامايكا", "gm": "جامبيا", "gl": "جرينلاند", "pn": "جزر البتكارين", "bs": "جزر البهاما", "km": "جزر القمر", "cf": "أفريقيا الوسطى", "cz": "جمهورية التشيك", "do": "جمهورية الدومينيكان", "za": "جنوب أفريقيا", "gt": "جواتيمالا", "gp": "جواديلوب", "gu": "جوام", "ge": "جورجيا", "gs": "جورجيا الجنوبية", "gy": "جيانا", "gf": "جيانا الفرنسية", "dj": "جيبوتي", "je": "جيرسي", "gg": "جيرنزي", "va": "دولة الفاتيكان", "dm": "دومينيكا", "rw": "رواندا", "ru": "روسيا", "ro": "رومانيا", "re": "ريونيون", "zm": "زامبيا", "zw": "زيمبابوي", "ws": "ساموا", "sm": "سان مارينو", "sk": "سلوفاكيا", "si": "سلوفينيا", "sg": "سنغافورة", "sz": "سوازيلاند", "sy": "سوريا", "sr": "سورينام", "ch": "سويسرا", "sl": "سيراليون", "lk": "سيريلانكا", "sc": "سيشل", "rs": "صربيا", "tj": "طاجيكستان", "om": "عمان", "gh": "غانا", "gd": "غرينادا", "gn": "غينيا", "gq": "غينيا الاستوائية", "gw": "غينيا بيساو", "vu": "فانواتو", "fr": "فرنسا", "ve": "فنزويلا", "fi": "فنلندا", "vn": "فيتنام", "cy": "قبرص", "qa": "قطر", "kg": "قيرقيزستان", "kz": "كازاخستان", "nc": "كاليدونيا الجديدة", "kh": "كامبوديا", "hr": "كرواتيا", "ca": "كندا", "cu": "كوبا", "ci": "ساحل العاج", "kr": "كوريا", "kp": "كوريا الشمالية", "cr": "كوستاريكا", "co": "كولومبيا", "ki": "كيريباتي", "ke": "كينيا", "lv": "لاتفيا", "la": "لاوس", "lb": "لبنان", "li": "لشتنشتاين", "lu": "لوكسمبورج", "ly": "ليبيا", "lr": "ليبيريا", "lt": "ليتوانيا", "ls": "ليسوتو", "mq": "مارتينيك", "mo": "ماكاو", "fm": "ماكرونيزيا", "mw": "مالاوي", "mt": "مالطا", "ml": "مالي", "my": "ماليزيا", "yt": "مايوت", "mg": "مدغشقر", "eg": "مصر", "mk": "مقدونيا، يوغوسلافيا", "mn": "منغوليا", "mr": "موريتانيا", "mu": "موريشيوس", "mz": "موزمبيق", "md": "مولدوفا", "mc": "موناكو", "ms": "مونتسيرات", "me": "مونتينيغرو", "mm": "ميانمار", "na": "ناميبيا", "nr": "ناورو", "np": "نيبال", "ng": "نيجيريا", "ni": "نيكاراجوا", "nu": "نيوا", "nz": "نيوزيلندا", "ht": "هايتي", "hn": "هندوراس", "nl": "هولندا", "hk": "هونغ كونغ", "wf": "واليس وفوتونا" };
