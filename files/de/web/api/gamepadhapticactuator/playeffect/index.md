---
title: "GamepadHapticActuator: Methode playEffect()"
short-title: playEffect()
slug: Web/API/GamepadHapticActuator/playEffect
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Gamepad API")}}

Die Methode **`playEffect()`** der Schnittstelle [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator) veranlasst die Hardware, einen bestimmten Vibrationseffekt auszugeben.

## Syntax

```js-nolint
playEffect(type, params)
```

### Parameter

- `type`
  - : Ein String, der den gewünschten Effekt angibt. Mögliche Werte sind `"dual-rumble"` und `"trigger-rumble"`. Ihre Wirkung kann je nach Hardwaretyp variieren. Weitere Einzelheiten zu den Effekttypen finden Sie unter [`GamepadHapticActuator.effects`](/de/docs/Web/API/GamepadHapticActuator/effects).

- `params`
  - : Ein Objekt, das den gewünschten haptischen Effekt beschreibt.

    Folgende Werte werden erwartet:
    - `duration` {{optional_inline}}
      - : Die Dauer des Effekts in Millisekunden.
        Der Standardwert ist `0`.
    - `startDelay` {{optional_inline}}
      - : Die Verzögerung in Millisekunden, bevor der Effekt beginnt.
        Der Standardwert ist `0`.
    - `strongMagnitude` {{optional_inline}}
      - : Die Vibrationsintensität der niederfrequenten (starken) Vibrationsmotoren, normiert auf den Bereich zwischen `0.0` und `1.0`.
        Der Standardwert ist `0.0`.
    - `weakMagnitude` {{optional_inline}}
      - : Die Vibrationsintensität der hochfrequenten (schwachen) Vibrationsmotoren, normiert auf den Bereich zwischen `0.0` und `1.0`.
        Der Standardwert ist `0.0`.
    - `leftTrigger` (nur für `"trigger-rumble"`-Effekte relevant) {{optional_inline}}
      - : Die Vibrationsintensität des vorderen Triggers unten links, normiert auf den Bereich zwischen `0.0` und `1.0`.
        Der Standardwert ist `0.0`.
    - `rightTrigger` (nur für `"trigger-rumble"`-Effekte relevant) {{optional_inline}}
      - : Die Vibrationsintensität des vorderen Triggers unten rechts, normiert auf den Bereich zwischen `0.0` und `1.0`.
        Der Standardwert ist `0.0`.

> [!NOTE]
> Ein erneuter Aufruf von `playEffect()` überschreibt einen zuvor gestarteten, noch laufenden Aufruf.

### Rückgabewert

Ein Promise, das mit `"complete"` erfüllt wird, wenn der Effekt erfolgreich abgeschlossen wurde, oder mit `"preempted"`, wenn der aktuelle Effekt beendet oder durch einen anderen ersetzt wird.

Das Promise kann mit einer der folgenden Ausnahmen zurückgewiesen werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht aktiv oder ist verborgen.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Aktuator des aktuellen Gamepads unterstützt den angeforderten `type` nicht.
- {{jsxref("TypeError")}}
  - : Der angeforderte `type` ist kein gültiger Effekttyp.

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
