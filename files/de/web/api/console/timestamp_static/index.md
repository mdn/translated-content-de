---
title: "console: Methode timeStamp() (statisch)"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: dda375cf06a989f7bd496ef9728fcd20e19f7fcb
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die **`console.timeStamp()`**-Methode fügt ein einzelnes Markierungselement im Performance-Werkzeug des Browsers hinzu ([Firefox-Bug 1387528](https://bugzil.la/1387528), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)). Dies ermöglicht es Ihnen, einen Punkt in Ihrem Code mit anderen Ereignissen, die in der Zeitleiste aufgezeichnet wurden, wie Layout- und Paint-Ereignisse, zu korrelieren.

Sie können optional ein Argument übergeben, um den Zeitstempel zu beschriften; diese Beschriftung wird dann neben der Markierung angezeigt.

Einige Browser haben diese `console.timeStamp()`-Methode weiterentwickelt, um zusätzliche optionale Parameter zuzulassen, die als Teil ihrer Extensibility-API in Leistungsabläufen angezeigt werden. Weitere Informationen finden Sie in der [Dokumentation zur Extensibility-API von Chrome](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp).

## Syntax

```js-nolint
console.timeStamp(label);
console.timeStamp(label, start, end, trackName, trackGroup, color, data);
```

### Parameter

- `color` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String für die Anzeigefarbe des Eintrags. Muss einer der folgenden Werte sein: `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.

- `data` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein Objekt mit zusätzlichen Daten zur Anzeige. URLs können von einigen Browsern automatisch in Links umgewandelt werden.

> [!NOTE]
> Die Unterstützung des `data`-Parameters variiert je nach Browser und deren DevTools-Implementierungen. Beispielsweise können in einigen Versionen von Chrome diese Daten im Performance-Panel nicht erscheinen.

- `end` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String, der auf ein zuvor definiertes `timeStamp`-Label oder einen Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) verweist, der als Endzeit verwendet wird.

- `label` {{Optional_Inline}}
  - : Beschriftung für den Zeitstempel.

- `start` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String, der auf ein zuvor definiertes `timeStamp`-Label oder einen Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) verweist, der als Startzeit verwendet wird.

- `trackName` {{Optional_Inline}} {{Experimental_Inline}}
  - : Der Name der benutzerdefinierten Spur, die zur Anzeige der Zeitstempeldaten verwendet wird.

- `trackGroup` {{Optional_Inline}} {{Experimental_Inline}}
  - : Die Gruppe der benutzerdefinierten Spur, die zur Anzeige der Zeitstempeldaten verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

```js
console.timeStamp("marker 1");
```

### Verwendung der Extensibility-API zur Bereitstellung detaillierterer Anzeigeinformationen

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
- [Hinzufügen von Markierungen mit der Console-API](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
- [Chrome DevTools Extensibility API](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp)
