const _NO_AUTH_MSG_ = "죄송합니다. 실행할 권한이 없습니다.";

function escapeUnicode(str) {
    return str.replace(/[^\0-~]/g, function(ch) {
        return "\\u" + ("0000" + ch.charCodeAt().toString(16)).slice(-4);
    });
}

function parseWebData(data) {
    return JSON.parse(data.replace(/None/gi, null).replace(/True/gi, true).replace(/False/gi, false).replace(/'/gi, "\""));
}


function num2ver(num){
    var vnum = 10 + num-1
    var c1 = parseInt(vnum / 10)
    var c2 = vnum % 10

    return c1 + "." + c2
}

function cutStr(val, max_len){
    if(val.length > max_len){
        return val.substring(0, max_len)
    } else {
        return val
    }
}

function cutStr2(val, max_len){
    if(val.length > max_len){
        return val.substring(0, max_len) + '...'
    } else {
        return val
    }
}

function _isEmpty(_val){
    if(_val == undefined || _val == null || _val == ""){
        return true
    } else {
        return false
    }
}

function _showLoading(){
    _updLoadingTxt("")
    $("#_loading_view").show()
    $("#_loading_text").show()
    $("#logout_btn").attr('href', '#')
    $("#user_set").attr('href', '#')
}

function _updLoadingTxt(txt){
    $("#_loading_text").text(txt)
}

function _hideLoading(){
    $("#_loading_view").hide()
    $("#_loading_text").hide()
    $("#logout_btn").attr('href', '/logout')
    $("#user_set").attr('href', '/user_set')
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// 모델 라벨들의 길이가 특정 길이 이상일 땐 자른다.
function cutLabels(val){
    if (val == null){
        return "";
    }

    if (val.length > 30){
        return val.substr(0, 30) + "..."
    } else {
        return val
    }
}

function activeMenu(){
    var urls = location.href.split('/')
    var menuURL = urls[urls.length-1]
    $('.main-menu li a').each(function(){
        if ($(this).attr('href').indexOf(menuURL) > -1){
            $(this).parent().attr("class", "active")
        }
    })
}

function reloadPage(){
    location.reload()
}

function openPopup(url, width, height){
    window.name = "parentForm";
    return window.open(url, "childForm", "width="+width+", height="+height+", resizable = no, scrollbars = no");
}

function setCustomDropDown(dataVal, dataText, id){
    var divHTML1 = "<div class=\"form-group\">\n<div class=\"col-sm-9\">\n";
    var divHTML = "";
    for (var i = 0; i < dataVal.length; i++){
        if(i == 0){
            divHTML += "<select id=\""+id+"\" name=\"ticket-type\" class=\"select-ticket-type\" style=\"\">";
        }
        divHTML += "<option value=\""+dataVal[i]+"\">"+dataText[i]+"</option>";
        if(i == dataVal.length - 1){
            divHTML += "</select>";
        }
    }
    divHTML1 += divHTML;
    divHTML1 += "</div></div>";
    return divHTML1
}

function setCustomDropDown2(dataVal, dataText, id){
    var divHTML1 = "";
    var divHTML = "";
    for (var i = 0; i < dataVal.length; i++){
        if(i == 0){
            divHTML += "<select id=\""+id+"\" name=\"ticket-type\" class=\"select-ticket-type\" style=\"\">";
        }
        divHTML += "<option value=\""+dataVal[i]+"\">"+dataText[i]+"</option>";
        if(i == dataVal.length - 1){
            divHTML += "</select>";
        }
    }
    divHTML1 += divHTML;
    divHTML1 += "";
    return divHTML1
}

function setCustomDropDown(dataVal, dataText, id, selected){
    var divHTML1 = "<div class=\"form-group\">\n<div class=\"col-sm-9\">\n";
    var divHTML = "";
    for (var i = 0; i < dataVal.length; i++){
        if(i == 0){
            divHTML += "<select id=\""+id+"\" name=\"ticket-type\" class=\"select-ticket-type\" style=\"\">";
        }
        var selectVal = "";
        if(dataVal[i] == selected){
            selectVal = "selected"
        }
        divHTML += "<option value=\""+dataVal[i]+"\" "+selectVal+">"+dataText[i]+"</option>";
        if(i == dataVal.length - 1){
            divHTML += "</select>";
        }
    }
    divHTML1 += divHTML;
    divHTML1 += "</div></div>";
    return divHTML1
}

function callCustomDropDown(){
    $('.select-ticket-type, .select-ticket-priority').multiselect();
}

function getParam(key){
    var url_string = window.location.href
    var url = new URL(url_string);
    return url.searchParams.get(key);
}

function null2void(val){
    if (val == null || val == undefined || val == ""){
        return ""
    } else {
        return val
    }
}

function null2void3(val, val2){
    if (val == null || val == undefined || val == "null"){
        return val2
    } else {
        return val
    }
}

function null2void2(val, val2){
    if (val == null || val == undefined){
        return val2
    } else {
        return val
    }
}

function getChainerSeePrjId(){
    return "prj_2"
}

function getTfModelsPrjId(){
    return "prj_1"
}

function getYOLOPrjId(){
    return "prj_4"
}