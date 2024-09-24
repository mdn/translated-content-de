---
title: "AudioParam: Methode setValueAtTime()"
short-title: setValueAtTime()
slug: Web/API/AudioParam/setValueAtTime
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die `setValueAtTime()`-Methode des
{{domxref("AudioParam")}}-Interfaces plant eine sofortige Änderung des
`AudioParam`-Wertes zu einer präzisen Zeit, gemessen an
{{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}. Der neue Wert wird im Parameter `value` angegeben.

## Syntax

```js-nolint
setValueAtTime(value, startTime)
```

### Parameter

- `value`
  - : Eine Gleitkommazahl, die den Wert darstellt, zu dem sich das AudioParam
    zu der angegebenen Zeit ändern wird.
- `startTime`
  - : Ein Double, das die Zeit (in Sekunden) darstellt, die nach der Erstellung des {{domxref("AudioContext")}} vergangen ist, zu der die Wertänderung erfolgen wird. Wenn die Zeit kleiner als {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} ist, erfolgt die Änderung sofort. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn dieser Wert negativ ist.

### Rückgabewert

Ein Verweis auf dieses `AudioParam`-Objekt. In einigen älteren Browserimplementierungen dieser Schnittstelle wird {{jsxref('undefined')}} zurückgegeben.

## Beispiele

Dieses einfache Beispiel zeigt eine Medien-Elementquelle mit zwei Steuerungsknöpfen (siehe unser [webaudio-examples Repo](https://github.com/mdn/webaudio-examples/blob/main/audio-param/index.html) für den Quellcode, oder [sehen Sie sich das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/)). Wenn die Knöpfe gedrückt werden, wird die Variable `currGain`
um 0,25 erhöht/erniedrigt und dann die Methode `setValueAtTime()` verwendet,
um den Verstärkungswert gleich `currGain` zu setzen, eine Sekunde ab jetzt
(`audioCtx.currentTime + 1`).

```js
// audio context erstellen
const audioCtx = new AudioContext();

// Grundvariablen für das Beispiel festlegen
const myAudio = document.querySelector("audio");
const pre = document.querySelector("pre");
const myScript = document.querySelector("script");

pre.textContent = myScript.textContent;

const targetAtTimePlus = document.querySelector(".set-target-at-time-plus");
const targetAtTimeMinus = document.querySelector(".set-target-at-time-minus");

// Erstellen Sie einen MediaElementAudioSourceNode
// Führen Sie das HTMLMediaElement in ihn ein
const source = audioCtx.createMediaElementSource(myAudio);

// Erstellen Sie einen Verstärkungs-Knoten und setzen Sie dessen Verstärkungswert auf 0,5
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
let currGain = gainNode.gain.value;

// Verbinden Sie den AudioBufferSourceNode mit dem gainNode
// und den gainNode mit dem Ziel
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Knöpfen eine Funktion für onclick zuweisen
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
