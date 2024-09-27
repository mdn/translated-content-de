---
title: "SerialPort: connect-Ereignis"
short-title: connect
slug: Web/API/SerialPort/connect_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`connect`**-Ereignis der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle wird ausgelöst, wenn ein Port mit dem Gerät verbunden wurde. Dieses Ereignis wird nur für Ports ausgelöst, die mit entfernbaren Geräten wie solchen, die über USB verbunden sind, assoziiert sind.

Dieses Ereignis wird zur Instanz von [`Serial`](/de/docs/Web/API/Serial) weitergeleitet, die diese Schnittstelle zurückgegeben hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Bubbling

Dieses Ereignis wird an [`Serial`](/de/docs/Web/API/Serial) weitergeleitet. Die Eigenschaft `event.target` bezieht sich auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das weitergeleitet wird.

Für weitere Informationen siehe [Ereignis-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

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

### Lauschen auf neu verbundene Ports

Das `connect`-Ereignis wird an das [`Serial`](/de/docs/Web/API/Serial)-Objekt weitergeleitet, wo Sie auf neu verbundene Ports lauschen können.

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

- [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) Ereignis
