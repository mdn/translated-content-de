---
title: HIDConnectionEvent
slug: Web/API/HIDConnectionEvent
l10n:
  sourceCommit: 367b6392294e801f028be1657c5957fe11e6f6f7
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`HIDConnectionEvent`**-Schnittstelle der [WebHID API](/de/docs/Web/API/WebHID_API) repräsentiert HID-Verbindungsereignisse und ist der Ereignistyp, der an [`connect`](/de/docs/Web/API/HID/connect_event)- und [`disconnect`](/de/docs/Web/API/HID/disconnect_event)-Ereignishandler übergeben wird, wenn sich der Verbindungsstatus eines Geräts ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`HIDConnectionEvent()`](/de/docs/Web/API/HIDConnectionEvent/HIDConnectionEvent) {{Experimental_Inline}}
  - : Gibt ein neues `HIDConnectionEvent`-Objekt zurück. Typischerweise wird dieser Konstruktor nicht verwendet, da Ereignisse erstellt werden, wenn sich der Verbindungsstatus eines Geräts ändert.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`HIDConnectionEvent.device`](/de/docs/Web/API/HIDConnectionEvent/device) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Instanz zurück, die das mit dem Verbindungsereignis verbundene Gerät repräsentiert.

## Beispiele

Das folgende Beispiel registriert Ereignis-Listener für `connect`- und `disconnect`-Ereignisse und druckt dann den [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) in die Konsole.

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID connected: ${device.productName}`);
});

navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
