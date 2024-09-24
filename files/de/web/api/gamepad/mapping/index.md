---
title: "Gamepad: Mapping-Eigenschaft"
short-title: mapping
slug: Web/API/Gamepad/mapping
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.mapping`**-Eigenschaft des
{{domxref("Gamepad")}}-Interfaces gibt einen String zurück, der angibt, ob der Browser die Steuerelemente des Geräts auf ein bekanntes Layout umgemappt hat.

Die derzeit unterstützten bekannten Layouts sind:

- "standard" für das [Standard-Gamepad](https://w3c.github.io/gamepad/#remapping).
- "xr-standard" für das [Standard-XR-Gamepad](https://immersive-web.github.io/webxr-gamepads-module/#xr-standard-heading). Siehe auch {{domxref("XRInputSource.gamepad")}}.

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
