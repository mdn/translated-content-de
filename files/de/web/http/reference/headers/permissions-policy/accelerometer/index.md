---
title: "Permissions-Policy: accelerometer"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader('Permissions-Policy')}} mit der Direktive `accelerometer` steuert, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts mithilfe der [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle sammeln darf.

Im Speziellen, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe des [`Accelerometer()`](/de/docs/Web/API/Accelerometer/Accelerometer)-Konstruktors eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: accelerometer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardliste für `accelerometer` ist: `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
