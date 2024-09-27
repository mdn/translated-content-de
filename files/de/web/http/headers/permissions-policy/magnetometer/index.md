---
title: "Permissions-Policy: magnetometer"
slug: Web/HTTP/Headers/Permissions-Policy/magnetometer
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `magnetometer` steuert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle sammeln darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, lösen Aufrufe des Konstruktors [`Magnetometer()`](/de/docs/Web/API/Magnetometer/Magnetometer) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` aus.

## Syntax

```http
Permissions-Policy: magnetometer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardliste für `magnetometer` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP-Header {{HTTPHeader("Permissions-Policy")}}
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
