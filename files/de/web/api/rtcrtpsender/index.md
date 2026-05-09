---
title: RTCRtpSender
slug: Web/API/RTCRtpSender
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("WebRTC")}}

Das **`RTCRtpSender`**-Interface bietet die Möglichkeit, Details über die Enkodierung und den Versand eines bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) an einen Remote-Peer zu steuern und abzurufen.

Damit können Sie die für den entsprechenden Track verwendete Enkodierung konfigurieren, Informationen über die Medienfähigkeiten des Geräts abrufen und vieles mehr. Sie können auch auf einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) zugreifen, der verwendet werden kann, um {{Glossary("DTMF", "DTMF")}}-Codes (um zu simulieren, dass ein Benutzer Tasten auf der Wähltastatur eines Telefons drückt) an den Remote-Peer zu senden.

## Instanzeigenschaften

- [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf) {{ReadOnlyInline}}
  - : Ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der verwendet werden kann, um {{Glossary("DTMF", "DTMF")}}-Töne mit `telephone-event`-Nutzlasten in der vom `RTCRtpSender`-Objekt repräsentierten {{Glossary("RTP", "RTP")}}-Sitzung zu senden. Wenn `null`, unterstützt der Track und/oder die Verbindung kein DTMF. Nur Audiotracks können DTMF unterstützen.
- [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) {{ReadOnlyInline}}
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der vom `RTCRtpSender` behandelt wird. Wenn `track` `null` ist, überträgt der `RTCRtpSender` nichts.
- [`RTCRtpSender.transport`](/de/docs/Web/API/RTCRtpSender/transport) {{ReadOnlyInline}}
  - : Der [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), über den der Sender die RTP- und RTCP-Pakete austauscht, die zur Verwaltung der Medien- und Steuerdatentransmission verwendet werden. Dieser Wert ist `null`, bis der Transport etabliert ist. Wenn Bündelung verwendet wird, können mehr als ein Transceiver dasselbe Transportobjekt teilen.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)<!-- oder [`SFrameTransform`](/de/docs/Web/API/SFrameTransform) --> wird verwendet, um einen Transformationsstrom ([`TransformStream`](/de/docs/Web/API/TransformStream)), der in einem Arbeitsthread ausgeführt wird, in die Senderpipeline einzufügen. Dadurch können Stream-Transformationen auf kodierte Video- und Audio-Frames angewendet werden, nachdem sie von einem Codec ausgegeben und bevor sie gesendet werden.

### Veraltete Eigenschaften

- `rtcpTransport` {{deprecated_inline}} {{non-standard_inline}}
  - : Diese Eigenschaft wurde entfernt; die RTP- und RTCP-Transporte wurden in einen einzigen Transport kombiniert. Verwenden Sie stattdessen die [`transport`](/de/docs/Web/API/RTCRtpSender/transport)-Eigenschaft.

## Statische Methoden

- [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static)
  - : Gibt ein Objekt zurück, das die Fähigkeiten des Systems zum Senden einer bestimmten Art von Mediendaten beschreibt.

## Instanzmethoden

- [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration für die Enkodierung und Übertragung von Medien auf dem `track` beschreibt.
- [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erfüllt wird, das Statistikdaten für alle ausgehenden Streams bereitstellt, die mit diesem `RTCRtpSender` gesendet werden.
- [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)
  - : Wendet Änderungen an Parametern an, die konfigurieren, wie der `track` enkodiert und an den Remote-Peer gesendet wird.
- [`RTCRtpSender.setStreams()`](/de/docs/Web/API/RTCRtpSender/setStreams)
  - : Legt den/die [Stream(s)](/de/docs/Web/API/MediaStream) fest, der/die mit dem [`track`](/de/docs/Web/API/RTCRtpSender/track) assoziiert ist/sind, der von diesem Sender übertragen wird.
- [`RTCRtpSender.replaceTrack()`](/de/docs/Web/API/RTCRtpSender/replaceTrack)
  - : Versucht, den derzeit vom `RTCRtpSender` gesendeten Track durch einen anderen Track zu ersetzen, ohne eine Neuverhandlung durchzuführen. Diese Methode kann zum Beispiel verwendet werden, um zwischen der Front- und Rückkamera eines Geräts zu wechseln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebRTC API
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
- [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
