---
title: "AudioParam: Methode exponentialRampToValueAtTime()"
short-title: exponentialRampToValueAtTime()
slug: Web/API/AudioParam/exponentialRampToValueAtTime
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die **`exponentialRampToValueAtTime()`**-Methode der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle plant eine allmähliche exponentielle Änderung des Wertes des [`AudioParam`](/de/docs/Web/API/AudioParam).
Die Änderung beginnt zu der für das _vorherige_ Ereignis angegebenen Zeit, folgt einer exponentiellen Rampe zum neuen Wert, der im `value`-Parameter angegeben ist, und erreicht den neuen Wert zur im
`endTime`-Parameter angegebenen Zeit.

> [!NOTE]
> Exponentielle Rampen gelten als nützlicher beim Ändern
> von Frequenzen oder Wiedergaberaten als lineare Rampen, da das menschliche Ohr anders
> funktioniert.

## Syntax

```js-nolint
exponentialRampToValueAtTime(value, endTime)
```

### Parameter

- `value`
  - : Eine Gleitkommazahl, die den Wert darstellt, zu dem das `AudioParam` bis zur angegebenen Zeit gerampt wird.
- `endTime`
  - : Ein Double, das die genaue Zeit (in Sekunden) angibt, nach der das Ramping beginnt und die Änderung des Wertes endet.

### Rückgabewert

Ein Verweis auf dieses `AudioParam`-Objekt. In einigen älteren Browserimplementierungen dieser Schnittstelle wird {{jsxref('undefined')}} zurückgegeben.

## Beispiele

In diesem Beispiel haben wir eine Medienquelle mit zwei Steuerungsknöpfen (siehe das [audio-param Repo](https://github.com/mdn/webaudio-examples/tree/main/audio-param) für den Quellcode oder [sehen Sie das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/).) Wenn diese Knöpfe gedrückt werden, wird `exponentialRampToValueAtTime()`
verwendet, um den Gain-Wert auf 1.0 hochzufahren und auf 0 herunterzufahren. Das ist ziemlich nützlich für Ein- und Ausblendeffekte:

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
> Ein Wert von 0.01 wurde für den Wert verwendet, auf den in der
> letzten Funktion gerampt wird, anstatt 0, da ein _ungültiger oder rechtswidriger Zeichenfolgenfehler_ ausgelöst wird,
> wenn 0 verwendet wird — der Wert muss positiv sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
