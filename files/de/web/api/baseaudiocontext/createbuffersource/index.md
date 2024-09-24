---
title: "BaseAudioContext: createBufferSource()-Methode"
short-title: createBufferSource()
slug: Web/API/BaseAudioContext/createBufferSource
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createBufferSource()`-Methode der {{ domxref("BaseAudioContext") }}-Schnittstelle wird verwendet, um ein neues {{ domxref("AudioBufferSourceNode") }} zu erstellen, das genutzt werden kann, um Audiodaten abzuspielen, die in einem {{ domxref("AudioBuffer") }}-Objekt enthalten sind. {{domxref("AudioBuffer")}}s werden mit {{domxref("BaseAudioContext.createBuffer")}} erstellt oder durch {{domxref("BaseAudioContext.decodeAudioData")}} zurückgegeben, wenn ein Audiotrack erfolgreich dekodiert wurde.

> [!NOTE]
> Der {{domxref("AudioBufferSourceNode.AudioBufferSourceNode", "AudioBufferSourceNode()")}}-Konstruktor ist die empfohlene Methode, um ein {{domxref("AudioBufferSourceNode")}} zu erstellen; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createBufferSource()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("AudioBufferSourceNode")}}.

## Beispiele

In diesem Beispiel erstellen wir einen zwei Sekunden langen Puffer, füllen ihn mit Weißem Rauschen und spielen ihn dann über ein {{ domxref("AudioBufferSourceNode") }} ab. Die Kommentare sollten klar erklären, was vor sich geht.

> [!NOTE]
> Sie können den [Code auch live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/), oder [den Quelltext ansehen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");
const pre = document.querySelector("pre");
const myScript = document.querySelector("script");

pre.textContent = myScript.textContent;

// Stereo
const channels = 2;
// Erstellen eines leeren zweisekündigen Stereo-Puffers mit der
// Abtastrate des AudioContext
const frameCount = audioCtx.sampleRate * 2.0;

const myArrayBuffer = audioCtx.createBuffer(
  channels,
  frameCount,
  audioCtx.sampleRate,
);

button.onclick = () => {
  // Den Puffer mit Weißem Rauschen füllen;
  // einfach zufällige Werte zwischen -1,0 und 1,0
  for (let channel = 0; channel < channels; channel++) {
    // Dies gibt uns den tatsächlichen ArrayBuffer, der die Daten enthält
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() liegt in [0; 1.0]
      // Audio muss in [-1.0; 1.0] liegen
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // Ein AudioBufferSourceNode abrufen.
  // Dies ist der AudioNode, den wir verwenden, um ein AudioBuffer abzuspielen
  const source = audioCtx.createBufferSource();
  // Den Puffer im AudioBufferSourceNode setzen
  source.buffer = myArrayBuffer;
  // Das AudioBufferSourceNode mit dem
  // Ziel verbinden, damit wir den Ton hören können
  source.connect(audioCtx.destination);
  // Den Quellcode abspielen
  source.start();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
