---
title: "Gamepad: axes Eigenschaft"
short-title: axes
slug: Web/API/Gamepad/axes
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.axes`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt ein Array zurück, das die Steuerungen mit Achsen auf dem Gerät darstellt (z. B. analoge Daumensticks).

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

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
