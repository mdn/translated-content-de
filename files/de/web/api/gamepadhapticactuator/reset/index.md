---
title: "GamepadHapticActuator: reset()-Methode"
short-title: reset()
slug: Web/API/GamepadHapticActuator/reset
l10n:
  sourceCommit: 874fc07211d1945d98849907eac6b563e241ae38
---

{{APIRef("Gamepad API")}}

Die **`reset()`** Methode der {{domxref("GamepadHapticActuator")}} Schnittstelle stoppt die Hardware von der Wiedergabe eines aktiven Vibrationseffekts.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit `"complete"` aufgelöst wird, wenn der Effekt erfolgreich zurückgesetzt wird, oder mit `"preempted"`, wenn der Effekt gestoppt oder durch einen anderen Effekt ersetzt wurde.

Das Promise kann mit den folgenden Ausnahmetypen abgelehnt werden:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Promise wird mit `InvalidStateError` abgelehnt, wenn das aktuelle Dokument nicht aktiv oder verborgen ist.

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
// Sollte "preempted" protokollieren, da reset() ausgeführt wird, bevor der Effekt endet
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
