---
title: RTCRemoteOutboundRtpStreamStats
slug: Web/API/RTCRemoteOutboundRtpStreamStats
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Das **`RTCRemoteOutboundRtpStreamStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken von einem entfernten Endpunkt über seinen ausgehenden RTP-Stream zu melden. Dies entspricht einem eingehenden Stream, der derzeit vom lokalen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt empfangen wird.

Die Statistiken können erlangt werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `remote-outbound-rtp` finden.

## Instanzeigenschaften

### Spezifische Statistiken für entfernte ausgehende Streams

- [`localId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/localId) {{optional_inline}}
  - : Ein String, der verwendet wird, um das lokale [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt zu finden, das dieselbe [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc) teilt.
- [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel (auf dem entfernten Gerät) angibt, zu dem die Statistiken im `RTCRemoteOutboundRtpStreamStats`-Objekt vom entfernten Endpunkt gesendet wurden. Dies unterscheidet sich vom [`timestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/timestamp); es repräsentiert den Zeitpunkt, zu dem die Statistiken des Objekts vom lokalen Endpunkt empfangen oder erzeugt wurden.
- `reportsSent` {{optional_inline}} {{experimental_inline}}
  - : Eine positive ganze Zahl, die die Gesamtzahl der [RTCP](/de/docs/Glossary/RTCP)-Senderberichte (SR) Blöcke angibt, die für diese [Synchronisationsquelle (SSRC)](#ssrc) gesendet wurden.
- [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/roundTripTimeMeasurements) {{optional_inline}} {{experimental_inline}}
  - : Eine positive Zahl, die die Gesamtzahl der gültigen Round-Trip-Time-Messungen angibt, die für diese [Synchronisationsquelle (SSRC)](#ssrc) empfangen wurden.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/totalRoundTripTime) {{optional_inline}} {{experimental_inline}}
  - : Eine Zahl, die die kumulative Summe aller Round-Trip-Time-Messungen seit Beginn der Sitzung in Sekunden angibt.
    Die durchschnittliche Round-Trip-Time kann berechnet werden, indem `totalRoundTripTime` durch [`roundTripTimeMeasurements`](#roundtriptimemeasurements) geteilt wird.

### Gesendete RTP-Stream-Statistiken

<!-- RTCSentRtpStreamStats -->

- `bytesSent` {{optional_inline}}
  - : Eine positive ganze Zahl, die die Gesamtanzahl der übertragenen Bytes für diese SSRC einschließlich der erneuten Übertragungen angibt. <!-- [RFC3550] section 6.4.1 -->
- `packetsSent` {{optional_inline}}
  - : Eine positive ganze Zahl, die die Gesamtzahl der übertragenen RTP-Pakete für diese SSRC einschließlich der erneuten Übertragungen angibt. <!-- [RFC3550] section 6.4.1 -->

### Gemeinsame RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/codecId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um den [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) Bericht für diesen [RTP](/de/docs/Glossary/RTP) Stream zu erstellen.
- [`kind`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der mit dem Stream verbunden ist, ein Audio- oder ein Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc)
  - : Eine positive ganze Zahl, die die Synchronisationsquelle (SSRC) der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um den [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Bericht für diesen RTP-Stream zu erstellen.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"remote-outbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Benutzungshinweise

Die [`remoteTimestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp) Eigenschaft des `RTCRemoteOutboundRtpStreamStats`-Objekts liefert Statistiken basierend auf dem NTP-Zeitstempel der empfangenen Daten aus einem [RTCP](/de/docs/Glossary/RTCP) Senderbericht (SR) Block. Beachten Sie, dass die entfernte Uhr möglicherweise nicht mit der lokalen Uhr synchronisiert ist (weder in der aktuellen Zeit noch in der Geschwindigkeit, mit der die Zeit vergeht).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
