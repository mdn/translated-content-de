---
title: "Permissions-Policy: web-share"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/web-share
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader('Permissions-Policy')}}-Header-Direktive `web-share` steuert, ob das aktuelle Dokument die Methode [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der Web Share API verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige vom Benutzer ausgewählte Ziele zu teilen.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden die Aufrufe von [`Navigator.share()`](/de/docs/Web/API/Navigator/share) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) des Typs `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: web-share=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion gewährt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standardliste für `web-share` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

<!--
Die Implementierung im Browser wird in <https://github.com/w3c/web-share/issues/169> diskutiert.
-->

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
