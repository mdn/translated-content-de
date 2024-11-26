---
title: "Permissions-Policy: publickey-credentials-create"
slug: Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}}-Header-Direktive `publickey-credentials-create` steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue WebAuthn-Anmeldedaten zu erstellen, d.h. über [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create).

Insbesondere wird, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, das von `navigator.credentials.create({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
Wenn die Methode origin-übergreifend aufgerufen wird, wird das {{jsxref("Promise")}} auch mit einem `NotAllowedError` abgelehnt, wenn die Funktion durch [`allow=` in einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) gewährt wird und der Frame keine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} aufweist.

## Syntax

```http
Permissions-Policy: publickey-credentials-create=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen (Origins), für die die Erlaubnis erteilt wird, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-„Allowlist“ für `publickey-credentials-create` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle
