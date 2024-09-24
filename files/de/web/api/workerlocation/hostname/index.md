---
title: "WorkerLocation: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/WorkerLocation/hostname
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`hostname`**-Eigenschaft eines {{domxref("WorkerLocation")}}-Objekts gibt den {{domxref("URL.hostname", "hostname")}}-Teil des Speicherorts des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In einem Web Worker, auf der Seite http://localhost:8080/
const result = location.hostname; // Gibt 'localhost' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("WorkerLocation")}}-Interface, zu dem es gehört.
