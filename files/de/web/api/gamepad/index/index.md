---
title: "Gamepad: index-Eigenschaft"
short-title: index
slug: Web/API/Gamepad/index
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Gamepad API")}}

Die schreibgeschützte Eigenschaft **`index`** der [`Gamepad`](/de/docs/Web/API/Gamepad)-Schnittstelle gibt eine Ganzzahl zurück, die automatisch hochgezählt wird, sodass sie für jedes derzeit mit dem System verbundene Gerät eindeutig ist.

Damit lassen sich mehrere Controller unterscheiden. Ein Gamepad, das getrennt und erneut verbunden wird, behält denselben Index.

## Wert

Eine {{jsxref("Number")}}.

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
