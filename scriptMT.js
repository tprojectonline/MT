function OOD() {
    this.OD = []
}
function OO(e, t, n, l) {
    this.D = t,
    this.Q = n,
    this.Q.onblur = this.Q0,
    this.QO = l,
    this.OQ = -1,
    this.OOQ = new OOD,
    this.OOQ.O0Q(e)
}
OOD.prototype.O0Q = function(e) {
    this.OD = e
}
,
OOD.prototype.getMatches = function(e, t, n) {
    for (var l = 0; l < this.OD.length; l++)
        t.push(this.OD[l])
}
,
OO.prototype.assignEvents = function() {
    O0D || (this.D.onkeyup = this.keyUp,
    this.D.onkeydown = this.keyDown,
    this.D.OO = this,
    this.D.onblur = this.Q0)
}
,
OO.prototype.unassignEvents = function() {
    this.D.onkeyup = null,
    this.D.onkeydown = null,
    this.D.OO = null,
    this.D.onblur = null
}
,
OO.prototype.Q0 = function() {
    try {
        complete.Q.style.visibility = "hidden"
    } catch (e) {}
}
,
OO.prototype.selectText = function(e, t) {
    if (this.D.createTextRange) {
        var n = this.D.createTextRange();
        n.moveStart("character", e),
        n.moveEnd("character", t - this.D.value.length),
        n.select()
    } else
        this.D.setSelectionRange && this.D.setSelectionRange(e, t);
    this.D.focus()
}
,
OO.prototype.textComplete = function(e) {
    if (this.D.createTextRange || this.D.setSelectionRange) {
        var t = this.D.value.length;
        this.D.value = e,
        this.selectText(t, e.length)
    }
}
,
OO.prototype.keyDown = function(e) {
    switch (DD = (e = window.event || e).keyCode) {
    case 38:
        this.OO.ODO();
        break;
    case 40:
        this.OO.OD0();
        break;
    case 27:
        this.OO.Q.style.visibility = "hidden"
    }
}
,
OO.prototype.OD0 = function() {
    this.Q.childNodes.length > 0 && this.OQ < this.Q.childNodes.length - 1 - 1 ? ++this.OQ : this.OQ = 0;
    for (var e = 0; e < this.Q.childNodes.length - 1; e++)
        e == this.OQ ? (this.Q.childNodes[e].className = "over",
        this.D.value = this.Q.childNodes[e].innerHTML) : this.Q.childNodes[e].className = ""
}
,
OO.prototype.ODO = function() {
    this.Q.childNodes.length > 0 && this.OQ > 0 ? --this.OQ : this.OQ = this.Q.childNodes.length - 2;
    for (var e = 0; e < this.Q.childNodes.length - 1; e++)
        e == this.OQ ? (this.Q.childNodes[e].className = "over",
        this.D.value = this.Q.childNodes[e].innerHTML) : this.Q.childNodes[e].className = ""
}
,
OO.prototype.keyUp = function(e) {
    var t = (e = e || window.event).keyCode;
    8 == t || 46 == t ? this.OO.onTextChange(!1) : t < 32 || t >= 33 && t <= 46 || t >= 112 && t <= 123 || this.OO.onTextChange(!0)
}
,
OO.prototype.positionSuggest = function() {
    for (var e = this.D, t = 0, n = e.offsetHeight; e.offsetParent && "BODY" != e.offsetParent.tagName.toUpperCase(); )
        t += e.offsetLeft,
        n += e.offsetTop,
        e = e.offsetParent;
    t += e.offsetLeft,
    n += e.offsetTop,
    this.Q.style.top = n + "px",
    this.Q.style.left = t + "px"
}
;
var complete, DicMtString, oDoc, sDefTxt, interval, AudioFileName, bTextComplete = !0;
function close_complete(e) {
    O0D = !0,
    complete.unassignEvents(),
    complete.Q0()
}
function click_suggestion(e) {
    oSrcDiv = (e = window.event || e).target || e.srcElement,
    "mousedown" == e.type ? (window.location = urlgo + oSrcDiv.innerHTML,
    complete.D.value = oSrcDiv.innerHTML) : "mouseover" == e.type ? oSrcDiv.className = "over" : "mouseout" == e.type ? oSrcDiv.className = "" : complete.D.focus()
}
function createAutoComplete() {
    (complete = new OO([],document.getElementById("s"),document.getElementById("suggest"),10)).assignEvents()
}
OO.prototype.drawDiv = function() {
    var e = this.D.value;
    this.OQ = -1;
    var t = ""
      , n = [];
    if (this.OOQ.getMatches(e, n, this.QO),
    n.length) {
        for (this.positionSuggest(),
        OOO = "",
        i = 0; i < n.length; i++)
            "" != (OOO = n[i].replace(/(^\s+)|(\s+$)/g, "")) && (t += '<div onmousedown="click_suggestion(event)" onmouseout="click_suggestion(event)"  onmouseover="click_suggestion(event)">' + OOO + "</div>");
        t += '<span id=sugodiv onmousedown="close_complete(event)">' + strclosesug + "</span>",
        this.Q.innerHTML = t,
        this.Q.style.visibility = "visible"
    }
}
,
OO.prototype.onTextChange = function(e) {
    var t = this.D.value;
    this.OQ = -1,
    bTextComplete = e,
    t.length > 0 ? (this.unassignEvents(),
    MakeDiv()) : (this.Q.innerHTML = "",
    this.Q.style.visibility = "hidden")
}
;
var DQ = getXMLHttpRequest()
  , url = "mt.htm?word="
  , O0D = !1;
