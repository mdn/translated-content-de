---
title: RTCRtpReceiver
slug: Web/API/RTCRtpReceiver
l10n:
  sourceCommit: a9ed68046545018031dcf77330d901e2cf7054e9
---

{{APIRef("WebRTC")}}

Das **`RTCRtpReceiver`**-Interface der [WebRTC-API](/de/docs/Web/API/WebRTC_API) verwaltet den Empfang und die Dekodierung von Daten für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

## Instanz-Eigenschaften

- [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die vom Anwendungsprogramm bevorzugte Haltezeit für Medien im Jitterpuffer angibt und es dem Anwendungsprogramm ermöglicht, den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko des Ausgehens von Audio- oder Videoframes aufgrund von Netzwerkjitter zu beeinflussen.
- [`RTCRtpReceiver.track`](/de/docs/Web/API/RTCRtpReceiver/track) {{ReadOnlyInline}}
  - : Gibt den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurück, der mit der aktuellen `RTCRtpReceiver`-Instanz verknüpft ist.
- [`RTCRtpReceiver.transport`](/de/docs/Web/API/RTCRtpReceiver/transport) {{ReadOnlyInline}}
  - : Gibt die [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Instanz zurück, über die die Medien für den Track des Empfängers empfangen werden.
- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), der verwendet wird, um einen Transform-Stream ([`TransformStream`](/de/docs/Web/API/TransformStream)) in einem Worker-Thread in die Empfänger-Pipeline einzufügen, sodass Stream-Transformationen auf eingehende codierte Video- und Audioframes angewendet werden können.

### Veraltete Eigenschaften

- `rtcpTransport` {{deprecated_inline}}
  - : Diese Eigenschaft wurde entfernt; die RTP- und RTCP-Transporte wurden in einem einzigen Transport zusammengefasst. Verwenden Sie stattdessen die [`transport`](/de/docs/Web/API/RTCRtpReceiver/transport)-Eigenschaft.

## Statische Methoden

- [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static)
  - : Gibt die optimistischste Ansicht der Fähigkeiten des Systems für den Empfang von Medien des angegebenen Typs zurück.

## Instanz-Methoden

- [`RTCRtpReceiver.getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources)
  - : Gibt ein Array zurück, das ein Objekt für jeden eindeutigen CSRC (Contributing Source) Identifier enthält, der in den letzten zehn Sekunden von dem aktuellen `RTCRtpReceiver` empfangen wurde.
- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters)
  - : Gibt ein Objekt zurück, das Informationen darüber enthält, wie die RTC-Daten dekodiert werden sollen.
- [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, dessen Fulfillment-Handler einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erhält, der Statistiken über die eingehenden Streams und deren Abhängigkeiten enthält.
- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
  - : Gibt ein Array zurück, das ein Objekt für jeden eindeutigen SSRC (Synchronization Source) Identifier enthält, der in den letzten zehn Sekunden von dem aktuellen `RTCRtpReceiver` empfangen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
- [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
