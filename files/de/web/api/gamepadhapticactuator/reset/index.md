---
title: "GamepadHapticActuator: reset()-Methode"
short-title: reset()
slug: Web/API/GamepadHapticActuator/reset
l10n:
  sourceCommit: 874fc07211d1945d98849907eac6b563e241ae38
---

{{APIRef("Gamepad API")}}

Die **`reset()`**-Methode des [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Interfaces stoppt die Hardware davon, einen aktiven Vibrationseffekt abzuspielen.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit `"complete"` aufgelöst wird, wenn der Effekt erfolgreich zurückgesetzt wurde, oder mit `"preempted"`, wenn der Effekt gestoppt oder durch einen anderen Effekt ersetzt wurde.

Das Promise kann mit den folgenden Ausnahmetypen verworfen werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit `InvalidStateError` verworfen, wenn das aktuelle Dokument nicht aktiv oder versteckt ist.

## Beispiele

```js
const gamepad = navigator.getGamepads()[0];

setTimeout(() => {
  gamepad.vibrationActuator.reset();
}, 150);

gamepad.vibrationActuator
  .playEffect("dual-rumble", {
    startDelay: 0,
    duration: 200,
    weakMagnitude: 1.0,
    strongMagnitude: 1.0,
  })
  .then((result) => console.log(result));
// Should log "preempted" because reset() will run before the effect ends
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
