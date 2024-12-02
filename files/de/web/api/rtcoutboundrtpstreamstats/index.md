---
title: RTCOutboundRtpStreamStats
slug: Web/API/RTCOutboundRtpStreamStats
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}

Das **`RTCOutboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Metriken und Statistiken in Bezug auf einen ausgehenden {{Glossary("RTP", "RTP")}}-Stream zu melden, der von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird.

Die Statistiken können durch Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `outbound-rtp` finden, erhalten werden.

## Instanzeigenschaften

- [`averageRtcpInterval`](/de/docs/Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval)
  - : Ein Fließkommawert, der das durchschnittliche {{Glossary("RTCP", "RTCP")}}-Intervall zwischen zwei aufeinanderfolgenden zusammengesetzten RTCP-Paketen angibt.
- [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded)
  - : Die Anzahl der Frames, die bisher erfolgreich zum Senden auf diesem RTP-Stream kodiert wurden. _Nur gültig für Videostreams._
- [`perDscpPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent)
  - : Ein Datensatz von Schlüssel-Wert-Paaren mit Zeichenfolgen als Schlüssel, die auf 32-Bit-Ganzzahlen abgebildet sind, von denen jede die Gesamtanzahl der Pakete angibt, die dieser `RTCRtpSender` für diese Quelle für jeden Differentiated Services Code Point (DSCP) übertragen hat.
- [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) {{experimental_inline}}
  - : Ein Datensatz, der jede der Qualitätsbeschränkungsgründe in der [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Enumeration auf einen Fließkommawert abbildet, der die Anzahl der Sekunden angibt, die der Stream mit seiner Qualitätsbeschränkung für diesen Grund verbracht hat.
- [`qualityLimitationReason`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason) {{experimental_inline}}
  - : Eine der Zeichenfolgen `none`, `cpu`, `bandwidth` oder `other`, die erklärt, warum die Auflösung und/oder Bildrate für diesen RTP-Stream begrenzt wird. _Nur gültig für Videostreams._
- [`remoteId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/remoteId)
  - : Eine Zeichenfolge, die das [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Objekt identifiziert, das Statistiken für den entfernten Peer für dasselbe SSRC bereitstellt. Diese ID bleibt stabil über mehrere Aufrufe von `getStats()`.
- [`retransmittedBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent)
  - : Die Gesamtzahl der Bytes, die zu diesem Zeitpunkt für diese Quelle erneut übertragen wurden, als die Statistiken erfasst wurden. Diese erneut übertragenen Bytes umfassen die Pakete, die im Wert zurückgegeben werden, den [`retransmittedPacketsSent`](/de/docs/Web/API/RTCInboundRtpStreamStats/retransmittedPacketsSent) liefert.
- [`retransmittedPacketsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent)
  - : Die Gesamtzahl der Pakete, die bis zum Zeitpunkt der Erfassung der Statistiken für diese Quelle erneut übertragen werden mussten. Diese erneut übertragenen Pakete sind im Wert enthalten, der von [`packetsSent`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsSent) zurückgegeben wird.
- [`senderId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/senderId)
  - : Die [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id) des [`RTCAudioSenderStats`](/de/docs/Web/API/RTCAudioSenderStats) oder [`RTCVideoSenderStats`](/de/docs/Web/API/RTCVideoSenderStats)-Objekts, das Statistiken über den `RTCRtpSender` dieses Streams enthält.
- [`sliCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/sliCount)
  - : Eine Ganzzahl, die angibt, wie oft dieser Sender von dem entfernten Peer einen Slice Loss Indication (SLI)-Frame erhalten hat, was darauf hinweist, dass ein oder mehrere aufeinanderfolgende Videomakroblöcke verloren gegangen oder beschädigt sind. Nur verfügbar für Videostreams.
- [`targetBitrate`](/de/docs/Web/API/RTCOutboundRtpStreamStats/targetBitrate)
  - : Ein Wert, der die Bitrate angibt, die der Codec des `RTCRtpSender` in seinem Ausgangsmedium zu erreichen versucht.
- [`totalEncodedBytesTarget`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget) {{experimental_inline}}
  - : Eine kumulative Summe der _Ziel_-Bildgrößen (der angestrebten maximalen Größe des Bildes in Bytes, wenn der Codec es komprimieren soll) für alle bisher kodierten Bilder. Dies wird sich wahrscheinlich von der Summe der _tatsächlichen_ Bildgrößen unterscheiden.
- [`totalEncodeTime`](/de/docs/Web/API/RTCOutboundRtpStreamStats/totalEncodeTime)
  - : Ein Fließkommawert, der die Gesamtanzahl der Sekunden angibt, die bisher für das Kodieren der von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) kodierten Bilder aufgewendet wurden.
- [`trackId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/trackId)
  - : Die [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id) des [`RTCSenderAudioTrackAttachmentStats`](/de/docs/Web/API/RTCSenderAudioTrackAttachmentStats) oder [`RTCSenderVideoTrackAttachmentStats`](/de/docs/Web/API/RTCSenderVideoTrackAttachmentStats)-Objekts, das die aktuelle Spurverbindung zum [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) enthält, der für diesen Stream verantwortlich ist.

### Lokale Messungen

Diese Eigenschaften werden lokal berechnet und sind nur auf dem Gerät verfügbar, das den Medienstream empfängt.
Ihr Hauptzweck ist es, die Fehlerresilienz der Verbindung zu untersuchen, da sie Informationen über verlorene Pakete, verlorene Frames und die Kompressionsstärke der Daten liefern.

- [`nackCount`](/de/docs/Web/API/RTCOutboundRtpStreamStats/nackCount)
  - : Ein Ganzzahlwert, der die Gesamtanzahl der negativen Empfangsbestätigungen (Negative ACKnowledgement, NACK) angibt, die dieser `RTCRtpSender` von dem entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) erhalten hat.
- [`qpSum`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qpSum)
  - : Ein 64-Bit-Wert, der die Summe der QP-Werte für jedes von diesem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) kodierte Bild enthält.
    _Nur gültig für Videostreams._

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/codecId) {{optional_inline}}
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream assoziiert ist.
- [`kind`](/de/docs/Web/API/RTCOutboundRtpStreamStats/kind)
  - : Eine Zeichenfolge, die angibt, ob der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der mit dem Stream assoziiert ist, ein Audio- oder ein Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCOutboundRtpStreamStats/ssrc)
  - : Eine positive Ganzzahl, die die SSRC der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId) {{optional_inline}}
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream assoziiert ist.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCOutboundRtpStreamStats/id)
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCOutboundRtpStreamStats/type)
  - : Eine Zeichenfolge mit dem Wert `"outbound-rtp"`, die den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
