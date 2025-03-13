---
title: "Permissions-Policy: otp-credentials"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/otp-credentials
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-Header {{HTTPHeader("Permissions-Policy")}}-Direktiv `otp-credentials` steuert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalkennwort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der App gesendet wird, d. h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

Insbesondere wird, wenn eine definierte Richtlinie die Verwendung dieser Funktion blockiert, das von `navigator.credentials.get({otp})` zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```http
Permissions-Policy: otp-credentials=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standardliste für `otp-credentials` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Schnittstelle
