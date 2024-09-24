---
title: "AudioBuffer: getChannelData()-Methode"
short-title: getChannelData()
slug: Web/API/AudioBuffer/getChannelData
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die **`getChannelData()`**-Methode der {{ domxref("AudioBuffer") }}-Schnittstelle gibt ein {{jsxref("Float32Array")}} zurück, das die PCM-Daten enthält, die dem durch den Kanalparameter definierten Kanal zugeordnet sind (wobei 0 den ersten Kanal darstellt).

## Syntax

```js-nolint
getChannelData(channel)
```

### Parameter

- `channel`
  - : Die Kanal-Eigenschaft ist ein Index, der den bestimmten Kanal repräsentiert, für den Daten abgerufen werden sollen. Ein Indexwert von 0 repräsentiert den ersten Kanal. Wenn der `channel`-Indexwert größer oder gleich {{domxref("AudioBuffer.numberOfChannels")}} ist, wird eine Ausnahme `INDEX_SIZE_ERR` ausgelöst.

### Rückgabewert

Ein {{jsxref("Float32Array")}}.

## Beispiele

Im folgenden Beispiel erstellen wir einen zwei Sekunden langen Puffer, füllen ihn mit weißem Rauschen und spielen ihn dann über einen {{ domxref("AudioBufferSourceNode") }} ab. Die Kommentare sollten klar erklären, was geschieht. Sie können den [Code auch live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples).

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");
const pre = document.querySelector("pre");
const myScript = document.querySelector("script");

pre.textContent = myScript.textContent;

// Stereo
const channels = 2;
// Erstellen eines leeren Zwei-Sekunden-Stereo-Puffers mit der
// Abtastrate des AudioContext
const frameCount = audioCtx.sampleRate * 2.0;

const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // Den Puffer mit weißem Rauschen füllen;
  // einfach zufällige Werte zwischen -1.0 und 1.0
  for (let channel = 0; channel < channels; channel++) {
    // Dies gibt uns den eigentlichen ArrayBuffer, der die Daten enthält
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() liegt in [0; 1.0]
      // Audio muss in [-1.0; 1.0] liegen
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // Einen AudioBufferSourceNode abrufen.
  // Dies ist der AudioNode, den wir verwenden, um ein AudioBuffer abzuspielen
  const source = audioCtx.createBufferSource();
  // den Puffer im AudioBufferSourceNode setzen
  source.buffer = myArrayBuffer;
  // den AudioBufferSourceNode an das
  // Ziel anschließen, damit wir den Ton hören können
  source.connect(audioCtx.destination);
  // die Wiedergabe der Quelle starten
  source.start();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
