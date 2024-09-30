---
title: "AudioParam: setValueCurveAtTime() Methode"
short-title: setValueCurveAtTime()
slug: Web/API/AudioParam/setValueCurveAtTime
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die Methode **`setValueCurveAtTime()`** der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle plant, dass sich der Wert des Parameters entlang einer durch eine Liste von Werten definierten Kurve ändert.

Die Kurve ist eine lineare Interpolation zwischen der Reihenfolge von Werten, die in einem Array von Gleitkommazahlen definiert sind. Diese werden skaliert, um in das angegebene Intervall zu passen, beginnend bei `startTime` und einer bestimmten Dauer.

## Syntax

```js-nolint
setValueCurveAtTime(values, startTime, duration)
```

### Parameter

- `values`
  - : Ein Array von Gleitkommazahlen, das die Wertkurve repräsentiert, durch die das [`AudioParam`](/de/docs/Web/API/AudioParam) im Verlauf der angegebenen `duration` geändert wird. Jeder Wert im Array muss eine endliche Zahl sein. Ist ein Wert `NaN`, `Infinity` oder `-Infinity`, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `startTime`
  - : Ein Double, das die Zeit (in Sekunden) darstellt, nachdem der [`AudioContext`](/de/docs/Web/API/AudioContext) zuerst erstellt wurde und zu der die Wertänderung stattfinden wird. Wenn dieser Wert kleiner als [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) ist, wird er auf `currentTime` geklammert.
- `duration`
  - : Ein Double, das die gesamte Zeit (in Sekunden) darstellt, über die sich der `value` des Parameters entsprechend der angegebenen Kurve ändern wird. Die angegebenen Werte sind entlang dieser Dauer gleichmäßig verteilt.

### Rückgabewert

Eine Referenz auf dieses `AudioParam`-Objekt. Einige ältere Browser-Implementierungen dieser Schnittstelle geben `undefined` zurück.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das angegebene Array von `values` weniger als 2 Elemente enthält.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene `startTime` entweder negativ oder ein nicht-endlicher Wert ist, oder `duration` keine endliche, strikt positive Zahl ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein oder mehrere Werte im `values`-Array nicht endlich sind. Nicht-endliche Werte sind `NaN`, `Infinity` und `-Infinity`.

## Verwendungshinweise

Wenn der Parameterwert der Kurve folgt, wird garantiert, dass sein Wert mit dem letzten Wert in der im `values`-Parameter angegebenen Wertemenge übereinstimmt.

> [!NOTE]
> Einige frühe Implementierungen der Web Audio API stellten dies nicht sicher, was zu unerwarteten Ergebnissen führte.

## Beispiele

In diesem Beispiel haben wir eine Medienquelle mit einem einzigen Button (siehe das [webaudio-examples Repo](https://github.com/mdn/webaudio-examples/blob/main/audio-param/index.html) für den Quellcode, oder [sehen Sie sich das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/).) Wenn dieser Button gedrückt wird, wird `setValueCurveAtTime()` verwendet, um den Verstärkungswert zwischen den im waveArray enthaltenen Werten zu ändern:

```js
// create audio context
const audioCtx = new AudioContext();

// set basic variables for example
const myAudio = document.querySelector("audio");

const valueCurve = document.querySelector(".value-curve");

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node and set its gain value to 0.5
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
const currGain = gainNode.gain.value;

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// set button to do something onclick

const waveArray = new Float32Array(9);
waveArray[0] = 0.5;
waveArray[1] = 1;
waveArray[2] = 0.5;
waveArray[3] = 0;
waveArray[4] = 0.5;
waveArray[5] = 1;
waveArray[6] = 0.5;
waveArray[7] = 0;
waveArray[8] = 0.5;

valueCurve.onclick = () => {
  gainNode.gain.setValueCurveAtTime(waveArray, audioCtx.currentTime, 2);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Versionen vor Chrome 46 verwenden eine nächstliegende Nachbarinterpolation anstelle einer linearen Interpolation.

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
