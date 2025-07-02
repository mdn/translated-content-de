---
title: Verwendung des Firefox 1.5 Caching
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) verwendet ein In-Memory-Caching für gesamte Webseiten, einschließlich ihrer JavaScript-Zustände, für eine einzelne Browsersitzung. Beim Vor- und Zurückgehen zwischen besuchten Seiten ist kein erneutes Laden der Seite notwendig und die JavaScript-Zustände bleiben erhalten. Dieses Feature, das von einigen als **bfcache** (für "Back-Forward Cache") bezeichnet wird, ermöglicht eine sehr schnelle Seitennavigation. Dieser Cache-Zustand bleibt erhalten, bis der Benutzer den Browser schließt.

Es gibt Fälle, in denen Firefox Seiten nicht cached. Nachfolgend sind einige häufige programmatische Gründe aufgeführt, warum eine Seite nicht im Cache abgelegt wird:

- Die Seite verwendet einen `unload` oder `beforeunload` Handler;
- Die Seite setzt "cache-control: no-store".
- Die Seite ist HTTPS und legt mindestens einen der folgenden Werte fest:
  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - mit "Expires: 0" oder "Expires" mit einem Datum in der Vergangenheit relativ zum Wert des "Date"-Headers (es sei denn, "Cache-Control: max-age=" wird ebenfalls angegeben);

- Die Seite ist nicht vollständig geladen, wenn der Benutzer sie verlässt oder hat aus anderen Gründen noch ausstehende Netzwerk-Anforderungen (z.B. `XMLHttpRequest`));
- Die Seite hat laufende IndexedDB-Transaktionen;
- Die oberste Seite enthält Frames (z.B. {{HTMLElement("iframe")}}), die aus einem der hier aufgeführten Gründe nicht cachefähig sind;
- Die Seite befindet sich in einem Frame und der Benutzer lädt eine neue Seite innerhalb dieses Frames (in diesem Fall wird beim Verlassen der Seite der Inhalt, der zuletzt in den Frames geladen wurde, gecached).

Dieses neue Caching-Feature ändert das Ladeverhalten von Seiten, und Web-Autoren möchten möglicherweise:

- wissen, dass zu einer Seite navigiert wurde (wenn sie aus dem Cache des Benutzers geladen wird)
- das Verhalten der Seite definieren, wenn ein Benutzer die Seite verlässt (während die Seite weiterhin gecached werden kann)

Zwei neue Browser-Ereignisse ermöglichen es Web-Autoren, beides zu tun.

## Neue Browser-Ereignisse

Wenn Sie diese neuen Ereignisse verwenden, werden Ihre Seiten weiterhin ordnungsgemäß in anderen Browsern angezeigt (wir haben frühere Versionen von Firefox, Internet Explorer, Opera und Safari getestet) und nutzen diese neue Caching-Funktionalität, wenn sie in Firefox 1.5 geladen werden.

