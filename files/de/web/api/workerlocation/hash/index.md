---
title: "WorkerLocation: hash-Eigenschaft"
short-title: hash
slug: Web/API/WorkerLocation/hash
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`hash`**-Eigenschaft eines {{domxref("WorkerLocation")}}-Objekts gibt den {{domxref("URL.hash", "Hash")}}-Teil des Worker-Standorts zurück.

## Wert

Ein String.

## Beispiele

```js
// In einem Webworker, auf der Seite https://developer.mozilla.org/de/docs/Web/API/WorkerLocation/hash#examples
const result = location.hash; // Gibt '#examples' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("WorkerLocation")}}-Interface, zu dem es gehört.
