---
title: Vibration API
slug: Web/API/Vibration_API
l10n:
  sourceCommit: 77915a2ad318fb78b1d02a35d6b1de61ea1b1f5f
---

{{DefaultAPISidebar("Vibration API")}}

Die meisten modernen Mobilgeräte verfügen über eine Vibrationshardware, die es Softwarecode ermöglicht, dem Benutzer durch ein Zittern des Geräts physisches Feedback zu geben. Die **Vibration API** bietet Webanwendungen die Möglichkeit, auf diese Hardware zuzugreifen, sofern sie vorhanden ist, und macht nichts, wenn das Gerät sie nicht unterstützt.

## Konzepte und Nutzung

Vibration wird als ein Muster von Ein- und Ausschaltimpulsen beschrieben, die unterschiedliche Längen haben können. Das Muster kann entweder aus einem einzelnen Integer bestehen, der die Anzahl der Millisekunden beschreibt, die vibriert werden soll, oder aus einem Array von Integern, das ein Muster von Vibrationen und Pausen beschreibt. Vibration wird mit einer einzigen Methode gesteuert: [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate).

### Eine einzelne Vibration

Sie können die Vibrationshardware einmal durch Angabe eines einzelnen Wertes oder eines Arrays, das nur einen Wert enthält, aktivieren:

```js
navigator.vibrate(200);
navigator.vibrate([200]);
```

Beide dieser Beispiele lassen das Gerät 200 ms lang vibrieren.

### Vibrationsmuster

Ein Array von Werten beschreibt abwechselnde Zeiträume, in denen das Gerät vibriert und nicht vibriert. Jeder Wert im Array wird in einen Integer umgewandelt und dann abwechselnd als die Anzahl der Millisekunden interpretiert, die das Gerät vibrieren soll, und die Anzahl der Millisekunden, in denen es nicht vibrieren soll. Zum Beispiel:

```js
navigator.vibrate([200, 100, 200]);
```

Dies lässt das Gerät 200 ms lang vibrieren, dann 100 ms pausieren, bevor es das Gerät erneut für weitere 200 ms vibrieren lässt.

Sie können so viele Vibration-/Paarungspaare angeben, wie Sie möchten, und Sie können entweder eine gerade oder ungerade Anzahl von Einträgen bereitstellen; es ist erwähnenswert, dass Sie keine Pause als Ihren letzten Eintrag angeben müssen, da die Vibration am Ende jeder Vibrationsperiode automatisch stoppt.

### Das Abbrechen bestehender Vibrationen

Durch das Aufrufen von [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) mit einem Wert von `0`, einem leeren Array oder einem Array, das nur Nullen enthält, wird jedes aktuell laufende Vibrationsmuster abgebrochen.

### Fortlaufende Vibrationen

Einige grundlegende `setInterval`- und `clearInterval`-Aktionen ermöglichen es Ihnen, eine anhaltende Vibration zu erstellen:

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

Natürlich berücksichtigt das obige Snippet nicht die Array-Methode der Vibration; eine anhaltende, array-basierte Vibration erfordert das Berechnen der Summe der Arrayelemente und das Erstellen eines Intervalls basierend auf dieser Zahl (wahrscheinlich mit einer zusätzlichen Verzögerung).

## Schnittstellen

### Erweiterungen auf andere Schnittstellen

- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
  - : Verursacht eine Vibration auf Geräten, die dies unterstützen. Tut nichts, wenn keine Vibrationsunterstützung verfügbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
