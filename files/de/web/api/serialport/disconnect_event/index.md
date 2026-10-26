---
title: "SerialPort: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/SerialPort/disconnect_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`disconnect`**-Ereignis der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle wird ausgelöst, wenn die Verbindung zwischen dem Port und dem Gerät getrennt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("disconnect", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondisconnect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Das `disconnect`-Ereignis wird ausgelöst, wenn ein Port, der zuvor [logisch mit dem Gerät verbunden](/de/docs/Web/API/SerialPort/connect_event#description) war, nicht mehr verbunden ist.

### Bubbling

Dieses Ereignis wird an die [`Serial`](/de/docs/Web/API/Serial)-Instanz weitergegeben, die diese Schnittstelle zurückgegeben hat.
Die Eigenschaft `event.target` verweist auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, von dem das Ereignis weitergegeben wird.

Weitere Informationen finden Sie unter [Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Beispiele

### Benachrichtigung, wenn die Verbindung zu einem bestimmten Port getrennt wird

Hier wird der Event-Listener für ein bestimmtes [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt registriert.

```js
port.addEventListener("disconnect", (event) => {
  // notify that the port has become unavailable
});
```

### Erkennen, wenn ein beliebiger Port nicht mehr verfügbar ist

Das `disconnect`-Ereignis wird an das [`Serial`](/de/docs/Web/API/Serial)-Objekt weitergegeben. Dort können Sie erkennen, wenn ein beliebiger Port nicht mehr verfügbar ist.

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
