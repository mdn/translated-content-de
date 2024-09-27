---
title: "Permissions-Policy: browsing-topics"
slug: Web/HTTP/Headers/Permissions-Policy/browsing-topics
l10n:
  sourceCommit: 81dbd6314e340cfff2a489b370a3ec6d53c74287
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `browsing-topics`-Direktive steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API).

Wenn eine Richtlinie die Nutzung der Topics API ausdrücklich verbietet, schlägt jeder Versuch, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Syntax

```http
Permissions-Policy: browsing-topics=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `browsing-topics` ist `*`.

## Spezifikationen

Diese Funktion ist nicht Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Topics API](/de/docs/Web/API/Topics_API)
- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)
