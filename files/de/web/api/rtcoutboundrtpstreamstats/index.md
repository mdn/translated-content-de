---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("WebRTC")}}

Das **`RTCOutboundRtpStreamStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Metriken und Statistiken zu einem ausgehenden {{Glossary("RTP")}}-Stream zu berichten, der von einem {{domxref("RTCRtpSender")}} gesendet wird.

Die Statistiken können ermittelt werden, indem Sie durch den {{domxref("RTCStatsReport")}} iterieren, der von {{domxref("RTCPeerConnection.getStats()")}} oder {{domxref("RTCRtpSender.getStats()")}} zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `outbound-rtp` finden.

## Instanzeigenschaften

- {{domxref("RTCOutboundRtpStreamStats.averageRtcpInterval", "averageRtcpInterval")}}
  - : Ein Gleitkommawert, der das durchschnittliche {{Glossary("RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- {{domxref("RTCOutboundRtpStreamStats.firCount", "firCount")}}
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der Full Intra Request (FIR)-Pakete angibt, die dieser {{domxref("RTCRtpSender")}} an den entfernten {{domxref("RTCRtpReceiver")}} gesendet hat. Dies ist ein Indikator dafür, wie oft der Stream verzögert wurde, sodass Frames übersprungen werden mussten, um sich wieder zu synchronisieren. _Nur gültig für Videostreams._
- {{domxref("RTCOutboundRtpStreamStats.framesEncoded", "framesEncoded")}}
  - : Die Anzahl der Frames, die bisher erfolgreich codiert wurden, um sie auf diesem RTP-Stream zu senden. _Nur gültig für Videostreams._
- {{domxref("RTCOutboundRtpStreamStats.nackCount", "nackCount")}}
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der negativen Bestätigungspakete (NACK) angibt, die dieser `RTCRtpSender` vom entfernten {{domxref("RTCRtpReceiver")}} erhalten hat.
- {{domxref("RTCOutboundRtpStreamStats.perDscpPacketsSent", "perDscpPacketsSent")}}
  - : Ein Datensatz von Schlüssel-Wert-Paaren mit Zeichenfolgen als Schlüssel, die 32-Bit-Ganzzahlwerte zugeordnet sind. Jeder Wert gibt die Gesamtanzahl der Pakete an, die dieser `RTCRtpSender` für diese Quelle für jeden Differentiated Services Code Point (DSCP) übertragen hat.
- {{domxref("RTCOutboundRtpStreamStats.pliCount", "pliCount")}}
  - : Eine ganze Zahl, die angibt, wie oft der entfernte Empfänger diesem `RTCRtpSender` mithilfe von Picture Loss Indication (PLI)-Paketen mitgeteilt hat, dass eine Menge von kodierten Videodaten für einen oder mehrere Frames verloren gegangen ist. _Nur verfügbar für Videostreams._
- {{domxref("RTCOutboundRtpStreamStats.qpSum", "qpSum")}}
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden von diesem {{domxref("RTCRtpSender")}} codierten Frame enthält. _Nur gültig für Videostreams._
- {{domxref("RTCOutboundRtpStreamStats.qualityLimitationDurations", "qualityLimitationDurations")}} {{experimental_inline}}
  - : Ein Datensatz, der jeden der Gründe für Qualitätsbeschränkungen in der {{domxref("RTCRemoteInboundRtpStreamStats")}}-Aufzählung einem Gleitkommawert zuordnet, der angibt, wie viele Sekunden der Stream aufgrund dieses Grundes mit begrenzter Qualität verbracht hat.
- {{domxref("RTCOutboundRtpStreamStats.qualityLimitationReason", "qualityLimitationReason")}} {{experimental_inline}}
  - : Einer der Zeichenfolgen `none`, `cpu`, `bandwidth` oder `other`, der erklärt, warum die Auflösung und/oder Bildrate für diesen RTP-Stream begrenzt ist. _Nur gültig für Videostreams_.
- {{domxref("RTCOutboundRtpStreamStats.remoteId", "remoteId")}}
  - : Eine Zeichenfolge, die das {{domxref("RTCRemoteInboundRtpStreamStats")}}-Objekt identifiziert, das Statistiken für die entfernte Gegenstelle für dieselbe SSRC bereitstellt. Diese ID bleibt über mehrere Aufrufe von `getStats()` hinweg stabil.
- {{domxref("RTCOutboundRtpStreamStats.retransmittedBytesSent", "retransmittedBytesSent")}}
  - : Die Gesamtanzahl der Bytes, die für diese Quelle zu dem Zeitpunkt, an dem die Statistiken erfasst wurden, erneut übertragen wurden. Diese erneut übertragenen Bytes umfassen die Pakete, die im Wert von {{domxref("RTCInboundRtpStreamStats.retransmittedPacketsSent", "retransmittedPacketsSent")}} enthalten sind.
- {{domxref("RTCOutboundRtpStreamStats.retransmittedPacketsSent", "retransmittedPacketsSent")}}
  - : Die Gesamtanzahl der Pakete, die für diese Quelle zum Zeitpunkt der Erfassung der Statistiken erneut übertragen werden mussten. Diese erneut übertragenen Pakete sind im Wert von {{domxref("RTCInboundRtpStreamStats.packetsSent", "packetsSent")}} enthalten.
- {{domxref("RTCOutboundRtpStreamStats.senderId", "senderId")}}
  - : Die {{domxref("RTCOutboundRtpStreamStats.id", "id")}} des {{domxref("RTCAudioSenderStats")}}- oder {{domxref("RTCVideoSenderStats")}}-Objekts, das Statistiken über diesen Stream enthält's {{domxref("RTCRtpSender")}}.
- {{domxref("RTCOutboundRtpStreamStats.sliCount", "sliCount")}}
  - : Eine Ganzzahl, die angibt, wie oft dieser Sender eine Slice Loss Indication (SLI) von der entfernten Gegenstelle erhalten hat, die darauf hinweist, dass ein oder mehrere aufeinanderfolgende Video-Makroblöcke verloren gegangen oder beschädigt sind. Nur verfügbar für Videostreams.
- {{domxref("RTCOutboundRtpStreamStats.targetBitrate", "targetBitrate")}}
  - : Ein Wert, der die Bitrate angibt, die der Encoder des `RTCRtpSender` erreichen soll, in seinen Ausgabemedien.
- {{domxref("RTCOutboundRtpStreamStats.totalEncodedBytesTarget", "totalEncodedBytesTarget")}} {{experimental_inline}}
  - : Eine kumulative Summe der _Ziel_-Frame-Größen (die zielgerichtete maximale Größe des Frames in Bytes, wenn der Codec gebeten wird, ihn zu komprimieren) aller bisher codierten Frames. Dies wird wahrscheinlich von der Summe der _tatsächlichen_ Frame-Größen abweichen.
- {{domxref("RTCOutboundRtpStreamStats.totalEncodeTime", "totalEncodeTime")}}
  - : Ein Gleitkommawert, der die Gesamtzahl der Sekunden angibt, die mit dem Codieren der bisher von diesem {{domxref("RTCRtpSender")}} codierten Frames verbracht wurden.
- {{domxref("RTCOutboundRtpStreamStats.trackId", "trackId")}}
  - : Die {{domxref("RTCOutboundRtpStreamStats.id", "id")}} des {{domxref("RTCSenderAudioTrackAttachmentStats")}}- oder {{domxref("RTCSenderVideoTrackAttachmentStats")}}-Objekts, das die aktuelle Track-Anbindung an den {{domxref("RTCRtpSender")}} enthält, der für diesen Stream verantwortlich ist.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

- {{domxref("RTCOutboundRtpStreamStats.id", "id")}}
  - : Eine Zeichenfolge, die das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- {{domxref("RTCOutboundRtpStreamStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- {{domxref("RTCOutboundRtpStreamStats.type", "type")}}
  - : Eine Zeichenfolge mit dem Wert `"outbound-rtp"`, die den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCStatsReport")}}
