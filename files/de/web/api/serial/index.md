---
title: Serial
slug: Web/API/Serial
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die `Serial`-Schnittstelle der [Web Serial API](/de/docs/Web/API/Web_Serial_API) bietet Attribute und Methoden zum Finden und Verbinden mit seriellen Ports von einer Webseite aus.

{{InheritanceDiagram}}

## Instanzmethoden

- {{domxref("Serial.requestPort()")}} {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von {{domxref("SerialPort")}} aufgelöst wird, das die vom Benutzer gewählte Gerät repräsentiert, oder abgelehnt wird, wenn kein Gerät ausgewählt wurde.

    Diese Methode muss mit Benutzeraktivierung aufgerufen werden.

- {{domxref("Serial.getPorts()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von {{domxref("SerialPort")}}-Objekten aufgelöst wird, die serielle Ports darstellen, die mit dem Host verbunden sind und auf die der Ursprung Zugriff hat.

## Ereignisse

Die folgenden Ereignisse stehen `Serial` über Ereignis-Bubbling von {{domxref("SerialPort")}} zur Verfügung:

- `SerialPort` {{domxref("SerialPort.connect_event", "connect")}} Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Port mit dem Gerät verbunden wurde.
- `SerialPort` {{domxref("SerialPort.disconnect_event", "disconnect")}} Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn ein Port vom Gerät getrennt wurde.

## Beispiele

Das folgende Beispiel zeigt, wie eine Webseite nach verfügbaren Ports suchen und dem Benutzer die Erlaubnis erteilen kann, auf zusätzliche Ports zuzugreifen.

Beim Laden der Seite werden Ereignis-Listener für die Ereignisse {{domxref("SerialPort.connect_event", "connect")}} und {{domxref("SerialPort.disconnect_event", "disconnect")}} hinzugefügt, damit die Seite reagieren kann, wenn ein Gerät mit dem System verbunden oder davon getrennt wird. Die Methode {{domxref("Serial.getPorts()","getPorts()")}} wird dann aufgerufen, um zu sehen, welche Ports verbunden sind, auf die die Seite bereits Zugriff hat.

Falls die Seite keinen Zugriff auf verbundene Ports hat, muss sie warten, bis eine Benutzeraktivierung erfolgt. In diesem Beispiel verwenden wir einen {{domxref("Element.click_event", "click")}} Ereignis-Handler auf einem Button für diese Aufgabe. Ein Filter wird an {{domxref("Serial.requestPort()","requestPort()")}} mit einer USB-Hersteller-ID übergeben, um die Menge der dem Benutzer angezeigten Geräte auf USB-Geräte eines bestimmten Herstellers zu beschränken.

```js
navigator.serial.addEventListener("connect", (e) => {
  // Verbinden Sie sich mit `e.target` oder fügen Sie es einer Liste verfügbarer Ports hinzu.
});

navigator.serial.addEventListener("disconnect", (e) => {
  // Entfernen Sie `e.target` aus der Liste der verfügbaren Ports.
});

navigator.serial.getPorts().then((ports) => {
  // Initialisieren Sie die Liste der verfügbaren Ports mit `ports` beim Laden der Seite.
});

button.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  navigator.serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      // Verbinden Sie sich mit `port` oder fügen Sie es der Liste der verfügbaren Ports hinzu.
    })
    .catch((e) => {
      // Der Benutzer hat keinen Port ausgewählt.
    });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