function getXMLHttpRequest() {
    if (window.XMLHttpRequest)
        return new XMLHttpRequest;
    if (window.ActiveXObject)
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
}
function MakeDiv() {
    (4 == DQ.readyState || 0 == DQ.readyState) && (DQ.open("GET", url + encodeURIComponent(document.getElementById("s").value, !0)),
    DQ.onreadystatechange = setDataArray,
    DQ.send(null))
}
function atranslate(e) {
    document.getElementById("word").value = e,
    MakeDiv()
}
function setDataArray() {
    if (4 == DQ.readyState) {
        var e = [];
        DQ.responseText && (ODD = (e = DQ.responseText.split("\n")).pop(),
        ODQ = e.shift()),
        complete.OOQ.O0Q(e),
        complete.drawDiv(),
        complete.assignEvents()
    }
}
function ReplaceSubstringInLine(e, t, n, l, o, r, s, a, c) {
    sendData(e, t, n, l, o, r, s, a, c)
}
function changeImg(e, t, n) {
    var l = document.getElementById("Myimage");
    l.src = e;
    var o = n;
    o += "px",
    "0" != n && (l.style.height = o),
    null != document.getElementById("peep") && (document.getElementById("peep").innerHTML = t)
}
function changeTrans(e) {
    null != document.getElementById("CrowdTrans") && (document.getElementById("CrowdTrans").innerHTML = e)
}
function trimBr(e) {
    return "<br>" == e.slice(e.length - 4, e.length) && (e = e.slice(0, e.length - 4)),
    e
}
function copyToClipboard(e) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", e)
}
function CheckIdExists(e) {
    return document.getElementById(e) ? 1 : 0
}
function MyAlert(e, t) {
    alert(e + t)
}
function GetNextOrPrevBlockName(e, t) {
    for (count = 1; count < 100; count++) {
        var n = ""
          , l = 0
          , o = ""
          , r = t * count;
        for (i = 0; i < e.length; i++)
            if ("_" == e[i] && l++,
            2 == l && "_" != e[i])
                o += e[i];
            else if ("_" == e[i] && 3 == l) {
                var s = parseInt(o);
                n += (s += r).toString(),
                n += "_"
            } else
                n += e[i];
        if (CheckIdExists(n))
            return n
    }
}
function createRange(e, t, n) {
    if (n || ((n = document.createRange()).selectNode(e),
    n.setStart(e, 0)),
    0 === t.count)
        n.setEnd(e, t.count);
    else if (e && t.count > 0) {
        if (e.nodeType === Node.TEXT_NODE)
            e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count),
            t.count = 0);
        else
            for (var l = 0; l < e.childNodes.length && (n = createRange(e.childNodes[l], t, n),
            0 !== t.count); l++)
                ;
    }
    return n
}
function setCurrentCursorPosition(e, t) {
    if (t >= 0) {
        var n = window.getSelection();
        (range = createRange(document.getElementById(e).parentNode, {
            count: t
        })) && (range.collapse(!1),
        n.removeAllRanges(),
        n.addRange(range))
    }
}
function isChildOf(e, t) {
    for (; null !== e; ) {
        if (e.id === t)
            return !0;
        e = e.parentNode
    }
    return !1
}
function getCurrentCursorPosition(e) {
    var t, n = window.getSelection(), l = -1;
    if (n.focusNode && isChildOf(n.focusNode, e)) {
        for (t = n.focusNode,
        l = n.focusOffset; t && t.id !== e; )
            if (t.previousSibling)
                l += (t = t.previousSibling).textContent.length;
            else if (null === (t = t.parentNode))
                break
    }
    return l
}
function setFocusToTextBox(e) {
    document.getElementById(e).focus()
}
function completeAndRedirect() {
    alert("aaa")
}
function submitForm() {
    var e = document.getElementById("s").value
      , t = "";
    return lname1.length > 0 && (t = t + lname1 + "/"),
    lname2.length > 0 && (t = t + lname2 + "/"),
    t += e,
    window.location = t,
    !1
}
function get_langRewrite() {
    var e = document.getElementById("l1").value;
    lname1 = e.substring(0, 2);
    var t = e.substring(2, 10)
      , n = document.getElementById("l2").value;
    lname2 = n.substring(0, 2);
    var l = n.substring(2, 10);
    return urlgo = "",
    lname1.length && (urlgo = lname1,
    urlgo += "/"),
    lname2.length && (urlgo += lname2,
    urlgo += "/"),
    console.log(lname1),
    console.log(lname2),
    alert(lname1),
    alert(lname2),
    url = "/ms.exe?l1=",
    url += t,
    url += "&l2=",
    url += l,
    url += "&s=",
    !0
}
function get_lang() {
    var e = document.getElementById("l1").value;
    e += "&l2=",
    e += document.getElementById("l2").value,
    urlgo = "/m.exe?l1=",
    urlgo += e,
    urlgo += "&s=",
    url = "/ms.exe?l1=",
    url += e;
    var t = url += "&s=";
    return t += "<br>",
    t += urlgo,
    document.getElementById("msg3").innerHTML = t,
    !0
}
function err_lang() {
    var e;
    return urlgo = "/m.exe?a=359&lang=",
    urlgo += document.getElementById("lang").value,
    window.location = urlgo,
    !0
}
function useradd_lang() {
    var e;
    return urlgo = "/m.exe?a=67&lang=",
    urlgo += document.getElementById("lang").value,
    window.location = urlgo,
    !0
}
function lang_string() {
    return document.forms.myForm.submit(),
    !0
}
function RequestShortUrl(e, t) {
    var n;
    window.XMLHttpRequest ? n = new XMLHttpRequest : window.ActiveXObject && (n = new ActiveXObject("Microsoft.XMLHTTP")),
    n.onreadystatechange = function() {
        4 === n.readyState && 200 === n.status && (DicMtString = n.response,
        t.call(n.response))
    }
    ,
    n.open("GET", e),
    n.send()
}
function myAlertMsg(e) {
    alert(e),
    location.reload()
}
function GetShortUrl(e, t) {
    var n;
    RequestShortUrl("m.exe?a=270&s=" + e.replace(/=/g, "-eq-").replace(/&/g, "-amp-") + "&hl=" + t, function() {
        this.activeElement,
        console.log("received:", DicMtString);
        var e = DicMtString.split(";")
          , t = "Link copied to clipboard";
        2 == Object.keys(e).length && (t = e[1]);
        var n = document.createElement("input");
        document.body.appendChild(n),
        n.setAttribute("id", "dummy_id"),
        n.setAttribute("value", e[0]),
        n.select(),
        document.execCommand("copy"),
        document.body.removeChild(n),
        myAlertMsg(t)
    })
}
function CopyToClip(e) {
    navigator.clipboard.writeText(e)
}
function NewWindow(e) {
    window.open(e)
}
function getCurrentCursorPosition(e) {
    var t, n = window.getSelection(), l = -1;
    if (n.focusNode && isChildOf(n.focusNode, e)) {
        for (t = n.focusNode,
        l = n.focusOffset; t && t.id !== e; )
            if (t.previousSibling)
                l += (t = t.previousSibling).textContent.length;
            else if (null === (t = t.parentNode))
                break
    }
    return l
}
function createRange(e, t, n) {
    if (n || ((n = document.createRange()).selectNode(e),
    n.setStart(e, 0)),
    0 === t.count)
        n.setEnd(e, t.count);
    else if (e && t.count > 0) {
        if (e.nodeType === Node.TEXT_NODE)
            e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count),
            t.count = 0);
        else
            for (var l = 0; l < e.childNodes.length && (n = createRange(e.childNodes[l], t, n),
            0 !== t.count); l++)
                ;
    }
    return n
}
function insertTextAtCursor(e) {
    WasStringChange = 1;
    var t = getCurrentCursorPosition(CurrentId);
    let n = window.getSelection()
      , l = n.getRangeAt(0);
    l.deleteContents();
    let o = document.createTextNode(e);
    l.insertNode(o);
    for (let r = 0; r != e.length; r++)
        n.modify("move", "right", "character");
    setCurrentCursorPosition(t + 1)
}
function emboldenFont() {
    document.execCommand("bold", !1, null)
}
function italicFont() {
    document.execCommand("italic", !1, null),
    sendData(DictNumber, PageNumber, RowNumber, ColNumber, document.getElementById(CurrentId).innerHTML, UserName, SaveString, OldDate)
}
function boldFont() {
    document.execCommand("bold", !1, null),
    sendData(DictNumber, PageNumber, RowNumber, ColNumber, document.getElementById(CurrentId).innerHTML, UserName, SaveString, OldDate)
}
function goToURL() {
    var e = document.billy.bob.selectedIndex;
    location.href = ["m.exe?a=2&l1=1&l2=2", "m.exe?a=2&l1=3&l2=2", "m.exe?a=2&l1=4&l2=2", "m.exe?a=2&l1=5&l2=2", "m.exe?a=2&l1=23&l2=2", "m.exe?a=2&l1=24&l2=2", "m.exe?a=2&l1=26&l2=2", "m.exe?a=2&l1=27&l2=2", "m.exe?a=2&l1=31&l2=2", "m.exe?a=2&l1=34&l2=2", "m.exe?a=2&l1=35&l2=2"][e]
}
function GetMajorForMinorSubject(e) {
    for (var t = 1; t < MajorToMinor.length; t += 2)
        if (e == MajorToMinor[t] || e == MajorToMinor[t - 1])
            return MajorToMinor[t - 1];
    return e
}
function GetMajorSubjectPositionInList(e) {
    var t = document.getElementById("s1");
    for (i = 0; i < t.options.length; i++) {
        for (var n = t[i].value; -1 !== n.indexOf(">"); )
            n = n.replace(">", " ");
        if ((n = n.trim()) == e)
            return i
    }
    return -1
}
function SelectMajorSubjectByText(e) {
    var t = GetMajorSubjectPositionInList(e);
    document.getElementById("s1").options[t].selected = "selected"
}
function FillMinorSubjects(e) {
    var t = document.getElementById("s2")
      , n = t.options.length;
    for (l = n - 1; l >= 0; l--)
        t.options[l] = null;
    for (var l = 0; l < MajorToMinor.length; l += 2)
        if (e == MajorToMinor[l]) {
            var o = document.createElement("option");
            o.text = o.value = MajorToMinor[l + 1],
            t.add(o, 0)
        }
}
function SelectMinorSubjectByText(e) {
    var t = document.getElementById("s2")
      , n = t.options.length;
    for (i = 0; i < n; i++)
        if (t[i].text == e) {
            t[i].selected = "selected",
            document.getElementById("subject2").value = t[i].text;
            return
        }
    document.getElementById("subject2").value = ""
}
function OnSelectTypeinSubject(e=-1) {
    var t = document.getElementById("subject")
      , n = t.selectedIndex;
    e >= 0 && (n = e);
    var l = t[n].text;
    SelectMajorSubjectByText(GetMajorForMinorSubject(l)),
    ChangeMajorSubject(),
    SelectMinorSubjectByText(l)
}
function ClearSubjectList() {
    var e = document.getElementById("subject")
      , t = e.options.length;
    for (i = t - 1; i >= 0; i--)
        e.options[i] = null
}
function KeyUp() {
    if (SwitchString(),
    AddSubjectList(),
    input.value.length) {
        ShowElement("subject");
        var e = document.getElementById("subject")
          , t = e.options.length;
        e.size = t
    } else
        HideElement("subject")
}
function SwitchString() {
    for (var e = "", t = 0; t < input.value.length; t++) {
        var n = input.value[t];
        IsLatin && IsRussianLetter(input.value[t]) ? n = SwitchKey(input.value[t]) : !IsLatin && IsEnglishLetter(input.value[t]) && (n = SwitchKey(input.value[t])),
        e += n
    }
    document.getElementById("input").value = e
}
function IsRussianLetter(e) {
    for (var t = 1; t < keyReplacements.length; t += 2)
        if (keyReplacements[t] == e)
            return 1;
    return 0
}
function IsEnglishLetter(e) {
    for (var t = 0; t < keyReplacements.length; t += 2)
        if (keyReplacements[t] == e)
            return 1;
    return 0
}
function isEven(e) {
    return e % 2 == 0
}
function SwitchKey(e) {
    for (var t = 0; t < keyReplacements.length; t++)
        if (keyReplacements[t] == e) {
            if (isEven(t))
                return keyReplacements[t + 1];
            return keyReplacements[t - 1]
        }
    return e
}
function HasAllParts(e, t) {
    if (t.trim(),
    0 == t.length)
        return !0;
    var n = ""
      , l = e;
    l = l.toLocaleLowerCase(SubjectsLocale);
    var o = t;
    o = o.toLocaleLowerCase(SubjectsLocale);
    for (var r = 0; r <= o.length; r++)
        if (" " == o[r] || r >= o.length) {
            if (!l.includes(n))
                return !1;
            n = ""
        } else
            n += o[r];
    return !0
}
function HideElement(e) {
    document.getElementById(e).style.display = "none"
}
function ShowElement(e) {
    document.getElementById(e).style.display = "block"
}
function AddSubjectList(e=0) {
    ClearSubjectList();
    var t = document.getElementById("subject")
      , n = 0
      , l = "";
    DefaultSubject.length && (SelectMajorSubjectByText(GetMajorForMinorSubject(DefaultSubject)),
    ChangeMajorSubject(),
    SelectMinorSubjectByText(DefaultSubject));
    for (var o = subjects.length - 1; o >= 0; o--) {
        var r = subjects[o];
        if (!0 == HasAllParts(r = r.toLocaleLowerCase(SubjectsLocale), input.value)) {
            var s = document.createElement("option");
            s.text = s.value = l = subjects[o],
            t.add(s, 0),
            n++
        }
    }
    var a = 0;
    DefaultSubject.length && (a = 1),
    DefaultSubject = "",
    1 == n && (OnSelectTypeinSubject(0),
    document.getElementById("input").blur()),
    e && HideElement("subject"),
    a && document.getElementById("orig").focus()
}
function ReplaceBetween(e, t, n, l) {
    return e.substring(0, t) + l + e.substring(n)
}
function GetSelectionStart(e) {
    return document.getElementById(e).selectionStart
}
function GetSelectionEnd(e) {
    return document.getElementById(e).selectionEnd
}
function GetText(e) {
    return document.getElementById(e).value
}
function GetSelectionText(e) {
    var t = document.getElementById(e);
    return t.selectionStart != t.selectionEnd ? t.value.substring(t.selectionStart, t.selectionEnd) : document.getElementById(e).value
}
function IsLetter(e, t) {
    var n = e[t];
    for (t = 0; t < Uppers.length; t++)
        if (Uppers[t] == n)
            return !0;
    for (t = 0; t < Lowers.length; t++)
        if (Lowers[t] == n)
            return !0;
    return !1
}
function ChangeCase() {
    var e = GetSelectionStart(MyId)
      , t = GetSelectionEnd(MyId)
      , n = GetSelectionText(MyId)
      , l = "";
    4 == MyCase ? l = FirstUpper(n) : 2 == MyCase ? l = AllUpper(n) : 1 == MyCase && (l = AllLower(n)),
    MyCase = NextCase[MyCase],
    document.getElementById("up0").innerHTML = ArrowType[MyCase],
    e == t ? document.getElementById(MyId).value = l : (n = ReplaceBetween(n = GetText(MyId), e, t, l),
    document.getElementById(MyId).value = n,
    document.getElementById(MyId).focus(),
    document.getElementById(MyId).setSelectionRange(e, t)),
    document.getElementById(MyId).focus()
}
function IsUpperLetter(e) {
    for (j = 0; j < Uppers.length; j++)
        if (e == Uppers[j])
            return j;
    return 0
}
function IsLowerLetter(e) {
    for (j = 0; j < Lowers.length; j++)
        if (e == Lowers[j])
            return 1;
    return 0
}
function GetTextCase(e) {
    var t = 0
      , n = 0;
    for (i = 0; i < e.length; i++)
        IsUpperLetter(e[i]) ? t++ : IsLowerLetter(e[i]) && n++;
    return t ? t && !n ? 2 : 4 : 1
}
function saveCurentId(e) {
    MyCase = GetTextCase(GetSelectionText(MyId = document.activeElement.id)),
    document.getElementById("up0").innerHTML = ArrowType[MyCase],
    MyCase = NextCase[MyCase],
    e ? document.getElementById("up0").style.display = "block" : document.getElementById("up0").style.display = "none"
}
function FirstUpper(e) {
    var t = "";
    for (i = 0; i < e.length; i++) {
        var n = e[i];
        if (!i || IsLetter(e, i) && !IsLetter(e, i - 1))
            for (j = 0; j < Lowers.length; j++)
                n == Lowers[j] && (n = Uppers[j]);
        t += n
    }
    return t
}
function AllLower(e) {
    var t = "";
    for (i = 0; i < e.length; i++) {
        var n = e[i];
        for (j = 0; j < Uppers.length; j++)
            e[i] == Uppers[j] && (n = Lowers[j]);
        t += n
    }
    return t
}
function AllUpper(e) {
    var t = "";
    for (i = 0; i < e.length; i++) {
        var n = e[i];
        for (j = 0; j < Uppers.length; j++)
            e[i] == Lowers[j] && (n = Uppers[j]);
        t += n
    }
    return t
}
function ForceSubject(e, t) {
    SelectMajorSubjectByText(e),
    ChangeMajorSubject(),
    SelectMinorSubjectByText(t)
}
function insertAddChar(e) {
    var t = MyId
      , n = document.getElementById(t).selectionStart;
    if (document.selection)
        document.getElementById(t).focus(),
        (sel = document.selection.createRange()).text = e;
    else if (document.getElementById(t).selectionStart || "0" == document.getElementById(t).selectionStart) {
        var l = document.getElementById(t).selectionStart
          , o = document.getElementById(t).selectionEnd;
        document.getElementById(t).value = document.getElementById(t).value.substring(0, l) + e + document.getElementById(t).value.substring(o, document.getElementById(t).value.length)
    } else
        document.getElementById(t).value += e;
    document.getElementById(t).focus(),
    document.getElementById(t).selectionStart = n + 1,
    document.getElementById(t).selectionEnd = n + 1
}
function CollectExamples() {
    var e = "";
    for (count = 1; count < 10; count++) {
        var t = "example" + count
          , n = document.getElementById(t);
        if (null != n) {
            var l = n.value;
            e.length && (e += ";"),
            e += l
        }
    }
    return e
}
function addsubmit() {
    var e, t = document.getElementById("s1").selectedIndex, n = document.getElementById("s2").selectedIndex, l = document.getElementById("s2");
    console.log("subject 1 index: " + t),
    console.log("subject 2 index: " + n),
    n >= 0 && (e = l.options[l.selectedIndex].text);
    var o = t;
    return o += " ",
    o += n,
    document.getElementById("savesubject").value = e,
    document.getElementById("saveexample").value = CollectExamples(),
    !0
}
function FillLinks() {
    console.log("FillLinks");
    var e = 1;
    if ("undefined" != typeof MyLinks) {
        for (var t = 0; t < MyLinks.length && 0 != MyLinks[t].length; t++)
            addFieldValue("link", e, MyLinks[t]),
            e++;
        RemoveEmptyExamples()
    }
    for (; e < MaxExamples; e++)
        addFieldValue("link", e, "")
}
function ParseExamples() {
    var e = document.getElementById("saveexample").value
      , t = ""
      , n = 0;
    for (let l = 0; l < e.length; l++)
        ";" == e[l] ? (addExampleValue(t, ++n),
        t = "") : t += e[l];
    n || addExampleValue("", 1)
}
function addExample() {
    console.log("running addExample"),
    addFieldValue("example", 0, ""),
    addFieldValue("link", 0, ""),
    RemoveEmptyExamples()
}
function GetFieldLength(e, t) {
    var n = e + t;
    return null == document.getElementById(n) ? 0 : (console.log(e + " length N " + t + ": " + document.getElementById(n).value.length),
    document.getElementById(n).value.length)
}
function DeleteField(e, t) {
    var n = document.getElementById(e + t);
    return null == n ? 0 : (console.log("Delete " + e + "# " + t),
    n.parentNode.removeChild(n),
    1)
}
function CountFields(e) {
    for (id = 10; id > 0; id--)
        if (IsFieldPresent(e, id))
            return console.log("Field present: " + e + id),
            id;
    return 0
}
function IsLastFilled(e) {
    var t = CountFields(e);
    return GetFieldLength(e, t)
}
function RemoveEmptyExamples() {
    for (console.log("Removing empty examples"),
    id = 1; id < 10; id++)
        IsFieldPresent("example", id) && console.log("Example N " + id + " present, length = " + GetFieldLength("example", id)),
        IsFieldPresent("link", id) && console.log("Link N " + id + " present, length = " + GetFieldLength("link", id));
    for (id = 10; id > 0; id--)
        !(id > 1) || GetFieldLength("example", id - 1) || GetFieldLength("link", id - 1) || (DeleteField("example", id),
        DeleteField("link", id));
    for (IsLastFilled("example") || IsLastFilled("link") ? (console.log("Showing add link"),
    document.getElementById("AddExampleId").style.display = "block") : (console.log("Hiding add link"),
    document.getElementById("AddExampleId").style.display = "none"),
    id = 1; id < CountFields("example"); id++)
        IsFieldPresent("link", id) || addFieldValue("link", id, "");
    for (id = 1; id < CountFields("link"); id++)
        IsFieldPresent("example", id) || addFieldValue("example", id, "");
    return 1
}
function ExampleKeyPressed() {
    RemoveEmptyExamples()
}
function isBackForward() {
    return document.getElementById("savesubject").value.length
}
function AddEntry() {
    let e = document.getElementById("orig");
    null != e && e.focus(),
    isBackForward() && (DefaultSubject = document.getElementById("savesubject").value,
    ParseExamples()),
    AddSubjectList(1),
    console.log("AddEntry"),
    FillExamples(),
    RemoveEmptyExamples()
}
function FillExamples() {
    if ("undefined" != typeof MyExamples)
        for (var e = 0; e < MyExamples.length && (0 != MyExamples[e].length || !e); e++)
            addFieldValue("example", e + 1, MyExamples[e]);
    if ("undefined" != typeof MyLinks)
        for (e = 0; e < MyLinks.length && (0 != MyLinks[e].length || !e); e++)
            console.log("Adding link: " + MyLinks[e]),
            addFieldValue("link", e + 1, MyLinks[e]);
    RemoveEmptyExamples(),
    MaxExamples || addFieldValue("example", 1, "")
}
function IsFieldPresent(e, t) {
    return null == document.getElementById(e + t) ? 0 : 1
}
function addFieldValue(e, t, n) {
    0 == t && (t = CountFields(e) + 1),
    console.log("Adding " + e + " # " + t + " value: " + n);
    var l = document.getElementById(e + "container")
      , o = document.createElement("textarea");
    o.type = "text",
    o.rows = "2",
    o.name = e + t,
    o.id = e + t,
    o.value = n,
    o.className = "editcomment",
    o.onkeyup = ExampleKeyPressed,
    o.onfocus = saveCurentId,
    o.tabIndex = "4",
    "example" == e ? o.placeholder = ExamplePlaceholder : o.placeholder = LinkPlaceholder,
    l.appendChild(o)
}
function clickSmile1() {
    clickSmile(document.getElementById("smilesbox"))
}
function clickSmile(e) {
    var t = document.getElementById("smiles");
    e.checked ? t.style.display = "block" : t.style.display = "none"
}
function initDoc() {
    null != (oDoc = document.getElementById("textBox")) && (sDefTxt = oDoc.innerHTML,
    document.compForm.switchMode.checked && setDocMode(!0)),
    clickSmile1()
}
function formatDoc(e, t) {
    validateMode() && (document.execCommand(e, !1, t),
    oDoc.focus())
}
function validateMode() {
    return !document.compForm.switchMode.checked || (alert('Uncheck "Show HTML".'),
    oDoc.focus(),
    !1)
}
function setDocMode(e) {
    var t;
    if (e) {
        t = document.createTextNode(oDoc.innerHTML),
        oDoc.innerHTML = "";
        var n = document.createElement("pre");
        oDoc.contentEditable = !1,
        n.id = "sourceText",
        n.contentEditable = !0,
        n.appendChild(t),
        oDoc.appendChild(n)
    } else
        document.all ? oDoc.innerHTML = oDoc.innerText : ((t = document.createRange()).selectNodeContents(oDoc.firstChild),
        oDoc.innerHTML = t.toString()),
        oDoc.contentEditable = !0;
    oDoc.focus()
}
function other_lang() {
    e = null != document.getElementById("l1") ? document.getElementById("l1").value : defaultl1;
    var e, t, n = "/m.exe?l1=";
    return n += e,
    n += "&l2=",
    n += document.getElementById("l2").value,
    console.log("urlgo: " + n),
    n += "&s=",
    n += document.getElementById("s").value,
    console.log("urlgo: " + n),
    window.location = n,
    !0
}
function other_morph() {
    return urlgo = "/m.exe?a=340&l1=",
    urlgo += document.getElementById("l1").value,
    window.location = urlgo,
    !0
}
function checkAll(e, t, n) {
    1 == arguments.length && (t = 0,
    n = 1e6);
    var l = document.getElementById(e);
    for (count = t; count <= n; count++) {
        var o = "check";
        o += count;
        var r = document.getElementById(o);
        if (null == r)
            break;
        r.checked = l.checked
    }
}
function checkSubject() {
    var e = document.getElementById("all");
    for (count = 1; count <= 2e3; count++) {
        var t = "check";
        t += count,
        document.getElementById(t).checked = e.checked
    }
}
function GetElement(e, t) {
    for (var n = "", l = 0, o = 0; o < e.length; o += 1) {
        var r = e.charAt(o);
        ";" == r ? l += 1 : t == l && (n += r)
    }
    return n
}
function FillListBox(e) {
    var t, n = "";
    for (t = 0; ; t++) {
        var l = GetElement(e, t);
        if (!l.length)
            break;
        n += "<option value=1>",
        n += l,
        n += "</option>"
    }
    return 1 == t && (n = ""),
    n
}
function ChangeMajorSubject() {
    var e = document.getElementById("s1").selectedIndex
      , t = document.getElementById("s1")
      , n = t.options[e].text
      , l = FillListBox(Subjects[e])
      , o = document.getElementById("subject3");
    null != o && ("see also" == n ? o.hidden = !0 : o.hidden = !1),
    l.length ? (document.getElementById("s2").hidden = !1,
    document.getElementById("s2").innerHTML = l,
    document.getElementById("s2").focus()) : (document.getElementById("s2").hidden = !0,
    document.getElementById("subject2").value = t.options[e].text);
    var r = document.getElementById("SubjRow2");
    null != r && (n == GeneralSubject ? r.style.visibility = "hidden" : r.style.visibility = "visible"),
    HideElement("subject"),
    input.value = "",
    subject.value = ""
}
function ChangeMinorSubject() {
    var e = document.getElementById("s2").selectedIndex
      , t = document.getElementById("s2");
    t.options[e].text,
    document.getElementById("subject2").value = t.options[e].text,
    HideElement("subject"),
    input.value = "",
    subject.value = ""
}
function AddSmile(e, t) {
    var n, l;
    window.getSelection ? (n = window.getSelection()).getRangeAt && n.rangeCount && ((l = n.getRangeAt(0)).deleteContents(),
    l.insertNode(document.createTextNode(e))) : document.selection && document.selection.createRange && (document.selection.createRange().text = e)
}
function SetProgress(e) {
    document.getElementById("myBar").style.width = e + "%"
}
function GetProgress(e) {
    var t = new XMLHttpRequest;
    t.onreadystatechange = function() {
        4 == this.readyState && 200 == this.status && (SetProgress(this.responseText),
        100 == Number(this.responseText) && (document.getElementById("myProgress").style.visibility = "hidden",
        clearInterval(interval)))
    }
    ;
    var n = "temp/";
    n += e,
    n = "m.exe?a=389&s=",
    n += e,
    t.open("GET", n, !0),
    t.send()
}
function DeleteSikTimer() {
    GetProgress("ajax_info.txt")
}
function DeleteSik() {
    interval = setInterval(DeleteSikTimer, 1e3)
}
function setCookie(e, t, n) {
    var l = new Date;
    l.setTime(l.getTime() + 864e5 * n);
    var o = "expires=" + l.toUTCString();
    document.cookie = e + "=" + t + "; " + o + ";SameSite=None;Secure"
}
function checkAbbr(e, t, n) {
    var l = document.getElementById(e);
    for (count = t; count <= n; count++) {
        var o = "abbr";
        o += count;
        var r = document.getElementById(o);
        if (null == r)
            break;
        r.checked = l.checked
    }
}
const smileyCheck = document.getElementById("showsmileys")
  , smileys = document.getElementById("smileys");
