---
title: Serial
slug: Web/API/Serial
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das `Serial`-Interface der [Web Serial API](/de/docs/Web/API/Web_Serial_API) bietet Attribute und Methoden zum Auffinden und Verbinden mit seriellen Ports von einer Webseite aus.

{{InheritanceDiagram}}

## Instanzmethoden

- [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, die das vom Benutzer gewählte Gerät darstellt. Diese Methode muss über eine {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen werden.

- [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekten aufgelöst wird, die serielle Ports repräsentieren, die mit dem Host verbunden sind und auf die der Ursprung zugreifen darf.

## Ereignisse

Die folgenden Ereignisse sind `Serial` durch Ereignisweiterleitung von [`SerialPort`](/de/docs/Web/API/SerialPort) verfügbar:

- `SerialPort` [`connect`](/de/docs/Web/API/SerialPort/connect_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Port mit dem Gerät verbunden wurde.
- `SerialPort` [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Port vom Gerät getrennt wurde.

## Beispiele

Das folgende Beispiel zeigt, wie eine Website nach verfügbaren Ports suchen und dem Benutzer erlauben kann, ihr Zugriff auf zusätzliche Ports zu gewähren.

Beim Laden werden Ereignislistener für die [`connect`](/de/docs/Web/API/SerialPort/connect_event) und [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) Ereignisse hinzugefügt, damit die Website reagiert, wenn ein Gerät mit dem System verbunden oder davon getrennt wird. Die Methode [`getPorts()`](/de/docs/Web/API/Serial/getPorts) wird dann aufgerufen, um zu sehen, welche Ports verbunden sind, auf die die Website bereits Zugriff hat.

Wenn die Website keinen Zugriff auf verbundene Ports hat, muss sie warten, bis sie eine Benutzeraktivierung erhält, um fortzufahren. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Handler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Hersteller-ID übergeben, um die angezeigte Geräteliste auf nur USB-Geräte eines bestimmten Herstellers zu beschränken.

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
