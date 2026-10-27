---
title: "USB: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/USB/disconnect_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`disconnect`**-Ereignis der [`USB`](/de/docs/Web/API/USB)-Schnittstelle wird ausgelöst, wenn ein gekoppeltes Gerät getrennt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("disconnect", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondisconnect = (event) => { }
```

## Ereignistyp

Ein [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("USBConnectionEvent")}}

## Beispiele

Wenn ein USB-Gerät getrennt wird, möchten Sie möglicherweise die Benutzeroberfläche aktualisieren.

```js
navigator.usb.addEventListener("disconnect", (event) => {
  // Remove event.device from the UI.
});
```

Alternativ können Sie mit der Event-Handler-Eigenschaft `USB.ondisconnect` einen Handler für das `disconnect`-Ereignis festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `ondisconnect` hinzugefügte Event-Listener ersetzt werden:

```js
navigator.usb.ondisconnect = (event) => {
  // Remove event.device from the UI.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
