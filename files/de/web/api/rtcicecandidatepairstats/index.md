---
title: RTCIceCandidatePairStats
slug: Web/API/RTCIceCandidatePairStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidatePairStats`** Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu berichten, die Einblicke in die Qualität und Leistung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bieten, während diese verbunden und konfiguriert ist, wie es durch das spezifizierte Paar von {{Glossary("ICE", "ICE")}}-Kandidaten beschrieben wird.

Die Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Eintrag mit dem [`type`](/de/docs/Web/API/RTCIceCandidatePairStats/type) von `"candidate-pair"` finden.

## Instanz-Eigenschaften

- [`availableIncomingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate) {{optional_inline}} <!-- Not in BCD but is in spec IDL. -->
  - : Eine Zahl, die die verfügbare eingehende Kapazität des Netzwerks darstellt. Diese gibt die gesamte Anzahl der Bits pro Sekunde an, die für alle eingehenden {{Glossary("RTP", "RTP")}}-Streams des Kandidatenpaares verfügbar sind. Dabei wird die Größe des Internet-Protokolls (IP) Overheads, sowie andere Transportschichten wie {{Glossary("TCP", "TCP")}} oder {{Glossary("UDP", "UDP")}} nicht berücksichtigt.
- [`availableOutgoingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate) {{optional_inline}}
  - : Eine Zahl, die die ungefähre verfügbare ausgehende Kapazität des Netzwerks darstellt. Diese gibt die gesamte Anzahl der Bits pro Sekunde an, die für alle ausgehenden {{Glossary("RTP", "RTP")}}-Streams des Kandidatenpaares verfügbar sind. Auch hier wird die Größe des IP Overheads sowie andere Transportschichten wie {{Glossary("TCP", "TCP")}} oder {{Glossary("UDP", "UDP")}} nicht berücksichtigt.
- [`bytesDiscardedOnSend`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesDiscardedOnSend) {{optional_inline}} {{experimental_inline}}
  - : Eine ganze Zahl, die die Gesamtzahl der Bytes darstellt, die aufgrund von Socket-Fehlern bei diesem Kandidatenpaar verworfen wurden.
- [`bytesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesReceived) {{optional_inline}}
  - : Eine ganze Zahl, die die Gesamtzahl der Nutzdatenbytes darstellt, die bei diesem Kandidatenpaar empfangen wurden.
