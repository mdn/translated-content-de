---
title: "Permissions-Policy: local-fonts"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-fonts
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}}-Header-Direktive `local-fonts` steuert, ob das aktuelle Dokument Daten über die lokal installierten Schriftarten des Benutzers mithilfe der Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) sammeln darf.

Genauer gesagt, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden die von [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) zurückgegebenen {{jsxref("Promise")}}s mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt.

## Syntax

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Erlaubnisliste für `local-fonts` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
