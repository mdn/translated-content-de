---
title: "RTCIceCandidate: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/RTCIceCandidate/toJSON
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebRTC")}}

Die Methode **`toJSON()`** des {{domxref("RTCIceCandidate")}} wandelt den `RTCIceCandidate`, auf dem sie aufgerufen wird, in JSON um.

Eine String-Darstellung des Objekts kann dann erhalten werden, indem {{jsxref("JSON.stringify", "stringify()")}} auf das zurückgegebene Objekt aufgerufen wird.

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
  - : Ein String, der die Netzwerkkonnektivitätsinformation für den Kandidaten beschreibt.
    Weitere Informationen finden Sie unter {{domxref("RTCIceCandidate.candidate")}}.
- `sdpMid` {{optional_inline}}

  - : Ein String, der das Identifizierungsetikett des Medienstreams enthält, mit dem der Kandidat verbunden ist, oder `null`, wenn kein zugehöriger Medienstream vorhanden ist.
    Weitere Informationen finden Sie unter {{domxref("RTCIceCandidate.sdpMid")}}.

- `sdpMLineIndex` {{optional_inline}}

  - : Eine Zahleneigenschaft, die den nullbasierten Index der m-line enthält, mit dem der Kandidat innerhalb des [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) der Medienbeschreibung verbunden ist, oder `null`, wenn keine solche Verbindung besteht.
    Weitere Informationen finden Sie unter {{domxref("RTCIceCandidate.sdpMLineIndex")}}.

- `usernameFragment` {{optional_inline}}
  - : Ein String, der das Benutzername-Fragment enthält (üblicherweise in Kurzform als "ufrag" oder "ice-ufrag" bezeichnet).
    Dieses Fragment, zusammen mit dem ICE-Passwort ("ice-pwd"), identifiziert eindeutig eine einzelne laufende ICE-Interaktion (einschließlich jeder Kommunikation mit dem {{Glossary("STUN")}}-Server).
    Weitere Informationen finden Sie unter {{domxref("RTCIceCandidate.usernameFragment")}}.

> [!NOTE]
> Das zurückgegebene JSON-Objekt hat die gleiche Form/Eigenschaften wie das `candidateInfo`-Objekt, das optional an den {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate()")}}-Konstruktor übergeben werden kann, um den Kandidaten zu konfigurieren.

## Beispiele

Dieses einfache Beispiel erhält einen JSON-String, der einen `RTCIceCandidate` darstellt, der in der Variablen `candidate` gefunden wurde.

```js
let jsonString = candidate.toJSON().stringify();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
