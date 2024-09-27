---
title: "GamepadEvent: GamepadEvent() Konstruktor"
short-title: GamepadEvent()
slug: Web/API/GamepadEvent/GamepadEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Der **`GamepadEvent()`**-Konstruktor erstellt ein neues [`GamepadEvent`](/de/docs/Web/API/GamepadEvent)-Objekt.

## Syntax

```js-nolint
new GamepadEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Er ist groß-/klein-schreibungssensitiv und Browser setzen ihn auf `gamepadconnected` oder `gamepaddisconnected`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `gamepad`
      - : Ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt, das das mit dem Ereignis verknüpfte Gamepad beschreibt.

### Rückgabewert

Ein neues [`GamepadEvent`](/de/docs/Web/API/GamepadEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
