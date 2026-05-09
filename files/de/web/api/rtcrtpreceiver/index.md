---
title: RTCRtpReceiver
slug: Web/API/RTCRtpReceiver
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("WebRTC")}}

Das **`RTCRtpReceiver`**-Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) verwaltet den Empfang und das Dekodieren von Daten für ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

## Instanzeigenschaften

- [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die bevorzugte Haltezeit einer Anwendung für Medien im Jitter-Puffer angibt, sodass ein Einfluss auf den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko eines Mangels an Audio- oder Videoframes aufgrund von Netzwerkrückeln ermöglicht wird.
- [`RTCRtpReceiver.track`](/de/docs/Web/API/RTCRtpReceiver/track) {{ReadOnlyInline}}
  - : Gibt das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurück, das mit der aktuellen `RTCRtpReceiver`-Instanz verknüpft ist.
- [`RTCRtpReceiver.transport`](/de/docs/Web/API/RTCRtpReceiver/transport) {{ReadOnlyInline}}
  - : Gibt die [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Instanz zurück, über die die Medien für den Empfängertrack empfangen werden.
- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), der verwendet wird, um einen Transform-Stream ([`TransformStream`](/de/docs/Web/API/TransformStream)), der in einem Worker-Thread ausgeführt wird, in die Empfänger-Pipeline einzufügen, sodass Stream-Transformationen auf eingehende kodierte Video- und Audioframes angewendet werden können.

### Veraltete Eigenschaften

- `rtcpTransport` {{deprecated_inline}} {{non-standard_inline}}
  - : Diese Eigenschaft wurde entfernt; die RTP- und RTCP-Transporte wurden in einen einzigen Transport kombiniert. Verwenden Sie stattdessen die [`transport`](/de/docs/Web/API/RTCRtpReceiver/transport)-Eigenschaft.

## Statische Methoden

- [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static)
  - : Gibt die optimistischste Sicht auf die Fähigkeiten des Systems zurück, um Medien des angegebenen Typs zu empfangen.

## Instanzmethoden

- [`RTCRtpReceiver.getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources)
  - : Gibt ein Array zurück, das ein Objekt für jede eindeutige CSRC (Contributing Source)-Kennung enthält, die der aktuelle `RTCRtpReceiver` in den letzten zehn Sekunden empfangen hat.
- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters)
  - : Gibt ein Objekt zurück, das Informationen darüber enthält, wie die RTC-Daten dekodiert werden sollen.
- [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, dessen Fulfillment-Handler einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erhält, der Statistiken über die eingehenden Streams und deren Abhängigkeiten enthält.
- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
  - : Gibt ein Array zurück, das ein Objekt für jede eindeutige SSRC (Synchronization Source)-Kennung enthält, die der aktuelle `RTCRtpReceiver` in den letzten zehn Sekunden empfangen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
- [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
