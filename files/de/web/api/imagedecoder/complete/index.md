---
title: "ImageDecoder: vollständige Eigenschaft"
short-title: complete
slug: Web/API/ImageDecoder/complete
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`complete`** des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces gibt `true` zurück, wenn die Pufferung der codierten Daten abgeschlossen ist.

## Wert

Ein {{jsxref("Boolean")}}, `true`, wenn die Pufferung abgeschlossen ist.

## Beispiele

Das folgende Beispiel gibt den Wert von `complete` in der Konsole aus.

```js
console.log(imageDecoder.complete);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
