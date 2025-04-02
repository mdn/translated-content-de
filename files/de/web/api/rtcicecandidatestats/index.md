---
title: RTCIceCandidateStats
slug: Web/API/RTCIceCandidateStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidateStats`** Wörterbuch der [WebRTC-API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu einem [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) zu berichten.

Die Statistiken können durch Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, abgerufen werden, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCIceCandidateStats/type) von `local-candidate` finden.

## Instanz-Eigenschaften

- [`address`](/de/docs/Web/API/RTCIceCandidateStats/address) {{optional_inline}}
  - : Ein String, der die Adresse des Kandidaten enthält. Dieser Wert kann eine IPv4-Adresse, eine IPv6-Adresse oder ein vollständig qualifizierter Domainname sein. Diese Eigenschaft wurde zuvor `ip` genannt und akzeptierte nur IP-Adressen.
- [`candidateType`](/de/docs/Web/API/RTCIceCandidateStats/candidateType)
  - : Ein String, der mit einem der Werte in [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) übereinstimmt und angibt, für welche Art von Kandidaten das Objekt Statistiken bereitstellt.
- [`deleted`](/de/docs/Web/API/RTCIceCandidateStats/deleted) {{optional_inline}}
  - : Ein Boolean-Wert, der angibt, ob der Kandidat freigegeben oder gelöscht wurde; der Standardwert ist `false`. Für lokale Kandidaten ist der Wert `true`, wenn der Kandidat gelöscht oder freigegeben wurde. Für Host-Kandidaten bedeutet `true`, dass alle Netzwerkressourcen (normalerweise ein Netzwerksocket), die mit dem Kandidaten verbunden sind, bereits freigegeben wurden. Für {{Glossary("TURN", "TURN")}}-Kandidaten ist die TURN-Zuweisung für gelöschte Kandidaten nicht mehr aktiv. Diese Eigenschaft ist für entfernte Kandidaten nicht vorhanden.
- [`port`](/de/docs/Web/API/RTCIceCandidateStats/port) {{optional_inline}}
  - : Die von dem Kandidaten verwendete Netzwerkportnummer.
- [`priority`](/de/docs/Web/API/RTCIceCandidateStats/priority) {{optional_inline}}
  - : Die Priorität des Kandidaten, entsprechend [`RTCIceCandidate.priority`](/de/docs/Web/API/RTCIceCandidate/priority).
- [`protocol`](/de/docs/Web/API/RTCIceCandidateStats/protocol) {{optional_inline}}
  - : Ein String, der das verwendete Protokoll (`tcp` oder `udp`) angibt, um Daten auf dem `port` zu übertragen.
- [`relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) {{optional_inline}}
  - : Ein String, der das Protokoll identifiziert, das vom Endpunkt zur Kommunikation mit dem {{Glossary("TURN", "TURN")}}-Server verwendet wird; gültige Werte sind `tcp`, `udp` und `tls`.
    Nur für lokale Kandidaten vorhanden.
- [`transportId`](/de/docs/Web/API/RTCIceCandidateStats/transportId)
  - : Ein String, der das Transportobjekt eindeutig identifiziert, das geprüft wurde, um die [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) zu erhalten, die mit dem Kandidaten verbunden sind, der diese Statistiken betrifft.
- [`url`](/de/docs/Web/API/RTCIceCandidateStats/url) {{optional_inline}}
  - : Für lokale Kandidaten ist die `url`-Eigenschaft die {{Glossary("URL", "URL")}} des {{Glossary("ICE", "ICE")}}-Servers, von dem der Kandidat empfangen wurde.
    Diese URL entspricht der, die im [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)-Objekt enthalten ist, das das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis darstellt, das den Kandidaten an den lokalen Peer geliefert hat.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCIceCandidateStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz an Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCIceCandidateStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCIceCandidateStats/type)
  - : Ein String mit dem Wert `"local-candidate"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
