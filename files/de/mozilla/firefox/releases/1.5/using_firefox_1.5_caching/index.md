---
title: Verwendung des Firefox 1.5-Cachings
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{FirefoxSidebar}}

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) verwendet das Zwischenspeichern im Arbeitsspeicher für komplette Webseiten, einschließlich ihrer JavaScript-Zustände, innerhalb einer einzigen Browsersitzung. Beim Zurück- und Vorwärtsnavigieren zwischen besuchten Seiten ist kein Neuladen der Seite erforderlich, und die JavaScript-Zustände bleiben erhalten. Diese Funktion, die von einigen als **bfcache** (für "Back-Forward Cache") bezeichnet wird, macht die Seitennavigation sehr schnell. Dieser Cache-Zustand bleibt bestehen, bis der Benutzer den Browser schließt.

Es gibt Fälle, in denen Firefox Seiten nicht zwischenspeichert. Nachfolgend sind einige häufige programmatische Gründe aufgeführt, warum eine Seite nicht zwischengespeichert wird:

- Die Seite verwendet einen `unload`- oder `beforeunload`-Handler;
- Die Seite setzt "cache-control: no-store".
- Die Seite ist HTTPS und setzt mindestens eines der folgenden:

  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - mit "Expires: 0" oder "Expires" mit einem Datum, das in der Vergangenheit liegt, relativ zum Wert des "Date"-Headers (es sei denn, "Cache-Control: max-age=" ist ebenfalls angegeben);

- Die Seite ist nicht vollständig geladen, wenn der Benutzer weg navigiert, oder hat aus anderen Gründen ausstehende Netzwerk-Anforderungen (z.B. `XMLHttpRequest`));
- Die Seite hat laufende IndexedDB-Transaktionen;
- Die Hauptseite enthält Frames (z.B. {{HTMLElement("iframe")}}), die aus einem der hier aufgeführten Gründe nicht zwischenspeicherbar sind;
- Die Seite befindet sich in einem Frame, und der Benutzer lädt eine neue Seite innerhalb dieses Frames (in diesem Fall wird, wenn der Benutzer von der Seite weg navigiert, der zuletzt in den Frames geladene Inhalt zwischengespeichert).

Diese neue Caching-Funktion ändert das Ladeverhalten von Seiten, und Webautoren möchten möglicherweise:

- wissen, dass eine Seite aufgerufen wurde (wenn sie aus dem Cache eines Benutzers geladen wird)
- das Verhalten der Seite definieren, wenn ein Benutzer die Seite verlässt (während die Seite weiterhin zwischengespeichert wird)

Zwei neue Browsereignisse ermöglichen es Webautoren, beides zu tun.

## Neue Browsereignisse

Wenn Sie diese neuen Ereignisse verwenden, werden Ihre Seiten weiterhin in anderen Browsern ordnungsgemäß angezeigt (wir haben frühere Versionen von Firefox, Internet Explorer, Opera und Safari getestet) und verwenden diese neue Caching-Funktionalität, wenn sie in Firefox 1.5 geladen werden.

