---
title: "USB: connect-Ereignis"
short-title: connect
slug: Web/API/USB/connect_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`connect`**-Ereignis der [`USB`](/de/docs/Web/API/USB)-Schnittstelle wird ausgelöst, wenn ein gekoppeltes Gerät verbunden wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("connect", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onconnect = (event) => { }
```

## Ereignistyp

Ein [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("USBConnectionEvent")}}

## Beispiele

Wenn ein USB-Gerät verbunden wird, können Sie die Benutzeroberfläche aktualisieren.

```js
navigator.usb.addEventListener("connect", (event) => {
  // Add event.device to the UI.
});
```

Alternativ können Sie mit der Event-Handler-Eigenschaft `USB.onconnect` einen Handler für das `connect`-Ereignis festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onconnect` hinzugefügte Event-Listener ersetzt werden:

```js
navigator.usb.onconnect = (event) => {
  // Add event.device to the UI.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
