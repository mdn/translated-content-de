---
title: "WorkerLocation: host Eigenschaft"
short-title: host
slug: Web/API/WorkerLocation/host
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`host`**-Eigenschaft eines {{domxref("WorkerLocation")}}-Objekts gibt den {{domxref("URL.host", "host")}}-Teil des Standorts des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In einem Web-Worker, auf der Seite http://localhost:8080/
const result = location.host; // Gibt 'localhost:8080' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("WorkerLocation")}}-Schnittstelle, zu der sie gehört.
