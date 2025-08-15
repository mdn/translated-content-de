---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`**-Wörterbuch des [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken im Zusammenhang mit dem empfangenden Ende eines RTP-Streams am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bereitzustellen.

Die Statistiken können durch Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, erhalten werden, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type) von `inbound-rtp` finden.

## Instanzeigenschaften

- [`audioLevel`](/de/docs/Web/API/RTCInboundRtpStreamStats/audioLevel)
  - : Eine Zahl, die den Audiopegel des empfangenen Tracks angibt.
    _Nicht definiert für Videostreams._
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der bisher für diese Medienquelle empfangenen Bytes angibt.
- [`concealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealedSamples)
  - : Eine positive Ganzzahl, die die Anzahl der Samples angibt, die versteckt werden mussten, weil sie in Paketen waren, die verloren gegangen sind oder zu spät eingetroffen sind, um abgespielt zu werden.
    _Nicht definiert für Videostreams._
- [`concealmentEvents`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealmentEvents)
  - : Eine positive Ganzzahl, die die Anzahl der Verdeckungsereignisse angibt, bei denen ein einzelnes Ereignis für alle aufeinanderfolgenden verdeckten Samples gezählt wird, die auf ein nicht verdecktes Sample folgen.
    _Nicht definiert für Videostreams._
- [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die geschätzte Wiedergabezeit des Tracks dieses Empfängers angibt.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Ein positiver Ganzzahlenwert, der die Anzahl der empfangenen RTP Forward Error Correction (FEC)-Pakete für diese Quelle angibt, deren Fehlerkorrektur-Nutzdaten verworfen wurden.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Ein positiver Ganzzahlenwert, der die Gesamtzahl der für diese Quelle empfangenen Forward Error Correction (FEC)-Pakete angibt.
- [`frameHeight`](/de/docs/Web/API/RTCInboundRtpStreamStats/frameHeight)
  - : Eine positive Ganzzahl, die die Höhe des letzten dekodierten Rahmens in Pixeln angibt.
    _Nicht definiert für Audiostreams und bevor der erste Rahmen dekodiert wird._
- [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für diesen RTP-Stream korrekt dekodierten Frames angibt, die aus mehr als einem RTP-Paket bestehen.
    _Nicht definiert für Audiostreams._
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein langer Ganzzahlenwert, der die Gesamtanzahl der Videoframes angibt, die bisher für diese Medienquelle korrekt dekodiert wurden. Dies ist die Anzahl der Frames, die gerendert worden wären, wenn keine verworfen worden wären.
    _Nicht definiert für Audiostreams._
- [`framesPerSecond`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesPerSecond)
  - : Eine positive Ganzzahl, die die Anzahl der in der letzten Sekunde dekodierten Frames angibt.
    _Nicht definiert für Audiostreams._
- [`framesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesReceived)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der vollständigen Frames angibt, die auf diesem RTP-Stream empfangen wurden.
    _Nicht definiert für Audiostreams._
- [`frameWidth`](/de/docs/Web/API/RTCInboundRtpStreamStats/frameWidth)
  - : Eine positive Ganzzahl, die die Breite des letzten dekodierten Rahmens in Pixeln angibt.
    _Nicht definiert für Audiostreams und bevor der erste Rahmen dekodiert wird._
- [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der von diesem Empfänger erlebten Video-Freezes angibt.
    _Nicht definiert für Audiostreams._
- [`headerBytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/headerBytesReceived)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der RTP-Header- und Padding-Bytes angibt, die für dieses SSRC empfangen wurden, einschließlich erneuter Übertragungen.
- [`insertedSamplesForDeceleration`](/de/docs/Web/API/RTCInboundRtpStreamStats/insertedSamplesForDeceleration)
  - : Eine positive Ganzzahl, die die Anzahl der zur Verlangsamung der Wiedergabe aus dem Jitter-Puffer eingefügten Samples angibt.
    _Nicht definiert für Videostreams._
- [`jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferDelay)
  - : Eine Zahl, die die kumulierte Zeit angibt, die alle Audiosamples und vollständigen Videoframes im Jitter-Puffer verbracht haben, in Sekunden.
- [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der Audiosamples und/oder Videoframes angibt, die aus dem Jitter-Puffer herausgekommen sind.
- [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay)
  - : Eine Zahl, die die minimale Verzögerung angibt, die nur aufgrund der Netzwerkmerkmale wie Jitter und Paketverlust erreicht werden könnte.
- [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay)
  - : Eine Zahl, die die kumulierte Zielverzögerung des Jitter-Puffers angibt.
- [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der erfolgreich dekodierten Schlüsselbilder für diesen RTP-Medienstream angibt.
    _Nicht definiert für Audiostreams._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)-Eigenschaft hingegen gibt die Zeit an, zu der das Statistikobjekt generiert wurde.
- [`mid`](/de/docs/Web/API/RTCInboundRtpStreamStats/mid)
  - : Ein String, der die Paarung von Quelle und Ziel des Transceiver-Streams eindeutig identifiziert.
    Dies ist der Wert des entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser ist null, in welchem Fall die Statistik-Eigenschaft nicht vorhanden ist.
- [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der von dem Jitter-Puffer verworfenen RTP-Pakete aufgrund von verspäteter oder vorzeitiger Ankunft angibt.
- [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount)
  - : Eine positive Ganzzahl, die die Anzahl der von diesem Empfänger erlebten Video-Unterbrechungen angibt.
    _Nicht definiert für Audiostreams._
- [`playoutId`](/de/docs/Web/API/RTCInboundRtpStreamStats/playoutId)
  - : Ein String, der das entsprechende [`RTCAudioPlayoutStats`](/de/docs/Web/API/RTCAudioPlayoutStats) für einen Audiostream identifiziert.
    _Nicht definiert für Videostreams._
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Ein String, der das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den entfernten Peer für diesen selben SSRC bereitstellt.
    Diese ID ist bei mehreren Aufrufen von `getStats()` stabil.
- [`removedSamplesForAcceleration`](/de/docs/Web/API/RTCInboundRtpStreamStats/removedSamplesForAcceleration)
  - : Eine positive Ganzzahl, die die Anzahl der Samples angibt, die entfernt wurden, um die Wiedergabe aus dem Jitter-Puffer zu beschleunigen.
    _Nicht definiert für Videostreams._
- [`silentConcealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/silentConcealedSamples)
  - : Eine positive Ganzzahl, die die Anzahl der stummen verdeckten Samples angibt.
    _Nicht definiert für Videostreams._
- [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime)
  - : Eine Zahl, die die Gesamtzeit angibt, die für das Zusammenstellen von erfolgreich dekodierten Videoframes aufgewendet wurde, die in mehreren RTP-Paketen transportiert wurden, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalAudioEnergy`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAudioEnergy)
  - : Eine Zahl, die die gesamte Audioenergie des empfangenen Tracks über die Lebensdauer des Statistikobjekts darstellt.
    _Nicht definiert für Videostreams._
- [`totalDecodeTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalDecodeTime)
  - : Eine Zahl, die die gesamte Zeit angibt, die für das Dekodieren von Frames in diesem Stream aufgewendet wurde, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration)
  - : Eine positive Zahl, die die Gesamtzeit angibt, die der Stream eingefroren verbracht hat, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalInterFrameDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalInterFrameDelay)
  - : Eine positive Zahl, die die Gesamtzeit angibt, die zwischen aufeinanderfolgenden gerenderten Frames verbracht wurde, aufgezeichnet direkt nachdem ein Frame gerendert wurde.
    _Nicht definiert für Audiostreams._
