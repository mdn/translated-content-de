---
title: "WorkerLocation: port-Eigenschaft"
short-title: port
slug: Web/API/WorkerLocation/port
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`port`**-Eigenschaft eines {{domxref("WorkerLocation")}}-Objekts gibt den {{domxref("URL.port", "Port")}}-Teil des Ortes des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In einem Web-Worker, auf der Seite http://localhost:8080/
const result = location.port; // Gibt '8080' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige {{domxref("WorkerLocation")}}-Interface.
