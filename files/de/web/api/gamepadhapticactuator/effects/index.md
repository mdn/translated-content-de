---
title: "GamepadHapticActuator: effects-Eigenschaft"
short-title: effects
slug: Web/API/GamepadHapticActuator/effects
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Gamepad API")}}{{SeeCompatTable}}

Die schreibgeschützte **`effects`**-Eigenschaft der {{domxref("GamepadHapticActuator")}}-Schnittstelle gibt ein Array mit aufgezählten Werten zurück, die die verschiedenen haptischen Effekte darstellen, die der Aktuator unterstützt.

## Wert

Ein Array, das die unterstützten haptischen Effekte darstellt. Mögliche enthaltene Werte sind:

- `"dual-rumble"`
  - : Ein positionsabhängiger Rummble-Effekt, der durch zwei Vibrationsmotoren in jedem Griff eines Controllers erzeugt wird, die unabhängig voneinander vibrieren können.
- `"trigger-rumble"`
  - : Lokalisierte Rummble-Effekte auf der Oberfläche der Triggerknöpfe eines Controllers, die durch Vibrationsmotoren in jedem Knopf erzeugt werden. Diese Knöpfe nehmen meist die Form von federbelasteten Triggern an.

> [!NOTE]
> Wenn ein Effekt nicht aufgeführt ist, von dem bekannt ist, dass er von der Hardware unterstützt wird, kann es sein, dass der Browser das Abspielen von Effekten dieses Typs nicht unterstützt.

## Beispiele

```js
const gamepad = navigator.getGamepads()[0];

// Gibt "dual-rumble" oder "trigger-rumble" aus
console.log(gamepad.hapticActuators[0].effects[0]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
