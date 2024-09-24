---
title: RTCRtpReceiver
slug: Web/API/RTCRtpReceiver
l10n:
  sourceCommit: a9ed68046545018031dcf77330d901e2cf7054e9
---

{{APIRef("WebRTC")}}

Die **`RTCRtpReceiver`** Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) verwaltet den Empfang und die Dekodierung von Daten für einen {{domxref("MediaStreamTrack")}} auf einer {{domxref("RTCPeerConnection")}}.

## Instanzeigenschaften

- {{domxref("RTCRtpReceiver.jitterBufferTarget")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die bevorzugte Haltezeit einer Anwendung für Medien im Jitter-Puffer angibt. Dies erlaubt es, den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko, aufgrund von Netzwerkjitter keine Audio- oder Videoframes mehr zu haben, zu beeinflussen.
- {{domxref("RTCRtpReceiver.track")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("MediaStreamTrack")}} zurück, der mit der aktuellen `RTCRtpReceiver` Instanz verbunden ist.
- {{domxref("RTCRtpReceiver.transport")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("RTCDtlsTransport")}} Instanz zurück, über die die Medien für den Track des Empfängers empfangen werden.
- {{domxref("RTCRtpReceiver.transform")}}
  - : Ein {{domxref("RTCRtpScriptTransform")}} wird verwendet, um einen Transform-Stream ({{domxref("TransformStream")}}), der in einem Worker-Thread läuft, in die Empfänger-Pipeline einzufügen. So können Stream-Transformationen auf eingehende kodierte Video- und Audiorahmen angewendet werden.

### Veraltete Eigenschaften

- `rtcpTransport` {{deprecated_inline}}
  - : Diese Eigenschaft wurde entfernt; die RTP- und RTCP-Transporte wurden zu einem einzigen Transport zusammengeführt. Verwenden Sie stattdessen die {{domxref("RTCRtpReceiver.transport", "transport")}} Eigenschaft.

## Statische Methoden

- {{domxref("RTCRtpReceiver.getCapabilities_static", "RTCRtpReceiver.getCapabilities()")}}
  - : Gibt die optimistischste Ansicht der Fähigkeiten des Systems für den Empfang von Medien des angegebenen Typs zurück.

## Instanzmethoden

- {{domxref("RTCRtpReceiver.getContributingSources()")}}
  - : Gibt ein Array zurück, das ein Objekt für jeden einzigartigen CSRC (Contributing Source) Bezeichner enthält, der in den letzten zehn Sekunden vom aktuellen `RTCRtpReceiver` empfangen wurde.
- {{domxref("RTCRtpReceiver.getParameters()")}}
  - : Gibt ein Objekt zurück, das Informationen darüber enthält, wie die RTC-Daten dekodiert werden sollen.
- {{domxref("RTCRtpReceiver.getStats()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, dessen Erfüllungshandler einen {{domxref("RTCStatsReport")}} erhält, der Statistiken über die eingehenden Streams und ihre Abhängigkeiten enthält.
- {{domxref("RTCRtpReceiver.getSynchronizationSources()")}}
  - : Gibt ein Array zurück, das ein Objekt für jeden einzigartigen SSRC (Synchronization Source) Bezeichner enthält, der in den letzten zehn Sekunden vom aktuellen `RTCRtpReceiver` empfangen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCStatsReport")}}
- {{domxref("RTCRtpSender")}}
- {{domxref("RTCPeerConnection.getStats()")}}
