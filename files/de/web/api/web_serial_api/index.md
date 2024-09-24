---
title: Web-Serien-Schnittstelle
slug: Web/API/Web_Serial_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **Web-Serien-Schnittstelle** bietet eine Möglichkeit für Websites, von und zu seriellen Geräten zu lesen und zu schreiben. Diese Geräte können über einen seriellen Anschluss verbunden sein oder USB- oder Bluetooth-Geräte sein, die einen seriellen Port emulieren.

## Konzepte und Verwendung

Die Web-Serien-Schnittstelle ist eine von mehreren APIs, die es Websites ermöglichen, mit Peripheriegeräten zu kommunizieren, die mit dem Computer des Benutzers verbunden sind. Sie ermöglicht die Verbindung zu Geräten, die vom Betriebssystem erforderlich sind, um über die serielle API zu kommunizieren, im Gegensatz zu USB, das über die [WebUSB-Schnittstelle](/de/docs/Web/API/WebUSB_API) zugänglich ist, oder Eingabegeräten, die über die [WebHID-Schnittstelle](/de/docs/Web/API/WebHID_API) zugänglich sind.

Beispiele für serielle Geräte sind 3D-Drucker und Mikrocontroller wie das [BBC micro:bit board](https://microbit.org/).

## Schnittstellen

- {{domxref("Serial")}} {{Experimental_Inline}}
  - : Bietet Attribute und Methoden zum Finden und Verbinden mit seriellen Anschlüssen von einer Webseite aus.
- {{domxref("SerialPort")}} {{Experimental_Inline}}
  - : Bietet Zugriff auf einen seriellen Anschluss auf dem Hostgerät.

## Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.serial")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("Serial")}}-Objekt zurück, das den Einstiegspunkt in die Web-Serien-Schnittstelle darstellt, um die Steuerung serieller Anschlüsse zu ermöglichen.
- {{domxref("WorkerNavigator.serial")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("Serial")}}-Objekt zurück, das den Einstiegspunkt in die Web-Serien-Schnittstelle darstellt, um die Steuerung serieller Anschlüsse zu ermöglichen.

## Beispiele

Die folgenden Beispiele demonstrieren einige der Funktionalitäten, die von der Web-Serien-Schnittstelle bereitgestellt werden.

### Überprüfen auf verfügbare Anschlüsse

Das folgende Beispiel zeigt, wie man auf verfügbare Anschlüsse überprüft und dem Benutzer ermöglicht, die Erlaubnis zum Zugriff auf zusätzliche Anschlüsse zu erteilen.

Die Ereignisse `connect` und `disconnect` ermöglichen es Websites, zu reagieren, wenn ein Gerät angeschlossen oder vom System getrennt wird. Die Methode {{domxref("Serial.getPorts()","getPorts()")}} wird dann aufgerufen, um die angeschlossenen Anschlüsse zu sehen, auf die die Website bereits Zugriff hat.

Wenn die Website keinen Zugriff auf angeschlossene Anschlüsse hat, muss sie warten, bis sie eine Benutzeraktivierung erhält, um fortzufahren. In diesem Beispiel verwenden wir einen {{domxref("Element.click_event", "click")}}-Ereignis-Handler auf einem Button für diese Aufgabe. Ein Filter wird an {{domxref("Serial.requestPort()","requestPort()")}} mit einer USB-Hersteller-ID übergeben, um die angezeigte Gerätemenge auf USB-Geräte eines bestimmten Herstellers zu beschränken.

```js
navigator.serial.addEventListener("connect", (e) => {
  // Mit `e.target` verbinden oder zur Liste der verfügbaren Anschlüsse hinzufügen.
});

navigator.serial.addEventListener("disconnect", (e) => {
  // `e.target` aus der Liste der verfügbaren Anschlüsse entfernen.
});

navigator.serial.getPorts().then((ports) => {
  // Liste der verfügbaren Anschlüsse bei Seitenaufruf mit `ports` initialisieren.
});

button.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  navigator.serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      // Mit `port` verbinden oder zur Liste der verfügbaren Anschlüsse hinzufügen.
    })
    .catch((e) => {
      // Der Benutzer hat keinen Anschluss ausgewählt.
    });
});
```

### Lesen von Daten von einem Anschluss

Das folgende Beispiel zeigt, wie man Daten von einem Anschluss liest. Die äußere Schleife behandelt nicht-kritische Fehler und erstellt einen neuen Leser, bis ein kritischer Fehler auftritt und {{domxref("SerialPort.readable")}} `null` wird.

```js
while (port.readable) {
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // |reader| wurde abgebrochen.
        break;
      }
      // Machen Sie etwas mit |value|...
    }
  } catch (error) {
    // Fehlerbehandlung bei |error|...
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

- [Lesen von und Schreiben in einen seriellen Anschluss](https://developer.chrome.com/docs/capabilities/serial)
- [Erste Schritte mit der Web-Serien-Schnittstelle](https://codelabs.developers.google.com/codelabs/web-serial#0)
