---
title: "Permissions-Policy: encrypted-media"
slug: Web/HTTP/Headers/Permissions-Policy/encrypted-media
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `encrypted-media`-Direktive steuert, ob das aktuelle Dokument die [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) API (EME) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, wird das von {{jsxref("Promise")}} zurückgegebene Versprechen von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) mit einem [`DOMException`](/de/docs/Web/API/DOMException) des Typs `SecurityError` abgelehnt.

## Syntax

```http
Permissions-Policy: encrypted-media=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `encrypted-media` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
