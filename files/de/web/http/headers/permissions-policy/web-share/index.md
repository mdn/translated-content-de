---
title: "Permissions-Policy: web-share"
slug: Web/HTTP/Headers/Permissions-Policy/web-share
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Das HTTP-{{HTTPHeader('Permissions-Policy')}}-Header `web-share`-Direktive steuert, ob das aktuelle Dokument die Methode [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der Web Share API verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige Ziele, die vom Benutzer gewählt werden, zu teilen.

Konkret gilt: Wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`Navigator.share()`](/de/docs/Web/API/Navigator/share) ein {{jsxref("Promise")}} zurückgeben, das mit einer [`DOMException`](/de/docs/Web/API/DOMException) des Typs `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: web-share=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion gewährt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Zulassungsliste für `web-share` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

<!--
Die Implementierung im Browser wird unter <https://github.com/w3c/web-share/issues/169> diskutiert.
-->

## Siehe auch

- {{HTTPHeader('Permissions-Policy')}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
