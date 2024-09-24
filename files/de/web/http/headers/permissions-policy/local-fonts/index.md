---
title: "Permissions-Policy: lokale Schriftarten"
slug: Web/HTTP/Headers/Permissions-Policy/local-fonts
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `local-fonts` steuert, ob das aktuelle Dokument Daten über die lokal installierten Schriftarten des Benutzers mittels der Methode {{DOMxRef("Window.queryLocalFonts()")}} sammeln darf.

Speziell in Fällen, in denen eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden von {{DOMxRef("Window.queryLocalFonts()")}} zurückgegebene {{jsxref("Promise")}}s mit einem {{domxref("DOMException")}} des Typs `SecurityError` zurückgewiesen.

## Syntax

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Nutzung der Funktion gestattet ist. Weitere Informationen finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-allowlist für `local-fonts` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}
- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
