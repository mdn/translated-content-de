---
title: "SerialPort: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/SerialPort/disconnect_event
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`disconnect`**-Ereignis der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle wird ausgelöst, wenn die Verbindung des Ports zum Gerät getrennt wird.

## Beschreibung

Genauer gesagt wird das `disconnect`-Ereignis ausgelöst, wenn ein Port, der zuvor [logisch verbunden](/de/docs/Web/API/SerialPort/connect_event#description) war, nachdem ein Benutzer einer Website die Erlaubnis gegeben hat, auf ihn zuzugreifen (nach einem Aufruf von [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)), nicht mehr verbunden ist.

### Bubbling

Dieses Ereignis läuft zu der Instanz von [`Serial`](/de/docs/Web/API/Serial), die diese Schnittstelle zurückgegeben hat. Die `event.target`-Eigenschaft bezieht sich auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das nach oben bubblt.

Weitere Informationen finden Sie unter [Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Benachrichtigung, wenn ein bestimmter Port getrennt wird

Hier wird der Ereignis-Listener auf einem bestimmten [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt installiert.

```js
port.addEventListener("disconnect", (event) => {
  // notify that the port has become unavailable
});
```

### Beobachten von Ports, die nicht mehr verfügbar sind

Das `disconnect`-Ereignis blubbert bis zum [`Serial`](/de/docs/Web/API/Serial)-Objekt, wo Sie auf Ports hören können, die nicht mehr verfügbar sind.

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
