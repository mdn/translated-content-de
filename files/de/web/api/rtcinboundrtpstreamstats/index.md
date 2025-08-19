---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu melden, die sich auf das Empfangsende eines RTP-Streams am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beziehen.

Die Statistiken können durch Iteration des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erhalten werden, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type) von `inbound-rtp` finden.

## Instanzeigenschaften

- [`audioLevel`](/de/docs/Web/API/RTCInboundRtpStreamStats/audioLevel)
  - : Eine Zahl, die den Audiopegel der empfangenen Spur angibt.
    _Nicht definiert für Videostreams._
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Eine positive Ganzzahl, die die Gesamtzahl der bisher für diese Medienquelle empfangenen Bytes anzeigt.
- [`concealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealedSamples)
  - : Eine positive Ganzzahl, die die Anzahl der verdeckten Samples angibt, da sie sich in Paketen befanden, die verloren gingen oder zu spät ankamen, um abgespielt zu werden.
    _Nicht definiert für Videostreams._
- [`concealmentEvents`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealmentEvents)
  - : Eine positive Ganzzahl, die die Anzahl der Verschleierungsereignisse angibt, bei denen ein einzelnes Ereignis für alle aufeinanderfolgenden verdeckten Samples nach einem nicht verdeckten Sample gezählt wird.
    _Nicht definiert für Videostreams._
- [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp) {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die geschätzte Wiedergabezeit des Tracks dieses Empfängers angibt.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Ein positiver ganzzahliger Wert, der die Anzahl der empfangenen RTP-Forward-Error-Correction-(FEC)-Pakete für diese Quelle angibt, bei denen die Fehlerkorrektur-Payload verworfen wurde.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Ein positiver ganzzahliger Wert, der die Gesamtzahl der empfangenen Forward-Error-Correction-(FEC)-Pakete für diese Quelle angibt.
- [`frameHeight`](/de/docs/Web/API/RTCInboundRtpStreamStats/frameHeight)
  - : Eine positive Ganzzahl, die die Höhe des letzten decodierten Frames in Pixeln angibt.
    _Nicht definiert für Audiostreams und vor der Dekodierung des ersten Frames._
- [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets) {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der korrekt decodierten Frames für diesen RTP-Stream angibt, die aus mehr als einem RTP-Paket bestehen.
    _Nicht definiert für Audiostreams._
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein langer ganzzahliger Wert, der die Gesamtanzahl der Videoframes angibt, die bis jetzt für diese Medienquelle korrekt decodiert wurden. Dies ist die Anzahl der Frames, die gerendert worden wären, wenn keine verloren gegangen wären.
    _Nicht definiert für Audiostreams._
- [`framesPerSecond`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesPerSecond)
  - : Eine positive Ganzzahl, die die Anzahl der in der letzten Sekunde decodierten Frames angibt.
    _Nicht definiert für Audiostreams._
- [`framesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesReceived)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der vollständigen Frames angibt, die auf diesem RTP-Stream empfangen wurden.
    _Nicht definiert für Audiostreams._
- [`frameWidth`](/de/docs/Web/API/RTCInboundRtpStreamStats/frameWidth)
  - : Eine positive Ganzzahl, die die Breite des letzten decodierten Frames in Pixeln angibt.
    _Nicht definiert für Audiostreams und vor der Dekodierung des ersten Frames._
