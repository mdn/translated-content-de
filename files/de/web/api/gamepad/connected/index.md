---
title: "Gamepad: connected-Eigenschaft"
short-title: connected
slug: Web/API/Gamepad/connected
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad API")}}

Die **`Gamepad.connected`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt einen Boolean zurück, der anzeigt, ob das Gamepad noch mit dem System verbunden ist.

Wenn das Gamepad verbunden ist, ist der Wert `true`; wenn nicht, ist er `false`.

## Wert

Ein Boolean.

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