function changeDisplay() {
    smileyCheck.checked ? smileys.style.display = "block" : smileys.style.display = "none",
    smileyCheck.checked ? smileys.style.display = "block" : smileys.style.display = "none"
}
function displayNextImage() {
    x = x === images.length - 1 ? 0 : x + 1,
    console.log(x),
    document.getElementById("img").src = images[x]
}
function displayPreviousImage() {
    x = x <= 0 ? images.length - 1 : x - 1,
    document.getElementById("img").src = images[x]
}
function startTimer() {
    setInterval(displayNextImage, 5e3)
}
var images = []
  , x = -1;
function GetUserZone() {
    setCookie("zone", new Date().getTimezoneOffset(), 7)
}


function aud_play_pause() {
    // document.getElementById("play").src = "../gif/speaker1.png",
     document.getElementById("play").classList.add('transform'),
    setTimeout(RestoreSpeaker, 200);
    var e = document.getElementById("myAudio");
    e.paused && e.play()
}
function RestoreSpeaker() {
    // document.getElementById("play").src = "../gif/speaker.png"
   document.getElementById("play").classList.remove('transform');
}
function RequestAudio(e, t) {
    var n;
    window.XMLHttpRequest ? n = new XMLHttpRequest : window.ActiveXObject && (n = new ActiveXObject("Microsoft.XMLHTTP")),
    n.onreadystatechange = function() {
        4 === n.readyState && 200 === n.status && (AudioFileName = n.response,
        t.call(n.response))
    }
    ,
    n.open("GET", e),
    n.send()
}
function GetAudio(e, t) {
    var e, t;
    RequestAudio("m.exe?a=489&l1=" + e + "&s=" + t, function() {
        this.activeElement,
        console.log("received:", AudioFileName);
        var e = AudioFileName.split(";");
        2 == Object.keys(e).length && (message = e[1]);
        document.getElementById("play").classList.add('transform');
        // document.getElementById("play").setAttribute("transform", "scale(1.5)");
        // document.getElementById("play").src = "../gif/speaker1.png",
        // setTimeout(RestoreSpeaker, 200);
        document.getElementById("myAudio").src = AudioFileName;
        // setTimeout(RestoreSpeaker, 200);
        var t = document.getElementById("myAudio");
        t.paused && t.play()
            })
}


images[0] = "/gif/bidstrup/orator1.png",
images[1] = "/gif/bidstrup/orator2.png",
images[2] = "/gif/bidstrup/orator3.png",
images[3] = "/gif/bidstrup/orator4.png",
images[4] = "/gif/bidstrup/orator5.png",
images[5] = "/gif/bidstrup/orator6.png",
images[6] = "/gif/bidstrup/orator7.png",
images[7] = "/gif/bidstrup/orator8.png",
images[8] = "/gif/bidstrup/orator9.png",
images[9] = "/gif/bidstrup/orator10.png";
