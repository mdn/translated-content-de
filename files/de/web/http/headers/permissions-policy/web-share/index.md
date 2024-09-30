---
title: "Permissions-Policy: web-share"
slug: Web/HTTP/Headers/Permissions-Policy/web-share
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader('Permissions-Policy')}} mit der Direktive `web-share` kontrolliert, ob das aktuelle Dokument die Methode [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der Web Share API verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige Ziele nach Wahl des Nutzers zu teilen.

Speziell dort, wo eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe von [`Navigator.share()`](/de/docs/Web/API/Navigator/share) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) des Typs `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: web-share=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardallowlist für `web-share` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

<!--
Die Implementierung im Browser wird in <https://github.com/w3c/web-share/issues/169> diskutiert.
-->

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}} header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
