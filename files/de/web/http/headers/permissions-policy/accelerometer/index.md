---
title: "Permissions-Policy: accelerometer"
slug: Web/HTTP/Headers/Permissions-Policy/accelerometer
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader('Permissions-Policy')}} `accelerometer`-Direktive steuert, ob das aktuelle Dokument über die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle Informationen über die Beschleunigung des Geräts sammeln darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe des [`Accelerometer()`](/de/docs/Web/API/Accelerometer/Accelerometer)-Konstruktors eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: accelerometer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt ist. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Der Standardzulassungsbereich für `accelerometer` ist: `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
