---
title: "BaseAudioContext: createChannelSplitter()-Methode"
short-title: createChannelSplitter()
slug: Web/API/BaseAudioContext/createChannelSplitter
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createChannelSplitter()`-Methode der {{domxref("BaseAudioContext")}}-Schnittstelle wird verwendet, um einen {{domxref("ChannelSplitterNode")}} zu erstellen, der dazu dient, die einzelnen Kanäle eines Audiostreams zuzugreifen und getrennt zu verarbeiten.

> [!NOTE]
> Der {{domxref("ChannelSplitterNode.ChannelSplitterNode", "ChannelSplitterNode()")}}-Konstruktor ist die empfohlene Methode zum Erstellen eines {{domxref("ChannelSplitterNode")}}; siehe [Erstellen eines AudioNodes](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createChannelSplitter(numberOfOutputs)
```

### Parameter

- `numberOfOutputs`
  - : Die Anzahl der Kanäle im Eingangs-Audiostream, die Sie separat ausgeben möchten; der Standardwert ist 6, wenn dieser Parameter nicht angegeben ist.

### Rückgabewert

Ein {{domxref("ChannelSplitterNode")}}.

## Beispiele

Das folgende einfache Beispiel zeigt, wie Sie einen Stereo-Track (z.B. ein Musikstück) trennen und den linken und rechten Kanal unterschiedlich verarbeiten könnten. Um sie zu verwenden, müssen Sie die zweiten und dritten Parameter der {{domxref("AudioNode/connect", "AudioNode.connect(AudioNode)")}}-Methode nutzen, die es Ihnen ermöglichen, den Index des Kanals, von dem verbunden werden soll, und den Index des Kanals, zu dem verbunden werden soll, anzugeben.

```js
const ac = new AudioContext();
ac.decodeAudioData(someStereoBuffer, (data) => {
  const source = ac.createBufferSource();
  source.buffer = data;
  const splitter = ac.createChannelSplitter(2);
  source.connect(splitter);
  const merger = ac.createChannelMerger(2);

  // Reduzieren Sie die Lautstärke nur des linken Kanals
  const gainNode = ac.createGain();
  gainNode.gain.setValueAtTime(0.5, ac.currentTime);
  splitter.connect(gainNode, 0);

  // Verbinden Sie den Splitter zurück mit dem zweiten Eingang des Mergers: wir
  // vertauschen die Kanäle effektiv, hier wird das Stereo-Bild umgekehrt.
  gainNode.connect(merger, 0, 1);
  splitter.connect(merger, 1, 0);

  const dest = ac.createMediaStreamDestination();

  // Da wir einen ChannelMergerNode verwendet haben, haben wir jetzt einen Stereo
  // MediaStream, den wir verwenden können, um das Web Audio-Graph zu WebRTC,
  // MediaRecorder, etc. zu leiten.
  merger.connect(dest);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
