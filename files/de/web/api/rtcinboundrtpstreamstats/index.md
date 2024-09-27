---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zum empfangenden Ende eines RTP-Streams auf der lokalen Seite der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu berichten.

Die Statistiken können abgerufen werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) `inbound-rtp` finden.

## Instanzeigenschaften

- [`averageRtcpInterval`](/de/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval)
  - : Ein Gleitpunktwert, der das durchschnittliche [RTCP](/de/docs/Glossary/RTCP)-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Ein 64-Bit-Integer, der die Gesamtanzahl der bisher für diese Medienquelle empfangenen Bytes angibt.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Ein Integer-Wert, der die Anzahl der RTP Forward Error Correction (FEC)-Pakete angibt, die für diese Quelle empfangen wurden, deren Fehlerschutz-Nutzlast jedoch verworfen wurde.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Ein Integer-Wert, der die Gesamtanzahl der für diese Quelle empfangenen RTP-FEC-Pakete angibt. Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete zusammen mit Medieninhalten im Band ankommen; dies kann beispielsweise bei Opus passieren.
- [`firCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/firCount)
  - : Ein Integer-Wert, der die Gesamtanzahl der Full Intra Request (FIR)-Pakete angibt, die dieser Empfänger an den Sender gesendet hat. Dies ist ein Indikator dafür, wie oft der Stream verzögert wurde und das Überspringen von Frames erforderlich war, um aufzuholen. Dieser Wert ist nur für Videostreams verfügbar.
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein Long-Integer-Wert, der die Gesamtanzahl der Videoframes angibt, die bisher korrekt für diese Medienquelle dekodiert wurden. Dies ist die Anzahl der Frames, die angezeigt worden wären, wenn keine verworfen worden wären. _Nur für Videostreams gültig._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](#timestamp)-Eigenschaft hingegen gibt die Zeit an, zu der das Statistikobjekt generiert wurde.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Ein Integer-Wert, der die Gesamtanzahl der Negative ACKnowledgement (NACK)-Pakete angibt, die dieser Empfänger gesendet hat.
- [`packetsDuplicated`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated)
  - : Ein Integer-Wert, der die Gesamtanzahl der Pakete angibt, die verworfen wurden, da sie Duplikate waren. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`packetsFailedDecryption`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption)
  - : Ein Integer, der die Anzahl der RTP-Pakete angibt, die nicht entschlüsselt werden konnten. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`perDscpPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived)
  - : Ein Datensatz von Schlüssel-Wert-Paaren mit Zeichenfolgen als Schlüssel, die 32-Bit-Integer-Werten zugeordnet sind, die jeweils die Gesamtanzahl der Pakete angeben, die dieser Empfänger auf diesem RTP-Stream von dieser Quelle für jeden Differentiated Services Code Point (DSCP) erhalten hat.
- [`pliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pliCount)
  - : Ein Integer, der die Häufigkeit angibt, mit der der Empfänger den Absender darüber informiert hat, dass eine gewisse Menge an kodierten Videodaten für ein oder mehrere Frames verloren gegangen ist, indem Picture Loss Indication (PLI)-Pakete verwendet wurden. Dies ist nur für Videostreams verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden Frame enthält, der von diesem RTP-Empfänger dekodiert wurde. Sie können den durchschnittlichen QP pro Frame bestimmen, indem Sie diesen Wert durch [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) teilen. _Nur für Videostreams gültig._
- [`receiverId`](/de/docs/Web/API/RTCInboundRtpStreamStats/receiverId)
  - : Eine Zeichenfolge, die angibt, welches [`RTCAudioReceiverStats`](/de/docs/Web/API/RTCAudioReceiverStats) oder [`RTCVideoReceiverStats`](/de/docs/Web/API/RTCVideoReceiverStats)-Objekt mit dem Empfänger des Streams verbunden ist. Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Eine Zeichenfolge, die das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den Remote-Peer für denselben SSRC bereitstellt. Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`sliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/sliCount)
  - : Ein Integer, der die Anzahl der Male angibt, dass der Empfänger ein Slice Loss Indication (SLI)-Paket an den Absender gesendet hat, um ihm mitzuteilen, dass ein oder mehrere aufeinanderfolgende (in Bezug auf die Abtastreihenfolge) Videomakroblöcke verloren gegangen oder beschädigt sind. Nur für Videostreams verfügbar.
- `trackIdentifier`
  - : Eine Zeichenfolge, die den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des `MediaStreamTrack` enthält, der mit dem eingehenden Stream verbunden ist.
- [`trackId`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackId) {{deprecated_inline}}
  - : Eine Zeichenfolge, die das Statistikobjekt identifiziert, das den eingehenden Track repräsentiert; dieses Objekt ist eines von zwei Typen: [`RTCReceiverAudioTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverAudioTrackAttachmentStats) oder [`RTCReceiverVideoTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverVideoTrackAttachmentStats). Diese ID ist über mehrere Aufrufe von `getStats()` stabil.

