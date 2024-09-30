---
title: Verwendung des Firefox 1.5-Cachings
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) verwendet ein Speicher-Cache für gesamte Webseiten, einschließlich ihrer JavaScript-Zustände, für eine einzelne Browsersitzung. Das Zurück- und Vorwärtsnavigieren zwischen besuchten Seiten erfordert kein Nachladen der Seite und die JavaScript-Zustände bleiben erhalten. Diese Funktion, die von einigen als **bfcache** (für "Back-Forward Cache") bezeichnet wird, macht die Seitennavigation sehr schnell. Dieser Caching-Zustand bleibt erhalten, bis der Benutzer den Browser schließt.

Es gibt Fälle, in denen Firefox Seiten nicht cached. Nachfolgend sind einige häufige programmatische Gründe aufgeführt, warum eine Seite nicht gecached wird:

- die Seite verwendet einen `unload`- oder `beforeunload`-Handler;
- die Seite setzt "cache-control: no-store".
- die Seite ist HTTPS und setzt mindestens einen der folgenden Header:

  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - mit "Expires: 0" oder "Expires" mit einem Datumswert, der in der Vergangenheit liegt relativ zum Wert des "Date"-Headers (es sei denn, "Cache-Control: max-age=" ist ebenfalls angegeben);

- die Seite ist nicht vollständig geladen, wenn der Benutzer von ihr weg navigiert oder hat aus anderen Gründen (z.B. `XMLHttpRequest`) ausstehende Netzwerk-Anfragen;
- die Seite hat aktive IndexedDB-Transaktionen;
- die oberste Seite enthält Frames (z.B. {{HTMLElement("iframe")}}), die aus einem der hier aufgeführten Gründe nicht cachefähig sind;
- die Seite befindet sich in einem Frame und der Benutzer lädt eine neue Seite innerhalb dieses Frames (in diesem Fall wird, wenn der Benutzer die Seite verlässt, der Inhalt, der zuletzt in die Frames geladen wurde, gecached).

Diese neue Caching-Funktion ändert das Ladeverhalten von Seiten, und Webautoren möchten möglicherweise:

- wissen, dass eine Seite aufgerufen wurde (wenn sie aus dem Cache eines Benutzers geladen wird)
- das Verhalten der Seite definieren, wenn ein Benutzer die Seite verlässt (während die Seite dennoch gecached werden kann)

Zwei neue Browser-Ereignisse ermöglichen es Webautoren, beides zu tun.

## Neue Browser-Ereignisse

Wenn Sie diese neuen Ereignisse verwenden, werden Ihre Seiten weiterhin korrekt in anderen Browsern angezeigt (wir haben frühere Versionen von Firefox, Internet Explorer, Opera und Safari getestet) und werden diese neue Caching-Funktion nutzen, wenn sie in Firefox 1.5 geladen werden.

