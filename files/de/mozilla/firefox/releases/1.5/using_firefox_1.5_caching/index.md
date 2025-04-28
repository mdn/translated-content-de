---
title: Verwendung des Firefox 1.5-Cachings
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{FirefoxSidebar}}

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) verwendet für eine einzelne Browsersitzung das Caching im Speicher für ganze Webseiten, einschließlich ihrer JavaScript-Zustände. Beim Rückwärts- und Vorwärtsnavigieren zwischen besuchten Seiten ist kein erneutes Laden der Seite erforderlich und die JavaScript-Zustände bleiben erhalten. Diese Funktion, von einigen als **bfcache** (für "Back-Forward Cache") bezeichnet, macht die Seitennavigation sehr schnell. Dieser Cache-Zustand wird beibehalten, bis der Benutzer den Browser schließt.

Es gibt Fälle, in denen Firefox Seiten nicht cached. Nachfolgend sind einige häufige programmatische Gründe aufgeführt, warum eine Seite nicht gecached wird:

- die Seite verwendet einen `unload`- oder `beforeunload`-Handler;
- die Seite setzt "cache-control: no-store".
- die Seite ist HTTPS und setzt mindestens eine der folgenden:

  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - mit "Expires: 0" oder "Expires" mit einem Datum in der Vergangenheit relativ zum Wert des "Date"-Headers (sofern "Cache-Control: max-age=" nicht ebenfalls angegeben ist);

- die Seite ist nicht vollständig geladen, wenn der Benutzer sie verlässt, oder hat aus anderen Gründen ausstehende Netzwerk-Anfragen (z.B. `XMLHttpRequest`);
- die Seite hat laufende IndexedDB-Transaktionen;
- die oberste Seite enthält Frames (z.B. {{HTMLElement("iframe")}}), die aus einem der hier aufgeführten Gründe nicht cachefähig sind;
- die Seite befindet sich in einem Frame und der Benutzer lädt eine neue Seite innerhalb dieses Frames (in diesem Fall wird, wenn der Benutzer die Seite verlässt, der zuletzt in den Frames geladene Inhalt gecached).

Diese neue Caching-Funktion ändert das Ladeverhalten der Seiten, und Webautoren möchten möglicherweise:

- davon wissen, dass eine Seite navigiert wurde (wenn sie aus dem Cache eines Benutzers geladen wird)
- das Verhalten der Seite definieren, wenn ein Benutzer die Seite verlässt (während die Seite weiterhin gecached wird)

Zwei neue Browsereignisse ermöglichen es Webautoren, beides zu tun.

## Neue Browsereignisse

Wenn Sie diese neuen Ereignisse verwenden, werden Ihre Seiten auch in anderen Browsern korrekt angezeigt (wir haben sie mit früheren Versionen von Firefox, Internet Explorer, Opera und Safari getestet) und nutzen diese neue Caching-Funktionalität, wenn sie in Firefox 1.5 geladen werden.

