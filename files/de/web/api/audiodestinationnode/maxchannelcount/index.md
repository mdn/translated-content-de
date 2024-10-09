---
title: "AudioDestinationNode: Eigenschaft maxChannelCount"
short-title: maxChannelCount
slug: Web/API/AudioDestinationNode/maxChannelCount
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `maxChannelCount` des [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)-Interfaces ist ein `unsigned long`, der die maximale Anzahl der Kanäle definiert, die das physische Gerät verarbeiten kann.

Die Eigenschaft [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) kann zwischen 0 und diesem Wert (beide inklusive) festgelegt werden. Wenn `maxChannelCount` `0` ist, wie im [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), kann die Anzahl der Kanäle nicht geändert werden.

## Wert

Ein `unsigned long`.

## Beispiele

Das folgende Beispiel richtet einen einfachen Audiographen ein, der einen `AudioDestinationNode` mit einem `maxChannelCount` von 2 aufweist:

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
audioCtx.destination.maxChannelCount = 2;
gainNode.connect(audioCtx.destination);
```

Um eine vollständigere Implementierung zu sehen, schauen Sie sich eines unserer MDN Web Audio-Beispiele an, wie [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) oder [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
