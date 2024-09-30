---
title: Web Serial API
slug: Web/API/Web_Serial_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Web Serial API** bietet eine Möglichkeit für Websites, von seriellen Geräten zu lesen und an diese zu schreiben. Diese Geräte können über einen seriellen Anschluss verbunden sein oder USB- oder Bluetooth-Geräte sein, die einen seriellen Anschluss emulieren.

## Konzepte und Verwendung

Die Web Serial API ist eine von mehreren APIs, die es Websites ermöglichen, mit Peripheriegeräten zu kommunizieren, die mit dem Computer eines Benutzers verbunden sind. Sie bietet die Möglichkeit, Geräte anzuschließen, die vom Betriebssystem erfordern, über die serielle API zu kommunizieren, im Gegensatz zu USB, das über die [WebUSB API](/de/docs/Web/API/WebUSB_API) zugänglich ist, oder Eingabegeräten, die über die [WebHID API](/de/docs/Web/API/WebHID_API) zugänglich sind.

Beispiele für serielle Geräte sind 3D-Drucker und Mikrocontroller wie das [BBC micro:bit Board](https://microbit.org/).

## Schnittstellen

- [`Serial`](/de/docs/Web/API/Serial) {{Experimental_Inline}}
  - : Bietet Attribute und Methoden zum Auffinden und Verbinden mit seriellen Anschlüssen von einer Webseite aus.
- [`SerialPort`](/de/docs/Web/API/SerialPort) {{Experimental_Inline}}
  - : Ermöglicht den Zugriff auf einen seriellen Anschluss auf dem Hostgerät.

## Erweiterungen zu anderen Schnittstellen

- [`Navigator.serial`](/de/docs/Web/API/Navigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial) Objekt zurück, das den Einstiegspunkt in die Web Serial API darstellt, um die Kontrolle über serielle Anschlüsse zu ermöglichen.
- [`WorkerNavigator.serial`](/de/docs/Web/API/WorkerNavigator/serial) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Serial`](/de/docs/Web/API/Serial) Objekt zurück, das den Einstiegspunkt in die Web Serial API darstellt, um die Kontrolle über serielle Anschlüsse zu ermöglichen.

## Beispiele

Die folgenden Beispiele zeigen einige der Funktionalitäten, die die Web Serial API bietet.

### Verfügbare Anschlüsse überprüfen

Das folgende Beispiel zeigt, wie verfügbare Anschlüsse überprüft werden können und der Benutzer ermächtigt wird, dem Zugriff auf zusätzliche Anschlüsse zuzustimmen.

Die `connect`- und `disconnect`-Ereignisse ermöglichen es Websites, zu reagieren, wenn ein Gerät mit dem System verbunden oder davon getrennt wird. Die Methode [`getPorts()`](/de/docs/Web/API/Serial/getPorts) wird dann aufgerufen, um verbundene Anschlüsse zu sehen, auf die die Website bereits Zugriff hat.

Wenn die Website auf keine verbundenen Anschlüsse zugreifen kann, muss sie warten, bis sie eine Benutzeraktivierung erhält, um fortzufahren. In diesem Beispiel verwenden wir einen [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Handler auf einem Button für diese Aufgabe. Ein Filter wird an [`requestPort()`](/de/docs/Web/API/Serial/requestPort) mit einer USB-Vendor-ID übergeben, um die dem Benutzer angezeigte Menge an Geräten auf nur die USB-Geräte eines bestimmten Herstellers zu beschränken.

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

Das folgende Beispiel zeigt, wie Daten von einem Anschluss gelesen werden. Die äußere Schleife behandelt nicht fatale Fehler, indem ein neuer Leser erstellt wird, bis ein fataler Fehler auftritt und [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable) `null` wird.

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

- [Von einem seriellen Anschluss lesen und schreiben](https://developer.chrome.com/docs/capabilities/serial)
- [Einstieg in die Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
