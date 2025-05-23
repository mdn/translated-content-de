---
title: "Permissions-Policy: browsing-topics-Direktive"
short-title: browsing-topics
slug: Web/HTTP/Reference/Headers/Permissions-Policy/browsing-topics
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `browsing-topics` steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API).

Wenn eine Richtlinie die Nutzung der Topics API ausdrücklich untersagt, schlagen alle Versuche, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Syntax

```http
Permissions-Policy: browsing-topics=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion gewährt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standard-Whitelist für `browsing-topics` ist `*`.

## Spezifikationen

Diese Funktion ist kein Bestandteil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Topics API](/de/docs/Web/API/Topics_API)
- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
