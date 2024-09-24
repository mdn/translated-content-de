---
title: "Navigator: getGamepads()-Methode"
short-title: getGamepads()
slug: Web/API/Navigator/getGamepads
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

Die **`Navigator.getGamepads()`**-Methode gibt ein Array von {{domxref("Gamepad")}}-Objekten zurück, eines für jedes mit dem Gerät verbundene Gamepad.

Elemente im Array können `null` sein, wenn ein Gamepad während einer Sitzung die Verbindung trennt, sodass die verbleibenden Gamepads denselben Index behalten.

## Syntax

```js-nolint
getGamepads()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von {{domxref("Gamepad")}}-Objekten, eventuell leer.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Die Verwendung dieses Features wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

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
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
