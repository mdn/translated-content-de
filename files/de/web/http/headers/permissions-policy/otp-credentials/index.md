---
title: "Permissions-Policy: otp-credentials"
slug: Web/HTTP/Headers/Permissions-Policy/otp-credentials
l10n:
  sourceCommit: f09f04f9658cce9c57e97270f59b24b263826fd0
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}}-Header-Direktive `otp-credentials` steuert, ob das aktuelle Dokument berechtigt ist, die [WebOTP API](/de/docs/Web/API/WebOTP_API) zu verwenden, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der App gesendet wird, z. B. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get) .

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, wird das von `navigator.credentials.get({otp})` zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

## Syntax

```http
Permissions-Policy: otp-credentials=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `otp-credentials` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential) Schnittstelle
