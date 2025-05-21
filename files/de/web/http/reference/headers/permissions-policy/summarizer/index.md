---
title: "Permissions-Policy: summarizer"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/summarizer
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}}-Direktive `summarizer` kontrolliert den Zugriff auf die [Summarizer-API](/de/docs/Web/API/Summarizer_API).

Konkret gilt: Wenn eine definierte Richtlinie die Nutzung der Summarizer-API blockiert, werden alle Versuche, die Methoden der API aufzurufen, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Syntax

```http
Permissions-Policy: summarizer=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `summarizer` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungen-Richtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