Hinweis: Ab 10-2009 haben Entwicklungs-Versionen von Safari Unterstützung für diese neuen Ereignisse hinzugefügt (siehe [den WebKit-Bug](https://webkit.org/b/28758)).

Das Standardverhalten für Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Während die Seite lädt, werden Inline-Skripte ausgeführt.
3. Sobald die Seite geladen ist, wird der `onload`-Handler ausgelöst.

Einige Seiten enthalten einen vierten Schritt. Wenn eine Seite einen `unload`- oder `beforeunload`-Handler verwendet, wird dieser ausgelöst, wenn der Benutzer die Seite verlässt. Wenn ein `unload`-Handler vorhanden ist, wird die Seite nicht gecached.

Wenn ein Benutzer zu einer gecachten Seite navigiert, werden Inline-Skripte und der `onload`-Handler nicht ausgeführt (Schritte 2 und 3), da in den meisten Fällen die Auswirkungen dieser Skripte erhalten geblieben sind.

Wenn die Seite Skripte oder andere Verhaltensweisen enthält, die beim Laden ausgeführt werden sollen, die Sie weiterhin jedes Mal ausführen möchten, wenn der Benutzer die Seite aufruft, oder wenn Sie wissen möchten, wann ein Benutzer zu einer gecachten Seite navigiert hat, verwenden Sie das neue Ereignis `pageshow`.

Wenn Sie Verhaltensweisen haben, die ausgelöst werden, wenn ein Benutzer die Seite verlässt, aber diese neue Caching-Funktion nutzen möchten und daher den `unload`-Handler nicht verwenden möchten, verwenden Sie das neue Ereignis `pagehide`.

### pageshow-Ereignis

Dieses Ereignis funktioniert genauso wie das `load`-Ereignis, mit dem Unterschied, dass es jedes Mal ausgelöst wird, wenn die Seite geladen wird (während das `load`-Ereignis nicht ausgelöst wird, wenn die Seite in Firefox 1.5 aus dem Cache geladen wird). Das erste Mal, wenn die Seite geladen wird, wird das `pageshow`-Ereignis direkt nach dem `load`-Ereignis ausgelöst. Das `pageshow`-Ereignis verwendet eine boolesche Eigenschaft namens `persisted`, die beim initialen Laden auf `false` gesetzt ist. Es wird auf `true` gesetzt, wenn es nicht das anfängliche Laden ist (mit anderen Worten, es wird auf `true` gesetzt, wenn die Seite gecached ist).

Setzen Sie jegliches JavaScript, das bei jedem Laden der Seite ausgeführt werden soll, so ein, dass es ausgeführt wird, wenn das `pageshow`-Ereignis ausgelöst wird.

Wenn Sie JavaScript-Funktionen als Teil des `pageshow`-Ereignisses aufrufen, können Sie sicherstellen, dass diese Funktionen auch in anderen Browsern als Firefox 1.5 aufgerufen werden, indem Sie das `pageshow`-Ereignis als Teil des `load`-Ereignisses aufrufen, wie im später in diesem Artikel gezeigten Beispiel.

### pagehide-Ereignis

Wenn Sie ein Verhalten definieren möchten, das auftritt, wenn der Benutzer die Seite verlässt, aber das `unload`-Ereignis (das dazu führen würde, dass die Seite nicht gecached wird) nicht verwenden möchten, können Sie das neue `pagehide`-Ereignis verwenden. Wie `pageshow` verwendet das `pagehide`-Ereignis eine boolesche Eigenschaft namens `persisted`. Diese Eigenschaft ist auf `false` gesetzt, wenn die Seite vom Browser nicht gecached wird, und auf `true`, wenn die Seite vom Browser gecached wird. Wenn diese Eigenschaft auf `false` gesetzt ist, wird der `unload`-Handler, sofern vorhanden, direkt nach dem `pagehide`-Ereignis ausgelöst.

Firefox 1.5 versucht, Ladeereignisse in der gleichen Reihenfolge zu simulieren, in der sie auftreten würden, wenn die Seite initial geladen wird. Frames werden genauso behandelt wie das oberste Dokument. Wenn die Seite Frames enthält, dann, wenn die gecachte Seite geladen wird:

- `pageshow`-Ereignisse von jedem Frame werden ausgelöst, bevor das `pageshow`-Ereignis im Hauptdokument ausgelöst wird.
- Wenn der Benutzer die gecachte Seite verlässt, wird das `pagehide`-Ereignis von jedem Frame ausgelöst, bevor das `pagehide`-Ereignis im Hauptdokument ausgelöst wird.
- Bei Navigationen, die innerhalb eines einzelnen Frames stattfinden, werden Ereignisse nur im betroffenen Frame ausgelöst.

## Beispielcode

Das folgende Beispiel zeigt eine Seite, die sowohl das `load`- als auch das `pageshow`-Ereignis verwendet. Diese Beispielseite verhält sich wie folgt:

- In anderen Browsern als Firefox 1.5 tritt Folgendes jedes Mal auf, wenn die Seite geladen wird: Das `load`-Ereignis löst die `onLoad`-Funktion aus, die die `onPageShow`-Funktion (sowie eine zusätzliche Funktion) aufruft.
- In Firefox 1.5, beim ersten Laden der Seite, wirkt das `load`-Ereignis genauso wie in anderen Browsern. Darüber hinaus wird das `pageshow`-Ereignis ausgelöst, und da `persisted` auf `false` gesetzt ist, tritt keine zusätzliche Aktion auf.
- In Firefox 1.5, wenn die Seite aus dem Cache geladen wird, wird nur das `pageshow`-Ereignis ausgelöst. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen in der `onPageShow`-Funktion ausgelöst.

In diesem Beispiel:

- Die Seite berechnet und zeigt das aktuelle Datum und die aktuelle Uhrzeit jedes Mal an, wenn die Seite geladen wird. Diese Berechnung umfasst die Sekunden und Millisekunden, sodass Sie die Funktionalität leicht testen können.
- Der Cursor wird beim ersten Laden der Seite im Namensfeld des Formulars platziert. In Firefox 1.5 bleibt der Cursor im Feld, in dem er sich befand, als der Benutzer die Seite verließ. In anderen Browsern bewegt sich der Cursor zurück in das Namensfeld.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>Order query Firefox 1.5 Example</title>
    <style type="text/css">
      body,
      p {
        font-family: Verdana, sans-serif;
        font-size: 12px;
      }
    </style>
    <script>
      function onLoad() {
        loadOnlyFirst();
        onPageShow();
      }

      function onPageShow() {
        //calculate current time
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var hour = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
        var mil = currentTime.getMilliseconds();
        var displayTime =
          month +
          "/" +
          day +
          "/" +
          year +
          " " +
          hour +
          ":" +
          min +
          ":" +
          sec +
          ":" +
          mil;
        document.getElementById("timefield").value = displayTime;
      }

      function loadOnlyFirst() {
        document.zipForm.name.focus();
      }
    </script>
  </head>
  <body onload="onLoad();" onpageshow="if (event.persisted) onPageShow();">
    <h2>Order query</h2>

    <form
      name="zipForm"
      action="http://www.example.com/formresult.html"
      method="get">
      <label for="timefield">Date and time:</label>
      <input type="text" id="timefield" /><br />
      <label for="name">Name:</label>
      <input type="text" id="name" /><br />
      <label for="address">Email address:</label>
      <input type="text" id="address" /><br />
      <label for="order">Order number:</label>
      <input type="text" id="order" /><br />
      <input type="submit" name="submit" value="Submit Query" />
    </form>
  </body>
</html>
```

Im Gegensatz dazu, wenn die obige Seite nicht auf das `pageshow`-Ereignis hören würde und alle Berechnungen als Teil des `load`-Ereignisses behandelt würden (und stattdessen so codiert würde wie im unten gezeigten Beispielcode-Fragment), würden sowohl die Cursorposition als auch das Datum/die Uhrzeit in Firefox 1.5 gecached, wenn der Benutzer die Seite verlassen würde. Wenn der Benutzer zur Seite zurückkehren würde, würde das gecachte Datum/die gecachte Uhrzeit angezeigt.

```html
<script>
function onLoad() {
  loadOnlyFirst();

//calculate current time
  var currentTime= new Date();
  var year = currentTime.getFullYear();
  var month = currentTime.getMonth()+1;
  var day = currentTime.getDate();
  var hour=currentTime.getHours();
  var min=currentTime.getMinutes();
  var sec=currentTime.getSeconds();
  var mil=currentTime.getMilliseconds();
  var displayTime = (month + "/" + day + "/" + year + " " +
    hour + ":" + min + ":" + sec + ":" + mil);
  document.getElementById("timefield").value=displayTime;
}

function loadOnlyFirst() {
  document.zipForm.name.focus();
}
</script>
</head>

<body onload="onLoad();">
```

## Entwicklung von Firefox-Erweiterungen

Firefox 1.5 [Erweiterungen](/de/docs/Mozilla/Add-ons) müssen diese Caching-Funktionalität berücksichtigen. Wenn Sie eine Firefox-Erweiterung entwickeln, die mit sowohl 1.5 als auch früheren Versionen kompatibel sein soll, stellen Sie sicher, dass sie auf das `load`-Ereignis für Trigger, die gecached werden können, und auf das `pageshow`-Ereignis für Trigger, die nicht gecached werden sollen, hört.

Zum Beispiel sollte die Google Toolbar für Firefox auf das `load`-Ereignis für die Autolink-Funktion hören und auf das `pageshow`-Ereignis für die PageRank-Funktion, um mit sowohl 1.5 als auch früheren Versionen kompatibel zu sein.
