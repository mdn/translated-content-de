---
title: "WorkerLocation: origin-Eigenschaft"
short-title: origin
slug: Web/API/WorkerLocation/origin
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`origin`**-Eigenschaft eines [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) Objekts gibt den [`origin`](/de/docs/Web/API/URL/origin) des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// On this page, returns the origin
const result = self.location.origin; // Returns:'https://developer.mozilla.org:443'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) Interface, zu dem es gehört.
