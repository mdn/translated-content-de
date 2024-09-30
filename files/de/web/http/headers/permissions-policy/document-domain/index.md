---
title: "Permissions-Policy: document-domain"
slug: Web/HTTP/Headers/Permissions-Policy/document-domain
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}}
`document-domain`-Direktive steuert, ob das aktuelle Dokument berechtigt ist, [`document.domain`](/de/docs/Web/API/Document/domain) zu setzen.

Speziell, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, wird der Versuch, [`document.domain`](/de/docs/Web/API/Document/domain) zu setzen, fehlschlagen und einen `SecurityError`
[`DOMException`](/de/docs/Web/API/DOMException) auslösen.

## Syntax

```http
Permissions-Policy: document-domain=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Zulassungsliste für `document-domain` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
