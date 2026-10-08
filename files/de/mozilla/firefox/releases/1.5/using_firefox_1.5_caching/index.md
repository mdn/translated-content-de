---
title: Caching in Firefox 1.5 verwenden
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) speichert während einer Browsersitzung ganze Webseiten einschließlich ihres JavaScript-Zustands im Arbeitsspeicher zwischen. Beim Zurück- und Vorwärtsnavigieren zwischen besuchten Seiten müssen diese nicht neu geladen werden, und ihr JavaScript-Zustand bleibt erhalten. Diese Funktion, von manchen **bfcache** (für „Back-Forward Cache“) genannt, macht die Seitennavigation sehr schnell. Der zwischengespeicherte Zustand bleibt erhalten, bis der Benutzer den Browser schließt.

In manchen Fällen speichert Firefox Seiten nicht zwischen. Hier sind einige häufige programmtechnische Gründe dafür:

- Die Seite verwendet einen `unload`- oder `beforeunload`-Handler.
- Die Seite setzt „cache-control: no-store“.
- Die Website verwendet HTTPS und die Seite setzt mindestens eine der folgenden Angaben:
  - „Cache-Control: no-cache“
  - „Pragma: no-cache“
  - „Expires: 0“ oder „Expires“ mit einem Datum, das vor dem Wert des „Date“-Headers liegt (sofern nicht auch „Cache-Control: max-age=“ angegeben ist).

- Die Seite ist noch nicht vollständig geladen, wenn der Benutzer sie verlässt, oder es stehen aus anderen Gründen noch Netzwerkanfragen aus (z. B. `XMLHttpRequest`).
- Auf der Seite laufen IndexedDB-Transaktionen.
- Die oberste Seite enthält Frames (z. B. {{HTMLElement("iframe")}}), die aus einem der hier genannten Gründe nicht zwischengespeichert werden können.
- Die Seite befindet sich in einem Frame, und der Benutzer lädt innerhalb dieses Frames eine neue Seite. Wenn der Benutzer die Seite anschließend verlässt, wird in diesem Fall der zuletzt in den Frame geladene Inhalt zwischengespeichert.

Diese neue Caching-Funktion verändert das Ladeverhalten von Seiten. Webentwickler möchten möglicherweise:

- erkennen, dass zu einer Seite navigiert wurde (wenn sie aus dem Cache des Benutzers geladen wird)
- festlegen, wie sich eine Seite verhält, wenn ein Benutzer sie verlässt (ohne die Zwischenspeicherung der Seite zu verhindern)

Zwei neue Browserereignisse ermöglichen beides.

## Neue Browserereignisse

Wenn Sie diese neuen Ereignisse verwenden, werden Ihre Seiten auch in anderen Browsern weiterhin korrekt angezeigt (wir haben frühere Versionen von Firefox sowie Internet Explorer, Opera und Safari getestet). In Firefox 1.5 nutzen sie außerdem die neue Caching-Funktion.

