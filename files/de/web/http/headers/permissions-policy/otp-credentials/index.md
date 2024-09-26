---
title: "Permissions-Policy: otp-credentials"
slug: Web/HTTP/Headers/Permissions-Policy/otp-credentials
l10n:
  sourceCommit: f09f04f9658cce9c57e97270f59b24b263826fd0
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `otp-credentials` steuert, ob das aktuelle Dokument die Verwendung der [WebOTP API](/de/docs/Web/API/WebOTP_API) zur Anforderung eines Einmalpassworts (OTP) aus einer speziell formatierten SMS-Nachricht, die vom Server der App gesendet wird, zulässt, d.h. über {{domxref("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}}.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, wird das von `navigator.credentials.get({otp})` zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` {{domxref("DOMException")}} abgelehnt.

## Syntax

```http
Permissions-Policy: otp-credentials=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung dieser Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `otp-credentials` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- {{DOMxRef("OTPCredential")}}-Schnittstelle
