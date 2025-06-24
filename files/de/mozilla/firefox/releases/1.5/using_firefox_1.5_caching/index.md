---
title: Verwendung des Firefox 1.5 Caches
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) verwendet einen Speicher-Cache für gesamte Webseiten, einschließlich ihrer JavaScript-Zustände, für eine einzelne Browsersitzung. Das Zurück- und Vorblättern zwischen besuchten Seiten erfordert kein Neuladen der Seite und die JavaScript-Zustände bleiben erhalten. Dieses Feature, das von manchen als **bfcache** (für "Back-Forward Cache") bezeichnet wird, macht die Seitennavigation sehr schnell. Dieser Cache-Zustand wird beibehalten, bis der Benutzer den Browser schließt.

Es gibt Fälle, in denen Firefox Seiten nicht cached. Nachfolgend sind einige häufige programmatische Gründe aufgeführt, weshalb eine Seite nicht zwischengespeichert wird:

- Die Seite verwendet einen `unload` oder `beforeunload` Handler;
- die Seite setzt "cache-control: no-store".
- die Seite ist HTTPS und setzt mindestens eines der folgenden:

  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - mit "Expires: 0" oder "Expires" mit einem Datumswert in der Vergangenheit relativ zum Wert des "Date"-Headers (es sei denn, "Cache-Control: max-age=" ist ebenfalls angegeben);

- die Seite ist nicht vollständig geladen, wenn der Benutzer sie verlässt oder es gibt ausstehende Netzwerk-Anfragen aus anderen Gründen (z.B. `XMLHttpRequest`);
- die Seite hat laufende IndexedDB-Transaktionen;
- die oberste Seite enthält Frames (z.B. {{HTMLElement("iframe")}}), die aus einem der hier genannten Gründe nicht cachefähig sind;
- die Seite befindet sich in einem Frame und der Benutzer lädt eine neue Seite innerhalb dieses Frames (in diesem Fall ist, wenn der Benutzer die Seite verlässt, der zuletzt in die Frames geladene Inhalt der zwischengespeicherte Inhalt).

Diese neue Caching-Funktion ändert das Ladeverhalten von Seiten und Web-Autoren möchten möglicherweise:

- wissen, dass eine Seite aufgerufen wurde (wenn sie aus dem Cache eines Benutzers geladen wird)
- das Verhalten der Seite definieren, wenn ein Benutzer die Seite verlässt (während sie weiterhin zwischengespeichert werden kann)

Zwei neue Browserevents ermöglichen es Web-Autoren, beides zu tun.

## Neue Browserevents

Wenn Sie diese neuen Events verwenden, werden Ihre Seiten in anderen Browsern weiterhin richtig angezeigt (wir haben frühere Versionen von Firefox, Internet Explorer, Opera und Safari getestet) und diese neue Caching-Funktionalität wird bei der Anzeige in Firefox 1.5 verwendet.

