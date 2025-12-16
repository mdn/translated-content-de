---
title: "Permissions-Policy: private-state-token-redemption Richtlinie"
short-title: private-state-token-redemption
slug: Web/HTTP/Reference/Headers/Permissions-Policy/private-state-token-redemption
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Richtlinie `private-state-token-redemption` steuert die Nutzung der [Private State Token](/de/docs/Web/API/Private_State_Token_API) `token-redemption` und `send-redemption-record` Operationen.

Konkret bedeutet das, dass dort, wo eine definierte Richtlinie die Nutzung dieses Merkmals blockiert, [Token-Einlösungen](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_a_token_via_your_server) und [Einlösungsdatensatz senden](/de/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2) Operationen fehlschlagen werden.

## Syntax

```http
Permissions-Policy: private-state-token-redemption=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Merkmals erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `private-state-token-redemption` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
