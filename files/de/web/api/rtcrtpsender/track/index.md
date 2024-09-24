---
title: "RTCRtpSender: track-Eigenschaft"
short-title: track
slug: Web/API/RTCRtpSender/track
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die **`track`**-Eigenschaft, eine schreibgeschützte Eigenschaft der {{domxref("RTCRtpSender")}}-Schnittstelle, gibt das {{domxref("MediaStreamTrack")}} zurück, welches vom `RTCRtpSender` verarbeitet wird.

## Wert

Ein {{domxref("MediaStreamTrack")}}-Objekt, das die Medien repräsentiert, die mit dem `RTCRtpSender` verbunden sind. Wenn kein Track mit dem Sender verknüpft ist, ist dieser Wert `null`, und der Sender überträgt nichts.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
