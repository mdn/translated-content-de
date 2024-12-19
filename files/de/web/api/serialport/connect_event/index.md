---
title: "SerialPort: connect-Ereignis"
short-title: connect
slug: Web/API/SerialPort/connect_event
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`connect`**-Ereignis des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces wird ausgelöst, wenn der Port mit dem Gerät verbunden wird.

## Beschreibung

Genauer gesagt wird das `connect`-Ereignis ausgelöst, wenn der Port **logisch verbunden** mit dem Gerät wird, nachdem ein Benutzer einer Website die Erlaubnis erteilt hat, auf den Port zuzugreifen, nach einem Aufruf von [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort):

- Bei einem kabelgebundenen seriellen Port geschieht dies, wenn der Port physisch mit dem Gerät verbunden ist, zum Beispiel über USB.
- Bei einem drahtlosen seriellen Port (zum Beispiel Bluetooth RFCOMM) geschieht dies, wenn der Port eine oder mehrere aktive Verbindungen zum Gerät herstellt (zum Beispiel über Bluetooth L2CAP-Kanäle).

### Bubbling

Dieses Ereignis steigt bis zur Instanz von [`Serial`](/de/docs/Web/API/Serial) auf, die dieses Interface zurückgab. Die Eigenschaft `event.target` bezieht sich auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das sich aufbläht.

Für weitere Informationen siehe [Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

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

### Lauschen auf alle neu verbundenen Ports

Das `connect`-Ereignis steigt bis zum [`Serial`](/de/docs/Web/API/Serial)-Objekt auf, wo Sie auf alle neu verbundenen Ports lauschen können.

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

- [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event)-Ereignis
