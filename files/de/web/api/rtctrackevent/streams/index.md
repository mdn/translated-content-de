---
title: "RTCTrackEvent: streams-Eigenschaft"
short-title: streams
slug: Web/API/RTCTrackEvent/streams
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die Schnittstelle [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent) der [WebRTC API](/de/docs/Web/API/WebRTC_API) besitzt die schreibgeschützte **`streams`**-Eigenschaft, die ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten spezifiziert. Jedes dieser Objekte steht für einen der Streams, die den Track bilden, der zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt wird.

## Wert

Ein {{jsxref("Array")}} von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, eines für jeden Stream, der den neuen Track bildet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
