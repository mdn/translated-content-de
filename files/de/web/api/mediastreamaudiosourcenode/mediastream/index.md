---
title: "MediaStreamAudioSourceNode: mediaStream-Eigenschaft"
short-title: mediaStream
slug: Web/API/MediaStreamAudioSourceNode/mediaStream
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`mediaStream`**-Eigenschaft der [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Schnittstelle gibt den [`MediaStream`](/de/docs/Web/API/MediaStream) an, der den Audiotrack enthält, von dem der Knoten Audio empfängt.

Dieser Stream wurde beim Erstellen des Knotens entweder mit dem [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode)-Konstruktor oder der [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource)-Methode angegeben.

## Wert

Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der den Stream repräsentiert, der den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, der als Audioquelle für den Knoten dient.

Der [Benutzeragent](/de/docs/Glossary/user_agent) verwendet den ersten Audiotrack, den er im angegebenen Stream findet, als Audioquelle für diesen Knoten. Es gibt jedoch keine Möglichkeit, sicher zu wissen, welcher Track das in Multi-Track-Streams sein wird. Wenn der spezifische Track für Sie von Bedeutung ist oder Sie Zugriff auf den Track selbst benötigen, sollten Sie stattdessen einen [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) verwenden.

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
