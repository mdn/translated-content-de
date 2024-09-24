---
title: "Fenster: getScreenDetails()-Methode"
short-title: getScreenDetails()
slug: Web/API/Window/getScreenDetails
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getScreenDetails()`**-Methode der {{domxref("Window")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("ScreenDetails")}}-Objektinstanz erfüllt wird, welche die Details aller auf dem Gerät des Benutzers verfügbaren Bildschirme darstellt.

## Syntax

```js-nolint
getScreenDetails()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer {{domxref("ScreenDetails")}}-Objektinstanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) gesetzt ist, die die Nutzung der [Window Management API](/de/docs/Web/API/Window_Management_API) blockiert, oder wenn der Benutzer die Berechtigungsanfrage des Browsers zur Nutzung der API ausdrücklich abgelehnt hat.

## Beispiele

Wenn `getScreenDetails()` aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, Fenster auf allen seinen Bildschirmen zu verwalten (der Status dieser Berechtigung kann mit {{domxref("Permissions.query()")}} abgefragt werden, um `window-management` zu prüfen). Wenn die Erlaubnis erteilt wird, enthält das resultierende {{domxref("ScreenDetails")}}-Objekt Details zu allen Bildschirmen, die auf dem System des Benutzers verfügbar sind.

Im folgenden Beispiel wird auf jedem verfügbaren Bildschirm ein Fenster in voller Größe geöffnet.

```js
const screenDetails = await window.getScreenDetails();

// Öffnet ein Fenster in voller Größe auf jedem verfügbaren Bildschirm des Geräts
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
> Siehe [Multi-Window-Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) für ein vollständiges Beispiel (sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
