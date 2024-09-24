---
title: "AudioParam: Methode linearRampToValueAtTime()"
short-title: linearRampToValueAtTime()
slug: Web/API/AudioParam/linearRampToValueAtTime
l10n:
  sourceCommit: ed0069ce5f405ef1914b1b28341ccb1c5fed1636
---

{{ APIRef("Web Audio API") }}

Die Methode `linearRampToValueAtTime()` der {{ domxref("AudioParam") }}-Schnittstelle plant eine allmähliche lineare Änderung des Wertes von `AudioParam`. Die Änderung beginnt zu dem für das _vorherige_ Ereignis angegebenen Zeitpunkt, folgt einer linearen Rampe zum neuen Wert, der im `value`-Parameter angegeben ist, und erreicht den neuen Wert zur im `endTime`-Parameter angegebenen Zeit.

## Syntax

```js-nolint
linearRampToValueAtTime(value, endTime)
```

### Parameter

- `value`
  - : Eine Gleitkommazahl, die den Wert darstellt, auf den das `AudioParam` zur angegebenen Zeit ansteigen wird.
- `endTime`
  - : Ein Double, das die genaue Zeit (in Sekunden) nach Beginn der Rampe darstellt, zu der die Änderung des Wertes beendet wird.

### Rückgabewert

Eine Referenz auf dieses `AudioParam`-Objekt. In einigen älteren Implementierungen dieser Schnittstelle geben Browser {{jsxref('undefined')}} zurück.

## Beispiele

In diesem Beispiel haben wir eine Medienquelle mit zwei Steuerungstasten (sehen Sie sich das [audio-param Repo](https://github.com/mdn/webaudio-examples/tree/main/audio-param) für den Quellcode an oder [sehen Sie sich das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/).) Wenn diese Tasten gedrückt werden, wird `linearRampToValueAtTime()` verwendet, um den Gain-Wert auf 1.0 hoch- und auf 0 herunterzufahren. Dies ist ziemlich nützlich für Ein- und Ausblendeffekte, obwohl {{domxref("AudioParam.exponentialRampToValueAtTime()")}} oft als etwas natürlicher gilt.

```js
// Audio-Kontext erstellen
const audioCtx = new AudioContext();

// Grundvariablen für das Beispiel festlegen
const myAudio = document.querySelector("audio");

const linearRampPlus = document.querySelector(".linear-ramp-plus");
const linearRampMinus = document.querySelector(".linear-ramp-minus");

// Erstellen Sie einen MediaElementAudioSourceNode
// Füttern Sie das HTMLMediaElement hinein
const source = audioCtx.createMediaElementSource(myAudio);

// Erstellen Sie einen Gain-Node und setzen Sie seinen Gain-Wert auf 0,5
const gainNode = audioCtx.createGain();

// Verbinden Sie den AudioBufferSourceNode mit dem Gain-Node
// und den Gain-Node mit dem Ziel
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Definieren Sie, was beim Klicken auf die Tasten passiert
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
