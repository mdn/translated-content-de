---
title: RTCRtpSender
slug: Web/API/RTCRtpSender
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Das **`RTCRtpSender`**-Interface bietet die Möglichkeit, die Kodierung und den Versand eines bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu einem entfernten Partner zu steuern und Details darüber zu erhalten.

Mit ihm können Sie die für den entsprechenden Track verwendete Kodierung konfigurieren, Informationen über die Medienfähigkeiten des Geräts abrufen usw. Sie können zudem auf einen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) zugreifen, der verwendet werden kann, um [DTMF](/de/docs/Glossary/DTMF)-Codes (um das Drücken von Tasten auf einem Telefonwählfeld zu simulieren) an den entfernten Partner zu senden.

## Instanz-Eigenschaften

- [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf) {{ReadOnlyInline}}
  - : Ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der verwendet werden kann, um [DTMF](/de/docs/Glossary/DTMF)-Töne mit `telephone-event` Nutzlasten in der [RTP](/de/docs/Glossary/RTP)-Sitzung, die durch das `RTCRtpSender`-Objekt repräsentiert wird, zu senden. Ist der Wert `null`, unterstützen der Track und/oder die Verbindung kein DTMF. Nur Audio-Tracks können DTMF unterstützen.
- [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track) {{ReadOnlyInline}}
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der vom `RTCRtpSender` verarbeitet wird. Ist `track` `null`, sendet der `RTCRtpSender` nichts.
- [`RTCRtpSender.transport`](/de/docs/Web/API/RTCRtpSender/transport) {{ReadOnlyInline}}
  - : Der [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), über den der Sender die RTP- und RTCP-Pakete austauscht, die für die Verwaltung der Übertragung von Medien- und Steuerungsdaten verwendet werden. Dieser Wert ist `null`, bis der Transport hergestellt ist. Wenn Bundling verwendet wird, kann mehr als ein Transceiver das gleiche Transportobjekt teilen.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)<!-- oder [`SFrameTransform`](/de/docs/Web/API/SFrameTransform) --> wird verwendet, um einen Transform Stream ([`TransformStream`](/de/docs/Web/API/TransformStream)), der in einem Worker-Thread läuft, in die Sender-Pipeline einzufügen, sodass Stream-Transformationen auf codierte Video- und Audioframes angewendet werden können, nachdem sie von einem Codec ausgegeben und bevor sie gesendet werden.

### Veraltete Eigenschaften

- `rtcpTransport` {{deprecated_inline}}
  - : Diese Eigenschaft wurde entfernt; die RTP- und RTCP-Transporte wurden in einen einzigen Transport kombiniert. Verwenden Sie stattdessen die [`transport`](/de/docs/Web/API/RTCRtpSender/transport) Eigenschaft.

## Statische Methoden

- [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static)
  - : Gibt ein Objekt zurück, das die Fähigkeiten des Systems zum Senden einer bestimmten Art von Mediendaten beschreibt.

## Instanz-Methoden

- [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration für die Kodierung und Übertragung von Medien auf dem `track` beschreibt.
- [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erfüllt wird, das Statistikdaten für alle ausgehenden Streams bereitstellt, die mit diesem `RTCRtpSender` gesendet werden.
- [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)
  - : Wendet Änderungen an Parametern an, die konfigurieren, wie der `track` kodiert und an den entfernten Partner übertragen wird.
- [`RTCRtpSender.setStreams()`](/de/docs/Web/API/RTCRtpSender/setStreams)
  - : Setzt die {{domxref("MediaStream", "Stream(s)", "", 1)}} die mit dem von diesem Sender übertragenen [`track`](/de/docs/Web/API/RTCRtpSender/track) verbunden sind.
- [`RTCRtpSender.replaceTrack()`](/de/docs/Web/API/RTCRtpSender/replaceTrack)
  - : Versucht, den derzeit vom `RTCRtpSender` gesendeten Track durch einen anderen Track zu ersetzen, ohne eine Neuverhandlung durchzuführen. Diese Methode kann verwendet werden, um beispielsweise zwischen der vorderen und hinteren Kamera eines Geräts zu wechseln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebRTC API
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
- [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
