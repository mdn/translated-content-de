---
title: "AudioBuffer: Methode getChannelData()"
short-title: getChannelData()
slug: Web/API/AudioBuffer/getChannelData
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die **`getChannelData()`**-Methode der [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Schnittstelle gibt ein {{jsxref("Float32Array")}} zurück, das die PCM-Daten enthält, die dem Kanal zugeordnet sind, der durch den Kanalparameter definiert wird (wobei 0 den ersten Kanal darstellt).

## Syntax

```js-nolint
getChannelData(channel)
```

### Parameter

- `channel`
  - : Die Kanal-Eigenschaft ist ein Index, der den bestimmten Kanal repräsentiert, für den Daten abgerufen werden sollen. Ein Indexwert von 0 repräsentiert den ersten Kanal. Wenn der `channel`-Indexwert größer oder gleich der Anzahl von [`AudioBuffer.numberOfChannels`](/de/docs/Web/API/AudioBuffer/numberOfChannels) ist, wird eine `INDEX_SIZE_ERR`-Ausnahme ausgelöst.

### Rückgabewert

Ein {{jsxref("Float32Array")}}.

## Beispiele

Im folgenden Beispiel erstellen wir einen zwei Sekunden langen Puffer, füllen ihn mit weißem Rauschen und spielen ihn dann über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) ab. Die Kommentare sollten klar erklären, was passiert. Sie können den Code auch [live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples).

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");
const pre = document.querySelector("pre");
const myScript = document.querySelector("script");

pre.textContent = myScript.textContent;

// Stereo
const channels = 2;
// Create an empty two second stereo buffer at the
// sample rate of the AudioContext
const frameCount = audioCtx.sampleRate * 2.0;

const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // Fill the buffer with white noise;
  //just random values between -1.0 and 1.0
  for (let channel = 0; channel < channels; channel++) {
    // This gives us the actual ArrayBuffer that contains the data
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() is in [0; 1.0]
      // audio needs to be in [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // Get an AudioBufferSourceNode.
  // This is the AudioNode to use when we want to play an AudioBuffer
  const source = audioCtx.createBufferSource();
  // set the buffer in the AudioBufferSourceNode
  source.buffer = myArrayBuffer;
  // connect the AudioBufferSourceNode to the
  // destination so we can hear the sound
  source.connect(audioCtx.destination);
  // start the source playing
  source.start();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
