---
title: "WorkerLocation: search-Eigenschaft"
short-title: search
slug: Web/API/WorkerLocation/search
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`search`**-Eigenschaft eines {{domxref("WorkerLocation")}}-Objekts gibt den {{domxref("URL.search", "search")}}-Teil des Standorts des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In einem Web Worker, auf der Seite https://developer.mozilla.org/de/docs/Web?t=67
const result = location.search; // Gibt zurück: '?t=67'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("WorkerLocation")}}-Interface, zu dem es gehört.
