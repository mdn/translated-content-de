---
title: "WorkerLocation: search-Eigenschaft"
short-title: search
slug: Web/API/WorkerLocation/search
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`search`**-Eigenschaft eines [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekts gibt den [`search`](/de/docs/Web/API/URL/search)-Teil der Position des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web?t=67
const result = location.search; // Returns:'?t=67'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) Schnittstelle, zu der es gehört.
