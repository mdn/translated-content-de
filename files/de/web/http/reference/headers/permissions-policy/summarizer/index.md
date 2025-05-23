---
title: "Permissions-Policy: summarizer Direktive"
short-title: summarizer
slug: Web/HTTP/Reference/Headers/Permissions-Policy/summarizer
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `summarizer` steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

Insbesondere, wenn eine definierte Richtlinie die Nutzung der Summarizer API blockiert, schlagen alle Versuche, die Methoden der API aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Syntax

```http
Permissions-Policy: summarizer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `summarizer` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Leitfaden zur Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
