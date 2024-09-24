---
title: GamepadHapticActuator
slug: Web/API/GamepadHapticActuator
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

Die **`GamepadHapticActuator`**-Schnittstelle der [Gamepad API](/de/docs/Web/API/Gamepad_API) repräsentiert Hardware im Controller, die entworfen wurde, um dem Benutzer haptisches Feedback zu geben (falls verfügbar), am häufigsten Vibrationshardware.

Diese Schnittstelle ist über die Eigenschaft {{domxref("Gamepad.hapticActuators")}} zugänglich.

## Instanzeigenschaften

- {{domxref("GamepadHapticActuator.effects")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein Array von Aufzählungswerten zurück, die die verschiedenen haptischen Effekte darstellen, die der Aktuator unterstützt.
- {{domxref("GamepadHapticActuator.type")}} {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Gibt einen Aufzählungswert zurück, der den Typ der haptischen Hardware darstellt. Diese Eigenschaft ist veraltet: Verwenden Sie `GamepadHapticActuator.effects`, um die Unterstützung von Effekten zu erkennen.

## Instanzmethoden

- {{domxref("GamepadHapticActuator.playEffect()")}} {{ReadOnlyInline}}
  - : Lässt die Hardware einen spezifischen Vibrationseffekt abspielen.
- {{domxref("GamepadHapticActuator.pulse()")}} {{ReadOnlyInline}}
  - : Lässt die Hardware mit einer bestimmten Intensität für eine festgelegte Dauer pulsieren.
- {{domxref("GamepadHapticActuator.reset()")}} {{ReadOnlyInline}}
  - : Stoppt die Hardware, einen aktiven Vibrationseffekt abzuspielen.

## Beispiele

```js
const gamepad = navigator.getGamepads()[0];

gamepad.hapticActuators[0].pulse(1.0, 200);

gamepad.vibrationActuator.playEffect("dual-rumble", {
  startDelay: 0,
  duration: 200,
  weakMagnitude: 1.0,
  strongMagnitude: 1.0,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gamepad API](/de/docs/Web/API/Gamepad_API)
