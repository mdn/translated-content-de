---
title: "SerialPort: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/SerialPort/disconnect_event
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`disconnect`**-Ereignis der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle wird ausgelöst, wenn die Verbindung des Ports zum Gerät getrennt wird.

## Beschreibung

Genauer gesagt tritt das `disconnect`-Ereignis auf, wenn ein Port, der zuvor [logisch verbunden](/de/docs/Web/API/SerialPort/connect_event#description) war, nachdem einem Benutzer das Recht eingeräumt wurde, dass eine Website darauf zugreifen darf (nach einem Aufruf von [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)), nicht mehr verbunden ist.

### Bubbling

Dieses Ereignis blubbert bis zur Instanz von [`Serial`](/de/docs/Web/API/Serial), die diese Schnittstelle zurückgegeben hat. Die Eigenschaft `event.target` verweist auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das nach oben blubbert.

Für weitere Informationen siehe [Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("disconnect", (event) => { })

ondisconnect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Benachrichtigung, wenn ein bestimmter Port die Verbindung verliert

Hier wird der Event Listener auf einem bestimmten [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt installiert.

```js
port.addEventListener("disconnect", (event) => {
  // notify that the port has become unavailable
});
```

### Hören auf alle Ports, die nicht mehr verfügbar sind

Das `disconnect`-Ereignis blubbert bis zum [`Serial`](/de/docs/Web/API/Serial)-Objekt, wo Sie auf alle nicht mehr verfügbaren Ports hören können.

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

- [`connect`](/de/docs/Web/API/SerialPort/connect_event) Ereignis
