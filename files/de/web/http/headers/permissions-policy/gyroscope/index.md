---
title: "Permissions-Policy: gyroscope"
slug: Web/HTTP/Headers/Permissions-Policy/gyroscope
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}}-Header-Direktive `gyroscope` steuert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts durch die {{domxref("Gyroscope")}}-Schnittstelle sammeln darf.

Speziell, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe des {{domxref("Gyroscope.Gyroscope", "Gyroscope()")}}-Konstruktors eine {{domxref("DOMException")}} vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: gyroscope=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `gyroscope` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
