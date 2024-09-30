---
title: "Permissions-Policy: compute-pressure"
slug: Web/HTTP/Headers/Permissions-Policy/compute-pressure
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `compute-pressure`-Direktive steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

## Syntax

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `compute-pressure` ist `self`, was die Nutzung in gleichnamigen verschachtelten Frames erlaubt, jedoch die Nutzung durch Drittanbieter-Inhalte verhindert. Worker (dedizierte und geteilte) halten sich an die Berechtigungspolitik, die durch ihr zugehöriges Dokument festgelegt wird.

## Beispiele

### Bereitstellung des Compute Pressure für Drittanbieter-Inhalte

Die Nutzung durch Drittanbieter kann selektiv mithilfe des `allow`-Attributs auf {{HTMLElement("iframe")}}-Elementen aktiviert werden:

```html
<iframe src="https://example.com" allow="compute-pressure"></iframe>
```

### Deaktivierung der Compute Pressure API komplett

Dieser HTTP-Antwort-Header deaktiviert die Compute Pressure vollständig:

```http
Permissions-Policy: {"compute-pressure": []}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)
