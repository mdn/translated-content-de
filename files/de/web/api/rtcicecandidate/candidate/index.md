---
title: "RTCIceCandidate: Eigenschaft candidate"
short-title: candidate
slug: Web/API/RTCIceCandidate/candidate
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`candidate`** des [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Interfaces gibt einen String zurück, der den Kandidaten im Detail beschreibt. Die meisten anderen Eigenschaften von `RTCIceCandidate` werden tatsächlich aus diesem String extrahiert.

Diese Eigenschaft kann mit der `candidate` Eigenschaft des Objekts konfiguriert werden, das dem [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate) Konstruktor oder [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben wird.

## Wert

Ein String, der die Eigenschaften des Kandidaten beschreibt, direkt aus dem [SDP](/de/docs/Glossary/SDP) Attribut `"candidate"` entnommen. Der Kandidatenstring gibt die Netzwerkverbindungsinformationen für den Kandidaten an. Wenn der `candidate` ein leerer String (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat ist als "end-of-candidates" Marker bekannt.

Die Syntax des Kandidatenstrings wird in {{RFC(5245, "", 15.1)}} beschrieben. Für eine a-line (Attributzeile), die folgendermaßen aussieht:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

wird der entsprechende Wert des `candidate` Strings sein: `"candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`.

Der [User-Agent](/de/docs/Glossary/user_agent) bevorzugt stets Kandidaten mit der höchsten
[`priority`](/de/docs/Web/API/RTCIceCandidate/priority), wenn sonst alle Bedingungen gleich sind. In dem
obigen Beispiel beträgt die Priorität `2043278322`. Die Attribute sind durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge angeordnet. Die vollständige Liste der
Attribute für diesen Beispielkandidaten ist:

- [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) = 4234997325
- [`component`](/de/docs/Web/API/RTCIceCandidate/component) = `"rtp"` (die Zahl 1 wird zu diesem String kodiert; 2 wird zu `"rtcp"`)
- [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) = `"udp"`
- [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) = 2043278322
- [`ip`](/de/docs/Web/API/RTCIceCandidate/address) = `"192.0.2.172"`
- [`port`](/de/docs/Web/API/RTCIceCandidate/port) = 44323
- [`type`](/de/docs/Web/API/RTCIceCandidate/type) = `"host"`

## Beispiele

In diesem Beispiel sehen wir eine Funktion, die als Eingabe einen SDP-String erhält, der einen
ICE-Kandidaten enthält, der während des Signalisierungsprozesses vom entfernten Peer empfangen wurde.

```js
function handleNewIceCandidate(candidateSDP) {
  const candidateObj = new RTCIceCandidate(candidateSDP);

  myPeerConnection.addIceCandidate(candidateObj).catch({
    /* handle the error thrown by addIceCandidate() */
  });
}
```

Die hier gezeigte `handleNewIceCandidate()` Funktion übergibt den empfangenen
Kandidaten-SDP-Text in [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate), um ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Objekt zurückzuerhalten, das den Kandidaten darstellt.

Der neue Kandidat wird dann in [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben, um den Kandidaten zu der Liste der
Kandidaten hinzuzufügen, die WebRTC für die herzustellende Verbindung in Betracht ziehen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
