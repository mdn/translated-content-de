---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
l10n:
  sourceCommit: 74b73e8310d2ecfecd3e4a2aa21e5b54f43d7387
---

{{APIRef("WebRTC")}}

Das **`RTCOutboundRtpStreamStats`**-Dictionary der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Metriken und Statistiken zu einem ausgehenden {{Glossary("RTP", "RTP")}}-Stream bereitzustellen, der von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird.

Die Statistiken können abgerufen werden, indem Sie den von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen, bis Sie einen Bericht finden, dessen [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type) `outbound-rtp` ist.

## Instanzeigenschaften

- [`active`](/de/docs/Web/API/RTCOutboundRtpStreamStats/active) {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob dieser RTP-Stream für das Senden konfiguriert oder deaktiviert ist.
- [`frameHeight`](/de/docs/Web/API/RTCOutboundRtpStreamStats/frameHeight)
  - : Eine Ganzzahl, die die Höhe des zuletzt codierten Frames in Pixeln angibt.
    _Für Audiostreams nicht definiert._
- [`frameWidth`](/de/docs/Web/API/RTCOutboundRtpStreamStats/frameWidth)
  - : Eine Ganzzahl, die die Breite des zuletzt codierten Frames in Pixeln angibt.
    _Für Audiostreams nicht definiert._
- [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded)
  - : Die Anzahl der Frames, die bisher erfolgreich für das Senden über diesen RTP-Stream codiert wurden.
    _Für Audiostreams nicht definiert._
- [`framesPerSecond`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesPerSecond)
  - : Eine Zahl, die angibt, wie viele codierte Frames in der letzten Sekunde gesendet wurden.
    _Für Audiostreams nicht definiert._
- [`framesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesSent)
  - : Eine positive Ganzzahl, die die Gesamtzahl der über diesen RTP-Stream gesendeten codierten Frames angibt.
    _Für Audiostreams nicht definiert._
- [`headerBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/headerBytesSent)
  - : Eine positive Ganzzahl, die die Gesamtzahl der für diese SSRC gesendeten Bytes für RTP-Header und Padding angibt.
- [`keyFramesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/keyFramesEncoded) {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der in diesem RTP-Medienstream erfolgreich codierten Keyframes angibt.
    _Für Audiostreams nicht definiert._
- [`mediaSourceId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mediaSourceId)
  - : Ein String, der die ID des Statistikobjekts des Tracks angibt, der derzeit mit dem Sender dieses Streams verbunden ist.
- [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)
  - : Ein String, der die Zuordnung von Quelle und Ziel des Streams des Transceivers eindeutig identifiziert.
    Dies ist der Wert der zugehörigen [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), sofern dieser nicht null ist. Andernfalls ist die Statistikeigenschaft nicht vorhanden.
- [`nackCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/nackCount)
  - : Eine Ganzzahl, die die Gesamtzahl der Negative-ACKnowledgement-Pakete (NACK) angibt, die dieser `RTCRtpSender` vom entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) empfangen hat.
    Dieser lokal berechnete Wert gibt einen Hinweis auf die Fehlertoleranz der Verbindung.
- [`qpSum`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) codierten Frame enthält.
    Dieser lokal berechnete Wert gibt einen Hinweis darauf, wie stark die Daten komprimiert sind.
    _Für Audiostreams nicht definiert._
- [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) {{experimental_inline}}
  - : Eine Zuordnung der Gründe, aus denen die Auflösung oder Bildrate eines Medienstreams reduziert wurde, zu der jeweiligen Dauer der Qualitätseinschränkung.
    _Für Audiostreams nicht definiert._
- [`qualityLimitationReason`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason) {{experimental_inline}}
  - : Ein String, der den Grund angibt, weshalb die Qualität des Streams eingeschränkt wird.
    Einer der Werte `none`, `cpu`, `bandwidth` oder `other`.
    _Für Audiostreams nicht definiert._
- [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId)
  - : Ein String, der das [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den entfernten Peer zu derselben SSRC bereitstellt.
    Diese ID bleibt über mehrere Aufrufe von `getStats()` hinweg gleich.
- [`retransmittedBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent)
  - : Eine positive Ganzzahl, die die Gesamtzahl der erneut übertragenen Nutzdatenbytes für die diesem Stream zugeordnete Quelle angibt.
- [`retransmittedPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent)
  - : Eine positive Ganzzahl, die die Gesamtzahl der erneut übertragenen Pakete für die diesem Stream zugeordnete Quelle angibt.
- [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid)
  - : Ein String, der die RTP-Stream-ID für einen zugehörigen Videostream angibt.
- [`scalabilityMode`](/de/docs/Web/API/RTCOutboundRtpStreamStats/scalabilityMode) {{experimental_inline}}
  - : Ein String, der den Skalierbarkeitsmodus des RTP-Streams angibt, sofern einer konfiguriert wurde.
- [`targetBitrate`](/de/docs/Web/API/RTCOutboundRtpStreamStats/targetBitrate)
  - : Eine Zahl, die die Bitrate angibt, die der Codec des `RTCRtpSender` derzeit für den Stream zu erreichen versucht.
- [`totalEncodeTime`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodeTime)
  - : Eine Zahl, die die Gesamtzeit in Sekunden angibt, die für die Codierung der von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) für den Stream codierten Frames aufgewendet wurde.
    _Für Audiostreams nicht definiert._
- [`totalEncodedBytesTarget`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget) {{deprecated_inline}}
  - : Die kumulierte Summe der _angestrebten_ Framegrößen aller bisher codierten Frames.
    Sie unterscheidet sich wahrscheinlich von der Summe der _tatsächlichen_ Framegrößen.
    _Für Audiostreams nicht definiert._
- [`totalPacketSendDelay`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalPacketSendDelay)
  - : Eine Zahl, die die Gesamtzeit in Sekunden angibt, während der Pakete vor der Übertragung lokal zwischengespeichert waren.

### Statistiken für gesendete RTP-Streams

<!-- RTCSentRtpStreamStats -->

- [`bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/bytesSent) {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der für diese SSRC gesendeten Bytes einschließlich erneuter Übertragungen angibt. <!-- [RFC3550] section 6.4.1 -->
- [`packetsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/packetsSent) {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der für diese SSRC gesendeten RTP-Pakete einschließlich erneuter Übertragungen angibt. <!-- [RFC3550] section 6.4.1 -->

### Allgemeine RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/codecId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, dessen Untersuchung das diesem {{Glossary("RTP", "RTP")}}-Stream zugeordnete [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt ergeben hat.
- [`kind`](/de/docs/Web/API/RTCOutboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der dem Stream zugeordnete [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCOutboundRtpStreamStats/ssrc)
  - : Eine positive Ganzzahl, die die SSRC der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, dessen Untersuchung das diesem RTP-Stream zugeordnete [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt ergeben hat.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id)
  - : Ein String, der das überwachte Objekt, für das diese Statistiken erstellt werden, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Messung für dieses Statistikobjekt erfolgte.
- [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"outbound-rtp"`, der den Typ der im Objekt enthaltenen Statistiken angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
