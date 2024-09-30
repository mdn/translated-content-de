---
title: "WorkerLocation: href-Eigenschaft"
short-title: href
slug: Web/API/WorkerLocation/href
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`href`**-Eigenschaft eines [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekts gibt einen String zurück, der die serialisierte [`URL`](/de/docs/Web/API/URL) für den Standort des Workers enthält.

## Wert

Ein String.

## Beispiele

```js
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web
const result = location.href; // Returns 'https://developer.mozilla.org/en-US/docs/Web'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Interface, zu dem es gehört.
