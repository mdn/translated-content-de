---
title: RTCRtpSender
slug: Web/API/RTCRtpSender
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Das **`RTCRtpSender`**-Interface bietet die Möglichkeit, die Kodierung und Übertragung eines bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu einem entfernten Peer zu steuern und Details darüber zu erhalten.

Damit können Sie die für den entsprechenden Track verwendete Kodierung konfigurieren, Informationen über die Medienfähigkeiten des Geräts erhalten und so weiter. Sie können auch auf einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) zugreifen, der verwendet werden kann, um [DTMF](/de/docs/Glossary/DTMF)-Codes (um das Drücken von Tasten auf dem Wähltastenfeld eines Telefons zu simulieren) an den entfernten Peer zu senden.

## Instanz-Eigenschaften

- [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf) {{ReadOnlyInline}}
  - : Ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der verwendet werden kann, um [DTMF](/de/docs/Glossary/DTMF)-Töne mit `telephone-event`-Payloads in der [RTP](/de/docs/Glossary/RTP)-Sitzung, die durch das `RTCRtpSender`-Objekt dargestellt wird, zu senden. Wenn `null`, unterstützt der Track und/oder die Verbindung kein DTMF. Nur Audio-Tracks können DTMF unterstützen.
- [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) {{ReadOnlyInline}}
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der vom `RTCRtpSender` verarbeitet wird. Wenn `track` `null` ist, überträgt der `RTCRtpSender` nichts.
- [`RTCRtpSender.transport`](/de/docs/Web/API/RTCRtpSender/transport) {{ReadOnlyInline}}
  - : Der [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), über den der Sender die RTP- und RTCP-Pakete austauscht, die zur Verwaltung der Übertragung von Medien- und Steuerdaten verwendet werden. Dieser Wert ist `null`, bis der Transport etabliert ist. Wenn Bündelung verwendet wird, können mehrere Transceiver das gleiche Transport-Objekt gemeinsam nutzen.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)<!-- oder [`SFrameTransform`](/de/docs/Web/API/SFrameTransform) --> wird verwendet, um einen Transformationsstream ([`TransformStream`](/de/docs/Web/API/TransformStream)) in einem Worker-Thread in die Sender-Pipeline einzufügen, sodass Stream-Transformationen auf kodierte Video- und Audio-Frames angewendet werden können, nachdem sie von einem Codec ausgegeben wurden und bevor sie gesendet werden.

### Veraltete Eigenschaften

- `rtcpTransport` {{deprecated_inline}}
  - : Diese Eigenschaft wurde entfernt; die RTP- und RTCP-Transporte wurden in einem einzigen Transport zusammengefasst. Verwenden Sie stattdessen die [`transport`](/de/docs/Web/API/RTCRtpSender/transport)-Eigenschaft.

## Statische Methoden

- [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static)
  - : Gibt ein Objekt zurück, das die Fähigkeiten des Systems für das Senden eines bestimmten Medientyps beschreibt.

## Instanz-Methoden

- [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration für die Kodierung und Übertragung von Medien auf dem `track` beschreibt.
- [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erfüllt wird, das Statistikdaten für alle ausgehenden Streams bereitstellt, die mit diesem `RTCRtpSender` gesendet werden.
- [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)
  - : Wendet Änderungen an den Parametern an, die konfigurieren, wie der `track` kodiert und an den entfernten Peer gesendet wird.
- [`RTCRtpSender.setStreams()`](/de/docs/Web/API/RTCRtpSender/setStreams)
  - : Setzt die {{domxref("MediaStream", "Stream(s)", "", 1)}}, die mit dem [`track`](/de/docs/Web/API/RTCRtpSender/track) verknüpft sind, der von diesem Sender übertragen wird.
- [`RTCRtpSender.replaceTrack()`](/de/docs/Web/API/RTCRtpSender/replaceTrack)
  - : Versucht, den derzeit vom `RTCRtpSender` gesendeten Track durch einen anderen Track zu ersetzen, ohne eine Neuverhandlung durchzuführen. Diese Methode kann beispielsweise verwendet werden, um zwischen den nach vorne und hinten gerichteten Kameras eines Geräts zu wechseln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebRTC API
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
- [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
