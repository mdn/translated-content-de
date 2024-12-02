---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken im Zusammenhang mit dem empfangenden Ende eines RTP-Streams am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu berichten.

Die Statistiken können gewonnen werden, indem Sie den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) `inbound-rtp` finden.

## Instanz-Eigenschaften

- [`averageRtcpInterval`](/de/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval)
  - : Ein Gleitkommawert, der das durchschnittliche {{Glossary("RTCP", "RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Ein 64-Bit-Ganzzahlwert, der die Gesamtanzahl der bisher für diese Medienquelle empfangenen Bytes angibt.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Ein Ganzzahlwert, der die Anzahl der RTP-Pakete zur Vorwärtsfehlerkorrektur (FEC) angibt, die für diese Quelle empfangen wurden, deren Fehlerkorrektur-Nutzlast jedoch verworfen wurde.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Ein Ganzzahlwert, der die Gesamtanzahl der für diese Quelle empfangenen RTP-FEC-Pakete angibt. Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete gemeinsam mit Medieninhalten im Band ankommen; dies kann beispielsweise bei Opus passieren.
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein Wert vom Typ `long`, der die Gesamtanzahl der bisher für diese Medienquelle korrekt decodierten Videoframes angibt. Dies ist die Anzahl der Frames, die gerendert worden wären, wenn keine verworfen wurden. _Nur gültig für Videostreams._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](#timestamp)-Eigenschaft hingegen gibt den Zeitpunkt an, zu dem das Statistikobjekt erstellt wurde.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Ein Ganzzahlwert, der die Gesamtanzahl der negativen Bestätigungs-(NACK)-Pakete angibt, die dieser Empfänger gesendet hat.
- [`packetsDuplicated`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated)
  - : Ein Ganzzahlwert, der die Gesamtanzahl der Pakete angibt, die verworfen wurden, weil sie Duplikate waren. Diese Pakete werden nicht durch [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`packetsFailedDecryption`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption)
  - : Eine Ganzzahl, die die Anzahl der RTP-Pakete summiert, die nicht entschlüsselt werden konnten. Diese Pakete werden nicht durch [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`perDscpPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived)
  - : Ein Datensatz aus Schlüssel-Wert-Paaren mit Zeichenfolgen als Schlüsseln, die auf 32-Bit-Ganzzahlen abgebildet sind. Jede Angabe steht für die Gesamtanzahl der Pakete, die dieser Empfänger in diesem RTP-Stream von dieser Quelle für jeden Differentiated Services Code Point (DSCP) erhalten hat.
- [`receiverId`](/de/docs/Web/API/RTCInboundRtpStreamStats/receiverId)
  - : Eine Zeichenfolge, die das [`RTCAudioReceiverStats`](/de/docs/Web/API/RTCAudioReceiverStats)- oder [`RTCVideoReceiverStats`](/de/docs/Web/API/RTCVideoReceiverStats)-Objekt identifiziert, das dem Empfänger des Streams zugeordnet ist. Diese ID ist stabil über mehrere Aufrufe von `getStats()`.
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Eine Zeichenfolge, die das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den entfernten Peer für diese gleiche SSRC bereitstellt. Diese ID ist stabil über mehrere Aufrufe von `getStats()`.
- [`sliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/sliCount)
  - : Eine Ganzzahl, die angibt, wie oft der Empfänger einen Slice Loss Indication (SLI)-Frame an den Sender gesendet hat, um ihm mitzuteilen, dass ein oder mehrere aufeinanderfolgende (in Bezug auf die Scanreihenfolge) Videomakroblöcke verlorengegangen oder beschädigt sind. Nur für Videostreams verfügbar.
- `trackIdentifier`
  - : Eine Zeichenfolge, die den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des `MediaStreamTrack` enthält, der mit dem eingehenden Stream verbunden ist.
- [`trackId`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackId) {{deprecated_inline}}
  - : Eine Zeichenfolge, die das Statistikobjekt identifiziert, das den Empfangstrack darstellt; dieses Objekt ist eine von zwei Arten: [`RTCReceiverAudioTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverAudioTrackAttachmentStats) oder [`RTCReceiverVideoTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverVideoTrackAttachmentStats). Diese ID ist stabil über mehrere Aufrufe von `getStats()`.

### Statistiken, die am Empfänger eines RTP-Streams gemessen werden

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am empfangenden Ende eines RTP-Streams gemessen, unabhängig davon, ob es lokal oder entfernt ist.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtanzahl der für diese synchronisierende Quelle empfangenen RTP-Pakete, einschließlich Retransmissionen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtanzahl der für diese synchronisierende Quelle verlorenen RTP-Pakete.
    Beachten Sie, dass dies negativ sein kann, wenn mehr Pakete empfangen als gesendet werden.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paket-Jitter für diese synchronisierende Quelle, gemessen in Sekunden.

### Nur lokal verfügbare Messungen

Diese Eigenschaften werden lokal berechnet und sind nur auf dem Gerät verfügbar, das den Medienstrom empfängt.
Ihr Hauptzweck ist die Untersuchung der Fehlerresilienz der Verbindung, da sie Informationen über verlorene Pakete, verlorene Frames und die Kompressionsstärke der Daten liefern.

- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Die Anzahl der Male, die der Empfänger den Sender benachrichtigt hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem er ein Negativ-Acknowledgement-(NACK, auch "Generic NACK" genannt)-Paket an den Sender gesendet hat. Dieser Wert ist nur für den Empfänger verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jedes von diesem RTP-Empfänger bis heute decodierte Frame auf der Videospur enthält, die durch dieses Statistikobjekt beschrieben wird.
    Sie können den durchschnittlichen QP pro Frame annähernd berechnen, indem Sie diesen Wert durch [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) teilen, wobei Sie berücksichtigen müssen, dass Codecs oft die Quantisiererwerte sogar innerhalb von Frames variieren.
    Beachten Sie auch, dass die QP-Werte von Codec zu Codec variieren können, sodass dieser Wert nur potenziell nützlich ist, wenn er mit demselben Codec verglichen wird.
    _Nur gültig für Videostreams._

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, welches inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erstellen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Eine Zeichenfolge, die angibt, ob der mit dem Stream verbundene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) eine Audio- oder eine Videospur ist.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Die 32-Bit-Ganzzahl, die die Quelle der RTP-Pakete identifiziert, die dieses Objekt bereitstellt.
    Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation generiert.
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, welches inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erstellen, das mit diesem RTP-Stream verbunden ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCInboundRtpStreamStats/id)
  - : Eine Zeichenfolge, die das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erstellen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type)
  - : Eine Zeichenfolge mit dem Wert `"inbound-rtp"`, die den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
