---
title: "RTCIceCandidate: candidate-Eigenschaft"
short-title: candidate
slug: Web/API/RTCIceCandidate/candidate
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`candidate`** der {{domxref("RTCIceCandidate")}}-Schnittstelle gibt einen String zurück, der den Kandidaten im Detail beschreibt. Die meisten anderen Eigenschaften von `RTCIceCandidate` werden tatsächlich aus diesem String extrahiert.

Diese Eigenschaft kann mit der `candidate`-Eigenschaft des Objekts konfiguriert werden, das an den Konstruktor {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} oder {{domxref("RTCPeerConnection.addIceCandidate()")}} übergeben wird.

## Wert

Ein String, der die Eigenschaften des Kandidaten beschreibt, wird direkt aus dem {{Glossary("SDP")}}-Attribut `"candidate"` entnommen. Der Kandidaten-String spezifiziert die Netzwerkverbindungsinformationen für den Kandidaten. Wenn der `candidate` ein leerer String (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat ist als "end-of-candidates"-Marker bekannt.

Die Syntax des Kandidaten-Strings wird in {{RFC(5245, "", 15.1)}} beschrieben. Für eine a-line (Attributzeile), die so aussieht:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

wird der entsprechende `candidate`-String den Wert `"candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"` haben.

Der {{Glossary("user agent")}} bevorzugt immer Kandidaten mit der höchsten
{{domxref("RTCIceCandidate.priority", "priority")}}, wenn alle anderen Bedingungen gleich sind. Im obigen Beispiel beträgt die Priorität `2043278322`. Die Attribute sind alle durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge. Die vollständige Liste der Attribute für diesen Beispielkandidaten lautet:

- {{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325
- {{domxref("RTCIceCandidate.component", "component")}} = `"rtp"` (die Zahl 1 wird zu diesem String kodiert; 2 wird zu `"rtcp"`)
- {{domxref("RTCIceCandidate.protocol", "protocol")}} = `"udp"`
- {{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322
- {{domxref("RTCIceCandidate/address", "ip")}} = `"192.0.2.172"`
- {{domxref("RTCIceCandidate.port", "port")}} = 44323
- {{domxref("RTCIceCandidate.type", "type")}} = `"host"`

## Beispiele

In diesem Beispiel sehen wir eine Funktion, die als Eingabe einen SDP-String erhält, der einen ICE-Kandidaten enthält, der während des Signalisierungsprozesses vom Remote-Peer empfangen wurde.

```js
function handleNewIceCandidate(candidateSDP) {
  const candidateObj = new RTCIceCandidate(candidateSDP);

  myPeerConnection.addIceCandidate(candidateObj).catch({
    /* handle the error thrown by addIceCandidate() */
  });
}
```

Die hier gezeigte Funktion `handleNewIceCandidate()` übergibt den empfangenen SDP-Text des Kandidaten an {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}, um ein {{domxref("RTCIceCandidate")}}-Objekt zu erhalten, das den Kandidaten darstellt.

Der neue Kandidat wird dann an {{domxref("RTCPeerConnection.addIceCandidate()")}} übergeben, um den Kandidaten zur Liste der Kandidaten hinzuzufügen, die WebRTC in Betracht ziehen soll, um die Verbindung herzustellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
