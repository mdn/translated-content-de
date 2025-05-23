---
title: "Permissions-Policy: local-fonts-Direktive"
short-title: local-fonts
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-fonts
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der Direktive `local-fonts` steuert, ob das aktuelle Dokument berechtigt ist, Daten über die beim Benutzer lokal installierten Schriftarten über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) zu sammeln.

Speziell in Fällen, in denen eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden von [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) zurückgegebene {{jsxref("Promise")}}s mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgewiesen.

## Syntax

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Nutzung der Funktion erlaubt ist. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `local-fonts` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Richtlinie für Berechtigungen](/de/docs/Web/HTTP/Guides/Permissions_Policy)
