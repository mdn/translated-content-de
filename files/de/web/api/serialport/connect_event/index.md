---
title: "SerialPort: connect-Ereignis"
short-title: connect
slug: Web/API/SerialPort/connect_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`connect`**-Ereignis der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle wird ausgelöst, wenn ein Port eine Verbindung zum Gerät hergestellt hat. Dieses Ereignis wird nur für Ports ausgelöst, die mit entfernbaren Geräten wie solchen, die über USB angeschlossen sind, verbunden sind.

Dieses Ereignis blubbert zur Instanz von [`Serial`](/de/docs/Web/API/Serial), die diese Schnittstelle zurückgegeben hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Blubbern

Dieses Ereignis blubbert zu [`Serial`](/de/docs/Web/API/Serial). Die `event.target`-Eigenschaft bezieht sich auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das nach oben blubbert.

Für weitere Informationen siehe [Ereignis-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Beispiele

### Benachrichtigung, wenn ein spezifischer Port verbunden wird

Die [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)-Methode gibt ein {{jsxref("Promise")}} zurück, das auf ein vom Benutzer ausgewähltes [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird.

```js
// Prompt user to choose a serial port
const port = await navigator.serial.requestPort();

port.addEventListener("connect", (event) => {
  // notify that the chosen port is connected
});
```

### Abhören neuer verbundener Ports

Das `connect`-Ereignis blubbert zum [`Serial`](/de/docs/Web/API/Serial)-Objekt, wo Sie auf alle neu verbundenen Ports hören können.

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
