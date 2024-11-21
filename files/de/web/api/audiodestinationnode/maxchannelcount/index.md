---
title: "AudioDestinationNode: maxChannelCount-Eigenschaft"
short-title: maxChannelCount
slug: Web/API/AudioDestinationNode/maxChannelCount
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{ APIRef("Web Audio API") }}

Die `maxChannelCount`-Eigenschaft des [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)-Interfaces ist ein `unsigned long`, der die maximale Anzahl von Kanälen definiert, die das physische Gerät verarbeiten kann.

Die [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount)-Eigenschaft kann zwischen 0 und diesem Wert (zuzüglich) gesetzt werden. Wenn `maxChannelCount` `0` ist, wie im [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), kann die Anzahl der Kanäle nicht geändert werden.

## Wert

Ein `unsigned long`.

## Beispiele

Das folgende Beispiel würde einen Audiographen erstellen, der ein `AudioDestinationNode` mit einem `maxChannelCount` von 2 enthält:

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
audioCtx.destination.maxChannelCount = 2;
gainNode.connect(audioCtx.destination);
```

Um eine vollständigere Implementierung zu sehen, schauen Sie sich eines unserer MDN-Web-Audio-Beispiele an, wie zum Beispiel [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) oder [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
