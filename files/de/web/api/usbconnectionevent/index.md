---
title: USBConnectionEvent
slug: Web/API/USBConnectionEvent
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das **`USBConnectionEvent`** Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) ist der Ereignistyp, der an `USB`-[`connect`](/de/docs/Web/API/USB/connect_event) und [`disconnect`](/de/docs/Web/API/USB/disconnect_event) Ereignisse übergeben wird, wenn das Benutzerprogramm erkennt, dass ein neues USB-Gerät angeschlossen oder getrennt wurde.

{{InheritanceDiagram}}

## Konstruktor

- [`USBConnectionEvent()`](/de/docs/Web/API/USBConnectionEvent/USBConnectionEvent) {{Experimental_Inline}}
  - : Gibt ein `USBConnectionEvent` Objekt zurück.

## Instanz-Eigenschaften

- [`USBConnectionEvent.device`](/de/docs/Web/API/USBConnectionEvent/device) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`USBDevice`](/de/docs/Web/API/USBDevice) Objekt zurück, das das aktuelle Gerät darstellt.

## Beispiele

Im folgenden Beispiel wird das Lauschen auf `connect`- und `disconnect`-Ereignisse verwendet, um Geräte zur Benutzeroberfläche einer Anwendung hinzuzufügen oder von dieser zu entfernen.

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
