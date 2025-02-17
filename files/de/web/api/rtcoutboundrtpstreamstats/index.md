---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
l10n:
  sourceCommit: 7f29fefe27ee8362a8b5f36255f942a2358cc8f8
---

{{APIRef("WebRTC")}}

Das **`RTCOutboundRtpStreamStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Metriken und Statistiken im Zusammenhang mit einem ausgehenden {{Glossary("RTP", "RTP")}}-Stream zu berichten, der von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird.

Die Statistiken können durch Iteration über den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) zurückgegeben wird, abgerufen werden, bis Sie einen Bericht mit dem [`type`](#type) `outbound-rtp` finden.

## Instanz-Eigenschaften

- [`active`](/de/docs/Web/API/RTCOutboundRtpStreamStats/active) {{experimental_inline}}
  - : Ein Boolean-Wert, der angibt, ob dieser RTP-Stream konfiguriert ist, gesendet zu werden, oder ob er deaktiviert ist.
- [`frameHeight`](/de/docs/Web/API/RTCOutboundRtpStreamStats/frameHeight)
  - : Ein Integer, der die Höhe des letzten codierten Frames in Pixeln angibt.
    _Nicht definiert für Audio-Streams._
- [`frameWidth`](/de/docs/Web/API/RTCOutboundRtpStreamStats/frameWidth)
  - : Ein Integer, der die Breite des letzten codierten Frames in Pixeln angibt.
    _Nicht definiert für Audio-Streams._
- [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded)
  - : Die Anzahl der Frames, die bisher erfolgreich für diesen RTP-Stream codiert wurden.
    _Nicht definiert für Audio-Streams._
- [`framesPerSecond`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesPerSecond)
  - : Eine Zahl, die die in der letzten Sekunde gesendeten codierten Frames darstellt.
    _Nicht definiert für Audio-Streams._
- [`framesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesSent)
  - : Eine positive ganze Zahl, die die Gesamtanzahl der auf diesem RTP-Stream gesendeten codierten Frames darstellt.
    _Nicht definiert für Audio-Streams._
- [`headerBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/headerBytesSent)
  - : Eine positive ganze Zahl, die die Anzahl der gesendeten RTP-Header- und Padding-Bytes für diesen SSRC darstellt.
- [`keyFramesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/keyFramesEncoded) {{experimental_inline}}
  - : Eine positive ganze Zahl, die die Gesamtanzahl der erfolgreich in diesem RTP-Medienstream codierten Schlüsselbilder darstellt.
    _Nicht definiert für Audio-Streams._
- [`mediaSourceId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mediaSourceId)
  - : Ein String, der die ID des Statistik-Objekts der Spur darstellt, die derzeit an den Sender dieses Streams angehängt ist.
- [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)
  - : Ein String, der die Zuordnung von Quelle und Ziel des Streams des Transceivers eindeutig identifiziert.
    Dies ist der Wert des entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser ist null, in welchem Fall die Statistik-Eigenschaft nicht vorhanden ist.
- [`nackCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/nackCount)
  - : Ein Integer-Wert, der die Gesamtanzahl der Negative ACKnowledgement (NACK)-Pakete angibt, die dieser `RTCRtpSender` vom entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) erhalten hat.
    Dieser lokal berechnete Wert gibt einen Hinweis auf die Fehlerresistenz der Verbindung.
- [`qpSum`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jedes von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) codierte Frame enthält.
    Dieser lokal berechnete Wert gibt einen Hinweis darauf, wie stark die Daten komprimiert sind.
    _Nicht definiert für Audio-Streams._
- [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) {{experimental_inline}}
  - : Eine Map mit den Gründen, warum die Auflösung oder Bildrate eines Medienstreams reduziert wurde, und der Zeit, für die die Qualität aus jedem Grund reduziert wurde.
    _Nicht definiert für Audio-Streams._
- [`qualityLimitationReason`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason) {{experimental_inline}}
  - : Ein String, der den Grund angibt, warum der Stream qualitätsbegrenzt ist.
    Einer von: `none`, `cpu`, `bandwidth` oder `other`.
    _Nicht definiert für Audio-Streams._
- [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId)
  - : Ein String, der das [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den entfernten Peer für diesen SSRC bereitstellt.
    Diese ID bleibt über mehrere Aufrufe von `getStats()` stabil.
- [`retransmittedBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent)
  - : Eine positive ganze Zahl, die die Gesamtzahl der erneut gesendeten Nutzlastbytes für die Quelle darstellt, die mit diesem Stream verknüpft ist.
- [`retransmittedPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent)
  - : Eine positive ganze Zahl, die die Gesamtanzahl der erneut gesendeten Pakete für die Quelle darstellt, die mit diesem Stream verknüpft ist.
- [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid)
  - : Ein String, der die RTP-Stream-ID für einen entsprechenden Videostream angibt.
- [`scalabilityMode`](/de/docs/Web/API/RTCOutboundRtpStreamStats/scalabilityMode) {{experimental_inline}}
  - : Ein String, der den Skalierbarkeitsmodus für den RTP-Stream darstellt, falls einer konfiguriert wurde.
- [`targetBitrate`](/de/docs/Web/API/RTCOutboundRtpStreamStats/targetBitrate)
  - : Eine Zahl, die die Bitrate darstellt, die der Codec des `RTCRtpSender` derzeit für den Stream zu erreichen versucht.
- [`totalEncodeTime`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodeTime)
  - : Eine Zahl, die die Gesamtanzahl der Sekunden angibt, die für das Codieren der für diesen Stream codierten Frames durch den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) aufgewendet wurden.
    _Nicht definiert für Audio-Streams._
- [`totalEncodedBytesTarget`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget) {{experimental_inline}}
  - : Eine kumulative Summe der _Ziel_-Frame-Größen aller bisher codierten Frames.
    Diese wird sich wahrscheinlich von der Summe der _tatsächlichen_ Frame-Größen unterscheiden.
    _Nicht definiert für Audio-Streams._
- [`totalPacketSendDelay`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalPacketSendDelay)
  - : Eine Zahl, die die Gesamtzeit in Sekunden angibt, die Pakete gepuffert waren, bevor sie lokal gesendet wurden.

### Gesendete RTP-Stream-Statistiken

<!-- RTCSentRtpStreamStats -->

- [`bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/bytesSent) {{optional_inline}}
  - : Eine positive ganze Zahl, die die Gesamtanzahl der für diesen SSRC gesendeten Bytes, einschließlich Wiederholungen, angibt. <!-- [RFC3550] section 6.4.1 -->
- [`packetsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/packetsSent) {{optional_inline}}
  - : Eine positive ganze Zahl, die die Gesamtanzahl der für diesen SSRC gesendeten RTP-Pakete, einschließlich Wiederholungen, angibt. <!-- [RFC3550] section 6.4.1 -->

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/codecId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das überprüft wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erstellen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verknüpft ist.
- [`kind`](/de/docs/Web/API/RTCOutboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der mit dem Stream verknüpfte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) eine Audio- oder Video-Spur ist.
- [`ssrc`](/de/docs/Web/API/RTCOutboundRtpStreamStats/ssrc)
  - : Eine positive ganze Zahl, die den SSRC der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das überprüft wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erstellen, das mit diesem RTP-Stream verknüpft ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistik-Objekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Statistik zu erstellen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Messung für dieses Statistik-Objekt durchgeführt wurde.
- [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"outbound-rtp"`, der den Typ der im Objekt enthaltenen Statistiken angibt.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
