---
title: "SerialPort: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/SerialPort/disconnect_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`disconnect`**-Ereignis des {{domxref("SerialPort")}}-Interfaces tritt auf, wenn die Verbindung des Ports zum Gerät unterbrochen wurde. Dieses Ereignis wird nur für Ports ausgelöst, die mit entfernbaren Geräten wie solchen verbunden sind, die über USB angeschlossen sind.

Dieses Ereignis wird an die Instanz von {{domxref("Serial")}} weitergeleitet, die dieses Interface zurückgegeben hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Bubble-Verhalten

Dieses Ereignis wird an {{domxref("Serial")}} weitergeleitet. Die `event.target`-Eigenschaft bezieht sich auf das {{domxref('SerialPort')}}-Objekt, das hochgebubbelt wird.

Für weitere Informationen siehe [Bubble-Verhalten von Ereignissen](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Beispiele

### Benachrichtigung, wenn ein spezifischer Port getrennt wird

Hier wird der Ereignis-Listener auf einem spezifischen {{domxref("SerialPort")}}-Objekt installiert.

```js
port.addEventListener("disconnect", (event) => {
  // Benachrichtigung, dass der Port nicht mehr verfügbar ist
});
```

### Hören auf alle Ports, die nicht mehr verfügbar sind

Das `disconnect`-Ereignis wird an das {{domxref("Serial")}}-Objekt weitergeleitet, wo Sie auf alle Ports hören können, die nicht mehr verfügbar sind.

```js
navigator.serial.addEventListener("disconnect", (event) => {
  // Benachrichtigung, dass ein Port nicht mehr verfügbar ist
  // Verwenden Sie `event.target`, um auf den nicht verfügbaren Port zu verweisen
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SerialPort.connect_event", "connect")}}-Ereignis
