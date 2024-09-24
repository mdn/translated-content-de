---
title: "GamepadEvent: GamepadEvent()-Konstruktor"
short-title: GamepadEvent()
slug: Web/API/GamepadEvent/GamepadEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Der **`GamepadEvent()`**-Konstruktor erstellt ein neues {{domxref("GamepadEvent")}}-Objekt.

## Syntax

```js-nolint
new GamepadEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Events.
    Er ist case-sensitiv und Browser setzen ihn auf `gamepadconnected` oder `gamepaddisconnected`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `gamepad`
      - : Ein {{domxref("Gamepad")}}-Objekt, das das mit dem Ereignis verbundene Gamepad beschreibt.

### Rückgabewert

Ein neues {{domxref("GamepadEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
