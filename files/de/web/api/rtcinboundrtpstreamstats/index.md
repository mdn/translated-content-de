---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: 5f8f306587fbe25beac0d0e9c9fbda366e372f14
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken im Zusammenhang mit dem empfangenden Ende eines RTP-Streams auf dem lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu berichten.

Die Statistiken können erhalten werden, indem Sie den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type) von `inbound-rtp` finden.

## Instanz-Eigenschaften

- [`audioLevel`](/de/docs/Web/API/RTCInboundRtpStreamStats/audioLevel)
  - : Eine Zahl, die den Audiopegel des empfangenen Tracks angibt.
    _Nicht definiert für Videostreams._
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Eine positive ganze Zahl, die die Gesamtzahl der bisher für diese Medienquelle empfangenen Bytes angibt.
- [`concealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealedSamples)
  - : Eine positive ganze Zahl, die die Anzahl der Proben angibt, die verdeckt werden mussten, da sie in Paketen waren, die verloren gingen oder zu spät ankamen, um abgespielt zu werden.
    _Nicht definiert für Videostreams._
- [`concealmentEvents`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealmentEvents)
  - : Eine positive ganze Zahl, die die Anzahl der Verdeckungsereignisse angibt, wobei ein einzelnes Ereignis für alle aufeinanderfolgenden verdeckten Proben nach einer nicht verdeckten Probe gezählt wird.
    _Nicht definiert für Videostreams._
- [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp) {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die geschätzte Wiedergabezeit des Tracks dieses Empfängers angibt.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Eine positive ganze Zahl, die die Anzahl der RTP Forward Error Correction (FEC)-Pakete angibt, die für diese Quelle empfangen wurden und für die die Fehlerkorrektur-Nutzlast verworfen wurde.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Eine positive ganze Zahl, die die Gesamtzahl der für diese Quelle empfangenen Forward Error Correction (FEC)-Pakete angibt.
- [`frameHeight`](/de/docs/Web/API/RTCInboundRtpStreamStats/frameHeight)
  - : Eine positive ganze Zahl, die die Höhe des zuletzt decodierten Rahmens in Pixeln angibt.
    _Nicht definiert für Audiostreams und bevor der erste Rahmen decodiert wird._
- [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets) {{experimental_inline}}
  - : Eine positive ganze Zahl, die die Gesamtzahl der korrekt decodierten Rahmen für diesen RTP-Stream angibt, die aus mehr als einem RTP-Paket bestehen.
    _Nicht definiert für Audiostreams._
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein ganzzahliger Wert, der die Gesamtzahl der Videorahmen angibt, die bisher für diese Medienquelle korrekt decodiert wurden. Dies ist die Anzahl der Rahmen, die gerendert worden wären, wenn keine verworfen worden wären.
    _Nicht definiert für Audiostreams._
- [`framesPerSecond`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesPerSecond)
  - : Eine positive ganze Zahl, die die Anzahl der in der letzten Sekunde decodierten Rahmen angibt.
    _Nicht definiert für Audiostreams._
- [`framesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesReceived)
  - : Eine positive ganze Zahl, die die Gesamtzahl der vollständigen auf diesem RTP-Stream empfangenen Rahmen angibt.
    _Nicht definiert für Audiostreams._
- [`frameWidth`](/de/docs/Web/API/RTCInboundRtpStreamStats/frameWidth)
  - : Eine positive ganze Zahl, die die Breite des zuletzt decodierten Rahmens in Pixeln angibt.
    _Nicht definiert für Audiostreams und bevor der erste Rahmen decodiert wird._
- [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount) {{experimental_inline}}
  - : Eine positive ganze Zahl, die die Gesamtzahl der von diesem Empfänger erlebten Video-Freezes angibt.
    _Nicht definiert für Audiostreams._
