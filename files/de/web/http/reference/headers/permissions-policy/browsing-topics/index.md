---
title: "Permissions-Policy: browsing-topics Direktive"
short-title: browsing-topics
slug: Web/HTTP/Reference/Headers/Permissions-Policy/browsing-topics
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{non-standard_header}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `browsing-topics` kontrolliert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API).

Wo eine Richtlinie die Verwendung der Topics API spezifisch untersagt, werden alle Versuche, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}} Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Syntax

```http
Permissions-Policy: browsing-topics=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen (origins), für die die Erlaubnis zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `browsing-topics` ist `*`.

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Topics API](/de/docs/Web/API/Topics_API)
- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
