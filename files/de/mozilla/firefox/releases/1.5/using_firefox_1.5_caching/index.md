---
title: Verwendung des Caching in Firefox 1.5
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{FirefoxSidebar}}

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) verwendet ein In-Memory-Caching für komplette Webseiten, einschließlich ihrer JavaScript-Zustände, für eine einzelne Browsersitzung. Rück- und Vorwärtsspringen zwischen besuchten Seiten erfordert kein Neuladen der Seiten, und die JavaScript-Zustände bleiben erhalten. Diese Funktion, von einigen **bfcache** (für "Back-Forward Cache") genannt, macht die Seitennavigation sehr schnell. Dieser Cache-Zustand wird beibehalten, bis der Benutzer den Browser schließt.

Es gibt Fälle, in denen Firefox Seiten nicht cached. Nachfolgend sind einige häufige programmatische Gründe aufgeführt, warum eine Seite nicht gecached wird:

- die Seite verwendet einen `unload` oder `beforeunload` Handler;
- die Seite setzt "cache-control: no-store".
- die Seite ist HTTPS und setzt mindestens eines der folgenden:

  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - mit "Expires: 0" oder "Expires" mit einem Datum in der Vergangenheit relativ zum Wert des "Date"-Headers (es sei denn, "Cache-Control: max-age=" ist ebenfalls angegeben);

- die Seite ist nicht vollständig geladen, wenn der Benutzer sie verlässt oder es gibt aus anderen Gründen noch ausstehende Netzwerk-Anfragen (z. B. `XMLHttpRequest`));
- die Seite hat laufende IndexedDB-Transaktionen;
- die oberste Seite enthält Frames (z. B. {{HTMLElement("iframe")}}), die aus einem der hier aufgeführten Gründe nicht cachefähig sind;
- die Seite befindet sich in einem Frame und der Benutzer lädt eine neue Seite innerhalb dieses Frames (in diesem Fall wird, wenn der Benutzer die Seite verlässt, der Inhalt, der zuletzt in den Frames geladen wurde, gecached).

Diese neue Caching-Funktion ändert das Ladeverhalten von Seiten, und Web-Autoren möchten möglicherweise:

- wissen, dass eine Seite aufgerufen wurde (wenn sie aus dem Cache eines Benutzers geladen wird)
- das Verhalten der Seite definieren, wenn ein Benutzer die Seite verlässt (während die Seite dennoch gecached werden kann)

Zwei neue Browser-Ereignisse ermöglichen es Web-Autoren, beides zu tun.

## Neue Browser-Ereignisse

Wenn Sie diese neuen Ereignisse verwenden, werden Ihre Seiten in anderen Browsern weiterhin korrekt angezeigt (wir haben frühere Versionen von Firefox, Internet Explorer, Opera und Safari getestet) und verwenden diese neue Caching-Funktionalität, wenn sie in Firefox 1.5 geladen werden.

