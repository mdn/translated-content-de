---
title: "Permissions-Policy: accelerometer"
slug: Web/HTTP/Headers/Permissions-Policy/accelerometer
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-Directive {{HTTPHeader('Permissions-Policy')}} `accelerometer` steuert, ob das aktuelle Dokument berechtigt ist, Informationen über die Beschleunigung des Geräts durch das {{domxref('Accelerometer')}}-Interface zu sammeln.

Insbesondere gilt: Wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, wird der Aufruf des Konstruktors {{domxref("Accelerometer.Accelerometer", "Accelerometer()")}} eine {{domxref("DOMException")}} vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: accelerometer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen (`origins`), für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Einzelheiten finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Positivliste (`allowlist`) für `accelerometer` ist: `self`.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
