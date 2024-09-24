---
title: "BaseAudioContext: createDelay()-Methode"
short-title: createDelay()
slug: Web/API/BaseAudioContext/createDelay
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Audio API")}}

Die `createDelay()`-Methode der {{domxref("BaseAudioContext")}}-Schnittstelle wird verwendet, um ein {{domxref("DelayNode")}} zu erstellen, das das eingehende Audiosignal um eine bestimmte Zeit verzögert.

> [!NOTE]
> Der {{domxref("DelayNode.DelayNode", "DelayNode()")}}
> Konstruktor ist der empfohlene Weg, um ein {{domxref("DelayNode")}} zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createDelay(maxDelayTime)
```

### Parameter

- `maxDelayTime` {{optional_inline}}
  - : Die maximale Zeit in Sekunden, um die das Audiosignal verzögert werden kann.
    Muss weniger als 180 Sekunden betragen und wird standardmäßig auf 1 Sekunde gesetzt, falls nicht angegeben.

### Rückgabewert

Ein {{domxref("DelayNode")}}. Die Standard-{{domxref("DelayNode.delayTime")}} ist 0 Sekunden.

## Beispiele

Wir haben ein einfaches Beispiel erstellt, das es Ihnen ermöglicht, drei verschiedene Samples in einer konstanten Schleife abzuspielen — siehe [create-delay](https://chrisdavidmills.github.io/create-delay/) (Sie können auch den [Quellcode ansehen](https://github.com/chrisdavidmills/create-delay)). Wenn Sie einfach die Wiedergabeschaltflächen drücken, starten die Schleifen sofort; wenn Sie die Schieberegler nach rechts schieben und dann die Wiedergabeschaltflächen drücken, wird eine Verzögerung eingebaut, sodass die Schleifenklänge für kurze Zeit nicht zu hören sind.

```js
const audioCtx = new AudioContext();

const synthDelay = audioCtx.createDelay(5.0);

// …

let synthSource;

playSynth.onclick = () => {
  synthSource = audioCtx.createBufferSource();
  synthSource.buffer = buffers[2];
  synthSource.loop = true;
  synthSource.start();
  synthSource.connect(synthDelay);
  synthDelay.connect(destination);
  this.setAttribute("disabled", "disabled");
};

stopSynth.onclick = () => {
  synthSource.disconnect(synthDelay);
  synthDelay.disconnect(destination);
  synthSource.stop();
  playSynth.removeAttribute("disabled");
};

// …

let delay1;
rangeSynth.oninput = () => {
  delay1 = rangeSynth.value;
  synthDelay.delayTime.setValueAtTime(delay1, audioCtx.currentTime);
};
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
