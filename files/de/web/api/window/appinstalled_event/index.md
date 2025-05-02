---
title: "Window: appinstalled-Ereignis"
short-title: appinstalled
slug: Web/API/Window/appinstalled_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`appinstalled`**-Ereignis der [Web Manifest API](/de/docs/Web/Progressive_web_apps/Manifest) wird ausgelöst, wenn der Browser eine Seite erfolgreich als Anwendung installiert hat.

Dieses Ereignis kann nicht abgebrochen werden und es tritt keine Ereignisweitergabe (Bubbling) auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("appinstalled", (event) => { })

onappinstalled = (event) => { }
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

Oder die `onappinstalled` Ereignis-Handler-Eigenschaft benutzen:

```js
window.onappinstalled = () => {
  console.log("Thank you for installing our app!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
