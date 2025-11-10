---
title: "USB: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/USB/disconnect_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`disconnect`**-Ereignis des [`USB`](/de/docs/Web/API/USB)-Interfaces wird ausgelöst, wenn ein verbundenes Gerät getrennt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("disconnect", (event) => { })

ondisconnect = (event) => { }
```

## Ereignistyp

Ein [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("USBConnectionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften von der Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`device`](/de/docs/Web/API/USBConnectionEvent/device) {{ReadOnlyInline}}
  - : Das [`USBDevice`](/de/docs/Web/API/USBDevice), für das das Ereignis ausgelöst wird.

## Beispiele

Sobald ein USB-Gerät getrennt wird, möchten Sie möglicherweise die Benutzeroberfläche aktualisieren.

```js
navigator.usb.addEventListener("disconnect", (event) => {
  // Remove event.device from the UI.
});
```

Alternativ können Sie die Eigenschaft `USB.ondiscconnect` des Ereignis-Handlers verwenden, um einen Handler für das `disconnect`-Ereignis zu erstellen:

```js
navigator.usb.ondisconnect = (event) => {
  // Remove event.device from the UI.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
