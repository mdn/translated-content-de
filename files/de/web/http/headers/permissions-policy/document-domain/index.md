---
title: "Permissions-Policy: document-domain"
slug: Web/HTTP/Headers/Permissions-Policy/document-domain
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header
`document-domain`-Direktive steuert, ob das aktuelle Dokument
berechtigt ist, [`document.domain`](/de/docs/Web/API/Document/domain) festzulegen.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, führt der Versuch, [`document.domain`](/de/docs/Web/API/Document/domain) festzulegen, zu einem Fehlschlag und löst einen `SecurityError`
[`DOMException`](/de/docs/Web/API/DOMException) aus.

## Syntax

```http
Permissions-Policy: document-domain=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `document-domain` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
