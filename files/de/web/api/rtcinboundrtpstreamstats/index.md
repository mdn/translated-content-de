---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken im Zusammenhang mit dem Empfangsende eines RTP-Streams am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu berichten.

Die Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) `inbound-rtp` finden.

## Instanz-Eigenschaften

- [`averageRtcpInterval`](/de/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval)
  - : Ein Gleitkommawert, der das durchschnittliche {{Glossary("RTCP", "RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Ein 64-Bit-Ganzzahl, der die Gesamtzahl der Bytes angibt, die bisher für diese Medienquelle empfangen wurden.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Ein ganzzahliger Wert, der die Anzahl der RTP-Forward Error Correction (FEC)-Pakete angibt, die für diese Quelle empfangen wurden und bei denen die Fehlerkorrektur-Nutzlast verworfen wurde.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Ein ganzzahliger Wert, der die Gesamtzahl der für diese Quelle empfangenen RTP-FEC-Pakete angibt. Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete zusammen mit Medieninhalten In-Band ankommen; dies kann beispielsweise bei Opus der Fall sein.
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein langer Ganzzahlwert, der die Gesamtanzahl der Videoframes angibt, die bisher für diese Medienquelle korrekt decodiert wurden. Dies ist die Anzahl der Frames, die gerendert worden wären, wenn keine fallen gelassen worden wären. _Nur gültig für Videostreams._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](#timestamp)-Eigenschaft gibt hingegen die Zeit an, zu der das Statistikobjekt erzeugt wurde.
- [`mid`](/de/docs/Web/API/RTCInboundRtpStreamStats/mid)
  - : Ein String, der das Paar aus Quelle und Ziel des Streams des Transceivers eindeutig identifiziert.
    Dies ist der Wert des entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser ist null, in diesem Fall ist die Statistik-Eigenschaft nicht vorhanden.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der Negative Acknowledgment (NACK)-Pakete angibt, die dieser Empfänger gesendet hat.
- [`packetsDuplicated`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated)
  - : Ein ganzzahliger Wert, der die Gesamtzahl der Pakete angibt, die verworfen wurden, weil sie Duplikate waren. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`packetsFailedDecryption`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption)
  - : Eine Ganzzahl, die die Anzahl der RTP-Pakete angibt, die nicht entschlüsselt werden konnten. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`perDscpPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived)
  - : Ein Datensatz von Schlüssel-Wert-Paaren mit Strings als Schlüsseln, die auf 32-Bit-Ganzzahlwerte abgebildet sind, wobei jeder angibt, wie viele Pakete dieser Empfänger auf diesem RTP-Stream von dieser Quelle für jeden Differentiated Services Code Point (DSCP) erhalten hat.
- [`receiverId`](/de/docs/Web/API/RTCInboundRtpStreamStats/receiverId)
  - : Ein String, der identifiziert, welches [`RTCAudioReceiverStats`](/de/docs/Web/API/RTCAudioReceiverStats) oder [`RTCVideoReceiverStats`](/de/docs/Web/API/RTCVideoReceiverStats)-Objekt mit dem Empfänger des Streams assoziiert ist. Diese ID bleibt stabil über mehrere Aufrufe von `getStats()`.
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Ein String, der das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Objekt identifiziert, das für diesen gleichen SSRC Statistiken für den entfernten Peer bereitstellt. Diese ID bleibt stabil über mehrere Aufrufe von `getStats()`.
- [`sliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/sliCount)
  - : Eine Ganzzahl, die angibt, wie oft der Empfänger einen Slice Loss Indication (SLI)-Frame an den Sender gesendet hat, um ihm mitzuteilen, dass ein oder mehrere aufeinander folgende (in Scan-Reihenfolge) Videomakroblöcke verloren gegangen oder beschädigt sind. Verfügbar nur für Videostreams.
- `trackIdentifier`
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des `MediaStreamTrack` enthält, der mit dem eingehenden Stream verknüpft ist.
- [`trackId`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackId) {{deprecated_inline}}
  - : Ein String, der das Statistikobjekt identifiziert, das den Empfangstrack darstellt; dieses Objekt ist von einem der beiden Typen: [`RTCReceiverAudioTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverAudioTrackAttachmentStats) oder [`RTCReceiverVideoTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverVideoTrackAttachmentStats). Diese ID bleibt stabil über mehrere Aufrufe von `getStats()`.

### Statistiken, die am Empfänger eines RTP-Streams gemessen werden

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am Empfangsende eines RTP-Streams gemessen, unabhängig davon, ob es sich um ein lokales oder ein entferntes Ende handelt.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtanzahl der für diese Synchronisationsquelle empfangenen RTP-Pakete, einschließlich Neusendungen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtanzahl der für diese Synchronisationsquelle verlorenen RTP-Pakete.
    Beachten Sie, dass dies negativ sein kann, wenn mehr Pakete empfangen als gesendet werden.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paket-Jitter für diese Synchronisationsquelle, gemessen in Sekunden.

### Nur lokal berechnete Messungen

Diese Eigenschaften werden lokal berechnet und sind nur für das Gerät verfügbar, das den Medienstream empfängt.
Ihr Hauptzweck ist es, die Fehlerresilienz der Verbindung zu untersuchen, da sie Informationen über verloren gegangene Pakete, verloren gegangene Frames und den Komprimierungsgrad der Daten liefern.

- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Die Anzahl der Male, die der Empfänger dem Sender mitgeteilt hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem ein Negative ACKnowledgement (NACK, auch "Generic NACK" genannt) Paket an den Sender gesendet wurde. Dieser Wert ist nur für den Empfänger verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden bisher von diesem RTP-Empfänger dekomprimierten Frame auf dem von diesem Statistikobjekt beschriebenen Videotrack enthält.
    Sie können den durchschnittlichen QP pro Frame ermitteln, indem Sie diesen Wert durch [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) teilen, wobei Sie beachten sollten, dass Codecs oft die Quantisierungswerte sogar innerhalb von Frames variieren.
    Beachten Sie auch, dass die QP-Werte von Codec zu Codec variieren können, daher ist dieser Wert nur potenziell nützlich, wenn er gegen denselben Codec verglichen wird.
    _Gültig nur für Videostreams._

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Ein String, der das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erstellen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream assoziiert ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der mit dem Stream verbunden ist, ein Audio- oder ein Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Der 32-Bit-Ganzzahlwert, der die Quelle der RTP-Pakete identifiziert, die dieses Objekt bereitstellt.
    Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation generiert.
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Ein String, der das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erstellen, das mit diesem RTP-Stream assoziiert ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

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
