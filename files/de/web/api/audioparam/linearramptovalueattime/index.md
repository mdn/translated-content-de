---
title: "AudioParam: linearRampToValueAtTime() Methode"
short-title: linearRampToValueAtTime()
slug: Web/API/AudioParam/linearRampToValueAtTime
l10n:
  sourceCommit: ed0069ce5f405ef1914b1b28341ccb1c5fed1636
---

{{ APIRef("Web Audio API") }}

Die Methode `linearRampToValueAtTime()` der Schnittstelle [`AudioParam`](/de/docs/Web/API/AudioParam) plant eine schrittweise lineare Änderung des Wertes des `AudioParam`. Die Änderung beginnt zur für das _vorherige_ Ereignis angegebenen Zeit, folgt einer linearen Rampe zum neuen Wert, der im `value`-Parameter angegeben ist, und erreicht den neuen Wert zu der im `endTime`-Parameter angegebenen Zeit.

## Syntax

```js-nolint
linearRampToValueAtTime(value, endTime)
```

### Parameter

- `value`
  - : Eine Gleitkommazahl, die den Wert darstellt, auf den das `AudioParam` bis zur angegebenen Zeit ansteigen wird.
- `endTime`
  - : Ein Double, das die genaue Zeit (in Sekunden) darstellt, nach der das Ansteigen des Wertes beendet wird.

### Rückgabewert

Ein Verweis auf dieses `AudioParam`-Objekt. In einigen Browsern geben ältere Implementierungen dieser Schnittstelle {{jsxref('undefined')}} zurück.

## Beispiele

In diesem Beispiel haben wir eine Medienquelle mit zwei Steuerungstasten (siehe das [audio-param Repo](https://github.com/mdn/webaudio-examples/tree/main/audio-param) für den Quellcode oder [sehen Sie sich das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/)). Wenn diese Tasten gedrückt werden, wird `linearRampToValueAtTime()` verwendet, um den Gain-Wert auf 1,0 hoch und auf 0 herunterzufahren. Dies ist ziemlich nützlich für Ein-/Ausblendeffekte, obwohl [`AudioParam.exponentialRampToValueAtTime()`](/de/docs/Web/API/AudioParam/exponentialRampToValueAtTime) oft als etwas natürlicher empfunden wird.

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
