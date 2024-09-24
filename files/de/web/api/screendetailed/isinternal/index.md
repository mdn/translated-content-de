---
title: "ScreenDetailed: isInternal-Eigenschaft"
short-title: isInternal
slug: Web/API/ScreenDetailed/isInternal
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`isInternal`**-Eigenschaft des schreibgeschützten {{domxref("ScreenDetailed")}}-Interfaces ist ein boolescher Wert, der anzeigt, ob der Bildschirm intern oder extern für das Gerät ist. Externe Geräte werden in der Regel getrennt vom Gerät hergestellt, an das sie angeschlossen sind, und können nach Bedarf angeschlossen und getrennt werden, während interne Bildschirme Teil des Geräts sind und nicht zum Trennen vorgesehen sind.

## Wert

Ein boolescher Wert — `true`, wenn der Bildschirm intern ist, und `false`, wenn er extern ist.

## Beispiele

```js
const screenDetails = await window.getScreenDetails();

// Ist der erste Bildschirm intern?
const screen1Internal = screenDetails.screens[0].isInternal;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
