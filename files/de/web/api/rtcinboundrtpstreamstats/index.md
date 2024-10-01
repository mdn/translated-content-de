---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken im Zusammenhang mit dem Empfangsende eines RTP-Streams am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu melden.

Die Statistiken können erhalten werden, indem Sie den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `inbound-rtp` finden.

## Instanz-Eigenschaften

- [`averageRtcpInterval`](/de/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval)
  - : Ein Fließkommawert, der das durchschnittliche {{Glossary("RTCP", "RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Ein 64-Bit-Integer, der die Gesamtanzahl der Bytes angibt, die bisher für diese Medienquelle empfangen wurden.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Ein ganzzahliger Wert, der die Anzahl der RTP Forward Error Correction (FEC) Pakete angibt, die für diese Quelle empfangen wurden und deren Fehlerkorrektur-Nutzdaten verworfen wurden.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der für diese Quelle empfangenen RTP FEC-Pakete angibt. Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete in Verbindung mit Mediendaten im gleichen Datenstrom ankommen; dies kann beispielsweise bei Opus der Fall sein.
- [`firCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/firCount)
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der Full Intra Request (FIR)-Pakete angibt, die dieser Empfänger an den Sender gesendet hat. Dies ist ein Indikator dafür, wie oft der Stream ins Stocken geraten ist und Frames übersprungen werden mussten, um aufzuholen. Dieser Wert ist nur für Videostreams verfügbar.
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein langer ganzzahliger Wert, der die Gesamtanzahl der bisher korrekt decodierten Videoframes für diese Medienquelle angibt. Dies ist die Anzahl der Frames, die gerendert worden wären, wenn keine verworfen worden wären. _Nur gültig für Videostreams._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](#timestamp) Eigenschaft hingegen gibt die Zeit an, zu der das Statistikobjekt generiert wurde.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der negativen Bestätigungen (Negative ACKnolwedgement, NACK) pakete angibt, die dieser Empfänger gesendet hat.
- [`packetsDuplicated`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated)
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der Pakete angibt, die verworfen wurden, weil sie Duplikate waren. Diese Pakete werden nicht durch [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`packetsFailedDecryption`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption)
  - : Eine Ganzzahl, die die Gesamtanzahl der RTP-Pakete angibt, die nicht entschlüsselt werden konnten. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`perDscpPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived)
  - : Ein Datensatz von Schlüssel-Wert-Paaren mit Strings als Schlüssel, die zu 32-Bit-Ganzzahlen zugeordnet sind, wobei jede Zahl die Gesamtanzahl der von diesem Empfänger auf diesem RTP-Stream von dieser Quelle empfangenen Pakete für jeden Differentiated Services Code Point (DSCP) angibt.
- [`pliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pliCount)
  - : Eine Ganzzahl, die angibt, wie oft der Empfänger den Sender darüber informiert hat, dass eine bestimmte Menge an codierten Videodaten für einen oder mehrere Frames verloren gegangen ist, und dabei Picture Loss Indication (PLI)-Pakete verwendet hat. Dies ist nur für Videostreams verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden von diesem RTP-Empfänger decodierten Frame enthält. Sie können den durchschnittlichen QP pro Frame ermitteln, indem Sie diesen Wert durch [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) teilen. _Nur gültig für Videostreams._
- [`receiverId`](/de/docs/Web/API/RTCInboundRtpStreamStats/receiverId)
  - : Ein String, der das [`RTCAudioReceiverStats`](/de/docs/Web/API/RTCAudioReceiverStats) oder [`RTCVideoReceiverStats`](/de/docs/Web/API/RTCVideoReceiverStats) Objekt identifiziert, das mit dem Empfänger des Streams verbunden ist. Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Ein String, der das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) Objekt identifiziert, das Statistiken für das Remote-Gegenstück für diesen gleichen SSRC bereitstellt. Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`sliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/sliCount)
  - : Eine Ganzzahl, die angibt, wie oft der Empfänger ein Slice Loss Indication (SLI)-Frame an den Sender gesendet hat, um ihm mitzuteilen, dass ein oder mehrere aufeinanderfolgende (in Bezug auf Scan-Reihenfolge) Videomakroblöcke verloren gegangen oder beschädigt sind. Nur für Videostreams verfügbar.
- `trackIdentifier`
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id) Wert des `MediaStreamTrack` enthält, der mit dem eingehenden Stream verbunden ist.
- [`trackId`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackId) {{deprecated_inline}}
  - : Ein String, der das Statistikobjekt identifiziert, das den empfangenden Track darstellt; dieses Objekt ist entweder vom Typ [`RTCReceiverAudioTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverAudioTrackAttachmentStats) oder [`RTCReceiverVideoTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverVideoTrackAttachmentStats). Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.

### Statistiken, die am Empfänger eines RTP-Streams gemessen werden

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am Empfangsende eines RTP-Streams gemessen, unabhängig davon, ob es lokal oder remote ist.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtanzahl der empfangenen RTP-Pakete für diese synchronisierende Quelle, einschließlich der erneuten Übertragungen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtanzahl der verloren gegangenen RTP-Pakete für diese synchronisierende Quelle.
    Beachten Sie, dass dies negativ sein kann, wenn mehr Pakete empfangen als gesendet werden.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paket-Jitter für diese synchronisierende Quelle, gemessen in Sekunden.

### Standardfelder, die für alle Medientypen enthalten sind

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) Objekt zu erzeugen, das mit diesem {{Glossary("RTP", "RTP")}} Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Ein String, dessen Wert `"audio"` ist, wenn der zugehörige [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) nur Audio enthält oder `"video"`, wenn der Track Video enthält. Dieser Wert stimmt mit dem vom [`RTCCodecStats.codec`](/de/docs/Web/API/RTCCodecStats/codec) angezeigtem Medientyp überein sowie mit der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Eigenschaft des Tracks. Früher als `mediaType` bezeichnet.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Der 32-Bit-Integer, der die Quelle der RTP-Pakete identifiziert, die dieses `RTCRtpStreamStats` Objekt abdeckt. Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation erzeugt.
- [`trackId`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackId)
  - : Ein String, der das [`RTCMediaStreamTrackStats`](/de/docs/Web/API/RTCMediaStreamTrackStats) Objekt eindeutig identifiziert, das den zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) darstellt. Dies ist _nicht_ derselbe Wert wie [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id).
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist.

