---
title: "BaseAudioContext: Methode createChannelMerger()"
short-title: createChannelMerger()
slug: Web/API/BaseAudioContext/createChannelMerger
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createChannelMerger()`-Methode der {{domxref("BaseAudioContext")}}-Schnittstelle erstellt ein {{domxref("ChannelMergerNode")}}, das Kanäle aus mehreren Audiostreams zu einem einzelnen Audiostream kombiniert.

> [!NOTE]
> Der Konstruktor {{domxref("ChannelMergerNode.ChannelMergerNode", "ChannelMergerNode()")}} wird empfohlen, um ein {{domxref("ChannelMergerNode")}} zu erstellen; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createChannelMerger(numberOfInputs)
```

### Parameter

- `numberOfInputs`
  - : Die Anzahl der Kanäle in den Eingangs-Audiostreams, die der Ausgangs-Stream enthalten wird; der Standardwert ist 6, wenn dieser Parameter nicht angegeben wird.

### Rückgabewert

Ein {{domxref("ChannelMergerNode")}}.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Stereo-Track (zum Beispiel ein Musikstück) trennen und den linken und rechten Kanal unterschiedlich verarbeiten können. Um sie zu verwenden, müssen Sie die zweiten und dritten Parameter der Methode {{domxref("AudioNode/connect", "AudioNode.connect(AudioNode)")}} verwenden, die es Ihnen ermöglichen, sowohl den Index des Kanals, von dem aus verbunden wird, als auch den Index des Kanals, mit dem verbunden wird, anzugeben.

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

  // Verbinden Sie den Splitter zurück mit dem zweiten Eingang des Mergers: Hier wechseln wir effektiv die Kanäle und kehren das Stereo-Bild um.
  gainNode.connect(merger, 0, 1);
  splitter.connect(merger, 1, 0);

  const dest = ac.createMediaStreamDestination();

  // Da wir ein ChannelMergerNode verwendet haben, haben wir jetzt einen Stereo-MediaStream, den wir verwenden können, um das Web-Audio-Graph zu WebRTC, MediaRecorder usw. zu leiten.
  merger.connect(dest);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
