---
title: "USB: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/USB/disconnect_event
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`disconnect`**-Ereignis des [`USB`](/de/docs/Web/API/USB)-Interfaces wird ausgelöst, wenn ein verbundenes Gerät getrennt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Ereignistyp

Ein [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("USBConnectionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften des Eltern-Interfaces [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`device`](/de/docs/Web/API/USBConnectionEvent/device) {{ReadOnlyInline}}
  - : Das [`USBDevice`](/de/docs/Web/API/USBDevice), für das das Ereignis ausgelöst wird.

## Beispiele

Sobald ein USB-Gerät getrennt wird, möchten Sie möglicherweise die Benutzeroberfläche aktualisieren.

```js
navigator.usb.addEventListener("disconnect", (event) => {
  // Remove event.device from the UI.
});
```

Alternativ können Sie die `USB.ondisconnect` Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `disconnect`-Ereignis einzurichten:

```js
navigator.usb.ondisconnect = (event) => {
  // Remove event.device from the UI.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
