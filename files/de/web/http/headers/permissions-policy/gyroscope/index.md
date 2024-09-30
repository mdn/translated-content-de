---
title: "Permissions-Policy: gyroscope"
slug: Web/HTTP/Headers/Permissions-Policy/gyroscope
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `gyroscope`-Direktive steuert, ob das aktuelle Dokument berechtigt ist, Informationen über die Ausrichtung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle zu sammeln.

Speziell dort, wo eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe des Konstruktors [`Gyroscope()`](/de/docs/Web/API/Gyroscope/Gyroscope) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: gyroscope=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `gyroscope` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
