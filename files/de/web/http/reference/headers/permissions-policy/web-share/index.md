---
title: "Permissions-Policy: web-share Direktive"
short-title: web-share
slug: Web/HTTP/Reference/Headers/Permissions-Policy/web-share
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader('Permissions-Policy')}} mit der `web-share` Direktive steuert, ob das aktuelle Dokument die Methode [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der Web Share API verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige Ziele nach Wahl des Nutzers zu teilen.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`Navigator.share()`](/de/docs/Web/API/Navigator/share) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) des Typs `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: web-share=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `web-share` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

<!--
Die Implementierung im Browser wird unter <https://github.com/w3c/web-share/issues/169> diskutiert.
-->

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}} Header
- [Berechtigungsrichtlinie (Permissions Policy)](/de/docs/Web/HTTP/Guides/Permissions_Policy)
