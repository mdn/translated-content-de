---
title: "HID: connect Ereignis"
short-title: connect
slug: Web/API/HID/connect_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Das **`connect`**-Ereignis der [`HID`](/de/docs/Web/API/HID) Schnittstelle wird ausgelöst, wenn der Benutzeragent eine Verbindung zu einem HID-Gerät herstellt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandlungs-Eigenschaft fest.

```js-nolint
addEventListener("connect", (event) => { })

onconnect = (event) => { }
```

## Ereignistyp

Ein [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HIDConnectionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind auch die Eigenschaften der Mutter-Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`device`](/de/docs/Web/API/HIDConnectionEvent/device) {{ReadOnlyInline}}
  - : Das [`HIDDevice`](/de/docs/Web/API/HIDDevice), für das das Ereignis ausgelöst wird.

## Beispiele

Im folgenden Beispiel wird ein Ereignislistener registriert, um auf die Verbindung eines Geräts zu lauschen. Der Name des Geräts wird dann mit [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) in der Konsole ausgegeben.

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID connected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
