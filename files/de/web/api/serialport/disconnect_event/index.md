---
title: "SerialPort: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/SerialPort/disconnect_event
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`disconnect`**-Ereignis der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle wird ausgelöst, wenn die Verbindung des Ports zum Gerät getrennt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("disconnect", (event) => { })

ondisconnect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Das `disconnect`-Ereignis wird ausgelöst, wenn ein zuvor [logisch verbundener](/de/docs/Web/API/SerialPort/connect_event#description) Port zum Gerät nicht mehr verbunden ist.

### Bubbling

Dieses Ereignis steigt bis zur [`Serial`](/de/docs/Web/API/Serial)-Instanz auf, die diese Schnittstelle zurückgegeben hat.
Die `event.target`-Eigenschaft bezieht sich auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das im Bubble-Vorgang involviert ist.

Für weitere Informationen siehe [Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Beispiele

### Benachrichtigen, wenn ein bestimmter Port getrennt wird

Hier wird der Ereignis-Listener auf einem bestimmten [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt installiert.

```js
port.addEventListener("disconnect", (event) => {
  // notify that the port has become unavailable
});
```

### Abhören von Ports, die nicht mehr verfügbar sind

Das `disconnect`-Ereignis steigt bis zum [`Serial`](/de/docs/Web/API/Serial)-Objekt auf, wo Sie jedes Port abhören können, das nicht mehr verfügbar ist.

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
