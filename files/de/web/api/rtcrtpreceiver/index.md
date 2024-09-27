---
title: RTCRtpReceiver
slug: Web/API/RTCRtpReceiver
l10n:
  sourceCommit: a9ed68046545018031dcf77330d901e2cf7054e9
---

{{APIRef("WebRTC")}}

Das **`RTCRtpReceiver`**-Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) verwaltet den Empfang und die Dekodierung von Daten für ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

## Instanz-Eigenschaften

- [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die bevorzugte Haltezeit für Medien im Jitter-Puffer einer Anwendung angibt, wodurch sie den Kompromiss zwischen Abspielverzögerung und dem Risiko des Auslaufens von Audio- oder Videoframes aufgrund von Netzwerkjitter beeinflussen kann.
- [`RTCRtpReceiver.track`](/de/docs/Web/API/RTCRtpReceiver/track) {{ReadOnlyInline}}
  - : Gibt das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurück, das mit der aktuellen `RTCRtpReceiver`-Instanz verbunden ist.
- [`RTCRtpReceiver.transport`](/de/docs/Web/API/RTCRtpReceiver/transport) {{ReadOnlyInline}}
  - : Gibt die [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Instanz zurück, über die die Medien für den Track des Empfängers empfangen werden.
- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) wird verwendet, um einen Transformierungs-Stream ([`TransformStream`](/de/docs/Web/API/TransformStream)), der in einem Worker-Thread läuft, in die Empfangspipeline einzufügen, wodurch Transformierungen auf eingehende kodierte Video- und Audio-Frames angewendet werden können.

### Veraltete Eigenschaften

- `rtcpTransport` {{deprecated_inline}}
  - : Diese Eigenschaft wurde entfernt; die RTP- und RTCP-Transporte wurden in einen einzigen Transport zusammengefasst. Verwenden Sie stattdessen die [`transport`](/de/docs/Web/API/RTCRtpReceiver/transport)-Eigenschaft.

## Statische Methoden

- [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static)
  - : Gibt die optimistischste Ansicht der Fähigkeiten des Systems zum Empfangen von Medien des angegebenen Typs zurück.

## Instanz-Methoden

- [`RTCRtpReceiver.getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources)
  - : Gibt ein Array zurück, das ein Objekt für jeden eindeutigen CSRC (Contributing Source) Identifier enthält, der von der aktuellen `RTCRtpReceiver` in den letzten zehn Sekunden empfangen wurde.
- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters)
  - : Gibt ein Objekt zurück, das Informationen darüber enthält, wie die RTC-Daten dekodiert werden sollen.
- [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, dessen Erfüllungs-Handler einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erhält, der Statistiken über die eingehenden Streams und deren Abhängigkeiten enthält.
- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
  - : Gibt ein Array zurück, das ein Objekt für jeden eindeutigen SSRC (Synchronization Source) Identifier enthält, der von der aktuellen `RTCRtpReceiver` in den letzten zehn Sekunden empfangen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
- [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
