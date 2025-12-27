---
title: "Gamepad: id-Eigenschaft"
short-title: id
slug: Web/API/Gamepad/id
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad API")}}

Die **`Gamepad.id`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt einen String zurück, der einige Informationen über den Controller enthält.

Die genaue Syntax ist nicht streng festgelegt, aber in Firefox wird sie drei Informationen enthalten, die durch Bindestriche (`-`) getrennt sind:

- Zwei 4-stellige hexadezimale Zeichenfolgen, die die USB-Hersteller- und Produkt-ID des Controllers enthalten
- Der vom Treiber angegebene Name des Controllers.

Zum Beispiel gab ein PS2-Controller **810-3-USB Gamepad** zurück.

Diese Informationen sollen Ihnen ermöglichen, eine Zuordnung für die Bedienelemente auf dem Gerät zu finden sowie nützliches Feedback für den Benutzer anzuzeigen.

## Wert

Ein Zeichenfolgen-Primitive.

## Beispiele

```js
window.addEventListener("gamepadconnected", () => {
  const gp = navigator.getGamepads()[0];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}.`;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
