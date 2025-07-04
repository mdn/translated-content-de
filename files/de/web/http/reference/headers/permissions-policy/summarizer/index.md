---
title: "Permissions-Policy: summarizer-Direktive"
short-title: summarizer
slug: Web/HTTP/Reference/Headers/Permissions-Policy/summarizer
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `summarizer`-Direktive steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

Konkret bedeutet dies, dass bei einer definierten Richtlinie, die die Verwendung der Summarizer API blockiert, jegliche Versuche, die Methoden der API aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen werden.

## Syntax

```http
Permissions-Policy: summarizer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wurde, die Funktion zu nutzen. Weitere Details hierzu finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `summarizer` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
