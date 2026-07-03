---
title: "RTCIceCandidate: candidate-Eigenschaft"
short-title: candidate
slug: Web/API/RTCIceCandidate/candidate
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`candidate`** der [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Schnittstelle gibt einen String zurück, der den Kandidaten im Detail beschreibt. Die meisten anderen Eigenschaften von `RTCIceCandidate` werden tatsächlich aus diesem String extrahiert.

Diese Eigenschaft kann über die `candidate`-Eigenschaft des Objekts konfiguriert werden, das in den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor oder [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben wird.

## Wert

Ein String, der die Eigenschaften des Kandidaten beschreibt und direkt aus dem {{Glossary("SDP", "SDP")}}-Attribut `"candidate"` entnommen wird. Der Kandidaten-String spezifiziert die Netzwerkverbindungsinformationen für den Kandidaten. Wenn der `candidate` ein leerer String (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat wird als "end-of-candidates"-Marker bezeichnet.

Die Syntax des Kandidaten-Strings wird in {{RFC(5245, "", 15.1)}} beschrieben. Für eine a-Line (Attributzeile), die so aussieht:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

wird der entsprechende Wert des `candidate`-Strings sein: `"candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`.

Der {{Glossary("user_agent", "User Agent")}} bevorzugt immer Kandidaten mit der höchsten
[`priority`](/de/docs/Web/API/RTCIceCandidate/priority), wenn ansonsten gleiche Bedingungen herrschen.
Im obigen Beispiel beträgt die Priorität `2043278322`. Die Attribute sind alle durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge. Die vollständige Liste der Attribute für diesen Beispielkandidaten ist:

- [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) = 4234997325
- [`component`](/de/docs/Web/API/RTCIceCandidate/component) = `"rtp"` (die Zahl 1 wird in diesen String codiert; 2 wird zu `"rtcp"`)
- [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) = `"udp"`
- [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) = 2043278322
- [`ip`](/de/docs/Web/API/RTCIceCandidate/address) = `"192.0.2.172"`
- [`port`](/de/docs/Web/API/RTCIceCandidate/port) = 44323
- [`type`](/de/docs/Web/API/RTCIceCandidate/type) = `"host"`

## Beispiele

In diesem Beispiel sehen wir eine Funktion, die als Eingabe einen SDP-String enthält, der einen
ICE-Kandidaten vom entfernten Gegenüber während des Signalisierungsvorgangs enthält.

```js
function handleNewIceCandidate(candidateSDP) {
  const candidateObj = new RTCIceCandidate(candidateSDP);

  myPeerConnection
    .addIceCandidate(candidateObj)
    .catch({/* handle the error thrown by addIceCandidate() */});
}
```

Die hier gezeigte Funktion `handleNewIceCandidate()` übergibt den empfangenen
SDP-Text des Kandidaten an [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate), um ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt zu erhalten,
das den Kandidaten repräsentiert.

Der neue Kandidat wird dann an [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben, um den Kandidaten zur Liste der
Kandidaten hinzuzufügen, die WebRTC für die herzustellende Verbindung in Betracht zieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
