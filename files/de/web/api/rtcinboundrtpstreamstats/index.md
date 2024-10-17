---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken im Zusammenhang mit der Empfangsseite eines RTP-Streams am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu melden.

Die Statistiken können erhalten werden, indem Sie den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `inbound-rtp` finden.

## Instanz-Eigenschaften

- [`averageRtcpInterval`](/de/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval)
  - : Ein Gleitkommawert, der das durchschnittliche {{Glossary("RTCP", "RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Ein 64-Bit-Integer, der die Gesamtzahl der bisher für diese Medienquelle empfangenen Bytes angibt.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Ein Integer-Wert, der die Anzahl der RTP-Fehlerkorrekturpakete (FEC) angibt, die für diese Quelle empfangen wurden, bei denen die Fehlerkorrektur-Nutzlast verworfen wurde.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Ein Integer-Wert, der die Gesamtzahl der empfangenen RTP-Fehlerkorrekturpakete (FEC) für diese Quelle angibt. Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete im Band mit Medieninhalten ankommen; dies kann zum Beispiel mit Opus passieren.
- [`firCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/firCount)
  - : Ein Integer-Wert, der die Gesamtzahl der vollständigen Intra-Request (FIR)-Pakete angibt, die dieser Empfänger an den Sender gesendet hat. Dies ist ein Indikator dafür, wie oft der Stream zurückgeblieben ist und Frames übersprungen werden mussten, um aufzuholen. Dieser Wert ist nur für Videostreams verfügbar.
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein Long-Integer-Wert, der die Gesamtzahl der bisher korrekt decodierten Videoframes für diese Medienquelle angibt. Dies ist die Anzahl der Frames, die gerendert worden wären, wenn keine davon fallen gelassen worden wären. _Nur gültig für Videostreams._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Uhrzeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](#timestamp)-Eigenschaft hingegen gibt die Zeit an, zu der das Statistikobjekt erstellt wurde.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Ein Integer-Wert, der die Gesamtzahl der negativen Bestätigungsnachricht-Pakete (NACK) angibt, die dieser Empfänger gesendet hat.
- [`packetsDuplicated`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated)
  - : Ein Integer-Wert, der die Gesamtzahl der Pakete angibt, die verworfen wurden, weil sie Duplikate waren. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`packetsFailedDecryption`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption)
  - : Ein Integer, der die Gesamtzahl der RTP-Pakete angibt, die nicht entschlüsselt werden konnten. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`perDscpPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived)
  - : Ein Datensatz von Schlüssel-Wert-Paaren mit Strings als Schlüsseln, die auf 32-Bit-Integer-Werte abgebildet sind, von denen jeder die Gesamtzahl der Pakete angibt, die dieser Empfänger auf diesem RTP-Stream von dieser Quelle für jeden Differentiated Services Code Point (DSCP) erhalten hat.
- [`pliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pliCount)
  - : Ein Integer, der angibt, wie oft der Empfänger den Sender informiert hat, dass eine gewisse Menge an codierten Videodaten für einen oder mehrere Frames verloren gegangen ist, unter Verwendung von Picture Loss Indication (PLI)-Paketen. Dies ist nur für Videostreams verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden von diesem RTP-Empfänger decodierten Frame enthält. Sie können den durchschnittlichen QP pro Frame berechnen, indem Sie diesen Wert durch [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) teilen. _Nur gültig für Videostreams._
- [`receiverId`](/de/docs/Web/API/RTCInboundRtpStreamStats/receiverId)
  - : Eine Zeichenkette, die das [`RTCAudioReceiverStats`](/de/docs/Web/API/RTCAudioReceiverStats) oder [`RTCVideoReceiverStats`](/de/docs/Web/API/RTCVideoReceiverStats)-Objekt identifiziert, das mit dem Empfänger des Streams verbunden ist. Diese ID ist stabil über mehrere Aufrufe von `getStats()`.
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Eine Zeichenkette, die das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den Remote-Peer für diese gleiche SSRC bereitstellt. Diese ID ist stabil über mehrere Aufrufe von `getStats()`.
- [`sliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/sliCount)
  - : Ein Integer, der angibt, wie oft der Empfänger einen Slice Loss Indication (SLI)-Frame an den Sender gesendet hat, um ihm mitzuteilen, dass ein oder mehrere aufeinanderfolgende (in Scan-Reihenfolge) Videomakroblöcke verloren gegangen oder beschädigt sind. Nur für Videostreams verfügbar.
- `trackIdentifier`
  - : Eine Zeichenkette, die den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des `MediaStreamTrack` enthält, der mit dem eingehenden Stream verbunden ist.
- [`trackId`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackId) {{deprecated_inline}}
  - : Eine Zeichenkette, die das Statistikobjekt identifiziert, das den Empfangstrack darstellt; dieses Objekt ist eines von zwei Typen: [`RTCReceiverAudioTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverAudioTrackAttachmentStats) oder [`RTCReceiverVideoTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverVideoTrackAttachmentStats). Diese ID ist stabil über mehrere Aufrufe von `getStats()`.

### Statistiken, gemessen am Empfänger eines RTP-Streams

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am empfangenden Ende eines RTP-Streams gemessen, unabhängig davon, ob es lokal oder remote ist.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtanzahl der RTP-Pakete, die für diese synchronisierende Quelle empfangen wurden, einschließlich erneuter Übertragungen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtanzahl der RTP-Pakete, die für diese synchronisierende Quelle verloren gegangen sind.
    Beachten Sie, dass dies negativ sein kann, wenn mehr Pakete empfangen als gesendet werden.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paket-Jitter für diese synchronisierende Quelle, gemessen in Sekunden.

### Standardfelder, die für alle Medientypen enthalten sind

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erstellen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Eine Zeichenkette, deren Wert `"audio"` ist, wenn der assoziierte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) nur Audio enthält oder `"video"`, wenn der Track Video enthält. Dieser Wert stimmt mit dem des Medientyps überein, der durch [`RTCCodecStats.codec`](/de/docs/Web/API/RTCCodecStats/codec) angezeigt wird, sowie mit der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft des Tracks. Früher `mediaType` genannt.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Der 32-Bit-Integer, der die Quelle der RTP-Pakete identifiziert, die dieses `RTCRtpStreamStats`-Objekt abdeckt. Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation generiert.
- [`trackId`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackId)
  - : Eine Zeichenkette, die das [`RTCMediaStreamTrackStats`](/de/docs/Web/API/RTCMediaStreamTrackStats)-Objekt eindeutig identifiziert, das den zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) darstellt. Dies ist _nicht_ dasselbe wie der Wert von [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id).
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erstellen, das mit diesem RTP-Stream verbunden ist.

### Nur lokal gemessene Messungen

Diese Eigenschaften werden lokal berechnet und sind nur dem Gerät verfügbar, das den Medienstrom empfängt. Ihr Hauptzweck ist die Untersuchung der Fehlerresistenz der Verbindung, da sie Informationen über verlorene Pakete, verlorene Frames und den Grad der Datenkomprimierung liefern.

- [`firCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/firCount)
  - : Ein Zähler der Gesamtzahl der Full Intra Request (FIR)-Pakete, die vom Sender empfangen wurden. Diese Statistik ist nur für das Gerät verfügbar, das den Stream empfängt, und ist nur für Videospuren verfügbar. Ein FIR-Paket wird vom empfangenden Ende des Streams gesendet, wenn es hinterherhinkt oder Pakete verloren hat und den Stream nicht weiter decodieren kann; das sendende Ende des Streams empfängt das FIR-Paket und antwortet, indem es ein vollständiges Frame anstelle eines Delta-Frames sendet, wodurch der Empfänger "aufholen" kann. Je höher dieser Wert ist, desto häufiger trat ein Problem dieser Art auf, was ein Zeichen für Netzwerkkongestion oder ein überlastetes Empfangsgerät sein kann.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Die Anzahl der Male, die der Empfänger den Sender darüber informiert hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem ein Negative ACKnowledgement (NACK, auch "Generic NACK" genannt)-Paket an den Sender gesendet wurde. Dieser Wert ist nur für den Empfänger verfügbar.
- [`pliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pliCount)
  - : Die Anzahl der Male, die das empfangende Ende des Streams ein Picture Loss Indication (PLI)-Paket an den Sender gesendet hat, um anzugeben, dass ein gewisser Umfang an codierten Videodaten für einen oder mehrere Frames verloren gegangen ist. Nur der Empfänger hat diesen Wert, und er ist nur für Videospuren gültig.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Die Summe der Quantisierungsparameter (QP)-Werte, die jedem Frame zugeordnet sind, der bisher auf der Videospur empfangen wurde, die von diesem `RTCRtpStreamStats`-Objekt beschrieben wird. Im Allgemeinen, je höher dieser Wert ist, desto stärker war die Videospur komprimiert. Kombiniert mit [`RTCReceivedRtpStreamStats.framesDecoded`](/de/docs/Web/API/RTCReceivedRtpStreamStats/framesDecoded) oder [`RTCInboundRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesEncoded) können Sie den durchschnittlichen QP über diese Frames approximieren, wobei Sie beachten müssen, dass Codecs oft die Quantisiererwerte sogar innerhalb von Frames variieren. Beachten Sie auch, dass die Werte von QP je nach Codec variieren können, daher ist dieser Wert nur potenziell nützlich, wenn er mit demselben Codec verglichen wird.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCInboundRtpStreamStats/id)
  - : Eine Zeichenkette, die das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Uhrzeit anzeigt, zu der das Sample für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type)
  - : Eine Zeichenkette mit dem Wert `"inbound-rtp"`, die den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
