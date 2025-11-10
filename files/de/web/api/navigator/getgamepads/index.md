---
title: "Navigator: getGamepads() Methode"
short-title: getGamepads()
slug: Web/API/Navigator/getGamepads
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

Die **`Navigator.getGamepads()`** Methode gibt ein Array von
[`Gamepad`](/de/docs/Web/API/Gamepad) Objekten zurück, jeweils eines für jedes mit dem Gerät verbundene Gamepad.

Elemente im Array können `null` sein, wenn ein Gamepad während einer
Sitzung getrennt wird, sodass die verbleibenden Gamepads denselben Index behalten.

## Syntax

```js-nolint
getGamepads()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Gamepad`](/de/docs/Web/API/Gamepad) Objekten, möglicherweise leer.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Beispiele

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    `Gamepad connected at index ${gp.index}: ${gp.id} with ${gp.buttons.length} buttons, ${gp.axes.length} axes.`,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API verwenden](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
