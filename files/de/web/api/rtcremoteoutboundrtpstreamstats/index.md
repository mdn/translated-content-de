---
title: RTCRemoteOutboundRtpStreamStats
slug: Web/API/RTCRemoteOutboundRtpStreamStats
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Das **`RTCRemoteOutboundRtpStreamStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken von einem entfernten Endpunkt über dessen ausgehenden RTP-Stream zu berichten.
Dies entspricht einem eingehenden Stream, der derzeit vom lokalen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt empfangen wird.

Die Statistiken können erlangt werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, durchgegangen wird, bis man einen Bericht mit dem [`type`](#type) von `remote-outbound-rtp` findet.

## Instanz-Eigenschaften

### Remote Outbound spezifische Statistiken

- [`localId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/localId) {{optional_inline}}
  - : Ein String, der verwendet wird, um das lokale [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt zu finden, das die gleiche [Synchronisierungsquelle (SSRC)](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc) teilt.
- [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitstempel (auf dem entfernten Gerät) angibt, zu dem die Statistiken im `RTCRemoteOutboundRtpStreamStats`-Objekt vom entfernten Endpunkt gesendet wurden. Dies unterscheidet sich vom [`timestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/timestamp), da es die Zeit darstellt, zu der die Statistiken des Objekts vom lokalen Endpunkt empfangen oder generiert wurden.
- `reportsSent` {{optional_inline}} {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl an für diese [Synchronisierungsquelle (SSRC)](#ssrc) gesendeten [RTCP](/de/docs/Glossary/RTCP)-Sender-Report-Blöcke angibt.
- [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/roundTripTimeMeasurements) {{optional_inline}} {{experimental_inline}}
  - : Eine positive Zahl, die die Gesamtanzahl der für diese [Synchronisierungsquelle (SSRC)](#ssrc) empfangenen gültigen Round-Trip-Time-Messungen darstellt.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/totalRoundTripTime) {{optional_inline}} {{experimental_inline}}
  - : Eine Zahl, die die kumulative Summe aller Round-Trip-Time-Messungen seit Beginn der Sitzung in Sekunden angibt.
    Die durchschnittliche Round-Trip-Time kann berechnet werden, indem `totalRoundTripTime` durch [`roundTripTimeMeasurements`](#roundtriptimemeasurements) geteilt wird.

### Gesendete RTP Stream Statistiken

<!-- RTCSentRtpStreamStats -->

- `bytesSent` {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtanzahl der für diese SSRC gesendeten Bytes angibt, einschließlich erneuter Übertragungen. <!-- [RFC3550] section 6.4.1 -->
- `packetsSent` {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der für diese SSRC gesendeten RTP-Pakete angibt, einschließlich erneuter Übertragungen. <!-- [RFC3550] section 6.4.1 -->

### Gemeinsame RTP Stream Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/codecId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um den [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Bericht zu erstellen, der mit diesem [RTP](/de/docs/Glossary/RTP)-Stream verknüpft ist.
- [`kind`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der mit dem Stream verknüpfte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder Video-Track ist.
- [`ssrc`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc)
  - : Eine positive Ganzzahl, die die Synchronisierungsquelle (SSRC) der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um den [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Bericht zu erstellen, der mit diesem RTP-Stream verknüpft ist.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind für alle WebRTC-Statistikobjekte gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erstellen.
- [`timestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"remote-outbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Nutzungshinweise

Die [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp)-Eigenschaft des `RTCRemoteOutboundRtpStreamStats`-Objekts liefert Statistiken basierend auf dem NTP-Zeitstempel der empfangenen Daten aus einem [RTCP](/de/docs/Glossary/RTCP)-Sender-Report-Block (SR).
Beachten Sie, dass die entfernte Uhr möglicherweise nicht mit der lokalen Uhr synchronisiert ist (weder in der aktuellen Zeit noch in der Geschwindigkeit, mit der die Zeit vergeht).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