### Nur lokal verfügbare Messungen

Diese Eigenschaften werden lokal berechnet und sind nur für das Gerät verfügbar, das den Medienstream empfängt.
Ihr Hauptzweck ist die Untersuchung der Fehlerresilienz der Verbindung, da sie Informationen über verlorene Pakete, verlorene Frames und die Stärke der Datenkomprimierung liefern.

- [`firCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/firCount)
  - : Eine Zählung der Gesamtanzahl der vom Sender empfangenen Full Intra Request (FIR)-Pakete. Diese Statistik ist nur für das Gerät verfügbar, das den Stream empfängt, und nur für Videotracks verfügbar. Ein FIR-Paket wird vom Empfangsende des Streams gesendet, wenn es zurückfällt oder Pakete verloren hat und nicht in der Lage ist, den Stream weiter zu decodieren; das sendende Ende des Streams empfängt das FIR-Paket und antwortet, indem es ein vollständiges Frame anstelle eines Delta-Frames sendet, wodurch der Empfänger „aufholen“ kann. Je höher diese Zahl ist, desto öfter trat ein solches Problem auf, was ein Hinweis auf Netzwerküberlastung oder ein überlastetes Empfangsgerät sein kann.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Die Anzahl der Male, die der Empfänger den Sender darüber informiert hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem er ein Negative ACKnowledgement (NACK, auch "Generic NACK" genannt) Paket an den Sender gesendet hat. Dieser Wert ist nur für den Empfänger verfügbar.
- [`pliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pliCount)
  - : Die Anzahl der Male, die das Empfangsende des Streams ein Picture Loss Indication (PLI)-Paket an den Sender gesendet hat, um anzuzeigen, dass es eine gewisse Menge codierter Videodaten für einen oder mehrere Frames verloren hat. Nur der Empfänger hat diesen Wert, und er ist nur für Videotracks gültig.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Die Summe der Quantisierungseinheitenparameter (QP)-Werte, die jedem bisher empfangenen Frame auf dem durch dieses `RTCRtpStreamStats` Objekt beschriebenen Videotrack zugeordnet sind. Im Allgemeinen, je höher diese Zahl ist, desto stärker komprimiert war der Videotrack. In Kombination mit [`RTCReceivedRtpStreamStats.framesDecoded`](/de/docs/Web/API/RTCReceivedRtpStreamStats/framesDecoded) oder [`RTCInboundRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesEncoded) können Sie den durchschnittlichen QP über diese Frames abschätzen, wobei zu beachten ist, dass Codecs oft die Quantiser-Werte sogar innerhalb von Frames variieren. Zudem sollten Sie bedenken, dass die Werte des QP von Codec zu Codec variieren können, sodass dieser Wert nur dann sinnvoll ist, wenn er mit dem gleichen Codec verglichen wird.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCInboundRtpStreamStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das die Zeit angibt, zu der die Stichprobe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"inbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
