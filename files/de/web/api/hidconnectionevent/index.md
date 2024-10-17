---
title: HIDConnectionEvent
slug: Web/API/HIDConnectionEvent
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`HIDConnectionEvent`**-Schnittstelle der [WebHID API](/de/docs/Web/API/WebHID_API) repräsentiert HID-Verbindungsereignisse und ist der Ereignistyp, der an [`connect`](/de/docs/Web/API/HID/connect_event)- und [`disconnect`](/de/docs/Web/API/HID/disconnect_event)-Ereignishandler übergeben wird, wenn sich der Verbindungsstatus eines Geräts ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`HIDConnectionEvent()`](/de/docs/Web/API/HIDConnectionEvent/HIDConnectionEvent) {{Experimental_Inline}}
  - : Gibt ein neues `HIDConnectionEvent`-Objekt zurück. Typischerweise wird dieser Konstruktor nicht verwendet, da Ereignisse erstellt werden, wenn sich der Verbindungsstatus eines Geräts ändert.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`HIDConnectionEvent.device`](/de/docs/Web/API/HIDConnectionEvent/device) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Instanz zurück, die das mit dem Verbindungsereignis verbundene Gerät darstellt.

## Beispiele

Das folgende Beispiel registriert Ereignis-Listener für die Ereignisse `connect` und `disconnect` und gibt dann den [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) in der Konsole aus.

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
