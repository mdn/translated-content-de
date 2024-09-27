---
title: "Window: Methode getScreenDetails()"
short-title: getScreenDetails()
slug: Web/API/Window/getScreenDetails
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getScreenDetails()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz eines [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekts erfüllt wird, welches die Details aller für das Gerät des Benutzers verfügbaren Bildschirme repräsentiert.

## Syntax

```js-nolint
getScreenDetails()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz eines [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekts erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn eine {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) festgelegt ist, die die Nutzung der [Window Management API](/de/docs/Web/API/Window_Management_API) blockiert, oder wenn der Benutzer die Berechtigungsanfrage des Browsers zur Nutzung der API ausdrücklich abgelehnt hat.

## Beispiele

Wenn `getScreenDetails()` aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, Fenster auf allen seinen Bildschirmen zu verwalten (der Status dieser Berechtigung kann mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, um `window-management` zu überprüfen). Vorausgesetzt, sie erteilen die Erlaubnis, enthält das resultierende [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt Details zu allen Bildschirmen, die dem System des Benutzers zur Verfügung stehen.

Das folgende Beispiel öffnet ein Fenster in voller Größe auf jedem verfügbaren Bildschirm.

```js
const screenDetails = await window.getScreenDetails();

// Open a full-size window on each screen available to the device
for (const screen of screenDetails.screens) {
  window.open(
    "https://example.com",
    "_blank",
    `left=${screen.availLeft},
    top=${screen.availTop},
    width=${screen.availWidth},
    height=${screen.availHeight}`,
  );
}
```

> [!NOTE]
> Sehen Sie sich [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) für ein vollständiges Beispiel an (sehen Sie auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
