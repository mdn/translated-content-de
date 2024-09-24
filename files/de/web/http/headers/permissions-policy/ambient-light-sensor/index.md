---
title: "Permissions-Policy: ambient-light-sensor"
slug: Web/HTTP/Headers/Permissions-Policy/ambient-light-sensor
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-{{HTTPHeader('Permissions-Policy')}}-Headerdirektive `ambient-light-sensor` kontrolliert, ob das aktuelle Dokument berechtigt ist, Informationen über die Lichtmenge in der Umgebung des Geräts über die {{domxref('AmbientLightSensor')}}-Schnittstelle zu sammeln.

Insbesondere wird, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, der Aufruf von {{domxref("AmbientLightSensor.AmbientLightSensor", "AmbientLightSensor()")}}-Konstruktoren eine {{domxref("DOMException")}} vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: ambient-light-sensor=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `ambient-light-sensor` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
