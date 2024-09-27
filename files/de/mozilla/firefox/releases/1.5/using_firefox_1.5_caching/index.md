---
title: Verwendung des Caching von Firefox 1.5
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) nutzt In-Memory-Caching für gesamte Webseiten, einschließlich ihrer JavaScript-Zustände, für eine einzelne Browser-Sitzung. Beim Vor- und Zurücknavigieren zwischen besuchten Seiten ist kein Neuladen erforderlich, und die JavaScript-Zustände bleiben erhalten. Dieses Feature, von einigen als **bfcache** bezeichnet (für "Back-Forward Cache"), macht die Seitennavigation sehr schnell. Dieser Cache-Zustand bleibt bestehen, bis der Benutzer den Browser schließt.

Es gibt Fälle, in denen Firefox Seiten nicht zwischenspeichert. Nachfolgend sind einige häufige programmbedingte Gründe aufgeführt, warum eine Seite nicht zwischengespeichert wird:

- die Seite verwendet einen `unload`- oder `beforeunload`-Handler;
- die Seite setzt "cache-control: no-store".
- die Seite ist HTTPS und setzt mindestens eines der folgenden:

  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - mit "Expires: 0" oder "Expires" mit einem Datumswert, der vor dem im "Date"-Header angegebenen Datum liegt (es sei denn, "Cache-Control: max-age=" ist ebenfalls angegeben);

- die Seite ist nicht vollständig geladen, wenn der Benutzer von ihr weg navigiert oder hat aus anderen Gründen ausstehende Netzwerk-Anfragen (z.B. `XMLHttpRequest`));
- die Seite hat laufende IndexedDB-Transaktionen;
- die oberste Seite enthält Frames (z.B. {{HTMLElement("iframe")}}), die aus einem der hier aufgeführten Gründe nicht zwischenspeicherbar sind;
- die Seite befindet sich in einem Frame und der Benutzer lädt eine neue Seite innerhalb dieses Frames (in diesem Fall wird beim Verlassen der Seite der Inhalt zwischengespeichert, der zuletzt in die Frames geladen wurde).

Diese neue Cache-Funktion ändert das Ladeverhalten von Seiten, und Webautoren möchten möglicherweise:

- wissen, dass auf eine Seite zugegriffen wurde (wenn sie aus dem Cache eines Benutzers geladen wird)
- das Verhalten der Seite definieren, wenn ein Benutzer die Seite verlässt (während die Seite weiterhin zwischengespeichert werden kann)

Zwei neue Browser-Ereignisse ermöglichen es Webautoren, beides zu tun.

## Neue Browser-Ereignisse

Wenn Sie diese neuen Ereignisse verwenden, werden Ihre Seiten in anderen Browsern (wir haben frühere Versionen von Firefox, Internet Explorer, Opera und Safari getestet) weiterhin korrekt angezeigt und nutzen diese neue Cache-Funktionalität, wenn sie in Firefox 1.5 geladen werden.

