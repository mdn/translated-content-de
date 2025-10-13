---
title: Verwenden des Firefox 1.5 Caching
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

[Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5) verwendet ein In-Memory-Caching für komplette Webseiten, einschließlich ihrer JavaScript-Zustände, für eine einzelne Browsersitzung. Beim Vor- und Zurücknavigieren zwischen besuchten Seiten ist kein erneutes Laden der Seite erforderlich und die JavaScript-Zustände bleiben erhalten. Diese Funktion, die von einigen als **bfcache** (für "Back-Forward Cache") bezeichnet wird, macht die Seitennavigation sehr schnell. Dieser Caching-Zustand wird beibehalten, bis der Benutzer den Browser schließt.

Es gibt Fälle, in denen Firefox Seiten nicht cached. Im Folgenden sind einige häufige programmatische Gründe aufgeführt, warum eine Seite nicht gecached wird:

- Die Seite verwendet einen `unload` oder `beforeunload` Handler;
- Die Seite setzt "cache-control: no-store".
- Die Seite ist HTTPS und setzt mindestens eines der folgenden:
  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - mit "Expires: 0" oder "Expires" mit einem Datum in der Vergangenheit relativ zum Wert des "Date"-Headers (es sei denn, "Cache-Control: max-age=" ist ebenfalls spezifiziert);

- Die Seite ist nicht vollständig geladen, wenn der Benutzer sie verlässt, oder hat aus anderen Gründen noch ausstehende Netzwerkanfragen (z.B. `XMLHttpRequest`));
- Die Seite hat laufende IndexedDB-Transaktionen;
- Die oberste Seite enthält Frames (z.B. {{HTMLElement("iframe")}}), die aus einem der hier aufgeführten Gründe nicht cachefähig sind;
- Die Seite befindet sich in einem Frame und der Benutzer lädt eine neue Seite innerhalb dieses Frames (in diesem Fall, wenn der Benutzer die Seite verlässt, wird der Inhalt, der zuletzt in die Frames geladen wurde, gecached).

Diese neue Caching-Funktion ändert das Ladeverhalten von Seiten und Webautoren möchten möglicherweise:

- wissen, dass eine Seite aufgerufen wurde (wenn sie aus dem Cache eines Benutzers geladen wird)
- das Verhalten einer Seite definieren, wenn ein Benutzer die Seite verlässt (während sie dennoch gecached werden kann)

Zwei neue Browserevents ermöglichen es Webautoren, beides zu tun.

## Neue Browserevents

Wenn Sie diese neuen Events verwenden, werden Ihre Seiten in anderen Browsern weiterhin ordnungsgemäß angezeigt (wir haben frühere Versionen von Firefox, Internet Explorer, Opera und Safari getestet) und nutzen diese neue Caching-Funktionalität, wenn sie in Firefox 1.5 geladen werden.

