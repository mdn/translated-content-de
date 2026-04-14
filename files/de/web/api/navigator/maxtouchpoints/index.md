---
title: "Navigator: maxTouchPoints-Eigenschaft"
short-title: maxTouchPoints
slug: Web/API/Navigator/maxTouchPoints
l10n:
  sourceCommit: f47eea7f1ea9a18a93ecca03b0d4bbe2e9711316
---

{{APIRef("HTML DOM")}}

Die **`maxTouchPoints`**-Eigenschaft, eine schreibgeschützte Eigenschaft der
[`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle, gibt die maximale Anzahl gleichzeitiger Berührungskontaktpunkte zurück, die das aktuelle Gerät unterstützt.

## Wert

Eine Zahl.

Dieser Wert ist hardwareabhängig. Desktop-Computer ohne Touchscreen (Mac, Windows und Linux) geben 0 zurück, während Smartphones (Android und iOS) typischerweise 5 zurückgeben.

## Beispiel

```js
if (navigator.maxTouchPoints > 1) {
  // Device supports tracking at least 2 touch points; offer complex
  // interaction gestures such as swiping with two/three fingers
} else {
  // Device only has 1 touch point or is not a touch screen.
  // Offer basic gestures such as dragging and clicking
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
