---
title: "FederatedCredential: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/FederatedCredential/protocol
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

Die **`protocol`**-Eigenschaft der
[`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Schnittstelle gibt einen schreibgeschützten
String zurück, der das föderierte Identitätsprotokoll eines Berechtigungsnachweises enthält. Wenn diese
Eigenschaft [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, kann das Protokoll aus der
[`FederatedCredential.provider`](/de/docs/Web/API/FederatedCredential/provider)-Eigenschaft abgeleitet werden.

## Wert

Ein String, der das föderierte Identitätsprotokoll eines Berechtigungsnachweises enthält (z. B.
`openidconnect`).

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
