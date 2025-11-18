---
title: "GamepadHapticActuator: playEffect() Methode"
short-title: playEffect()
slug: Web/API/GamepadHapticActuator/playEffect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Gamepad API")}}

Die **`playEffect()`** Methode der [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator) Schnittstelle bewirkt, dass die Hardware einen spezifischen Vibrationseffekt abspielt.

## Syntax

```js-nolint
playEffect(type, params)
```

### Parameter

- `type`
  - : Ein String, der den gewünschten Effekt darstellt. Mögliche Werte sind `"dual-rumble"` und `"trigger-rumble"`, wobei ihre Auswirkungen je nach Hardwaretyp variieren können. Siehe [`GamepadHapticActuator.effects`](/de/docs/Web/API/GamepadHapticActuator/effects) für weitere Details zu den Effektarten.

- `params`
  - : Ein Objekt zur Beschreibung eines gewünschten haptischen Effekts.

    Erwartete Werte sind:
    - `duration` {{optional_inline}}
      - : Die Dauer des Effekts in Millisekunden.
        Standardwert ist `0`.
    - `startDelay` {{optional_inline}}
      - : Die Verzögerung in Millisekunden, bevor der Effekt gestartet wird.
        Standardwert ist `0`.
    - `strongMagnitude` {{optional_inline}}
      - : Die Rumpelintensität der niederfrequenten (starken) Rumpelmotoren, normalisiert im Bereich zwischen `0.0` und `1.0`.
        Standardwert ist `0.0`.
    - `weakMagnitude` {{optional_inline}}
      - : Die Rumpelintensität der hochfrequenten (schwachen) Rumpelmotoren, normalisiert im Bereich zwischen `0.0` und `1.0`.
        Standardwert ist `0.0`.
    - `leftTrigger` (nur relevant für `"trigger-rumble"` Effekte) {{optional_inline}}
      - : Die Rumpelintensität des unteren linken vorderen Triggers, normalisiert im Bereich zwischen `0.0` und `1.0`.
        Standardwert ist `0.0`.
    - `rightTrigger` (nur relevant für `"trigger-rumble"` Effekte) {{optional_inline}}
      - : Die Rumpelintensität des unteren rechten vorderen Triggers, normalisiert im Bereich zwischen `0.0` und `1.0`.
        Standardwert ist `0.0`.

> [!NOTE]
> Ein neuer Aufruf von `playEffect()` überschreibt einen vorhergehenden laufenden Aufruf.

### Rückgabewert

Ein Promise, das mit `"complete"` aufgelöst wird, wenn der Effekt erfolgreich abgeschlossen wird, oder mit `"preempted"`, wenn der aktuelle Effekt gestoppt oder durch einen anderen Effekt ersetzt wird.

Das Promise kann mit folgenden Ausnahmearten abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht aktiv oder versteckt.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angeforderte `type` wird durch den aktuellen Gamepad-Aktuator nicht unterstützt.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angeforderte `type` ist kein gültiger Effekt typ.

## Beispiele

```js
const gamepad = navigator.getGamepads()[0];

gamepad.vibrationActuator
  .playEffect("dual-rumble", {
    startDelay: 0,
    duration: 200,
    weakMagnitude: 1.0,
    strongMagnitude: 1.0,
  })
  .then((result) => console.log(result));
// Should log "complete" if effect successfully runs
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
