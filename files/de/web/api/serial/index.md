---
title: Serial
slug: Web/API/Serial
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die `Serial`-Schnittstelle der [Web Serial API](/de/docs/Web/API/Web_Serial_API) bietet Attribute und Methoden zum Auffinden und Verbinden mit seriellen Anschlüssen von einer Webseite aus.

{{InheritanceDiagram}}

## Instanzmethoden

- [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, die das vom Benutzer ausgewählte Gerät darstellt, oder abgelehnt wird, wenn kein Gerät ausgewählt wurde.

    Diese Methode muss mit Benutzeraktivierung aufgerufen werden.

- [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`SerialPort`](/de/docs/Web/API/SerialPort)-Objekten aufgelöst wird, die serielle Anschlüsse darstellen, die mit dem Host verbunden sind und auf die der Ursprung zugreifen darf.

## Ereignisse

Die folgenden Ereignisse sind für `Serial` über das Ereignisbubbling von [`SerialPort`](/de/docs/Web/API/SerialPort) verfügbar:

- `SerialPort` [`connect`](/de/docs/Web/API/SerialPort/connect_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Anschluss mit dem Gerät verbunden wurde.
- `SerialPort` [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Anschluss vom Gerät getrennt wurde.

## Beispiele

Das folgende Beispiel zeigt, wie eine Webseite nach verfügbaren Anschlüssen suchen und dem Benutzer die Berechtigung erteilen kann, den Zugriff auf zusätzliche Anschlüsse zu gewähren.

Beim Laden werden Ereignis-Listener für die [`connect`](/de/docs/Web/API/SerialPort/connect_event) und [`disconnect`](/de/docs/Web/API/SerialPort/disconnect_event) Ereignisse hinzugefügt, damit die Webseite reagieren kann, wenn ein Gerät an das System angeschlossen oder davon getrennt wird. Die Methode [`getPorts()`](/de/docs/Web/API/Serial/getPorts) wird dann aufgerufen, um zu sehen, welche Anschlüsse verbunden sind, auf die die Webseite bereits zugreifen kann.

Wenn die Webseite auf keine verbundenen Anschlüsse zugreifen kann, muss sie warten, bis eine Benutzeraktivierung erfolgt. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event) Ereignishandler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Hersteller-ID übergeben, um die Menge der dem Benutzer angezeigten Geräte auf nur USB-Geräte eines bestimmten Herstellers zu beschränken.

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
