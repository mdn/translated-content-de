---
title: "Permissions-Policy: ambient-light-sensor-Richtlinie"
short-title: ambient-light-sensor
slug: Web/HTTP/Reference/Headers/Permissions-Policy/ambient-light-sensor
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP {{HTTPHeader('Permissions-Policy')}}-Header-Richtlinie `ambient-light-sensor` steuert, ob das aktuelle Dokument Informationen über die Lichtmenge in der Umgebung des Geräts durch die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle sammeln darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe des [`AmbientLightSensor()`](/de/docs/Web/API/AmbientLightSensor/AmbientLightSensor)-Konstruktors eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: ambient-light-sensor=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardallowlist für `ambient-light-sensor` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
