---
title: Serial
slug: Web/API/Serial
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Das `Serial`-Interface der [Web Serial API](/de/docs/Web/API/Web_Serial_API) stellt Attribute und Methoden zur Verfügung, um serielle Ports von einer Webseite zu finden und zu verbinden.

{{InheritanceDiagram}}

## Instanzmethoden

- [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, die das vom Benutzer gewählte Gerät repräsentiert. Diese Methode muss durch {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen werden.

- [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekten aufgelöst wird, die die seriellen Ports repräsentieren, die mit dem Host verbunden sind und auf die der Ursprung Zugriff hat.

## Ereignisse

Die folgenden Ereignisse sind für `Serial` durch Event-Bubbling von [`SerialPort`](/de/docs/Web/API/SerialPort) verfügbar:

- `SerialPort` [`connect`](/de/docs/Web/API/SerialPort/connect_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Port mit dem Gerät verbunden wurde.
- `SerialPort` [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Port vom Gerät getrennt wurde.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie eine Website nach verfügbaren Ports suchen und dem Benutzer die Erlaubnis erteilen kann, zusätzliche Ports zugänglich zu machen.

Beim Laden des Events werden Listener für die [`connect`](/de/docs/Web/API/SerialPort/connect_event)- und [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)-Ereignisse hinzugefügt, sodass die Website reagieren kann, wenn ein Gerät mit dem System verbunden oder davon getrennt wird. Die Methode [`getPorts()`](/de/docs/Web/API/Serial/getPorts) wird dann aufgerufen, um festzustellen, welche Ports verbunden sind, auf die die Website bereits Zugriff hat.

Wenn die Website keinen Zugang zu verbundenen Ports hat, muss sie warten, bis sie eine Benutzeraktivierung erhält, um fortzufahren. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Hersteller-ID übergeben, um die dem Benutzer angezeigten Geräte auf USB-Geräte eines bestimmten Herstellers zu beschränken.

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
