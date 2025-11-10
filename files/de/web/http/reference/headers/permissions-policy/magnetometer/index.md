---
title: "Permissions-Policy: magnetometer-Direktive"
short-title: magnetometer
slug: Web/HTTP/Reference/Headers/Permissions-Policy/magnetometer
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `magnetometer` steuert, ob das aktuelle Dokument Informationen über die Orientierung des Geräts über das [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Interface sammeln darf.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe des [`Magnetometer()`](/de/docs/Web/API/Magnetometer/Magnetometer)-Konstruktors eine [`DOMException`](/de/docs/Web/API/DOMException) des Typs `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: magnetometer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `magnetometer` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
