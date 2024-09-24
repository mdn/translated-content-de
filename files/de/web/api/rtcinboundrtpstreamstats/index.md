---
title: RTCInboundRtpStreamStats
slug: Web/API/RTCInboundRtpStreamStats
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Das **`RTCInboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken im Zusammenhang mit dem Empfangsende eines RTP-Streams auf der lokalen Seite der {{domxref("RTCPeerConnection")}} zu berichten.

Die Statistiken können durch Durchlaufen des {{domxref("RTCStatsReport")}}, das von {{domxref("RTCPeerConnection.getStats()")}} oder {{domxref("RTCRtpReceiver.getStats()")}} zurückgegeben wird, erhalten werden, bis Sie einen Bericht mit dem [`type`](#type) von `inbound-rtp` finden.

## Instanz-Eigenschaften

- {{domxref("RTCInboundRtpStreamStats.averageRtcpInterval", "averageRtcpInterval")}}
  - : Ein Gleitkommawert, der das durchschnittliche {{Glossary("RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- {{domxref("RTCInboundRtpStreamStats.bytesReceived", "bytesReceived")}}
  - : Ein 64-Bit-Integer, der die Gesamtzahl der Bytes angibt, die bisher für diese Medienquelle empfangen wurden.
- {{domxref("RTCInboundRtpStreamStats.fecPacketsDiscarded", "fecPacketsDiscarded")}}
  - : Ein Integer-Wert, der die Anzahl der RTP Forward Error Correction (FEC)-Pakete angibt, die für diese Quelle empfangen wurden und deren Fehlerkorrektur-Payload verworfen wurde.
- {{domxref("RTCInboundRtpStreamStats.fecPacketsReceived", "fecPacketsReceived")}}
  - : Ein Integer-Wert, der die Gesamtzahl der RTP FEC-Pakete angibt, die für diese Quelle empfangen wurden. Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete zusammen mit Medieninhalten in-band ankommen; dies kann beispielsweise bei Opus passieren.
- {{domxref("RTCInboundRtpStreamStats.firCount", "firCount")}}
  - : Ein Integer-Wert, der die Gesamtanzahl der Full Intra Request (FIR)-Pakete angibt, die dieser Empfänger an den Sender gesendet hat. Dies ist ein Indikator dafür, wie oft der Stream hinterherhinkte, und es war nötig, Frames zu überspringen, um aufzuholen. Dieser Wert ist nur für Videostreams verfügbar.
- {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}}
  - : Ein Long-Integer-Wert, der die Gesamtzahl der Videoframes angibt, die bisher korrekt für diese Medienquelle decodiert wurden. Dies ist die Anzahl der Frames, die gerendert worden wären, wenn keine verworfen worden wären. _Nur gültig für Videostreams._
- {{domxref("RTCInboundRtpStreamStats.lastPacketReceivedTimestamp", "lastPacketReceivedTimestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit angibt, zu der das letzte Paket für diese Quelle empfangen wurde.
    Die [`timestamp`](#timestamp)-Eigenschaft gibt dagegen die Zeit an, zu der das Statistikobjekt generiert wurde.
- {{domxref("RTCInboundRtpStreamStats.nackCount", "nackCount")}}
  - : Ein Integer-Wert, der die Gesamtanzahl der Negative ACKnolwedgement (NACK)-Pakete angibt, die dieser Empfänger gesendet hat.
- {{domxref("RTCInboundRtpStreamStats.packetsDuplicated", "packetsDuplicated")}}
  - : Ein Integer-Wert, der die Gesamtanzahl der Pakete angibt, die verworfen wurden, weil sie Duplikate waren. Diese Pakete werden nicht von {{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}} gezählt.
- {{domxref("RTCInboundRtpStreamStats.packetsFailedDecryption", "packetsFailedDecryption")}}
  - : Ein Integer, der die Anzahl der RTP-Pakete summarisch angibt, die nicht entschlüsselt werden konnten. Diese Pakete werden nicht von {{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}} gezählt.
- {{domxref("RTCInboundRtpStreamStats.perDscpPacketsReceived", "perDscpPacketsReceived")}}
  - : Ein Datensatz von Schlüssel-Wert-Paaren mit Zeichenfolgen als Schlüsseln, die zu 32-Bit-Integer-Werten zugeordnet sind, die jeweils die Gesamtanzahl der Pakete angeben, die dieser Empfänger auf diesem RTP-Stream von dieser Quelle für jeden Differentiated Services Code Point (DSCP) erhalten hat.
- {{domxref("RTCInboundRtpStreamStats.pliCount", "pliCount")}}
  - : Ein Integer, der die Anzahl der Male angibt, die der Empfänger den Sender darüber informiert hat, dass eine bestimmte Menge an codierten Videodaten für ein oder mehrere Frames verloren gegangen ist, indem Picture Loss Indication (PLI)-Pakete verwendet wurden. Dies ist nur für Videostreams verfügbar.
- {{domxref("RTCInboundRtpStreamStats.qpSum", "qpSum")}}
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jedes von diesem RTP-Empfänger decodierte Frame enthält. Sie können den durchschnittlichen QP pro Frame ermitteln, indem Sie diesen Wert durch {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}} teilen. _Nur gültig für Videostreams._
- {{domxref("RTCInboundRtpStreamStats.receiverId", "receiverId")}}
  - : Eine Zeichenfolge, die das {{domxref("RTCAudioReceiverStats")}}- oder {{domxref("RTCVideoReceiverStats")}}-Objekt identifiziert, das mit dem Empfänger des Streams verknüpft ist. Diese ID bleibt bei mehreren Aufrufen von `getStats()` stabil.
- {{domxref("RTCInboundRtpStreamStats.remoteId", "remoteId")}}
  - : Eine Zeichenfolge, die das {{domxref("RTCRemoteOutboundRtpStreamStats")}}-Objekt identifiziert, das Statistiken für das Remote-Peer für diesen gleichen SSRC bereitstellt. Diese ID bleibt bei mehreren Aufrufen von `getStats()` stabil.
- {{domxref("RTCInboundRtpStreamStats.sliCount", "sliCount")}}
  - : Ein Integer, der die Anzahl der Male angibt, die der Empfänger einen Slice Loss Indication (SLI)-Frame an den Sender gesendet hat, um ihm mitzuteilen, dass eines oder mehrere aufeinanderfolgende (in Bezug auf die Scan-Reihenfolge) Videomakroblöcke verloren gegangen oder beschädigt wurden. Nur für Videostreams verfügbar.
- `trackIdentifier`
  - : Eine Zeichenfolge, die den {{domxref("MediaStreamTrack.id", "id")}}-Wert des mit dem eingehenden Stream verbundenen `MediaStreamTrack` enthält.
- {{domxref("RTCInboundRtpStreamStats.trackId", "trackId")}} {{deprecated_inline}}
  - : Eine Zeichenfolge, die das Statistikobjekt identifiziert, das den empfangenden Track darstellt; dieses Objekt ist eines von zwei Typen: {{domxref("RTCReceiverAudioTrackAttachmentStats")}} oder {{domxref("RTCReceiverVideoTrackAttachmentStats")}}. Diese ID bleibt bei mehreren Aufrufen von `getStats()` stabil.

### Statistiken, die am Empfänger eines RTP-Streams gemessen werden

<!-- RTCReceivedRtpStreamStats -->

Diese Statistiken werden am Empfangsende eines RTP-Streams gemessen, unabhängig davon, ob es sich um einen lokalen oder entfernten Endpunkt handelt.

- {{domxref("RTCInboundRtpStreamStats.packetsReceived", "packetsReceived")}}
  - : Die Gesamtanzahl der RTP-Pakete, die für diese synchronisierende Quelle empfangen wurden, einschließlich Retansmissionen.
- {{domxref("RTCInboundRtpStreamStats.packetsLost", "packetsLost")}}
  - : Die Gesamtanzahl der RTP-Pakete, die für diese synchronisierende Quelle verloren gegangen sind.
    Beachten Sie, dass dieser Wert negativ sein kann, wenn mehr Pakete empfangen als gesendet wurden.
- {{domxref("RTCInboundRtpStreamStats.jitter", "jitter")}}
  - : Paket-Jitter für diese synchronisierende Quelle, gemessen in Sekunden.

### Standardfelder, die für alle Medientypen enthalten sind

<!-- RTCRtpStreamStats -->

- {{domxref("RTCInboundRtpStreamStats.codecId", "codecId")}}
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das überprüft wurde, um das {{domxref("RTCCodecStats")}}-Objekt zu erstellen, das mit diesem {{Glossary("RTP")}}-Stream verbunden ist.
- {{domxref("RTCInboundRtpStreamStats.kind", "kind")}}
  - : Eine Zeichenfolge, deren Wert `"audio"` ist, wenn der zugehörige {{domxref("MediaStreamTrack")}} nur Audio enthält, oder `"video"`, wenn der Track Video enthält. Dieser Wert wird mit dem Medientyp übereinstimmen, der durch {{domxref("RTCCodecStats.codec")}} angezeigt wird, sowie mit der {{domxref("MediaStreamTrack.kind", "kind")}}-Eigenschaft des Tracks. Früher `mediaType` genannt.
- {{domxref("RTCInboundRtpStreamStats.ssrc", "ssrc")}}
  - : Der 32-Bit-Integer, der die Quelle der RTP-Pakete identifiziert, die dieses `RTCRtpStreamStats`-Objekt abdeckt. Dieser Wert wird entsprechend der {{RFC(3550)}}-Spezifikation erzeugt.
- {{domxref("RTCInboundRtpStreamStats.trackId", "trackId")}}
  - : Eine Zeichenfolge, die das {{domxref("RTCMediaStreamTrackStats")}}-Objekt eindeutig identifiziert, welches den zugehörigen {{domxref("MediaStreamTrack")}} darstellt. Dies ist _nicht_ identisch mit dem Wert von {{domxref("MediaStreamTrack.id")}}.
- {{domxref("RTCInboundRtpStreamStats.transportId", "transportId")}}
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das überprüft wurde, um das {{domxref("RTCTransportStats")}}-Objekt zu erstellen, das mit diesem RTP-Stream verbunden ist.

### Nur lokal gemessene Messungen

Diese Eigenschaften werden lokal berechnet und sind nur für das Gerät verfügbar, das den Medienstream empfängt.
Ihr Hauptzweck ist es, die Fehlerresilienz der Verbindung zu überprüfen, da sie Informationen über verlorene Pakete, verlorene Frames und darüber liefern, wie stark die Daten komprimiert sind.

- {{domxref("RTCInboundRtpStreamStats.firCount", "firCount")}}
  - : Eine Zählung der Gesamtanzahl der Full Intra Request (FIR)-Pakete, die vom Sender empfangen wurden. Diese Statistik ist nur für das Gerät verfügbar, das den Stream empfängt, und nur für Videotracks verfügbar. Ein FIR-Paket wird vom Empfangsende des Streams gesendet, wenn es ins Hintertreffen gerät oder Pakete verloren hat und nicht mehr in der Lage ist, den Stream weiter zu dekodieren; das Sendende des Streams erhält das FIR-Paket und antwortet, indem es ein vollständiges Frame anstelle eines Delta-Frames sendet, wodurch der Empfänger aufholen kann. Je höher dieser Wert ist, desto häufiger tritt ein Problem dieser Art auf, was ein Zeichen für Netzwerküberlastung oder ein überlastetes Empfangsgerät sein kann.
- {{domxref("RTCInboundRtpStreamStats.nackCount", "nackCount")}}
  - : Die Anzahl der Male, die der Empfänger den Sender darüber benachrichtigt hat, dass ein oder mehrere RTP-Pakete verloren gegangen sind, indem ein Negative ACKnowledgement (NACK, auch "Generic NACK" genannt) Paket an den Sender gesendet wurde. Dieser Wert ist nur für den Empfänger verfügbar.
- {{domxref("RTCInboundRtpStreamStats.pliCount", "pliCount")}}
  - : Die Anzahl der Male, die das Empfangsende des Streams ein Picture Loss Indication (PLI)-Paket an den Sender gesendet hat und anzeigte, dass einige codierte Videodaten für ein oder mehrere Frames verloren gegangen sind. Nur der Empfänger hat diesen Wert, und er ist nur für Videotracks gültig.
- {{domxref("RTCInboundRtpStreamStats.qpSum", "qpSum")}}
  - : Die Summe der Quantization Parameter (QP)-Werte, die jedem Frame zugeordnet sind, das bisher auf dem in diesem `RTCRtpStreamStats`-Objekt beschriebenen Videotrack empfangen wurde. Im Allgemeinen, je höher dieser Wert ist, desto stärker wurde der Videotrack komprimiert. In Kombination mit {{domxref("RTCReceivedRtpStreamStats.framesDecoded")}} oder {{domxref("RTCInboundRtpStreamStats.framesEncoded")}}, können Sie den durchschnittlichen QP über diese Frames näherungsweise bestimmen, wobei Sie beachten sollten, dass Codecs häufig die Quantisierungswerte sogar innerhalb von Frames variieren. Berücksichtigen Sie auch, dass die QP-Werte von Codec zu Codec variieren können, sodass dieser Wert nur dann potenziell nützlich ist, wenn er mit dem gleichen Codec verglichen wird.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- {{domxref("RTCInboundRtpStreamStats.id", "id")}}
  - : Eine Zeichenfolge, die das überwachte Objekt, aus dem dieser Satz von Statistiken hervorgeht, eindeutig identifiziert.
- {{domxref("RTCInboundRtpStreamStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} Objekt, das die Zeit angibt, zu der die Stichprobe für dieses Statistikobjekt entnommen wurde.
- {{domxref("RTCInboundRtpStreamStats.type", "type")}}
  - : Eine Zeichenfolge mit dem Wert `"inbound-rtp"`, die den Statistiken-Typ angibt, den das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCStatsReport")}}
