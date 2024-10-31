---
title: "ImageDecoder: complete-Eigenschaft"
short-title: complete
slug: Web/API/ImageDecoder/complete
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`complete`**-Eigenschaft des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces gibt `true` zurück, wenn die kodierten Daten das Buffering abgeschlossen haben.

## Wert

Ein {{jsxref("boolean")}}, `true`, wenn das Buffering abgeschlossen ist.

## Beispiele

Das folgende Beispiel gibt den Wert von `complete` in der Konsole aus.

```js
console.log(imageDecoder.complete);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
