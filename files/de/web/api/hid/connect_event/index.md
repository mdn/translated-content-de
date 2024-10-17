---
title: "HID: connect-Ereignis"
short-title: connect
slug: Web/API/HID/connect_event
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Das **`connect`**-Ereignis des [`HID`](/de/docs/Web/API/HID)-Interfaces tritt ein, wenn der Benutzeragent eine Verbindung zu einem HID-Gerät herstellt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Property.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HIDConnectionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`device`](/de/docs/Web/API/HIDConnectionEvent/device) {{ReadOnlyInline}}
  - : Das [`HIDDevice`](/de/docs/Web/API/HIDDevice), für welches das Ereignis ausgelöst wird.

## Beispiele

Im folgenden Beispiel wird ein Ereignis-Listener registriert, um auf die Verbindung eines Gerätes zu lauschen. Der Name des Geräts wird dann mit der Konsole unter Verwendung von [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) ausgegeben.

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID connected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
