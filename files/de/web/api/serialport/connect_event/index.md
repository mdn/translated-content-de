---
title: "SerialPort: connect-Ereignis"
short-title: connect
slug: Web/API/SerialPort/connect_event
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`connect`**-Ereignis des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces wird ausgelöst, wenn der Port mit dem Gerät verbunden wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("connect", (event) => { })

onconnect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Genauer gesagt wird das `connect`-Ereignis ausgelöst, wenn der Port **logisch verbunden** mit dem Gerät wird.
Dies geschieht, nachdem ein Benutzer einer Website die Erlaubnis erteilt hat, auf den Port zuzugreifen, an den das Gerät angeschlossen ist, und erfolgt nach einem Aufruf von [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort):

- Im Falle eines kabelgebundenen seriellen Ports tritt dies auf, wenn der Port physisch mit dem Gerät verbunden ist, zum Beispiel über USB.
- Im Falle eines drahtlosen seriellen Ports (zum Beispiel Bluetooth RFCOMM) tritt dies auf, wenn der Port eine oder mehrere aktive Verbindungen zum Gerät herstellt (zum Beispiel über Bluetooth L2CAP-Kanäle).

### Bubbling

Dieses Ereignis steigt bis zur [`Serial`](/de/docs/Web/API/Serial)-Instanz auf, die dieses Interface zurückgegeben hat.
Die Eigenschaft `event.target` bezieht sich auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das aufsteigt.

Für weitere Informationen siehe [Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Beispiele

### Benachrichtigung, wenn ein bestimmter Port verbunden wird

Die Methode [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) gibt ein {{jsxref("Promise")}} zurück, das mit einem vom Benutzer gewählten [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird.

```js
// Prompt user to choose a serial port
const port = await navigator.serial.requestPort();

port.addEventListener("connect", (event) => {
  // notify that the chosen port is connected
});
```

### Abhören von neu verbundenen Ports

Das `connect`-Ereignis steigt zum [`Serial`](/de/docs/Web/API/Serial)-Objekt auf, wo Sie nach neu verbundenen Ports lauschen können.

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
