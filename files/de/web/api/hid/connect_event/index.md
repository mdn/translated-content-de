---
title: "HID: connect-Ereignis"
short-title: connect
slug: Web/API/HID/connect_event
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Das **`connect`**-Ereignis der [`HID`](/de/docs/Web/API/HID)-Schnittstelle tritt auf, wenn der Benutzeragent eine Verbindung zu einem HID-Gerät herstellt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HIDConnectionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften aus der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`device`](/de/docs/Web/API/HIDConnectionEvent/device) {{ReadOnlyInline}}
  - : Das [`HIDDevice`](/de/docs/Web/API/HIDDevice), für das das Ereignis ausgelöst wird.

## Beispiele

Im folgenden Beispiel wird ein Ereignis-Listener registriert, um die Verbindung eines Geräts zu überwachen. Der Name des Geräts wird dann mithilfe von [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) in die Konsole ausgegeben.

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID connected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
