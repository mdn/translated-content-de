---
title: USBConnectionEvent
slug: Web/API/USBConnectionEvent
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`USBConnectionEvent`**-Schnittstelle der [WebUSB API](/de/docs/Web/API/WebUSB_API) ist der Ereignistyp, der an `USB` [`connect`](/de/docs/Web/API/USB/connect_event) und [`disconnect`](/de/docs/Web/API/USB/disconnect_event)-Ereignisse übergeben wird, wenn der Benutzeragent erkennt, dass ein neues USB-Gerät angeschlossen oder entfernt wurde.

{{InheritanceDiagram}}

## Konstruktor

- [`USBConnectionEvent()`](/de/docs/Web/API/USBConnectionEvent/USBConnectionEvent) {{Experimental_Inline}}
  - : Gibt ein `USBConnectionEvent`-Objekt zurück.

## Instanz-Eigenschaften

- [`USBConnectionEvent.device`](/de/docs/Web/API/USBConnectionEvent/device) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`USBDevice`](/de/docs/Web/API/USBDevice)-Objekt zurück, das das aktuelle Gerät darstellt.

## Beispiele

Im folgenden Beispiel wird das Abhören von Connect- und Disconnect-Ereignissen verwendet, um Geräte zur Benutzeroberfläche einer Anwendung hinzuzufügen und zu entfernen.

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