- [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount) {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der Videounterbrechungen angibt, die dieser Empfänger erfahren hat.
    _Nicht definiert für Audiostreams._
- [`headerBytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/headerBytesReceived)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der empfangenen RTP-Header- und Auffüllbytes für diese SSRC angibt, einschließlich Übertragungen.
- [`insertedSamplesForDeceleration`](/de/docs/Web/API/RTCInboundRtpStreamStats/insertedSamplesForDeceleration)
  - : Eine positive Ganzzahl, die die Anzahl der hinzugefügten Samples angibt, um die Wiedergabe aus dem Jitter-Puffer zu verlangsamen.
    _Nicht definiert für Videostreams._
- [`jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferDelay)
  - : Eine Zahl, die die akkumulierte Zeit angibt, die alle Audiosamples und vollständige Videoframes im Jitter-Puffer verbracht haben, in Sekunden.
- [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount)
  - : Eine positive Ganzzahl, die die Gesamtzahl der Audiosamples und/oder Videoframes angibt, die aus dem Jitter-Puffer herausgekommen sind.
- [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay)
  - : Eine Zahl, die die minimale Verzögerung angibt, die nur basierend auf den Netzwerkeigenschaften wie Jitter und Paketverlust erreicht werden könnte.
- [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay)
  - : Eine Zahl, die die akkumulierte Ziel-Jitter-Puffer-Verzögerung angibt.
- [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der erfolgreich decodierten Keyframes für diesen RTP-Medienstream angibt.
    _Nicht definiert für Audiostreams._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp) Eigenschaft hingegen gibt die Zeit an, zu der das Statistikobjekt erstellt wurde.
- [`mid`](/de/docs/Web/API/RTCInboundRtpStreamStats/mid)
  - : Eine Zeichenkette, die die Paarung von Quelle und Ziel des Streams des Transceivers eindeutig identifiziert.
    Dies ist der Wert der entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser ist null, in diesem Fall ist die Statistik-Eigenschaft nicht vorhanden.
- [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der RTP-Pakete angibt, die aufgrund von später oder zu früh erfolgter Ankunft durch den Jitter-Puffer verworfen wurden.
- [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount) {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Anzahl der Video-Pausen angibt, die dieser Empfänger erlebt hat.
    _Nicht definiert für Audiostreams._
- [`playoutId`](/de/docs/Web/API/RTCInboundRtpStreamStats/playoutId) {{experimental_inline}}
  - : Eine Zeichenkette, die die entsprechende [`RTCAudioPlayoutStats`](/de/docs/Web/API/RTCAudioPlayoutStats) für einen Audiostream identifiziert.
    _Nicht definiert für Videostreams._
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Eine Zeichenkette, die das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) Objekt identifiziert, das Statistiken für den entfernten Peer für diese gleiche SSRC bereitstellt.
    Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`removedSamplesForAcceleration`](/de/docs/Web/API/RTCInboundRtpStreamStats/removedSamplesForAcceleration)
  - : Eine positive Ganzzahl, die die Anzahl der entfernten Samples angibt, um die Wiedergabe aus dem Jitter-Puffer zu beschleunigen.
    _Nicht definiert für Videostreams._
- [`silentConcealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/silentConcealedSamples)
  - : Eine positive Ganzzahl, die die Anzahl der stummgeschalteten, verdeckten Samples angibt.
    _Nicht definiert für Videostreams._
- [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime) {{experimental_inline}}
  - : Eine Zahl, die die gesamte Zeit angibt, die zum Zusammenstellen von erfolgreich decodierten Videoframes benötigt wurde, die in mehreren RTP-Paketen transportiert wurden, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalAudioEnergy`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAudioEnergy)
  - : Eine Zahl, die die gesamte Audioenergie der empfangenen Spur über die Lebensdauer des Statistikobjekts darstellt.
    _Nicht definiert für Videostreams._
- [`totalDecodeTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalDecodeTime)
  - : Eine Zahl, die die gesamte Zeit angibt, die zum Decodieren von Frames in diesem Stream benötigt wurde, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) {{experimental_inline}}
  - : Eine positive Zahl, die die gesamte Zeit angibt, die der Stream eingefroren war, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalInterFrameDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalInterFrameDelay)
  - : Eine positive Zahl, die die gesamte Zeit angibt, die zwischen aufeinanderfolgend gerenderten Frames verbracht wurde, unmittelbar nachdem ein Frame gerendert wurde.
    _Nicht definiert für Audiostreams._
- [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) {{experimental_inline}}
  - : Eine positive Zahl, die die gesamte Zeit angibt, die der Stream mit pausiertem Video verbracht hat, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalProcessingDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalProcessingDelay)
  - : Eine positive Zahl, die die gesamte Zeit angibt, die mit der Verarbeitung von Audio- oder Videosamples verbracht wurde, in Sekunden.
- [`totalSamplesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesDuration)
  - : Eine positive Zahl, die die Gesamtdauer aller empfangenen Samples in Sekunden angibt.
    _Nicht definiert für Videostreams._
- [`totalSamplesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesReceived)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der auf diesem Stream empfangenen Samples angibt.
    _Nicht definiert für Videostreams._
- [`totalSquaredInterFrameDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSquaredInterFrameDelay)
  - : Eine positive Zahl, die die Summe der Quadrate der Inter-Frame-Verzögerungen zwischen aufeinanderfolgend gerenderten Frames angibt, unmittelbar nachdem ein Frame gerendert wurde.
    _Nicht definiert für Audiostreams._
- [`trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackIdentifier)
  - : Eine Zeichenkette, die den [`id`](/de/docs/Web/API/MediaStreamTrack/id) Wert des `MediaStreamTrack` bereitstellt, der mit dem einkommenden Stream verbunden ist.

### Nur lokal gemessene Werte

Diese Eigenschaften werden lokal berechnet und sind nur für das Gerät verfügbar, das den Medienstream empfängt.
Ihr Hauptzweck ist die Untersuchung der Fehlerresistenz der Verbindung, da sie Informationen zu verlorenen Paketen, verlorenen Frames und zur Kompression der Daten bereitstellen.

- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Eine Zahl, die angibt, wie oft der Empfänger den Sender benachrichtigt hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem ein Negative ACKnowledgement (NACK, auch "Generic NACK" genannt) Paket an den Sender gesendet wurde. Dieser Wert ist nur für den Empfänger verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Eine positive Ganzzahl, die die Summe der QP-Werte für jedes bisher von diesem RTP-Empfänger decodierte Frame auf der durch dieses Statistikobjekt beschriebenen Videospur bereitstellt.
    _Nur gültig für Videostreams._

### Statistiken, die beim Empfänger eines RTP-Streams gemessen werden

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am Empfangsende eines RTP-Streams gemessen, unabhängig davon, ob es sich um ein lokales oder entferntes Ende handelt.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtanzahl der empfangenen RTP-Pakete für diese [synchronisierende Quelle (SSRC)](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc), einschließlich Übertragungen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtanzahl der verlorenen RTP-Pakete für diese [synchronisierende Quelle (SSRC)](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc).
    Beachten Sie, dass dies negativ sein kann, da mehr Pakete empfangen werden können, als der Empfänger erwartet.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paketjitter für diese [synchronisierende Quelle (SSRC)](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc), gemessen in Sekunden.

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das überprüft wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) Objekt zu erstellen, das mit diesem {{Glossary("RTP", "RTP")}} Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Eine Zeichenkette, die angibt, ob der mit dem Stream verbundene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Die 32-Bit-Ganzzahl, die die Quelle der RTP-Pakete identifiziert, die dieses Objekt bereitstellt.
    Dieser Wert wird gemäß der {{RFC(3550)}} Spezifikation generiert.
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das überprüft wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Objekt zu erstellen, das mit diesem RTP-Stream verbunden ist.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCInboundRtpStreamStats/id)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erstellen.
- [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type)
  - : Eine Zeichenkette mit dem Wert `"inbound-rtp"`, die angibt, welche Art von Statistiken das Objekt enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
