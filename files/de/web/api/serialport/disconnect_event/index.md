---
title: "SerialPort: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/SerialPort/disconnect_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`disconnect`**-Ereignis der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle wird ausgelöst, wenn die Verbindung zum Gerät abbricht.

## Beschreibung

Genauer gesagt wird das `disconnect`-Ereignis ausgelöst, wenn ein Port, der zuvor [logisch verbunden](/de/docs/Web/API/SerialPort/connect_event#description) war, nachdem der Benutzer einer Website die Berechtigung erteilt hat, darauf zuzugreifen (nach einem Aufruf von [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)), nicht mehr verbunden ist.

### Ereignis-Bubbling

Dieses Ereignis steigt zur Instanz von [`Serial`](/de/docs/Web/API/Serial) auf, die diese Schnittstelle zurückgegeben hat. Die `event.target`-Eigenschaft bezieht sich auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das aufsteigt.

Für weitere Informationen siehe [Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("disconnect", (event) => { })

ondisconnect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Benachrichtigung, wenn ein bestimmter Port getrennt wird

Hier wird der Ereignislistener auf einem bestimmten [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt installiert.

```js
port.addEventListener("disconnect", (event) => {
  // notify that the port has become unavailable
});
```

### Zuhören, wenn Ports nicht mehr verfügbar sind

Das `disconnect`-Ereignis steigt zum [`Serial`](/de/docs/Web/API/Serial)-Objekt auf, wo Sie auf alle Ports hören können, die nicht mehr verfügbar sind.

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
