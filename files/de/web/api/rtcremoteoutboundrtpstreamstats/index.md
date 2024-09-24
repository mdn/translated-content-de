---
title: RTCRemoteOutboundRtpStreamStats
slug: Web/API/RTCRemoteOutboundRtpStreamStats
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Das **`RTCRemoteOutboundRtpStreamStats`**-Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken von einem entfernten Endpunkt über dessen ausgehenden RTP-Stream zu berichten. Dies entspricht einem eingehenden Stream, der derzeit vom lokalen {{domxref("RTCPeerConnection")}}-Objekt empfangen wird.

Die Statistiken können erhalten werden, indem Sie den {{domxref("RTCStatsReport")}} durchlaufen, der von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) `remote-outbound-rtp` finden.

## Instanz-Eigenschaften

### Spezifische Statistiken für entfernte ausgehende Streams

- {{domxref("RTCRemoteOutboundRtpStreamStats.localId", "localId")}} {{optional_inline}}
  - : Ein String, der verwendet wird, um das lokale {{domxref("RTCInboundRtpStreamStats")}}-Objekt zu finden, das dieselbe [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc) teilt.
- {{domxref("RTCRemoteOutboundRtpStreamStats.remoteTimestamp", "remoteTimestamp")}} {{optional_inline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das den Zeitstempel (auf dem entfernten Gerät) angibt, zu dem die Statistiken im `RTCRemoteOutboundRtpStreamStats`-Objekt vom entfernten Endpunkt gesendet wurden. Dies unterscheidet sich vom {{domxref("RTCRemoteOutboundRtpStreamStats.timestamp", "timestamp")}}; es repräsentiert die Zeit, zu der die Statistiken des Objekts vom lokalen Endpunkt empfangen oder erzeugt wurden.
- `reportsSent` {{optional_inline}} {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für diese [Synchronisationsquelle (SSRC)](#ssrc) gesendeten {{glossary("RTCP")}}-Senderberichtsblöcke (SR) angibt.
- {{domxref("RTCRemoteOutboundRtpStreamStats.roundTripTimeMeasurements", "roundTripTimeMeasurements")}} {{optional_inline}} {{experimental_inline}}
  - : Eine positive Zahl, die die Gesamtanzahl der für diese [Synchronisationsquelle (SSRC)](#ssrc) erhaltenen gültigen Rundlaufzeitsmessungen darstellt.
- {{domxref("RTCRemoteOutboundRtpStreamStats.totalRoundTripTime", "totalRoundTripTime")}} {{optional_inline}} {{experimental_inline}}
  - : Eine Zahl, die die kumulative Summe aller Rundlaufzeitsmessungen seit Beginn der Sitzung in Sekunden angibt. Die durchschnittliche Rundlaufzeit kann berechnet werden, indem `totalRoundTripTime` durch [`roundTripTimeMeasurements`](#roundtriptimemeasurements) geteilt wird.

### Statistiken des gesendeten RTP-Streams

<!-- RTCSentRtpStreamStats -->

- `bytesSent` {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für dieses SSRC gesendeten Bytes einschließlich der Wiederholungen angibt. <!-- [RFC3550] section 6.4.1 -->
- `packetsSent` {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für dieses SSRC gesendeten RTP-Pakete einschließlich der Wiederholungen angibt. <!-- [RFC3550] section 6.4.1 -->

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- {{domxref("RTCRemoteOutboundRtpStreamStats.codecId", "codecId")}} {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um den {{domxref("RTCCodecStats")}}-Bericht zu erzeugen, der mit diesem {{Glossary("RTP")}}-Stream verbunden ist.
- {{domxref("RTCRemoteOutboundRtpStreamStats.kind", "kind")}}
  - : Ein String, der angibt, ob der mit dem Stream verbundene {{domxref("MediaStreamTrack")}} ein Audio- oder ein Videospur ist.
- {{domxref("RTCRemoteOutboundRtpStreamStats.ssrc", "ssrc")}}
  - : Eine positive Ganzzahl, die die Synchronisationsquelle (SSRC) der RTP-Pakete in diesem Stream identifiziert.
- {{domxref("RTCRemoteOutboundRtpStreamStats.transportId", "transportId")}} {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um den {{domxref("RTCTransportStats")}}-Bericht zu erzeugen, der mit diesem RTP-Stream verbunden ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- {{domxref("RTCRemoteOutboundRtpStreamStats.id", "id")}}
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- {{domxref("RTCRemoteOutboundRtpStreamStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt genommen wurde.
- {{domxref("RTCRemoteOutboundRtpStreamStats.type", "type")}}
  - : Ein String mit dem Wert `"remote-outbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Nutzungshinweise

Die Eigenschaft {{domxref("RTCRemoteOutboundRtpStreamStats.remoteTimestamp", "remoteTimestamp")}} des `RTCRemoteOutboundRtpStreamStats`-Objekts stellt Statistiken basierend auf dem empfangenen NTP-Zeitstempel aus einem {{Glossary("RTCP")}}-Senderberichtsblock (SR) zur Verfügung. Beachten Sie, dass die entfernte Uhr möglicherweise nicht mit der lokalen Uhr synchronisiert ist (weder in der aktuellen Zeit noch in der Geschwindigkeit, mit der die Zeit vergeht).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
