---
title: "AudioParam: exponentialRampToValueAtTime()-Methode"
short-title: exponentialRampToValueAtTime()
slug: Web/API/AudioParam/exponentialRampToValueAtTime
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die **`exponentialRampToValueAtTime()`**-Methode der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle plant eine allmähliche exponentielle Änderung des Wertes des [`AudioParam`](/de/docs/Web/API/AudioParam). Die Änderung beginnt zum Zeitpunkt des vorherigen Ereignisses, folgt einer exponentiellen Rampe zum neuen Wert, der im `value`-Parameter angegeben ist, und erreicht den neuen Wert zum Zeitpunkt, der im `endTime`-Parameter angegeben ist.

> [!NOTE]
> Exponentielle Rampen gelten als nützlicher beim Ändern von
> Frequenzen oder Wiedergaberaten als lineare Rampen, aufgrund der Funktionsweise des menschlichen Ohrs.

## Syntax

```js-nolint
exponentialRampToValueAtTime(value, endTime)
```

### Parameter

- `value`
  - : Eine Gleitkommazahl, die den Wert darstellt, auf den das `AudioParam` bis zu dem angegebenen Zeitpunkt ansteigen wird.
- `endTime`
  - : Eine Gleitkommazahl, die die genaue Zeit (in Sekunden) darstellt, nachdem die Rampe beginnt, zu der die Änderung des Wertes stoppt.

### Rückgabewert

Ein Verweis auf dieses `AudioParam`-Objekt. In einigen Browsern geben ältere Implementierungen dieser Schnittstelle {{jsxref('undefined')}} zurück.

## Beispiele

In diesem Beispiel haben wir eine Medienquelle mit zwei Steuertasten (sehen Sie sich den [audio-param Repo](https://github.com/mdn/webaudio-examples/tree/main/audio-param) für den Quellcode an oder [sehen Sie sich das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/).) Wenn diese Tasten gedrückt werden, wird `exponentialRampToValueAtTime()` verwendet, um den Gain-Wert auf 1.0 anzuheben und auf 0 abzusenken. Dies ist ziemlich nützlich für Einblende-/Ausblendeffekte:

```js
// create audio context
const audioCtx = new AudioContext();

// set basic variables for example
const myAudio = document.querySelector("audio");

const expRampPlus = document.querySelector(".exp-ramp-plus");
const expRampMinus = document.querySelector(".exp-ramp-minus");

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
expRampPlus.onclick = () => {
  gainNode.gain.exponentialRampToValueAtTime(1.0, audioCtx.currentTime + 2);
};

expRampMinus.onclick = () => {
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2);
};
```

> [!NOTE]
> Ein Wert von 0.01 wurde für den Wert verwendet, um in der
> letzten Funktion abzusinken, anstatt 0, da ein _ungültiger oder illegaler Zeichenfolgen_-Fehler ausgelöst wird, wenn 0 verwendet wird — der Wert muss positiv sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
