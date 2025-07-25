---
title: "Permissions-Policy: identity-credentials-get Direktive"
short-title: identity-credentials-get
slug: Web/HTTP/Reference/Headers/Permissions-Policy/identity-credentials-get
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `identity-credentials-get` steuert, ob es dem aktuellen Dokument erlaubt ist, die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) zu verwenden. Konkret betrifft dies die Nutzung der folgenden Methoden:

- [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) (wenn mit der Option `identity` verwendet)
- [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)
- [`IdentityProvider.getUserInfo()`](/de/docs/Web/API/IdentityProvider/getUserInfo_static)

Wenn diese Richtlinie die Nutzung der API verbietet, werden die von diesen Methoden zurückgegebenen {{jsxref("Promise")}}s mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```http
Permissions-Policy: identity-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zum Verwenden der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Entscheidungsliste für `identity-credentials-get` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy)
