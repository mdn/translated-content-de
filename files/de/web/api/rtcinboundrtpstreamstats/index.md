---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: 95b3a7c3d7c854feddb769922818f9d5a3abd500
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`**-Dictionary der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken im Zusammenhang mit dem Empfangsende eines RTP-Streams am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu berichten.

Die Statistiken können durch Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erhalten werden, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type) `inbound-rtp` finden.

## Instanzeigenschaften

- [`averageRtcpInterval`](/de/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval)
  - : Ein Gleitkommawert, der das durchschnittliche {{Glossary("RTCP", "RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived)
  - : Ein 64-Bit-Integer, das die Gesamtzahl der Bytes angibt, die bisher für diese Medienquelle empfangen wurden.
- [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded)
  - : Ein Integerwert, der die Anzahl der RTP-Forward Error Correction (FEC)-Pakete angibt, die für diese Quelle empfangen wurden und deren Fehlerkorrektur-Payload verworfen wurde.
- [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived)
  - : Ein Integerwert, der die Gesamtzahl der für diese Quelle empfangenen RTP-FEC-Pakete angibt. Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete zusammen mit Medieninhalten im Band ankommen; dies kann beispielsweise bei Opus der Fall sein.
- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
  - : Ein langer Integerwert, der die Gesamtzahl der Videoframes angibt, die bisher für diese Medienquelle korrekt dekodiert wurden. Dies ist die Anzahl der Frames, die gerendert worden wären, wenn keine verworfen worden wären. _Nur gültig für Videostreams._
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)-Eigenschaft hingegen gibt die Zeit an, zu der das Statistikobjekt erstellt wurde.
- [`mid`](/de/docs/Web/API/RTCInboundRtpStreamStats/mid)
  - : Ein String, der das Paar aus Quelle und Ziel des Streams des Transceivers eindeutig identifiziert.
    Dies ist der Wert des entsprechenden [`RTCRtpTransceiver.mid`](/de/docs/Web/API/RTCRtpTransceiver/mid), es sei denn, dieser ist null, in diesem Fall ist die Statistik-Eigenschaft nicht vorhanden.
- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Ein Integerwert, der die Gesamtanzahl der Negative ACKnowledgement (NACK)-Pakete angibt, die dieser Empfänger gesendet hat.
- [`packetsDuplicated`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated)
  - : Ein Integerwert, der die Gesamtzahl der Pakete angibt, die verworfen wurden, weil sie Duplikate waren. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`packetsFailedDecryption`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption)
  - : Eine Ganzzahl, die die Anzahl der RTP-Pakete angibt, die nicht entschlüsselt werden konnten. Diese Pakete werden nicht von [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) gezählt.
- [`perDscpPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived)
  - : Ein Datensatz von Schlüssel-Wert-Paaren mit Strings als Schlüsseln, die auf 32-Bit-Integerwerte abgebildet sind, wobei jeder die Gesamtzahl der Pakete angibt, die dieser Empfänger auf diesem RTP-Stream von dieser Quelle für jeden Differentiated Services Code Point (DSCP) empfangen hat.
- [`receiverId`](/de/docs/Web/API/RTCInboundRtpStreamStats/receiverId)
  - : Ein String, der das [`RTCAudioReceiverStats`](/de/docs/Web/API/RTCAudioReceiverStats)- oder [`RTCVideoReceiverStats`](/de/docs/Web/API/RTCVideoReceiverStats)-Objekt identifiziert, das mit dem Empfänger des Streams verbunden ist. Diese ID bleibt bei mehreren Aufrufen von `getStats()` stabil.
- [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)
  - : Ein String, der das [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den entfernten Peer für diesen selben SSRC liefert. Diese ID bleibt bei mehreren Aufrufen von `getStats()` stabil.
- [`sliCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/sliCount)
  - : Ein Integerwert, der die Anzahl der Male angibt, zu denen der Empfänger einen Slice Loss Indication (SLI)-Frame an den Sender gesendet hat, um ihm mitzuteilen, dass ein oder mehrere aufeinanderfolgende (nach Scan-Reihenfolge) Videomakroblöcke verloren gegangen oder beschädigt sind. Nur für Videostreams verfügbar.
- `trackIdentifier`
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Wert des `MediaStreamTrack` enthält, das mit dem eingehenden Stream verbunden ist.
- `trackId` {{deprecated_inline}}
  - : Ein String, der das Statistikobjekt identifiziert, das den empfangenden Track darstellt; dieses Objekt ist eine von zwei Typen: [`RTCReceiverAudioTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverAudioTrackAttachmentStats) oder [`RTCReceiverVideoTrackAttachmentStats`](/de/docs/Web/API/RTCReceiverVideoTrackAttachmentStats). Diese ID bleibt bei mehreren Aufrufen von `getStats()` stabil.

### Statistiken gemessen am Empfänger eines RTP-Streams

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am Empfangsende eines RTP-Streams gemessen, unabhängig davon, ob es lokal oder entfernt ist.

- [`packetsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsReceived)
  - : Die Gesamtzahl der RTP-Pakete, die für diese Synchronisationsquelle empfangen wurden, inklusive Übertragungen.
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
  - : Die Gesamtzahl der für diese Synchronisationsquelle verlorenen RTP-Pakete.
    Beachten Sie, dass dieser Wert negativ sein kann, wenn mehr Pakete empfangen werden als gesendet.
- [`jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
  - : Paket-Jitter für diese Synchronisationsquelle, gemessen in Sekunden.

### Nur lokal gemessene Werte

Diese Eigenschaften werden lokal berechnet und sind nur für das Gerät verfügbar, das den Medienstream empfängt.
Ihr Hauptzweck ist es, die Fehlerresilienz der Verbindung zu überprüfen, da sie Informationen über verlorene Pakete, verlorene Frames und den Kompressionsgrad der Daten liefern.

- [`nackCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/nackCount)
  - : Die Anzahl der Male, zu denen der Empfänger den Absender per Negative ACKnowledgement (NACK, auch "Generic NACK" genannt) darüber informiert hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind. Dieser Wert ist nur für den Empfänger verfügbar.
- [`qpSum`](/de/docs/Web/API/RTCInboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jedes von diesem RTP-Empfänger bisher dekodierte Frame auf der durch dieses Statistikobjekt beschriebenen Videospur enthält.
    Sie können den durchschnittlichen QP pro Frame annähern, indem Sie diesen Wert durch [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) teilen, wobei Sie beachten sollten, dass Codecs die Quantisierungswerte oft auch innerhalb von Frames variieren.
    Beachten Sie auch, dass die Werte von QP je nach Codec variieren können, sodass dieser Wert nur potenziell nützlich ist, wenn er im Vergleich zu demselben Codec verwendet wird.
    _Nur gültig für Videostreams._

### Allgemeine RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId)
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCInboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der mit dem Stream verbundene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder ein Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
  - : Der 32-Bit-Integer, der die Quelle der RTP-Pakete identifiziert, die dieses Objekt bereitstellt.
    Dieser Wert wird gemäß der {{RFC(3550)}}-Spezifikation generiert.
- [`transportId`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId)
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCInboundRtpStreamStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit anzeigt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCInboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"inbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
