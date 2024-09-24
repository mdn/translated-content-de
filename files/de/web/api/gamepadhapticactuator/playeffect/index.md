---
title: "GamepadHapticActuator: playEffect()-Methode"
short-title: playEffect()
slug: Web/API/GamepadHapticActuator/playEffect
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Gamepad API")}}

Die **`playEffect()`**-Methode der {{domxref("GamepadHapticActuator")}}-Schnittstelle veranlasst die Hardware, einen bestimmten Vibrationseffekt abzuspielen.

## Syntax

```js-nolint
playEffect(type, params)
```

### Parameter

- `type`

  - : Ein String, der den gewünschten Effekt darstellt. Mögliche Werte sind `"dual-rumble"` und `"trigger-rumble"`, und ihre Effekte können je nach Hardwaretyp variieren. Weitere Details zu den Effektarten finden Sie unter {{domxref("GamepadHapticActuator.effects")}}.

- `params`

  - : Ein Objekt, das einen gewünschten haptischen Effekt beschreibt.

    Erwartete Werte sind:

    - `duration` {{optional_inline}}
      - : Die Dauer des Effekts in Millisekunden.
        Standardwert ist `0`.
    - `startDelay` {{optional_inline}}
      - : Die Verzögerung in Millisekunden, bevor der Effekt gestartet wird.
        Standardwert ist `0`.
    - `strongMagnitude` {{optional_inline}}
      - : Die Rumblestärke der niederfrequenten (starken) Rumble-Motoren, normalisiert auf einen Bereich zwischen `0.0` und `1.0`.
        Standardwert ist `0.0`.
    - `weakMagnitude` {{optional_inline}}
      - : Die Rumblestärke der hochfrequenten (schwachen) Rumble-Motoren, normalisiert auf einen Bereich zwischen `0.0` und `1.0`.
        Standardwert ist `0.0`.
    - `leftTrigger` (nur relevant für `"trigger-rumble"`-Effekte) {{optional_inline}}
      - : Die Rumblestärke des unteren linken vorderen Triggers, normalisiert auf einen Bereich zwischen `0.0` und `1.0`.
        Standardwert ist `0.0`.
    - `rightTrigger` (nur relevant für `"trigger-rumble"`-Effekte) {{optional_inline}}
      - : Die Rumblestärke des unteren rechten vorderen Triggers, normalisiert auf einen Bereich zwischen `0.0` und `1.0`.
        Standardwert ist `0.0`.

> [!NOTE]
> Ein neuer Aufruf von `playEffect()` überschreibt einen vorhergehenden laufenden Aufruf.

### Rückgabewert

Ein Versprechen (Promise), das mit `"complete"` aufgelöst wird, wenn der Effekt erfolgreich abgeschlossen ist, oder mit `"preempted"`, wenn der aktuelle Effekt gestoppt oder durch einen anderen Effekt ersetzt wird.

Das Versprechen kann mit den folgenden Ausnahmetypen abgelehnt werden:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Das aktuelle Dokument ist nicht aktiv oder ausgeblendet.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Der angeforderte `type` wird vom aktuellen Gamepad-Aktuator nicht unterstützt.
- `TypeError` {{domxref("DOMException")}}
  - : Der angeforderte `type` ist kein gültiger Effekt-Typ.

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
// Solle "complete" protokollieren, wenn der Effekt erfolgreich läuft
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
