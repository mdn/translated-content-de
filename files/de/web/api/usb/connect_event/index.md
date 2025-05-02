---
title: "USB: connect-Ereignis"
short-title: connect
slug: Web/API/USB/connect_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`connect`**-Ereignis der [`USB`](/de/docs/Web/API/USB)-Schnittstelle wird immer dann ausgelöst, wenn ein gekoppeltes Gerät angeschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("connect", (event) => { })

onconnect = (event) => { }
```

## Ereignistyp

Ein [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("USBConnectionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgelisteten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`device`](/de/docs/Web/API/USBConnectionEvent/device) {{ReadOnlyInline}}
  - : Das [`USBDevice`](/de/docs/Web/API/USBDevice), für das das Ereignis ausgelöst wird.

## Beispiele

Sobald ein USB-Gerät angeschlossen ist, möchten Sie möglicherweise die Benutzeroberfläche aktualisieren.

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
