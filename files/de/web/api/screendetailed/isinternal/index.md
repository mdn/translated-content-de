---
title: "ScreenDetailed: isInternal-Eigenschaft"
short-title: isInternal
slug: Web/API/ScreenDetailed/isInternal
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`isInternal`** des [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interfaces ist ein boolescher Wert, der anzeigt, ob der Bildschirm intern zum Gerät oder extern ist. Externe Geräte werden in der Regel separat vom Gerät hergestellt, an das sie angeschlossen werden, und können nach Bedarf angeschlossen und getrennt werden, während interne Bildschirme Teil des Geräts sind und nicht zum Trennen vorgesehen sind.

## Wert

Ein boolescher Wert — `true`, wenn der Bildschirm intern ist, und `false`, wenn er extern ist.

## Beispiele

```js
const screenDetails = await window.getScreenDetails();

// Is the first screen internal?
const screen1Internal = screenDetails.screens[0].isInternal;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
