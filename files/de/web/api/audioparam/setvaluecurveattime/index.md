---
title: "AudioParam: setValueCurveAtTime()-Methode"
short-title: setValueCurveAtTime()
slug: Web/API/AudioParam/setValueCurveAtTime
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die **`setValueCurveAtTime()`**-Methode der {{domxref("AudioParam")}}-Schnittstelle plant die Änderung des Parameterwerts entsprechend einer Kurve, die durch eine Liste von Werten definiert ist.

Die Kurve ist eine lineare Interpolation zwischen der Reihenfolge von Werten, die in einem Array von Gleitkommawerten definiert sind, welche so skaliert werden, dass sie in das angegebene Intervall passen, beginnend bei `startTime` und mit einer bestimmten Dauer.

## Syntax

```js-nolint
setValueCurveAtTime(values, startTime, duration)
```

### Parameter

- `values`
  - : Ein Array von Gleitkommazahlen, das die Wertkurve darstellt, durch die das {{domxref("AudioParam")}} während der angegebenen `duration` verändert wird. Jeder Wert im Array muss eine endliche Zahl sein; wenn ein Wert `NaN`, `Infinity` oder `-Infinity` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `startTime`
  - : Ein Double, das die Zeit (in Sekunden) darstellt, nachdem der {{ domxref("AudioContext") }} erstmals erstellt wurde, zu der die Wertänderung erfolgt. Wenn dieser Wert niedriger ist als {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}, wird er auf `currentTime` beschränkt.
- `duration`
  - : Ein Double, das die Gesamtzeit (in Sekunden) darstellt, über die sich der `value` des Parameters entsprechend der angegebenen Kurve ändert. Die angegebenen Werte sind gleichmäßig über diese Dauer verteilt.

### Rückgabewert

Ein Verweis auf dieses `AudioParam`-Objekt. Einige ältere Browserimplementierungen dieser Schnittstelle geben `undefined` zurück.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das angegebene `values`-Array weniger als 2 Elemente enthält.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene `startTime` entweder negativ oder ein nicht-endlicher Wert ist oder `duration` keine endliche, strikt positive Zahl ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn einer oder mehrere der Werte im `values`-Array nicht endlich sind. Nicht-endliche Werte sind `NaN`, `Infinity` und `-Infinity`.

## Hinweise zur Verwendung

Wenn der Wert des Parameters der Kurve folgt, wird garantiert, dass sein Wert mit dem letzten Wert im Satz der im `values`-Parameter angegebenen Werte übereinstimmt.

> [!NOTE]
> Einige frühe Implementierungen der Web Audio API stellten dies nicht sicher, was zu unerwarteten Ergebnissen führte.

## Beispiele

In diesem Beispiel haben wir eine Medienquelle mit einem einzelnen Button (sehen Sie sich den [webaudio-examples-Repo](https://github.com/mdn/webaudio-examples/blob/main/audio-param/index.html) für den Quellcode an oder [sehen Sie sich das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/)). Wenn dieser Button gedrückt wird, wird `setValueCurveAtTime()` verwendet, um den Gain-Wert zwischen den in dem Array `waveArray` enthaltenen Werten zu ändern:

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

Versionen vor Chrome 46 verwenden anstelle der linearen Interpolation einen nächsten Nachbar.

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
