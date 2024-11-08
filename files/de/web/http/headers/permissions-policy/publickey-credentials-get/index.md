---
title: "Permissions-Policy: publickey-credentials-get"
slug: Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} Direktive `publickey-credentials-get` steuert, ob das aktuelle Dokument auf die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zugreifen darf, um öffentliche Schlüssel zu erhalten, d.h. über [`navigator.credentials.get({publicKey})`](/de/docs/Web/API/CredentialsContainer/get).

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, wird das von `navigator.credentials.get({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```http
Permissions-Policy: publickey-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, denen die Berechtigung zur Nutzung der Funktion gewährt wird. Weitere Details siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `publickey-credentials-get` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle
