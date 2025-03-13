---
title: "Permissions-Policy: gyroscope"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/gyroscope
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `gyroscope` steuert, ob das aktuelle Dokument Informationen über die Orientierung des Geräts über das [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Interface sammeln darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe des [`Gyroscope()`](/de/docs/Web/API/Gyroscope/Gyroscope)-Konstruktors eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: gyroscope=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, die Funktion zu verwenden. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `gyroscope` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions-Richtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
