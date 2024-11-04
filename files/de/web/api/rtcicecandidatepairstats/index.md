---
title: RTCIceCandidatePairStats
slug: Web/API/RTCIceCandidatePairStats
l10n:
  sourceCommit: 1ea99c8e68a85aac13ba846bbe95a6f686771221
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidatePairStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken bereitzustellen, die Einblick in die Qualität und Leistung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geben, während diese verbunden und konfiguriert ist, wie es durch das angegebene Paar von {{Glossary("ICE", "ICE")}}-Kandidaten beschrieben wird.

Die Statistiken können erhalten werden, indem man den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchläuft, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis man einen Eintrag mit dem [`type`](#type) von `"candidate-pair"` findet.

## Instanz-Eigenschaften

- [`availableIncomingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate) {{optional_inline}} <!-- Not in BCD but is in spec IDL. -->
  - : Eine Zahl, die die verfügbare eingehende Kapazität des Netzwerks darstellt.
    Dies gibt die Gesamtanzahl der pro Sekunde für alle eingehenden {{Glossary("RTP", "RTP")}}-Streams des Kandidatenpaars verfügbaren Bits an.
    Es wird weder die Größe des Internetprotokoll-(IP)-Overheads noch andere Transportschichten wie {{Glossary("TCP", "TCP")}} oder {{Glossary("UDP", "UDP")}} berücksichtigt.
- [`availableOutgoingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate) {{optional_inline}}
  - : Eine Zahl, die die ungefähre verfügbare ausgehende Kapazität des Netzwerks darstellt.
    Dies gibt die Gesamtanzahl der pro Sekunde für alle ausgehenden {{Glossary("RTP", "RTP")}}-Streams des Kandidatenpaars verfügbaren Bits an.
    Dies berücksichtigt weder die Größe des IP-Overheads noch andere Transportschichten wie {{Glossary("TCP", "TCP")}} oder {{Glossary("UDP", "UDP")}}.
- [`bytesDiscardedOnSend`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesDiscardedOnSend) {{optional_inline}} {{experimental_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der aufgrund von Socket-Fehlern bei diesem Kandidatenpaar verworfenen Bytes darstellt.
- [`bytesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesReceived) {{optional_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der Nutzlast-Bytes darstellt, die bei diesem Kandidatenpaar empfangen wurden.
- [`bytesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesSent) {{optional_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der gesendeten Nutzlast-Bytes bei diesem Kandidatenpaar darstellt (die Gesamtanzahl der gesendeten Bytes ohne Header, Puffer oder anderes Protokoll-Overhead).
- [`consentRequestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/consentRequestsSent) {{optional_inline}} {{experimental_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der auf diesem Kandidatenpaar gesendeten [STUN](/de/docs/Web/API/WebRTC_API/Protocols#stun)-Zustimmungsanfragen darstellt.
- [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime) {{optional_inline}}
  - : Eine Zahl, die die Gesamtzeit in Sekunden darstellt, die zwischen der zuletzt gesendeten STUN-Anfrage und dem Empfang der Antwort vergangen ist.
    Dies kann auf Anfragen basieren, die an der Bestätigung der Berechtigung zur Eröffnung der Verbindung beteiligt waren.
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der das letzte Paket vom entfernten Peer für dieses Kandidatenpaar empfangen wurde. Zeitstempel werden für STUN-Pakete nicht aufgezeichnet.
- [`lastPacketSentTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der das letzte Paket vom lokalen Peer zum entfernten Peer für dieses Kandidatenpaar gesendet wurde. Zeitstempel werden für STUN-Pakete nicht aufgezeichnet.
- [`localCandidateId`](/de/docs/Web/API/RTCIceCandidatePairStats/localCandidateId) {{optional_inline}}
  - : Ein String, der die eindeutige ID des [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) aus den Daten im [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekt darstellt, das Statistiken über den lokalen Kandidaten des Kandidatenpaars bereitstellt.
- [`nominated`](/de/docs/Web/API/RTCIceCandidatePairStats/nominated) {{optional_inline}}
  - : Ein Boolean-Wert, der, wenn `true`, anzeigt, dass das durch dieses Objekt beschriebene Kandidatenpaar für die Verwendung vorgeschlagen wurde und verwendet wird (oder wurde), wenn seine Priorität die höchste unter den nominierten Kandidatenpaaren ist. Einzelheiten finden Sie in {{RFC(5245, "", "7.1.3.2.4")}}.
- [`packetsDiscardedOnSend`](/de/docs/Web/API/RTCIceCandidatePairStats/packetsDiscardedOnSend) {{optional_inline}} {{experimental_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der aufgrund von Socket-Fehlern bei diesem Kandidatenpaar verworfenen Pakete darstellt.
- [`packetsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/packetsReceived) {{optional_inline}} {{experimental_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der bei diesem Kandidatenpaar empfangenen Pakete darstellt.
- [`packetsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/packetsSent) {{optional_inline}} {{experimental_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der bei diesem Kandidatenpaar gesendeten Pakete darstellt.
- [`remoteCandidateId`](/de/docs/Web/API/RTCIceCandidatePairStats/remoteCandidateId) {{optional_inline}}
  - : Ein String, der eine eindeutige ID enthält, die dem entfernten Kandidaten entspricht, aus dem die Daten zum Erstellen des `RTCIceCandidateStats`-Objekts stammen, das das entfernte Ende der Verbindung beschreibt.
- [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived) {{optional_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der erhaltenen Konnektivitätsüberprüfungsanfragen darstellt, einschließlich erneuter Übermittlungen. Dieser Wert umfasst sowohl Konnektivitätsüberprüfungen als auch STUN-Zustimmungsüberprüfungen.
- [`requestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsSent) {{optional_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der gesendeten Konnektivitätsüberprüfungsanfragen darstellt, _ohne_ erneute Übermittlungen.
- [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) {{optional_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der erhaltenen Konnektivitätsüberprüfungsantworten darstellt.
- [`responsesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesSent) {{optional_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der gesendeten Konnektivitätsüberprüfungsantworten darstellt. Dies umfasst sowohl Konnektivitätsüberprüfungsanfragen als auch STUN-Zustimmungsanfragen.
- [`state`](/de/docs/Web/API/RTCIceCandidatePairStats/state) {{optional_inline}}
  - : Ein String, der den Status der Verbindung zwischen den beiden Kandidaten angibt.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) {{optional_inline}}
  - : Eine Zahl, die die gesamte verstrichene Zeit in Sekunden angibt, die zwischen dem Senden von STUN-Anfragen und dem Erhalt von Antworten darauf vergangen ist, für alle bisher bei diesem Kandidatenpaar gemachten Anfragen.
    Dies umfasst sowohl Konnektivitätsüberprüfungen als auch Zustimmungsüberprüfungsanfragen. Sie können die durchschnittliche Round Trip Time (RTT) berechnen, indem Sie diesen Wert durch [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) teilen.
- [`transportId`](/de/docs/Web/API/RTCIceCandidatePairStats/transportId) {{optional_inline}}
  - : Ein String, der das [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport), das zur Ermittlung der transportbezogenen Statistiken (wie in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gefunden) inspiziert wurde, eindeutig identifiziert und zur Erstellung dieses Objekts verwendet wurde.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCIceCandidatePairStats/id)
  - : Ein String, der das Objekt, das zur Erzeugung dieses Statistikensatzes überwacht wird, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCIceCandidatePairStats/type)
  - : Ein String mit dem Wert `"candidate-pair"`, der den Typ der Statistiken angibt, die das Objekt enthält.

### Veraltete Eigenschaften

Die folgenden Eigenschaften wurden aus der Spezifikation entfernt und sollten nicht mehr verwendet werden.
Sie sollten jeden vorhandenen Code so schnell wie möglich aktualisieren, um deren Verwendung zu vermeiden.
Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details darüber, welche Browser sie unterstützen und in welchen Versionen.

- [`priority`](/de/docs/Web/API/RTCIceCandidatePairStats/priority) {{Deprecated_Inline}} {{optional_inline}} {{non-standard_inline}}
  - : Ein Ganzzahwert, der die Priorität des Kandidatenpaars angibt.
- [`readable`](/de/docs/Web/API/RTCIceCandidatePairStats/readable) {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein Boolean-Wert, der angibt, ob Daten über die durch das Kandidatenpaar beschriebene Verbindung gesendet werden können oder nicht.
- [`writable`](/de/docs/Web/API/RTCIceCandidatePairStats/writable) {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein Boolean-Wert, der angibt, ob Daten über die durch das Kandidatenpaar beschriebene Verbindung empfangen werden können oder nicht.

### Nicht-standardmäßige Eigenschaften

- [`selected`](/de/docs/Web/API/RTCIceCandidatePairStats/selected) {{Non-standard_Inline}} {{optional_inline}}
  - : Ein Firefox-spezifischer Boolean-Wert, der `true` ist, wenn das durch dieses Objekt beschriebene Kandidatenpaar dasjenige ist, das derzeit verwendet wird.
    Der spezifikationskonforme Weg, das ausgewählte Kandidatenpaar zu bestimmen, besteht darin, nach einem Statistikobjekt des Typs `transport` zu suchen, welches ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt ist.
    Die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId)-Eigenschaft dieses Objekts gibt an, ob der angegebene Transport derjenige ist, der verwendet wird.

## Nutzungsnotizen

Das derzeit aktive ICE-Kandidatenpaar — falls vorhanden — kann ermittelt werden, indem man die `RTCIceTransport`-Methode [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) aufruft, die ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt oder `null` zurückgibt, wenn kein Paar ausgewählt ist.
Das aktive Kandidatenpaar beschreibt die aktuelle Konfiguration der beiden Enden der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Jedes Kandidatenpaar, das nicht das aktive Paar von Kandidaten für einen Transport ist, wird gelöscht, wenn das [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) einen ICE-Neustart durchführt, zu diesem Zeitpunkt kehrt der [`state`](/de/docs/Web/API/RTCIceTransport/state) des ICE-Transports zu `new` zurück und die Verhandlung beginnt erneut.
Weitere Informationen finden Sie unter [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).

## Beispiel

Dieses Beispiel berechnet die durchschnittliche Zeit, die zwischen Konnektivitätsüberprüfungen verstrichen ist.

```js
if (rtcStats && rtcStats.type === "candidate-pair") {
  let elapsed =
    (rtcStats.lastRequestTimestamp - rtcStats.firstRequestTimestamp) /
    rtcStats.requestsSent;

  console.log(`Average time between ICE connectivity checks: ${elapsed} ms.`);
}
```

Der Code beginnt damit, `rtcStats` zu überprüfen, um festzustellen, ob dessen [`type`](/de/docs/Web/API/RTCIceCandidatePairStats/type) `candidate-pair` ist.
Wenn dies der Fall ist, wissen wir, dass `rtcStats` tatsächlich ein `RTCIceCandidatePairStats`-Objekt ist.
Dann können wir die durchschnittliche Zeit berechnen, die zwischen den STUN-Konnektivitätsüberprüfungen vergangen ist, und diese Informationen protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
