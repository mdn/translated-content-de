---
title: "Permissions-Policy: accelerometer"
slug: Web/HTTP/Headers/Permissions-Policy/accelerometer
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP {{HTTPHeader('Permissions-Policy')}} Header-Direktive `accelerometer` kontrolliert, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts durch die [`Accelerometer`](/de/docs/Web/API/Accelerometer) Schnittstelle sammeln darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werfen Aufrufe des [`Accelerometer()`](/de/docs/Web/API/Accelerometer/Accelerometer) Konstruktors eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError`.

## Syntax

```http
Permissions-Policy: accelerometer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `accelerometer` ist: `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
