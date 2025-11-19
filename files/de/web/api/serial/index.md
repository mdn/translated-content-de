---
title: Serial
slug: Web/API/Serial
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das `Serial`-Interface der [Web Serial API](/de/docs/Web/API/Web_Serial_API) bietet Attribute und Methoden zum Auffinden und Verbinden mit seriellen Ports über eine Webseite.

{{InheritanceDiagram}}

## Instanzmethoden

- [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, die das vom Benutzer ausgewählte Gerät darstellt. Diese Methode muss über eine {{Glossary("Transient_activation", "flüchtige Aktivierung")}} aufgerufen werden.

- [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekten aufgelöst wird, die serielle Ports darstellen, die mit dem Host verbunden sind, auf die der Ursprung Zugriff hat.

## Ereignisse

Die folgenden Ereignisse sind für `Serial` über Event-Bubbling von [`SerialPort`](/de/docs/Web/API/SerialPort) verfügbar:

- `SerialPort` [`connect`](/de/docs/Web/API/SerialPort/connect_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Port mit dem Gerät verbunden wurde.
- `SerialPort` [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Port von dem Gerät getrennt wurde.

## Beispiele

Das folgende Beispiel zeigt, wie eine Seite verfügbare Ports prüfen und dem Benutzer die Erlaubnis geben kann, den Zugriff auf zusätzliche Ports zu gewähren.

Beim Laden der Seite werden Event-Listener für die [`connect`](/de/docs/Web/API/SerialPort/connect_event)- und [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)-Ereignisse hinzugefügt, damit die Seite darauf reagieren kann, wenn ein Gerät mit dem System verbunden oder davon getrennt wird. Die Methode [`getPorts()`](/de/docs/Web/API/Serial/getPorts) wird dann aufgerufen, um zu sehen, welche Ports angeschlossen sind, auf die die Seite bereits Zugriff hat.

Wenn die Seite auf keine angeschlossenen Ports Zugriff hat, muss sie warten, bis sie über eine Benutzeraktivierung fortfahren kann. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event)-Event-Handler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Hersteller-ID übergeben, um die Anzahl der Geräte, die dem Benutzer angezeigt werden, nur auf USB-Geräte eines bestimmten Herstellers zu beschränken.

```js
navigator.serial.addEventListener("connect", (e) => {
  // Connect to `e.target` or add it to a list of available ports.
});

navigator.serial.addEventListener("disconnect", (e) => {
  // Remove `e.target` from the list of available ports.
});

navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});

button.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  navigator.serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      // Connect to `port` or add it to the list of available ports.
    })
    .catch((e) => {
      // The user didn't select a port.
    });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
