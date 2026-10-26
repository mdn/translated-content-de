---
title: "SerialPort: connect-Ereignis"
short-title: connect
slug: Web/API/SerialPort/connect_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`connect`**-Ereignis der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle wird ausgelöst, wenn sich der Port mit dem Gerät verbindet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("connect", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onconnect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Genauer gesagt wird das `connect`-Ereignis ausgelöst, wenn der Port **logisch mit dem Gerät verbunden** wird.
Dies geschieht, nachdem ein Benutzer einer Website nach einem Aufruf von [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) die Berechtigung erteilt hat, auf den Port zuzugreifen, an den das Gerät angeschlossen ist:

- Bei einem kabelgebundenen seriellen Port geschieht dies, wenn der Port physisch mit dem Gerät verbunden wird, beispielsweise über USB.
- Bei einem drahtlosen seriellen Port (beispielsweise Bluetooth RFCOMM) geschieht dies, wenn der Port eine oder mehrere aktive Verbindungen zum Gerät herstellt (beispielsweise über Bluetooth-L2CAP-Kanäle).

### Ereignis-Bubbling

Dieses Ereignis wird an die [`Serial`](/de/docs/Web/API/Serial)-Instanz weitergegeben, die diese Schnittstelle zurückgegeben hat.
Die Eigenschaft `event.target` verweist auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, von dem das Ereignis weitergegeben wird.

Weitere Informationen finden Sie unter [Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Beispiele

### Benachrichtigung, wenn sich ein bestimmter Port verbindet

Die Methode [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) gibt ein {{jsxref("Promise")}} zurück, das mit einem vom Benutzer ausgewählten [`SerialPort`](/de/docs/Web/API/SerialPort) erfüllt wird.

```js
// Prompt user to choose a serial port
const port = await navigator.serial.requestPort();

port.addEventListener("connect", (event) => {
  // notify that the chosen port is connected
});
```

### Auf neu verbundene Ports reagieren

Das `connect`-Ereignis wird an das [`Serial`](/de/docs/Web/API/Serial)-Objekt weitergegeben. Dort können Sie auf die Verbindung beliebiger neuer Ports reagieren.

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
