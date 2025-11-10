---
title: "Permissions-Policy: otp-credentials Direktive"
short-title: otp-credentials
slug: Web/HTTP/Reference/Headers/Permissions-Policy/otp-credentials
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `otp-credentials` steuert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalkennwort (OTP) von einer speziell formatierten SMS-Nachricht abzurufen, die vom Server der App gesendet wird, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

Konkret, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, wird das von `navigator.credentials.get({otp})` zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```http
Permissions-Policy: otp-credentials=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die standardmäßige Allowlist für `otp-credentials` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential) Schnittstelle
