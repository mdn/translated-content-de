---
title: Verwendung des Firefox 1.5-Cachings
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) verwendet ein In-Memory-Caching für komplette Webseiten, einschließlich ihrer JavaScript-Zustände, für eine einzelne Browsersitzung. Beim Vor- und Zurückgehen zwischen besuchten Seiten ist kein Neuladen der Seite erforderlich und die JavaScript-Zustände bleiben erhalten. Diese Funktion, die von einigen als **bfcache** (für "Back-Forward Cache") bezeichnet wird, macht die Navigation zwischen Seiten sehr schnell. Dieser Caching-Zustand wird beibehalten, bis der Benutzer den Browser schließt.

Es gibt Fälle, in denen Firefox Seiten nicht cached. Nachfolgend sind einige gängige programmatische Gründe aufgeführt, warum eine Seite nicht gecached wird:

- Die Seite verwendet einen `unload`- oder `beforeunload`-Handler;
- die Seite setzt "cache-control: no-store".
- die Webseite ist HTTPS und die Seite setzt mindestens eines von:

  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - mit "Expires: 0" oder "Expires" mit einem in der Vergangenheit liegenden Datum relativ zum Wert des "Date"-Headers (es sei denn, "Cache-Control: max-age=" ist ebenfalls angegeben);

- die Seite ist nicht vollständig geladen, wenn der Benutzer von ihr weg navigiert, oder es gibt aus anderen Gründen ausstehende Netzwerk-Anfragen (z.B. `XMLHttpRequest`));
- die Seite hat laufende IndexedDB-Transaktionen;
- die übergeordnete Seite enthält Frames (z.B. {{HTMLElement("iframe")}}), die aus einem der hier aufgeführten Gründe nicht gecached werden können;
- die Seite befindet sich in einem Frame und der Benutzer lädt eine neue Seite innerhalb dieses Frames (in diesem Fall wird beim Navigieren des Benutzers von der Seite der Inhalt gecached, der zuletzt in die Frames geladen wurde).

Diese neue Caching-Funktion verändert das Seitenladeverhalten, und Webentwickler könnten:

- wissen wollen, dass eine Seite aufgerufen wurde (wenn sie aus dem Cache eines Benutzers geladen wird)
- das Verhalten der Seite definieren, wenn ein Benutzer die Seite verlässt (während sie weiterhin gecached werden kann)

Zwei neue Browserereignisse ermöglichen es Webentwicklern, beides zu tun.

## Neue Browserereignisse

Wenn Sie diese neuen Ereignisse verwenden, werden Ihre Seiten weiterhin korrekt in anderen Browsern angezeigt (wir haben frühere Versionen von Firefox, Internet Explorer, Opera und Safari getestet) und nutzen diese neue Caching-Funktionalität, wenn sie in Firefox 1.5 geladen werden.

Hinweis: Ab dem 10-2009 haben Entwicklungsversionen von Safari Unterstützung für diese neuen Ereignisse hinzugefügt (siehe [den WebKit-Bug](https://webkit.org/b/28758)).

Standardverhalten für Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Während die Seite geladen wird, werden Inline-Skripte ausgeführt.
3. Sobald die Seite geladen ist, wird der `onload`-Handler ausgelöst.

Einige Seiten beinhalten einen vierten Schritt. Wenn eine Seite einen `unload`- oder `beforeunload`-Handler verwendet, wird dieser ausgelöst, wenn der Benutzer die Seite verlässt. Wenn ein `unload`-Handler vorhanden ist, wird die Seite nicht gecached.

Wenn ein Benutzer zu einer gecachten Seite navigiert, werden Inline-Skripte und der `onload`-Handler nicht ausgeführt (Schritte 2 und 3), da in den meisten Fällen die Auswirkungen dieser Skripte erhalten geblieben sind.

Wenn die Seite Skripte oder anderes Verhalten enthält, die während des Ladens ablaufen sollen, die Sie jedes Mal ausführen möchten, wenn der Benutzer zur Seite navigiert, oder wenn Sie wissen möchten, wann ein Benutzer zu einer gecachten Seite navigiert hat, verwenden Sie das neue `pageshow`-Ereignis.

Wenn Sie Verhalten haben, das ausgelöst wird, wenn ein Benutzer die Seite verlässt, aber diese neue Caching-Funktion nutzen möchten und daher den `unload`-Handler nicht verwenden wollen, verwenden Sie das neue `pagehide`-Ereignis.

### pageshow-Ereignis

Dieses Ereignis funktioniert gleich wie das `load`-Ereignis, außer dass es jedes Mal ausgelöst wird, wenn die Seite geladen wird (während das `load`-Ereignis in Firefox 1.5 nicht ausgelöst wird, wenn die Seite aus dem Cache geladen wird). Das erste Mal, wenn die Seite geladen wird, wird das `pageshow`-Ereignis direkt nach dem `load`-Ereignis ausgelöst. Das `pageshow`-Ereignis verwendet eine boolesche Eigenschaft namens `persisted`, die beim ersten Laden auf `false` gesetzt ist. Sie wird auf `true` gesetzt, wenn es nicht das erste Laden ist (mit anderen Worten, sie wird auf `true` gesetzt, wenn die Seite gecached ist).

Stellen Sie JavaScript, das Sie jedes Mal ausführen möchten, wenn eine Seite geladen wird, so ein, dass es ausgeführt wird, wenn das `pageshow`-Ereignis ausgelöst wird.

Wenn Sie JavaScript-Funktionen im Rahmen des `pageshow`-Ereignisses aufrufen, können Sie sicherstellen, dass diese Funktionen aufgerufen werden, wenn die Seite in anderen Browsern als Firefox 1.5 geladen wird, indem Sie das `pageshow`-Ereignis als Teil des `load`-Ereignisses aufrufen, wie in dem später in diesem Artikel gezeigten Beispiel.

### pagehide-Ereignis

Wenn Sie ein Verhalten definieren möchten, das auftritt, wenn der Benutzer die Seite verlässt, aber nicht das `unload`-Ereignis verwenden möchten (was dazu führen würde, dass die Seite nicht gecached wird), können Sie das neue `pagehide`-Ereignis verwenden. Wie `pageshow` verwendet das `pagehide`-Ereignis eine boolesche Eigenschaft namens `persisted`. Diese Eigenschaft wird auf `false` gesetzt, wenn die Seite vom Browser nicht gecached ist und auf `true`, wenn die Seite vom Browser gecached wird. Wenn diese Eigenschaft auf `false` gesetzt ist, wird der `unload`-Handler, falls vorhanden, sofort nach dem `pagehide`-Ereignis ausgelöst.

Firefox 1.5 versucht, Ladeereignisse in der gleichen Reihenfolge zu simulieren, in der sie auftreten würden, wenn die Seite ursprünglich geladen wird. Frames werden genauso behandelt wie das übergeordnete Dokument. Wenn die Seite Frames enthält, dann wird beim Laden der gecachten Seite:

- `pageshow`-Ereignisse aus jedem Frame ausgelöst, bevor das `pageshow`-Ereignis im Hauptdokument ausgelöst wird.
- Wenn der Benutzer von der gecachten Seite weg navigiert, wird das `pagehide`-Ereignis aus jedem Frame ausgelöst, bevor das `pagehide`-Ereignis im Hauptdokument ausgelöst wird.
- Für Navigation, die innerhalb eines einzelnen Frames erfolgt, werden die Ereignisse nur im betroffenen Frame ausgelöst.

## Beispielcode

Das folgende Beispiel zeigt eine Seite, die sowohl die `load`- als auch die `pageshow`-Ereignisse verwendet. Diese Beispielseite verhält sich wie folgt:

- In anderen Browsern als Firefox 1.5 geschieht bei jedem Laden der Seite Folgendes: Das `load`-Ereignis löst die `onLoad`-Funktion aus, die die `onPageShow`-Funktion (sowie eine zusätzliche Funktion) aufruft.
- In Firefox 1.5 funktioniert das `load`-Ereignis beim ersten Mal, wenn die Seite geladen wird, genauso wie in anderen Browsern. Zusätzlich wird das `pageshow`-Ereignis ausgelöst, und da `persisted` auf `false` gesetzt ist, erfolgt keine zusätzliche Aktion.
- In Firefox 1.5, wenn die Seite aus dem Cache geladen wird, wird nur das `pageshow`-Ereignis ausgelöst. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen in der `onPageShow`-Funktion ausgelöst.

In diesem Beispiel:

- Die Seite berechnet und zeigt das aktuelle Datum und die Uhrzeit jedes Mal an, wenn die Seite geladen wird. Diese Berechnung umfasst die Sekunden und Millisekunden, so dass Sie die Funktionalität leicht testen können.
- Der Cursor wird beim ersten Laden der Seite in das Namensfeld des Formulars gesetzt. In Firefox 1.5 bleibt der Cursor beim Zurücknavigieren zur Seite in dem Feld, in dem er sich beim Verlassen der Seite befand. In anderen Browsern springt der Cursor zurück in das Namensfeld.

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

Im Gegensatz dazu, wenn die obige Seite nicht auf das `pageshow`-Ereignis hören würde und alle Berechnungen als Teil des `load`-Ereignisses behandeln würde (und stattdessen so kodiert wäre, wie im unten stehenden Codeausschnitt gezeigt), würden sowohl die Cursorposition als auch Datum/Uhrzeit in Firefox 1.5 gecached, wenn der Benutzer die Seite verlässt. Wenn der Benutzer zur Seite zurückkehrt, würden das gecachte Datum und die Uhrzeit angezeigt.

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

Firefox 1.5 [Erweiterungen](/de/docs/Mozilla/Add-ons) müssen diese Caching-Funktionalität berücksichtigen. Wenn Sie eine Firefox-Erweiterung entwickeln, die sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel sein soll, stellen Sie sicher, dass sie auf das `load`-Ereignis für Trigger hört, die gecached werden können, und auf das `pageshow`-Ereignis für Trigger, die nicht gecached werden sollen.

Beispielsweise sollte die Google Toolbar für Firefox auf das `load`-Ereignis für die Autolink-Funktion und auf das `pageshow`-Ereignis für die PageRank-Funktion hören, um sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel zu sein.
