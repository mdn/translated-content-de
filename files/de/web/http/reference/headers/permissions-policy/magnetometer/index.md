---
title: "Permissions-Policy: magnetometer"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/magnetometer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `magnetometer` steuert, ob das aktuelle Dokument berechtigt ist, Informationen über die Ausrichtung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle zu sammeln.

Konkret gilt, dass, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, Aufrufe des Konstruktors [`Magnetometer()`](/de/docs/Web/API/Magnetometer/Magnetometer) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen werden.

## Syntax

```http
Permissions-Policy: magnetometer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie im Abschnitt [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowsliste für `magnetometer` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