Hinweis: Ab 10-2009 haben Entwickler-Versionen von Safari Unterstützung für diese neuen Ereignisse hinzugefügt (siehe [der WebKit-Bug](https://webkit.org/b/28758)).

Standardverhalten für Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Während die Seite geladen wird, werden Inline-Skripte ausgeführt.
3. Sobald die Seite geladen ist, wird der `onload`-Handler gestartet.

Einige Seiten enthalten einen vierten Schritt. Wenn eine Seite einen `unload`- oder `beforeunload`-Handler verwendet, wird dieser ausgelöst, wenn der Benutzer von der Seite weg navigiert. Wenn ein `unload`-Handler vorhanden ist, wird die Seite nicht zwischengespeichert.

Wenn ein Benutzer zu einer zwischengespeicherten Seite navigiert, werden Inline-Skripte und der `onload`-Handler nicht ausgeführt (Schritte 2 und 3), da in den meisten Fällen die Effekte dieser Skripte erhalten geblieben sind.

Wenn die Seite Skripte oder andere Verhaltensweisen enthält, die während des Ladens ausgelöst werden und die Sie jedes Mal ausführen möchten, wenn der Benutzer zur Seite navigiert, oder wenn Sie wissen möchten, wann ein Benutzer zu einer zwischengespeicherten Seite navigiert hat, verwenden Sie das neue `pageshow`-Ereignis.

Wenn Sie Verhaltensweisen haben, die ausgelöst werden, wenn ein Benutzer von der Seite weg navigiert, Sie aber diese neue Caching-Funktion nutzen möchten und daher den `unload`-Handler nicht verwenden möchten, verwenden Sie das neue `pagehide`-Ereignis.

### pageshow-Ereignis

Dieses Ereignis funktioniert genauso wie das `load`-Ereignis, außer dass es jedes Mal ausgelöst wird, wenn die Seite geladen wird (während das `load`-Ereignis in Firefox 1.5 nicht ausgelöst wird, wenn die Seite aus dem Cache geladen wird). Das erste Mal, wenn die Seite geladen wird, wird das `pageshow`-Ereignis unmittelbar nach dem Auslösen des `load`-Ereignisses ausgelöst. Das `pageshow`-Ereignis verwendet eine boolesche Eigenschaft namens `persisted`, die beim ersten Laden auf `false` gesetzt ist. Es wird auf `true` gesetzt, wenn es nicht das erste Laden ist (mit anderen Worten, es wird auf wahr gesetzt, wenn die Seite zwischengespeichert ist).

Setzen Sie jedes JavaScript, das bei jedem Laden einer Seite ausgeführt werden soll, so, dass es beim Auslösen des `pageshow`-Ereignisses ausgeführt wird.

Wenn Sie JavaScript-Funktionen als Teil des `pageshow`-Ereignisses aufrufen, können Sie sicherstellen, dass diese Funktionen auch in anderen Browsern als Firefox 1.5 aufgerufen werden, indem Sie das `pageshow`-Ereignis als Teil des `load`-Ereignisses aufrufen, wie im späteren Abschnitt dieses Artikels gezeigt.

### pagehide-Ereignis

Wenn Sie ein Verhalten definieren möchten, das auftritt, wenn der Benutzer von der Seite weg navigiert, aber nicht das `unload`-Ereignis verwenden möchten (was dazu führen würde, dass die Seite nicht zwischengespeichert wird), können Sie das neue `pagehide`-Ereignis verwenden. Wie das `pageshow`-Ereignis verwendet auch das `pagehide`-Ereignis eine boolesche Eigenschaft namens `persisted`. Diese Eigenschaft wird auf `false` gesetzt, wenn die Seite nicht vom Browser zwischengespeichert wird, und auf `true`, wenn die Seite vom Browser zwischengespeichert wird. Wenn diese Eigenschaft auf `false` gesetzt ist, wird der `unload`-Handler, falls vorhanden, unmittelbar nach dem `pagehide`-Ereignis ausgelöst.

Firefox 1.5 versucht, Ladeereignisse in der Reihenfolge zu simulieren, in der sie auftreten würden, wenn die Seite initial geladen wird. Frames werden genauso behandelt wie das Top-Level-Dokument. Wenn die Seite Frames enthält, dann wird beim Laden der zwischengespeicherten Seite:

- `pageshow`-Ereignisse von jedem Frame ausgelöst, bevor das `pageshow`-Ereignis im Hauptdokument ausgelöst wird.
- Wenn der Benutzer von der zwischengespeicherten Seite weg navigiert, wird das `pagehide`-Ereignis von jedem Frame ausgelöst, bevor das `pagehide`-Ereignis im Hauptdokument ausgelöst wird.
- Für die Navigation, die innerhalb eines einzelnen Frames auftritt, werden die Ereignisse nur im betroffenen Frame ausgelöst.

## Beispielcode

Das untenstehende Beispiel veranschaulicht eine Seite, die sowohl die `load`- als auch die `pageshow`-Ereignisse verwendet. Diese Beispielseite verhält sich wie folgt:

- In anderen Browsern als Firefox 1.5 tritt beim Laden der Seite Folgendes auf: Das `load`-Ereignis löst die Funktion `onLoad` aus, die die Funktion `onPageShow` (sowie eine zusätzliche Funktion) aufruft.
- In Firefox 1.5 funktioniert das `load`-Ereignis beim ersten Laden der Seite genauso wie in anderen Browsern. Zusätzlich wird das `pageshow`-Ereignis ausgelöst, und da `persisted` auf `false` gesetzt ist, tritt keine zusätzliche Aktion auf.
- In Firefox 1.5, wenn die Seite aus dem Cache geladen wird, wird nur das `pageshow`-Ereignis ausgelöst. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen in der Funktion `onPageShow` ausgelöst.

In diesem Beispiel:

- Die Seite berechnet und zeigt bei jedem Laden der Seite das aktuelle Datum und die Uhrzeit an. Diese Berechnung umfasst die Sekunden und Millisekunden, sodass Sie die Funktionalität leicht testen können.
- Der Cursor wird beim ersten Laden der Seite in das Namensfeld des Formulars gesetzt. In Firefox 1.5 bleibt der Cursor in dem Feld, in dem er sich befand, als der Benutzer von der Seite weg navigiert ist. In anderen Browsern wechselt der Cursor zurück in das Namensfeld.

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
        // Calculate current time
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

Im Gegensatz dazu, wenn die obige Seite nicht auf das `pageshow`-Ereignis reagiert und alle Berechnungen als Teil des `load`-Ereignisses behandelt (und stattdessen wie im untenstehenden Beispielprogrammcode kodiert wäre), würden sowohl die Cursorposition als auch das Datum/die Uhrzeit in Firefox 1.5 zwischengespeichert, wenn der Benutzer von der Seite weg navigiert. Wenn der Benutzer zur Seite zurückkehren würde, würde das zwischengespeicherte Datum/die Uhrzeit angezeigt werden.

```html
<head>
  <script>
    function onLoad() {
      loadOnlyFirst();

      // Calculate current time
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

<body onload="onLoad();"></body>
```

## Entwickeln von Firefox-Erweiterungen

Firefox 1.5-[Erweiterungen](/de/docs/Mozilla/Add-ons) müssen diese Caching-Funktionalität berücksichtigen. Wenn Sie eine Firefox-Erweiterung entwickeln, die sowohl mit 1.5 als auch mit früheren Versionen kompatibel sein soll, stellen Sie sicher, dass sie auf das `load`-Ereignis für Auslöser hört, die zwischengespeichert werden können, und auf das `pageshow`-Ereignis für Auslöser, die nicht zwischengespeichert werden sollen.

Zum Beispiel sollte die Google Toolbar für Firefox auf das `load`-Ereignis für die Autolink-Funktion und auf das `pageshow`-Ereignis für die PageRank-Funktion hören, um sowohl mit 1.5 als auch mit früheren Versionen kompatibel zu sein.
