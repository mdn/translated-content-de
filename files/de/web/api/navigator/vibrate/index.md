---
title: "Navigator: Methode vibrate()"
short-title: vibrate()
slug: Web/API/Navigator/vibrate
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Vibration API")}}

Die **`vibrate()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle steuert die Vibrationshardware auf dem Gerät, sofern solche Hardware vorhanden ist. Falls das Gerät keine Vibration unterstützt, hat diese Methode keine Wirkung. Wenn ein Vibrationsmuster bereits läuft, wird das vorherige Muster gestoppt, und das neue beginnt stattdessen.

Wenn die Methode aufgrund ungültiger Parameter nicht vibrieren konnte, gibt sie `false` zurück, andernfalls gibt sie `true` zurück. Wenn das Muster zu einer zu langen Vibration führt, wird es abgeschnitten: Die maximale Länge hängt von der Implementierung ab.

Einige Geräte vibrieren möglicherweise nicht, wenn sie sich im Lautlosmodus oder im Nicht stören (DND)-Modus befinden. Um sicherzustellen, dass die Vibration funktioniert, stellen Sie sicher, dass diese Modi ausgeschaltet sind und die Vibration in den Systemeinstellungen aktiviert ist.

## Syntax

```js-nolint
vibrate(pattern)
```

### Parameter

- `pattern`
  - : Gibt ein Muster von Vibrations- und Pausenintervallen an. Jeder Wert gibt eine Anzahl von Millisekunden an, die im Wechsel vibriert oder pausiert werden sollen. Sie können entweder einen einzelnen Wert angeben (um einmal für diese Anzahl Millisekunden zu vibrieren) oder ein Array von Werten, um abwechselnd zu vibrieren, zu pausieren und dann erneut zu vibrieren. Siehe [Vibration API](/de/docs/Web/API/Vibration_API) für Details.

Das Übergeben eines Wertes von `0`, eines leeren Arrays oder eines Arrays, das nur Nullen enthält, wird ein derzeit laufendes Vibrationsmuster stoppen.

### Rückgabewert

Ein Boolean.

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
