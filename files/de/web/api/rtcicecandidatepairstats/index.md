---
title: RTCIceCandidatePairStats
slug: Web/API/RTCIceCandidatePairStats
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidatePairStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu melden, die Einblicke in die Qualität und Leistung einer {{domxref("RTCPeerConnection")}} bieten, während sie verbunden und wie durch das angegebene Paar von {{Glossary("ICE")}}-Kandidaten konfiguriert ist.

Die Statistiken können gewonnen werden, indem man den {{domxref("RTCStatsReport")}} durchgeht, der von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, bis man einen Eintrag mit dem [`type`](#type) von `"candidate-pair"` findet.

## Instanz-Eigenschaften

- {{domxref("RTCIceCandidatePairStats.availableIncomingBitrate", "availableIncomingBitrate")}} {{optional_inline}}
  - : Gibt einen Wert an, der die verfügbare Eingangsbandbreite des Netzwerks darstellt, indem die Gesamtanzahl der Bits pro Sekunde gemeldet wird, die für alle eingehenden {{Glossary("RTP")}}-Ströme des Kandidatenpaares verfügbar sind. Dabei wird weder die Größe des {{Glossary("IP")}}-Overheads noch andere Transportschichten wie {{Glossary("TCP")}} oder {{Glossary("UDP")}} berücksichtigt.
- {{domxref("RTCIceCandidatePairStats.availableOutgoingBitrate", "availableOutgoingBitrate")}} {{optional_inline}}
  - : Gibt einen informativen Wert an, der die verfügbare Ausgangskapazität des Netzwerks darstellt, indem die Gesamtanzahl der Bits pro Sekunde gemeldet wird, die für alle ausgehenden {{Glossary("RTP")}}-Ströme des Kandidatenpaares verfügbar sind. Dabei werden weder die Größe des {{Glossary("IP")}}-Overheads noch andere Transportschichten wie {{Glossary("TCP")}} oder {{Glossary("UDP")}} berücksichtigt.
- {{domxref("RTCIceCandidatePairStats/bytesReceived", "bytesReceived")}} {{optional_inline}}
  - : Die Gesamtanzahl der Nutzdatenbytes, die bisher auf diesem Kandidatenpaar empfangen wurden (also die Gesamtanzahl der empfangenen Bytes abzüglich etwaiger Header, Polsterung oder anderer administrativer Overheads).
- {{domxref("RTCIceCandidatePairStats.bytesSent", "bytesSent")}} {{optional_inline}}
  - : Die Gesamtanzahl der Nutzdatenbytes, die bisher auf diesem Kandidatenpaar gesendet wurden (also die Gesamtanzahl der gesendeten Bytes abzüglich etwaiger Header, Polsterung oder anderer administrativer Overheads).
- {{domxref("RTCIceCandidatePairStats.currentRoundTripTime", "currentRoundTripTime")}} {{optional_inline}}
  - : Ein Gleitkommawert, der die Gesamtzeit in Sekunden angibt, die zwischen dem zuletzt gesendeten STUN-Request und dem Empfang der Antwort vergangen ist. Dies kann auf Anfragen basieren, die zur Bestätigung der Erlaubnis zum Öffnen der Verbindung beteiligt waren.
- {{domxref("RTCIceCandidatePairStats.lastPacketReceivedTimestamp", "lastPacketReceivedTimestamp")}} {{optional_inline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der die Zeit angibt, zu der das letzte Paket vom entfernten Peer für dieses Kandidatenpaar beim lokalen Peer eingegangen ist. Zeitstempel werden für STUN-Pakete nicht aufgezeichnet.
- {{domxref("RTCIceCandidatePairStats.lastPacketSentTimestamp", "lastPacketSentTimestamp")}} {{optional_inline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der die Zeit angibt, zu der das letzte Paket vom lokalen Peer zum entfernten Peer für dieses Kandidatenpaar gesendet wurde. Zeitstempel werden für STUN-Pakete nicht aufgezeichnet.
- {{domxref("RTCIceCandidatePairStats.localCandidateId", "localCandidateId")}} {{optional_inline}}
  - : Die eindeutige ID-Zeichenkette, die dem {{domxref("RTCIceCandidate")}} aus den in dem {{domxref("RTCIceCandidateStats")}}-Objekt enthaltenen Daten entspricht, das Statistiken für den lokalen Kandidaten des Kandidatenpaares bereitstellt.
- {{domxref("RTCIceCandidatePairStats.nominated", "nominated")}} {{optional_inline}}
  - : Ein Boolescher Wert, der, falls `true`, anzeigt, dass das von diesem Objekt beschriebene Kandidatenpaar eines ist, das zur Verwendung vorgeschlagen wurde und verwendet wird (oder verwendet wurde), wenn seine Priorität die höchste unter den nominierten Kandidatenpaaren ist. Siehe {{RFC(5245, "", "7.1.3.2.4")}} für Details.
- {{domxref("RTCIceCandidatePairStats.remoteCandidateId", "remoteCandidateId")}} {{optional_inline}}
  - : Die eindeutige ID-Zeichenkette, die dem entfernten Kandidaten entspricht, dessen Daten zum Erstellen des `RTCIceCandidateStats`-Objekts verwendet wurden, das das entfernte Ende der Verbindung beschreibt.
- {{domxref("RTCIceCandidatePairStats.requestsReceived", "requestsReceived")}} {{optional_inline}}
  - : Die Gesamtanzahl der empfangenen Verbindungstest-Anfragen, einschließlich der Wiederholungen. Dieser Wert enthält sowohl Verbindungstests als auch STUN-Einverständnistests.
- {{domxref("RTCIceCandidatePairStats.requestsSent", "requestsSent")}} {{optional_inline}}
  - : Die Gesamtanzahl der gesendeten Verbindungstest-Anfragen, _ohne_ die Wiedergaben.
- {{domxref("RTCIceCandidatePairStats.responsesReceived", "responsesReceived")}} {{optional_inline}}
  - : Die Gesamtanzahl der empfangenen Verbindungstest-Antworten.
- {{domxref("RTCIceCandidatePairStats.responsesSent", "responsesSent")}} {{optional_inline}}
  - : Die Gesamtanzahl der gesendeten Verbindungstest-Antworten. Dies umfasst sowohl Verbindungstest-Anfragen als auch STUN-Einverständnisanforderungen.
- {{domxref("RTCIceCandidatePairStats.state", "state")}} {{optional_inline}}
  - : Eine Zeichenkette, die den Status der Verbindung zwischen den beiden Kandidaten angibt.
- {{domxref("RTCIceCandidatePairStats.totalRoundTripTime", "totalRoundTripTime")}} {{optional_inline}}
  - : Ein Gleitkommawert, der die Gesamtzeit in Sekunden angibt, die zwischen dem Senden von STUN-Anfragen und dem Empfang der Antworten darauf vergangen ist, für alle bisher auf diesem Kandidatenpaar getätigten Anfragen. Dies umfasst sowohl Verbindungstest- als auch Einverständniserfordernisanfragen. Sie können die durchschnittliche Round-Trip-Zeit (RTT) berechnen, indem Sie diesen Wert durch {{domxref("RTCIceCandidatePairStats.responsesReceived", "responsesReceived")}} teilen.
- {{domxref("RTCIceCandidatePairStats.transportId", "transportId")}} {{optional_inline}}
  - : Eine Zeichenkette, die den {{domxref("RTCIceTransport")}} eindeutig identifiziert, der inspiziert wurde, um die transportbezogenen Statistiken (wie in {{domxref("RTCTransportStats")}} zu finden) zu erhalten, die zur Erstellung dieses Objekts verwendet wurden.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- {{domxref("RTCIceCandidatePairStats.id", "id")}}
  - : Eine Zeichenkette, die das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- {{domxref("RTCIceCandidatePairStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt genommen wurde.
- {{domxref("RTCIceCandidatePairStats.type", "type")}}
  - : Eine Zeichenkette mit dem Wert `"candidate-pair"`, die den Typ der Statistiken angibt, die das Objekt enthält.

### Veraltete Eigenschaften

Die folgenden Eigenschaften wurden aus der Spezifikation entfernt und sollten nicht mehr verwendet werden. Sie sollten vorhandenen Code so bald wie möglich aktualisieren, um deren Nutzung zu vermeiden. Überprüfen Sie die [Kompatibilitätstabelle](#browserkompatibilität) für Details, welche Browser sie unterstützen und in welchen Versionen.

- {{domxref("RTCIceCandidatePairStats.priority", "priority")}} {{Deprecated_Inline}} {{optional_inline}} {{non-standard_inline}}
  - : Ein ganzzahliger Wert, der die Priorität des Kandidatenpaares angibt.
- {{domxref("RTCIceCandidatePairStats.readable", "readable")}} {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der anzeigt, ob Daten über die beschriebene Verbindung des Kandidatenpaares gesendet werden können oder nicht.
- {{domxref("RTCIceCandidatePairStats.writable", "writable")}} {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der anzeigt, ob Daten auf der beschriebenen Verbindung des Kandidatenpaares empfangen werden können oder nicht.

### Nicht standardisierte Eigenschaften

- {{domxref("RTCIceCandidatePairStats.selected", "selected")}} {{Non-standard_Inline}} {{optional_inline}}
  - : Ein Firefox-spezifischer boolescher Wert, der `true` ist, wenn das von diesem Objekt beschriebene Kandidatenpaar derzeit verwendet wird.
    Die standardkonforme Methode zur Bestimmung des ausgewählten Kandidatenpaares besteht darin, nach einem Statistikobjekt des Typs `transport` zu suchen, das ein {{domxref("RTCTransportStats")}}-Objekt ist. Dessen {{domxref("RTCTransportStats.selectedCandidatePairId", "selectedCandidatePairId")}}-Eigenschaft gibt an, ob der angegebene Transport derjenige ist, der verwendet wird.

## Nutzungshinweise

Das derzeit aktive ICE-Kandidatenpaar—falls vorhanden—kann durch Aufrufen der {{domxref("RTCIceTransport")}}-Methode {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}} erhalten werden, die ein {{domxref("RTCIceCandidatePair")}}-Objekt oder `null` zurückgibt, wenn kein Paar ausgewählt ist.
Das aktive Kandidatenpaar beschreibt die aktuelle Konfiguration der beiden Enden der {{domxref("RTCPeerConnection")}}.

Jedes Kandidatenpaar, das nicht das aktive Paar von Kandidaten für einen Transport ist, wird gelöscht, wenn das {{domxref("RTCIceTransport")}} ein ICE-Neustart durchführt, woraufhin sich der {{domxref("RTCIceTransport.state", "state")}} des ICE-Transports auf `new` zurücksetzt und die Verhandlung erneut beginnt.
Weitere Informationen finden Sie unter [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).

## Beispiel

Dieses Beispiel berechnet die durchschnittliche Zeit, die zwischen Verbindungstests vergangen ist.

```js
if (rtcStats && rtcStats.type === "candidate-pair") {
  let elapsed =
    (rtcStats.lastRequestTimestamp - rtcStats.firstRequestTimestamp) /
    rtcStats.requestsSent;

  console.log(`Average time between ICE connectivity checks: ${elapsed} ms.`);
}
```

Der Code beginnt damit, `rtcStats` zu überprüfen, um zu sehen, ob dessen {{domxref("RTCIceCandidatePairStats.type", "type")}} `candidate-pair` ist. Falls dem so ist, wissen wir, dass `rtcStats` in der Tat ein `RTCIceCandidatePairStats`-Objekt ist. Wir können dann die durchschnittliche vergangene Zeit zwischen STUN-Verbindungstests berechnen und diese Information protokollieren.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