Hinweis: Ab 10-2009 haben Entwicklerversionen von Safari Unterstützung für diese neuen Ereignisse hinzugefügt (siehe [den WebKit-Bug](https://webkit.org/b/28758)).

Das Standardverhalten für Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Beim Laden der Seite werden Inline-Skripte ausgeführt.
3. Sobald die Seite geladen ist, wird der `onload` Handler ausgelöst.

Einige Seiten umfassen einen vierten Schritt. Wenn eine Seite einen `unload` oder `beforeunload` Handler verwendet, wird dieser ausgelöst, wenn der Benutzer die Seite verlässt. Wenn ein `unload` Handler vorhanden ist, wird die Seite nicht gecached.

Wenn ein Benutzer zu einer gecachten Seite navigiert, werden Inline-Skripte und der `onload` Handler nicht ausgeführt (Schritte 2 und 3), da in den meisten Fällen die Auswirkungen dieser Skripte erhalten geblieben sind.

Wenn die Seite Skripte oder anderes Verhalten enthält, das bei jedem Laden ausgeführt werden soll, oder wenn Sie wissen möchten, wann ein Benutzer zu einer gecachten Seite navigiert hat, verwenden Sie das neue `pageshow` Ereignis.

Wenn Sie Verhalten haben, das ausgeführt wird, wenn ein Benutzer die Seite verlässt, Sie jedoch dieses neue Caching-Feature nutzen möchten und daher den `unload` Handler nicht verwenden wollen, verwenden Sie das neue `pagehide` Ereignis.

### `pageshow` Ereignis

Dieses Ereignis funktioniert genauso wie das `load` Ereignis, mit dem Unterschied, dass es jedes Mal ausgelöst wird, wenn die Seite geladen wird (während das `load` Ereignis in Firefox 1.5 nicht ausgelöst wird, wenn die Seite aus dem Cache geladen wird). Beim ersten Laden der Seite wird das `pageshow` Ereignis direkt nach dem `load` Ereignis ausgelöst. Das `pageshow` Ereignis verwendet eine boolesche Eigenschaft namens `persisted`, die beim ersten Laden auf `false` gesetzt wird. Sie wird auf `true` gesetzt, wenn es sich nicht um das erste Laden handelt (mit anderen Worten, sie wird auf true gesetzt, wenn die Seite gecached ist).

Setzen Sie jeden JavaScript-Code, den Sie jedes Mal beim Laden einer Seite ausführen möchten, so, dass er ausgeführt wird, wenn das `pageshow` Ereignis ausgelöst wird.

Wenn Sie JavaScript-Funktionen als Teil des `pageshow` Ereignisses aufrufen, können Sie sicherstellen, dass diese Funktionen aufgerufen werden, wenn die Seite in anderen Browsern als Firefox 1.5 geladen wird, indem Sie das `pageshow` Ereignis als Teil des `load` Ereignisses aufrufen, wie in dem später in diesem Artikel gezeigten Beispiel.

### `pagehide` Ereignis

Wenn Sie ein Verhalten definieren möchten, das auftritt, wenn der Benutzer die Seite verlässt, aber das `unload` Ereignis nicht verwenden wollen (da dies dazu führen würde, dass die Seite nicht gecached wird), können Sie das neue `pagehide` Ereignis verwenden. Wie `pageshow` verwendet das `pagehide` Ereignis eine boolesche Eigenschaft namens `persisted`. Diese Eigenschaft ist auf `false` gesetzt, wenn die Seite nicht vom Browser gecached wird und auf `true`, wenn die Seite vom Browser gecached wird. Wenn diese Eigenschaft auf `false` gesetzt ist, wird der `unload` Handler, falls vorhanden, unmittelbar nach dem `pagehide` Ereignis ausgelöst.

Firefox 1.5 versucht, Ladevorgänge in der gleichen Reihenfolge zu simulieren, wie sie beim erstmaligen Laden der Seite auftreten würden. Frames werden genauso behandelt wie das oberste Dokument. Wenn die Seite Frames enthält, wird beim Laden der gecachten Seite Folgendes ausgeführt:

- Die `pageshow` Ereignisse von jedem Frame werden ausgelöst, bevor das `pageshow` Ereignis im Hauptdokument ausgelöst wird.
- Wenn der Benutzer die gecachte Seite verlässt, werden die `pagehide` Ereignisse von jedem Frame ausgelöst, bevor das `pagehide` Ereignis im Hauptdokument ausgelöst wird.
- Bei Navigationen, die innerhalb eines einzelnen Frames stattfinden, werden Ereignisse nur im betroffenen Frame ausgelöst.

## Beispielcode

Das folgende Beispiel zeigt eine Seite, die sowohl die `load` als auch die `pageshow` Ereignisse verwendet. Diese Beispielseite verhält sich folgendermaßen:

- In anderen Browsern als Firefox 1.5 tritt bei jedem Laden der Seite Folgendes auf: Das `load` Ereignis löst die `onLoad` Funktion aus, die die `onPageShow` Funktion (sowie eine zusätzliche Funktion) aufruft.
- In Firefox 1.5 wird beim ersten Laden der Seite das `load` Ereignis auf die gleiche Weise wie in anderen Browsern ausgeführt. Zusätzlich wird das `pageshow` Ereignis ausgelöst, und da `persisted` auf `false` gesetzt ist, tritt keine zusätzliche Aktion auf.
- In Firefox 1.5, wenn die Seite aus dem Cache geladen wird, wird nur das `pageshow` Ereignis ausgelöst. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen in der `onPageShow` Funktion ausgeführt.

In diesem Beispiel:

- Die Seite berechnet und zeigt bei jedem Laden der Seite das aktuelle Datum und die Uhrzeit an. Diese Berechnung umfasst Sekunden und Millisekunden, sodass Sie die Funktionalität leicht testen können.
- Der Cursor wird im Namensfeld des Formulars platziert, wenn die Seite das erste Mal geladen wird. In Firefox 1.5 bleibt der Cursor, wenn der Benutzer zur Seite zurücknavigiert, im Feld, in dem er sich befand, als der Benutzer die Seite verlassen hat. In anderen Browsern bewegt sich der Cursor zurück in das Namensfeld.

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

Im Gegensatz dazu, wenn die obige Seite das `pageshow` Ereignis nicht überwachen würde und alle Berechnungen als Teil des `load` Ereignisses behandelt würde (und stattdessen, wie im unten gezeigten Codefragment, codiert wäre), würden sowohl die Cursorposition als auch das Datum/Zeit unter Firefox 1.5 im Cache gespeichert werden, wenn der Benutzer die Seite verlässt. Wenn der Benutzer zur Seite zurückkehrt, wird die gecachte Datum/Zeit angezeigt.

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

Firefox 1.5 [Erweiterungen](/de/docs/Mozilla/Add-ons) müssen diese Caching-Funktionalität berücksichtigen. Wenn Sie eine Firefox-Erweiterung entwickeln, die sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel sein soll, stellen Sie sicher, dass sie das `load` Ereignis für Trigger, die gecached werden können, und das `pageshow` Ereignis für Trigger, die nicht gecached werden sollten, überwacht.

Zum Beispiel sollte die Google Toolbar für Firefox das `load` Ereignis für die Autolink-Funktion und das `pageshow` Ereignis für die PageRank-Funktion überwachen, um sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel zu sein.
