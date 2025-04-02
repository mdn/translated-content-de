---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`** Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken in Bezug auf das Empfangsende eines RTP-Streams am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu berichten.

Die Statistiken können durch Iteration über den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, erhalten werden, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type) von `inbound-rtp` finden.

## Instanzen-Eigenschaften

- [`averageRtcpInterval`](/de/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval)
  - : Ein Gleitkommawert, der das durchschnittliche {{Glossary("RTCP", "RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Ein 64-Bit-Integer, der die Gesamtanzahl der bisher für diese Medienquelle empfangenen Bytes angibt.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Ein integer Wert, der die Anzahl der RTP Forward Error Correction (FEC) Pakete angibt, die für diese Quelle empfangen wurden und bei denen die Fehlerkorrektur-Nutzdaten verworfen wurden.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Ein integer Wert, der die Gesamtanzahl der für diese Quelle empfangenen RTP-FEC-Pakete angibt. Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete zusammen mit Mediendaten in-Band ankommen; dies kann beispielsweise mit Opus passieren.
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein long integer Wert, der die Gesamtanzahl der Videoframes angibt, die bisher für diese Medienquelle korrekt decodiert wurden. Dies ist die Anzahl der Frames, die angezeigt worden wären, wenn keine Frames verworfen worden wären. _Nur für Videostreams gültig._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)-Eigenschaft hingegen gibt die Uhrzeit an, zu der das Statistikobjekt erstellt wurde.
- [`mid`](/de/docs/Web/API/RTCInboundRtpStreamStats/mid)
  - : Ein String, der die Zuordnung von Quelle und Ziel des Transceiver-Streams eindeutig identifiziert.
    Dies ist der Wert der entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser ist null, in welchem Fall die Statistik-Eigenschaft nicht vorhanden ist.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Ein integer Wert, der die Gesamtzahl der Negative Acknowledgement (NACK)-Pakete angibt, die dieser Empfänger gesendet hat.
- [`packetsDuplicated`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated)
  - : Ein integer Wert, der die Gesamtanzahl der Pakete angibt, die verworfen wurden, weil sie Duplikate waren. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`packetsFailedDecryption`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption)
  - : Ein integer, der die Gesamtanzahl der RTP-Pakete angibt, die nicht entschlüsselt werden konnten. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`perDscpPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived)
  - : Ein Datensatz von Schlüssel-Wert-Paaren mit Strings als Schlüsseln, die zu 32-Bit-Integer-Werten abgebildet sind, von denen jeder die Gesamtanzahl der Pakete angibt, die dieser Empfänger für diesen RTP-Stream von dieser Quelle für jede Differentiated Services Code Point (DSCP) erhalten hat.
- [`receiverId`](/de/docs/Web/API/RTCInboundRtpStreamStats/receiverId)
  - : Ein String, der angibt, welcher [`RTCAudioReceiverStats`](/de/docs/Web/API/RTCAudioReceiverStats) oder [`RTCVideoReceiverStats`](/de/docs/Web/API/RTCVideoReceiverStats) mit dem Empfänger des Streams assoziiert ist. Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Ein String, der das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) Objekt identifiziert, das Statistiken für den Remote-Peer für diese gleiche SSRC bereitstellt. Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`sliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/sliCount)
  - : Ein integer, der angibt, wie oft der Empfänger dem Sender ein Slice Loss Indication (SLI) Frame gesendet hat, um ihm mitzuteilen, dass ein oder mehrere aufeinanderfolgende (in Bezug auf die Scanreihenfolge) Video-Makroblöcke verloren gegangen oder beschädigt sind. Nur für Videostreams verfügbar.
- `trackIdentifier`
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des `MediaStreamTrack` enthält, der mit dem eingehenden Stream assoziiert ist.
- [`trackId`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackId) {{deprecated_inline}}
  - : Ein String, der das Statistik-Objekt identifiziert, das den empfangenden Track darstellt; dieses Objekt ist eines von zwei Typen: [`RTCReceiverAudioTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverAudioTrackAttachmentStats) oder [`RTCReceiverVideoTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverVideoTrackAttachmentStats). Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.

### Statistiken gemessen am Empfänger eines RTP-Streams

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am Empfangsende eines RTP-Streams gemessen, unabhängig davon, ob dieser lokal oder remote ist.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtanzahl der für diese Synchronisationsquelle empfangenen RTP-Pakete, einschließlich der Neuübertragungen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtanzahl der für diese Synchronisationsquelle verlorenen RTP-Pakete.
    Beachten Sie, dass dies negativ sein kann, wenn mehr Pakete empfangen als gesendet werden.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paket-Jitter für diese Synchronisationsquelle, gemessen in Sekunden.

### Nur lokal gemessene Werte

Diese Eigenschaften werden lokal berechnet und sind nur auf dem Gerät verfügbar, das den Medienstream empfängt.
Ihr Hauptzweck ist es, die Fehlerresilienz der Verbindung zu untersuchen, da sie Informationen über verlorene Pakete, verlorene Frames und die Stärke der Datenkomprimierung liefern.

- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Die Anzahl der Male, die der Empfänger dem Sender mitgeteilt hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem er ein Negative ACKnowledgement (NACK, auch "Generic NACK" genannt) Paket an den Sender gesendet hat. Dieser Wert ist nur dem Empfänger verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jedes bislang von diesem RTP-Empfänger decodierte Frame auf dem in diesem Statistikobjekt beschriebenen Video-Track enthält.
    Sie können den durchschnittlichen QP pro Frame annähern, indem Sie diesen Wert durch [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) teilen, wobei zu beachten ist, dass Codecs häufig die Quantisierer-Werte auch innerhalb von Frames variieren.
    Außerdem sollten Sie beachten, dass die QP-Werte je nach Codec variieren können, daher ist dieser Wert nur potenziell nützlich, wenn er gegen denselben Codec verglichen wird.
    _Nur für Videostreams gültig._

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) Objekt zu produzieren, das mit diesem {{Glossary("RTP", "RTP")}} Stream assoziiert ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der mit dem Stream assoziierte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder ein Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Der 32-Bit-Integer, der die Quelle der RTP-Pakete identifiziert, die dieses Objekt bereitstellt.
    Dieser Wert wird gemäß der {{RFC(3550)}} Spezifikation erzeugt.
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Objekt zu produzieren, das mit diesem RTP-Stream assoziiert ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistik-Objekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCInboundRtpStreamStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"inbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
