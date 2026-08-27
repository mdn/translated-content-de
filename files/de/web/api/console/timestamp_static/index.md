---
title: "console: timeStamp() statische Methode"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die statische Methode **`console.timeStamp()`** fügt ein einzelnes Markierungszeichen zu dem Leistungswerkzeug des Browsers hinzu ([Firefox Bug 1387528](https://bugzil.la/1387528), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)). Dies ermöglicht es Ihnen, einen Punkt in Ihrem Code mit den anderen im Zeitstrahl aufgezeichneten Ereignissen wie Layout- und Paint-Ereignissen zu korrelieren.

Sie können optional ein Argument angeben, um den Zeitstempel zu beschriften, und diese Beschriftung wird dann neben der Markierung angezeigt.

Einige Browser haben diese `console.timeStamp()`-Methode weiterentwickelt, um zusätzliche, optionale Parameter bereitzustellen, die als Teil ihrer Erweiterungs-API in Leistungsdiagrammen sichtbar werden. Siehe die [Dokumentation zur Chrome-Erweiterungs-API](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp) für weitere Informationen.

## Syntax

```js-nolint
console.timeStamp(label);
console.timeStamp(label, start, end, trackName, trackGroup, color, data);
```

### Parameter

- `color` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String für die Anzeigefarbe des Eintrags. Muss einer der folgenden Werte sein: `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.

- `data` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein Objekt mit zusätzlichen anzuzeigenden Daten. URLs können von einigen Browsern automatisch in Links umgewandelt werden.

> [!NOTE]
> Die Unterstützung für den `data`-Parameter variiert zwischen den verschiedenen Browsern und ihren DevTools-Implementierungen. Beispielsweise kann in einigen Versionen von Chrome diese Daten im Leistungspanel nicht angezeigt werden.

- `end` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String oder ein Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der auf ein zuvor definiertes `timeStamp`-Label verweist und als Endzeit verwendet wird.

- `label` {{Optional_Inline}}
  - : Beschriftung für den Zeitstempel.

- `start` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String oder ein Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der auf ein zuvor definiertes `timeStamp`-Label verweist und als Startzeit verwendet wird.

- `trackName` {{Optional_Inline}} {{Experimental_Inline}}
  - : Der Name der benutzerdefinierten Spur, die verwendet wird, um die Zeitstempeldaten anzuzeigen.

- `trackGroup` {{Optional_Inline}} {{Experimental_Inline}}
  - : Die Gruppe der benutzerdefinierten Spur, die verwendet wird, um die Zeitstempeldaten anzuzeigen.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

```js
console.timeStamp("marker 1");
```

### Verwendung der Erweiterungs-API, um reichere Details für die Anzeige bereitzustellen

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
- [Chrome DevTools-Erweiterungs-API](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp)
