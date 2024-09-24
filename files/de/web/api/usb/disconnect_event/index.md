---
title: "USB: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/USB/disconnect_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`disconnect`**-Ereignis der {{DOMxRef("USB")}}-Schnittstelle wird ausgelöst, wenn ein verbundenes Gerät getrennt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Ereignistyp

Ein {{domxref("USBConnectionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("USBConnectionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("USBConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : Das {{domxref("USBDevice")}}, für das das Ereignis ausgelöst wird.

## Beispiele

Sobald ein USB-Gerät getrennt wird, sollten Sie möglicherweise die Benutzeroberfläche aktualisieren.

```js
navigator.usb.addEventListener("disconnect", (event) => {
  // Entfernen Sie event.device von der Benutzeroberfläche.
});
```

Alternativ können Sie die `USB.ondisconnect`-Ereignishandler-Eigenschaft verwenden, um einen Handler für das `disconnect`-Ereignis zu erstellen:

```js
navigator.usb.ondisconnect = (event) => {
  // Entfernen Sie event.device von der Benutzeroberfläche.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
