---
title: "Permissions-Policy: translator-Richtlinie"
short-title: translator
slug: Web/HTTP/Reference/Headers/Permissions-Policy/translator
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der `translator`-Richtlinie steuert den Zugriff auf die Übersetzungsfunktionalität der [Translator- und Sprachdetektor-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

Speziell, wenn eine definierte Richtlinie die Nutzung blockiert, wird die statische Methode [`Translator.availability()`](/de/docs/Web/API/Translator/availability_static) `unavailable` zurückgeben, und jegliche Versuche, andere Methoden der API aufzurufen, werden mit einem `NotAllowedError`-`[`DOMException`](/de/docs/Web/API/DOMException)` fehlschlagen.

## Syntax

```http
Permissions-Policy: translator=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `translator` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
