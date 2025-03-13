---
title: "Permissions-Policy: window-management"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/window-management
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `window-management` steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

Wo diese Richtlinie die Nutzung der API verbietet:

- Das von der Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) zurückgegebene {{jsxref("Promise")}} wird mit einer `NotAllowedError`-Ausnahme abgelehnt.
- Die Eigenschaft [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) gibt immer `false` zurück.

## Syntax

```http
Permissions-Policy: window-management=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `window-management` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
