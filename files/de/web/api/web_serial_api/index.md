---
title: Web Serial API
slug: Web/API/Web_Serial_API
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{DefaultAPISidebar("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Web Serial API** bietet eine Möglichkeit für Websites, von und zu seriellen Geräten zu lesen und zu schreiben. Diese Geräte können über eine serielle Schnittstelle verbunden sein oder es können USB- oder Bluetooth-Geräte sein, die eine serielle Schnittstelle emulieren.

## Konzepte und Verwendung

Die Web Serial API ist eine von mehreren APIs, die Websites ermöglichen, mit Peripheriegeräten zu kommunizieren, die mit einem Computer des Benutzers verbunden sind. Sie bietet die Möglichkeit, zu Geräten eine Verbindung herzustellen, bei denen das Betriebssystem für die Kommunikation die serielle API benötigt, im Gegensatz zu USB-Geräten, die über die [WebUSB API](/de/docs/Web/API/WebUSB_API) zugänglich sind, oder Eingabegeräten, die über die [WebHID API](/de/docs/Web/API/WebHID_API) zugänglich sind.

Beispiele für serielle Geräte sind 3D-Drucker und Mikrocontroller wie das [BBC micro:bit board](https://microbit.org/).

## Schnittstellen

- [`Serial`](/de/docs/Web/API/Serial) {{Experimental_Inline}}
  - : Bietet Attribute und Methoden, um serielle Ports von einer Webseite aus zu finden und zu verbinden.
- [`SerialPort`](/de/docs/Web/API/SerialPort) {{Experimental_Inline}}
  - : Bietet Zugriff auf einen seriellen Anschluss des Hostgeräts.

## Erweiterungen zu anderen Schnittstellen

- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die Web Serial API darstellt, um die Steuerung von seriellen Ports zu ermöglichen.
- [`WorkerNavigator.serial`](/de/docs/Web/API/WorkerNavigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die Web Serial API darstellt, um die Steuerung von seriellen Ports zu ermöglichen.

## HTTP-Header

- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/serial','serial')}} Direktive
  - : Kontrolliert, ob das aktuelle Dokument die Web Serial API verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte verbunden sind, die eine serielle Schnittstelle emulieren.

## Beispiele

Die folgenden Beispiele demonstrieren einige der Funktionen, die von der Web Serial API bereitgestellt werden.

### Überprüfen auf verfügbare Ports

Das folgende Beispiel zeigt, wie verfügbare Ports überprüft werden und dem Benutzer erlaubt wird, die Berechtigung für den Zugriff auf zusätzliche Ports zu erteilen.

Die `connect` und `disconnect` Ereignisse erlauben es Websites, zu reagieren, wenn ein Gerät mit dem System verbunden oder davon getrennt wird. Die Methode [`getPorts()`](/de/docs/Web/API/Serial/getPorts) wird dann aufgerufen, um verbundene Ports zu sehen, auf die die Website bereits Zugriff hat.

Wenn die Website auf keine verbundenen Ports zugreifen kann, muss sie warten, bis sie eine Benutzeraktivierung erhält, um fortzufahren. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Hersteller-ID übergeben, um die Menge der dem Benutzer angezeigten Geräte auf nur USB-Geräte eines bestimmten Herstellers zu begrenzen.

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

### Daten von einem Port lesen

Das folgende Beispiel zeigt, wie Daten von einem Port gelesen werden. Die äußere Schleife behandelt nicht-fatale Fehler und erstellt einen neuen Leser, bis ein fataler Fehler auftritt und [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable) zu `null` wird.

```js
while (port.readable) {
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // |reader| has been canceled.
        break;
      }
      // Do something with |value|...
    }
  } catch (error) {
    // Handle |error|...
  } finally {
    reader.releaseLock();
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lesen von und Schreiben auf einen seriellen Port](https://developer.chrome.com/docs/capabilities/serial)
- [Erste Schritte mit der Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