- [`headerBytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/headerBytesReceived)
  - : Eine positive ganze Zahl, die die Gesamtzahl der für diese SSRC empfangenen RTP-Header- und Füllbytes einschließlich Neuzustellungen angibt.
- [`insertedSamplesForDeceleration`](/de/docs/Web/API/RTCInboundRtpStreamStats/insertedSamplesForDeceleration)
  - : Eine positive ganze Zahl, die die Anzahl der Proben angibt, die eingefügt wurden, um die Wiedergabe aus dem Jitterpuffer zu verlangsamen.
    _Nicht definiert für Videostreams._
- [`jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferDelay)
  - : Eine Zahl, die die akkumulierte Zeit angibt, die alle Audioproben und vollständigen Videorahmen im Jitterpuffer verbracht haben, in Sekunden.
- [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount)
  - : Eine positive ganze Zahl, die die Gesamtzahl der aus dem Jitterpuffer kommenden Audioproben und/oder Videorahmen angibt.
- [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay)
  - : Eine Zahl, die die minimal mögliche Verzögerung angibt, die nur unter Berücksichtigung der Netzwerkcharakteristika wie Jitter und Paketverlust erreicht werden könnte.
- [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay)
  - : Eine Zahl, die die akkumulierte Zielverzögerung des Jitterpuffers angibt.
- [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded)
  - : Eine positive ganze Zahl, die die Gesamtzahl der Schlüsselrahmen angibt, die erfolgreich für diesen RTP-Medienstrom decodiert wurden.
    _Nicht definiert für Audiostreams._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp) Eigenschaft hingegen gibt die Zeit an, zu der das Statistikobjekt generiert wurde.
- [`mid`](/de/docs/Web/API/RTCInboundRtpStreamStats/mid)
  - : Ein String, der das Paar aus Quelle und Ziel des Streams des Transceivers eindeutig identifiziert.
    Dies ist der Wert des entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser ist null; in diesem Fall ist die statistische Eigenschaft nicht vorhanden.
- [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded)
  - : Eine positive ganze Zahl, die die Gesamtzahl der RTP-Pakete angibt, die vom Jitterpuffer aufgrund zu später oder zu früher Ankunft verworfen wurden.
- [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount) {{experimental_inline}}
  - : Eine positive ganze Zahl, die die Anzahl der von diesem Empfänger erlebten Videopause angibt.
    _Nicht definiert für Audiostreams._
- [`playoutId`](/de/docs/Web/API/RTCInboundRtpStreamStats/playoutId) {{experimental_inline}}
  - : Eine Zeichenkette, die die entsprechende [`RTCAudioPlayoutStats`](/de/docs/Web/API/RTCAudioPlayoutStats) für einen Audiostream identifiziert.
    _Nicht definiert für Videostreams._
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Eine Zeichenkette, die das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) Objekt identifiziert, das Statistiken für den entfernten Peer für diese gleiche SSRC bereitstellt.
    Diese ID ist stabil über mehrere Aufrufe von `getStats()`.
- [`removedSamplesForAcceleration`](/de/docs/Web/API/RTCInboundRtpStreamStats/removedSamplesForAcceleration)
  - : Eine positive ganze Zahl, die die Anzahl der Proben angibt, die entfernt wurden, um die Wiedergabe aus dem Jitterpuffer zu beschleunigen.
    _Nicht definiert für Videostreams._
- [`silentConcealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/silentConcealedSamples)
  - : Eine positive ganze Zahl, die die Anzahl der verdeckt stillen Proben angibt.
    _Nicht definiert für Videostreams._
- [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime) {{experimental_inline}}
  - : Eine Zahl, die die Gesamtzeit angibt, die für das Zusammensetzen von erfolgreich decodierten Videorahmen aufgewendet wurde, die in mehreren RTP-Paketen transportiert wurden, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalAudioEnergy`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAudioEnergy)
  - : Eine Zahl, die die gesamte Audioenergie des empfangenen Tracks über die Lebensdauer des Statistikobjekts repräsentiert.
    _Nicht definiert für Videostreams._
