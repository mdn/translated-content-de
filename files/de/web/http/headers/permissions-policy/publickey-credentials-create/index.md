---
title: "Permissions-Policy: publickey-credentials-create"
slug: Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create
l10n:
  sourceCommit: 9db533c4b30800018aa31b5944b9ff4a0aeded17
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}}-Header mit der Direktive `publickey-credentials-create` steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue WebAuthn-Credentials zu erstellen, d.h. über {{domxref("CredentialsContainer.create","navigator.credentials.create({publicKey})")}}.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, wird das von `navigator.credentials.create({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` {{domxref("DOMException")}} abgelehnt.
Wenn die Methode origin-übergreifend aufgerufen wird, wird das {{jsxref("Promise")}} ebenfalls mit einem `NotAllowedError` abgelehnt, wenn die Funktion per [`allow=` auf einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) und das Frame keine {{glossary("transiente Aktivierung")}} hat.

## Syntax

```http
Permissions-Policy: publickey-credentials-create=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `publickey-credentials-create` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- {{DOMxRef("PublicKeyCredential")}}-Schnittstelle
