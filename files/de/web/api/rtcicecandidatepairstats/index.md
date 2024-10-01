---
title: RTCIceCandidatePairStats
slug: Web/API/RTCIceCandidatePairStats
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidatePairStats`**-Dictionary der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu berichten, die Einblick in die Qualität und Leistung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ermöglichen, während diese verbunden und konfiguriert ist, wie durch das spezifizierte Paar von {{Glossary("ICE", "ICE")}}-Kandidaten beschrieben.

Die Statistiken können abgerufen werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, durchlaufen wird, bis ein Eintrag mit dem [`type`](#type) `"candidate-pair"` gefunden wird.

## Instanz-Eigenschaften

- [`availableIncomingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate) {{optional_inline}}
  - : Bietet einen Wert, der die verfügbare eingehende Netzwerkkapazität darstellt, indem die Gesamtanzahl der pro Sekunde verfügbaren Bits für alle eingehenden {{Glossary("RTP", "RTP")}}-Streams des Kandidatenpaars gemeldet wird. Dabei werden weder die Größe des {{Glossary("IP", "IP")}}-Overheads noch andere Transportschichten wie {{Glossary("TCP", "TCP")}} oder {{Glossary("UDP", "UDP")}} berücksichtigt.
- [`availableOutgoingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate) {{optional_inline}}
  - : Bietet einen informativen Wert, der die verfügbare ausgehende Netzwerkkapazität darstellt, indem die Gesamtanzahl der pro Sekunde verfügbaren Bits für alle ausgehenden {{Glossary("RTP", "RTP")}}-Streams des Kandidatenpaars gemeldet wird. Dabei werden weder die Größe des {{Glossary("IP", "IP")}}-Overheads noch andere Transportschichten wie {{Glossary("TCP", "TCP")}} oder {{Glossary("UDP", "UDP")}} berücksichtigt.
- [`bytesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesReceived) {{optional_inline}}
  - : Die Gesamtanzahl der bisher bei diesem Kandidatenpaar empfangenen Nutzdaten-Bytes (das heißt, die Gesamtanzahl der empfangenen Bytes abzüglich jeglicher Header, Polsterung oder anderweitiger administrativer Overheads).
- [`bytesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesSent) {{optional_inline}}
  - : Die Gesamtanzahl der bisher bei diesem Kandidatenpaar gesendeten Nutzdaten-Bytes (das heißt, die Gesamtanzahl der gesendeten Bytes abzüglich jeglicher Header, Polsterung oder anderweitiger administrativer Overheads).
- [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime) {{optional_inline}}
  - : Ein Gleitkommawert, der die Gesamtzeit in Sekunden angibt, die zwischen der zuletzt gesendeten STUN-Anfrage und dem Empfang der Antwort vergangen ist. Dies kann auf Anfragen basieren, die zur Bestätigung der Erlaubnis zum Öffnen der Verbindung verwendet wurden.
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket von dem entfernten Gegenstück für dieses Kandidatenpaar empfangen wurde. Zeitstempel werden nicht für STUN-Pakete erfasst.
- [`lastPacketSentTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das letzte Paket vom lokalen Gegenstück zum entfernten Gegenstück für dieses Kandidatenpaar gesendet wurde. Zeitstempel werden nicht für STUN-Pakete erfasst.
- [`localCandidateId`](/de/docs/Web/API/RTCIceCandidatePairStats/localCandidateId) {{optional_inline}}
  - : Die eindeutige ID-Zeichenkette, die dem [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) entspricht, aus den in dem [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekt enthaltenen Daten, die Statistiken für den lokalen Kandidaten des Kandidatenpaars liefern.
- [`nominated`](/de/docs/Web/API/RTCIceCandidatePairStats/nominated) {{optional_inline}}
  - : Ein Boolean-Wert, der, falls `true`, anzeigt, dass das von diesem Objekt beschriebene Kandidatenpaar vorgeschlagen wurde und benutzt wird (oder wurde), wenn dessen Priorität die höchste unter den nominierten Kandidatenpaaren ist. Siehe {{RFC(5245, "", "7.1.3.2.4")}} für Details.
- [`remoteCandidateId`](/de/docs/Web/API/RTCIceCandidatePairStats/remoteCandidateId) {{optional_inline}}
  - : Die eindeutige ID-Zeichenkette, die dem entfernten Kandidaten entspricht, aus dem die Daten für die Konstruktion des `RTCIceCandidateStats`-Objekts entnommen wurden, das das entfernte Ende der Verbindung beschreibt.
- [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived) {{optional_inline}}
  - : Die Gesamtanzahl der empfangenen Verbindungstest-Anfragen, einschließlich der erneut gesendeten. Dieser Wert umfasst sowohl Verbindungstests als auch STUN-Zustimmungsprüfungen.
- [`requestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsSent) {{optional_inline}}
  - : Die Gesamtanzahl der gesendeten Verbindungstest-Anfragen, wobei erneut gesendete nicht berücksichtigt werden.
- [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) {{optional_inline}}
  - : Die Gesamtanzahl der empfangenen Verbindungstest-Antworten.
- [`responsesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesSent) {{optional_inline}}
  - : Die Gesamtanzahl der gesendeten Verbindungstest-Antworten. Dies beinhaltet sowohl Verbindungstest-Anfragen als auch STUN-Zustimmungsanfragen.
- [`state`](/de/docs/Web/API/RTCIceCandidatePairStats/state) {{optional_inline}}
  - : Eine Zeichenfolge, die den Zustand der Verbindung zwischen den beiden Kandidaten angibt.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) {{optional_inline}}
  - : Ein Gleitkommawert, der die Gesamtzeit in Sekunden angibt, die zwischen dem Senden von STUN-Anfragen und dem Empfang ihrer Antworten für alle bisher mit diesem Kandidatenpaar gestellten Anfragen vergangen ist. Dies umfasst sowohl Verbindungstests als auch Zustimmungsprüfungen. Sie können die durchschnittliche Rundlaufzeit (RTT) berechnen, indem Sie diesen Wert durch [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) teilen.
- [`transportId`](/de/docs/Web/API/RTCIceCandidatePairStats/transportId) {{optional_inline}}
  - : Eine Zeichenfolge, die den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) eindeutig identifiziert, der inspiziert wurde, um die Transport-bezogenen Statistiken zu erhalten (wie in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gefunden), die zur Erstellung dieses Objekts verwendet wurden.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCIceCandidatePairStats/id)
  - : Eine Zeichenfolge, die das Objekt, das überwacht wird, um diese Statistikmenge zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Stichprobe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCIceCandidatePairStats/type)
  - : Eine Zeichenfolge mit dem Wert `"candidate-pair"`, die den Typ der Statistiken angibt, die das Objekt enthält.

### Veraltete Eigenschaften

Die folgenden Eigenschaften wurden aus der Spezifikation entfernt und sollten nicht mehr verwendet werden.
Sie sollten allen code aktualisieren, um sie so bald wie möglich zu vermeiden.
Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details darüber, welche Browser sie unterstützen und in welchen Versionen.

- [`priority`](/de/docs/Web/API/RTCIceCandidatePairStats/priority) {{Deprecated_Inline}} {{optional_inline}} {{non-standard_inline}}
  - : Ein ganzzahliger Wert, der die Priorität des Kandidatenpaars angibt.
- [`readable`](/de/docs/Web/API/RTCIceCandidatePairStats/readable) {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein Boolean-Wert, der angibt, ob Daten über die vom Kandidatenpaar beschriebene Verbindung gesendet werden können oder nicht.
- [`writable`](/de/docs/Web/API/RTCIceCandidatePairStats/writable) {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein Boolean-Wert, der angibt, ob Daten über die vom Kandidatenpaar beschriebene Verbindung empfangen werden können oder nicht.

### Nicht standardisierte Eigenschaften

- [`selected`](/de/docs/Web/API/RTCIceCandidatePairStats/selected) {{Non-standard_Inline}} {{optional_inline}}
  - : Ein Firefox-spezifischer Boolean-Wert, der `true` ist, wenn das von diesem Objekt beschriebene Kandidatenpaar das derzeit verwendete ist.
    Der spezifikationskonforme Weg, das ausgewählte Kandidatenpaar zu bestimmen, besteht darin, nach einem Statistikobjekt vom Typ `transport` zu suchen, das ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt ist.
    Die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId)-Eigenschaft dieses Objekts gibt an, ob der angegebene Transport derjenige ist, der verwendet wird.

## Nutzungshinweise

Das derzeit aktive ICE-Kandidatenpaar, falls vorhanden, kann durch Aufruf der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Methode [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) ermittelt werden, die ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt oder `null` zurückgibt, wenn kein Paar ausgewählt wurde.
Das aktive Kandidatenpaar beschreibt die aktuelle Konfiguration der beiden Enden der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Jedes Kandidatenpaar, das nicht das aktive Paar von Kandidaten für einen Transport ist, wird gelöscht, wenn der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) einen ICE-Neustart durchführt, zu welchem Zeitpunkt der [`state`](/de/docs/Web/API/RTCIceTransport/state) des ICE-Transports wieder auf `new` gesetzt wird und die Verhandlung erneut beginnt.
Weitere Informationen finden Sie unter [ICE Restart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).

## Beispiel

Dieses Beispiel berechnet die durchschnittliche Zeit, die zwischen Verbindungstests vergeht.

```js
if (rtcStats && rtcStats.type === "candidate-pair") {
  let elapsed =
    (rtcStats.lastRequestTimestamp - rtcStats.firstRequestTimestamp) /
    rtcStats.requestsSent;

  console.log(`Average time between ICE connectivity checks: ${elapsed} ms.`);
}
```

Der Code beginnt mit der Überprüfung, ob `rtcStats` den `type` `candidate-pair` aufweist.
Ist dies der Fall, wissen wir, dass `rtcStats` in der Tat ein `RTCIceCandidatePairStats`-Objekt ist.
Wir können dann die durchschnittliche Zeit berechnen, die zwischen STUN-Verbindungstests vergeht, und diese Information protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
