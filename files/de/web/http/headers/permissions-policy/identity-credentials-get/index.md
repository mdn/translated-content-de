---
title: "Permissions-Policy: identity-credentials-get"
slug: Web/HTTP/Headers/Permissions-Policy/identity-credentials-get
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der Direktive `identity-credentials-get` bestimmt, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf, insbesondere die Methode {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} mit der Option `identity`.

Wenn diese Richtlinie die Nutzung der API verbietet, wird das von dem `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-{{domxref("DOMException")}} abgelehnt.

## Syntax

```http
Permissions-Policy: identity-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standard-„Allowlist“ für `identity-credentials-get` ist `self`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
