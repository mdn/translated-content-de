---
title: "AudioParam: Methode setValueAtTime()"
short-title: setValueAtTime()
slug: Web/API/AudioParam/setValueAtTime
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die Methode `setValueAtTime()` der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle plant eine sofortige Änderung des `AudioParam`-Werts zu einem genauen Zeitpunkt, gemessen an [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime). Der neue Wert wird im Parameter "value" angegeben.

## Syntax

```js-nolint
setValueAtTime(value, startTime)
```

### Parameter

- `value`
  - : Eine Gleitkommazahl, die den Wert darstellt, zu dem `AudioParam` zu dem gegebenen Zeitpunkt geändert wird.
- `startTime`
  - : Ein Double, das die Zeit (in Sekunden) nach der Erstellung des [`AudioContext`](/de/docs/Web/API/AudioContext) angibt, zu der die Wertänderung erfolgt. Wenn die Zeit kleiner ist als [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime), erfolgt die Änderung sofort. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn dieser Wert negativ ist.

### Rückgabewert

Ein Verweis auf dieses `AudioParam`-Objekt. In einigen Browsern geben ältere Implementierungen dieser Schnittstelle {{jsxref('undefined')}} zurück.

## Beispiele

Dieses einfache Beispiel zeigt eine Medienquellenkomponente mit zwei Steuerschaltflächen (siehe unser [webaudio-examples-Repo](https://github.com/mdn/webaudio-examples/blob/main/audio-param/index.html) für den Quellcode oder [sehen Sie sich das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/)). Wenn die Schaltflächen gedrückt werden, wird die Variable `currGain` um 0,25 erhöht/verringert, und dann wird die Methode `setValueAtTime()` verwendet, um den Verstärkungswert auf `currGain` zu setzen, eine Sekunde von jetzt an (`audioCtx.currentTime + 1`).

```js
// create audio context
const audioCtx = new AudioContext();

// set basic variables for example
const myAudio = document.querySelector("audio");
const pre = document.querySelector("pre");
const myScript = document.querySelector("script");

pre.textContent = myScript.textContent;

const targetAtTimePlus = document.querySelector(".set-target-at-time-plus");
const targetAtTimeMinus = document.querySelector(".set-target-at-time-minus");

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node and set its gain value to 0.5
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
let currGain = gainNode.gain.value;

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// set buttons to do something onclick
targetAtTimePlus.onclick = () => {
  currGain += 0.25;
  gainNode.gain.setValueAtTime(currGain, audioCtx.currentTime + 1);
};

targetAtTimeMinus.onclick = () => {
  currGain -= 0.25;
  gainNode.gain.setValueAtTime(currGain, audioCtx.currentTime + 1);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
