---
title: "Permissions-Policy: local-fonts"
slug: Web/HTTP/Headers/Permissions-Policy/local-fonts
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `local-fonts` steuert, ob das aktuelle Dokument Daten über die lokal installierten Schriftarten des Benutzers mithilfe der Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) sammeln darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden die von [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) zurückgegebenen {{jsxref("Promise")}}s mit einem [`DOMException`](/de/docs/Web/API/DOMException) des Typs `SecurityError` abgelehnt.

## Syntax

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Informationen finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `local-fonts` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
