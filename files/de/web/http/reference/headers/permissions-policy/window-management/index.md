---
title: "Permissions-Policy: window-management Richtlinie"
short-title: window-management
slug: Web/HTTP/Reference/Headers/Permissions-Policy/window-management
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `window-management` steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

Wenn diese Richtlinie die Verwendung der API verbietet:

- Das von der Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) zurückgegebene {{jsxref("Promise")}} wird mit einer `NotAllowedError` Ausnahme abgelehnt.
- Die Eigenschaft [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) wird immer `false` zurückgeben.

## Syntax

```http
Permissions-Policy: window-management=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Einzelheiten finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `window-management` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
