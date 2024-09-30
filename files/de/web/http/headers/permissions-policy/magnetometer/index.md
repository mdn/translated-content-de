---
title: "Permissions-Policy: magnetometer"
slug: Web/HTTP/Headers/Permissions-Policy/magnetometer
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `magnetometer` kontrolliert, ob das aktuelle Dokument berechtigt ist, Informationen über die Ausrichtung des Geräts zu sammeln, indem es die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle nutzt.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe des Konstruktors [`Magnetometer()`](/de/docs/Web/API/Magnetometer/Magnetometer) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: magnetometer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `magnetometer` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
