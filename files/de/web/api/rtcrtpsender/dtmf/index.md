---
title: "RTCRtpSender: dtmf-Eigenschaft"
short-title: dtmf
slug: Web/API/RTCRtpSender/dtmf
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`dtmf`**-Eigenschaft im
**{{domxref("RTCRtpSender")}}**-Interface gibt ein
{{domxref("RTCDTMFSender")}}-Objekt zurück, das verwendet werden kann, um {{Glossary("DTMF")}}-Töne
über die {{domxref("RTCPeerConnection")}} zu senden. Siehe [Using DTMF](/de/docs/Web/API/WebRTC_API/Using_DTMF) für detaillierte Informationen zur Verwendung des zurückgegebenen `RTCDTMFSender`-Objekts.

## Wert

Ein {{domxref("RTCDTMFSender")}}, der verwendet werden kann, um DTMF über die RTP-Sitzung zu senden, oder
`null`, wenn die von der RTP-Sitzung übertragene Spur oder die
{{domxref("RTCPeerConnection")}} insgesamt DTMF nicht unterstützt.

> [!NOTE]
> Nur Audio-Tracks können DTMF unterstützen, und typischerweise hat nur ein Audio-Track pro
> `RTCPeerConnection` einen zugehörigen {{domxref("RTCDTMFSender")}}

## Beispiel

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
