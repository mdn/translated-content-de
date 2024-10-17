---
title: "HID: disconnect event"
short-title: disconnect
slug: Web/API/HID/disconnect_event
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Das **`disconnect`**-Ereignis des [`HID`](/de/docs/Web/API/HID)-Interfaces wird ausgelöst, wenn der Benutzeragent ein HID-Gerät trennt.

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

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`device`](/de/docs/Web/API/HIDConnectionEvent/device) {{ReadOnlyInline}}
  - : Das [`HIDDevice`](/de/docs/Web/API/HIDDevice), für das das Ereignis ausgelöst wird.

## Beispiele

Im folgenden Beispiel wird ein Ereignislistener registriert, um auf die Trennung eines Geräts zu hören. Der Name des Geräts wird anschließend mit [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) in die Konsole geschrieben.

```js
navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
