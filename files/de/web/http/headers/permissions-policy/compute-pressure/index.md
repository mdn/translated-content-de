---
title: "Permissions-Policy: compute-pressure"
slug: Web/HTTP/Headers/Permissions-Policy/compute-pressure
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `compute-pressure` Direktive steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

## Syntax

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Erlaubnisliste für `compute-pressure` ist `self`, was die Nutzung in gleichartigen eingebetteten Frames ermöglicht, jedoch die Verwendung durch Drittinhalt unterbindet. Worker (dedizierte und geteilte) halten sich an die Berechtigungsrichtlinie, die durch ihr besitzendes Dokument gesetzt wird.

## Beispiele

### Aktivierung von Compute Pressure für Drittinhalte

Die Nutzung durch Dritte kann selektiv über das `allow` Attribut bei {{HTMLElement("iframe")}} Elementen aktiviert werden:

```html
<iframe src="https://example.com" allow="compute-pressure"></iframe>
```

### Vollständiges Deaktivieren der Compute Pressure API

Dieser HTTP-Antwortheader deaktiviert die Compute Pressure vollständig:

```http
Permissions-Policy: {"compute-pressure": []}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)
