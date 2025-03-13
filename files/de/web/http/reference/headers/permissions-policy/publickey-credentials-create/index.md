---
title: "Permissions-Policy: publickey-credentials-create"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Headerdirektive `publickey-credentials-create` steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue WebAuthn-Anmeldeinformationen zu erstellen, d. h. über [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create).

Insbesondere, wenn eine definierte Richtlinie die Verwendung dieses Features blockiert, wird das von `navigator.credentials.create({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.
Wenn die Methode cross-origin aufgerufen wird, wird das {{jsxref("Promise")}} ebenfalls mit einem `NotAllowedError` abgelehnt, wenn das Feature durch [`allow=` auf einem iframe](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) gewährt wird und der Rahmen nicht auch über eine {{Glossary("Transient_activation", "transiente Aktivierung")}} verfügt.

## Syntax

```http
Permissions-Policy: publickey-credentials-create=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `publickey-credentials-create` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Richtlinie zu Berechtigungen](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle
