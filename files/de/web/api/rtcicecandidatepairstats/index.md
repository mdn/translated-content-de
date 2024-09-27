---
title: RTCIceCandidatePairStats
slug: Web/API/RTCIceCandidatePairStats
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidatePairStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu melden, die Einblicke in die Qualität und Leistung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bieten, während diese verbunden und konfiguriert ist, wie durch das angegebene Paar von [ICE](/de/docs/Glossary/ICE) Kandidaten beschrieben.

Die Statistiken können abgerufen werden, indem das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert wird, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis ein Eintrag mit dem [`type`](#type) von `"candidate-pair"` gefunden wird.

## Instanz-Eigenschaften

- [`availableIncomingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate) {{optional_inline}}
  - : Bietet einen Wert, der die verfügbare eingehende Kapazität des Netzwerks angibt, indem die gesamte Anzahl an Bits pro Sekunde für alle eingehenden [RTP](/de/docs/Glossary/RTP)-Streams des Kandidatenpaares gemeldet wird. Dies berücksichtigt nicht die Größe des [IP](/de/docs/Glossary/IP)-Overheads oder anderer Transportschichten wie [TCP](/de/docs/Glossary/TCP) oder [UDP](/de/docs/Glossary/UDP).
- [`availableOutgoingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate) {{optional_inline}}
  - : Bietet einen informativen Wert, der die verfügbare ausgehende Kapazität des Netzwerks angibt, indem die gesamte Anzahl an Bits pro Sekunde für alle ausgehenden [RTP](/de/docs/Glossary/RTP)-Streams des Kandidatenpaares gemeldet wird. Dies berücksichtigt nicht die Größe des [IP](/de/docs/Glossary/IP)-Overheads oder anderer Transportschichten wie [TCP](/de/docs/Glossary/TCP) oder [UDP](/de/docs/Glossary/UDP).
- [`bytesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesReceived) {{optional_inline}}
  - : Die Gesamtanzahl der bisher auf diesem Kandidatenpaar empfangenen Nutzbytes (d. h. die Gesamtanzahl der empfangenen Bytes abzüglich aller Header, Auffüllungen oder anderer administrativer Overheads).
- [`bytesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesSent) {{optional_inline}}
  - : Die Gesamtanzahl der bis jetzt auf diesem Kandidatenpaar gesendeten Nutzbytes (d. h. die Gesamtanzahl der gesendeten Bytes abzüglich aller Header, Auffüllungen oder anderer administrativer Overheads).
- [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime) {{optional_inline}}
  - : Ein Gleitkommawert, der die gesamte Zeit in Sekunden angibt, die zwischen der zuletzt gesendeten STUN-Anfrage und dem Erhalt der Antwort verstrichen ist. Dies kann auf Anfragen basieren, die zur Bestätigung der Berechtigung zum Öffnen der Verbindung beteiligt waren.
- [`lastPacketReceivedTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitpunkt angibt, zu dem das letzte Paket vom lokalen Peer für dieses Kandidatenpaar empfangen wurde. Zeitstempel werden nicht für STUN-Pakete aufgezeichnet.
- [`lastPacketSentTimestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp) {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitpunkt angibt, zu dem das letzte Paket vom lokalen Peer an den entfernten Peer für dieses Kandidatenpaar gesendet wurde. Zeitstempel werden nicht für STUN-Pakete aufgezeichnet.
- [`localCandidateId`](/de/docs/Web/API/RTCIceCandidatePairStats/localCandidateId) {{optional_inline}}
  - : Die eindeutige ID-Zeichenfolge, die dem [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) aus den in dem [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) Objekt enthaltenen Daten entspricht, das Statistiken für den lokalen Kandidaten des Kandidatenpaares liefert.
- [`nominated`](/de/docs/Web/API/RTCIceCandidatePairStats/nominated) {{optional_inline}}
  - : Ein Boolean-Wert, der, wenn `true`, angibt, dass das durch dieses Objekt beschriebene Kandidatenpaar eines ist, das zur Verwendung vorgeschlagen wurde und verwendet wird (oder wurde), wenn seine Priorität die höchste unter den nominierten Kandidatenpaaren ist. Siehe {{RFC(5245, "", "7.1.3.2.4")}} für Details.
- [`remoteCandidateId`](/de/docs/Web/API/RTCIceCandidatePairStats/remoteCandidateId) {{optional_inline}}
  - : Die eindeutige ID-Zeichenfolge, die dem entfernten Kandidaten entspricht, aus dem Daten entnommen wurden, um das `RTCIceCandidateStats`-Objekt zu erstellen, das das entfernte Ende der Verbindung beschreibt.
- [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived) {{optional_inline}}
  - : Die Gesamtanzahl an erhaltenen Verbindungstest-Anfragen einschließlich der erneuten Übertragungen. Dieser Wert umfasst sowohl Verbindungstests als auch STUN-Berechtigungsprüfungen.
- [`requestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsSent) {{optional_inline}}
  - : Die Gesamtanzahl der gesendeten Verbindungstest-Anfragen, _ohne_ erneute Übertragungen.
- [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) {{optional_inline}}
  - : Die Gesamtanzahl an empfangenen Verbindungstest-Antworten.
- [`responsesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesSent) {{optional_inline}}
  - : Die Gesamtanzahl der gesendeten Verbindungstest-Antworten. Dies umfasst sowohl Verbindungstest-Anfragen als auch STUN-Berechtigungsanforderungen.
- [`state`](/de/docs/Web/API/RTCIceCandidatePairStats/state) {{optional_inline}}
  - : Eine Zeichenfolge, die den Zustand der Verbindung zwischen den beiden Kandidaten angibt.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) {{optional_inline}}
  - : Ein Gleitkommawert, der die gesamte Zeit in Sekunden angibt, die zwischen dem Versenden von STUN-Anfragen und dem Erhalt der Antworten darauf verstrichen ist, für alle derartigen Anfragen, die bisher auf diesem Kandidatenpaar getätigt wurden. Dies umfasst sowohl Verbindungstests als auch Berechtigungsprüfungen. Sie können die durchschnittliche Round-Trip-Zeit (RTT) berechnen, indem Sie diesen Wert durch [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) teilen.
- [`transportId`](/de/docs/Web/API/RTCIceCandidatePairStats/transportId) {{optional_inline}}
  - : Eine Zeichenfolge, die den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) eindeutig identifiziert, der untersucht wurde, um die transportbezogenen Statistiken zu erhalten (wie sie in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) enthalten sind), die zur Erstellung dieses Objekts verwendet wurden.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCIceCandidatePairStats/id)
  - : Eine Zeichenfolge, die das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCIceCandidatePairStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCIceCandidatePairStats/type)
  - : Eine Zeichenfolge mit dem Wert `"candidate-pair"`, die den Typ der Statistiken angibt, den das Objekt enthält.

### Veraltete Eigenschaften

Die folgenden Eigenschaften wurden aus der Spezifikation entfernt und sollten nicht mehr verwendet werden. Sie sollten bestehenden Code so bald wie möglich aktualisieren, um deren Verwendung zu vermeiden. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details darüber, welche Browser sie unterstützen und in welchen Versionen.

- [`priority`](/de/docs/Web/API/RTCIceCandidatePairStats/priority) {{Deprecated_Inline}} {{optional_inline}} {{non-standard_inline}}
  - : Ein ganzzahliger Wert, der die Priorität des Kandidatenpaares angibt.
- [`readable`](/de/docs/Web/API/RTCIceCandidatePairStats/readable) {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein Boolean-Wert, der angibt, ob Daten über die Verbindung, die durch das Kandidatenpaar beschrieben wird, gesendet werden können oder nicht.
- [`writable`](/de/docs/Web/API/RTCIceCandidatePairStats/writable) {{Deprecated_Inline}} {{optional_inline}} {{Non-standard_Inline}}
  - : Ein Boolean-Wert, der angibt, ob Daten auf der Verbindung empfangen werden können, die durch das Kandidatenpaar beschrieben wird oder nicht.

### Nicht standardisierte Eigenschaften

- [`selected`](/de/docs/Web/API/RTCIceCandidatePairStats/selected) {{Non-standard_Inline}} {{optional_inline}}
  - : Ein Firefox-spezifischer Boolean-Wert, der `true` ist, wenn das durch dieses Objekt beschriebene Kandidatenpaar das derzeit verwendete ist. Die spezifikationskonforme Methode, um das ausgewählte Kandidatenpaar zu bestimmen, besteht darin, nach einem Statistikobjekt des Typs `transport` zu suchen, das ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt ist. Die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId)-Eigenschaft dieses Objekts gibt an, ob der angegebene Transport derjenige ist, der verwendet wird.

## Nutzungshinweise

Das derzeit aktive ICE Kandidatenpaar - falls vorhanden - kann durch Aufrufen der Methode [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) von [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) abgerufen werden, die ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt oder `null` zurückgibt, wenn kein Paar ausgewählt ist. Das aktive Kandidatenpaar beschreibt die aktuelle Konfiguration der beiden Enden der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Jedes Kandidatenpaar, das nicht das aktive Paar von Kandidaten für einen Transport ist, wird gelöscht, wenn der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) ein ICE Restart durchführt, wobei der [`state`](/de/docs/Web/API/RTCIceTransport/state) des ICE-Transports auf `new` zurückgesetzt wird und die Verhandlung erneut beginnt. Für weitere Informationen siehe [ICE Restart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).

## Beispiel

Dieses Beispiel berechnet die durchschnittliche Zeitspanne zwischen Verbindungstests.

```js
if (rtcStats && rtcStats.type === "candidate-pair") {
  let elapsed =
    (rtcStats.lastRequestTimestamp - rtcStats.firstRequestTimestamp) /
    rtcStats.requestsSent;

  console.log(`Average time between ICE connectivity checks: ${elapsed} ms.`);
}
```

Der Code beginnt damit, `rtcStats` zu überprüfen, um festzustellen, ob sein [`type`](/de/docs/Web/API/RTCIceCandidatePairStats/type) `candidate-pair` ist. Wenn dies der Fall ist, wissen wir, dass `rtcStats` tatsächlich ein `RTCIceCandidatePairStats`-Objekt ist. Wir können dann die durchschnittliche Zeitspanne zwischen den STUN-Verbindungstests berechnen und diese Informationen protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
