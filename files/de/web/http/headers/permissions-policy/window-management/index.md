---
title: "Permissions-Policy: Fensterverwaltung"
slug: Web/HTTP/Headers/Permissions-Policy/window-management
l10n:
  sourceCommit: bafc473d01411340a547b9fae11702ead2b28016
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `window-management` steuert, ob das aktuelle Dokument die [Fensterverwaltungs-API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

Wo diese Richtlinie die Nutzung der API verbietet:

- Das von der Methode {{domxref("Window.getScreenDetails()")}} zurückgegebene {{jsxref("Promise")}} wird mit einer `NotAllowedError`-Ausnahme abgelehnt.
- Die Eigenschaft {{domxref("Screen.isExtended", "Window.screen.isExtended")}} wird immer `false` zurückgeben.

## Syntax

```http
Permissions-Policy: window-management=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `window-management` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fensterverwaltungs-API](/de/docs/Web/API/Window_Management_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
