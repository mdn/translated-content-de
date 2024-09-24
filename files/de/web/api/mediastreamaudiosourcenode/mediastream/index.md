---
title: "MediaStreamAudioSourceNode: mediaStream-Eigenschaft"
short-title: mediaStream
slug: Web/API/MediaStreamAudioSourceNode/mediaStream
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("Web Audio API")}}

Die `mediaStream`-Eigenschaft der Schnittstelle {{domxref("MediaStreamAudioSourceNode")}} ist schreibgeschützt und gibt den {{domxref("MediaStream")}} an, der die Audiospur enthält, von der der Knoten Audio empfängt.

Dieser Stream wurde angegeben, als der Knoten zuerst erstellt wurde, entweder durch die Verwendung des Konstruktors {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "MediaStreamAudioSourceNode()")}} oder der Methode {{domxref("AudioContext.createMediaStreamSource()")}}.

## Wert

Ein {{domxref("MediaStream")}}, der den Stream darstellt, der den {{domxref("MediaStreamTrack")}} enthält, der als Audioquelle für den Knoten dient.

Der {{Glossary("user agent")}} verwendet die erste Audiospur, die er im angegebenen Stream findet, als Audioquelle für diesen Knoten. Es gibt jedoch keine Möglichkeit, sicher zu sein, welche Spur dies bei Streams mit mehreren Spuren sein wird. Wenn die spezifische Spur für Sie von Bedeutung ist oder Sie Zugriff auf die Spur selbst benötigen, sollten Sie stattdessen einen {{domxref("MediaStreamTrackAudioSourceNode")}} verwenden.

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
