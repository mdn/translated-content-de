---
title: "Permissions-Policy: publickey-credentials-create"
slug: Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create
l10n:
  sourceCommit: 9db533c4b30800018aa31b5944b9ff4a0aeded17
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `publickey-credentials-create`-Direktive steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue WebAuthn-Anmeldedaten zu erstellen, d.h. via [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create).

Insbesondere wird, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, das von `navigator.credentials.create({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Wenn die Methode origin-übergreifend aufgerufen wird, wird das {{jsxref("Promise")}} ebenfalls mit einem `NotAllowedError` abgelehnt, wenn die Funktion durch [`allow=` auf einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) gewährt wurde und der Frame nicht auch eine [Vorübergehende Aktivierung](/de/docs/Glossary/Transient_activation) hat.

## Syntax

```http
Permissions-Policy: publickey-credentials-create=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Zulassungsliste für `publickey-credentials-create` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle
