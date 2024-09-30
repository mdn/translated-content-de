---
title: "WorkerLocation: host-Eigenschaft"
short-title: host
slug: Web/API/WorkerLocation/host
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`host`**-Eigenschaft eines [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekts gibt den [`host`](/de/docs/Web/API/URL/host)-Teil des Standorts des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In a Web worker, on the page http://localhost:8080/
const result = location.host; // Returns 'localhost:8080'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Schnittstelle, zu der sie gehört.
