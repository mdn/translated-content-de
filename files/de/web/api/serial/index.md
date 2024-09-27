---
title: Serial
slug: Web/API/Serial
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das `Serial`-Interface der [Web Serial API](/de/docs/Web/API/Web_Serial_API) bietet Attribute und Methoden zum Finden und Verbinden von seriellen Ports von einer Webseite aus.

{{InheritanceDiagram}}

## Instanzmethoden

- [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) auflöst, die das vom Benutzer gewählte Gerät darstellt, oder abgelehnt wird, wenn kein Gerät ausgewählt wurde.

    Diese Methode muss mit einer Benutzeraktivierung aufgerufen werden.

- [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort) Objekten auflöst, die serielle Ports darstellen, die mit dem Host verbunden sind und auf die der Ursprung Zugriff hat.

## Ereignisse

Die folgenden Ereignisse sind für `Serial` über Ereignis-Bubbling von [`SerialPort`](/de/docs/Web/API/SerialPort) verfügbar:

- `SerialPort` [`connect`](/de/docs/Web/API/SerialPort/connect_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Port mit dem Gerät verbunden wurde.
- `SerialPort` [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Port vom Gerät getrennt wurde.

## Beispiele

Das folgende Beispiel zeigt, wie eine Webseite nach verfügbaren Ports suchen und dem Benutzer erlauben kann, ihr Zugriff auf zusätzliche Ports zu gewähren.

Beim Laden werden Ereignis-Listener für die [`connect`](/de/docs/Web/API/SerialPort/connect_event) und [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) Ereignisse hinzugefügt, damit die Seite reagieren kann, wenn ein Gerät mit dem System verbunden oder davon getrennt wird. Anschließend wird die Methode [`getPorts()`](/de/docs/Web/API/Serial/getPorts) aufgerufen, um zu sehen, welche Ports verbunden sind, auf die die Seite bereits Zugriff hat.

Falls die Seite keinen Zugriff auf verbundene Ports hat, muss sie warten, bis sie eine Benutzeraktivierung erhält, um fortzufahren. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Handler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Vendor-ID übergeben, um die dem Benutzer angezeigte Geräteliste auf USB-Geräte eines bestimmten Herstellers zu beschränken.

```js
navigator.serial.addEventListener("connect", (e) => {
  // Connect to `e.target` or add it to a list of available ports.
});

navigator.serial.addEventListener("disconnect", (e) => {
  // Remove `e.target` from the list of available ports.
});

navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});

button.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  navigator.serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      // Connect to `port` or add it to the list of available ports.
    })
    .catch((e) => {
      // The user didn't select a port.
    });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
