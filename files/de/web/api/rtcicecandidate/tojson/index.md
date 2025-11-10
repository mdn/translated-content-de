---
title: "RTCIceCandidate: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/RTCIceCandidate/toJSON
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die Methode **`toJSON()`** von [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) konvertiert das `RTCIceCandidate`, auf dem sie aufgerufen wird, in JSON.

Eine serialisierte Version des Objekts kann dann durch Aufruf von {{jsxref("JSON.stringify", "stringify()")}} auf dem zurückgegebenen Objekt erhalten werden.

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
    Weitere Informationen finden Sie in [`RTCIceCandidate.candidate`](/de/docs/Web/API/RTCIceCandidate/candidate).
- `sdpMid` {{optional_inline}}

  - : Ein String, der das Identifikations-Tag des Medienstroms enthält, mit dem der Kandidat verknüpft ist, oder `null`, wenn kein zugeordneter Medienstrom vorhanden ist.
    Weitere Informationen finden Sie in [`RTCIceCandidate.sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid).

- `sdpMLineIndex` {{optional_inline}}

  - : Eine Zahleneigenschaft, die den nullbasierten Index der m-Linie enthält, mit der der Kandidat in der [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) der Medienbeschreibung verknüpft ist, oder `null`, wenn keine solche Verknüpfung besteht.
    Weitere Informationen finden Sie in [`RTCIceCandidate.sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex).

- `usernameFragment` {{optional_inline}}
  - : Ein String, der das Benutzername-Fragment enthält (häufig in Kurzform als "ufrag" oder "ice-ufrag" bezeichnet).
    Dieses Fragment, zusammen mit dem ICE-Passwort ("ice-pwd"), identifiziert eindeutig eine einzelne laufende ICE-Interaktion (einschließlich jeglicher Kommunikation mit dem {{Glossary("STUN", "STUN")}}-Server).
    Weitere Informationen finden Sie in [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

> [!NOTE]
> Das zurückgegebene JSON-Objekt hat die gleiche Form/Eigenschaften wie das `candidateInfo`-Objekt, das optional an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben werden kann, um den Kandidaten zu konfigurieren.

## Beispiele

Dieses einfache Beispiel erhält einen JSON-String, der ein `RTCIceCandidate` repräsentiert, das in der Variablen `candidate` gefunden wurde.

```js
let jsonString = candidate.toJSON().stringify();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
