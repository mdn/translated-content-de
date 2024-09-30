---
title: "WorkerLocation: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/WorkerLocation/hostname
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`hostname`**-Eigenschaft eines [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekts gibt den [`hostname`](/de/docs/Web/API/URL/hostname)-Teil des Standorts des Workers zurück.

## Wert

Ein Zeichenfolge.

## Beispiele

```js
// In a Web worker, on the page http://localhost:8080/
const result = location.hostname; // Returns 'localhost'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Interface, zu dem es gehört.
