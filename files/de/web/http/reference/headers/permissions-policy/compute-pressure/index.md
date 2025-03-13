---
title: "Permissions-Policy: compute-pressure"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/compute-pressure
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} directive `compute-pressure` steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

## Syntax

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `compute-pressure` ist `self`, was die Nutzung in innerhalb derselben Herkunft eingebetteten Frames ermöglicht, aber die Nutzung durch Drittanbieterinhalte verhindert. Worker (dedizierte und geteilte) halten sich an die Berechtigungsrichtlinie, die von ihrem besitzenden Dokument gesetzt wurde.

## Beispiele

### Aktivierung des Compute Pressure für Drittanbieterinhalte

Die Verwendung durch Drittanbieter kann selektiv über das `allow`-Attribut in {{HTMLElement("iframe")}}-Elementen aktiviert werden:

```html
<iframe src="https://example.com" allow="compute-pressure"></iframe>
```

### Die Compute Pressure API vollständig deaktivieren

Dieser HTTP-Response-Header deaktiviert die Compute Pressure vollständig:

```http
Permissions-Policy: {"compute-pressure": []}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)
