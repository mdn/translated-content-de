---
title: "Permissions-Policy: otp-credentials"
slug: Web/HTTP/Headers/Permissions-Policy/otp-credentials
l10n:
  sourceCommit: f09f04f9658cce9c57e97270f59b24b263826fd0
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `otp-credentials` Direktive kontrolliert, ob das aktuelle Dokument berechtigt ist, die [WebOTP API](/de/docs/Web/API/WebOTP_API) zu verwenden, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der App gesendet wurde, d. h. über {{domxref("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}}.

Insbesondere, wenn eine definierte Richtlinie die Verwendung dieses Features blockiert, wird die von `navigator.credentials.get({otp})` zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` {{domxref("DOMException")}} abgelehnt.

## Syntax

```http
Permissions-Policy: otp-credentials=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `otp-credentials` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- {{DOMxRef("OTPCredential")}} Schnittstelle
