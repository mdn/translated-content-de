---
title: "Permissions-Policy: publickey-credentials-get"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}}-Header-Direktive `publickey-credentials-get` steuert, ob das aktuelle Dokument Zugriff auf die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) hat, um öffentliche Schlüssel-Zertifikate abzurufen, d.h. über [`navigator.credentials.get({publicKey})`](/de/docs/Web/API/CredentialsContainer/get).

Insbesondere wird, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, das von `navigator.credentials.get({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```http
Permissions-Policy: publickey-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die Erlaubnis erteilt wurde, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Erlaubnisliste für `publickey-credentials-get` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle
