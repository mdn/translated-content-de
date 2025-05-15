---
title: RTCIceCandidateStats
slug: Web/API/RTCIceCandidateStats
l10n:
  sourceCommit: d9e11f88996e97a259d2ec47f47a660062c12c4f
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidateStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu einem [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) zu berichten.

Die Statistiken können durch Iteration des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) abgerufen werden, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCIceCandidateStats/type) von `local-candidate` finden.

## Instanzeigenschaften

- [`address`](/de/docs/Web/API/RTCIceCandidateStats/address) {{optional_inline}}
  - : Ein String, der die Adresse des Kandidaten enthält. Dieser Wert kann eine IPv4-Adresse, eine IPv6-Adresse oder ein vollständig qualifizierter Domainname sein. Diese Eigenschaft wurde vorher als `ip` bezeichnet und akzeptierte nur IP-Adressen.
    Entspricht [`RTCIceCandidate.address`](/de/docs/Web/API/RTCIceCandidate/address).
- [`candidateType`](/de/docs/Web/API/RTCIceCandidateStats/candidateType)
  - : Ein String, der einem der Werte in [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) entspricht und angibt, für welche Art von Kandidat das Objekt Statistiken bereitstellt.
- [`deleted`](/de/docs/Web/API/RTCIceCandidateStats/deleted)
  - : Ein boolescher Wert, der angibt, ob der Kandidat gelöscht oder freigegeben wurde.
- [`foundation`](/de/docs/Web/API/RTCIceCandidateStats/foundation) {{optional_inline}} {{experimental_inline}}
  - : Ein String, der den Kandidaten eindeutig über mehrere Transporte hinweg identifiziert.
    Entspricht [`RTCIceCandidate.foundation`](/de/docs/Web/API/RTCIceCandidate/foundation).
- [`port`](/de/docs/Web/API/RTCIceCandidateStats/port) {{optional_inline}}
  - : Die Netzwerkportnummer, die vom Kandidaten verwendet wird.
    Entspricht [`RTCIceCandidate.port`](/de/docs/Web/API/RTCIceCandidate/port).
- [`priority`](/de/docs/Web/API/RTCIceCandidateStats/priority) {{optional_inline}}
  - : Die Priorität des Kandidaten.
    Entspricht [`RTCIceCandidate.priority`](/de/docs/Web/API/RTCIceCandidate/priority).
- [`protocol`](/de/docs/Web/API/RTCIceCandidateStats/protocol) {{optional_inline}}
  - : Ein String, der das Protokoll angibt (`tcp` oder `udp`), das zum Übertragen von Daten auf dem `port` verwendet wird.
    Entspricht [`RTCIceCandidate.protocol`](/de/docs/Web/API/RTCIceCandidate/protocol).
- [`relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol)
  - : Ein String, der das Protokoll angibt, das von einem lokalen {{Glossary("ICE", "ICE")}}-Kandidaten verwendet wird, um mit dem {{Glossary("TURN", "TURN")}}-Server zu kommunizieren.
- [`transportId`](/de/docs/Web/API/RTCIceCandidateStats/transportId)
  - : Ein String, der das Transportobjekt eindeutig identifiziert, das untersucht wurde, um die [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) zu erhalten, die dem Kandidaten entsprechen, der diesen Statistiken entspricht.
- [`url`](/de/docs/Web/API/RTCIceCandidateStats/url) {{optional_inline}}
  - : Ein String, der die URL des {{Glossary("ICE", "ICE")}}-Servers angibt, von dem der beschriebene Kandidat abgerufen wurde. Diese Eigenschaft ist _nur_ für lokale Kandidaten verfügbar.
- [`usernameFragment`](/de/docs/Web/API/RTCIceCandidateStats/usernameFragment) {{optional_inline}} {{experimental_inline}}
  - : Ein String, der das ICE-Username-Fragment ("ice-ufrag") enthält.
    Entspricht [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCIceCandidateStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu produzieren, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCIceCandidateStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCIceCandidateStats/type)
  - : Ein String mit dem Wert `"local-candidate"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, Sie haben eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist. Der folgende Code verwendet `await`, um auf den Statistikbericht zu warten und iteriert dann über diesen mithilfe von `RTCStatsReport.forEach()`.
Er filtert dann die Wörterbücher für genau diejenigen Berichte heraus, die den Typ `local-candidate` haben, und protokolliert das Ergebnis.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "local-candidate") {
    // Log the ICE candidate information
    console.log(report);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
