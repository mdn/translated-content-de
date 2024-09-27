---
title: RTCIceCandidateStats
slug: Web/API/RTCIceCandidateStats
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidateStats`**-Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu einem [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) zu melden.

Die Statistiken können ermittelt werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `local-candidate` finden.

## Instanz-Eigenschaften

- [`address`](/de/docs/Web/API/RTCIceCandidateStats/address) {{optional_inline}}
  - : Ein String, der die Adresse des Kandidaten enthält. Dieser Wert kann eine IPv4- oder IPv6-Adresse oder ein vollständig qualifizierter Domain-Name sein. Diese Eigenschaft hatte früher den Namen `ip` und akzeptierte nur IP-Adressen.
- [`candidateType`](/de/docs/Web/API/RTCIceCandidateStats/candidateType)
  - : Ein String, der einem der Werte in [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) entspricht, welcher angibt, für welche Art von Kandidaten das Objekt Statistiken bereitstellt.
- [`deleted`](/de/docs/Web/API/RTCIceCandidateStats/deleted) {{optional_inline}}
  - : Ein Boolean-Wert, der angibt, ob der Kandidat freigegeben oder gelöscht wurde; der Standardwert ist `false`. Für lokale Kandidaten ist der Wert `true`, wenn der Kandidat gelöscht oder freigegeben wurde. Für Host-Kandidaten bedeutet `true`, dass alle mit dem Kandidaten verbundenen Netzwerkressourcen (normalerweise ein Netzwerksocket) bereits freigegeben wurden. Für [TURN](/de/docs/Glossary/TURN)-Kandidaten ist die TURN-Zuweisung für gelöschte Kandidaten nicht mehr aktiv. Diese Eigenschaft ist für entfernte Kandidaten nicht vorhanden.
- [`port`](/de/docs/Web/API/RTCIceCandidateStats/port) {{optional_inline}}
  - : Die vom Kandidaten verwendete Netzwerkportnummer.
- [`priority`](/de/docs/Web/API/RTCIceCandidateStats/priority) {{optional_inline}}
  - : Die Priorität des Kandidaten, entsprechend [`RTCIceCandidate.priority`](/de/docs/Web/API/RTCIceCandidate/priority).
- [`protocol`](/de/docs/Web/API/RTCIceCandidateStats/protocol) {{optional_inline}}
  - : Ein String, der das Protokoll (`tcp` oder `udp`) angibt, das zum Übertragen von Daten auf dem `port` verwendet wird.
- [`relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) {{optional_inline}}
  - : Ein String, der das Protokoll identifiziert, das vom Endpunkt zur Kommunikation mit dem [TURN](/de/docs/Glossary/TURN)-Server verwendet wird; gültige Werte sind `tcp`, `udp`, und `tls`.
    Nur für lokale Kandidaten vorhanden.
- [`transportId`](/de/docs/Web/API/RTCIceCandidateStats/transportId)
  - : Ein String, der das Transportobjekt eindeutig identifiziert, das überprüft wurde, um die [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) zu erhalten, die mit dem Kandidaten verbunden sind, der diesen Statistiken entspricht.
- [`url`](/de/docs/Web/API/RTCIceCandidateStats/url) {{optional_inline}}
  - : Für lokale Kandidaten ist die `url`-Eigenschaft die [URL](/de/docs/Glossary/URL) des [ICE](/de/docs/Glossary/ICE)-Servers, von dem der Kandidat empfangen wurde.
    Diese URL entspricht der im [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)-Objekt enthaltenen, das das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis darstellt, das den Kandidaten an den lokalen Peer geliefert hat.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCIceCandidateStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCIceCandidateStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCIceCandidateStats/type)
  - : Ein String mit dem Wert `"local-candidate"`, der den Statistiktyp angibt, den das Objekt enthält.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
