---
title: "Navigator: vibrate()-Methode"
short-title: vibrate()
slug: Web/API/Navigator/vibrate
l10n:
  sourceCommit: 77915a2ad318fb78b1d02a35d6b1de61ea1b1f5f
---

{{APIRef("Vibration API")}}

Die **`vibrate()`**-Methode der {{domxref("Navigator")}}-Schnittstelle aktiviert die Vibrationshardware auf dem Gerät, falls eine solche Hardware vorhanden ist. Wenn das Gerät keine Vibration unterstützt, hat diese Methode keine Wirkung. Wenn ein Vibrationsmuster bereits aktiv ist, während diese Methode aufgerufen wird, wird das vorherige Muster gestoppt und das neue beginnt stattdessen.

Wenn die Methode aufgrund ungültiger Parameter nicht vibrieren konnte, gibt sie `false` zurück, ansonsten gibt sie `true` zurück. Wenn das Muster zu einer zu langen Vibration führt, wird es gekürzt: Die maximale Länge hängt von der Implementierung ab.

## Syntax

```js-nolint
vibrate(pattern)
```

### Parameter

- `pattern`
  - : Gibt ein Muster aus Vibrations- und Pausenintervallen vor. Jeder Wert gibt die Anzahl von Millisekunden an, die vibriert oder pausiert werden soll, im Wechsel. Sie können entweder einen einzelnen Wert angeben (um einmal für so viele Millisekunden zu vibrieren) oder ein Array von Werten, um abwechselnd zu vibrieren, zu pausieren und dann erneut zu vibrieren. Details finden Sie in der [Vibration API](/de/docs/Web/API/Vibration_API).

Das Übergeben eines Wertes von `0`, eines leeren Arrays oder eines Arrays, das nur Nullen enthält, wird jedes aktuell laufende Vibrationsmuster beenden.

### Rückgabewert

Ein Boolean.

## Sicherheit

[Sticky User Activation](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

```js
navigator.vibrate(200); // Vibrate für 200ms
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
