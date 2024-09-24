---
title: "ImageDecoder: complete-Eigenschaft"
short-title: complete
slug: Web/API/ImageDecoder/complete
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`complete`** schreibgeschützte Eigenschaft der {{domxref("ImageDecoder")}}-Schnittstelle gibt `true` zurück, wenn das kodierte Datenpuffern abgeschlossen ist.

## Wert

Ein {{jsxref("boolean")}}, `true`, wenn das Puffern abgeschlossen ist.

## Beispiele

Das folgende Beispiel gibt den Wert von `complete` in der Konsole aus.

```js
console.log(imageDecoder.complete);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
