---
title: "Gamepad: Eigenschaft connected"
short-title: connected
slug: Web/API/Gamepad/connected
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Gamepad API")}}

Die schreibgeschützte Eigenschaft **`connected`** der Schnittstelle [`Gamepad`](/de/docs/Web/API/Gamepad) gibt einen booleschen Wert zurück, der angibt, ob das Gamepad noch mit dem System verbunden ist.

Wenn das Gamepad verbunden ist, ist der Wert `true`; andernfalls ist er `false`.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const gp = navigator.getGamepads()[0];
console.log(gp.connected);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
