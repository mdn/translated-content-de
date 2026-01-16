---
title: "Permissions-Policy: compute-pressure Anweisung"
short-title: compute-pressure
slug: Web/HTTP/Reference/Headers/Permissions-Policy/compute-pressure
l10n:
  sourceCommit: e1ba93217506c754efb52ff8e84cd7314e091211
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Anweisung `compute-pressure` kontrolliert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

## Syntax

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Urlaubsliste für `compute-pressure` ist `self`, was die Nutzung in gleichursprünglichen, geschachtelten Frames erlaubt, aber Drittanbieterinhalte von der Nutzung der Funktion ausschließt. Worker (dedizierte und geteilte) halten sich an die Berechtigungspolitik ihrer zugehörigen Dokumente.

## Beispiele

### Ermöglichen des Compute Pressure für Drittanbieterinhalte

Die Nutzung durch Drittanbieter kann selektiv durch das `allow`-Attribut auf {{HTMLElement("iframe")}}-Elementen aktiviert werden:

```html
<iframe src="https://example.com" allow="compute-pressure"></iframe>
```

### Vollständiges Deaktivieren der Compute Pressure API

Dieser HTTP-Antwortheader deaktiviert den Compute Pressure vollständig:

```http
Permissions-Policy: compute-pressure=()
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)
