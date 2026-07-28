---
title: "USB: connect-Ereignis"
short-title: connect
slug: Web/API/USB/connect_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`connect`**-Ereignis des [`USB`](/de/docs/Web/API/USB)-Interfaces wird ausgelöst, wenn ein gekoppeltes Gerät verbunden wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("connect", (event) => { })

onconnect = (event) => { }
```

## Ereignistyp

Ein [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("USBConnectionEvent")}}

## Beispiele

Sobald ein USB-Gerät verbunden ist, möchten Sie möglicherweise die Benutzeroberfläche aktualisieren.

```js
navigator.usb.addEventListener("connect", (event) => {
  // Add event.device to the UI.
});
```

Alternativ können Sie die `USB.onconnect`-Ereignishandlereigenschaft verwenden, um einen Handler für das `connect`-Ereignis zu etablieren:

```js
navigator.usb.onconnect = (event) => {
  // Add event.device to the UI.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
