---
title: "Gamepad: Eigenschaft hapticActuators"
short-title: hapticActuators
slug: Web/API/Gamepad/hapticActuators
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`hapticActuators`**-Eigenschaft der {{domxref("Gamepad")}}-Schnittstelle gibt ein Array zurück, das {{domxref("GamepadHapticActuator")}}-Objekte enthält, von denen jedes die auf dem Controller verfügbare haptische Hardware repräsentiert.

## Wert

Ein Array, das {{domxref("GamepadHapticActuator")}}-Objekte enthält.

## Beispiele

```js
const gamepad = navigator.getGamepads()[0];

gamepad.hapticActuators[0].pulse(1.0, 200);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
