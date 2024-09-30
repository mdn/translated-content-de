---
title: "HID: disconnect Ereignis"
short-title: disconnect
slug: Web/API/HID/disconnect_event
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Das **`disconnect`** Ereignis der [`HID`](/de/docs/Web/API/HID) Schnittstelle tritt auf, wenn der User-Agent ein HID-Gerät trennt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Ereignistyp

Ein [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HIDConnectionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften von der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`device`](/de/docs/Web/API/HIDConnectionEvent/device) {{ReadOnlyInline}}
  - : Das [`HIDDevice`](/de/docs/Web/API/HIDDevice), für das das Ereignis ausgelöst wird.

## Beispiele

Im folgenden Beispiel wird ein Ereignislistener registriert, um auf die Trennung eines Geräts zu reagieren. Der Name des Geräts wird dann mit [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) auf der Konsole ausgegeben.

```js
navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
