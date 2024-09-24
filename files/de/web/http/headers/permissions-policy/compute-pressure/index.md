---
title: "Berechtigungsrichtlinie: compute-pressure"
slug: Web/HTTP/Headers/Permissions-Policy/compute-pressure
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `compute-pressure` steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

## Syntax

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wurde. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `compute-pressure` ist `self`, wodurch die Nutzung in gleichartigen, verschachtelten Frames erlaubt, aber die Nutzung durch Drittanbieter-Inhalte verhindert wird. Worker (dedizierte und geteilte) halten sich an die Berechtigungsrichtlinie der sie besitzenden Dokumente.

## Beispiele

### Computerdruck für Drittanbieter-Inhalte aktivieren

Die Nutzung durch Drittanbieter kann selektiv mit dem `allow`-Attribut auf {{HTMLElement("iframe")}}-Elementen aktiviert werden:

```html
<iframe src="https://example.com" allow="compute-pressure"></iframe>
```

### Die Compute Pressure API vollständig deaktivieren

Dieser HTTP-Response-Header deaktiviert den Computerdruck vollständig:

```http
Permissions-Policy: {"compute-pressure": []}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)
