---
title: "console: Statische Methode timeStamp()"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: e61741cfd9f4758eb36694246364ad58e1e8dc56
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die statische Methode **`console.timeStamp()`** fügt einer Leistungsaufzeichnung in Entwicklertools, die dies unterstützen, eine Markierung hinzu, beispielsweise im [Chrome-Performance-Panel](https://developer.chrome.com/docs/devtools/performance/reference) und im [Firefox Profiler](https://profiler.firefox.com/). So können Sie eine Stelle in Ihrem Code mit aufgezeichneten Ereignissen wie Layout und Painting in Beziehung setzen.

## Syntax

```js-nolint
console.timeStamp(label)
console.timeStamp(label, start, end, trackName, trackGroup, color, data)
```

### Parameter

- `label` {{Optional_Inline}}
  - : Beschriftung für den Zeitstempel.

- `start` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String, der auf ein zuvor definiertes `timeStamp`-Label verweist, oder ein Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Startzeit verwendet wird.

- `end` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String, der auf ein zuvor definiertes `timeStamp`-Label verweist, oder ein Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Endzeit verwendet wird.

- `trackName` {{Optional_Inline}} {{Experimental_Inline}}
  - : Der Name des benutzerdefinierten Tracks, auf dem die Zeitstempeldaten angezeigt werden.

- `trackGroup` {{Optional_Inline}} {{Experimental_Inline}}
  - : Die Gruppe des benutzerdefinierten Tracks, auf dem die Zeitstempeldaten angezeigt werden.

- `color` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein String für die Anzeigefarbe des Eintrags. Der Wert muss einer der folgenden sein: `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.

- `data` {{Optional_Inline}} {{Experimental_Inline}}
  - : Ein Objekt mit zusätzlichen Daten für die Anzeige. Einige Browser wandeln URLs möglicherweise automatisch in Links um.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Um die Markierung zu sehen, starten Sie eine Leistungsaufzeichnung, bevor der Aufruf erfolgt. Ob die Markierung aufgezeichnet und angezeigt wird, hängt vom Browser und dessen Profiling-Tool ab. Allein die Verwendung von `console.timeStamp()` garantiert keine sichtbare Markierung.

Diese Methode gibt keine verstrichene Zeit in der Konsole aus und erstellt keinen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry). Verwenden Sie [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static) für Konsolen-Timer oder [`performance.mark()`](/de/docs/Web/API/Performance/mark) und [`performance.measure()`](/de/docs/Web/API/Performance/measure) für standardisierte Einträge, die Ihre Anwendung beobachten und auslesen kann.

## Beispiele

### Grundlegende Verwendung

```js
console.timeStamp("marker 1");
```

### Die Extensibility API für ausführlichere Anzeigedetails verwenden

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
- [Chrome DevTools Extensibility API](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp)
