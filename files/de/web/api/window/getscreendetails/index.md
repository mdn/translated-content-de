---
title: "Window: getScreenDetails() Methode"
short-title: getScreenDetails()
slug: Web/API/Window/getScreenDetails
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getScreenDetails()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) Objektinstanz erfüllt wird, die die Details aller Bildschirme darstellt, die dem Gerät des Benutzers zur Verfügung stehen.

## Syntax

```js-nolint
getScreenDetails()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) Objektinstanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesetzt ist, die die Verwendung der [Window Management API](/de/docs/Web/API/Window_Management_API) blockiert, oder wenn der Benutzer der Berechtigungsanfrage des Browsers zur Nutzung der API ausdrücklich widersprochen hat.

## Beispiele

Wenn `getScreenDetails()` aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, Fenster auf allen seinen Bildschirmen zu verwalten (der Status dieser Berechtigung kann mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, um `window-management` zu überprüfen). Wenn sie die Erlaubnis erteilen, enthält das resultierende [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) Objekt Details zu allen Bildschirmen, die dem System des Benutzers zur Verfügung stehen.

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
> Sehen Sie sich das [Multi-Window Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) für ein vollständiges Beispiel an (sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
