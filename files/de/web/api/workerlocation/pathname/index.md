---
title: "WorkerLocation: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/WorkerLocation/pathname
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`pathname`**-Eigenschaft eines [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekts gibt den [`pathname`](/de/docs/Web/API/URL/pathname)-Teil des Speicherorts des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web
const result = location.pathname; // Returns '/en-US/docs/Web'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Interface, zu dem es gehört.
