---
title: "Permissions-Policy: browsing-topics"
slug: Web/HTTP/Headers/Permissions-Policy/browsing-topics
l10n:
  sourceCommit: 81dbd6314e340cfff2a489b370a3ec6d53c74287
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `browsing-topics`-Direktive steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API).

Wenn eine Richtlinie die Nutzung der Topics API ausdrücklich untersagt, schlägt jeder Versuch, die Methode {{domxref("Document.browsingTopics()")}} aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` {{domxref("DOMException")}} fehl.

## Syntax

```http
Permissions-Policy: browsing-topics=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowliste für `browsing-topics` ist `*`.

## Spezifikationen

Dieses Feature ist Teil eines inoffiziellen Standards und wird im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Topics API](/de/docs/Web/API/Topics_API)
- {{domxref("Document.browsingTopics()")}}
