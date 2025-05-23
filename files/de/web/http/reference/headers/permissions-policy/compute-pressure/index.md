---
title: "Permissions-Policy: compute-pressure Direktive"
short-title: compute-pressure
slug: Web/HTTP/Reference/Headers/Permissions-Policy/compute-pressure
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `compute-pressure` kontrolliert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

## Syntax

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zum Verwenden des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Listenberechtigung für `compute-pressure` ist `self`, was die Nutzung in Ursprungs-konformen verschachtelten Rahmen erlaubt, aber Drittanbieter-Inhalte daran hindert, das Feature zu nutzen. Arbeiter (dedizierte und geteilte) halten sich an die Berechtigungsrichtlinie, die von ihrem eigenen Dokument(en) festgelegt wurde.

## Beispiele

### Aktivierung des Compute Pressure auf Drittanbieter-Inhalten

Die Nutzung durch Dritte kann selektiv über das `allow`-Attribut auf {{HTMLElement("iframe")}}-Elementen aktiviert werden:

```html
<iframe src="https://example.com" allow="compute-pressure"></iframe>
```

### Deaktivierung der Compute Pressure API vollständig

Dieser HTTP-Antwortheader deaktiviert die Berechnung des Drucks vollständig:

```http
Permissions-Policy: {"compute-pressure": []}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)
