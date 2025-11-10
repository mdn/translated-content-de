---
title: "SerialPort: connect-Event"
short-title: connect
slug: Web/API/SerialPort/connect_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`connect`**-Event des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces wird ausgelöst, wenn der Port mit dem Gerät verbunden wird.

## Beschreibung

Genauer gesagt wird der `connect`-Event ausgelöst, wenn der Port nach der Gewährung der Benutzerberechtigung für eine Website, den Port nach einem Aufruf von [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) zuzugreifen, **logisch verbunden** ist:

- Bei einem kabelgebundenen seriellen Port erfolgt dies, wenn der Port physisch mit dem Gerät verbunden ist, zum Beispiel über USB.
- Bei einem drahtlosen seriellen Port (zum Beispiel Bluetooth RFCOMM) erfolgt dies, wenn der Port eine oder mehrere aktive Verbindungen zum Gerät herstellt (zum Beispiel über Bluetooth L2CAP-Kanäle).

### Bubbling

Dieser Event propagiert sich zur Instanz von [`Serial`](/de/docs/Web/API/Serial), die dieses Interface zurückgegeben hat. Die Eigenschaft `event.target` bezieht sich auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das nach oben propagiert.

Für weitere Informationen siehe [Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Syntax

Verwenden Sie den Event-Namen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("connect", (event) => { })

onconnect = (event) => { }
```

## Event-Typ

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Benachrichtigung, wenn ein bestimmter Port verbunden wird

Die Methode [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) gibt ein {{jsxref("Promise")}} zurück, das mit einem vom Benutzer ausgewählten [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird.

```js
// Prompt user to choose a serial port
const port = await navigator.serial.requestPort();

port.addEventListener("connect", (event) => {
  // notify that the chosen port is connected
});
```

### Lauschen auf neu verbundene Ports

Der `connect`-Event propagiert sich zum [`Serial`](/de/docs/Web/API/Serial)-Objekt, bei dem Sie auf alle neu verbundenen Ports lauschen können.

```js
navigator.serial.addEventListener("connect", (event) => {
  // notify that a new port is available
  // use `event.target` to refer to the newly-added port
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)-Event
