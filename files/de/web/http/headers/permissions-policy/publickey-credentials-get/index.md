---
title: "Permissions-Policy: publickey-credentials-get"
slug: Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get
l10n:
  sourceCommit: 9db533c4b30800018aa31b5944b9ff4a0aeded17
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `publickey-credentials-get`-Direktive steuert, ob das aktuelle Dokument auf die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zugreifen darf, um öffentliche Schlüsselanmeldeinformationen abzurufen, d. h. über [`navigator.credentials.get({publicKey})`](/de/docs/Web/API/CredentialsContainer/get).

Insbesondere, wenn eine definierte Richtlinie die Verwendung dieses Features blockiert, wird das von `navigator.credentials.get({publicKey})` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```http
Permissions-Policy: publickey-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standardliste für `publickey-credentials-get` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle
