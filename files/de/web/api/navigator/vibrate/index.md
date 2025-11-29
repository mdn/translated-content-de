---
title: "Navigator: vibrate() Methode"
short-title: vibrate()
slug: Web/API/Navigator/vibrate
l10n:
  sourceCommit: 75cd611e663ea499706cedf219eadac4e73e12a4
---

{{APIRef("Vibration API")}}

Die **`vibrate()`** Methode des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces steuert die Vibrationseinheit des Geräts, falls eine solche vorhanden ist. Wenn das Gerät keine Vibration unterstützt, hat diese Methode keine Wirkung. Wenn ein Vibrationsmuster bereits aktiv ist, wird das vorherige Muster beim Aufruf dieser Methode abgebrochen und das neue beginnt stattdessen.

Wenn die Methode aufgrund ungültiger Parameter nicht vibrieren konnte, gibt sie `false` zurück, andernfalls gibt sie `true` zurück. Wenn das Muster zu einer zu langen Vibration führt, wird es gekürzt: Die maximale Länge hängt von der Implementierung ab.

Einige Geräte vibrieren möglicherweise nicht, wenn sie im Lautlosmodus oder im Nicht-stören-Modus (DND) sind. Um sicherzustellen, dass die Vibration funktioniert, stellen Sie sicher, dass diese Modi ausgeschaltet sind und dass die Vibration in den Systemeinstellungen aktiviert ist.

## Syntax

```js-nolint
vibrate(pattern)
```

### Parameter

- `pattern`
  - : Gibt ein Muster von Vibrations- und Pausenintervallen an. Jeder Wert gibt eine Anzahl von Millisekunden an, die abwechselnd vibriert oder pausiert wird. Sie können entweder einen einzelnen Wert angeben (um einmal für diese Anzahl von Millisekunden zu vibrieren) oder ein Array von Werten, um abwechselnd zu vibrieren, zu pausieren und dann wieder zu vibrieren. Siehe [Vibration API](/de/docs/Web/API/Vibration_API) für Details.

Das Übergeben eines Werts von `0`, eines leeren Arrays oder eines Arrays, das nur Nullen enthält, bricht jedes aktuell laufende Vibrationsmuster ab.

### Rückgabewert

Ein boolescher Wert.

## Sicherheit

[Sticky user activation](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

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
