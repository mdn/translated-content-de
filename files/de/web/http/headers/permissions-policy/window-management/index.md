---
title: "Permissions-Policy: window-management"
slug: Web/HTTP/Headers/Permissions-Policy/window-management
l10n:
  sourceCommit: bafc473d01411340a547b9fae11702ead2b28016
---

{{HTTPSidebar}}{{SeeCompatTable}}

Das HTTP {{HTTPHeader("Permissions-Policy")}} Header `window-management`-Direktive steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Displays zu verwalten.

Wo diese Richtlinie die Nutzung der API verbietet:

- Das von der Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) zurückgegebene {{jsxref("Promise")}} wird mit einem `NotAllowedError`-Fehler abgelehnt.
- Die Eigenschaft [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) wird immer `false` zurückgeben.

## Syntax

```http
Permissions-Policy: window-management=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, denen die Erlaubnis erteilt wird, die Funktion zu nutzen. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `window-management` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
