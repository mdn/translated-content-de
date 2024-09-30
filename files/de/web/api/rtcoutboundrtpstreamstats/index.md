---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("WebRTC")}}

Das **`RTCOutboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Metriken und Statistiken im Zusammenhang mit einem ausgehenden [RTP](/de/docs/Glossary/RTP)-Stream zu melden, der von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird.

Die Statistiken können durch Iteration des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erhalten werden, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) `outbound-rtp` finden.

## Instanzeigenschaften

<!-- he `RTCOutboundRtpStreamStats` dictionary includes the following properties in addition to those it inherits from [`RTCSentRtpStreamStats`](/de/docs/Web/API/RTCSentRtpStreamStats), [`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)._ -->

- [`averageRtcpInterval`](/de/docs/Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval)
  - : Ein Gleitkommawert, der das durchschnittliche [RTCP](/de/docs/Glossary/RTCP)-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`firCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/firCount)
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der Full Intra Request (FIR)-Pakete angibt, die dieser [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) an den entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) gesendet hat. Dies ist ein Indikator dafür, wie oft der Stream verzögert wurde, was dazu führte, dass Frames übersprungen werden mussten, um aufzuholen. _Nur für Video-Streams gültig._
- [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded)
  - : Die Anzahl der Frames, die bisher erfolgreich für die Übertragung in diesem RTP-Stream codiert wurden. _Nur für Video-Streams gültig._
- [`nackCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/nackCount)
  - : Ein ganzzahliger Wert, der die Gesamtanzahl der negativen Bestätigungs-NACK-Pakete angibt, die dieser `RTCRtpSender` vom entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) erhalten hat.
- [`perDscpPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent)
  - : Eine Aufzeichnung von Schlüssel-Wert-Paaren mit Zeichenketten als Schlüsseln, die auf 32-Bit-Ganzzahlwerte abgebildet sind, von denen jeder die Gesamtanzahl der Pakete angibt, die dieser `RTCRtpSender` für diese Quelle für jeden Differentiated Services Code Point (DSCP) übertragen hat.
- [`pliCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/pliCount)
  - : Eine Ganzzahl, die angibt, wie oft der entfernte Empfänger diesen `RTCRtpSender` darüber informiert hat, dass eine Menge der codierten Videodaten für ein oder mehrere Frames verloren gegangen ist, und dabei Picture Loss Indication (PLI)-Pakete verwendet. _Nur für Video-Streams verfügbar._
- [`qpSum`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden Frame enthält, der von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) codiert wurde. _Nur für Video-Streams gültig._
- [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) {{experimental_inline}}
  - : Eine Zuordnung, die jedem Grund für Qualitätsbeschränkungen in der [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats) Enumeration einen Gleitkommawert zuordnet, der angibt, wie viele Sekunden der Stream aufgrund dieses Grundes mit begrenzter Qualität verbracht hat.
- [`qualityLimitationReason`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason) {{experimental_inline}}
  - : Einer der Strings `none`, `cpu`, `bandwidth` oder `other`, der erklärt, warum die Auflösung und/oder Bildrate für diesen RTP-Stream begrenzt ist. _Nur für Video-Streams gültig._
- [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId)
  - : Eine Zeichenkette, die das [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats) Objekt identifiziert, das die Statistiken für das entfernte Peer für diese SSRC bereitstellt. Diese ID bleibt über mehrere Aufrufe von `getStats()` hinweg stabil.
- [`retransmittedBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent)
  - : Die Gesamtanzahl der Bytes, die für diese Quelle zum Zeitpunkt der Abtastung der Statistiken erneut übertragen wurden. Diese übertragenen Bytes umfassen die Pakete, die im Wert enthalten sind, der von [`retransmittedPacketsSent`](/de/docs/Web/API/RTCInboundRtpStreamStats/retransmittedPacketsSent) zurückgegeben wird.
- [`retransmittedPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent)
  - : Die Gesamtanzahl der Pakete, die für diese Quelle zum Zeitpunkt der Abtastung der Statistiken erneut übertragen werden mussten. Diese übertragenen Pakete sind im Wert enthalten, der von [`packetsSent`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsSent) zurückgegeben wird.
- [`senderId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/senderId)
  - : Die [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id) des [`RTCAudioSenderStats`](/de/docs/Web/API/RTCAudioSenderStats)- oder [`RTCVideoSenderStats`](/de/docs/Web/API/RTCVideoSenderStats)-Objekts, das Statistiken über den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) dieses Streams enthält.
- [`sliCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/sliCount)
  - : Eine Ganzzahl, die angibt, wie oft dieser Sender ein Slice Loss Indication (SLI)-Frame von dem entfernten Peer erhalten hat, das darauf hinweist, dass ein oder mehrere aufeinanderfolgende Videomakroblöcke verloren gegangen oder beschädigt sind. Nur für Video-Streams verfügbar.
- [`targetBitrate`](/de/docs/Web/API/RTCOutboundRtpStreamStats/targetBitrate)
  - : Ein Wert, der die Bitrate angibt, die der Codec des `RTCRtpSender` zu erreichen versucht, im Mediendatenstrom.
- [`totalEncodedBytesTarget`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget) {{experimental_inline}}
  - : Eine kumulative Summe der _zielgerichteten_ Frame-Größen (die beabsichtigte maximale Größe des Frames in Bytes, wenn der Codec aufgefordert wird, ihn zu komprimieren) für alle bisher codierten Frames. Dies wird sich wahrscheinlich von der Summe der _tatsächlichen_ Frame-Größen unterscheiden.
- [`totalEncodeTime`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodeTime)
  - : Ein Gleitkommawert, der die Gesamtanzahl der Sekunden angibt, die bisher mit der Codierung der Frames durch diesen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) verbracht wurden.
- [`trackId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/trackId)
  - : Die [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id) des [`RTCSenderAudioTrackAttachmentStats`](/de/docs/Web/API/RTCSenderAudioTrackAttachmentStats)- oder [`RTCSenderVideoTrackAttachmentStats`](/de/docs/Web/API/RTCSenderVideoTrackAttachmentStats)-Objekts, das die aktuelle Trackanbindung an den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) enthält, der für diesen Stream verantwortlich ist.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Statistikensammlung zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der das Sample für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"outbound-rtp"`, der den Typ der Statistik angibt, den das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
