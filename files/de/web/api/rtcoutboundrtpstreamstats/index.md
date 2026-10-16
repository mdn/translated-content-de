---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
l10n:
  sourceCommit: f1d14dd138940aa2f0b02eec1da7713c66aca2d6
---

{{APIRef("WebRTC")}}

Das **`RTCOutboundRtpStreamStats`**-Dictionary der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Metriken und Statistiken zu einem ausgehenden {{Glossary("RTP", "RTP")}}-Stream bereitzustellen, der von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird.

Sie können die Statistiken abrufen, indem Sie den von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type) `outbound-rtp` finden.

## Instanzeigenschaften

- [`active`](/de/docs/Web/API/RTCOutboundRtpStreamStats/active) {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob dieser RTP-Stream für das Senden konfiguriert oder deaktiviert ist.
- [`frameHeight`](/de/docs/Web/API/RTCOutboundRtpStreamStats/frameHeight)
  - : Eine Ganzzahl, die die Höhe des zuletzt codierten Frames in Pixeln angibt.
    _Für Audio-Streams nicht definiert._
- [`frameWidth`](/de/docs/Web/API/RTCOutboundRtpStreamStats/frameWidth)
  - : Eine Ganzzahl, die die Breite des zuletzt codierten Frames in Pixeln angibt.
    _Für Audio-Streams nicht definiert._
- [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded)
  - : Die Anzahl der Frames, die bisher erfolgreich für den Versand über diesen RTP-Stream codiert wurden.
    _Für Audio-Streams nicht definiert._
- [`framesPerSecond`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesPerSecond)
  - : Eine Zahl, die angibt, wie viele codierte Frames in der letzten Sekunde gesendet wurden.
    _Für Audio-Streams nicht definiert._
- [`framesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesSent)
  - : Eine positive Ganzzahl, die die Gesamtzahl der über diesen RTP-Stream gesendeten codierten Frames angibt.
    _Für Audio-Streams nicht definiert._
- [`headerBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/headerBytesSent)
  - : Eine positive Ganzzahl, die die Gesamtzahl der für diese SSRC gesendeten RTP-Header- und Padding-Bytes angibt.
- [`keyFramesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/keyFramesEncoded) {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der in diesem RTP-Medienstream erfolgreich codierten Keyframes angibt.
    _Für Audio-Streams nicht definiert._
- [`mediaSourceId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mediaSourceId)
  - : Ein String, der die ID des Statistikobjekts des Tracks angibt, der derzeit dem Sender dieses Streams zugeordnet ist.
- [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)
  - : Ein String, der die Zuordnung zwischen Quelle und Ziel des Streams des Transceivers eindeutig identifiziert.
    Dies ist der Wert der entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), sofern dieser nicht null ist. Andernfalls ist die Statistikeigenschaft nicht vorhanden.
- [`nackCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/nackCount)
  - : Eine Ganzzahl, die die Gesamtzahl der Negative-ACKnowledgement-Pakete (NACK) angibt, die dieser `RTCRtpSender` vom entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) empfangen hat.
    Dieser lokal berechnete Wert gibt einen Hinweis auf die Fehlertoleranz der Verbindung.
- [`qpSum`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte aller von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) codierten Frames enthält.
    Dieser lokal berechnete Wert gibt einen Hinweis darauf, wie stark die Daten komprimiert sind.
    _Für Audio-Streams nicht definiert._
- [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) {{experimental_inline}}
  - : Eine Zuordnung der Gründe, aus denen die Auflösung oder Framerate eines Medienstreams reduziert wurde, zu der jeweiligen Dauer der Qualitätsminderung.
    _Für Audio-Streams nicht definiert._
- [`qualityLimitationReason`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason) {{experimental_inline}}
  - : Ein String, der den Grund angibt, aus dem die Qualität des Streams begrenzt wird.
    Einer der Werte `none`, `cpu`, `bandwidth` oder `other`.
    _Für Audio-Streams nicht definiert._
- [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId)
  - : Ein String, der das [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Objekt identifiziert, das Statistiken für die entfernte Gegenstelle zu derselben SSRC bereitstellt.
    Diese ID bleibt über mehrere Aufrufe von `getStats()` hinweg gleich.
- [`retransmittedBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent)
  - : Eine positive Ganzzahl, die die Gesamtzahl der erneut übertragenen Nutzdaten-Bytes für die diesem Stream zugeordnete Quelle angibt.
- [`retransmittedPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent)
  - : Eine positive Ganzzahl, die die Gesamtzahl der erneut übertragenen Pakete für die diesem Stream zugeordnete Quelle angibt.
- [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid)
  - : Ein String, der die RTP-Stream-ID für einen entsprechenden Videostream angibt.
- [`scalabilityMode`](/de/docs/Web/API/RTCOutboundRtpStreamStats/scalabilityMode) {{experimental_inline}}
  - : Ein String, der den Skalierbarkeitsmodus des RTP-Streams angibt, sofern einer konfiguriert wurde.
- [`targetBitrate`](/de/docs/Web/API/RTCOutboundRtpStreamStats/targetBitrate)
  - : Eine Zahl, die die Bitrate angibt, die der Codec des `RTCRtpSender` derzeit für den Stream zu erreichen versucht.
- [`totalEncodeTime`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodeTime)
  - : Eine Zahl, die die gesamte Zeit in Sekunden angibt, die für die Codierung der von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) für den Stream codierten Frames aufgewendet wurde.
    _Für Audio-Streams nicht definiert._
- [`totalEncodedBytesTarget`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget) {{deprecated_inline}} {{non-standard_inline}}
  - : Die kumulierte Summe der _angestrebten_ Frame-Größen aller bisher codierten Frames.
    Sie wird sich wahrscheinlich von der Summe der _tatsächlichen_ Frame-Größen unterscheiden.
    _Für Audio-Streams nicht definiert._
- [`totalPacketSendDelay`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalPacketSendDelay)
  - : Eine Zahl, die die gesamte Zeit in Sekunden angibt, die Pakete vor ihrer Übertragung im lokalen Puffer verbracht haben.

### Statistiken für gesendete RTP-Streams

<!-- RTCSentRtpStreamStats -->

- [`bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/bytesSent) {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der für diese SSRC gesendeten Bytes einschließlich erneuter Übertragungen angibt. <!-- [RFC3550] section 6.4.1 -->
- [`packetsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/packetsSent) {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der für diese SSRC gesendeten RTP-Pakete einschließlich erneuter Übertragungen angibt. <!-- [RFC3550] section 6.4.1 -->

### Allgemeine Statistiken zu RTP-Streams

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/codecId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, aus dem das diesem {{Glossary("RTP", "RTP")}}-Stream zugeordnete [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt erzeugt wurde.
- [`kind`](/de/docs/Web/API/RTCOutboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der dem Stream zugeordnete [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCOutboundRtpStreamStats/ssrc)
  - : Eine positive Ganzzahl, die die SSRC der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, aus dem das diesem RTP-Stream zugeordnete [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt erzeugt wurde.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id)
  - : Ein String, der das überwachte Objekt, für das diese Statistiken erstellt werden, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das angibt, wann die Stichprobe für dieses Statistikobjekt erfasst wurde.
- [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"outbound-rtp"`, der die Art der im Objekt enthaltenen Statistiken angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
