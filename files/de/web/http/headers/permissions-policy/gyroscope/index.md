---
title: "Permissions-Policy: gyroscope"
slug: Web/HTTP/Headers/Permissions-Policy/gyroscope
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `gyroscope`-Direktive steuert, ob das aktuelle Dokument Informationen über die Orientierung des Geräts über die {{domxref("Gyroscope")}}-Schnittstelle sammeln darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Konstruktoraufrufe von {{domxref("Gyroscope.Gyroscope", "Gyroscope()")}} einen {{domxref("DOMException")}} vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: gyroscope=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt ist. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-„allowlist“ für `gyroscope` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
