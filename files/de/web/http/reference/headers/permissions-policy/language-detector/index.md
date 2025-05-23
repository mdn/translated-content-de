---
title: "Permissions-Policy: language-detector"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/language-detector
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-Header-Direktive {{HTTPHeader("Permissions-Policy")}} `language-detector` steuert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

Insbesondere, wenn eine definierte Richtlinie die Nutzung blockiert, schlagen alle Versuche, die API-Methoden zur Spracherkennung aufzurufen, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Syntax

```http
Permissions-Policy: language-detector=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standardzugriffsliste für `language-detector` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
