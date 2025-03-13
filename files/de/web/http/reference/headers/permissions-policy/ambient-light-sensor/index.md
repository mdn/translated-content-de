---
title: "Permissions-Policy: ambient-light-sensor"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/ambient-light-sensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-Header {{HTTPHeader('Permissions-Policy')}} -Direktiv `ambient-light-sensor` steuert, ob das aktuelle Dokument Informationen über die Menge des Lichts in der Umgebung des Geräts über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor) Schnittstelle sammeln darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe des Konstruktors [`AmbientLightSensor()`](/de/docs/Web/API/AmbientLightSensor/AmbientLightSensor) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: ambient-light-sensor=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Erlaubnisliste für `ambient-light-sensor` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