- [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration)
  - : Eine positive Zahl, die die Gesamtzeit angibt, die der Stream mit pausiertem Video verbracht hat, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalProcessingDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalProcessingDelay)
  - : Eine positive Zahl, die die Gesamtzeit angibt, die für die Verarbeitung von Audio- oder Videosamples aufgewendet wurde, in Sekunden.
- [`totalSamplesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesDuration)
  - : Eine positive Zahl, die die Gesamtdauer aller empfangenen Samples angibt, in Sekunden.
    _Nicht definiert für Videostreams._
- [`totalSamplesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesReceived)
  - : Eine positive Ganzzahl, die die Gesamtanzahl der auf diesem Stream empfangenen Samples angibt.
    _Nicht definiert für Videostreams._
- [`totalSquaredInterFrameDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSquaredInterFrameDelay)
  - : Eine positive Zahl, die die Summe der Quadrate der Inter-Frame-Verzögerungen zwischen aufeinanderfolgenden gerenderten Frames angibt, aufgezeichnet direkt nachdem ein Frame gerendert wurde.
    _Nicht definiert für Audiostreams._
- [`trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackIdentifier)
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des `MediaStreamTrack` bereitstellt, das mit dem eingehenden Stream verknüpft ist.

### Nur lokal erhobene Messgrößen

Diese Eigenschaften werden lokal berechnet und sind nur für das Gerät verfügbar, das den Medienstream empfängt.
Ihr Hauptzweck besteht darin, die Fehlertoleranz der Verbindung zu untersuchen, da sie Informationen über verlorene Pakete, verlorene Frames und die Kompressionsstärke der Daten liefern.

- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Eine Zahl, die angibt, wie oft der Empfänger den Sender benachrichtigt hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem er ein Negative ACKnowledgement (NACK, auch "generisches NACK" genannt) an den Sender zurückschickt. Dieser Wert ist nur für den Empfänger verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Eine positive Ganzzahl, die die Summe der QP-Werte für jedes bisher von diesem RTP-Empfänger dekodierte Frame auf dem von diesem Statistikobjekt beschriebenen Videotrack bereitstellt.
    _Nur gültig für Videostreams._

### Statistiken, die am Empfänger eines RTP-Streams gemessen werden

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am empfangenden Ende eines RTP-Streams gemessen, unabhängig davon, ob es lokal oder entfernt ist.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtanzahl der für diese [Synchronisationsquelle (SSRC)](#ssrc) empfangenen RTP-Pakete, einschließlich erneuter Übertragungen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtanzahl der für diese [Synchronisationsquelle (SSRC)](#ssrc) verlorenen RTP-Pakete.
    Beachten Sie, dass dieser Wert negativ sein kann, da mehr Pakete empfangen werden können, als der Empfänger erwartet.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paket-Jitter für diese [Synchronisationsquelle (SSRC)](#ssrc), gemessen in Sekunden.

### Allgemeine RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Ein String, der das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verknüpft ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der mit dem Stream verknüpfte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Die 32-Bit-Ganzzahl, die die Quelle der RTP-Pakete identifiziert, die dieses Objekt bereitstellt.
    Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation generiert.
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Ein String, der das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verknüpft ist.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind für alle WebRTC-Statistikobjekte gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCInboundRtpStreamStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"inbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
