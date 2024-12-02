---
title: "SerialPort: connect Ereignis"
short-title: connect
slug: Web/API/SerialPort/connect_event
l10n:
  sourceCommit: 861d367a39f380ac4e6a01ae215fc1beb3e27c31
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`connect`**-Ereignis des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces wird ausgelöst, wenn der Anschluss eine Verbindung mit dem Gerät herstellt.

## Beschreibung

Genauer gesagt wird das `connect`-Ereignis ausgelöst, wenn der Anschluss nach der Gewährung der Berechtigung durch den Benutzer für eine Website, Zugriff auf den Anschluss zu erhalten, **logisch mit** dem Gerät verbunden wird, nach einem Aufruf von [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort):

- Bei einem kabelgebundenen seriellen Anschluss tritt dies ein, wenn der Anschluss physisch mit dem Gerät verbunden ist, z. B. über USB.
- Bei einem drahtlosen seriellen Anschluss (z. B. Bluetooth RFCOMM) tritt dies ein, wenn der Anschluss eine oder mehrere aktive Verbindungen mit dem Gerät herstellt (z. B. über Bluetooth L2CAP-Kanäle).

### Bubbling

Dieses Ereignis verbreitet sich bis zur Instanz von [`Serial`](/de/docs/Web/API/Serial), die dieses Interface zurückgegeben hat. Die Eigenschaft `event.target` bezieht sich auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das weitergegeben wird.

Für weitere Informationen siehe [Event-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Benachrichtigung, wenn ein bestimmter Anschluss verbunden wird

Die Methode [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) gibt einen {{jsxref("Promise")}} zurück, der mit einem vom Benutzer ausgewählten [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird.

```js
// Prompt user to choose a serial port
const port = await navigator.serial.requestPort();

port.addEventListener("connect", (event) => {
  // notify that the chosen port is connected
});
```

### Lauschen auf neu verbundene Anschlüsse

Das `connect`-Ereignis verbreitet sich bis zum [`Serial`](/de/docs/Web/API/Serial)-Objekt, wo Sie auf neu verbundene Anschlüsse lauschen können.

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
