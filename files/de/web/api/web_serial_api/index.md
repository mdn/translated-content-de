---
title: Web Serial API
slug: Web/API/Web_Serial_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Web Serial API** ermöglicht es Websites, von seriellen Geräten zu lesen und auf sie zu schreiben. Diese Geräte können über einen seriellen Anschluss verbunden sein oder USB- oder Bluetooth-Geräte sein, die einen seriellen Anschluss emulieren.

## Konzepte und Verwendung

Die Web Serial API ist eine von mehreren APIs, die es Websites ermöglichen, mit Peripheriegeräten zu kommunizieren, die mit dem Computer eines Benutzers verbunden sind. Sie bietet die Möglichkeit, sich mit Geräten zu verbinden, die vom Betriebssystem erfordern, über die serielle API zu kommunizieren, im Gegensatz zu USB, auf das über die [WebUSB API](/de/docs/Web/API/WebUSB_API) zugegriffen werden kann, oder Eingabegeräten, auf die über die [WebHID API](/de/docs/Web/API/WebHID_API) zugegriffen werden kann.

Beispiele für serielle Geräte sind 3D-Drucker und Mikrocontroller wie das [BBC micro:bit board](https://microbit.org/).

## Schnittstellen

- [`Serial`](/de/docs/Web/API/Serial) {{Experimental_Inline}}
  - : Bietet Attribute und Methoden, um serielle Ports von einer Webseite aus zu suchen und zu verbinden.
- [`SerialPort`](/de/docs/Web/API/SerialPort) {{Experimental_Inline}}
  - : Bietet Zugriff auf einen seriellen Port auf dem Hostgerät.

## Erweiterungen zu anderen Schnittstellen

- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die Web Serial API darstellt, um die Steuerung von seriellen Ports zu ermöglichen.
- [`WorkerNavigator.serial`](/de/docs/Web/API/WorkerNavigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial)-Objekt zurück, das den Einstiegspunkt in die Web Serial API darstellt, um die Steuerung von seriellen Ports zu ermöglichen.

## Beispiele

Die folgenden Beispiele demonstrieren einige der Funktionen, die von der Web Serial API bereitgestellt werden.

### Verfügbare Ports prüfen

Das folgende Beispiel zeigt, wie man verfügbare Ports prüft und dem Benutzer erlaubt, die Berechtigung zum Zugriff auf zusätzliche Ports zu erteilen.

Die `connect` und `disconnect` Ereignisse erlauben es Websites, zu reagieren, wenn ein Gerät mit dem System verbunden oder davon getrennt wird. Die [`getPorts()`](/de/docs/Web/API/Serial/getPorts)-Methode wird dann aufgerufen, um die Ports zu sehen, zu denen die Website bereits Zugang hat.

Wenn die Website keinen Zugriff auf verbundene Ports hat, muss sie warten, bis sie eine Benutzeraktivierung erhält, um fortzufahren. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Hersteller-ID übergeben, um die dem Benutzer angezeigten Geräte auf USB-Geräte eines bestimmten Herstellers zu beschränken.

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

Das folgende Beispiel zeigt, wie man Daten von einem Port liest. Die äußere Schleife behandelt nicht fatale Fehler, indem sie einen neuen Leser erstellt, bis ein fataler Fehler auftritt und [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable) zu `null` wird.

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
