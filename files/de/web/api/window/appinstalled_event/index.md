---
title: "Window: appinstalled Ereignis"
short-title: appinstalled
slug: Web/API/Window/appinstalled_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef}}

Das **`appinstalled`**-Ereignis der [Web Manifest API](/de/docs/Web/Manifest) wird ausgelöst, wenn der Browser eine Seite erfolgreich als Anwendung installiert hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("appinstalled", (event) => {});

onappinstalled = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie können das `appinstalled`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
window.addEventListener("appinstalled", () => {
  console.log("Thank you for installing our app!");
});
```

Oder verwenden Sie die `onappinstalled`-Ereignishandler-Eigenschaft:

```js
window.onappinstalled = () => {
  console.log("Thank you for installing our app!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
