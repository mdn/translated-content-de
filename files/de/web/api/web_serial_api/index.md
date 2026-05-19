---
title: Web Serial API
slug: Web/API/Web_Serial_API
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{DefaultAPISidebar("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Web Serial API** bietet eine Möglichkeit für Websites, von seriellen Geräten zu lesen und zu schreiben. Diese Geräte können über einen seriellen Port verbunden sein oder USB- oder Bluetooth-Geräte sein, die einen seriellen Port emulieren.

## Konzepte und Verwendung

Die Web Serial API ermöglicht die Verbindung zu Geräten, die über ein serielles Protokoll kommunizieren. Dies umfasst USB- und Bluetooth-Geräte, die über USB oder Bluetooth verbunden sind, aber dem Betriebssystem einen virtuellen seriellen Port zur Verfügung stellen (über USB CDC-ACM oder Bluetooth SPP).

Beachten Sie, dass diese sich von Geräten unterscheiden, auf die über die [WebUSB API](/de/docs/Web/API/WebUSB_API) zugegriffen wird, — die einen direkten Zugriff auf USB-Geräte bietet, die nicht von einem Betriebssystemtreiber beansprucht wurden — oder Eingabegeräten, die die USB HID-Klasse verwenden und über die [WebHID API](/de/docs/Web/API/WebHID_API) zugänglich sind.

Beispiele für serielle Geräte sind 3D-Drucker, ESP32-Geräte und Mikrocontroller wie das [BBC micro:bit Board](https://microbit.org/).

## Schnittstellen

- [`Serial`](/de/docs/Web/API/Serial) {{Experimental_Inline}}
  - : Bietet Attribute und Methoden zum Finden und Verbinden mit seriellen Ports von einer Webseite aus.
- [`SerialPort`](/de/docs/Web/API/SerialPort) {{Experimental_Inline}}
  - : Bietet Zugriff auf einen seriellen Port auf dem Host-Gerät.

## Erweiterungen zu anderen Schnittstellen

- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial) Objekt zurück, das den Haupteinstiegspunkt in die Web Serial API darstellt.
- [`WorkerNavigator.serial`](/de/docs/Web/API/WorkerNavigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial) Objekt zurück, das den Arbeitereinstiegspunkt in die Web Serial API darstellt.

## HTTP-Header

- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/serial','serial')}} Direktive
  - : Bestimmt, ob das aktuelle Dokument die Web Serial API verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Port oder über USB- oder Bluetooth-Geräte, die einen seriellen Port emulieren, verbunden sind.

## Beispiele

Die folgenden Beispiele zeigen einige der Funktionalitäten, die von der Web Serial API bereitgestellt werden.

### Überprüfen der verfügbaren Ports

Das folgende Beispiel zeigt, wie man nach verfügbaren Ports sucht und dem Benutzer erlaubt, die Berechtigung zum Zugriff auf zusätzliche Ports zu erteilen.

Die `connect` und `disconnect` Events ermöglichen es Websites, zu reagieren, wenn ein Gerät mit dem System verbunden oder davon getrennt wird. Die Methode [`getPorts()`](/de/docs/Web/API/Serial/getPorts) wird dann aufgerufen, um die verbundenen Ports zu sehen, auf die die Website bereits Zugriff hat.

Wenn die Website keinen Zugriff auf verbundene Ports hat, muss sie warten, bis eine Nutzeraktivierung erfolgt, um fortzufahren. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event) Event-Handler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Hersteller-ID übergeben, um die dem Benutzer angezeigte Menge an Geräten auf nur die USB-Geräte eines bestimmten Herstellers zu beschränken.

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

Das folgende Beispiel zeigt, wie man Daten von einem Port liest. Die äußere Schleife behandelt nicht-fatale Fehler, indem sie einen neuen Leser erstellt, bis ein fataler Fehler auftritt und [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable) `null` wird.

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

- [Von und zu einem seriellen Port lesen und schreiben](https://developer.chrome.com/docs/capabilities/serial)
- [Erste Schritte mit der Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
