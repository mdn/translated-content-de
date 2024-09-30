---
title: "BaseAudioContext: Methode createChannelMerger()"
short-title: createChannelMerger()
slug: Web/API/BaseAudioContext/createChannelMerger
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die Methode `createChannelMerger()` des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces erstellt einen [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode), der Kanäle aus mehreren Audioströmen zu einem einzelnen Audiostrom kombiniert.

> [!NOTE]
> Der Konstruktor [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode) wird empfohlen, um einen [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode) zu erzeugen; siehe [Erstellen eines AudioNodes](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createChannelMerger(numberOfInputs)
```

### Parameter

- `numberOfInputs`
  - : Die Anzahl der Kanäle in den Eingangsaudioströmen, die der Ausgangsstrom enthalten wird; der Standardwert ist 6, wenn dieser Parameter nicht angegeben wird.

### Rückgabewert

Ein [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode).

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Stereo-Track (zum Beispiel ein Musikstück) trennen und den linken und rechten Kanal unterschiedlich verarbeiten könnten. Dazu müssen Sie die zweite und dritte Parameter der Methode [`AudioNode.connect(AudioNode)`](/de/docs/Web/API/AudioNode/connect) verwenden, die es Ihnen ermöglichen, sowohl den Index des Kanals anzugeben, von dem verbunden werden soll, als auch den Index des Kanals, zu dem verbunden werden soll.

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
