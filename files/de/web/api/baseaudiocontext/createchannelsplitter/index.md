---
title: "BaseAudioContext: Methode createChannelSplitter()"
short-title: createChannelSplitter()
slug: Web/API/BaseAudioContext/createChannelSplitter
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die Methode `createChannelSplitter()` des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces wird verwendet, um einen [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) zu erstellen, der dazu dient, die einzelnen Kanäle eines Audiostreams zu erreichen und separat zu verarbeiten.

> [!NOTE]
> Der Konstruktor [`ChannelSplitterNode()`](/de/docs/Web/API/ChannelSplitterNode/ChannelSplitterNode) ist die empfohlene Methode zum Erstellen eines [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode); siehe [Erstellung eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createChannelSplitter(numberOfOutputs)
```

### Parameter

- `numberOfOutputs`
  - : Die Anzahl der Kanäle im Eingangs-Audiostream, die Sie separat ausgeben möchten; der Standardwert ist 6, wenn dieser Parameter nicht angegeben ist.

### Rückgabewert

Ein [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode).

## Beispiele

Das folgende einfache Beispiel zeigt, wie Sie einen Stereotrack (zum Beispiel ein Musikstück) trennen und den linken und den rechten Kanal unterschiedlich verarbeiten können. Um sie zu verwenden, müssen Sie die zweiten und dritten Parameter der [`AudioNode.connect(AudioNode)`](/de/docs/Web/API/AudioNode/connect)-Methode verwenden, die es Ihnen ermöglichen, den Index des Kanals anzugeben, von dem aus verbunden werden soll, sowie den Index des Kanals, mit dem verbunden werden soll.

```js
const ac = new AudioContext();
ac.decodeAudioData(someStereoBuffer, (data) => {
  const source = ac.createBufferSource();
  source.buffer = data;
  const splitter = ac.createChannelSplitter(2);
  source.connect(splitter);
  const merger = ac.createChannelMerger(2);

  // Reduce the volume of the left channel only
  const gainNode = ac.createGain();
  gainNode.gain.setValueAtTime(0.5, ac.currentTime);
  splitter.connect(gainNode, 0);

  // Connect the splitter back to the second input of the merger: we
  // effectively swap the channels, here, reversing the stereo image.
  gainNode.connect(merger, 0, 1);
  splitter.connect(merger, 1, 0);

  const dest = ac.createMediaStreamDestination();

  // Because we have used a ChannelMergerNode, we now have a stereo
  // MediaStream we can use to pipe the Web Audio graph to WebRTC,
  // MediaRecorder, etc.
  merger.connect(dest);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
