---
title: "WorkerLocation: hash-Eigenschaft"
short-title: hash
slug: Web/API/WorkerLocation/hash
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`hash`**-Eigenschaft eines [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekts gibt den [`hash`](/de/docs/Web/API/URL/hash)-Teil des Standorts des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web/API/WorkerLocation/hash#examples
const result = location.hash; // Returns '#examples'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Interface, zu dem es gehört.
