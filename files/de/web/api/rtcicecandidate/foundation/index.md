---
title: "RTCIceCandidate: Eigenschaft der Foundation"
short-title: foundation
slug: Web/API/RTCIceCandidate/foundation
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`foundation`** der **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**
Schnittstelle ist ein String, der den Kandidaten eindeutig über mehrere Transporte hinweg identifiziert.

Die `foundation` kann daher verwendet werden, um Kandidaten zu korrelieren, die auf
mehreren [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Objekten vorhanden sind.

## Wert

Ein String, der den Kandidaten über alle
`RTCIceTransport`s, auf denen er verfügbar ist, eindeutig identifiziert.

> [!NOTE]
> Wenn `port` `null` ist — und
> `port` vom [User Agent](/de/docs/Glossary/user_agent) unterstützt wird — wird das Übergeben des
> Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
> fehlschlagen und eine `OperationError` Ausnahme auslösen.

## Verwendungshinweise

Betrachten Sie diese [SDP](/de/docs/Glossary/SDP) Attributzeile (a-line), die einen ICE
Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das Feld `"4234997325"` ist die Foundation.

## Beispiele

Dieses Code-Snippet verwendet die `foundation` von zwei Kandidaten, um festzustellen, ob
sie tatsächlich derselbe Kandidat sind.

```js
if (candidate1.foundation === candidate2.foundation) {
  /* the two candidates are the same, even if they're on
     different transports */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
