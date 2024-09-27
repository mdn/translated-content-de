---
title: "RTCRemoteInboundRtpStreamStats: kind Eigenschaft"
short-title: kind
slug: Web/API/RTCRemoteInboundRtpStreamStats/kind
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`kind`** Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats) Dictionary ist ein Zeichenfolge, die angibt, ob der beschriebene [RTP](/de/docs/Glossary/RTP)-Stream Audio- oder Videomedien enthält.

Diese Zeichenfolge wird immer die gleiche sein wie das [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts, das vom Stream übertragen wird. Sie stimmt auch mit dem Medientyp des Codecs überein, der mit diesem Statistikobjekt verbunden ist (d. h. der MIME-Typ der mit dem Codec verbundenen [`RTCCodecStats.mimeType`](/de/docs/Web/API/RTCCodecStats/mimeType) Eigenschaft).

## Wert

Der Wert von kind ist immer einer von:

- `"audio"`
  - : Der Stream enthält Audiomedien.
- `"video"`
  - : Der Stream enthält Videomedien.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
