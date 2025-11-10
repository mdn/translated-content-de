---
title: "HID: disconnect event"
short-title: disconnect
slug: Web/API/HID/disconnect_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Das **`disconnect`**-Ereignis der [`HID`](/de/docs/Web/API/HID)-Schnittstelle wird ausgelöst, wenn der User-Agent ein HID-Gerät trennt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("disconnect", (event) => { })

ondisconnect = (event) => { }
```

## Ereignistyp

Ein [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HIDConnectionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`device`](/de/docs/Web/API/HIDConnectionEvent/device) {{ReadOnlyInline}}
  - : Das [`HIDDevice`](/de/docs/Web/API/HIDDevice), für das das Ereignis ausgelöst wird.

## Beispiele

Im folgenden Beispiel wird ein Ereignis-Listener registriert, um auf die Trennung eines Geräts zu reagieren. Der Name des Geräts wird dann mit [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) auf der Konsole ausgegeben.

```js
navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
