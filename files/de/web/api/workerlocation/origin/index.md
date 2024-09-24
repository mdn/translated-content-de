---
title: "WorkerLocation: origin-Eigenschaft"
short-title: origin
slug: Web/API/WorkerLocation/origin
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`origin`**-Eigenschaft eines {{domxref("WorkerLocation")}}-Objekts gibt den {{domxref("URL.origin", "Origin")}} des Workers zurück.

## Wert

Ein String.

## Beispiele

```js
// Auf dieser Seite wird der Ursprungsort zurückgegeben
const result = self.location.origin; // Gibt zurück: 'https://developer.mozilla.org:443'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("WorkerLocation")}}-Interface, zu dem es gehört.
