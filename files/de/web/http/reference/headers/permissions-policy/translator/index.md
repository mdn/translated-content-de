---
title: "Permissions-Policy: Übersetzer-Direktive"
short-title: translator
slug: Web/HTTP/Reference/Headers/Permissions-Policy/translator
l10n:
  sourceCommit: a94222db08ada9dfbbdb880c064df91853204743
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `translator`-Direktive steuert den Zugriff auf die Übersetzungsfunktionalität der [Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

Insbesondere, wenn eine definierte Richtlinie die Nutzung blockiert, werden alle Versuche, die Übersetzungsmethoden der API aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Syntax

```http
Permissions-Policy: translator=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wurde, das Feature zu verwenden. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `translator` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
