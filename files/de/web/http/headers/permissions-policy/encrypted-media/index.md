---
title: "Permissions-Policy: encrypted-media"
slug: Web/HTTP/Headers/Permissions-Policy/encrypted-media
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-Direktive {{HTTPHeader("Permissions-Policy")}} `encrypted-media` steuert, ob das aktuelle Dokument die [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) API (EME) verwenden darf.

Konkret wird, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt.

## Syntax

```http
Permissions-Policy: encrypted-media=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Das Standard-̀Allowlist`für`encrypted-media`ist`self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
