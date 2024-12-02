---
title: "SerialPort: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/SerialPort/disconnect_event
l10n:
  sourceCommit: 861d367a39f380ac4e6a01ae215fc1beb3e27c31
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`disconnect`**-Ereignis der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle wird ausgelöst, wenn die Verbindung des Ports vom Gerät getrennt wird.

## Beschreibung

Genauer gesagt wird das `disconnect`-Ereignis ausgelöst, wenn ein Port, der zuvor [logisch verbunden](/de/docs/Web/API/SerialPort/connect_event#description) war, nachdem ein Benutzer einer Website die Erlaubnis erteilt hat, darauf zuzugreifen (nach einem Aufruf von [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)), nicht mehr verbunden ist.

### Bubbling

Dieses Ereignis wird an die Instanz von [`Serial`](/de/docs/Web/API/Serial) weitergereicht, die diese Schnittstelle zurückgegeben hat. Die `event.target`-Eigenschaft bezieht sich auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das weitergereicht wird.

Weitere Informationen finden Sie unter [Event-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Benachrichtigung, wenn ein bestimmter Port getrennt wird

Hier wird der Ereignislistener auf einem spezifischen [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt installiert.

```js
port.addEventListener("disconnect", (event) => {
  // notify that the port has become unavailable
});
```

### Lauschen auf alle Ports, die nicht mehr verfügbar sind

Das `disconnect`-Ereignis wird an das [`Serial`](/de/docs/Web/API/Serial)-Objekt weitergeleitet, wo Sie auf alle Ports hören können, die nicht mehr verfügbar sind.

```js
navigator.serial.addEventListener("disconnect", (event) => {
  // notify that a port has become unavailable
  // use `event.target` to refer to the unavailable port
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`connect`](/de/docs/Web/API/SerialPort/connect_event)-Ereignis
