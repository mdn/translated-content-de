---
title: "BaseAudioContext: Methode createChannelMerger()"
short-title: createChannelMerger()
slug: Web/API/BaseAudioContext/createChannelMerger
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createChannelMerger()` Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) Schnittstelle erstellt einen [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode),
der Kanäle aus mehreren Audioströmen zu einem einzigen Audiostrom kombiniert.

> [!NOTE]
> Der Konstruktor [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode) ist die
> empfohlene Methode, um einen [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode) zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createChannelMerger(numberOfInputs)
```

### Parameter

- `numberOfInputs`
  - : Die Anzahl der Kanäle in den Eingangs-Audioströmen, die der Ausgabestrom enthalten wird; der Standardwert ist 6, falls dieser Parameter nicht angegeben ist.

### Rückgabewert

Ein [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode).

## Beispiele

Das folgende Beispiel zeigt, wie ein Stereo-Track (z. B. ein Musikstück) getrennt und die linke und rechte Spur unterschiedlich verarbeitet werden können. Um sie zu verwenden, müssen Sie die zweiten und dritten Parameter der [`AudioNode.connect(AudioNode)`](/de/docs/Web/API/AudioNode/connect) Methode verwenden, die es Ihnen ermöglichen, sowohl den Index des Kanals, von dem verbunden werden soll, als auch den Index des Kanals, zu dem verbunden werden soll, anzugeben.

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
