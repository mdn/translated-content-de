---
title: "Gamepad: id-Eigenschaft"
short-title: id
slug: Web/API/Gamepad/id
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.id`**-Eigenschaft der {{domxref("Gamepad")}}-Schnittstelle gibt einen String zurück, der einige Informationen über den Controller enthält.

Die genaue Syntax ist nicht streng festgelegt, aber in Firefox enthält sie drei Informationsstücke, die durch Bindestriche (`-`) getrennt sind:

- Zwei 4-stellige hexadezimale Zeichenfolgen, die die USB-Hersteller- und Produkt-ID des Controllers enthalten
- Den Namen des Controllers, wie er vom Treiber bereitgestellt wird.

Zum Beispiel gibt ein PS2-Controller **810-3-USB Gamepad** zurück.

Diese Informationen sollen Ihnen ermöglichen, eine Zuordnung der Steuerungen auf dem Gerät zu finden und dem Benutzer nützliche Rückmeldungen anzuzeigen.

## Wert

Ein primitiver String.

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