Hinweis: Seit 10-2009 haben Entwicklungsversionen von Safari Unterstützung für diese neuen Events hinzugefügt (siehe [den WebKit Bug](https://webkit.org/b/28758)).

Das Standardverhalten für Webseiten ist:

1. Der Benutzer navigiert zu einer Seite.
2. Beim Laden der Seite werden Inline-Skripte ausgeführt.
3. Sobald die Seite geladen ist, wird der `onload` Handler ausgelöst.

Einige Seiten umfassen einen vierten Schritt. Wenn eine Seite einen `unload` oder `beforeunload` Handler verwendet, wird dieser ausgelöst, wenn der Benutzer die Seite verlässt. Wenn ein `unload` Handler vorhanden ist, wird die Seite nicht gecached.

Wenn ein Benutzer zu einer gecachten Seite navigiert, werden Inline-Skripte und der `onload` Handler nicht ausgeführt (Schritte 2 und 3), da in den meisten Fällen die Effekte dieser Skripte erhalten geblieben sind.

Wenn die Seite Skripte oder andere Verhaltensweisen enthält, die während des Ladevorgangs ausgelöst werden, die Sie jedes Mal ausführen möchten, wenn der Benutzer zur Seite navigiert, oder wenn Sie wissen möchten, wann ein Benutzer zu einer gecachten Seite navigiert hat, verwenden Sie das neue `pageshow` Event.

Wenn Sie Verhaltensweisen haben, die ausgeführt werden, wenn ein Benutzer die Seite verlässt, aber Sie von dieser neuen Caching-Funktion profitieren möchten und daher den `unload` Handler nicht verwenden möchten, verwenden Sie das neue `pagehide` Event.

### `pageshow` Event

Dieses Event funktioniert wie das `load` Event, außer dass es jedes Mal auslöst, wenn die Seite geladen wird (während in Firefox 1.5 das `load` Event nicht auslöst, wenn die Seite aus dem Cache geladen wird). Beim ersten Laden der Seite löst das `pageshow` Event direkt nach dem `load` Event aus. Das `pageshow` Event verwendet eine Boolean-Eigenschaft namens `persisted`, die beim initialen Laden auf `false` gesetzt ist. Wenn es nicht das erste Laden ist (mit anderen Worten, wenn die Seite gecached ist), wird es auf `true` gesetzt.

Legen Sie alle JavaScript-Funktionen, die Sie jedes Mal ausführen möchten, wenn eine Seite geladen wird, so fest, dass sie beim `pageshow` Event ausgeführt werden.

Wenn Sie JavaScript-Funktionen im Rahmen des `pageshow` Events aufrufen, können Sie sicherstellen, dass diese Funktionen auch in anderen Browsern als Firefox 1.5 aufgerufen werden, indem Sie das `pageshow` Event als Teil des `load` Events aufrufen, wie im späteren Beispiel in diesem Artikel gezeigt wird.

### `pagehide` Event

Wenn Sie ein Verhalten definieren möchten, das auftritt, wenn der Benutzer die Seite verlässt, aber Sie nicht das `unload` Event verwenden möchten (was dazu führen würde, dass die Seite nicht gecached wird), können Sie das neue `pagehide` Event verwenden. Wie `pageshow` verwendet das `pagehide` Event eine Boolean-Eigenschaft namens `persisted`. Diese Eigenschaft wird auf `false` gesetzt, wenn die Seite nicht vom Browser gecached wird, und auf `true`, wenn die Seite vom Browser gecached wird. Wenn diese Eigenschaft auf `false` gesetzt ist, wird der `unload` Handler, falls vorhanden, sofort nach dem `pagehide` Event ausgelöst.

Firefox 1.5 versucht, Ladevorgänge in derselben Reihenfolge zu simulieren, in der sie beim erstmaligen Laden der Seite auftreten würden. Frames werden genauso behandelt wie das oberste Dokument. Wenn die Seite Frames enthält, dann beim Laden der gecachten Seite:

- `pageshow` Events von jedem Frame werden ausgelöst, bevor das `pageshow` Event im Hauptdokument ausgelöst wird.
- Wenn der Benutzer die gecachte Seite verlässt, wird das `pagehide` Event von jedem Frame ausgelöst, bevor das `pagehide` Event im Hauptdokument ausgelöst wird.
- Für Navigationen, die innerhalb eines einzelnen Frames stattfinden, werden die Events nur im betroffenen Frame ausgelöst.

## Beispielcode

Das folgende Beispiel zeigt eine Seite, die sowohl das `load` als auch das `pageshow` Event verwendet. Diese Beispielseite verhält sich wie folgt:

- In anderen Browsern als Firefox 1.5: Jedes Mal, wenn die Seite geladen wird, löst das `load` Event die `onLoad` Funktion aus, die die `onPageShow` Funktion (sowie eine zusätzliche Funktion) aufruft.
- In Firefox 1.5: Beim ersten Laden der Seite verhält sich das `load` Event wie in anderen Browsern. Zusätzlich löst das `pageshow` Event aus, und da `persisted` auf `false` gesetzt ist, erfolgt keine zusätzliche Aktion.
- In Firefox 1.5: Wenn die Seite aus dem Cache geladen wird, löst nur das `pageshow` Event aus. Da `persisted` auf `true` gesetzt ist, werden nur die JavaScript-Aktionen in der `onPageShow` Funktion ausgelöst.

In diesem Beispiel:

- Die Seite berechnet und zeigt das aktuelle Datum und die Uhrzeit jedes Mal an, wenn die Seite geladen wird. Diese Berechnung umfasst die Sekunden und Millisekunden, sodass Sie die Funktionalität leicht testen können.
- Der Cursor wird beim ersten Laden der Seite in das Namensfeld des Formulars gesetzt. In Firefox 1.5 bleibt der Cursor beim Zurücknavigieren zur Seite im zuletzt verlassenen Feld. In anderen Browsern bewegt sich der Cursor zurück in das Namensfeld.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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

Im Gegensatz dazu, wenn die obige Seite nicht auf das `pageshow` Event reagieren würde und alle Berechnungen als Teil des `load` Events behandelt würden (und stattdessen wie im unten gezeigten Beispielcodefragment kodiert wäre), würden sowohl die Cursorposition als auch das Datum/die Uhrzeit in Firefox 1.5 gecached, wenn der Benutzer die Seite verlässt. Beim Zurücknavigieren zur Seite würde das gecachte Datum/die Zeit angezeigt.

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

Firefox 1.5 [Erweiterungen](/de/docs/Mozilla/Add-ons) müssen diese Caching-Funktionalität berücksichtigen. Wenn Sie eine Firefox-Erweiterung entwickeln, die mit sowohl 1.5 als auch früheren Versionen kompatibel sein soll, stellen Sie sicher, dass sie auf das `load` Event für auslösbare Aktionen, die gecached werden können, hört und auf das `pageshow` Event für auslösbare Aktionen, die nicht gecached werden sollten.

Zum Beispiel sollte die Google Toolbar für Firefox auf das `load` Event für die Autolink-Funktion und auf das `pageshow` Event für die PageRank-Funktion hören, um mit sowohl 1.5 als auch früheren Versionen kompatibel zu sein.
