---
title: "Permissions-Policy: browsing-topics"
slug: Web/HTTP/Headers/Permissions-Policy/browsing-topics
l10n:
  sourceCommit: 81dbd6314e340cfff2a489b370a3ec6d53c74287
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `browsing-topics` steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API).

Wenn eine Richtlinie die Nutzung der Topics API ausdrücklich verbietet, schlagen alle Versuche, die Methode {{domxref("Document.browsingTopics()")}} aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` {{domxref("DOMException")}} fehl.

## Syntax

```http
Permissions-Policy: browsing-topics=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `browsing-topics` ist `*`.

## Spezifikationen

Diese Funktion ist Teil keines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) beschrieben ist.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie (Permissions Policy)](/de/docs/Web/HTTP/Permissions_Policy)
- [Topics API](/de/docs/Web/API/Topics_API)
- {{domxref("Document.browsingTopics()")}}
