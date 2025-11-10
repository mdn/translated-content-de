---
title: "RTCIceCandidate: foundation-Eigenschaft"
short-title: foundation
slug: Web/API/RTCIceCandidate/foundation
l10n:
  sourceCommit: ef82d981d563626248276acbf9516aac7445d4fa
---

{{APIRef("WebRTC")}}

Die **`foundation`**-Eigenschaft der Schnittstelle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) ist eine schreibgeschützte Zeichenfolge, die es ermöglicht, Kandidaten von einem gemeinsamen Netzwerkpfad auf mehreren [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekten zu korrelieren.

Kandidaten teilen dieselbe `foundation`, wenn sie:

- denselben Typ haben: "host", "relayed", "server reflexive" oder "peer reflexive".
- "Basen" haben, die dieselbe IP-Adresse und denselben Transport teilen, aber nicht unbedingt denselben Port. Beachten Sie, dass die IP-Adresse die der Netzwerkschnittstelle ist, von der der ICE-Agent den Kandidaten gesendet hat.
- von einem {{Glossary("STUN", "STUN")}}- oder TURN-Server stammen, der dieselbe IP-Adresse hat.

Dies wird verwendet, um die ICE-Leistung zu optimieren, während die Priorisierung und Korrelation von Kandidaten, die auf mehreren [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekten erscheinen, priorisiert werden.

## Wert

Eine Zeichenfolge, die den Kandidaten eindeutig über alle `RTCIceTransport`s identifiziert, auf denen er verfügbar ist.

> [!NOTE]
> Wenn `port` `null` ist — und `port` vom {{Glossary("user_agent", "User-Agent")}} unterstützt wird — wird das Übergeben des Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) fehlschlagen und eine `OperationError`-Ausnahme auslösen.

## Nutzungshinweise

Betrachten Sie diese {{Glossary("SDP", "SDP")}}-Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das Feld `"4234997325"` ist die foundation.

## Beispiele

Dieser Codeausschnitt verwendet die `foundation` von zwei Kandidaten, um festzustellen, ob sie tatsächlich derselbe Kandidat sind.

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
