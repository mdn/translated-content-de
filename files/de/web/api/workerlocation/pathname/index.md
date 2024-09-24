---
title: "WorkerLocation: Eigenschaft pathname"
short-title: pathname
slug: Web/API/WorkerLocation/pathname
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`pathname`**-Eigenschaft eines {{domxref("WorkerLocation")}}-Objekts gibt den {{domxref("URL.pathname", "pathname")}}-Teil des Standorts des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In einem Web-Worker, auf der Seite https://developer.mozilla.org/de/docs/Web
const result = location.pathname; // Gibt '/de/docs/Web' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("WorkerLocation")}}-Interface, zu dem es gehört.
