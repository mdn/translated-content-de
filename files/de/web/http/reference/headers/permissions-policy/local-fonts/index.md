---
title: "Permissions-Policy: local-fonts Direktive"
short-title: local-fonts
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-fonts
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `local-fonts` steuert, ob das aktuelle Dokument Daten über die lokal installierten Schriftarten des Benutzers über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) sammeln darf.

Insbesondere bei einer definierten Richtlinie, die die Nutzung dieser Funktion blockiert, werden die von [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) zurückgegebenen {{jsxref("Promise")}}s mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt.

## Syntax

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `local-fonts` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
