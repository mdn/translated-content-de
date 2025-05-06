---
title: RTCIceCandidateStats
slug: Web/API/RTCIceCandidateStats
l10n:
  sourceCommit: ef82d981d563626248276acbf9516aac7445d4fa
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidateStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu einem [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) zu berichten.

Die Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), der durch [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, durchiteriert wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCIceCandidateStats/type) von `local-candidate` finden.

## Instanz-Eigenschaften

- [`address`](/de/docs/Web/API/RTCIceCandidateStats/address) {{optional_inline}}
  - : Ein String, der die Adresse des Kandidaten enthält. Dieser Wert kann eine IPv4-Adresse, eine IPv6-Adresse oder ein vollständig qualifizierter Domainname sein. Diese Eigenschaft wurde zuvor als `ip` bezeichnet und akzeptierte nur IP-Adressen.
    Entspricht [`RTCIceCandidate.address`](/de/docs/Web/API/RTCIceCandidate/address).
- [`candidateType`](/de/docs/Web/API/RTCIceCandidateStats/candidateType)
  - : Ein String, der einem der Werte in [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) entspricht und angibt, für welche Art von Kandidat das Objekt Statistiken bereitstellt.
- [`foundation`](/de/docs/Web/API/RTCIceCandidateStats/foundation) {{optional_inline}}
  - : Ein String, der den Kandidaten über mehrere Transporte hinweg eindeutig identifiziert.
    Entspricht [`RTCIceCandidate.foundation`](/de/docs/Web/API/RTCIceCandidate/foundation).
- [`port`](/de/docs/Web/API/RTCIceCandidateStats/port) {{optional_inline}}
  - : Die vom Kandidaten verwendete Netzwerkportnummer.
    Entspricht [`RTCIceCandidate.port`](/de/docs/Web/API/RTCIceCandidate/port).
- [`priority`](/de/docs/Web/API/RTCIceCandidateStats/priority) {{optional_inline}}
  - : Die Priorität des Kandidaten.
    Entspricht [`RTCIceCandidate.priority`](/de/docs/Web/API/RTCIceCandidate/priority).
- [`protocol`](/de/docs/Web/API/RTCIceCandidateStats/protocol) {{optional_inline}}
  - : Ein String, der das Protokoll angibt (`tcp` oder `udp`), das zur Datenübertragung auf dem `Port` verwendet wird.
    Entspricht [`RTCIceCandidate.protocol`](/de/docs/Web/API/RTCIceCandidate/protocol).
- [`transportId`](/de/docs/Web/API/RTCIceCandidateStats/transportId)
  - : Ein String, der das Transportobjekt, das inspiziert wurde, um die [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) zu erhalten, eindeutig identifiziert. Dieser ist dem Kandidaten zugeordnet, der diesen Statistiken entspricht.
- [`usernameFragment`](/de/docs/Web/API/RTCIceCandidateStats/usernameFragment) {{optional_inline}}
  - : Ein String, der das ICE-Username-Fragment ("ice-ufrag") enthält.
    Entspricht [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCIceCandidateStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Statistik zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCIceCandidateStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCIceCandidateStats/type)
  - : Ein String mit dem Wert `"local-candidate"`, der den Typ von Statistiken angibt, den das Objekt enthält.

## Beispiele

Angenommen, Sie haben eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist. Der folgende Code verwendet `await`, um auf den Statistikbericht zu warten, und durchläuft diesen dann mit `RTCStatsReport.forEach()`.
Es werden dann nur die Wörterbücher gefiltert, die den Typ `local-candidate` aufweisen, und das Ergebnis wird geloggt.

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
