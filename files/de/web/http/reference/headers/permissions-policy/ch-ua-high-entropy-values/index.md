---
title: "Permissions-Policy: ch-ua-high-entropy-values-Direktive"
short-title: ch-ua-high-entropy-values
slug: Web/HTTP/Reference/Headers/Permissions-Policy/ch-ua-high-entropy-values
l10n:
  sourceCommit: 2dcdbed09ec5ca28a73d82e259601459c468508c
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `ch-ua-high-entropy-values` kontrolliert, ob das Dokument die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) verwenden darf, um hoch-entzugsreiche User-Agent-Daten abzurufen.

Wenn die Berechtigung nicht erlaubt ist, gibt die Methode nur die nieder-entzugsreichen Daten `brands`, `mobile` und `platform` zurück.

## Syntax

```http
Permissions-Policy: ch-ua-high-entropy-values=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-„Allowlist“ für `ch-ua-high-entropy-values` ist `*`.

## Beispiele

### Beschränkung hoch-entzugsreicher Daten auf spezifische Ursprünge

Die folgende Richtlinie würde nur dem gegenwärtigen Ursprung und zwei anderen spezifischen Ursprüngen erlauben, hoch-entzugsreiche Daten abzurufen.

```http
Permissions-Policy: ch-ua-high-entropy-values=("self https://a.example.com" "https://b.example.com")
```

Sie könnten dann einen der beiden anderen Ursprünge einbetten:

```html
<iframe src="https://a.example.com" allow="ch-ua-high-entropy-values"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie (Permissions Policy)](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
