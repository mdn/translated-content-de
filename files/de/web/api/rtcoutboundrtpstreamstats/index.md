---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("WebRTC")}}

Das **`RTCOutboundRtpStreamStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Metriken und Statistiken zu einem ausgehenden {{Glossary("RTP", "RTP")}}-Stream zu berichten, der von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird.

Die Statistiken können abgerufen werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) `outbound-rtp` finden.

## Instanzen-Eigenschaften

- [`active`](/de/docs/Web/API/RTCOutboundRtpStreamStats/active) {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob dieser RTP-Stream konfiguriert ist, gesendet zu werden, oder deaktiviert ist.
- [`frameHeight`](/de/docs/Web/API/RTCOutboundRtpStreamStats/frameHeight)
  - : Ein Ganzzahlwert, der die Höhe des letzten kodierten Rahmens in Pixeln angibt.
    _Nicht definiert für Audio-Streams._
- [`frameWidth`](/de/docs/Web/API/RTCOutboundRtpStreamStats/frameWidth)
  - : Ein Ganzzahlwert, der die Breite des letzten kodierten Rahmens in Pixeln angibt.
    _Nicht definiert für Audio-Streams._
- [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded)
  - : Die Anzahl der Rahmen, die bisher erfolgreich kodiert wurden, um über diesen RTP-Stream gesendet zu werden.
    _Nicht definiert für Audio-Streams._
- [`framesPerSecond`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesPerSecond)
  - : Eine Zahl, die die in der letzten Sekunde gesendeten kodierten Rahmen darstellt.
    _Nicht definiert für Audio-Streams._
- [`framesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesSent)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der über diesen RTP-Stream gesendeten kodierten Rahmen darstellt.
    _Nicht definiert für Audio-Streams._
- [`headerBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/headerBytesSent)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für diese SSRC gesendeten RTP-Header- und Padding-Bytes darstellt.
- [`keyFramesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/keyFramesEncoded) {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der Schlüsselbilder darstellt, die in diesem RTP-Medienstrom erfolgreich kodiert wurden.
    _Nicht definiert für Audio-Streams._
- [`mediaSourceId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mediaSourceId)
  - : Eine Zeichenkette, die die ID des Statistikobjekts der aktuell an den Sender dieses Streams angeschlossenen Spur darstellt.
- [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)
  - : Eine Zeichenkette, die das Paar aus Quelle und Ziel des Streams des Transceivers eindeutig identifiziert.
    Dies ist der Wert der entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser ist null, in diesem Fall ist die Statistik-Eigenschaft nicht vorhanden.
- [`nackCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/nackCount)
  - : Ein Ganzzahlwert, der die Gesamtanzahl der Negative ACKnowledgement (NACK)-Pakete angibt, die dieser `RTCRtpSender` von dem entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) erhalten hat.
    Dieser lokal berechnete Wert gibt einen Hinweis auf die Fehlerresilienz der Verbindung.
- [`qpSum`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) kodierten Rahmen enthält.
    Dieser lokal berechnete Wert gibt einen Hinweis darauf, wie stark die Daten komprimiert sind.
    _Nicht definiert für Audio-Streams._
- [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) {{experimental_inline}}
  - : Eine Karte der Gründe, warum die Auflösung oder Framerate eines Medienstroms reduziert wurde, und die Zeit, die die Qualität für jeden Grund reduziert war.
    _Nicht definiert für Audio-Streams._
- [`qualityLimitationReason`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason) {{experimental_inline}}
  - : Eine Zeichenkette, die den Grund dafür angibt, warum der Stream qualitätslimitiert ist.
    Einer von: `none`, `cpu`, `bandwidth` oder `other`.
    _Nicht definiert für Audio-Streams._
- [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId)
  - : Eine Zeichenkette, die das [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den entfernten Partner für diese gleiche SSRC bereitstellt.
    Diese ID ist stabil über mehrere Aufrufe von `getStats()`.
- [`retransmittedBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für die mit diesem Stream verbundene Quelle retransmittierten Nutzlastbytes darstellt.
- [`retransmittedPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für die mit diesem Stream verbundene Quelle retransmittierten Pakete darstellt.
- [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid)
  - : Eine Zeichenkette, die die RTP-Stream-ID für einen entsprechenden Videostream angibt.
- [`scalabilityMode`](/de/docs/Web/API/RTCOutboundRtpStreamStats/scalabilityMode) {{experimental_inline}}
  - : Eine Zeichenkette, die den Skalierbarkeitsmodus für den RTP-Stream darstellt, falls einer konfiguriert wurde.
- [`targetBitrate`](/de/docs/Web/API/RTCOutboundRtpStreamStats/targetBitrate)
  - : Eine Zahl, die die Bitrate darstellt, die der Codec des `RTCRtpSender` derzeit versucht, für den Stream zu erreichen.
- [`totalEncodeTime`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodeTime)
  - : Eine Zahl, die die Gesamtanzahl der Sekunden darstellt, die mit dem Kodieren der für diesen Stream kodierten Rahmen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verbracht wurden.
    _Nicht definiert für Audio-Streams._
- [`totalEncodedBytesTarget`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget) {{experimental_inline}}
  - : Eine kumulative Summe der _Ziel_-Rahmengrößen für alle bisher kodierten Rahmen.
    Dies wird sich wahrscheinlich von der Summe der _tatsächlichen_ Rahmengrößen unterscheiden.
    _Nicht definiert für Audio-Streams._
- [`totalPacketSendDelay`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalPacketSendDelay)
  - : Eine Zahl, die die Gesamtzeit in Sekunden darstellt, die Pakete lokal gepuffert verbracht haben, bevor sie übertragen wurden.

### Gesendete RTP-Stream-Statistiken

<!-- RTCSentRtpStreamStats -->

- [`bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/bytesSent) {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für diese SSRC gesendeten Bytes darstellt, einschließlich Retransmissionen. <!-- [RFC3550] Abschnitt 6.4.1 -->
- [`packetsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/packetsSent) {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für diese SSRC gesendeten RTP-Pakete darstellt, einschließlich Retransmissionen. <!-- [RFC3550] Abschnitt 6.4.1 -->

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/codecId) {{optional_inline}}
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCOutboundRtpStreamStats/kind)
  - : Eine Zeichenkette, die angibt, ob der mit dem Stream verbundene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder ein Videospur ist.
- [`ssrc`](/de/docs/Web/API/RTCOutboundRtpStreamStats/ssrc)
  - : Eine positive Ganzzahl, die die SSRC der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId) {{optional_inline}}
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist.

### Gemeinsame Instanzen-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Stichprobe für dieses Statistikobjekt gemacht wurde.
- [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type)
  - : Eine Zeichenkette mit dem Wert `"outbound-rtp"`, die den Typ der Statistiken angibt, die das Objekt enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