Hinweis: Seit Oktober 2009 unterstützen Entwicklungsversionen von Safari diese neuen Ereignisse ebenfalls (siehe [den WebKit-Bug](https://webkit.org/b/28758)).

Das übliche Verhalten von Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Während die Seite geladen wird, werden Inline-Skripte ausgeführt.
3. Sobald die Seite geladen ist, wird der `onload`-Handler ausgelöst.

Bei manchen Seiten kommt ein vierter Schritt hinzu: Wenn eine Seite einen `unload`- oder `beforeunload`-Handler verwendet, wird dieser ausgelöst, sobald der Benutzer die Seite verlässt. Ist ein `unload`-Handler vorhanden, wird die Seite nicht zwischengespeichert.

Wenn ein Benutzer zu einer zwischengespeicherten Seite navigiert, werden Inline-Skripte und der `onload`-Handler nicht ausgeführt (Schritte 2 und 3), da die Auswirkungen dieser Skripte in den meisten Fällen erhalten geblieben sind.

Wenn die Seite Skripte oder andere Vorgänge enthält, die beim Laden ausgelöst werden und jedes Mal ausgeführt werden sollen, wenn ein Benutzer zur Seite navigiert, oder wenn Sie erkennen möchten, dass ein Benutzer zu einer zwischengespeicherten Seite navigiert ist, verwenden Sie das neue `pageshow`-Ereignis.

Wenn beim Verlassen der Seite bestimmte Vorgänge ausgelöst werden sollen, Sie aber die neue Caching-Funktion nutzen und deshalb keinen `unload`-Handler verwenden möchten, verwenden Sie das neue `pagehide`-Ereignis.

### Das Ereignis pageshow

Dieses Ereignis funktioniert wie das `load`-Ereignis, wird aber bei jedem Laden der Seite ausgelöst. Das `load`-Ereignis wird in Firefox 1.5 dagegen nicht ausgelöst, wenn die Seite aus dem Cache geladen wird. Beim ersten Laden der Seite wird das `pageshow`-Ereignis unmittelbar nach dem `load`-Ereignis ausgelöst. Das `pageshow`-Ereignis besitzt eine boolesche Eigenschaft namens `persisted`, die beim ersten Laden auf `false` gesetzt ist. Wenn die Seite nicht zum ersten Mal geladen wird, ist sie auf `true` gesetzt (also wenn die Seite zwischengespeichert wurde).

Lassen Sie JavaScript, das bei jedem Laden der Seite ausgeführt werden soll, beim Auslösen des `pageshow`-Ereignisses ausführen.

Wenn Sie im Rahmen des `pageshow`-Ereignisses JavaScript-Funktionen aufrufen, können Sie sicherstellen, dass diese Funktionen auch beim Laden der Seite in anderen Browsern als Firefox 1.5 aufgerufen werden: Rufen Sie dazu den Handler für das `pageshow`-Ereignis im Rahmen des `load`-Ereignisses auf, wie im Beispiel weiter unten gezeigt.

### Das Ereignis pagehide

Wenn Sie ein Verhalten festlegen möchten, das beim Verlassen der Seite eintritt, aber nicht das `unload`-Ereignis verwenden möchten (da dies die Zwischenspeicherung der Seite verhindern würde), können Sie das neue `pagehide`-Ereignis verwenden. Wie `pageshow` besitzt auch das `pagehide`-Ereignis eine boolesche Eigenschaft namens `persisted`. Sie ist auf `false` gesetzt, wenn der Browser die Seite nicht zwischenspeichert, und auf `true`, wenn er sie zwischenspeichert. Wenn diese Eigenschaft auf `false` gesetzt ist, wird ein vorhandener `unload`-Handler unmittelbar nach dem `pagehide`-Ereignis ausgelöst.

Firefox 1.5 versucht, Ladeereignisse in derselben Reihenfolge auszulösen wie beim erstmaligen Laden der Seite. Frames werden dabei genauso behandelt wie das oberste Dokument. Wenn die Seite Frames enthält, geschieht beim Laden der zwischengespeicherten Seite Folgendes:

- Die `pageshow`-Ereignisse der einzelnen Frames werden ausgelöst, bevor das `pageshow`-Ereignis im Hauptdokument ausgelöst wird.
- Wenn der Benutzer die zwischengespeicherte Seite verlässt, werden die `pagehide`-Ereignisse der einzelnen Frames ausgelöst, bevor das `pagehide`-Ereignis im Hauptdokument ausgelöst wird.
- Bei einer Navigation innerhalb eines einzelnen Frames werden Ereignisse nur in diesem Frame ausgelöst.

## Beispielcode

Das folgende Beispiel zeigt eine Seite, die sowohl das `load`- als auch das `pageshow`-Ereignis verwendet. Die Beispielseite verhält sich wie folgt:

- In anderen Browsern als Firefox 1.5 geschieht bei jedem Laden der Seite Folgendes: Das `load`-Ereignis löst die Funktion `onLoad` aus, die die Funktion `onPageShow` sowie eine weitere Funktion aufruft.
- In Firefox 1.5 funktioniert das `load`-Ereignis beim ersten Laden der Seite genauso wie in anderen Browsern. Zusätzlich wird das `pageshow`-Ereignis ausgelöst. Da `persisted` auf `false` gesetzt ist, erfolgt keine weitere Aktion.
- Wenn die Seite in Firefox 1.5 aus dem Cache geladen wird, wird nur das `pageshow`-Ereignis ausgelöst. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen in der Funktion `onPageShow` ausgeführt.

In diesem Beispiel:

- Die Seite berechnet bei jedem Laden das aktuelle Datum und die aktuelle Uhrzeit und zeigt beides an. Die Berechnung umfasst auch Sekunden und Millisekunden, damit Sie die Funktion leicht testen können.
- Beim ersten Laden der Seite wird der Cursor in das Feld „Name“ des Formulars gesetzt. Wenn der Benutzer in Firefox 1.5 zur Seite zurückkehrt, bleibt der Cursor in dem Feld, in dem er sich beim Verlassen der Seite befand. In anderen Browsern springt der Cursor zurück in das Feld „Name“.

```html
<!doctype html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>Order query Firefox 1.5 Example</title>
    <style type="text/css">
      body,
      p {
        font-family: "Verdana", sans-serif;
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
        document.getElementById("time-field").value = displayTime;
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
      <label for="time-field">Date and time:</label>
      <input type="text" id="time-field" /><br />
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

Würde die obige Seite dagegen nicht auf das `pageshow`-Ereignis reagieren und alle Berechnungen im Rahmen des `load`-Ereignisses durchführen (also wie im folgenden Codeausschnitt), würden in Firefox 1.5 beim Verlassen der Seite sowohl die Cursorposition als auch Datum und Uhrzeit zwischengespeichert. Wenn der Benutzer zur Seite zurückkehrt, würden das zwischengespeicherte Datum und die zwischengespeicherte Uhrzeit angezeigt.

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
      document.getElementById("time-field").value = displayTime;
    }

    function loadOnlyFirst() {
      document.zipForm.name.focus();
    }
  </script>
</head>

<body onload="onLoad();"></body>
```

## Firefox-Erweiterungen entwickeln

[Erweiterungen](/de/docs/Mozilla/Add-ons) für Firefox 1.5 müssen diese Caching-Funktion berücksichtigen. Wenn Sie eine Firefox-Erweiterung entwickeln, die sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel sein soll, achten Sie darauf, dass sie für Auslöser, die zwischengespeichert werden können, auf das `load`-Ereignis reagiert und für Auslöser, die nicht zwischengespeichert werden sollen, auf das `pageshow`-Ereignis.

Beispielsweise sollte die Google Toolbar für Firefox für die Autolink-Funktion auf das `load`-Ereignis und für die PageRank-Funktion auf das `pageshow`-Ereignis reagieren, damit sie sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel ist.
