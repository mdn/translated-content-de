---
title: "RTCRtpSender: track-Eigenschaft"
short-title: track
slug: Web/API/RTCRtpSender/track
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`track`** des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Interfaces gibt das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurück, das vom `RTCRtpSender` verarbeitet wird.

## Wert

Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt, das die Medien repräsentiert, die mit dem `RTCRtpSender` verknüpft sind. Wenn kein Track mit dem Sender verknüpft ist, ist dieser Wert `null`. In diesem Fall überträgt der Sender nichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
