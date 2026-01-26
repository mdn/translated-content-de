---
title: "Navigator: getGamepads()-Methode"
short-title: getGamepads()
slug: Web/API/Navigator/getGamepads
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad API")}}

Die **`Navigator.getGamepads()`**-Methode gibt ein Array von
[`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten zurück, eines für jedes Gamepad, das mit dem Gerät verbunden ist.

Elemente im Array können `null` sein, wenn ein Gamepad während einer
Sitzung getrennt wird, damit die verbleibenden Gamepads den gleichen Index beibehalten.

## Syntax

```js-nolint
getGamepads()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten, eventuell leer.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

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

- [Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Gamepad-API](/de/docs/Web/API/Gamepad_API)
