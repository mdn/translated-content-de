---
title: "Gamepad: axes-Eigenschaft"
short-title: axes
slug: Web/API/Gamepad/axes
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.axes`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt ein Array zurück, das die Steuerungen mit Achsen auf dem Gerät darstellt (z.B. analoge Joysticks).

Jeder Eintrag im Array ist ein Gleitkommawert im Bereich von -1,0 bis 1,0, der die Achsenposition vom niedrigsten Wert (-1,0) bis zum höchsten Wert (1,0) darstellt.

## Wert

Ein Array von Zahlen.

## Beispiele

```js
function gameLoop() {
  const [gp] = navigator.getGamepads();

  let a = 0;
  let b = 0;
  if (gp.axes[0] !== 0) {
    b -= gp.axes[0];
  } else if (gp.axes[1] !== 0) {
    a += gp.axes[1];
  } else if (gp.axes[2] !== 0) {
    b += gp.axes[2];
  } else if (gp.axes[3] !== 0) {
    a -= gp.axes[3];
  }

  ball.style.left = `${a * 2}px`;
  ball.style.top = `${b * 2}px`;

  const start = requestAnimationFrame(gameLoop);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
