---
title: "Permissions-Policy: compute-pressure Direktive"
short-title: compute-pressure
slug: Web/HTTP/Reference/Headers/Permissions-Policy/compute-pressure
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}}-Header `compute-pressure`-Direktive steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

## Syntax

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `compute-pressure` ist `self`, was die Nutzung in gleichartigen, eingebetteten Frames erlaubt, jedoch die Nutzung durch Drittanbieterinhalte verhindert. Worker (dedizierte und gemeinsame) halten sich an die Berechtigungsrichtlinie, die von ihrem/dokumentarischen Eigentümer gesetzt wird.

## Beispiele

### Aktivierung von Compute Pressure für Drittanbieterinhalte

Die Nutzung durch Dritte kann selektiv durch das `allow`-Attribut auf {{HTMLElement("iframe")}}-Elementen aktiviert werden:

```html
<iframe src="https://example.com" allow="compute-pressure"></iframe>
```

### Vollständiges Deaktivieren der Compute Pressure API

Dieser HTTP-Antwort-Header deaktiviert Compute Pressure vollständig:

```http
Permissions-Policy: {"compute-pressure": []}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)
