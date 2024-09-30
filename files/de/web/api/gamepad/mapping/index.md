---
title: "Gamepad: mapping-Eigenschaft"
short-title: mapping
slug: Web/API/Gamepad/mapping
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.mapping`**-Eigenschaft des
[`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt einen String zurück, der angibt, ob der Browser die Steuerung des Geräts auf ein bekanntes Layout umgemappt hat.

Die derzeit unterstützten bekannten Layouts sind:

- "standard" für das [standard gamepad](https://w3c.github.io/gamepad/#remapping).
- "xr-standard" für das [standard XR-Gamepad](https://immersive-web.github.io/webxr-gamepads-module/#xr-standard-heading). Siehe auch [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad).

## Beispiele

```js
let gp = navigator.getGamepads()[0];
console.log(gp.mapping);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
