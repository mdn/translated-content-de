---
title: "Window: appinstalled-Ereignis"
short-title: appinstalled
slug: Web/API/Window/appinstalled_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef}}

Das **`appinstalled`**-Ereignis der [Web Manifest API](/de/docs/Web/Progressive_web_apps/Manifest) wird ausgelöst, wenn der Browser eine Seite erfolgreich als Anwendung installiert hat.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("appinstalled", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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

Oder verwenden Sie die `onappinstalled`-Event-Handler-Eigenschaft. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onappinstalled` hinzugefügte Event-Listener ersetzt werden:

```js
window.onappinstalled = () => {
  console.log("Thank you for installing our app!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
