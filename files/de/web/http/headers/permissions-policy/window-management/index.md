---
title: "Permissions-Policy: window-management"
slug: Web/HTTP/Headers/Permissions-Policy/window-management
l10n:
  sourceCommit: bafc473d01411340a547b9fae11702ead2b28016
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `window-management` kontrolliert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Anzeigen zu verwalten.

Wenn diese Richtlinie die Nutzung der API verbietet:

- Das von der Methode {{domxref("Window.getScreenDetails()")}} zurückgegebene {{jsxref("Promise")}} wird mit einer `NotAllowedError`-Ausnahme abgelehnt.
- Die Eigenschaft {{domxref("Screen.isExtended", "Window.screen.isExtended")}} wird immer `false` zurückgeben.

## Syntax

```http
Permissions-Policy: window-management=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `window-management` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
