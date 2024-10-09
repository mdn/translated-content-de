---
title: "USB: connect Ereignis"
short-title: connect
slug: Web/API/USB/connect_event
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`connect`**-Ereignis der [`USB`](/de/docs/Web/API/USB)-Schnittstelle wird ausgelöst, wenn ein gekoppeltes Gerät verbunden wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("USBConnectionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`device`](/de/docs/Web/API/USBConnectionEvent/device) {{ReadOnlyInline}}
  - : Das [`USBDevice`](/de/docs/Web/API/USBDevice), für das das Ereignis ausgelöst wird.

## Beispiele

Sobald ein USB-Gerät verbunden ist, möchten Sie möglicherweise die Benutzeroberfläche aktualisieren.

```js
navigator.usb.addEventListener("connect", (event) => {
  // Add event.device to the UI.
});
```

Alternativ können Sie die `USB.onconnect`-Ereignishandler-Eigenschaft verwenden, um einen Handler für das `connect`-Ereignis zu etablieren:

```js
navigator.usb.onconnect = (event) => {
  // Add event.device to the UI.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
