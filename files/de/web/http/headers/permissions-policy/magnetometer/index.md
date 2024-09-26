---
title: "Permissions-Policy: magnetometer"
slug: Web/HTTP/Headers/Permissions-Policy/magnetometer
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `magnetometer`-Directive steuert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über die {{domxref("Magnetometer")}}-Schnittstelle sammeln darf.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe des Konstruktors {{domxref("Magnetometer.Magnetometer", "Magnetometer()")}} eine {{domxref("DOMException")}} vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: magnetometer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `magnetometer` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
