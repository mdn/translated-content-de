---
title: "Gamepad: mapping-Eigenschaft"
short-title: mapping
slug: Web/API/Gamepad/mapping
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad API")}}

Die **`Gamepad.mapping`**-Eigenschaft des
[`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt einen String zurück, der angibt, ob der Browser die Steuerelemente auf dem Gerät auf ein bekanntes Layout umgemappt hat.

Die derzeit unterstützten bekannten Layouts sind:

- "standard" für das [Standard-Gamepad](https://w3c.github.io/gamepad/#remapping).
- "xr-standard" für das [Standard-XR-Gamepad](https://immersive-web.github.io/webxr-gamepads-module/#xr-standard-heading). Siehe auch [`XRInputSource.gamepad`](/de/docs/Web/API/XRInputSource/gamepad).

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

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
