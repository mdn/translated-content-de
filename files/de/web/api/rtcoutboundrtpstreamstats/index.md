---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCOutboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Metriken und Statistiken zu einem ausgehenden {{Glossary("RTP", "RTP")}}-Stream zu melden, der von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird.

Die Statistiken können durch Iteration über den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erhalten werden, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type) von `outbound-rtp` finden.

## Instanz-Eigenschaften

- [`active`](/de/docs/Web/API/RTCOutboundRtpStreamStats/active) {{experimental_inline}}
  - : Ein Boolean, der anzeigt, ob dieser RTP-Stream zum Senden konfiguriert ist oder deaktiviert ist.
- [`frameHeight`](/de/docs/Web/API/RTCOutboundRtpStreamStats/frameHeight)
  - : Ein Ganzzahlwert, der die Höhe des letzten kodierten Frames in Pixeln angibt.
    _Nicht definiert für Audiostreams._
- [`frameWidth`](/de/docs/Web/API/RTCOutboundRtpStreamStats/frameWidth)
  - : Ein Ganzzahlwert, der die Breite des letzten kodierten Frames in Pixeln angibt.
    _Nicht definiert für Audiostreams._
- [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded)
  - : Die Anzahl der Frames, die bisher erfolgreich zum Senden auf diesem RTP-Stream kodiert wurden.
    _Nicht definiert für Audiostreams._
- [`framesPerSecond`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesPerSecond)
  - : Eine Zahl, die die im letzten Sekundenintervall gesendeten kodierten Frames darstellt.
    _Nicht definiert für Audiostreams._
- [`framesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesSent)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der auf diesem RTP-Stream gesendeten kodierten Frames darstellt.
    _Nicht definiert für Audiostreams._
- [`headerBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/headerBytesSent)
  - : Eine positive Ganzzahl, die die Gesamtzahl der gesendeten RTP-Header- und Padding-Bytes für diesen SSRC darstellt.
- [`keyFramesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/keyFramesEncoded) {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der erfolgreich in diesem RTP-Medienstream kodierten Schlüsselbilder darstellt.
    _Nicht definiert für Audiostreams._
- [`mediaSourceId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mediaSourceId)
  - : Eine Zeichenfolge, die die ID des Statistikobjekts des Tracks darstellt, der derzeit am Sender dieses Streams angehängt ist.
- [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)
  - : Eine Zeichenfolge, die das Paar aus Quelle und Ziel des Transceiver-Streams eindeutig identifiziert.
    Dies ist der Wert des entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser ist null, in diesem Fall ist die Statistik-Eigenschaft nicht vorhanden.
- [`nackCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/nackCount)
  - : Ein Ganzzahlwert, der die Gesamtanzahl der negativen Bestätigungspakete (NACK) angibt, die dieser `RTCRtpSender` vom entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) erhalten hat.
    Dieser lokal berechnete Wert gibt einen Hinweis auf die Fehlerfestigkeit der Verbindung.
- [`qpSum`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) kodierten Frame enthält.
    Dieser lokal berechnete Wert gibt einen Hinweis darauf, wie stark die Daten komprimiert sind.
    _Nicht definiert für Audiostreams._
- [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) {{experimental_inline}}
  - : Eine Zuordnung der Gründe, warum die Auflösung oder Bildrate eines Medienstreams reduziert wurde, und die Zeit, in der die Qualität aus jedem Grund reduziert wurde.
    _Nicht definiert für Audiostreams._
- [`qualityLimitationReason`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason) {{experimental_inline}}
  - : Eine Zeichenfolge, die den Grund angibt, warum der Stream qualitätsbegrenzt ist.
    Einer von: `none`, `cpu`, `bandwidth` oder `other`.
    _Nicht definiert für Audiostreams._
- [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId)
  - : Eine Zeichenfolge, die das [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den entfernten Peer für diesen gleichen SSRC bereitstellt.
    Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`retransmittedBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent)
  - : Eine positive Ganzzahl, die die Gesamtzahl der erneut gesendeten Payload-Bytes für die Quelle darstellt, die mit diesem Stream verbunden ist.
- [`retransmittedPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der erneut gesendeten Pakete für die Quelle darstellt, die mit diesem Stream verbunden ist.
- [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid)
  - : Eine Zeichenfolge, die die RTP-Stream-ID für einen entsprechenden Videostream angibt.
- [`scalabilityMode`](/de/docs/Web/API/RTCOutboundRtpStreamStats/scalabilityMode) {{experimental_inline}}
  - : Eine Zeichenfolge, die den Skalierbarkeitsmodus für den RTP-Stream darstellt, falls einer konfiguriert wurde.
- [`targetBitrate`](/de/docs/Web/API/RTCOutboundRtpStreamStats/targetBitrate)
  - : Eine Zahl, die die Bitrate darstellt, die der Codec des `RTCRtpSender` derzeit versucht, für den Stream zu erreichen.
- [`totalEncodeTime`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodeTime)
  - : Eine Zahl, die die Gesamtanzahl der Sekunden darstellt, die für das Kodieren der für diesen Stream kodierten Frames von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) aufgewendet wurden.
    _Nicht definiert für Audiostreams._
- [`totalEncodedBytesTarget`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget) {{experimental_inline}}
  - : Eine kumulative Summe der _geplanten_ Frame-Größen für alle bisher kodierten Frames.
    Dies wird wahrscheinlich von der Summe der _tatsächlichen_ Frame-Größen abweichen.
    _Nicht definiert für Audiostreams._
- [`totalPacketSendDelay`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalPacketSendDelay)
  - : Eine Zahl, die die gesamte Zeit in Sekunden darstellt, die Pakete lokal gepuffert verbracht haben, bevor sie gesendet wurden.

### Statistiken über gesendete RTP-Streams

<!-- RTCSentRtpStreamStats -->

- [`bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/bytesSent) {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für diesen SSRC gesendeten Bytes angibt, einschließlich erneuter Sendungen. <!-- [RFC3550] section 6.4.1 -->
- [`packetsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/packetsSent) {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für diesen SSRC gesendeten RTP-Pakete angibt, einschließlich erneuter Sendungen. <!-- [RFC3550] section 6.4.1 -->

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/codecId) {{optional_inline}}
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCOutboundRtpStreamStats/kind)
  - : Eine Zeichenfolge, die angibt, ob der mit dem Stream verbundene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCOutboundRtpStreamStats/ssrc)
  - : Eine positive Ganzzahl, die den SSRC der in diesem Stream enthaltenen RTP-Pakete identifiziert.
- [`transportId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId) {{optional_inline}}
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id)
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Uhrzeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type)
  - : Eine Zeichenfolge mit dem Wert `"outbound-rtp"`, die den Typ der Statistiken angibt, die das Objekt enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