- [`totalDecodeTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalDecodeTime)
  - : Eine Zahl, die die Gesamtzeit angibt, die für das Decodieren von Frames in diesem Stream aufgewendet wurde, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) {{experimental_inline}}
  - : Eine positive Zahl, die die gesamte Zeit angibt, die der Stream im gefrorenen Zustand verbracht hat, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalInterFrameDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalInterFrameDelay)
  - : Eine positive Zahl, die die Gesamtzeit zwischen aufeinanderfolgenden gerenderten Frames angibt, aufgenommen gerade nachdem ein Frame gerendert wurde.
    _Nicht definiert für Audiostreams._
- [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) {{experimental_inline}}
  - : Eine positive Zahl, die die gesamte Zeit angibt, die der Stream mit pausiertem Video verbracht hat, in Sekunden.
    _Nicht definiert für Audiostreams._
- [`totalProcessingDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalProcessingDelay)
  - : Eine positive Zahl, die die gesamte Zeit angibt, die für die Verarbeitung von Audio- oder Videoproben aufgewendet wurde, in Sekunden.
- [`totalSamplesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesDuration)
  - : Eine positive Zahl, die die Gesamtdauer aller empfangenen Proben angibt, in Sekunden.
    _Nicht definiert für Videostreams._
- [`totalSamplesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesReceived)
  - : Eine positive ganze Zahl, die die Gesamtzahl der auf diesem Stream empfangenen Proben angibt.
    _Nicht definiert für Videostreams._
- [`totalSquaredInterFrameDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSquaredInterFrameDelay)
  - : Eine positive Zahl, die die Summe des Quadrats der Verzögerungen zwischen aufeinanderfolgenden gerenderten Frames angibt, aufgenommen gerade nachdem ein Frame gerendert wurde.
    _Nicht definiert für Audiostreams._
- [`trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackIdentifier)
  - : Eine Zeichenkette, die den [`id`](/de/docs/Web/API/MediaStreamTrack/id) Wert des `MediaStreamTrack` angibt, der mit dem eingehenden Stream verbunden ist.

### Nur lokal verfügbare Messwerte

Diese Eigenschaften werden lokal berechnet und sind nur auf dem Gerät verfügbar, das den Medienstream empfängt. Ihr Hauptzweck ist es, die Fehlertoleranz der Verbindung zu untersuchen, da sie Informationen über verlorene Pakete, verlorene Frames und die Stärke der Datenkomprimierung liefern.

- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Eine Zahl, die die Anzahl der Male angibt, dass der Empfänger den Absender benachrichtigt hat, dass ein oder mehrere RTP-Pakete durch das Senden eines Negative ACKnowledgement (NACK, auch als "Generic NACK" bezeichnet) Pakets an den Absender verloren gegangen sind. Dieser Wert ist nur für den Empfänger verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Eine positive ganze Zahl, die die Summe der QP-Werte für jeden bisher von diesem RTP-Empfänger decodierten Frame auf dem von diesem Statistikobjekt beschriebenen Videotrack angibt.
    _Nur für Videostreams gültig._

### An den Empfänger eines RTP-Streams gemessene Statistiken

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am empfangenden Ende eines RTP-Streams gemessen, unabhängig davon, ob es lokal oder remote ist.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtzahl der für diesen [Synchronisierungsquelle (SSRC)](#ssrc) empfangenen RTP-Pakete, einschließlich Neuzustellungen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtzahl der für diese [Synchronisierungsquelle (SSRC)](#ssrc) verlorenen RTP-Pakete.
    Beachten Sie, dass dies negativ sein kann, da möglicherweise mehr Pakete empfangen werden als der Empfänger erwartet.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paketjitter für diese [Synchronisierungsquelle (SSRC)](#ssrc), gemessen in Sekunden.

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) Objekt zu produzieren, das mit diesem {{Glossary("RTP", "RTP")}} Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Eine Zeichenkette, die angibt, ob der mit dem Stream verbundene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder ein Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Die 32-Bit-Ganzzahl, die die Quelle der RTP-Pakete identifiziert, die dieses Objekt bereitstellt.
    Dieser Wert wird gemäß der {{RFC(3550)}} Spezifikation generiert.
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Objekt zu produzieren, das mit diesem RTP-Stream verbunden ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCInboundRtpStreamStats/id)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das angibt, zu welchem Zeitpunkt die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type)
  - : Eine Zeichenkette mit dem Wert `"inbound-rtp"`, die den Typ der Statistiken angibt, die das Objekt enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
