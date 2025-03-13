---
title: "Permissions-Policy: document-domain"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/document-domain
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-Headerfeld {{HTTPHeader("Permissions-Policy")}} mit der Direktive `document-domain` steuert, ob das aktuelle Dokument [`document.domain`](/de/docs/Web/API/Document/domain) setzen darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, wird ein Versuch, [`document.domain`](/de/docs/Web/API/Document/domain) zu setzen, fehlschlagen und einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) auslösen.

## Syntax

```http
Permissions-Policy: document-domain=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `document-domain` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
