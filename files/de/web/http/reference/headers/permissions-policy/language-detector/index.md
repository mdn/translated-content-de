---
title: "Permissions-Policy: language-detector Direktive"
short-title: language-detector
slug: Web/HTTP/Reference/Headers/Permissions-Policy/language-detector
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `language-detector` steuert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

Insbesondere, wenn eine definierte Richtlinie die Nutzung blockiert, wird die statische Methode [`LanguageDetector.availability()`](/de/docs/Web/API/LanguageDetector/availability_static) `unavailable` zurückgeben, und alle Versuche, andere Methoden der API aufzurufen, werden mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Syntax

```http
Permissions-Policy: language-detector=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardliste der zugelassenen Ursprünge für `language-detector` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
