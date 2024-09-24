---
title: "WorkerLocation: Eigenschaft protocol"
short-title: protocol
slug: Web/API/WorkerLocation/protocol
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`protocol`**-Eigenschaft eines {{domxref("WorkerLocation")}}-Objekts gibt den {{domxref("URL.protocol", "Protokoll")}}-Teil des Standorts des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// In einem Web Worker, auf der Seite https://developer.mozilla.org/de/docs/Web
const result = location.protocol; // Gibt 'https:' zurück
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das {{domxref("WorkerLocation")}}-Interface, zu dem es gehört.
