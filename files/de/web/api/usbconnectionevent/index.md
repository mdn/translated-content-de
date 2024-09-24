---
title: USBConnectionEvent
slug: Web/API/USBConnectionEvent
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das **`USBConnectionEvent`**-Interface der {{domxref('WebUSB API','','',' ')}} ist der Ereignistyp, der an `USB`-{{domxref("USB.connect_event", "connect")}}- und {{domxref("USB.disconnect_event", "disconnect")}}-Ereignisse übergeben wird, wenn der User Agent erkennt, dass ein neues USB-Gerät verbunden oder getrennt wurde.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("USBConnectionEvent.USBConnectionEvent", "USBConnectionEvent()")}} {{Experimental_Inline}}
  - : Gibt ein `USBConnectionEvent`-Objekt zurück.

## Instanz-Eigenschaften

- {{domxref("USBConnectionEvent.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("USBDevice")}}-Objekt zurück, das das aktuelle Gerät repräsentiert.

## Beispiele

Im folgenden Beispiel wird das Lauschen auf Verbindungs- und Trennungsereignisse verwendet, um Geräte zur Benutzeroberfläche einer Anwendung hinzuzufügen oder daraus zu entfernen.

```js
navigator.usb.addEventListener("connect", (event) => {
  // Add event.device to the UI.
});

navigator.usb.addEventListener("disconnect", (event) => {
  // Remove event.device from the UI.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
