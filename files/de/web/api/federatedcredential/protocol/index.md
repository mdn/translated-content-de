---
title: "FederatedCredential: Eigenschaft protocol"
short-title: protocol
slug: Web/API/FederatedCredential/protocol
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

Die **`protocol`**-Eigenschaft des
{{domxref("FederatedCredential")}}-Interfaces liefert einen schreibgeschützten
String, der das föderierte Identitätsprotokoll eines Anmeldedatenobjekts enthält. Wenn diese
Eigenschaft [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, kann das Protokoll aus der
{{domxref("FederatedCredential.provider")}}-Eigenschaft abgeleitet werden.

## Wert

Ein String, der das föderierte Identitätsprotokoll eines Anmeldedatenobjekts enthält (z. B.
`openidconnect`).

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
