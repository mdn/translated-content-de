---
title: "SerialPort: disconnect Event"
short-title: disconnect
slug: Web/API/SerialPort/disconnect_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`disconnect`**-Ereignis der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle wird ausgelöst, wenn der Anschluss vom Gerät getrennt wurde. Dieses Ereignis wird nur für Anschlüsse ausgelöst, die mit entfernbaren Geräten wie über USB verbundene Geräte verbunden sind.

Dieses Ereignis wird an die Instanz von [`Serial`](/de/docs/Web/API/Serial) weitergeleitet, die diese Schnittstelle zurückgegeben hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Bubbling

Dieses Ereignis wird an [`Serial`](/de/docs/Web/API/Serial) weitergeleitet. Die Eigenschaft `event.target` verweist auf das [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt, das weitergegeben wird.

Für weitere Informationen siehe [Ereignisweitergabe](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Beispiele

### Benachrichtigen, wenn ein bestimmter Anschluss getrennt wird

Hier wird der Ereignis-Listener auf ein bestimmtes [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekt installiert.

```js
port.addEventListener("disconnect", (event) => {
  // notify that the port has become unavailable
});
```

### Lauschen auf Anschlüsse, die nicht mehr verfügbar sind

Das `disconnect`-Ereignis wird an das [`Serial`](/de/docs/Web/API/Serial) Objekt weitergeleitet, wo Sie auf Anschlüsse lauschen können, die nicht mehr verfügbar sind.

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
