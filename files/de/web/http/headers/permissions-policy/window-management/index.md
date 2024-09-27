---
title: "Permissions-Policy: window-management"
slug: Web/HTTP/Headers/Permissions-Policy/window-management
l10n:
  sourceCommit: bafc473d01411340a547b9fae11702ead2b28016
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Direktive `window-management` steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Displays zu verwalten.

Wo diese Richtlinie die Verwendung der API untersagt:

- Das von der Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) zurückgegebene {{jsxref("Promise")}} wird mit einer `NotAllowedError`-Ausnahme abgelehnt.
- Die Eigenschaft [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) wird immer `false` zurückgeben.

## Syntax

```http
Permissions-Policy: window-management=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standard-Whitelist für `window-management` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
