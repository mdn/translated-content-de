---
title: Web Serial API
slug: Web/API/Web_Serial_API
l10n:
  sourceCommit: 4e4a3ff34969a282c700e7c2179eb04b41564d7a
---

{{DefaultAPISidebar("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Web Serial API** bietet eine Möglichkeit für Websites, von seriellen Geräten zu lesen und darauf zu schreiben. Diese Geräte können über einen seriellen Anschluss verbunden sein oder USB- oder Bluetooth-Geräte sein, die einen seriellen Port emulieren.

## Konzepte und Verwendung

Die Web Serial API ermöglicht die Verbindung zu Geräten, die über ein serielles Protokoll kommunizieren. Dazu gehören USB- und Bluetooth-Geräte, die über USB oder Bluetooth verbunden sind, aber einen virtuellen seriellen Port dem Betriebssystem zur Verfügung stellen (über USB CDC-ACM oder Bluetooth SPP).

Beachten Sie, dass diese sich unterscheiden von Geräten, die über die [WebUSB API](/de/docs/Web/API/WebUSB_API) angesprochen werden — die rohen Zugriff auf USB-Geräte ermöglicht, die nicht von einem OS-Treiber beansprucht werden — oder Eingabegeräten, die die USB HID-Klasse verwenden und über die [WebHID API](/de/docs/Web/API/WebHID_API) zugänglich sind.

Beispiele für serielle Geräte sind 3D-Drucker, ESP32-Geräte und Mikrocontroller wie das [BBC micro:bit board](https://microbit.org/).

## Schnittstellen

- [`Serial`](/de/docs/Web/API/Serial) {{Experimental_Inline}}
  - : Bietet Attribute und Methoden zum Finden und Anschließen von seriellen Anschlüssen von einer Webseite aus.
- [`SerialPort`](/de/docs/Web/API/SerialPort) {{Experimental_Inline}}
  - : Bietet Zugriff auf einen seriellen Anschluss auf dem Host-Gerät.

## Erweiterungen zu anderen Schnittstellen

- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt des Hauptthreads in die Web Serial API darstellt.
- [`WorkerNavigator.serial`](/de/docs/Web/API/WorkerNavigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt des Arbeitsthreads in die Web Serial API darstellt.

## HTTP-Header

- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/serial','serial')}} Direktive
  - : Kontrolliert, ob das aktuelle Dokument die Web Serial API verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Port verbunden sind oder über USB- oder Bluetooth-Geräte, die einen seriellen Port emulieren.

## Beispiele

Die folgenden Beispiele demonstrieren einige der Funktionalitäten, die von der Web Serial API bereitgestellt werden.

### Verfügbare Ports prüfen

Das folgende Beispiel zeigt, wie man verfügbare Ports prüft und dem Benutzer ermöglicht, die Berechtigung zur Nutzung zusätzlicher Ports zu erteilen.

Die `connect`- und `disconnect`-Ereignisse erlauben es Websites, zu reagieren, wenn ein Gerät an das System angeschlossen oder davon getrennt wird. Die Methode [`getPorts()`](/de/docs/Web/API/Serial/getPorts) wird dann aufgerufen, um verbundene Ports anzuzeigen, auf die die Website bereits Zugriff hat.

Wenn die Website auf keinen der angeschlossenen Ports zugreifen kann, muss sie warten, bis sie über eine Benutzeraktivierung verfügt, um fortzufahren. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Hersteller-ID übergeben, um die Menge der dem Benutzer angezeigten Geräte auf nur solche USB-Geräte eines bestimmten Herstellers zu beschränken.

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

Das folgende Beispiel zeigt, wie Daten von einem Port gelesen werden. Die äußere Schleife behandelt nicht-fatale Fehler, indem sie einen neuen Leser erstellt, bis ein fataler Fehler auftritt und [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable) `null` wird.

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

- [Lesen und Schreiben an einem seriellen Port](https://developer.chrome.com/docs/capabilities/serial)
- [Erste Schritte mit der Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
