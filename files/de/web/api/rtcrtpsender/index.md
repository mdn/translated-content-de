---
title: RTCRtpSender
slug: Web/API/RTCRtpSender
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("WebRTC")}}

Die Schnittstelle **`RTCRtpSender`** ermöglicht es, zu steuern und Informationen darüber abzurufen, wie ein bestimmter [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) kodiert und an eine entfernte Gegenstelle gesendet wird.

Mit ihr können Sie die für den zugehörigen Track verwendete Kodierung konfigurieren, Informationen über die Medienfähigkeiten des Geräts abrufen und vieles mehr. Sie können außerdem auf einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) zugreifen, mit dem sich {{Glossary("DTMF", "DTMF")}}-Codes an die entfernte Gegenstelle senden lassen. Damit wird simuliert, dass eine Person Tasten auf dem Tastenfeld eines Telefons drückt.

## Instanzeigenschaften

- [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf) {{ReadOnlyInline}}
  - : Ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), mit dem {{Glossary("DTMF", "DTMF")}}-Töne mithilfe von `telephone-event`-Payloads über die {{Glossary("RTP", "RTP")}}-Sitzung gesendet werden können, die durch das `RTCRtpSender`-Objekt repräsentiert wird. Ist der Wert `null`, unterstützt der Track und/oder die Verbindung DTMF nicht. Nur Audiotracks können DTMF unterstützen.
- [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) {{ReadOnlyInline}}
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der vom `RTCRtpSender` verarbeitet wird. Ist `track` gleich `null`, überträgt der `RTCRtpSender` nichts.
- [`RTCRtpSender.transport`](/de/docs/Web/API/RTCRtpSender/transport) {{ReadOnlyInline}}
  - : Der [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), über den der Sender die RTP- und RTCP-Pakete austauscht, die zur Verwaltung der Übertragung von Medien- und Steuerdaten verwendet werden. Dieser Wert ist `null`, bis die Transportverbindung hergestellt ist. Wenn Bündelung verwendet wird, können sich mehrere Transceiver dasselbe Transportobjekt teilen.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)<!-- or [`SFrameTransform`](/de/docs/Web/API/SFrameTransform) --> wird verwendet, um einen in einem Worker-Thread ausgeführten Transform-Stream ([`TransformStream`](/de/docs/Web/API/TransformStream)) in die Verarbeitungskette des Senders einzufügen. So können Transformationen auf kodierte Video- und Audioframes angewendet werden, nachdem diese von einem Codec ausgegeben wurden und bevor sie gesendet werden.

### Veraltete Eigenschaften

- `rtcpTransport` {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Diese Eigenschaft wurde entfernt; die RTP- und RTCP-Transporte wurden zu einem einzigen Transport zusammengeführt. Verwenden Sie stattdessen die Eigenschaft [`transport`](/de/docs/Web/API/RTCRtpSender/transport).

## Statische Methoden

- [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static)
  - : Gibt ein Objekt zurück, das die Fähigkeiten des Systems zum Senden einer bestimmten Art von Mediendaten beschreibt.

## Instanzmethoden

- [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration für die Kodierung und Übertragung von Medien auf dem `track` beschreibt.
- [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats)
  - : Gibt eine {{jsxref("Promise")}} zurück, die mit einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erfüllt wird. Dieser enthält Statistikdaten für alle ausgehenden Streams, die über diesen `RTCRtpSender` gesendet werden.
- [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)
  - : Wendet Änderungen an Parametern an, die festlegen, wie der `track` kodiert und an die entfernte Gegenstelle übertragen wird.
- [`RTCRtpSender.setStreams()`](/de/docs/Web/API/RTCRtpSender/setStreams)
  - : Legt die [Streams](/de/docs/Web/API/MediaStream) fest, die dem von diesem Sender übertragenen [`track`](/de/docs/Web/API/RTCRtpSender/track) zugeordnet sind.
- [`RTCRtpSender.replaceTrack()`](/de/docs/Web/API/RTCRtpSender/replaceTrack)
  - : Versucht, den Track, den der `RTCRtpSender` derzeit sendet, ohne erneute Aushandlung durch einen anderen Track zu ersetzen. Mit dieser Methode können Sie beispielsweise zwischen der Front- und der Rückkamera eines Geräts wechseln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebRTC API
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
- [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
