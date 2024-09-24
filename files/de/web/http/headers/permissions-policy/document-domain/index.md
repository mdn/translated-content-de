---
title: "Berechtigungsrichtlinie: document-domain"
slug: Web/HTTP/Headers/Permissions-Policy/document-domain
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `document-domain` steuert, ob das aktuelle Dokument die {{domxref("document.domain")}}-Eigenschaft setzen darf.

Speziell in Fällen, in denen eine definierte Richtlinie die Nutzung dieses Features blockiert, wird der Versuch, {{domxref("document.domain")}} zu setzen, fehlschlagen und einen `SecurityError`-{{domxref("DOMException")}} auslösen.

## Syntax

```http
Permissions-Policy: document-domain=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `document-domain` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
