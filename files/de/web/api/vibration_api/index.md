---
title: Vibration API
slug: Web/API/Vibration_API
l10n:
  sourceCommit: 77915a2ad318fb78b1d02a35d6b1de61ea1b1f5f
---

{{DefaultAPISidebar("Vibration API")}}

Die meisten modernen mobilen Geräte verfügen über Vibrationshardware, die es Software-Code ermöglicht, dem Benutzer physisches Feedback zu geben, indem das Gerät zum Vibrieren gebracht wird. Die **Vibration API** bietet Webanwendungen die Möglichkeit, auf diese Hardware zuzugreifen, wenn sie vorhanden ist, und tut nichts, wenn das Gerät sie nicht unterstützt.

## Konzepte und Verwendung

Vibration wird als ein Muster von An-Aus-Impulsen beschrieben, die unterschiedlich lang sein können. Das Muster kann entweder aus einer einzelnen Ganzzahl bestehen, die die Anzahl der Millisekunden beschreibt, in denen das Gerät vibrieren soll, oder aus einem Array von Ganzzahlen, das ein Muster von Vibrationen und Pausen beschreibt. Die Vibration wird mit einer einzigen Methode gesteuert: [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate).

### Eine einzelne Vibration

Sie können die Vibrationshardware einmal durch Angabe eines einzelnen Wertes oder eines Arrays, das nur einen Wert enthält, aktivieren:

```js
navigator.vibrate(200);
navigator.vibrate([200]);
```

Beide Beispiele lassen das Gerät für 200 ms vibrieren.

### Vibrationsmuster

Ein Array von Werten beschreibt abwechselnde Perioden, in denen das Gerät vibriert und nicht vibriert. Jeder Wert im Array wird in eine Ganzzahl umgewandelt und dann abwechselnd als Anzahl der Millisekunden interpretiert, in denen das Gerät vibrieren soll, und der Millisekunden, in denen es nicht vibrieren soll. Zum Beispiel:

```js
navigator.vibrate([200, 100, 200]);
```

Dies lässt das Gerät 200 ms vibrieren, pausiert dann für 100 ms, bevor das Gerät erneut für weitere 200 ms vibriert.

Sie können so viele Vibrationen/Pausen-Paare angeben, wie Sie möchten, und Sie können entweder eine gerade oder ungerade Anzahl von Einträgen bereitstellen; es ist zu beachten, dass Sie keine Pause als letzten Eintrag angeben müssen, da die Vibration automatisch am Ende jeder Vibrationsperiode stoppt.

### Stornierung bestehender Vibrationen

Ein Aufruf von [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) mit einem Wert von `0`, einem leeren Array oder einem Array, das nur Nullen enthält, beendet jedes derzeit laufende Vibrationsmuster.

### Fortgesetzte Vibrationen

Einige grundlegende `setInterval` und `clearInterval` Aktionen ermöglichen es Ihnen, eine anhaltende Vibration zu erstellen:

```js
let vibrateInterval;

// Starts vibration at passed in level
function startVibrate(duration) {
  navigator.vibrate(duration);
}

// Stops vibration
function stopVibrate() {
  // Clear interval and stop persistent vibrating
  if (vibrateInterval) clearInterval(vibrateInterval);
  navigator.vibrate(0);
}

// Start persistent vibration at given duration and interval
// Assumes a number value is given
function startPersistentVibrate(duration, interval) {
  vibrateInterval = setInterval(() => {
    startVibrate(duration);
  }, interval);
}
```

Natürlich berücksichtigt der obige Code-Schnipsel nicht die Array-Methode der Vibration; für eine andauernde, auf Arrays basierende Vibration muss die Summe der Array-Elemente berechnet und ein Intervall basierend auf dieser Zahl erstellt werden (wahrscheinlich mit einer zusätzlichen Verzögerung).

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
  - : Verursacht Vibrationen bei Geräten, die dies unterstützen. Tut nichts, wenn keine Vibrationsunterstützung vorhanden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
