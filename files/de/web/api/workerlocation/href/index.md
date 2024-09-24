---
title: "WorkerLocation: href-Eigenschaft"
short-title: href
slug: Web/API/WorkerLocation/href
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`href`**-Eigenschaft eines {{domxref("WorkerLocation")}}-Objekts gibt eine Zeichenfolge zurück, die die serialisierte {{domxref("URL")}} für den Standort des Workers enthält.

## Wert

Eine Zeichenfolge.

## Beispiele

```js
// In einem Webworker, auf der Seite https://developer.mozilla.org/de/docs/Web
const result = location.href; // Gibt 'https://developer.mozilla.org/de/docs/Web' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("WorkerLocation")}}-Interface, zu dem es gehört.
