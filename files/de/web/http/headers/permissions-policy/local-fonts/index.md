---
title: "Permissions-Policy: local-fonts"
slug: Web/HTTP/Headers/Permissions-Policy/local-fonts
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `local-fonts` steuert, ob das aktuelle Dokument berechtigt ist, Daten über die lokal installierten Schriftarten des Benutzers mittels der Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) zu sammeln.

Insbesondere in Fällen, in denen eine definierte Richtlinie die Nutzung dieser Funktion unterbindet, werden die von [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) zurückgegebenen {{jsxref("Promise")}}s mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt.

## Syntax

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, das Feature zu verwenden. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standard-Whitelist für `local-fonts` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)
- HTTP-Header {{HTTPHeader("Permissions-Policy")}}
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