Hinweis: Ab 10-2009 haben Entwicklungsversionen von Safari Unterstützung für diese neuen Ereignisse hinzugefügt (siehe [den WebKit-Bug](https://webkit.org/b/28758)).

Standardverhalten für Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Während die Seite geladen wird, werden Inline-Skripte ausgeführt.
3. Sobald die Seite geladen ist, wird der `onload`-Handler ausgelöst.

Einige Seiten beinhalten einen vierten Schritt. Wenn eine Seite einen `unload`- oder `beforeunload`-Handler verwendet, wird dieser ausgelöst, wenn der Benutzer die Seite verlässt. Wenn ein `unload`-Handler vorhanden ist, wird die Seite nicht zwischengespeichert.

Wenn ein Benutzer zu einer zwischengespeicherten Seite navigiert, werden Inline-Skripte und der `onload`-Handler nicht ausgeführt (Schritte 2 und 3), da in den meisten Fällen die Effekte dieser Skripte erhalten geblieben sind.

Wenn die Seite Skripte oder andere Verhaltensweisen enthält, die Sie bei jedem Navigieren des Benutzers zur Seite weiterhin ausführen möchten, oder wenn Sie wissen möchten, wann ein Benutzer zu einer zwischengespeicherten Seite navigiert hat, verwenden Sie das neue `pageshow`-Ereignis.

Wenn Sie Verhaltensweisen haben, die ausgelöst werden, wenn ein Benutzer die Seite verlässt, aber von dieser neuen Cache-Funktion profitieren möchten und daher nicht den `unload`-Handler verwenden möchten, verwenden Sie das neue `pagehide`-Ereignis.

### pageshow-Ereignis

Dieses Ereignis funktioniert genauso wie das `load`-Ereignis, außer dass es jedes Mal ausgelöst wird, wenn die Seite geladen wird (während das `load`-Ereignis in Firefox 1.5 nicht ausgelöst wird, wenn die Seite aus dem Cache geladen wird). Beim ersten Laden der Seite wird das `pageshow`-Ereignis direkt nach dem Auslösen des `load`-Ereignisses ausgelöst. Das `pageshow`-Ereignis verwendet eine boolesche Eigenschaft namens `persisted`, die beim ersten Laden auf `false` gesetzt ist. Sie wird auf `true` gesetzt, wenn es sich nicht um das erste Laden handelt (mit anderen Worten, sie wird auf true gesetzt, wenn die Seite zwischengespeichert ist).

Setzen Sie jeden JavaScript-Code, den Sie jedes Mal beim Laden einer Seite ausführen möchten, auf das `pageshow`-Ereignis.

Wenn Sie JavaScript-Funktionen im Rahmen des `pageshow`-Ereignisses aufrufen, können Sie sicherstellen, dass diese Funktionen auch in anderen Browsern als Firefox 1.5 beim Laden der Seite aufgerufen werden, indem Sie das `pageshow`-Ereignis im Rahmen des `load`-Ereignisses aufrufen, wie im späteren Beispiel in diesem Artikel gezeigt.

### pagehide-Ereignis

Wenn Sie ein Verhalten definieren möchten, das ausgeführt wird, wenn der Benutzer die Seite verlässt, aber nicht das `unload`-Ereignis verwenden möchten (was dazu führen würde, dass die Seite nicht zwischengespeichert wird), können Sie das neue `pagehide`-Ereignis verwenden. Wie `pageshow` verwendet das `pagehide`-Ereignis eine boolesche Eigenschaft namens `persisted`. Diese Eigenschaft ist auf `false` gesetzt, wenn die Seite vom Browser nicht zwischengespeichert wird, und auf `true`, wenn die Seite vom Browser zwischengespeichert wird. Wenn diese Eigenschaft auf `false` gesetzt ist, wird der `unload`-Handler, falls vorhanden, unmittelbar nach dem `pagehide`-Ereignis ausgelöst.

Firefox 1.5 versucht, Ladeereignisse in der gleichen Reihenfolge zu simulieren, in der sie beim erstmaligen Laden der Seite auftreten würden. Frames werden genauso behandelt wie das oberste Dokument. Wenn die Seite Frames enthält, dann werden beim Laden der zwischengespeicherten Seite:

- `pageshow`-Ereignisse jedes Frames ausgelöst, bevor das `pageshow`-Ereignis im Hauptdokument ausgelöst wird.
- Wenn der Benutzer die zwischengespeicherte Seite verlässt, wird das `pagehide`-Ereignis jedes Frames ausgelöst, bevor das `pagehide`-Ereignis im Hauptdokument ausgelöst wird.
- Bei der Navigation, die innerhalb eines einzelnen Frames erfolgt, werden Ereignisse nur im betroffenen Frame ausgelöst.

## Beispielcode

Das folgende Beispiel zeigt eine Seite, die sowohl das `load`- als auch das `pageshow`-Ereignis verwendet. Diese Beispielseite verhält sich wie folgt:

- In anderen Browsern als Firefox 1.5 wird bei jedem Laden der Seite Folgendes ausgeführt: Das `load`-Ereignis löst die `onLoad`-Funktion aus, die die `onPageShow`-Funktion (sowie eine zusätzliche Funktion) aufruft.
- In Firefox 1.5 verhält sich das `load`-Ereignis beim ersten Laden der Seite genauso wie in anderen Browsern. Zusätzlich wird das `pageshow`-Ereignis ausgelöst, und da `persisted` auf `false` gesetzt ist, erfolgt keine zusätzliche Aktion.
- In Firefox 1.5 wird beim Laden der Seite aus dem Cache nur das `pageshow`-Ereignis ausgelöst. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen in der `onPageShow`-Funktion ausgelöst.

In diesem Beispiel:

- Die Seite berechnet und zeigt bei jedem Laden der Seite das aktuelle Datum und die Uhrzeit an. Diese Berechnung schließt die Sekunden und Millisekunden ein, damit Sie die Funktionalität leicht testen können.
- Der Cursor wird beim ersten Laden der Seite in das Namensfeld des Formulars platziert. In Firefox 1.5 bleibt der Cursor in dem Feld, in dem er war, als der Benutzer die Seite verließ. In anderen Browsern verschiebt sich der Cursor zurück in das Namensfeld.

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

Im Gegensatz dazu, wenn die obige Seite nicht das `pageshow`-Ereignis abhörte und alle Berechnungen Teil des `load`-Ereignisses wären (und stattdessen wie im unten stehenden Codeausschnitt dargestellt kodiert wäre), würden sowohl die Cursorposition als auch das Datum/die Uhrzeit in Firefox 1.5 zwischengespeichert werden, wenn der Benutzer die Seite verließ. Wenn der Benutzer zur Seite zurückkehrte, würde das zwischengespeicherte Datum/die Uhrzeit angezeigt werden.

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

## Entwickeln von Firefox-Erweiterungen

Firefox 1.5 [Erweiterungen](/de/docs/Mozilla/Add-ons) müssen diese Cache-Funktionalität berücksichtigen. Wenn Sie eine Firefox-Erweiterung entwickeln, die sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel sein soll, stellen Sie sicher, dass sie auf das `load`-Ereignis für Auslöser, die zwischengespeichert werden können, und auf das `pageshow`-Ereignis für Auslöser, die nicht zwischengespeichert werden sollen, hört.

Zum Beispiel sollte die Google Toolbar für Firefox auf das `load`-Ereignis für die Autolink-Funktion und auf das `pageshow`-Ereignis für die PageRank-Funktion hören, um sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel zu sein.
