---
title: "RTCIceCandidate: toJSON() Methode"
short-title: toJSON()
slug: Web/API/RTCIceCandidate/toJSON
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebRTC")}}

Die Methode **`toJSON()`** des [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) konvertiert das `RTCIceCandidate`, auf dem sie aufgerufen wird, in JSON.

Eine zeichenkettencodierte Version des Objekts kann dann durch Aufrufen von {{jsxref("JSON.stringify", "stringify()")}} auf dem zurückgegebenen Objekt erhalten werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

<!-- RTCIceCandidateInit in spec -->

Ein JSON-Objekt mit den folgenden Eigenschaften, die auf die entsprechenden Werte im `RTCIceCandidate`-Objekt gesetzt wurden:

- `candidate` {{optional_inline}}
  - : Ein String, der die Netzwerkverbindungsinformationen für den Kandidaten beschreibt.
    Weitere Informationen finden Sie unter [`RTCIceCandidate.candidate`](/de/docs/Web/API/RTCIceCandidate/candidate).
- `sdpMid` {{optional_inline}}

  - : Ein String, der das Identifikations-Tag des Medienstroms enthält, mit dem der Kandidat verbunden ist, oder `null`, wenn kein zugeordneter Medienstrom vorhanden ist.
    Weitere Informationen finden Sie unter [`RTCIceCandidate.sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid).

- `sdpMLineIndex` {{optional_inline}}

  - : Eine Zahlen-Eigenschaft, die den nullbasierten Index der m-line enthält, mit der der Kandidat innerhalb der [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) der Medienbeschreibung verbunden ist, oder `null`, wenn keine solche Zuordnung besteht.
    Weitere Informationen finden Sie unter [`RTCIceCandidate.sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex).

- `usernameFragment` {{optional_inline}}
  - : Ein String, der das Benutzername-Fragment enthält (normalerweise in Kurzform als "ufrag" oder "ice-ufrag" bezeichnet).
    Dieses Fragment identifiziert zusammen mit dem ICE-Passwort ("ice-pwd") eine einzelne laufende ICE-Interaktion eindeutig (einschließlich jeder Kommunikation mit dem {{Glossary("STUN", "STUN")}}-Server).
    Weitere Informationen finden Sie unter [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

> [!NOTE]
> Das zurückgegebene JSON-Objekt hat die gleiche Form/Eigenschaften wie das `candidateInfo`-Objekt, das optional an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben werden kann, um den Kandidaten zu konfigurieren.

## Beispiele

Dieses einfache Beispiel erhält einen JSON-String, der ein `RTCIceCandidate` darstellt, das in der Variablen `candidate` gefunden wurde.

```js
let jsonString = candidate.toJSON().stringify();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