- [`bytesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesSent) {{optional_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der Nutzdatenbytes darstellt, die bei diesem Kandidatenpaar gesendet wurden (die Gesamtanzahl der gesendeten Bytes ohne Berücksichtigung von Headern, Auffüllung oder anderem Protokolloverhead).
- [`consentRequestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/consentRequestsSent) {{optional_inline}} {{experimental_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der [STUN](/de/docs/Web/API/WebRTC_API/Protocols#stun)-Zustimmungsanforderungen darstellt, die bei diesem Kandidatenpaar gesendet wurden.
- [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime) {{optional_inline}}
  - : Eine Zahl, die die Gesamtzeit in Sekunden darstellt, die zwischen dem zuletzt gesendeten STUN-Anforderung und dem Erhalt der Antwort verstrichen ist. Diese kann auf Anfragen basieren, die in der Bestätigung der Erlaubnis, die Verbindung zu öffnen, involviert waren.
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der das letzte Paket von der lokalen Gegenstelle von der entfernten Gegenstelle für dieses Kandidatenpaar empfangen wurde. Zeitstempel werden für STUN-Pakete nicht aufgezeichnet.
- [`lastPacketSentTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der das letzte Paket von der lokalen Gegenstelle zur entfernten Gegenstelle für dieses Kandidatenpaar gesendet wurde. Zeitstempel werden für STUN-Pakete nicht aufgezeichnet.
- [`localCandidateId`](/de/docs/Web/API/RTCIceCandidatePairStats/localCandidateId) {{optional_inline}}
  - : Ein String, der die eindeutige ID darstellt, die dem [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) aus den in dem [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekt enthaltenen Daten entspricht und Statistiken für den lokalen Kandidaten des Kandidatenpaares bereitstellt.
- [`nominated`](/de/docs/Web/API/RTCIceCandidatePairStats/nominated) {{optional_inline}}
  - : Ein boolescher Wert, der, wenn `true`, anzeigt, dass das durch dieses Objekt beschriebene Kandidatenpaar vorgeschlagen wurde und verwendet wird (oder wurde), wenn seine Priorität die höchste unter den nominierten Kandidatenpaaren ist. Siehe {{RFC(5245, "", "7.1.3.2.4")}} für Details.
- [`packetsDiscardedOnSend`](/de/docs/Web/API/RTCIceCandidatePairStats/packetsDiscardedOnSend) {{optional_inline}} {{experimental_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der Pakete darstellt, die aufgrund von Socket-Fehlern bei diesem Kandidatenpaar verworfen wurden.
- [`packetsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/packetsReceived) {{optional_inline}} {{experimental_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der Pakete darstellt, die bei diesem Kandidatenpaar empfangen wurden.
- [`packetsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/packetsSent) {{optional_inline}} {{experimental_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der Pakete darstellt, die bei diesem Kandidatenpaar gesendet wurden.
- [`remoteCandidateId`](/de/docs/Web/API/RTCIceCandidatePairStats/remoteCandidateId) {{optional_inline}}
  - : Ein String, der eine eindeutige ID enthält, die dem entfernten Kandidaten entspricht, aus dem Daten entnommen wurden, um das `RTCIceCandidateStats`-Objekt zu konstruieren, das das entfernte Ende der Verbindung beschreibt.
- [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived) {{optional_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der empfangenen Konnektivitätsprüfungsanforderungen darstellt, einschließlich der erneuten Übertragungen. Dieser Wert umfasst sowohl Konnektivitätsprüfungen als auch STUN-Zustimmungsprüfungen.
- [`requestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsSent) {{optional_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der gesendeten Konnektivitätsprüfungsanforderungen darstellt, _nicht_ einschließlich der erneuten Übertragungen.
- [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) {{optional_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der erhaltenen Konnektivitätsprüfungsantworten darstellt.
- [`responsesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesSent) {{optional_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der gesendeten Konnektivitätsprüfungsantworten darstellt. Dies umfasst sowohl Konnektivitätsprüfungsanforderungen als auch STUN-Zustimmungsanforderungen.
- [`state`](/de/docs/Web/API/RTCIceCandidatePairStats/state) {{optional_inline}}
  - : Ein String, der den Zustand der Verbindung zwischen den beiden Kandidaten angibt.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) {{optional_inline}}
  - : Eine Zahl, die die gesamte Zeit in Sekunden angibt, die zwischen dem Senden von STUN-Anfragen und dem Erhalten von Antworten darauf verstrichen ist, für alle auf diesem Kandidatenpaar bis dato gestellten Anfragen. Dies umfasst sowohl Konnektivitätsprüfungen als auch Zustimmungsprüfungsanforderungen. Sie können die durchschnittliche Round-Trip-Zeit (RTT) berechnen, indem Sie diesen Wert durch [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) teilen.
- [`transportId`](/de/docs/Web/API/RTCIceCandidatePairStats/transportId) {{optional_inline}}
  - : Ein String, der das [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) eindeutig identifiziert, das inspiziert wurde, um die transportbezogenen Statistiken (wie im [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) zu finden) zu erhalten, die zur Übermittlung dieses Objekts genutzt wurden.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCIceCandidatePairStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCIceCandidatePairStats/type)
  - : Ein String mit dem Wert `"candidate-pair"`, der den Typ der Statistiken angibt, die das Objekt enthält.

### Veraltete Eigenschaften

Die folgenden Eigenschaften wurden aus der Spezifikation entfernt und sollten nicht mehr verwendet werden.
Sie sollten vorhandenen Code so bald wie möglich aktualisieren, um ihre Verwendung zu vermeiden.
Prüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details darüber, welche Browser sie unterstützen und in welchen Versionen.

- [`priority`](/de/docs/Web/API/RTCIceCandidatePairStats/priority) {{Deprecated_Inline}} {{optional_inline}} {{non-standard_inline}}
  - : Ein ganzzahliger Wert, der die Priorität des Kandidatenpaares angibt.
- [`readable`](/de/docs/Web/API/RTCIceCandidatePairStats/readable) {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der angibt, ob Daten über die Verbindung gesendet werden können, die durch das Kandidatenpaar beschrieben wird.
- [`writable`](/de/docs/Web/API/RTCIceCandidatePairStats/writable) {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der angibt, ob Daten über die Verbindung empfangen werden können, die durch das Kandidatenpaar beschrieben wird.

### Nicht standardmäßige Eigenschaften

- [`selected`](/de/docs/Web/API/RTCIceCandidatePairStats/selected) {{Non-standard_Inline}} {{optional_inline}}
  - : Ein Firefox-spezifischer boolescher Wert, der `true` ist, wenn das durch dieses Objekt beschriebene Kandidatenpaar das derzeit verwendete ist. Die spezifikationskonforme Methode zur Bestimmung des ausgewählten Kandidatenpaares besteht darin, ein Statistikobjekt vom Typ `transport` zu suchen, das ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt ist. Die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId)-Eigenschaft dieses Objekts gibt an, ob der angegebene Transport derjenige ist, der verwendet wird.

## Nutzungshinweise

Das derzeit aktive ICE-Kandidatenpaar – falls vorhanden – kann durch Aufrufen der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Methode [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) erhalten werden, die ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt zurückgibt oder `null`, wenn kein Paar ausgewählt ist. Das aktive Kandidatenpaar beschreibt die aktuelle Konfiguration der beiden Enden der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Jedes Kandidatenpaar, das nicht das aktive Paar der Kandidaten für einen Transport ist, wird gelöscht, wenn der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) einen ICE-Neustart durchführt, woraufhin der [`state`](/de/docs/Web/API/RTCIceTransport/state) des ICE-Transports wieder auf `new` gesetzt wird und die Verhandlung erneut beginnt. Weitere Informationen finden Sie unter [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).

## Beispiel

Dieses Beispiel berechnet die durchschnittliche Zeit, die zwischen Konnektivitätsprüfungen vergangen ist.

```js
if (rtcStats && rtcStats.type === "candidate-pair") {
  let elapsed =
    (rtcStats.lastRequestTimestamp - rtcStats.firstRequestTimestamp) /
    rtcStats.requestsSent;

  console.log(`Average time between ICE connectivity checks: ${elapsed} ms.`);
}
```

Der Code beginnt damit, `rtcStats` dahingehend zu überprüfen, ob sein [`type`](/de/docs/Web/API/RTCIceCandidatePairStats/type) `candidate-pair` ist. Wenn dies der Fall ist, wissen wir, dass `rtcStats` in der Tat ein `RTCIceCandidatePairStats`-Objekt ist. Wir können dann die durchschnittliche Zeit berechnen, die zwischen STUN-Konnektivitätsprüfungen vergangen ist, und diese Informationen protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
