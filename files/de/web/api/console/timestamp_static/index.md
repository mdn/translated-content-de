---
title: "console: timeStamp() statische Methode"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: 5143045a1106f2e415985dec50f11d3cf5d1d4f9
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die **`console.timeStamp()`** statische Methode fügt dem Performance-Tool des Browsers ([Firefox Bug 1387528](https://bugzil.la/1387528), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)) einen einzelnen Marker hinzu. Dies ermöglicht es Ihnen, einen Punkt in Ihrem Code mit den anderen im Zeitstrahl aufgezeichneten Ereignissen, wie Layout- und Paint-Ereignissen, abzugleichen.

Sie können optional ein Argument angeben, um den Zeitstempel zu kennzeichnen, und dieses Label wird dann neben dem Marker angezeigt.

Einige Browser haben diese `console.timeStamp()`-Methode weiter ausgebaut, um zusätzliche, optionale Parameter im Rahmen ihrer Erweiterungs-API bereitzustellen, die diese in Performance-Traces anzeigen. Weitere Informationen finden Sie in der [Chrome-Erweiterungs-API-Dokumentation](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp).

## Syntax

```js-nolint
console.timeStamp(label);
console.timeStamp(label, start, end, trackName, trackGroup, color, data);
```

### Parameter

- `color` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String für die Anzeigefarbe des Eintrags. Muss einer der folgenden sein: `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.

- `data` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein Objekt mit zusätzlichen anzuzeigenden Daten. URLs können von einigen Browsern automatisch in Links umgewandelt werden.

- `end` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String, der auf ein zuvor definiertes `timeStamp`-Label oder einen Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) verweist, das als Endzeit verwendet werden soll.

- `label` {{Optional_Inline}}
  - : Bezeichnung für den Zeitstempel.

- `start` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String, der auf ein zuvor definiertes `timeStamp`-Label oder einen Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) verweist, das als Startzeit verwendet werden soll.

- `trackName` {{Optional_Inline}} {{Experimental_Inline}}
  - : Der Name des benutzerdefinierten Tracks, der zur Anzeige der Zeitstempeldaten verwendet wird.

- `trackGroup` {{Optional_Inline}} {{Experimental_Inline}}
  - : Die Gruppe des benutzerdefinierten Tracks, die zur Anzeige der Zeitstempeldaten verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

```js
console.timeStamp("marker 1");
```

### Verwendung der Erweiterungs-API, um detailliertere Informationen für die Anzeige bereitzustellen

```js
// 1. Create a duration event with rich data
const start = performance.now() - 150;
const end = performance.now() - 20;

const durationData = {
  processingTime: `${end - start}ms`,
  info: "Check this URL: https://example.com for more.",
  metrics: {
    items: 5,
    isCached: true,
  },
};

console.timeStamp(
  "My Timed Task", // label
  start, // startTime
  end, // endTime
  "Tasks", // trackName
  "My Extension", // trackGroup
  "tertiary", // color
  durationData, // data (object)
);

// 2. Create an instant event with a deep link for a DevTools extension
const linkData = {
  url: "ext://resource/123",
  description: "View Resource 123",
  otherDetail: "This data also appears in the JSON viewer",
};

console.timeStamp(
  "Event with Link", // label
  performance.now(), // startTime (instant)
  undefined, // endTime (instant)
  "Tasks", // trackName
  "My Extension", // trackGroup
  "primary-light", // color
  linkData, // data (object)
);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.time()`](/de/docs/Web/API/console/time_static)
- [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static)
- [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
- [`performance.mark()`](/de/docs/Web/API/Performance/mark)
- [`performance.measure()`](/de/docs/Web/API/Performance/measure)
- [Hinzufügen von Markern mit der Console-API](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
- [Chrome DevTools Erweiterungs-API](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp)
