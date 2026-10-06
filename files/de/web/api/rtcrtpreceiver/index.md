---
title: RTCRtpReceiver
slug: Web/API/RTCRtpReceiver
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("WebRTC")}}

Die **`RTCRtpReceiver`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) verwaltet den Empfang und die Dekodierung von Daten für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

## Instanzeigenschaften

- [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der angibt, wie lange eine Anwendung Medien vorzugsweise im Jitter-Puffer vorhält. Damit kann sie zwischen der Wiedergabeverzögerung und dem Risiko abwägen, dass aufgrund von Netzwerkschwankungen keine Audio- oder Videoframes mehr verfügbar sind.
- [`RTCRtpReceiver.track`](/de/docs/Web/API/RTCRtpReceiver/track) {{ReadOnlyInline}}
  - : Gibt den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurück, der der aktuellen `RTCRtpReceiver`-Instanz zugeordnet ist.
- [`RTCRtpReceiver.transport`](/de/docs/Web/API/RTCRtpReceiver/transport) {{ReadOnlyInline}}
  - : Gibt die [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Instanz zurück, über die die Medien für den Track des Empfängers empfangen werden.
- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) wird verwendet, um einen in einem Worker-Thread laufenden Transformationsstream ([`TransformStream`](/de/docs/Web/API/TransformStream)) in die Verarbeitungskette des Empfängers einzufügen. Dadurch können eingehende kodierte Video- und Audioframes transformiert werden.

### Veraltete Eigenschaften

- `rtcpTransport` {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Diese Eigenschaft wurde entfernt; die RTP- und RTCP-Transporte wurden zu einem einzigen Transport zusammengefasst. Verwenden Sie stattdessen die Eigenschaft [`transport`](/de/docs/Web/API/RTCRtpReceiver/transport).

## Statische Methoden

- [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static)
  - : Gibt die Fähigkeiten des Systems zum Empfang von Medien des angegebenen Typs unter den günstigsten Bedingungen an.

## Instanzmethoden

- [`RTCRtpReceiver.getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources)
  - : Gibt ein Array zurück, das für jede eindeutige CSRC-Kennung (contributing source), die der aktuelle `RTCRtpReceiver` in den letzten zehn Sekunden empfangen hat, ein Objekt enthält.
- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters)
  - : Gibt ein Objekt mit Informationen darüber zurück, wie die RTC-Daten dekodiert werden sollen.
- [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, dessen Fulfillment-Handler einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) mit Statistiken über die eingehenden Streams und ihre Abhängigkeiten erhält.
- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
  - : Gibt ein Array zurück, das für jede eindeutige SSRC-Kennung (synchronization source), die der aktuelle `RTCRtpReceiver` in den letzten zehn Sekunden empfangen hat, ein Objekt enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
- [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
