---
title: "Permissions-Policy: web-share"
slug: Web/HTTP/Headers/Permissions-Policy/web-share
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader('Permissions-Policy')}} mit der Direktive `web-share` steuert, ob das aktuelle Dokument die Methode [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der Web Share API verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige vom Benutzer gewählte Ziele zu teilen.

Insbesondere, wenn eine festgelegte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`Navigator.share()`](/de/docs/Web/API/Navigator/share) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) des Typs `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: web-share=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wurde. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `web-share` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

<!--
Die Implementierung im Browser wird in <https://github.com/w3c/web-share/issues/169> diskutiert.
-->

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
