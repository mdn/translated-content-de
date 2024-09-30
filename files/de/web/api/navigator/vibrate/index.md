---
title: "Navigator: `vibrate()`-Methode"
short-title: vibrate()
slug: Web/API/Navigator/vibrate
l10n:
  sourceCommit: 77915a2ad318fb78b1d02a35d6b1de61ea1b1f5f
---

{{APIRef("Vibration API")}}

Die **`vibrate()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle aktiviert die Vibrationseinheit des Geräts, sofern eine solche Hardware vorhanden ist. Wenn das Gerät keine Vibration unterstützt, hat diese Methode keine Wirkung. Wenn ein Vibrationsmuster bereits aktiv ist, wenn diese Methode aufgerufen wird, wird das vorherige Muster gestoppt und das neue beginnt stattdessen.

Wenn die Methode aufgrund ungültiger Parameter nicht vibrieren konnte, wird `false` zurückgegeben, andernfalls `true`. Wenn das Muster zu einer zu langen Vibration führt, wird es gekürzt: die maximale Länge hängt von der Implementierung ab.

## Syntax

```js-nolint
vibrate(pattern)
```

### Parameter

- `pattern`
  - : Bietet ein Muster von Vibrationen und Pausenintervallen. Jeder Wert gibt an, wie viele Millisekunden vibriert oder pausiert werden soll, im Wechsel. Sie können entweder einen einzelnen Wert angeben (um einmal für so viele Millisekunden zu vibrieren) oder ein Array von Werten, um abwechselnd zu vibrieren, zu pausieren und dann erneut zu vibrieren. Siehe [Vibration API](/de/docs/Web/API/Vibration_API) für Details.

Die Angabe eines Wertes von `0`, eines leeren Arrays oder eines Arrays, das nur Nullen enthält, wird jedes derzeit laufende Vibrationsmuster abbrechen.

### Rückgabewert

Ein boolean.

## Sicherheit

[Sticky user activation](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

```js
navigator.vibrate(200); // vibrate for 200ms
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]); // Vibrate 'SOS' in Morse.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vibration API](/de/docs/Web/API/Vibration_API)
