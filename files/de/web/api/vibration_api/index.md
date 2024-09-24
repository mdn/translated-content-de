---
title: Vibration-API
slug: Web/API/Vibration_API
l10n:
  sourceCommit: 77915a2ad318fb78b1d02a35d6b1de61ea1b1f5f
---

{{DefaultAPISidebar("Vibration API")}}

Die meisten modernen mobilen Geräte verfügen über Vibrationshardware, die es dem Software-Code ermöglicht, dem Benutzer durch Vibrationen physisches Feedback zu geben. Die **Vibration-API** bietet Web-Apps die Möglichkeit, auf diese Hardware zuzugreifen, sofern sie vorhanden ist, und unternimmt nichts, wenn das Gerät dies nicht unterstützt.

## Konzepte und Verwendung

Vibration wird als ein Muster von ein- und ausgeschalteten Impulsen beschrieben, die unterschiedlich lang sein können. Das Muster kann entweder aus einem einzelnen Integer bestehen, der die Anzahl der Millisekunden beschreibt, die vibriert werden soll, oder aus einem Array von Integern, das ein Muster von Vibrationen und Pausen beschreibt. Die Vibration wird mit einer einzigen Methode gesteuert: {{DOMxRef("Navigator.vibrate()")}}.

### Eine einzelne Vibration

Sie können die Vibrationshardware einmal pulsieren lassen, indem Sie entweder einen einzelnen Wert oder ein Array, das nur einen Wert enthält, angeben:

```js
navigator.vibrate(200);
navigator.vibrate([200]);
```

Beide dieser Beispiele lassen das Gerät 200 ms vibrieren.

### Vibrationsmuster

Ein Array von Werten beschreibt wechselnde Perioden, in denen das Gerät vibriert und nicht vibriert. Jeder Wert im Array wird in einen Integer umgewandelt und dann abwechselnd als die Anzahl der Millisekunden interpretiert, die das Gerät vibrieren soll, und die Anzahl der Millisekunden, die es nicht vibrieren soll. Zum Beispiel:

```js
navigator.vibrate([200, 100, 200]);
```

Dies lässt das Gerät 200 ms vibrieren, pausiert dann für 100 ms, bevor es erneut für weitere 200 ms vibriert.

Sie können so viele Vibrations-/Pausenpaare angeben, wie Sie möchten, und entweder eine gerade oder ungerade Anzahl von Einträgen bereitstellen; es ist erwähnenswert, dass Sie keine Pause als letzten Eintrag angeben müssen, da die Vibration am Ende jeder Vibrationsperiode automatisch stoppt.

### Bestehende Vibrationen abbrechen

Ein Aufruf von {{DOMxRef("Navigator.vibrate()")}} mit einem Wert von `0`, einem leeren Array oder einem Array, das nur Nullen enthält, wird jedes aktuell laufende Vibrationsmuster abbrechen.

### Fortgesetzte Vibrationen

Einige grundlegende `setInterval`- und `clearInterval`-Aktionen ermöglichen es Ihnen, eine anhaltende Vibration zu erzeugen:

```js
let vibrateInterval;

// Startet die Vibration auf dem übergebenen Niveau
function startVibrate(duration) {
  navigator.vibrate(duration);
}

// Stoppt die Vibration
function stopVibrate() {
  // Intervall löschen und anhaltendes Vibrieren stoppen
  if (vibrateInterval) clearInterval(vibrateInterval);
  navigator.vibrate(0);
}

// Startet anhaltende Vibration mit der angegebenen Dauer und im Intervall
// Nimmt an, dass ein Zahlenwert übergeben wird
function startPersistentVibrate(duration, interval) {
  vibrateInterval = setInterval(() => {
    startVibrate(duration);
  }, interval);
}
```

Natürlich berücksichtigt der obige Code nicht die Array-Methode der Vibration; eine anhaltende, auf Array basierende Vibration erfordert die Berechnung der Summe der Array-Elemente und die Erstellung eines Intervalls basierend auf dieser Zahl (wahrscheinlich mit einer zusätzlichen Verzögerung).

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.vibrate()")}}
  - : Verursacht eine Vibration auf Geräten, die dies unterstützen. Unternimmt nichts, wenn keine Vibrationsunterstützung vorhanden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Navigator.vibrate()")}}
