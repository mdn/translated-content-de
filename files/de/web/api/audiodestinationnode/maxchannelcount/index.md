---
title: "AudioDestinationNode: Eigenschaft maxChannelCount"
short-title: maxChannelCount
slug: Web/API/AudioDestinationNode/maxChannelCount
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `maxchannelCount` des [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)-Interfaces ist ein `unsigned long`, das die maximale Anzahl an Kanälen definiert, die das physische Gerät verarbeiten kann.

Die [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount)-Eigenschaft kann zwischen 0 und diesem Wert (beide eingeschlossen) gesetzt werden. Wenn `maxChannelCount` `0` ist, wie im [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), kann die Anzahl der Kanäle nicht geändert werden.

## Wert

Ein `unsigned long`.

## Beispiele

Das Folgende würde ein einfaches Audiograf einrichten, das einen `AudioDestinationNode` mit `maxChannelCount` von 2 enthält:

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
audioCtx.destination.maxChannelCount = 2;
gainNode.connect(audioCtx.destination);
```

Um eine vollständigere Implementierung zu sehen, probieren Sie eines der MDN Web Audio Beispiele aus, wie z.B. [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) oder [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
