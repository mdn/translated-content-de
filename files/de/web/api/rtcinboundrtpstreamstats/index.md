---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: 628d5bca4cf61fa37448a0b5c61b0f675f228e90
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`** Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken im Zusammenhang mit dem empfangenden Ende eines RTP-Streams am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu berichten.

Die Statistiken können durch Iteration des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, abgerufen werden, bis Sie einen Bericht mit dem [`type`](#type) `inbound-rtp` finden.

## Instanz-Eigenschaften

- [`averageRtcpInterval`](/de/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval)
  - : Ein Gleitkommawert, der das durchschnittliche {{Glossary("RTCP", "RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Ein 64-Bit-Integer, der die Gesamtzahl der bislang für diese Medienquelle empfangenen Bytes angibt.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Ein Integer-Wert, der die Anzahl der RTP Forward Error Correction (FEC)-Pakete angibt, die für diese Quelle empfangen wurden, deren Fehlerkorrektur-Payload jedoch verworfen wurde.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Ein Integer-Wert, der die Gesamtzahl der für diese Quelle empfangenen RTP-FEC-Pakete angibt. Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete zusammen mit Medieninhalten in-band ankommen; dies kann beispielsweise bei Opus passieren.
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein langer Integer-Wert, der die Gesamtzahl der Videobilder angibt, die für diese Medienquelle bisher korrekt dekodiert wurden. Dies ist die Anzahl der Bilder, die gerendert worden wären, wenn keine verworfen worden wären. _Nur gültig für Videostreams._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](#timestamp)-Eigenschaft hingegen gibt den Zeitpunkt an, zu dem das Statistikobjekt erstellt wurde.
- [`mid`](/de/docs/Web/API/RTCInboundRtpStreamStats/mid)
  - : Ein String, der die Zuordnung von Quelle und Ziel des Streams des Transceivers eindeutig identifiziert.
    Dies ist der Wert der entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser ist null, in diesem Fall ist die Statistikeigenschaft nicht vorhanden.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Ein Integer-Wert, der die gesamte Anzahl der Negativen ACKnowledgement (NACK)-Pakete angibt, die dieser Empfänger gesendet hat.
- [`packetsDuplicated`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated)
  - : Ein Integer-Wert, der die Gesamtzahl der Pakete angibt, die verworfen wurden, weil sie Duplikate waren. Diese Pakete werden nicht durch [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`packetsFailedDecryption`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption)
  - : Ein Integer, der die Gesamtanzahl der RTP-Pakete angibt, die nicht entschlüsselt werden konnten. Diese Pakete werden nicht durch [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`perDscpPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived)
  - : Eine Aufzeichnung von Schlüssel-Wert-Paaren mit Strings als Schlüsseln, die auf 32-Bit-Integer-Werte abgebildet sind, von denen jeder die Gesamtanzahl der Pakete angibt, die dieser Empfänger auf diesem RTP-Stream von dieser Quelle für jeden Differentiated Services Code Point (DSCP) erhalten hat.
- [`receiverId`](/de/docs/Web/API/RTCInboundRtpStreamStats/receiverId)
  - : Ein String, der das [`RTCAudioReceiverStats`](/de/docs/Web/API/RTCAudioReceiverStats)- oder [`RTCVideoReceiverStats`](/de/docs/Web/API/RTCVideoReceiverStats)-Objekt, das mit dem Empfänger des Streams verbunden ist, identifiziert. Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Ein String, der das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Objekt identifiziert, das Statistiken für das entfernte Gegenstück zu dieser gleichen SSRC bereitstellt. Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`sliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/sliCount)
  - : Ein Integer, der die Anzahl der Male angibt, denen der Empfänger einen Slice Loss Indication (SLI)-Frame an den Absender gesendet hat, um ihm mitzuteilen, dass eines oder mehrere aufeinanderfolgende (im Sinne der Scan-Reihenfolge) Video-Makroblöcke verloren gegangen oder beschädigt sind. Nur für Videostreams verfügbar.
- `trackIdentifier`
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des `MediaStreamTrack` enthält, der mit dem eingehenden Stream verbunden ist.
- [`trackId`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackId) {{deprecated_inline}}
  - : Ein String, der das Statistikobjekt identifiziert, das den empfangenden Track darstellt; dieses Objekt ist eine von zwei Arten: [`RTCReceiverAudioTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverAudioTrackAttachmentStats) oder [`RTCReceiverVideoTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverVideoTrackAttachmentStats). Diese ID ist über mehrere Aufrufe von `getStats()` hinweg stabil.

### Messungen am Empfänger eines RTP-Streams

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am empfangenden Ende eines RTP-Streams gemessen, unabhängig davon, ob es lokal oder entfernt ist.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtanzahl der RTP-Pakete, die für diese synchronisierende Quelle empfangen wurden, einschließlich der erneuten Übertragungen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtzahl der verlorenen RTP-Pakete für diese synchronisierende Quelle.
    Beachten Sie, dass dies negativ sein kann, wenn mehr Pakete empfangen als gesendet werden.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paket-Jitter für diese synchronisierende Quelle, gemessen in Sekunden.

### Nur lokal berechnete Messungen

Diese Eigenschaften werden lokal berechnet und sind nur für das Gerät verfügbar, das den Medienstream empfängt. Ihr Hauptzweck ist es, die Fehlerresistenz der Verbindung zu untersuchen, da sie Informationen über verlorene Pakete, verlorene Frames und die Komprimierungsrate der Daten bieten.

- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Die Anzahl der Male, in denen der Empfänger den Absender benachrichtigt hat, dass eines oder mehrere RTP-Pakete verloren gegangen sind, indem er ein Negatives ACKnowledgement (NACK, auch als "Generic NACK" bezeichnet)-Paket an den Absender gesendet hat. Dieser Wert ist nur für den Empfänger verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jedes Bild enthält, das bisher von diesem RTP-Empfänger auf der durch dieses Statistikobjekt beschriebenen Videospur dekodiert wurde.
    Sie können den durchschnittlichen QP pro Frame abschätzen, indem Sie diesen Wert durch [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) teilen, wobei Sie beachten sollten, dass Codecs die Quantisierungswerte oft auch innerhalb von Frames variieren.
    Beachten Sie auch, dass die Werte von QP je nach Codec unterschiedlich sein können, sodass dieser Wert nur potenziell nützlich ist, wenn er gegen denselben Codec verglichen wird.
    _Nur gültig für Videostreams._

### Allgemeine RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erstellen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der mit dem Stream verbundene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder ein Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Der 32-Bit-Integer, der die Quelle der RTP-Pakete identifiziert, die dieses Objekt bereitstellt.
    Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation generiert.
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erstellen, das mit diesem RTP-Stream verbunden ist.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind für alle WebRTC-Statistikobjekte gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCInboundRtpStreamStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"inbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
