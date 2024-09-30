---
title: "Gamepad: index-Eigenschaft"
short-title: index
slug: Web/API/Gamepad/index
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.index`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)
Interfaces gibt eine ganze Zahl zurück, die automatisch inkrementiert wird, um für jedes aktuell mit dem System verbundene Gerät eindeutig zu sein.

Dies kann verwendet werden, um mehrere Controller zu unterscheiden; ein Gamepad, das getrennt und wieder verbunden wird, behält denselben Index bei.

## Wert

Ein {{jsxref("number") }}.

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

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
