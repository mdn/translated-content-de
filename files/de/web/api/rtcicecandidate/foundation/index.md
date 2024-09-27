---
title: "RTCIceCandidate: foundation-Eigenschaft"
short-title: foundation
slug: Web/API/RTCIceCandidate/foundation
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`foundation`**-Eigenschaft des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces ist ein String, der den Kandidaten eindeutig über mehrere Transports hinweg identifiziert.

Die `foundation` kann daher verwendet werden, um Kandidaten abzugleichen, die auf mehreren [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekten vorhanden sind.

## Wert

Ein String, der den Kandidaten eindeutig über alle `RTCIceTransport`s identifiziert, auf denen er verfügbar ist.

> [!NOTE]
> Wenn `port` `null` ist — und `port` vom [Benutzeragenten](/de/docs/Glossary/user_agent) unterstützt wird — wird das Übergeben des Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) fehlschlagen, und es wird eine `OperationError`-Ausnahme ausgelöst.

## Nutzungshinweise

Betrachten Sie diese [SDP](/de/docs/Glossary/SDP)-Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das Feld `"4234997325"` ist die foundation.

## Beispiele

Dieses Codebeispiel verwendet die `foundation` von zwei Kandidaten, um festzustellen, ob es sich tatsächlich um denselben Kandidaten handelt.

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
