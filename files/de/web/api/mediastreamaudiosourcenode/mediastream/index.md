---
title: "MediaStreamAudioSourceNode: mediaStream-Eigenschaft"
short-title: mediaStream
slug: Web/API/MediaStreamAudioSourceNode/mediaStream
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`mediaStream`**-Eigenschaft des [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Interfaces gibt den [`MediaStream`](/de/docs/Web/API/MediaStream) an, der den Audiokanal enthält, von dem der Knoten Audio empfängt.

Dieser Stream wurde angegeben, als der Knoten zuerst erstellt wurde, entweder mit dem [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode)-Konstruktor oder der [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource)-Methode.

## Wert

Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der den Stream darstellt, der den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, der als Audioquelle für den Knoten dient.

Der [User-Agent](/de/docs/Glossary/user_agent) verwendet den ersten Audiokanal, den er im angegebenen Stream findet, als Audioquelle für diesen Knoten. Es gibt jedoch keine Möglichkeit, sicherzustellen, welcher Kanal dies bei Streams mit mehreren Kanälen sein wird. Wenn der spezifische Kanal für Sie wichtig ist oder Sie Zugriff auf den Kanal selbst benötigen, sollten Sie stattdessen einen [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) verwenden.

## Beispiele

```js
const audioCtx = new window.AudioContext();
let options = {
  mediaStream: stream,
};

let source = new MediaStreamAudioSourceNode(audioCtx, options);
console.log(source.mediaStream);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
