---
title: "RTCIceCandidate: Kandidat-Eigenschaft"
short-title: candidate
slug: Web/API/RTCIceCandidate/candidate
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`candidate`** auf der Schnittstelle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) gibt einen String zurück, der den Kandidaten im Detail beschreibt.
Die meisten anderen Eigenschaften von `RTCIceCandidate` werden tatsächlich aus diesem String extrahiert.

Diese Eigenschaft kann über die `candidate`-Eigenschaft des Objekts konfiguriert werden, das in den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor oder [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben wird.

## Wert

Ein String, der die Eigenschaften des Kandidaten beschreibt, direkt entnommen aus dem [SDP](/de/docs/Glossary/SDP)-Attribut `"candidate"`.
Der Kandidaten-String spezifiziert die Netzwerkkonnektivitätsinformationen für den Kandidaten.
Wenn der `candidate` ein Leerstring (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat ist als "end-of-candidates"-Marker bekannt.

Die Syntax des Kandidaten-Strings wird in {{RFC(5245, "", 15.1)}} beschrieben. Für eine a-line (Attributzeile), die so aussieht:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

wird der entsprechende Wert des `candidate`-Strings sein: `"candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`.

Der [user agent](/de/docs/Glossary/user_agent) bevorzugt immer Kandidaten mit der höchsten
[`priority`](/de/docs/Web/API/RTCIceCandidate/priority), wenn sonst alle Umstände gleich sind. Im
obigen Beispiel ist die Priorität `2043278322`. Die Attribute werden alle durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge angegeben. Die vollständige Liste der
Attribute für diesen Beispiels-Kandidaten ist:

- [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) = 4234997325
- [`component`](/de/docs/Web/API/RTCIceCandidate/component) = `"rtp"` (die Zahl 1 wird zu diesem String kodiert; 2 wird zu `"rtcp"`)
- [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) = `"udp"`
- [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) = 2043278322
- [`ip`](/de/docs/Web/API/RTCIceCandidate/address) = `"192.0.2.172"`
- [`port`](/de/docs/Web/API/RTCIceCandidate/port) = 44323
- [`type`](/de/docs/Web/API/RTCIceCandidate/type) = `"host"`

## Beispiele

In diesem Beispiel sehen wir eine Funktion, die als Eingabe einen SDP-String enthält, der einen
ICE-Kandidaten beschreibt, der vom entfernten Peer während des Signalisierungsprozesses empfangen wird.

```js
function handleNewIceCandidate(candidateSDP) {
  const candidateObj = new RTCIceCandidate(candidateSDP);

  myPeerConnection.addIceCandidate(candidateObj).catch({
    /* handle the error thrown by addIceCandidate() */
  });
}
```

Die hier gezeigte `handleNewIceCandidate()`-Funktion überträgt den empfangenen
SDP-Text des Kandidaten an [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate), um ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt zu erhalten, das den Kandidaten repräsentiert.

Der neue Kandidat wird dann in [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) eingebracht, um den Kandidaten zur Liste der
Kandidaten hinzuzufügen, die WebRTC für die Verbindung in Betracht ziehen soll, die gerade aufgebaut wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
