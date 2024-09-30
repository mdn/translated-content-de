---
title: "RTCRtpSender: dtmf-Eigenschaft"
short-title: dtmf
slug: Web/API/RTCRtpSender/dtmf
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`dtmf`**-Eigenschaft der
**[`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)**-Schnittstelle gibt ein
[`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt zurück, das verwendet werden kann, um [DTMF](/de/docs/Glossary/DTMF)-Töne
über die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden. Einzelheiten zur Verwendung des zurückgegebenen `RTCDTMFSender`-Objekts finden Sie unter [Verwendung von DTMF](/de/docs/Web/API/WebRTC_API/Using_DTMF).

## Wert

Ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der verwendet werden kann, um DTMF über die RTP-Sitzung zu senden, oder `null`, wenn die Spur, die von der RTP-Sitzung übertragen wird, oder die
[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) insgesamt DTMF nicht unterstützt.

> [!NOTE]
> Nur Audio-Tracks können DTMF unterstützen, und typischerweise wird nur ein Audio-Track pro
> `RTCPeerConnection` einen zugeordneten [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) haben.

## Beispiel

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
