---
title: "Permissions-Policy: publickey-credentials-get"
slug: Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get
l10n:
  sourceCommit: 9db533c4b30800018aa31b5944b9ff4a0aeded17
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `publickey-credentials-get` steuert, ob das aktuelle Dokument Zugriff auf die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) erhält, um Public-Key-Anmeldeinformationen abzurufen, d. h. über {{domxref("CredentialsContainer.get","navigator.credentials.get({publicKey})")}}.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, wird das von `navigator.credentials.get({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` {{domxref("DOMException")}} abgelehnt.

## Syntax

```http
Permissions-Policy: publickey-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt ist. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardzulassungsliste für `publickey-credentials-get` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- {{DOMxRef("PublicKeyCredential")}}-Schnittstelle
