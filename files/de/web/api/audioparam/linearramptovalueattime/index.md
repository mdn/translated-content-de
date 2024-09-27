---
title: "AudioParam: lineareRampeZuWertZurZeit() Methode"
short-title: lineareRampeZuWertZurZeit()
slug: Web/API/AudioParam/linearRampToValueAtTime
l10n:
  sourceCommit: ed0069ce5f405ef1914b1b28341ccb1c5fed1636
---

{{ APIRef("Web Audio API") }}

Die `linearRampToValueAtTime()` Methode der [`AudioParam`](/de/docs/Web/API/AudioParam)
Schnittstelle plant eine allmähliche lineare Veränderung des Wertes des
`AudioParam`. Die Änderung beginnt zur Zeit, die für das
_vorangegangene_ Ereignis angegeben wurde, folgt einer linearen Rampe zum neuen Wert, der im
`value`-Parameter angegeben ist, und erreicht den neuen Wert zur im
`endTime`-Parameter gegebenen Zeit.

## Syntax

```js-nolint
linearRampToValueAtTime(value, endTime)
```

### Parameter

- `value`
  - : Eine Fließkommazahl, die den Wert darstellt, zu dem der `AudioParam` bis zur angegebenen Zeit anwächst.
- `endTime`
  - : Ein Double-Wert, der die genaue Zeit (in Sekunden) nach dem Beginn des Hochfahrens darstellt, zu der die Änderung des Wertes endet.

### Rückgabewert

Eine Referenz auf dieses `AudioParam`-Objekt. In einigen älteren
Implementierungen dieser Schnittstelle wird {{jsxref('undefined')}} zurückgegeben.

## Beispiele

In diesem Beispiel haben wir eine Medienquelle mit zwei Steuerungsknöpfen (siehe das [audio-param Repository](https://github.com/mdn/webaudio-examples/tree/main/audio-param) für den Quellcode oder [sehen Sie sich das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/).) Wenn diese Knöpfe gedrückt werden, wird `linearRampToValueAtTime()`
verwendet, um den Gewinnwert jeweils auf 1,0 hochzufahren und auf 0 herunterzufahren. Dies ist ziemlich
nützlich für Ein-/Ausblendeffekte, obwohl [`AudioParam.exponentialRampToValueAtTime()`](/de/docs/Web/API/AudioParam/exponentialRampToValueAtTime) oft als etwas
natürlicher angesehen wird.

```js
// create audio context
const audioCtx = new AudioContext();

// set basic variables for example
const myAudio = document.querySelector("audio");

const linearRampPlus = document.querySelector(".linear-ramp-plus");
const linearRampMinus = document.querySelector(".linear-ramp-minus");

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node and set its gain value to 0.5
const gainNode = audioCtx.createGain();

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// set buttons to do something onclick
linearRampPlus.onclick = () => {
  gainNode.gain.linearRampToValueAtTime(1.0, audioCtx.currentTime + 2);
};

linearRampMinus.onclick = () => {
  gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
