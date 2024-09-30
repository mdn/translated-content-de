---
title: "Permissions-Policy: publickey-credentials-create"
slug: Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create
l10n:
  sourceCommit: 9db533c4b30800018aa31b5944b9ff4a0aeded17
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `publickey-credentials-create` steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue WebAuthn-Anmeldeinformationen zu erstellen, d. h. über [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create).

Konkret gilt: Wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, wird das von `navigator.credentials.create({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
Wenn die Methode über cross-origin aufgerufen wird, wird das {{jsxref("Promise")}} ebenfalls mit einem `NotAllowedError` abgelehnt, wenn die Funktion durch [`allow=` auf einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) gewährt wird und der Frame nicht auch eine [Transiente Aktivierung](/de/docs/Glossary/Transient_activation) hat.

## Syntax

```http
Permissions-Policy: publickey-credentials-create=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `publickey-credentials-create` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie (Permissions Policy)](/de/docs/Web/HTTP/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle
