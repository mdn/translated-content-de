---
title: "Permissions-Policy: encrypted-media-Direktive"
short-title: encrypted-media
slug: Web/HTTP/Reference/Headers/Permissions-Policy/encrypted-media
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}}-Header `encrypted-media`-Direktive steuert, ob das aktuelle Dokument die [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) API (EME) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Verwendung dieses Features blockiert, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt.

## Syntax

```http
Permissions-Policy: encrypted-media=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standard-Zulassungsliste für `encrypted-media` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
