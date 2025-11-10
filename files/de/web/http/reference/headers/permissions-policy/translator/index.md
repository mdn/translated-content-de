---
title: "Permissions-Policy: `translator`-Direktive"
short-title: translator
slug: Web/HTTP/Reference/Headers/Permissions-Policy/translator
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der `translator`-Direktive steuert den Zugriff auf die Übersetzungsfunktionen der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

Insbesondere, wenn eine definierte Richtlinie die Nutzung blockiert, werden alle Versuche, die Übersetzungsmethoden der API aufzurufen, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Syntax

```http
Permissions-Policy: translator=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt ist. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `translator` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
