---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Das **`RTCOutboundRtpStreamStats`**-Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Metriken und Statistiken im Zusammenhang mit einem ausgehenden {{Glossary("RTP", "RTP")}}-Stream zu melden, der von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird.

Die Statistiken können gewonnen werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) `outbound-rtp` finden.

## Instanz-Eigenschaften

Das `RTCOutboundRtpStreamStats`-Wörterbuch umfasst die folgenden Eigenschaften zusätzlich zu denen, die es von [`RTCSentRtpStreamStats`](/de/docs/Web/API/RTCSentRtpStreamStats) und [`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats) erbt.

- [`averageRtcpInterval`](/de/docs/Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval)
  - : Ein Gleitkommawert, der das durchschnittliche {{Glossary("RTCP", "RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden RTCP-Paketen angibt.
- [`firCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/firCount)
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der Full Intra Request (FIR)-Pakete angibt, die dieser [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) an den entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) gesendet hat. Dies ist ein Indikator dafür, wie oft der Stream verzögert wurde, was das Überspringen von Frames erfordert, um aufzuholen. _Gültig nur für Video-Streams._
- [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded)
  - : Die Anzahl der Frames, die bisher erfolgreich für die Übertragung auf diesem RTP-Stream kodiert wurden. _Nur gültig für Video-Streams._
- [`nackCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/nackCount)
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der Negative ACKnowledgement (NACK)-Pakete angibt, die dieser `RTCRtpSender` vom entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) erhalten hat.
- [`perDscpPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent)
  - : Ein Datensatz mit Schlüssel-Wert-Paaren, wobei Strings als Schlüssel mit 32-Bit-Ganzzahlen als Wert gemappt werden und jeweils die Gesamtanzahl der Pakete angeben, die dieser `RTCRtpSender` für diese Quelle für jeden Differentiated Services Code Point (DSCP) übertragen hat.
- [`pliCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/pliCount)
  - : Eine Ganzzahl, die angibt, wie oft der entfernte Empfänger diesem `RTCRtpSender` mitgeteilt hat, dass eine Menge von kodierten Videodaten für ein oder mehrere Frames verloren gegangen ist, unter Verwendung von Picture Loss Indication (PLI)-Paketen. _Nur verfügbar für Video-Streams._
- [`qpSum`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden Frame enthält, der von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) kodiert wurde. _Gültig nur für Video-Streams._
- [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) {{experimental_inline}}
  - : Ein Datensatz, der jeden der Gründe für die Qualitätsbegrenzung, wie sie in der [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Enumeration beschrieben sind, auf einen Gleitkommawert abbildet, der die Anzahl der Sekunden angibt, die der Stream wegen dieses Grundes mit begrenzter Qualität verbracht hat.
- [`qualityLimitationReason`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason) {{experimental_inline}}
  - : Einer der Strings `none`, `cpu`, `bandwidth` oder `other`, der erklärt, warum die Auflösung und/oder die Bildrate für diesen RTP-Stream begrenzt wird. _Gültig nur für Video-Streams._
- [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId)
  - : Eine Zeichenkette, die das [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den entfernten Peer für diesen gleichen SSRC bereitstellt. Diese ID bleibt stabil über mehrere Aufrufe von `getStats()`.
- [`retransmittedBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent)
  - : Die Gesamtanzahl der Bytes, die für diese Quelle zum Zeitpunkt der Stichprobenentnahme der Statistik erneut übertragen wurden. Diese erneut übertragenen Bytes umfassen die Pakete, die in dem Wert enthalten sind, der von [`retransmittedPacketsSent`](/de/docs/Web/API/RTCInboundRtpStreamStats/retransmittedPacketsSent) zurückgegeben wird.
- [`retransmittedPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent)
  - : Die Gesamtzahl der Pakete, die für diese Quelle zum Zeitpunkt der Stichprobenentnahme der Statistik erneut übertragen werden mussten. Diese erneut übertragenen Pakete sind im Wert enthalten, der von [`packetsSent`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsSent) zurückgegeben wird.
- [`senderId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/senderId)
  - : Die [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id) des [`RTCAudioSenderStats`](/de/docs/Web/API/RTCAudioSenderStats)- oder [`RTCVideoSenderStats`](/de/docs/Web/API/RTCVideoSenderStats)-Objekts, das Statistiken über diesen Stream's [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) enthält.
- [`sliCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/sliCount)
  - : Eine Ganzzahl, die angibt, wie oft dieser Sender einen Slice Loss Indication (SLI)-Frame vom entfernten Peer erhalten hat, der anzeigt, dass ein oder mehrere aufeinanderfolgende Videomakroblöcke verloren oder beschädigt wurden. Nur für Video-Streams verfügbar.
- [`targetBitrate`](/de/docs/Web/API/RTCOutboundRtpStreamStats/targetBitrate)
  - : Ein Wert, der die Bitrate angibt, die der Codec des `RTCRtpSender` zu erreichen versucht, in der ausgehenden Medienausgabe.
- [`totalEncodedBytesTarget`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget) {{experimental_inline}}
  - : Eine kumulative Summe der _Ziel_-Frame-Größen (die angestrebte maximale Größe des Frames in Bytes, wenn der Codec gebeten wird, ihn zu komprimieren) für alle bisher kodierten Frames. Dies wird wahrscheinlich von der Gesamtheit der _tatsächlichen_ Frame-Größen abweichen.
- [`totalEncodeTime`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodeTime)
  - : Ein Gleitkommawert, der die Gesamtanzahl der Sekunden angibt, die mit der Kodierung der bisher von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) kodierten Frames verbracht wurden.
- [`trackId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/trackId)
  - : Die [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id) des [`RTCSenderAudioTrackAttachmentStats`](/de/docs/Web/API/RTCSenderAudioTrackAttachmentStats) oder [`RTCSenderVideoTrackAttachmentStats`](/de/docs/Web/API/RTCSenderVideoTrackAttachmentStats)-Objekts, das die aktuelle Spurbindung an den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) enthält, der für diesen Stream verantwortlich ist.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistik-Objekten gemeinsam.

- [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistik-Objekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"outbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