Hinweis: Ab 10-2009 haben Entwicklungsversionen von Safari Unterstützung für diese neuen Ereignisse hinzugefügt (siehe [den WebKit-Bug](https://webkit.org/b/28758)).

Standardverhalten für Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Während die Seite geladen wird, werden Inline-Skripte ausgeführt.
3. Sobald die Seite geladen ist, wird der `onload` Handler ausgelöst.

Einige Seiten beinhalten einen vierten Schritt. Wenn eine Seite einen `unload` oder `beforeunload` Handler verwendet, wird dieser ausgelöst, wenn der Benutzer die Seite verlässt. Wenn ein `unload` Handler vorhanden ist, wird die Seite nicht gecached.

Wenn ein Benutzer zu einer gecachten Seite navigiert, werden Inline-Skripte und der `onload` Handler nicht ausgeführt (Schritte 2 und 3), da in den meisten Fällen die Effekte dieser Skripte erhalten geblieben sind.

Wenn die Seite Skripte oder andere Verhaltensweisen enthält, die beim Laden ausgelöst werden und die Sie jedes Mal ausführen möchten, wenn der Benutzer zur Seite navigiert, oder wenn Sie wissen möchten, wann ein Benutzer zu einer gecachten Seite navigiert hat, verwenden Sie das neue `pageshow` Ereignis.

Wenn Sie Verhaltensweisen haben, die ausgelöst werden, wenn ein Benutzer die Seite verlässt, aber diese neue Caching-Funktion nutzen möchten und daher den unload Handler nicht verwenden möchten, verwenden Sie das neue `pagehide` Ereignis.

### pageshow Ereignis

Dieses Ereignis funktioniert wie das `load` Ereignis, mit dem Unterschied, dass es jedes Mal ausgelöst wird, wenn die Seite geladen wird (während das `load` Ereignis in Firefox 1.5 nicht ausgelöst wird, wenn die Seite aus dem Cache geladen wird). Beim ersten Laden der Seite wird das `pageshow` Ereignis direkt nach dem Auslösen des `load` Ereignisses ausgelöst. Das `pageshow` Ereignis verwendet eine boolesche Eigenschaft namens `persisted`, die beim ersten Laden auf `false` gesetzt ist. Es wird auf `true` gesetzt, wenn es sich nicht um das erste Laden handelt (mit anderen Worten, es wird auf `true` gesetzt, wenn die Seite gecached ist).

Stellen Sie ein beliebiges JavaScript, das Sie jedes Mal ausführen möchten, wenn eine Seite geladen wird, so ein, dass es ausgeführt wird, wenn das `pageshow` Ereignis ausgelöst wird.

Wenn Sie JavaScript-Funktionen als Teil des `pageshow` Ereignisses aufrufen, können Sie sicherstellen, dass diese Funktionen aufgerufen werden, wenn die Seite in anderen Browsern als Firefox 1.5 geladen wird, indem Sie das `pageshow` Ereignis als Teil des `load` Ereignisses aufrufen, wie im späteren Beispiel in diesem Artikel gezeigt wird.

### pagehide Ereignis

Wenn Sie ein Verhalten definieren möchten, das auftritt, wenn der Benutzer die Seite verlässt, Sie jedoch nicht das `unload` Ereignis verwenden möchten (was dazu führen würde, dass die Seite nicht gecached wird), können Sie das neue `pagehide` Ereignis verwenden. Wie `pageshow` verwendet das `pagehide` Ereignis eine boolesche Eigenschaft namens `persisted`. Diese Eigenschaft wird auf `false` gesetzt, wenn die Seite nicht vom Browser gecached wird, und auf `true` gesetzt, wenn die Seite vom Browser gecached wird. Wenn diese Eigenschaft auf `false` gesetzt ist, wird der `unload` Handler, falls vorhanden, unmittelbar nach dem `pagehide` Ereignis ausgelöst.

Firefox 1.5 versucht, die Ladeereignisse in derselben Reihenfolge zu simulieren, in der sie beim erstmaligen Laden der Seite auftreten würden. Frames werden genauso behandelt wie das Hauptdokument. Wenn die Seite Frames enthält, dann:

- werden `pageshow` Ereignisse von jedem Frame ausgelöst, bevor das `pageshow` Ereignis im Hauptdokument ausgelöst wird.
- wenn der Benutzer die gecachte Seite verlässt, werden die `pagehide` Ereignisse von jedem Frame ausgelöst, bevor das `pagehide` Ereignis im Hauptdokument ausgelöst wird.
- Für Navigationen, die innerhalb eines einzelnen Frames stattfinden, werden Ereignisse nur in dem betroffenen Frame ausgelöst.

## Beispielcode

Das folgende Beispiel zeigt eine Seite, die sowohl das `load` als auch das `pageshow` Ereignis verwendet. Diese Beispielseite verhält sich wie folgt:

- In anderen Browsern als Firefox 1.5 tritt bei jedem Laden der Seite Folgendes auf: Das `load` Ereignis löst die `onLoad` Funktion aus, die die `onPageShow` Funktion (sowie eine zusätzliche Funktion) aufruft.
- In Firefox 1.5 funktioniert das `load` Ereignis beim ersten Mal genauso wie in anderen Browsern. Zusätzlich wird das `pageshow` Ereignis ausgelöst und da `persisted` auf `false` gesetzt ist, tritt keine zusätzliche Aktion auf.
- In Firefox 1.5, wenn die Seite aus dem Cache geladen wird, wird nur das `pageshow` Ereignis ausgelöst. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen, die in der `onPageShow` Funktion enthalten sind, ausgelöst.

In diesem Beispiel:

- Berechnet und zeigt die Seite das aktuelle Datum und die aktuelle Uhrzeit jedes Mal an, wenn die Seite geladen wird. Diese Berechnung beinhaltet die Sekunden und Millisekunden, damit Sie die Funktionalität leicht testen können.
- Der Cursor wird beim ersten Laden der Seite im Namensfeld des Formulars platziert. In Firefox 1.5 bleibt der Cursor im Feld, in dem er war, als der Benutzer die Seite verlassen hat. In anderen Browsern bewegt sich der Cursor zurück in das Namensfeld.

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

Im Gegensatz dazu, wenn die oben stehende Seite nicht auf das `pageshow` Ereignis hören würde und alle Berechnungen als Teil des `load` Ereignisses behandelt würden (und stattdessen wie im unten stehenden Beispielcodefragment kodiert wäre), würden sowohl die Cursorposition als auch das Datum/Uhrzeit in Firefox 1.5 gecached, wenn der Benutzer die Seite verlassen hat. Wenn der Benutzer zur Seite zurückkehrt, würde das gecachte Datum/Uhrzeit angezeigt.

```html
<head>
  <script>
    function onLoad() {
      loadOnlyFirst();

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

<body onload="onLoad();"></body>
```

## Entwicklung von Firefox-Erweiterungen

Firefox 1.5 [Erweiterungen](/de/docs/Mozilla/Add-ons) müssen diese Caching-Funktionalität unterstützen. Wenn Sie eine Firefox-Erweiterung entwickeln, die sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel sein soll, stellen Sie sicher, dass sie das `load` Ereignis für auslösebare Funktionen, die gecached werden können, überwacht und das `pageshow` Ereignis für auslösebare Funktionen, die nicht gecached werden sollten, überwacht.

Zum Beispiel sollte die Google Toolbar für Firefox auf das `load` Ereignis für die Autolink-Funktion hören und auf das `pageshow` Ereignis für die PageRank-Funktion, um mit beiden, Version 1.5 und früheren Versionen, kompatibel zu sein.
