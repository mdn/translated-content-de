---
title: RTCIceCandidateStats
slug: Web/API/RTCIceCandidateStats
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidateStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken im Zusammenhang mit einem [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) zu melden.

Die Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCIceCandidateStats/type) von `local-candidate` finden.

## Instanzeigenschaften

- [`address`](/de/docs/Web/API/RTCIceCandidateStats/address) {{optional_inline}}
  - : Ein String, der die Adresse des Kandidaten enthält. Dieser Wert kann eine IPv4-Adresse, eine IPv6-Adresse oder ein vollständig qualifizierter Domain-Name sein. Diese Eigenschaft wurde zuvor `ip` genannt und akzeptierte nur IP-Adressen.
    Entspricht [`RTCIceCandidate.address`](/de/docs/Web/API/RTCIceCandidate/address).
- [`candidateType`](/de/docs/Web/API/RTCIceCandidateStats/candidateType)
  - : Ein String, der einem der Werte in [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) entspricht und angibt, welche Art von Kandidat das Objekt Statistiken liefert.
- [`foundation`](/de/docs/Web/API/RTCIceCandidateStats/foundation) {{optional_inline}} {{experimental_inline}}
  - : Ein String, der den Kandidaten über mehrere Transporte hinweg eindeutig identifiziert.
    Entspricht [`RTCIceCandidate.foundation`](/de/docs/Web/API/RTCIceCandidate/foundation).
- [`port`](/de/docs/Web/API/RTCIceCandidateStats/port) {{optional_inline}}
  - : Die Netzwerkportnummer, die vom Kandidaten verwendet wird.
    Entspricht [`RTCIceCandidate.port`](/de/docs/Web/API/RTCIceCandidate/port).
- [`priority`](/de/docs/Web/API/RTCIceCandidateStats/priority) {{optional_inline}}
  - : Die Priorität des Kandidaten.
    Entspricht [`RTCIceCandidate.priority`](/de/docs/Web/API/RTCIceCandidate/priority).
- [`protocol`](/de/docs/Web/API/RTCIceCandidateStats/protocol) {{optional_inline}}
  - : Ein String, der das Protokoll (`tcp` oder `udp`) angibt, das zur Datenübertragung auf dem `port` verwendet wird.
    Entspricht [`RTCIceCandidate.protocol`](/de/docs/Web/API/RTCIceCandidate/protocol).
- [`transportId`](/de/docs/Web/API/RTCIceCandidateStats/transportId)
  - : Ein String, der das Transportobjekt eindeutig identifiziert, das inspiziert wurde, um die [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) zu erhalten, die mit dem korrespondierenden Kandidaten in Verbindung stehen, der diese Statistiken hat.
- [`usernameFragment`](/de/docs/Web/API/RTCIceCandidateStats/usernameFragment) {{optional_inline}} {{experimental_inline}}
  - : Ein String, der den ICE-Benutzernamen-Fragment ("ice-ufrag") enthält.
    Entspricht [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCIceCandidateStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Statistikmenge zu erstellen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCIceCandidateStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCIceCandidateStats/type)
  - : Ein String mit dem Wert `"local-candidate"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist, verwendet der folgende Code `await`, um auf den Statistikbericht zu warten, und geht dann diesen mit `RTCStatsReport.forEach()` durch.
Er filtert dann die Wörterbücher nur für diejenigen Berichte, die den Typ `local-candidate` haben, und protokolliert das Ergebnis.

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
