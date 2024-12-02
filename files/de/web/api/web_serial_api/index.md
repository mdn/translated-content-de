---
title: Web Serial API
slug: Web/API/Web_Serial_API
l10n:
  sourceCommit: 0e2c698518ac4aaf54975093a139e764cff62670
---

{{DefaultAPISidebar("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Web Serial API** bietet eine Möglichkeit für Websites, von seriellen Geräten zu lesen und auf diese zu schreiben. Diese Geräte können über einen seriellen Anschluss verbunden sein oder USB- oder Bluetooth-Geräte sein, die einen seriellen Anschluss emulieren.

## Konzepte und Nutzung

Die Web Serial API ist eine von mehreren APIs, die es Websites ermöglichen, mit Peripheriegeräten zu kommunizieren, die mit dem Computer eines Nutzers verbunden sind. Sie ermöglicht die Verbindung zu Geräten, die vom Betriebssystem erforderlich sind, um über die serielle API zu kommunizieren, im Gegensatz zu USB, das über die [WebUSB API](/de/docs/Web/API/WebUSB_API) zugänglich ist, oder Eingabegeräte, die über die [WebHID API](/de/docs/Web/API/WebHID_API) zugänglich sind.

Beispiele für serielle Geräte sind 3D-Drucker und Mikrocontroller wie das [BBC micro:bit board](https://microbit.org/).

## Schnittstellen

- [`Serial`](/de/docs/Web/API/Serial) {{Experimental_Inline}}
  - : Bietet Attribute und Methoden zum Auffinden und Verbinden von seriellen Anschlüssen von einer Webseite.
- [`SerialPort`](/de/docs/Web/API/SerialPort) {{Experimental_Inline}}
  - : Ermöglicht den Zugriff auf einen seriellen Anschluss auf dem Host-Gerät.

## Erweiterungen zu anderen Schnittstellen

- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die Web Serial API darstellt, um die Steuerung von seriellen Anschlüssen zu ermöglichen.
- [`WorkerNavigator.serial`](/de/docs/Web/API/WorkerNavigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die Web Serial API darstellt, um die Steuerung von seriellen Anschlüssen zu ermöglichen.

## HTTP-Header

- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/serial','serial')}} Direktive
  - : Bestimmt, ob das aktuelle Dokument die Web Serial API verwenden darf, um mit seriellen Geräten zu kommunizieren, entweder direkt verbunden über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

## Beispiele

Die folgenden Beispiele demonstrieren einige der Funktionen, die von der Web Serial API bereitgestellt werden.

### Verfügbare Anschlüsse überprüfen

Das folgende Beispiel zeigt, wie man nach verfügbaren Anschlüssen sucht und dem Nutzer ermöglicht, die Erlaubnis für den Zugriff auf zusätzliche Anschlüsse zu erteilen.

Die `connect` und `disconnect` Ereignisse ermöglichen es Websites, zu reagieren, wenn ein Gerät mit dem System verbunden oder getrennt wird. Die Methode [`getPorts()`](/de/docs/Web/API/Serial/getPorts) wird dann aufgerufen, um zu sehen, welche angeschlossenen Anschlüsse die Seite bereits zugreifen kann.

Wenn die Seite keinen Zugang zu angeschlossenen Anschlüssen hat, muss sie warten, bis sie über eine Benutzeraktivierung fortfahren kann. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Hersteller-ID übergeben, um die dem Nutzer angezeigten Geräte auf eine bestimmte Herstellermarke von USB-Geräten zu begrenzen.

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

### Daten von einem Anschluss lesen

Das folgende Beispiel zeigt, wie man Daten von einem Anschluss liest. Die äußere Schleife behandelt nicht fatale Fehler, indem immer wieder ein neuer Leser erstellt wird, bis ein fataler Fehler auftritt und [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable) `null` wird.

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

- [Von und zu einem seriellen Anschluss lesen und schreiben](https://developer.chrome.com/docs/capabilities/serial)
- [Erste Schritte mit der Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
