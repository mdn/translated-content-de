---
title: HIDConnectionEvent
slug: Web/API/HIDConnectionEvent
l10n:
  sourceCommit: 367b6392294e801f028be1657c5957fe11e6f6f7
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Das **`HIDConnectionEvent`** Interface der [WebHID API](/de/docs/Web/API/WebHID_API) repräsentiert HID-Verbindungsereignisse und ist der Ereignistyp, der an {{domxref("HID/connect_event", "connect")}} und {{domxref("HID/disconnect_event", "disconnect")}} Ereignis-Handler übergeben wird, wenn sich der Verbindungsstatus eines Geräts ändert.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("HIDConnectionEvent.HIDConnectionEvent", "HIDConnectionEvent()")}} {{Experimental_Inline}}
  - : Gibt ein neues `HIDConnectionEvent`-Objekt zurück. Typischerweise wird dieser Konstruktor nicht verwendet, da Ereignisse erstellt werden, wenn sich der Verbindungsstatus eines Geräts ändert.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von {{domxref("Event")}}._

- {{domxref("HIDConnectionEvent.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die {{domxref("HIDDevice")}} Instanz zurück, die das mit dem Verbindungsereignis verknüpfte Gerät repräsentiert.

## Beispiele

Im folgenden Beispiel werden Ereignis-Listener für `connect` und `disconnect` Ereignisse registriert, und dann wird der {{domxref("HIDDevice.productName")}} in die Konsole ausgegeben.

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