Hinweis: Ab 10-2009 haben Entwicklungsversionen von Safari Unterstützung für diese neuen Events hinzugefügt (siehe [den WebKit-Bug](https://webkit.org/b/28758)).

Das Standardverhalten für Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Während die Seite lädt, werden Inline-Skripte ausgeführt.
3. Sobald die Seite geladen ist, wird der `onload` Handler ausgelöst.

Einige Seiten enthalten einen vierten Schritt. Wenn eine Seite einen `unload` oder `beforeunload` Handler verwendet, wird dieser ausgelöst, wenn der Benutzer die Seite verlässt. Wenn ein `unload` Handler vorhanden ist, wird die Seite nicht zwischengespeichert.

Wenn ein Benutzer zu einer zwischengespeicherten Seite navigiert, werden Inline-Skripte und der `onload` Handler nicht ausgeführt (Schritte 2 und 3), da die Effekte dieser Skripte in den meisten Fällen erhalten geblieben sind.

Wenn die Seite Skripte oder anderes Verhalten enthält, das während des Ladens ausgelöst wird und das Sie jedes Mal ausführen möchten, wenn der Benutzer zur Seite navigiert, oder wenn Sie wissen möchten, wann ein Benutzer zu einer zwischengespeicherten Seite navigiert hat, verwenden Sie das neue `pageshow` Event.

Wenn Sie Verhaltensweisen haben, die ausgelöst werden, wenn ein Benutzer die Seite verlässt, Sie aber von dieser neuen Caching-Funktion profitieren möchten und daher den `unload` Handler nicht verwenden möchten, verwenden Sie das neue `pagehide` Event.

### pageshow Event

Dieses Event funktioniert genauso wie das `load` Event, außer dass es jedes Mal ausgelöst wird, wenn die Seite geladen wird (während das `load` Event in Firefox 1.5 nicht ausgelöst wird, wenn die Seite aus dem Cache geladen wird). Das erste Mal wird das `pageshow` Event unmittelbar nach dem Auslösen des `load` Events ausgelöst. Das `pageshow` Event verwendet eine boolesche Eigenschaft namens `persisted`, die beim ersten Laden auf `false` gesetzt ist. Sie wird auf `true` gesetzt, wenn es nicht das erste Laden ist (mit anderen Worten, sie wird auf `true` gesetzt, wenn die Seite zwischengespeichert ist).

Setzen Sie alle JavaScript, die bei jedem Laden einer Seite ausgeführt werden sollen, so dass sie beim `pageshow` Event ausgeführt werden.

Wenn Sie JavaScript-Funktionen als Teil des `pageshow` Events aufrufen, können Sie gewährleisten, dass diese Funktionen aufgerufen werden, wenn die Seite in anderen Browsern als Firefox 1.5 geladen wird, indem Sie das `pageshow` Event als Teil des `load` Events aufrufen, wie im späteren Beispiel in diesem Artikel gezeigt.

### pagehide Event

Wenn Sie Verhalten definieren möchten, das auftritt, wenn der Benutzer die Seite verlässt, aber nicht das `unload` Event verwenden möchten (was dazu führen würde, dass die Seite nicht zwischengespeichert wird), können Sie das neue `pagehide` Event verwenden. Wie `pageshow` verwendet auch das `pagehide` Event eine boolesche Eigenschaft namens `persisted`. Diese Eigenschaft wird auf `false` gesetzt, wenn die Seite nicht vom Browser zwischengespeichert wird und auf `true`, wenn die Seite vom Browser zwischengespeichert wird. Wenn diese Eigenschaft auf `false` gesetzt wird, wird der `unload` Handler, falls vorhanden, unmittelbar nach dem `pagehide` Event ausgelöst.

Firefox 1.5 versucht, Ladeereignisse in der gleichen Reihenfolge zu simulieren, in der sie auftreten würden, wenn die Seite initial geladen wurde. Frames werden genauso behandelt wie das oberste Dokument. Wenn die Seite Frames enthält, dann werden bei einem geladenen Cache-Seiten:

- `pageshow` Events von jedem Frame ausgelöst, bevor das `pageshow` Event im Hauptdokument ausgelöst wird.
- Wenn der Benutzer die zwischengespeicherte Seite verlässt, wird das `pagehide` Event von jedem Frame ausgelöst, bevor das `pagehide` Event im Hauptdokument ausgelöst wird.
- Bei Navigation innerhalb eines einzelnen Frames werden Events nur im betroffenen Frame ausgelöst.

## Beispielcode

Das folgende Beispiel zeigt eine Seite, die sowohl die `load` als auch die `pageshow` Events verwendet. Dieses Beispiel verhält sich wie folgt:

- In Browsern außer Firefox 1.5 tritt folgendes bei jedem Laden der Seite auf: das `load` Event löst die `onLoad` Funktion aus, welche die `onPageShow` Funktion (sowie eine zusätzliche Funktion) aufruft.
- In Firefox 1.5 funktioniert das `load` Event beim ersten Laden der Seite wie in anderen Browsern. Zusätzlich wird das `pageshow` Event ausgelöst, und da `persisted` auf `false` gesetzt ist, tritt keine zusätzliche Aktion auf.
- In Firefox 1.5, wenn die Seite aus dem Cache geladen wird, wird nur das `pageshow` Event ausgelöst. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen in der `onPageShow` Funktion ausgelöst.

In diesem Beispiel:

- Die Seite berechnet und zeigt bei jedem Laden das aktuelle Datum und die aktuelle Uhrzeit an. Diese Berechnung umfasst Sekunden und Millisekunden, damit Sie die Funktionalität leicht testen können.
- Der Cursor wird beim ersten Laden der Seite in das Namensfeld des Formulars gesetzt. In Firefox 1.5 bleibt der Cursor in dem Feld, in dem er war, als der Benutzer die Seite verlassen hat. In anderen Browsern springt der Cursor zurück ins Namensfeld.

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

Wenn die obige Seite nicht auf das `pageshow` Event hören würde und alle Berechnungen als Teil des `load` Events gehandhabt würden (und stattdessen wie im unten gezeigten Beispielcodefragment codiert wäre), würden der Cursor und das Datum/die Uhrzeit in Firefox 1.5 zwischengespeichert, wenn der Benutzer die Seite verlässt. Wenn der Benutzer zur Seite zurückkehrt, würde das zwischengespeicherte Datum/ Uhrzeit angezeigt.

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

## Entwicklung von Firefox-Erweiterungen

Firefox 1.5 [Erweiterungen](/de/docs/Mozilla/Add-ons) müssen diese Caching-Funktionalität berücksichtigen. Wenn Sie eine Firefox-Erweiterung entwickeln, die sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel sein soll, stellen Sie sicher, dass sie das `load` Event für auslöser abhört, die zwischengespeichert werden können, und das `pageshow` Event für auslöser, die nicht zwischengespeichert werden sollten.

Beispielsweise sollte die Google Toolbar für Firefox sowohl auf das `load` Event für die Autolink-Funktion als auch auf das `pageshow` Event für die PageRank-Funktion hören, um sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel zu sein.
