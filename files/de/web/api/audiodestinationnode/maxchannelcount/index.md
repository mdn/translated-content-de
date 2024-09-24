---
title: "AudioDestinationNode: Eigenschaft maxChannelCount"
short-title: maxChannelCount
slug: Web/API/AudioDestinationNode/maxChannelCount
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `maxchannelCount` des {{ domxref("AudioDestinationNode") }}-Interfaces ist ein `unsigned long`, das die maximale Anzahl an Kanälen definiert, die das physische Gerät verarbeiten kann.

Die {{domxref("AudioNode.channelCount")}}-Eigenschaft kann auf einen Wert zwischen 0 und diesem Wert (beide inklusive) gesetzt werden. Wenn `maxChannelCount` `0` ist, wie im {{domxref("OfflineAudioContext")}}, kann die Anzahl der Kanäle nicht geändert werden.

## Wert

Ein `unsigned long`.

## Beispiele

Das folgende Beispiel würde ein einfaches Audiograf erstellen, mit einem `AudioDestinationNode` und einer `maxChannelCount` von 2:

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
audioCtx.destination.maxChannelCount = 2;
gainNode.connect(audioCtx.destination);
```

Um eine vollständigere Implementierung zu sehen, schauen Sie sich eines unserer MDN Web Audio Beispiele an, wie z.B. [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) oder [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
