---
title: "WorkerLocation: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/WorkerLocation/protocol
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`protocol`**-Eigenschaft eines [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekts gibt den [`protocol`](/de/docs/Web/API/URL/protocol)-Teil des Standorts des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web
const result = location.protocol; // Returns 'https:'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Interface, zu dem es gehört.
