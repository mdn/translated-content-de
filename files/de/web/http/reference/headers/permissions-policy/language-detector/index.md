---
title: "Permissions-Policy: language-detector directive"
short-title: language-detector
slug: Web/HTTP/Reference/Headers/Permissions-Policy/language-detector
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `language-detector` steuert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

Insbesondere dort, wo eine definierte Richtlinie die Nutzung blockiert, schlagen alle Versuche, die Sprachenerkennungsmethoden der API aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Syntax

```http
Permissions-Policy: language-detector=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt ist, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Zulassungsliste für `language-detector` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
