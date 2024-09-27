---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("WebRTC")}}

Das **`RTCOutboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Metriken und Statistiken in Bezug auf einen ausgehenden [RTP](/de/docs/Glossary/RTP)-Stream zu berichten, der von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird.

Die Statistiken können abgerufen werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) `outbound-rtp` finden.

## Instanzeigenschaften

<!-- Das `RTCOutboundRtpStreamStats`-Wörterbuch enthält die folgenden Eigenschaften zusätzlich zu denen, die es von [`RTCSentRtpStreamStats`](/de/docs/Web/API/RTCSentRtpStreamStats), [`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats) erbt. -->

- [`averageRtcpInterval`](/de/docs/Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval)
  - : Ein Gleitkommawert, der das durchschnittliche [RTCP](/de/docs/Glossary/RTCP)-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`firCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/firCount)
  - : Ein ganzzahliger Wert, der die Gesamtanzahl an Full Intra Request (FIR) Paketen angibt, die dieser [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) an den entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) gesendet hat. Dies ist ein Indikator dafür, wie oft der Stream verzögert war, sodass Frames übersprungen werden mussten, um aufzuholen. _Nur gültig für Videostreams._
- [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded)
  - : Die Anzahl der Frames, die bisher erfolgreich kodiert wurden, um sie in diesem RTP-Stream zu senden. _Nur gültig für Videostreams._
- [`nackCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/nackCount)
  - : Ein ganzzahliger Wert, der die Gesamtzahl der Negative Acknowledgement (NACK) Pakete angibt, die dieser `RTCRtpSender` von dem entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) erhalten hat.
- [`perDscpPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent)
  - : Ein Datensatz von Schlüssel-Wert-Paaren mit Zeichenfolgen als Schlüssel, die auf 32-Bit-Ganzzahlen abgebildet sind, wobei jede den gesamten Betrag der Pakete angibt, die dieser `RTCRtpSender` für diese Quelle für jeden Differentiated Services Code Point (DSCP) übertragen hat.
- [`pliCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/pliCount)
  - : Eine ganze Zahl, die angibt, wie oft der entfernte Empfänger diesen `RTCRtpSender` unterrichtet hat, dass eine gewisse Menge an kodierten Videodaten für einen oder mehrere Frames verloren gegangen ist, unter Verwendung von Picture Loss Indication (PLI) Paketen. _Nur verfügbar für Videostreams._
- [`qpSum`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jeden Frame enthält, der von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) kodiert wurde. _Nur gültig für Videostreams._
- [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) {{experimental_inline}}
  - : Ein Datensatz, der jede der Gründe für Qualitätseinschränkungen in der [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats) Enumerationen auf einen Gleitkommawert abbildet, der die Anzahl der Sekunden angibt, die der Stream mit eingeschränkter Qualität aus diesem Grund verbracht hat.
- [`qualityLimitationReason`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason) {{experimental_inline}}
  - : Einer der Zeichenfolgen `none`, `cpu`, `bandwidth` oder `other`, der erklärt, warum die Auflösung und/oder Bildrate für diesen RTP-Stream begrenzt wird. _Nur gültig für Videostreams_.
- [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId)
  - : Eine Zeichenfolge, die das [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den entfernten Peer für dieses gleiche SSRC bietet. Diese ID bleibt über mehrere Aufrufe von `getStats()` stabil.
- [`retransmittedBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent)
  - : Die Gesamtanzahl der Bytes, die zu diesem Zeitpunkt für diese Quelle erneut übertragen wurden, als die Statistiken erfasst wurden. Diese erneut gesendeten Bytes umfassen die Pakete, die im Wert zurückgegeben von [`retransmittedPacketsSent`](/de/docs/Web/API/RTCInboundRtpStreamStats/retransmittedPacketsSent) enthalten sind.
- [`retransmittedPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent)
  - : Die Gesamtanzahl der Pakete, die zu diesem Zeitpunkt für diese Quelle erneut gesendet werden mussten, als die Statistiken erfasst wurden. Diese erneut gesendeten Pakete sind im Wert zurückgegeben von [`packetsSent`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsSent) enthalten.
- [`senderId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/senderId)
  - : Die [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id) des [`RTCAudioSenderStats`](/de/docs/Web/API/RTCAudioSenderStats)- oder [`RTCVideoSenderStats`](/de/docs/Web/API/RTCVideoSenderStats)-Objekts, das Statistiken über den `RTCRtpSender` dieses Streams enthält.
- [`sliCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/sliCount)
  - : Eine ganze Zahl, die angibt, wie oft dieser Sender eine Slice Loss Indication (SLI) Frame vom entfernten Peer erhalten hat, was darauf hinweist, dass ein oder mehrere aufeinanderfolgende Video-Makroblöcke verloren gegangen oder beschädigt wurden. Nur verfügbar für Videostreams.
- [`targetBitrate`](/de/docs/Web/API/RTCOutboundRtpStreamStats/targetBitrate)
  - : Ein Wert, der angibt, welche Bitrate der Codec des `RTCRtpSender` zu versuchen, in seinem Ausgabemedium zu erreichen, konfiguriert ist.
- [`totalEncodedBytesTarget`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget) {{experimental_inline}}
  - : Eine kumulative Summe der _Ziel_-Framegrößen (die angestrebte maximale Größe des Frames in Bytes, wenn der Codec gebeten wird, ihn zu komprimieren) für alle bisher kodierten Frames. Dies wird wahrscheinlich von der Summe der _tatsächlichen_ Framegrößen abweichen.
- [`totalEncodeTime`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodeTime)
  - : Ein Gleitkommawert, der angibt, wie viele Sekunden insgesamt mit der Kodierung der bisher von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) kodierten Frames verbracht wurden.
- [`trackId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/trackId)
  - : Die [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id) des [`RTCSenderAudioTrackAttachmentStats`](/de/docs/Web/API/RTCSenderAudioTrackAttachmentStats)- oder [`RTCSenderVideoTrackAttachmentStats`](/de/docs/Web/API/RTCSenderVideoTrackAttachmentStats)-Objekts, das den aktuellen Track-Anschluss an den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) enthält, der für diesen Stream verantwortlich ist.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id)
  - : Eine Zeichenfolge, die das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erstellen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type)
  - : Eine Zeichenfolge mit dem Wert `"outbound-rtp"`, die den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
