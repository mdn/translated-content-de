---
title: "Permissions-Policy: language-detector directive"
short-title: language-detector
slug: Web/HTTP/Reference/Headers/Permissions-Policy/language-detector
l10n:
  sourceCommit: a94222db08ada9dfbbdb880c064df91853204743
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `language-detector` steuert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

Insbesondere, wenn eine definierte Richtlinie die Nutzung blockiert, führen jegliche Versuche, die Sprachenerkennungsmethoden der API aufzurufen, zu einem Fehlschlag mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException).

## Syntax

```http
Permissions-Policy: language-detector=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung für die Nutzung der Funktion erteilt ist. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `language-detector` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
