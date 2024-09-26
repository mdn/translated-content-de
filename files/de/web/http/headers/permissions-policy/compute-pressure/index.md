---
title: "Permissions-Policy: compute-pressure"
slug: Web/HTTP/Headers/Permissions-Policy/compute-pressure
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{HTTPSidebar}}{{SeeCompatTable}}

Das HTTP-Header {{HTTPHeader("Permissions-Policy")}}-Direktiv `compute-pressure` steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

## Syntax

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standardliste für `compute-pressure` ist `self`, die die Nutzung in gleich-originellen eingebetteten Frames erlaubt, aber verhindert, dass Drittanbieter-Inhalte die Funktion nutzen. Workers (dedizierte und gemeinsame) halten sich an die von ihren besitzenden Dokumenten festgelegte Berechtigungsrichtlinie.

## Beispiele

### Aktivieren des Compute Pressure auf Drittanbieter-Inhalten

Die Nutzung durch Dritte kann selektiv über das `allow`-Attribut auf {{HTMLElement("iframe")}}-Elementen aktiviert werden:

```html
<iframe src="https://example.com" allow="compute-pressure"></iframe>
```

### Vollständiges Deaktivieren der Compute Pressure API

Dieses HTTP-Antwort-Header deaktiviert den Compute Pressure vollständig:

```http
Permissions-Policy: {"compute-pressure": []}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)
