---
title: "Permissions-Policy: summarizer-Direktive"
short-title: summarizer
slug: Web/HTTP/Reference/Headers/Permissions-Policy/summarizer
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `summarizer`-Direktive steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

Speziell, wenn eine definierte Richtlinie die Nutzung der Summarizer API blockiert, wird die statische Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) `unavailable` zurückgeben, und jegliche Versuche, andere Methoden der API aufzurufen, schlagen mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Syntax

```http
Permissions-Policy: summarizer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `summarizer` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
