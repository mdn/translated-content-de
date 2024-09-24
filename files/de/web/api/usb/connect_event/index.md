---
title: "USB: connect-Ereignis"
short-title: connect
slug: Web/API/USB/connect_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`connect`**-Ereignis des Interfaces {{DOMxRef("USB")}} wird jedes Mal ausgelöst, wenn ein gekoppeltes Gerät verbunden wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein {{domxref("USBConnectionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("USBConnectionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("USBConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : Das {{domxref("USBDevice")}}, für das das Ereignis ausgelöst wird.

## Beispiele

Sobald ein USB-Gerät angeschlossen ist, möchten Sie vielleicht die Benutzeroberfläche aktualisieren.

```js
navigator.usb.addEventListener("connect", (event) => {
  // Fügen Sie event.device zur Benutzeroberfläche hinzu.
});
```

Alternativ können Sie die `USB.onconnect`-Ereignishandler-Eigenschaft verwenden, um einen Handler für das `connect`-Ereignis festzulegen:

```js
navigator.usb.onconnect = (event) => {
  // Fügen Sie event.device zur Benutzeroberfläche hinzu.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
