---
title: "BaseAudioContext: createDelay()-Methode"
short-title: createDelay()
slug: Web/API/BaseAudioContext/createDelay
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Audio API")}}

Die `createDelay()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle wird verwendet, um einen [`DelayNode`](/de/docs/Web/API/DelayNode) zu erstellen, der das eingehende Audiosignal um eine bestimmte Zeit verzögert.

> [!NOTE]
> Der [`DelayNode()`](/de/docs/Web/API/DelayNode/DelayNode)-Konstruktor ist die empfohlene Methode, um einen [`DelayNode`](/de/docs/Web/API/DelayNode) zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createDelay(maxDelayTime)
```

### Parameter

- `maxDelayTime` {{optional_inline}}
  - : Die maximale Zeitdauer in Sekunden, um die das Audiosignal verzögert werden kann. Muss weniger als 180 Sekunden betragen und standardmäßig auf 1 Sekunde, wenn nicht angegeben.

### Rückgabewert

Ein [`DelayNode`](/de/docs/Web/API/DelayNode). Der Standardwert von [`DelayNode.delayTime`](/de/docs/Web/API/DelayNode/delayTime) beträgt 0 Sekunden.

## Beispiele

Wir haben ein einfaches Beispiel erstellt, das Ihnen ermöglicht, drei verschiedene Samples in einer kontinuierlichen Schleife abzuspielen — siehe [create-delay](https://chrisdavidmills.github.io/create-delay/) (Sie können auch [den Quellcode anzeigen](https://github.com/chrisdavidmills/create-delay)). Wenn Sie einfach die Wiedergabeknöpfe drücken, starten die Schleifen sofort; wenn Sie die Schieberegler nach oben nach rechts bewegen und dann die Wiedergabeknöpfe drücken, wird eine Verzögerung eingeführt, so dass die Schleifengeräusche für eine kurze Zeit nicht beginnen zu spielen.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