Hinweis: Ab 10-2009 haben Entwicklungsversionen von Safari Unterstützung für diese neuen Ereignisse hinzugefügt (siehe [den WebKit-Bug](https://webkit.org/b/28758)).

Standardverhalten für Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Während die Seite läd, werden Inline-Skripts ausgeführt.
3. Sobald die Seite geladen ist, wird der `onload`-Handler ausgelöst.

Einige Seiten fügen einen vierten Schritt hinzu. Wenn eine Seite einen `unload`- oder `beforeunload`-Handler verwendet, wird dieser ausgelöst, wenn der Benutzer die Seite verlässt. Wenn ein `unload`-Handler vorhanden ist, wird die Seite nicht gecached.

Wenn ein Benutzer zu einer gecachten Seite navigiert, werden Inline-Skripts und der `onload`-Handler nicht ausgeführt (Schritte 2 und 3), da in den meisten Fällen die Auswirkungen dieser Skripte beibehalten wurden.

Wenn die Seite Skripte oder andere Verhaltensweisen enthält, die beim Laden ausgelöst werden und die Sie jedes Mal ausführen möchten, wenn der Benutzer die Seite besucht, oder wenn Sie wissen möchten, dass ein Benutzer zu einer gecachten Seite navigiert hat, verwenden Sie das neue `pageshow`-Ereignis.

Wenn Sie Verhaltensweisen haben, die ausgelöst werden, wenn ein Benutzer die Seite verlässt, aber von dieser neuen Caching-Funktion profitieren möchten und daher den Unload-Handler nicht verwenden möchten, verwenden Sie das neue `pagehide`-Ereignis.

### pageshow Ereignis

Dieses Ereignis funktioniert wie das `load`-Ereignis, mit dem Unterschied, dass es jedes Mal ausgelöst wird, wenn die Seite geladen wird (während das `load`-Ereignis in Firefox 1.5 nicht ausgelöst wird, wenn die Seite aus dem Cache geladen wird). Beim ersten Laden der Seite wird das `pageshow`-Ereignis direkt nach dem `load`-Ereignis ausgelöst. Das `pageshow`-Ereignis verwendet eine boolesche Eigenschaft namens `persisted`, die beim ersten Laden auf `false` gesetzt ist. Sie wird auf `true` gesetzt, wenn es nicht das erste Laden ist (mit anderen Worten, sie wird auf true gesetzt, wenn die Seite gecached ist).

Stellen Sie alle JavaScript-Funktionen, die Sie jedes Mal ausführen möchten, wenn eine Seite geladen wird, so ein, dass sie beim Auslösen des `pageshow`-Ereignisses ausgeführt werden.

Wenn Sie sicherstellen möchten, dass diese JavaScript-Funktionen auch in anderen Browsern als Firefox 1.5 aufgerufen werden, wenn die Seite geladen wird, rufen Sie das `pageshow`-Ereignis als Teil des `load`-Ereignisses auf, wie im späteren Beispiel in diesem Artikel gezeigt.

### pagehide Ereignis

Wenn Sie ein Verhalten festlegen möchten, das auftritt, wenn der Benutzer die Seite verlässt, aber nicht das `unload`-Ereignis verwenden möchten (welches dazu führen würde, dass die Seite nicht gecached wird), können Sie das neue `pagehide`-Ereignis verwenden. Wie `pageshow` verwendet auch das `pagehide`-Ereignis eine boolesche Eigenschaft namens `persisted`. Diese Eigenschaft wird auf `false` gesetzt, wenn die Seite vom Browser nicht gecached wird, und auf `true`, wenn die Seite vom Browser gecached wird. Wenn diese Eigenschaft auf `false` gesetzt ist, wird der `unload`-Handler, falls vorhanden, sofort nach dem `pagehide`-Ereignis ausgelöst.

Firefox 1.5 versucht, Ladevorgänge in derselben Reihenfolge zu simulieren, in der sie auftreten würden, wenn die Seite erstmals geladen wird. Frames werden genauso behandelt wie das oberste Dokument. Wenn die Seite Frames enthält, dann:

- Feuern die `pageshow`-Ereignisse von jedem Frame, bevor das `pageshow`-Ereignis im Hauptdokument feuert.
- Wenn der Benutzer die gecachte Seite verlässt, feuert das `pagehide`-Ereignis von jedem Frame, bevor das `pagehide`-Ereignis im Hauptdokument feuert.
- Für die Navigation, die innerhalb eines einzelnen Frames erfolgt, feuern Ereignisse nur im betroffenen Frame.

## Beispielcode

Das folgende Beispiel zeigt eine Seite, die sowohl das `load`- als auch das `pageshow`-Ereignis verwendet. Diese Beispielseite verhält sich wie folgt:

- In anderen Browsern als Firefox 1.5 tritt bei jedem Laden der Seite Folgendes ein: Das `load`-Ereignis löst die `onLoad`-Funktion aus, die die `onPageShow`-Funktion (sowie eine zusätzliche Funktion) aufruft.
- In Firefox 1.5 verhält sich das `load`-Ereignis beim ersten Laden der Seite genauso wie in anderen Browsern. Zusätzlich wird das `pageshow`-Ereignis ausgelöst, und da `persisted` auf `false` gesetzt ist, tritt keine zusätzliche Aktion auf.
- In Firefox 1.5, wenn die Seite aus dem Cache geladen wird, wird nur das `pageshow`-Ereignis ausgelöst. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen in der `onPageShow`-Funktion ausgelöst.

In diesem Beispiel:

- Die Seite berechnet und zeigt das aktuelle Datum und die Uhrzeit jedes Mal an, wenn die Seite geladen wird. Diese Berechnung umfasst Sekunden und Millisekunden, sodass Sie die Funktionalität leicht testen können.
- Der Cursor wird beim ersten Laden der Seite in das Namensfeld des Formulars gesetzt. In Firefox 1.5 bleibt der Cursor im Feld, in dem er war, als der Benutzer die Seite verließ. In anderen Browsern bewegt sich der Cursor zurück in das Namensfeld.

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

Im Gegensatz dazu, wenn die obige Seite nicht auf das `pageshow`-Ereignis hören würde und alle Berechnungen als Teil des `load`-Ereignisses behandelt würden (und stattdessen wie im untenstehenden Beispielcodefragmentcodiert wäre), würden sowohl die Cursorposition als auch das Datum/die Uhrzeit in Firefox 1.5 gecached, wenn der Benutzer die Seite verlässt. Wenn der Benutzer zur Seite zurückkehrte, würde das gecachte Datum/die Uhrzeit angezeigt.

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

Firefox 1.5 [Erweiterungen](/de/docs/Mozilla/Add-ons) müssen diese Caching-Funktionalität berücksichtigen. Wenn Sie eine Firefox-Erweiterung entwickeln, die sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel sein soll, stellen Sie sicher, dass sie auf das `load`-Ereignis für triggerbare Ereignisse hört, die gecached werden können, und auf das `pageshow`-Ereignis für Ereignisse, die nicht gecached werden sollten.

Beispielsweise sollte die Google Toolbar für Firefox auf das `load`-Ereignis für die Autolink-Funktion hören und auf das `pageshow`-Ereignis für die PageRank-Funktion, um sowohl mit Version 1.5 als auch mit früheren Versionen kompatibel zu sein.
