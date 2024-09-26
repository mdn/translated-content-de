---
title: "Permissions-Policy: local-fonts"
slug: Web/HTTP/Headers/Permissions-Policy/local-fonts
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Das HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `local-fonts`-Direktive steuert, ob das aktuelle Dokument berechtigt ist, Daten über die lokal installierten Schriftarten des Benutzers über die {{DOMxRef("Window.queryLocalFonts()")}}-Methode zu sammeln.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden die von {{DOMxRef("Window.queryLocalFonts()")}} zurückgegebenen {{jsxref("Promise")}}s mit einer {{domxref("DOMException")}} des Typs `SecurityError` abgelehnt.

## Syntax

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung dieser Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Zulassungsliste für `local-fonts` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
