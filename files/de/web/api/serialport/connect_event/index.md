---
title: "SerialPort: connect-Ereignis"
short-title: connect
slug: Web/API/SerialPort/connect_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`connect`**-Ereignis der {{domxref("SerialPort")}}-Schnittstelle wird ausgelöst, wenn ein Port mit dem Gerät verbunden wurde. Dieses Ereignis wird nur für Ports ausgelöst, die mit entfernten Geräten wie denen, die über USB verbunden sind, assoziiert sind.

Dieses Ereignis wird an die Instanz von {{domxref("Serial")}} weitergeleitet, die diese Schnittstelle zurückgegeben hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Bubbling

Dieses Ereignis wird an {{domxref("Serial")}} weitergeleitet. Die `event.target`-Eigenschaft bezieht sich auf das {{domxref('SerialPort')}}-Objekt, das weitergeleitet wird.

Für weitere Informationen siehe [Ereignisweiterleitung](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Beispiele

### Benachrichtigen, wenn ein spezifischer Port verbunden wird

Die {{domxref("Serial.requestPort()")}}-Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("SerialPort")}} aufgelöst wird, das vom Benutzer gewählt wurde.

```js
// Benutzer auffordern, einen seriellen Port auszuwählen
const port = await navigator.serial.requestPort();

port.addEventListener("connect", (event) => {
  // Benachrichtigung, dass der ausgewählte Port verbunden ist
});
```

### Auf neu verbundene Ports hören

Das `connect`-Ereignis wird an das {{domxref("Serial")}}-Objekt weitergeleitet, wo Sie auf neu verbundene Ports hören können.

```js
navigator.serial.addEventListener("connect", (event) => {
  // Benachrichtigung, dass ein neuer Port verfügbar ist
  // Verwenden Sie `event.target`, um auf den neu hinzugefügten Port zu verweisen
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SerialPort.disconnect_event", "disconnect")}}-Ereignis
