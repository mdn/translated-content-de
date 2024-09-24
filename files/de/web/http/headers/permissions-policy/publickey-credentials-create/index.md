---
title: "Permissions-Policy: publickey-credentials-create"
slug: Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create
l10n:
  sourceCommit: 9db533c4b30800018aa31b5944b9ff4a0aeded17
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `publickey-credentials-create`-Direktive steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue WebAuthn-Anmeldedaten zu erstellen, z.B. über {{domxref("CredentialsContainer.create","navigator.credentials.create({publicKey})")}}.

Konkret gilt: Wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, wird das von `navigator.credentials.create({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-{{domxref("DOMException")}} abgelehnt.
Wenn die Methode übergangsweise aufgerufen wird, wird das {{jsxref("Promise")}} ebenfalls mit einem `NotAllowedError` abgelehnt, wenn das Feature durch [`allow=` auf einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) gewährt wird und der Rahmen nicht auch über eine {{glossary("flüchtige Aktivierung")}} verfügt.

## Syntax

```http
Permissions-Policy: publickey-credentials-create=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `publickey-credentials-create` ist `self`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- {{DOMxRef("PublicKeyCredential")}}-Schnittstelle
