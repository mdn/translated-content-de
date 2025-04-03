---
title: Verwenden des Firefox 1.5 Caching
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) verwendet ein In-Memory-Caching für gesamte Webseiten, einschließlich ihrer JavaScript-Zustände, für eine einzelne Browsersitzung. Bei der Navigation zwischen besuchten Seiten vorwärts und rückwärts ist kein erneutes Laden der Seite erforderlich und die JavaScript-Zustände bleiben erhalten. Diese Funktion, von manchen als **bfcache** (für "Back-Forward Cache") bezeichnet, macht die Seitennavigation sehr schnell. Dieser Caching-Zustand bleibt bestehen, bis der Benutzer den Browser schließt.

Es gibt Fälle, in denen Firefox Seiten nicht cached. Nachfolgend sind einige häufige programmatische Gründe aufgeführt, warum eine Seite nicht gecached wird:

- Die Seite verwendet einen `unload`- oder `beforeunload`-Handler;
- die Seite setzt "cache-control: no-store".
- die Seite ist HTTPS und setzt mindestens eines der folgenden:

  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - mit "Expires: 0" oder "Expires" mit einem Datumswert in der Vergangenheit relativ zum Wert des "Date"-Headers (es sei denn, "Cache-Control: max-age=" ist ebenfalls angegeben);

- die Seite ist nicht vollständig geladen, wenn der Benutzer von ihr weg navigiert oder hat aus anderen Gründen ausstehende Netzwerk-Anfragen (z.B. `XMLHttpRequest`));
- die Seite hat laufende IndexedDB-Transaktionen;
- die Top-Level-Seite enthält Frames (z.B. {{HTMLElement("iframe")}}), die aus einem der hier genannten Gründe nicht cacheable sind;
- die Seite befindet sich in einem Frame und der Benutzer lädt innerhalb dieses Frames eine neue Seite (in diesem Fall wird, wenn der Benutzer von der Seite weg navigiert, der Inhalt, der zuletzt in die Frames geladen wurde, gecached).

Diese neue Caching-Funktion ändert das Ladeverhalten von Seiten und Web-Autoren möchten möglicherweise:

- wissen, dass zu einer Seite navigiert wurde (wenn sie aus dem Cache eines Benutzers geladen wird)
- das Verhalten der Seite definieren, wenn ein Benutzer die Seite verlässt (während die Seite weiterhin gecached werden kann)

Zwei neue Browser-Ereignisse ermöglichen es Web-Autoren, beides zu tun.

## Neue Browser-Ereignisse

Wenn Sie diese neuen Ereignisse verwenden, werden Ihre Seiten in anderen Browsern weiterhin ordnungsgemäß angezeigt (wir haben frühere Versionen von Firefox, Internet Explorer, Opera und Safari getestet) und verwenden diese neue Caching-Funktionalität, wenn sie in Firefox 1.5 geladen werden.

Hinweis: Ab 10-2009 haben die Entwicklungs-Versionen von Safari Unterstützung für diese neuen Ereignisse hinzugefügt (siehe [den WebKit Bug](https://webkit.org/b/28758)).

Das Standardverhalten für Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Während die Seite geladen wird, laufen Inline-Skripte.
3. Sobald die Seite geladen ist, wird der `onload`-Handler ausgelöst.

Einige Seiten umfassen einen vierten Schritt. Wenn eine Seite einen `unload`- oder `beforeunload`-Handler verwendet, wird dieser ausgelöst, wenn der Benutzer von der Seite weg navigiert. Wenn ein `unload`-Handler vorhanden ist, wird die Seite nicht gecached.

Wenn ein Benutzer zu einer gecachten Seite navigiert, werden Inline-Skripte und der `onload`-Handler nicht ausgeführt (Schritte 2 und 3), da in den meisten Fällen die Effekte dieser Skripte erhalten geblieben sind.

Wenn die Seite Skripte oder andere Verhalten enthält, die beim Laden ausgelöst werden und die Sie jedes Mal ausführen möchten, wenn der Benutzer zu der Seite navigiert, oder wenn Sie wissen möchten, wann ein Benutzer zu einer gecachten Seite navigiert hat, verwenden Sie das neue `pageshow`-Ereignis.

Wenn Sie Verhalten haben, das ausgelöst wird, wenn ein Benutzer von der Seite weg navigiert, aber Sie diese neue Caching-Funktion nutzen möchten und daher den `unload`-Handler nicht verwenden möchten, verwenden Sie das neue `pagehide`-Ereignis.

### pageshow Ereignis

Dieses Ereignis funktioniert genauso wie das `load`-Ereignis, außer dass es jedes Mal ausgelöst wird, wenn die Seite geladen wird (während das `load`-Ereignis in Firefox 1.5 nicht ausgelöst wird, wenn die Seite aus dem Cache geladen wird). Beim ersten Laden der Seite wird das `pageshow`-Ereignis direkt nach dem Auslösen des `load`-Ereignisses ausgelöst. Das `pageshow`-Ereignis verwendet eine boolesche Eigenschaft namens `persisted`, die beim ersten Laden auf `false` gesetzt ist. Sie wird auf `true` gesetzt, wenn es sich nicht um das erste Laden handelt (mit anderen Worten, sie wird auf `true` gesetzt, wenn die Seite gecached ist).

Setzen Sie alle JavaScript-Funktionen, die jedes Mal ausgeführt werden sollen, wenn eine Seite geladen wird, auf das `pageshow`-Ereignis.

Wenn Sie JavaScript-Funktionen als Teil des `pageshow`-Ereignisses aufrufen, können Sie sicherstellen, dass diese Funktionen auch in anderen Browsern als Firefox 1.5 aufgerufen werden, indem Sie das `pageshow`-Ereignis als Teil des `load`-Ereignisses aufrufen, wie es im Beispiel später in diesem Artikel gezeigt wird.

### pagehide Ereignis

Wenn Sie ein Verhalten definieren möchten, das auftritt, wenn der Benutzer von der Seite weg navigiert, aber das `unload`-Ereignis nicht verwenden möchten (was dazu führen würde, dass die Seite nicht gecached wird), können Sie das neue `pagehide`-Ereignis verwenden. Wie `pageshow` verwendet das `pagehide`-Ereignis eine boolesche Eigenschaft namens `persisted`. Diese Eigenschaft wird auf `false` gesetzt, wenn die Seite nicht vom Browser gecached wird, und auf `true`, wenn die Seite vom Browser gecached wird. Wenn diese Eigenschaft auf `false` gesetzt ist, wird der `unload`-Handler, falls vorhanden, sofort nach dem `pagehide`-Ereignis ausgelöst.

Firefox 1.5 versucht, Ladeereignisse in derselben Reihenfolge zu simulieren, wie sie beim ersten Laden der Seite auftreten würden. Frames werden genauso behandelt wie das Top-Level-Dokument. Wenn die Seite Frames enthält, dann werden beim Laden der gecachten Seite:

- `pageshow`-Ereignisse jedes Frames ausgelöst, bevor das `pageshow`-Ereignis im Hauptdokument ausgelöst wird.
- Wenn der Benutzer von der gecachten Seite weg navigiert, wird das `pagehide`-Ereignis jedes Frames ausgelöst, bevor das `pagehide`-Ereignis im Hauptdokument ausgelöst wird.
- Bei Navigationen, die innerhalb eines einzelnen Frames stattfinden, werden nur die Ereignisse im betroffenen Frame ausgelöst.

## Beispielcode

Das nachstehende Beispiel zeigt eine Seite, die sowohl das `load`- als auch das `pageshow`-Ereignis verwendet. Diese Beispielseite verhält sich folgendermaßen:

- In anderen Browsern als Firefox 1.5 passiert folgendes jedes Mal, wenn die Seite geladen wird: Das `load`-Ereignis löst die `onLoad`-Funktion aus, die die `onPageShow`-Funktion (sowie eine zusätzliche Funktion) aufruft.
- In Firefox 1.5, beim ersten Laden der Seite, funktioniert das `load`-Ereignis genauso wie in anderen Browsern. Zusätzlich wird das `pageshow`-Ereignis ausgelöst, und da `persisted` auf `false` gesetzt ist, tritt keine zusätzliche Aktion auf.
- In Firefox 1.5, wenn die Seite aus dem Cache geladen wird, wird nur das `pageshow`-Ereignis ausgelöst. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen in der `onPageShow`-Funktion ausgelöst.

In diesem Beispiel:

- Die Seite berechnet und zeigt das aktuelle Datum und die aktuelle Uhrzeit jedes Mal an, wenn die Seite geladen wird. Diese Berechnung umfasst die Sekunden und Millisekunden, sodass Sie die Funktionalität leicht testen können.
- Der Cursor wird beim ersten Laden der Seite im Namensfeld des Formulars platziert. In Firefox 1.5 bleibt der Cursor im Feld, in dem er sich befand, als der Benutzer von der Seite weg navigierte. In anderen Browsern bewegt sich der Cursor zurück in das Namensfeld.

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

Im Gegensatz dazu, wenn die obige Seite nicht auf das `pageshow`-Ereignis hören und alle Berechnungen als Teil des `load`-Ereignisses handhaben würde (und stattdessen so codiert wäre wie im unten stehenden Codefragmente-Beispiel), würden sowohl die Cursorposition als auch das Datum/die Uhrzeit in Firefox 1.5 gecached werden, wenn der Benutzer von der Seite weg navigierte. Beim Zurückkehren zur Seite würde das gecachte Datum/die Uhrzeit angezeigt.

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

Firefox 1.5 [Erweiterungen](/de/docs/Mozilla/Add-ons) müssen diese Caching-Funktionalität berücksichtigen. Wenn Sie eine Firefox-Erweiterung entwickeln, die sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel sein soll, stellen Sie sicher, dass sie auf das `load`-Ereignis für Cache-trächtige Auslöser und auf das `pageshow`-Ereignis für nicht cachebare Auslöser hört.

Zum Beispiel sollte die Google Toolbar für Firefox auf das `load`-Ereignis für die Autolink-Funktion hören und auf das `pageshow`-Ereignis für die PageRank-Funktion, um sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel zu sein.
