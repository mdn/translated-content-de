---
title: "Permissions-Policy: window-management-Direktive"
short-title: window-management
slug: Web/HTTP/Reference/Headers/Permissions-Policy/window-management
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `window-management` steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

Wenn diese Richtlinie die Verwendung der API verbietet:

- Das von der Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) zurückgegebene {{jsxref("Promise")}} wird mit einer `NotAllowedError`-Ausnahme abgelehnt.
- Die Eigenschaft [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) wird immer `false` zurückgeben.

## Syntax

```http
Permissions-Policy: window-management=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `window-management` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
