---
title: "RTCRtpSender: track-Eigenschaft"
short-title: track
slug: Web/API/RTCRtpSender/track
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die **`track`** schreibgeschützte Eigenschaft der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Schnittstelle gibt das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt zurück, das von dem `RTCRtpSender` verarbeitet wird.

## Wert

Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt, das die Medien repräsentiert, die mit dem `RTCRtpSender` verbunden sind. Wenn keine Spur mit dem Sender verknüpft ist, ist dieser Wert `null`, in welchem Fall der Sender nichts überträgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