### Statistiken, die am Empfänger eines RTP-Streams gemessen werden

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am empfangenden Ende eines RTP-Streams gemessen, unabhängig davon, ob es sich um ein lokales oder ein entferntes handelt.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtanzahl der RTP-Pakete, die für diese Synchronisationsquelle empfangen wurden, einschließlich Übertragungen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtanzahl der RTP-Pakete, die für diese Synchronisationsquelle verloren gegangen sind.
    Beachten Sie, dass dies negativ sein kann, wenn mehr Pakete empfangen als gesendet wurden.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paket-Jitter für diese Synchronisationsquelle, gemessen in Sekunden.

### Standardfelder, die für alle Medientypen enthalten sind

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem [RTP](/de/docs/Glossary/RTP)-Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Eine Zeichenfolge, deren Wert `"audio"` ist, wenn der zugehörige [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ausschließlich Audio enthält oder `"video"`, wenn der Track Video enthält. Dieser Wert entspricht dem Medientyp, der durch [`RTCCodecStats.codec`](/de/docs/Web/API/RTCCodecStats/codec) sowie der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft des Tracks angezeigt wird. Früher `mediaType` genannt.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Der 32-Bit-Integer, der die Quelle der RTP-Pakete identifiziert, die dieses `RTCRtpStreamStats`-Objekt abdeckt. Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation generiert.
- [`trackId`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackId)
  - : Eine Zeichenfolge, die das [`RTCMediaStreamTrackStats`](/de/docs/Web/API/RTCMediaStreamTrackStats)-Objekt eindeutig identifiziert, das den zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) repräsentiert. Dies ist _nicht_ derselbe Wert wie [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id).
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist.

### Nur lokale Messungen

Diese Eigenschaften werden lokal berechnet und sind nur auf dem Gerät verfügbar, das den Medienstrom empfängt. Ihr Hauptzweck ist es, die Fehlerresistenz der Verbindung zu untersuchen, da sie Informationen über verlorene Pakete, verlorene Frames und die Stärke der Komprimierung der Daten liefern.

- [`firCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/firCount)
  - : Eine Zählung der Gesamtanzahl der vom Sender empfangenen Full Intra Request (FIR)-Pakete. Diese Statistik ist nur auf dem Gerät verfügbar, das den Stream empfängt, und ist nur für Videotracks verfügbar. Ein FIR-Paket wird am empfangenden Ende des Streams gesendet, wenn es zurückfällt oder Pakete verloren gegangen sind und es den Stream nicht mehr dekodieren kann; das sendende Ende des Streams empfängt das FIR-Paket und antwortet, indem es einen vollständigen Frame anstelle eines Delta-Frames sendet, sodass der Empfänger "aufholen" kann. Je höher diese Zahl ist, desto häufiger trat ein Problem dieser Art auf, was ein Zeichen für Netzwerküberlastung oder ein überlastetes Empfangsgerät sein kann.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Die Anzahl der Male, die der Empfänger den Absender darüber informiert hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem er ein Negative ACKnowledgement (NACK, auch als "Generic NACK" bezeichnet) Paket an den Absender gesendet hat. Dieser Wert ist nur für den Empfänger verfügbar.
- [`pliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pliCount)
  - : Die Anzahl der Male, die das empfangende Ende des Streams ein Picture Loss Indication (PLI)-Paket an den Absender gesendet hat, was darauf hinweist, dass einige kodierten Videodaten für ein oder mehrere Frames verloren gegangen sind. Nur der Empfänger hat diesen Wert, und er ist nur für Videotracks gültig.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Die Summe der Quantisierungsparameter (QP)-Werte, die jedem bisher empfangenen Frame des Videotracks zugeordnet sind, der durch dieses `RTCRtpStreamStats`-Objekt beschrieben wird. Im Allgemeinen gilt: Je höher dieser Wert ist, desto stärker wurde der Videotrack komprimiert. In Kombination mit [`RTCReceivedRtpStreamStats.framesDecoded`](/de/docs/Web/API/RTCReceivedRtpStreamStats/framesDecoded) oder [`RTCInboundRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesEncoded) können Sie den durchschnittlichen QP über diese Frames annähern. Beachten Sie, dass die Codecs oft die Quantisierungswerte selbst innerhalb von Frames variieren. Außerdem können die Werte des QP von Codec zu Codec variieren, daher ist dieser Wert nur potenziell nützlich, wenn er gegen denselben Codec verglichen wird.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCInboundRtpStreamStats/id)
  - : Eine Zeichenfolge, die das Objekt, das überwacht wird, um diese Statistikmenge zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type)
  - : Eine Zeichenfolge mit dem Wert `"inbound-rtp"`, die den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
