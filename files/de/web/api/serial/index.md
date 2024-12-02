---
title: Serial
slug: Web/API/Serial
l10n:
  sourceCommit: 0e2c698518ac4aaf54975093a139e764cff62670
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das `Serial`-Interface der [Web Serial API](/de/docs/Web/API/Web_Serial_API) bietet Attribute und Methoden zum Finden und Verbinden mit seriellen Anschlüssen von einer Webseite aus.

{{InheritanceDiagram}}

## Instanzmethoden

- [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, die das vom Benutzer gewählte Gerät darstellt. Diese Methode muss über eine {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen werden.

- [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekten aufgelöst wird, die serielle Anschlüsse darstellen, die mit dem Host verbunden sind und auf die der Ursprung zugreifen darf.

## Ereignisse

Die folgenden Ereignisse stehen `Serial` über Ereignis-Bubbling von [`SerialPort`](/de/docs/Web/API/SerialPort) zur Verfügung:

- `SerialPort` [`connect`](/de/docs/Web/API/SerialPort/connect_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Anschluss mit dem Gerät verbunden wurde.
- `SerialPort` [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Anschluss vom Gerät getrennt wurde.

## Beispiele

Das folgende Beispiel zeigt, wie eine Webseite verfügbare Anschlüsse überprüfen und dem Benutzer die Erlaubnis erteilen lassen kann, auf zusätzliche Anschlüsse zuzugreifen.

Beim Laden der Seite werden Ereignis-Listener für die [`connect`](/de/docs/Web/API/SerialPort/connect_event)- und [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)-Ereignisse hinzugefügt, damit die Webseite reagieren kann, wenn ein Gerät mit dem System verbunden oder davon getrennt wird. Die [`getPorts()`](/de/docs/Web/API/Serial/getPorts)-Methode wird dann aufgerufen, um festzustellen, welche Anschlüsse verbunden sind, auf die die Webseite bereits Zugriff hat.

Wenn die Webseite keinen Zugriff auf verbundene Anschlüsse hat, muss sie warten, bis sie eine Benutzeraktivierung hat, um fortzufahren. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignis-Handler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Vendor-ID übergeben, um die Menge der Geräte, die dem Benutzer angezeigt werden, auf nur USB-Geräte eines bestimmten Herstellers zu beschränken.

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
