---
title: "RTCIceCandidate: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/RTCIceCandidate/toJSON
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebRTC")}}

Die Methode **`toJSON()`** des [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) konvertiert den `RTCIceCandidate`, auf dem sie aufgerufen wird, in JSON.

Eine stringifizierte Version des Objekts kann dann erhalten werden, indem {{jsxref("JSON.stringify", "stringify()")}} auf das zurückgegebene Objekt aufgerufen wird.

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
    Zusätzliche Informationen finden Sie unter [`RTCIceCandidate.candidate`](/de/docs/Web/API/RTCIceCandidate/candidate).
- `sdpMid` {{optional_inline}}

  - : Ein String, der das Identifikationstag des Medienstreams enthält, mit dem der Kandidat verbunden ist, oder `null`, wenn kein zugeordneter Medienstream vorhanden ist.
    Zusätzliche Informationen finden Sie unter [`RTCIceCandidate.sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid).

- `sdpMLineIndex` {{optional_inline}}

  - : Eine Zahleneigenschaft, die den nullbasierten Index der m-line enthält, mit der der Kandidat innerhalb der [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) der Medienbeschreibung verknüpft ist, oder `null`, wenn keine solche Zuordnung existiert.
    Zusätzliche Informationen finden Sie unter [`RTCIceCandidate.sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex).

- `usernameFragment` {{optional_inline}}
  - : Ein String, der das Benutzername-Fragment enthält (üblicherweise als "ufrag" oder "ice-ufrag" bezeichnet).
    Dieses Fragment identifiziert zusammen mit dem ICE-Passwort ("ice-pwd") eindeutig eine einzelne laufende ICE-Interaktion (einschließlich jeglicher Kommunikation mit dem [STUN](/de/docs/Glossary/STUN)-Server).
    Zusätzliche Informationen finden Sie unter [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

> [!NOTE]
> Das zurückgegebene JSON-Objekt hat die gleiche Form/Eigenschaften wie das `candidateInfo`-Objekt, das optional an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben werden kann, um den Kandidaten zu konfigurieren.

## Beispiele

Dieses einfache Beispiel erhält einen JSON-String, der einen `RTCIceCandidate` darstellt, der in der Variablen `candidate` gefunden wurde.

```js
let jsonString = candidate.toJSON().stringify();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
