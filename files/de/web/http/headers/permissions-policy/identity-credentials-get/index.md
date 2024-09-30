---
title: "Permissions-Policy: identity-credentials-get"
slug: Web/HTTP/Headers/Permissions-Policy/identity-credentials-get
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-Direktive {{HTTPHeader("Permissions-Policy")}} `identity-credentials-get` steuert, ob das aktuelle Dokument die Verwendung der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) und insbesondere die Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option erlaubt.

Wenn diese Richtlinie die Nutzung der API verbietet, wird das von dem `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```http
Permissions-Policy: identity-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `identity-credentials-get` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
