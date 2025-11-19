---
title: "Permissions-Policy: Directive publickey-credentials-create"
short-title: publickey-credentials-create
slug: Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Das HTTP-Header {{HTTPHeader("Permissions-Policy")}}-Direktiv `publickey-credentials-create` steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue WebAuthn-Anmeldeinformationen zu erstellen, d.h. über [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create).

Insbesondere, wo eine definierte Richtlinie die Nutzung dieser Funktion blockiert, wird das durch `navigator.credentials.create({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
Wird die Methode cross-origin aufgerufen, wird das {{jsxref("Promise")}} ebenfalls mit einem `NotAllowedError` abgelehnt, wenn das Feature durch [`allow=` auf einem iframe](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) gewährt wird und der Frame nicht auch über eine {{Glossary("Transient_activation", "flüchtige Aktivierung")}} verfügt.

## Syntax

```http
Permissions-Policy: publickey-credentials-create=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Nutzung des Features gestattet ist. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Zulassungsliste für `publickey-credentials-create` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle
