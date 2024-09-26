---
title: "Permissions-Policy: web-share"
slug: Web/HTTP/Headers/Permissions-Policy/web-share
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader('Permissions-Policy')}} `web-share`-Direktive steuert, ob das aktuelle Dokument die Methode {{domxref("Navigator.share","Navigator.share()")}} der Web Share API verwenden darf, um Text, Links, Bilder und andere Inhalte zu beliebigen Zielen der Wahl des Nutzers zu teilen.

Insbesondere dann, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von {{domxref("Navigator.share()")}} ein {{jsxref("Promise")}} zurückgeben, das mit einer {{domxref("DOMException")}} des Typs `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: web-share=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung dieser Funktion gewährt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Zulassungsliste für `web-share` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

<!--
Die Implementierung im Browser wird unter <https://github.com/w3c/web-share/issues/169> diskutiert.
-->

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
