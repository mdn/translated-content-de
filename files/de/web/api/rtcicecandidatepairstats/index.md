---
title: RTCIceCandidatePairStats
slug: Web/API/RTCIceCandidatePairStats
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidatePairStats`** Dictionary der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu melden, die Einblicke in die Qualität und Leistung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bieten, während diese verbunden und konfiguriert ist, wie durch das angegebene Paar von {{Glossary("ICE", "ICE")}}-Kandidaten beschrieben.

Die Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Eintrag mit dem [`type`](#type) von `"candidate-pair"` finden.

## Instanz-Eigenschaften

- [`availableIncomingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate) {{optional_inline}} <!-- Nicht in BCD, aber in der Spezifikation IDL. -->
  - : Eine Zahl, die die verfügbare eingehende Kapazität des Netzwerks darstellt.
    Dies meldet die Gesamtzahl der Bits pro Sekunde, die für alle eingehenden {{Glossary("RTP", "RTP")}}-Streams des Kandidatenpaars verfügbar sind.
    Es berücksichtigt nicht die Größe des Internet Protocol (IP)-Overheads oder anderer Transportschichten wie {{Glossary("TCP", "TCP")}} oder {{Glossary("UDP", "UDP")}}.
- [`availableOutgoingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate) {{optional_inline}}
  - : Eine Zahl, die die ungefähr verfügbare ausgehende Kapazität des Netzwerks darstellt.
    Dies meldet die Gesamtzahl der Bits pro Sekunde, die für alle ausgehenden {{Glossary("RTP", "RTP")}}-Streams des Kandidatenpaars verfügbar sind.
    Es berücksichtigt nicht die Größe des IP-Overheads oder anderer Transportschichten wie {{Glossary("TCP", "TCP")}} oder {{Glossary("UDP", "UDP")}}.
- [`bytesDiscardedOnSend`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesDiscardedOnSend) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der Bytes darstellt, die aufgrund von Socket-Fehlern bei diesem Kandidatenpaar verworfen wurden.
- [`bytesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesReceived) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der Nutzlastbytes darstellt, die bei diesem Kandidatenpaar empfangen wurden.
- [`bytesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesSent) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der Nutzlastbytes darstellt, die bei diesem Kandidatenpaar gesendet wurden (die Gesamtanzahl der gesendeten Bytes ohne Header, Padding oder andere Protokoll-Overheads).
- [`consentRequestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/consentRequestsSent) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der gesendeten [STUN](/de/docs/Web/API/WebRTC_API/Protocols#stun) Einwilligungsanfragen bei diesem Kandidatenpaar darstellt.
- [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime) {{optional_inline}}
  - : Eine Zahl, die die Gesamtzeit in Sekunden darstellt, die zwischen der zuletzt gesendeten STUN-Anfrage und dem Empfang der Antwort verstrichen ist.
    Dies kann auf Anfragen basieren, die an der Bestätigung der Berechtigung zur Herstellen der Verbindung beteiligt waren.
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitpunkt angibt, zu dem das letzte Paket vom lokalen Peer vom entfernten Peer für dieses Kandidatenpaar empfangen wurde. Zeitstempel werden nicht für STUN-Pakete aufgezeichnet.
- [`lastPacketSentTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitpunkt angibt, zu dem das letzte Paket vom lokalen Peer zum entfernten Peer für dieses Kandidatenpaar gesendet wurde. Zeitstempel werden nicht für STUN-Pakete aufgezeichnet.
- [`localCandidateId`](/de/docs/Web/API/RTCIceCandidatePairStats/localCandidateId) {{optional_inline}}
  - : Ein String, der die eindeutige ID darstellt, die dem [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) aus den Daten im [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekt entspricht, das Statistiken für den lokalen Kandidaten des Kandidatenpaars bereitstellt.
- [`nominated`](/de/docs/Web/API/RTCIceCandidatePairStats/nominated) {{optional_inline}}
  - : Ein Boolean-Wert, der, wenn `true`, anzeigt, dass das von diesem Objekt beschriebene Kandidatenpaar zur Verwendung vorgeschlagen wurde und verwendet wird (oder war), wenn seine Priorität die höchste unter den nominierten Kandidatenpaaren ist. Siehe {{RFC(5245, "", "7.1.3.2.4")}} für Details.
- [`packetsDiscardedOnSend`](/de/docs/Web/API/RTCIceCandidatePairStats/packetsDiscardedOnSend) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der Pakete darstellt, die aufgrund von Socket-Fehlern bei diesem Kandidatenpaar verworfen wurden.
- [`packetsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/packetsReceived) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der empfangenen Pakete bei diesem Kandidatenpaar darstellt.
- [`packetsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/packetsSent) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der gesendeten Pakete bei diesem Kandidatenpaar darstellt.
- [`remoteCandidateId`](/de/docs/Web/API/RTCIceCandidatePairStats/remoteCandidateId) {{optional_inline}}
  - : Ein String, der eine eindeutige ID enthält, die dem entfernten Kandidaten entspricht, aus dem die Daten entnommen wurden, um das `RTCIceCandidateStats`-Objekt zu erstellen, das das entfernte Ende der Verbindung beschreibt.
- [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der empfangenen Verbindungsprüfanfragen darstellt, einschließlich der Wiederholungen. Dieser Wert umfasst sowohl Verbindungsprüfungen als auch STUN Einwilligungsprüfungen.
- [`requestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsSent) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der gesendeten Verbindungsprüfanfragen darstellt, _nicht_ einschließlich der Wiederholungen.
- [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der empfangenen Verbindungsprüfungsantworten darstellt.
- [`responsesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesSent) {{optional_inline}}
  - : Ein Integer, der die Gesamtanzahl der gesendeten Verbindungsprüfungsantworten darstellt. Dies umfasst sowohl Verbindungsprüfanfragen als auch STUN Einwilligungsanfragen.
- [`state`](/de/docs/Web/API/RTCIceCandidatePairStats/state) {{optional_inline}}
  - : Ein String, der den Zustand der Verbindung zwischen den beiden Kandidaten angibt.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) {{optional_inline}}
  - : Eine Zahl, die die Gesamtzeit in Sekunden angibt, die zwischen dem Senden von STUN-Anfragen und dem Empfangen von Antworten darauf verstrichen ist, für alle bisher bei diesem Kandidatenpaar gestellten Anfragen.
    Dies umfasst sowohl Verbindungsprüfungen als auch Einwilligungsprüfungen. Sie können die durchschnittliche Round-Trip-Time (RTT) berechnen, indem Sie diesen Wert durch [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) teilen.
- [`transportId`](/de/docs/Web/API/RTCIceCandidatePairStats/transportId) {{optional_inline}}
  - : Ein String, der den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) eindeutig identifiziert, der für die Transport-bezogenen Statistiken (wie in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gefunden) untersucht wurde, die zur Erstellung dieses Objekts genutzt wurden.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCIceCandidatePairStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das den Zeitpunkt anzeigt, zu dem die Stichprobe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCIceCandidatePairStats/type)
  - : Ein String mit dem Wert `"candidate-pair"`, der den Typ der Statistiken angibt, die das Objekt enthält.

### Veraltete Eigenschaften

Die folgenden Eigenschaften wurden aus der Spezifikation entfernt und sollten nicht mehr verwendet werden. Sie sollten vorhandenen Code so bald wie möglich aktualisieren, um deren Nutzung zu vermeiden. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details, welche Browser sie unterstützen und in welchen Versionen.

- [`priority`](/de/docs/Web/API/RTCIceCandidatePairStats/priority) {{Deprecated_Inline}} {{optional_inline}} {{non-standard_inline}}
  - : Ein Integerwert, der die Priorität des Kandidatenpaares angibt.
- [`readable`](/de/docs/Web/API/RTCIceCandidatePairStats/readable) {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein Boolean-Wert, der anzeigt, ob Daten über die Verbindung des Kandidatenpaares gesendet werden können oder nicht.
- [`writable`](/de/docs/Web/API/RTCIceCandidatePairStats/writable) {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein Boolean-Wert, der anzeigt, ob Daten über die Verbindung des Kandidatenpaares empfangen werden können oder nicht.

### Nicht standardisierte Eigenschaften

- [`selected`](/de/docs/Web/API/RTCIceCandidatePairStats/selected) {{Non-standard_Inline}} {{optional_inline}}
  - : Ein Firefox-spezifischer Boolean-Wert, der `true` ist, wenn das von diesem Objekt beschriebene Kandidatenpaar das aktuell verwendete ist.
    Die spezifikationskonforme Methode, um das ausgewählte Kandidatenpaar zu bestimmen, besteht darin, nach einem Stats-Objekt vom Typ `transport` zu suchen, welches ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Objekt ist.
    Die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId) Eigenschaft dieses Objekts gibt an, ob der angegebene Transport der verwendete ist.

## Nutzungshinweise

Das aktuell aktive ICE-Kandidatenpaar - falls vorhanden - kann durch Aufrufen der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Methode [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair), die ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) Objekt zurückgibt, oder `null`, wenn kein Paar ausgewählt ist, erhalten werden.
Das aktive Kandidatenpaar beschreibt die aktuelle Konfiguration der beiden Enden der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Ein Kandidatenpaar, das nicht das aktive Kandidatenpaar für einen Transport darstellt, wird gelöscht, wenn der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) einen ICE-Restart durchführt, wobei der [`state`](/de/docs/Web/API/RTCIceTransport/state) des ICE-Transports auf `new` zurückgesetzt wird und die Verhandlung erneut beginnt.
Für weitere Informationen, siehe [ICE-Restart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).

## Beispiel

Dieses Beispiel berechnet die durchschnittliche Zeit, die zwischen Verbindungsprüfungen vergeht.

```js
if (rtcStats && rtcStats.type === "candidate-pair") {
  let elapsed =
    (rtcStats.lastRequestTimestamp - rtcStats.firstRequestTimestamp) /
    rtcStats.requestsSent;

  console.log(`Average time between ICE connectivity checks: ${elapsed} ms.`);
}
```

Der Code beginnt, indem er `rtcStats` überprüft, um zu sehen, ob sein [`type`](/de/docs/Web/API/RTCIceCandidatePairStats/type) `candidate-pair` ist.
Wenn es der Fall ist, wissen wir, dass `rtcStats` tatsächlich ein `RTCIceCandidatePairStats` Objekt ist.
Wir können dann die durchschnittliche Zeit berechnen, die zwischen STUN-Verbindungsprüfungen vergeht, und diese Information protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
