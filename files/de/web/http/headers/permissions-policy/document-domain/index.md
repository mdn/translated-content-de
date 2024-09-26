---
title: "Permissions-Policy: document-domain"
slug: Web/HTTP/Headers/Permissions-Policy/document-domain
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-{{HTTPHeader("Permissions-Policy")}}-Header
`document-domain`-Direktive kontrolliert, ob das aktuelle Dokument
erlaubt ist, {{domxref("document.domain")}} zu setzen.

Insbesondere, wenn eine definierte Richtlinie die Verwendung dieser Funktion blockiert, schlägt der Versuch, {{domxref("document.domain")}} zu setzen, fehl und verursacht, dass ein `SecurityError`
{{domxref("DOMException")}} ausgelöst wird.

## Syntax

```http
Permissions-Policy: document-domain=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `document-domain` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
