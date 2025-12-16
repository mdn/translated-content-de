---
title: "Permissions-Policy: Direktive private-state-token-issuance"
short-title: private-state-token-issuance
slug: Web/HTTP/Reference/Headers/Permissions-Policy/private-state-token-issuance
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `private-state-token-issuance` steuert die Nutzung von [Private State Token](/de/docs/Web/API/Private_State_Token_API) `token-request`-Operationen.

Insbesondere gilt, dass dort, wo eine definierte Richtlinie die Nutzung dieser Funktion blockiert, [Token-Anfrage](/de/docs/Web/API/Private_State_Token_API/Using#issuing_a_token_via_your_server) Operationen fehlschlagen werden.

## Syntax

```http
Permissions-Policy: private-state-token-issuance=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von {{Glossary("Origin", "Ursprüngen")}}, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standardliste für `private-state-token-issuance` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
