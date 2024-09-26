---
title: "Permissions-Policy: encrypted-media"
slug: Web/HTTP/Headers/Permissions-Policy/encrypted-media
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Headerdirektive `encrypted-media` steuert, ob das aktuelle Dokument die [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API)-API (EME) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, wird das von {{domxref("Navigator.requestMediaKeySystemAccess","Navigator.requestMediaKeySystemAccess()")}} zurückgegebene {{jsxref("Promise")}} mit einer {{domxref("DOMException")}} vom Typ `SecurityError` abgelehnt.

## Syntax

```http
Permissions-Policy: encrypted-media=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wurde. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardliste für die Berechtigung von `encrypted-media` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
