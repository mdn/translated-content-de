---
title: RTCRtpSender
slug: Web/API/RTCRtpSender
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Das **`RTCRtpSender`**-Interface bietet die Möglichkeit, die Kodierung und den Versand eines bestimmten {{domxref("MediaStreamTrack")}} an einen entfernten Peer zu steuern und Details darüber zu erhalten.

Damit können Sie die für den entsprechenden Track verwendete Kodierung konfigurieren, Informationen über die Medienfähigkeiten des Geräts abrufen und so weiter. Sie können auch auf einen {{domxref("RTCDTMFSender")}} zugreifen, der verwendet werden kann, um {{Glossary("DTMF")}}-Codes (zur Simulation des Drückens von Tasten auf einer Telefontastatur) an den entfernten Peer zu senden.

## Instanz-Eigenschaften

- {{domxref("RTCRtpSender.dtmf")}} {{ReadOnlyInline}}
  - : Ein {{domxref("RTCDTMFSender")}}, mit dem {{Glossary("DTMF")}}-Töne unter Verwendung von `telephone-event`-Payloads auf der {{Glossary("RTP")}}-Sitzung gesendet werden können, die durch das `RTCRtpSender`-Objekt dargestellt wird. Wenn `null`, unterstützt der Track und/oder die Verbindung keine DTMF. Nur Audio-Tracks können DTMF unterstützen.
- {{domxref("RTCRtpSender.track")}} {{ReadOnlyInline}}
  - : Der {{domxref("MediaStreamTrack")}}, der vom `RTCRtpSender` behandelt wird. Wenn `track` `null` ist, sendet der `RTCRtpSender` nichts.
- {{domxref("RTCRtpSender.transport")}} {{ReadOnlyInline}}
  - : Der {{domxref("RTCDtlsTransport")}}, über den der Sender die RTP- und RTCP-Pakete austauscht, die für die Übermittlung von Medien- und Steuerdaten verwendet werden. Dieser Wert ist `null`, bis der Transport hergestellt ist. Wenn Bündelung verwendet wird, können mehr als ein Transceiver das gleiche Transportobjekt teilen.
- {{domxref("RTCRtpSender.transform")}}
  - : Ein {{domxref("RTCRtpScriptTransform")}}<!-- or {{domxref("SFrameTransform")}} --> wird verwendet, um einen Transformationsstrom ({{domxref("TransformStream")}}), der in einem Worker-Thread ausgeführt wird, in die Sender-Pipeline einzufügen, sodass Stream-Transformationen auf kodierte Video- und Audio-Frames angewendet werden können, nachdem sie von einem Codec ausgegeben und bevor sie gesendet werden.

### Veraltete Eigenschaften

- `rtcpTransport` {{deprecated_inline}}
  - : Diese Eigenschaft wurde entfernt; die RTP- und RTCP-Transporte wurden in einem einzigen Transport kombiniert. Verwenden Sie stattdessen die {{domxref("RTCRtpSender.transport", "transport")}}-Eigenschaft.

## Statische Methoden

- {{domxref("RTCRtpSender.getCapabilities_static", "RTCRtpSender.getCapabilities()")}}
  - : Gibt ein Objekt zurück, das die Systemfähigkeiten für das Senden einer bestimmten Art von Mediendaten beschreibt.

## Instanz-Methoden

- {{domxref("RTCRtpSender.getParameters()")}}
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration für die Kodierung und Übertragung von Medien auf dem `track` beschreibt.
- {{domxref("RTCRtpSender.getStats()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("RTCStatsReport")}} erfüllt wird und statistische Daten für alle ausgehenden Streams liefert, die mit diesem `RTCRtpSender` gesendet werden.
- {{domxref("RTCRtpSender.setParameters()")}}
  - : Wendet Änderungen an Parametern an, die konfigurieren, wie der `track` kodiert und an den entfernten Peer übertragen wird.
- {{domxref("RTCRtpSender.setStreams()")}}
  - : Legt die mit dem vom Sender übertragenen {{domxref("RTCRtpSender.track", "track")}} assoziierten {{domxref("MediaStream", "stream(s)", "", 1)}} fest.
- {{domxref("RTCRtpSender.replaceTrack()")}}
  - : Versucht, den aktuell vom `RTCRtpSender` gesendeten Track ohne erneute Verhandlung durch einen anderen Track zu ersetzen. Diese Methode kann beispielsweise verwendet werden, um zwischen der Front- und Rückkamera eines Geräts zu wechseln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebRTC API
- {{domxref("RTCPeerConnection.addTrack()")}}
- {{domxref("RTCPeerConnection.getSenders()")}}
- {{domxref("RTCRtpReceiver")}}
