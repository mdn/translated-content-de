---
title: RTCRemoteOutboundRtpStreamStats
slug: Web/API/RTCRemoteOutboundRtpStreamStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCRemoteOutboundRtpStreamStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken von einem entfernten Endpunkt über seinen ausgehenden RTP-Stream zu melden. Dies entspricht einem eingehenden Stream, der derzeit vom lokalen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt empfangen wird.

Die Statistiken können abgerufen werden, indem Sie das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iterieren, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/type) von `remote-outbound-rtp` finden.

## Instanz-Eigenschaften

### Spezielle Statistiken für entfernten ausgehenden Stream

- [`localId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/localId) {{optional_inline}}
  - : Ein String, der verwendet wird, um das lokale [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt zu finden, das dieselbe [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc) teilt.
- [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel (auf dem entfernten Gerät) angibt, zu dem die Statistiken im `RTCRemoteOutboundRtpStreamStats`-Objekt vom entfernten Endpunkt gesendet wurden. Dies unterscheidet sich vom [`timestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/timestamp); er repräsentiert die Zeit, zu der die Statistiken des Objekts am lokalen Endpunkt empfangen oder erstellt wurden.
- `reportsSent` {{optional_inline}} {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der gesendeten {{Glossary("RTCP", "RTCP")}}-Sender-Report-Blöcke (SR) für diese [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc) angibt.
- [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/roundTripTimeMeasurements) {{optional_inline}} {{experimental_inline}}
  - : Eine positive Zahl, die die Gesamtanzahl der empfangenen gültigen Round-Trip-Time-Messungen für diese [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc) repräsentiert.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/totalRoundTripTime) {{optional_inline}} {{experimental_inline}}
  - : Eine Zahl, die die kumulative Summe aller Round-Trip-Time-Messungen seit Beginn der Sitzung in Sekunden angibt. Die durchschnittliche Round-Trip-Time kann berechnet werden, indem `totalRoundTripTime` durch [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/roundTripTimeMeasurements) geteilt wird.

### Gesendete RTP-Stream-Statistiken

<!-- RTCSentRtpStreamStats -->

- `bytesSent` {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für dieses SSRC gesendeten Bytes, einschließlich der neuen Übertragungen, angibt. <!-- [RFC3550] section 6.4.1 -->
- `packetsSent` {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für dieses SSRC gesendeten RTP-Pakete, einschließlich der neuen Übertragungen, angibt. <!-- [RFC3550] section 6.4.1 -->

### Allgemeine RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/codecId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um den [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Bericht zu erzeugen, der mit diesem {{Glossary("RTP", "RTP")}}-Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der mit dem Stream verbunden ist, ein Audio- oder ein Videospur ist.
- [`ssrc`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc)
  - : Eine positive Ganzzahl, die die Synchronisationsquelle (SSRC) der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um den [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Bericht zu erzeugen, der mit diesem RTP-Stream verbunden ist.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Stichprobe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"remote-outbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Nutzungshinweise

Die `RTCRemoteOutboundRtpStreamStats`-Objekteigenschaft [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp) bietet Statistiken basierend auf dem NTP-Zeitstempel der empfangenen Daten, entnommen aus einem {{Glossary("RTCP", "RTCP")}}-Sender-Report-Block (SR). Seien Sie sich bewusst, dass die entfernte Uhr möglicherweise nicht mit der lokalen Uhr synchronisiert ist (weder in der aktuellen Zeit noch in der Geschwindigkeit, mit der die Zeit vergeht).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
