---
title: "Gamepad: index-Eigenschaft"
short-title: index
slug: Web/API/Gamepad/index
l10n:
  sourceCommit: 690498c3dbaebcf8b9a21220fbb23d192a30a225
---

{{APIRef("Gamepad API")}}

Die **`Gamepad.index`**-Eigenschaft der [`Gamepad`](/de/docs/Web/API/Gamepad)-Schnittstelle gibt eine ganze Zahl zurück, die automatisch inkrementiert wird, um für jedes Gerät, das derzeit mit dem System verbunden ist, einzigartig zu sein.

Dies kann verwendet werden, um mehrere Controller zu unterscheiden; ein Gamepad, das getrennt und wieder verbunden wird, behält denselben Index bei.

## Wert

Ein {{jsxref("Number")}}.

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
