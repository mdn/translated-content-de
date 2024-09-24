---
title: RTCIceCandidateStats
slug: Web/API/RTCIceCandidateStats
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidateStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken zu einem {{domxref("RTCIceCandidate")}} zu berichten.

Die Statistiken können durch Iterieren des {{domxref("RTCStatsReport")}}, das von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, erhalten werden, bis Sie einen Bericht mit dem [`type`](#type) `local-candidate` finden.

## Instanz-Eigenschaften

- {{domxref("RTCIceCandidateStats.address", "address")}} {{optional_inline}}
  - : Ein String, der die Adresse des Kandidaten enthält. Dieser Wert kann eine IPv4-Adresse, eine IPv6-Adresse oder ein vollqualifizierter Domainname sein. Diese Eigenschaft wurde zuvor `ip` genannt und akzeptierte nur IP-Adressen.
- {{domxref("RTCIceCandidateStats.candidateType", "candidateType")}}
  - : Ein String, der einem der Werte in [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) entspricht und angibt, welche Art von Kandidaten das Objekt Statistiken liefert.
- {{domxref("RTCIceCandidateStats.deleted", "deleted")}} {{optional_inline}}
  - : Ein Boolean-Wert, der angibt, ob der Kandidat freigegeben oder gelöscht wurde; der Standardwert ist `false`. Bei lokalen Kandidaten ist der Wert `true`, wenn der Kandidat gelöscht oder freigegeben wurde. Bei Host-Kandidaten bedeutet `true`, dass alle mit dem Kandidaten verbundenen Netzwerkressourcen (normalerweise ein Netzwerksocket) bereits freigegeben wurden. Bei {{Glossary("TURN")}}-Kandidaten ist die TURN-Zuweisung für gelöschte Kandidaten nicht mehr aktiv. Diese Eigenschaft ist bei entfernten Kandidaten nicht vorhanden.
- {{domxref("RTCIceCandidateStats.port", "port")}} {{optional_inline}}
  - : Die vom Kandidaten verwendete Netzwerkportnummer.
- {{domxref("RTCIceCandidateStats.priority", "priority")}} {{optional_inline}}
  - : Die Priorität des Kandidaten, entsprechend {{domxref("RTCIceCandidate.priority")}}.
- {{domxref("RTCIceCandidateStats.protocol", "protocol")}} {{optional_inline}}
  - : Ein String, der das Protokoll (`tcp` oder `udp`) angibt, das zum Übertragen von Daten auf dem `port` verwendet wird.
- {{domxref("RTCIceCandidateStats.relayProtocol", "relayProtocol")}} {{optional_inline}}
  - : Ein String, der das Protokoll identifiziert, das vom Endpunkt zur Kommunikation mit dem {{Glossary("TURN")}}-Server verwendet wird; gültige Werte sind `tcp`, `udp` und `tls`.
    Nur bei lokalen Kandidaten vorhanden.
- {{domxref("RTCIceCandidateStats.transportId", "transportId")}}
  - : Ein String, der das Transportobjekt eindeutig identifiziert, das geprüft wurde, um die mit dem Kandidaten verbundenen {{domxref("RTCTransportStats")}} zu erhalten, die diesen Statistiken entsprechen.
- {{domxref("RTCIceCandidateStats.url", "url")}} {{optional_inline}}
  - : Bei lokalen Kandidaten ist die `url`-Eigenschaft die {{Glossary("URL")}} des {{Glossary("ICE")}}-Servers, von dem der Kandidat empfangen wurde.
    Diese URL stimmt mit der überein, die im {{domxref("RTCPeerConnectionIceEvent")}}-Objekt enthalten ist, das das {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignis darstellt, das den Kandidaten an das lokale Peering übermittelt hat.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- {{domxref("RTCIceCandidateStats.id", "id")}}
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erstellen, eindeutig identifiziert.
- {{domxref("RTCIceCandidateStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Stichprobe für dieses Statistikobjekt entnommen wurde.
- {{domxref("RTCIceCandidateStats.type", "type")}}
  - : Ein String mit dem Wert `"local-candidate"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
