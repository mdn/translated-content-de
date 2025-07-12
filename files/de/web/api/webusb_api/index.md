---
title: WebUSB API
slug: Web/API/WebUSB_API
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{DefaultAPISidebar("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}{{AvailableInWorkers}}

Die **WebUSB API** bietet eine Möglichkeit, nicht standardisierte Universal Serial Bus (USB) kompatible Geräte-Dienste für das Web zugänglich zu machen, um USB sicherer und benutzerfreundlicher zu gestalten.

## Konzepte und Nutzung

USB ist der De-facto-Standard für kabelgebundene Peripheriegeräte. Die USB-Geräte, die Sie mit Ihrem Computer verbinden, werden in der Regel in verschiedene Gerätegruppen eingeteilt – wie Tastaturen, Mäuse, Videogeräte und so weiter. Diese werden mit dem Klassen-Treiber des Betriebssystems unterstützt. Viele davon sind auch über die [WebHID API](/de/docs/Web/API/WebHID_API) im Web zugänglich.

Zusätzlich zu diesen standardisierten Geräten gibt es eine Vielzahl von Geräten, die in keine Klasse passen. Diese benötigen benutzerdefinierte Treiber und sind aufgrund des erforderlichen nativen Codes nicht im Web zugänglich. Die Installation eines solchen Geräts erfordert häufig die Suche nach Treibern auf der Website des Herstellers, und wenn Sie das Gerät auf einem anderen Computer verwenden möchten, muss der Prozess wiederholt werden.

WebUSB bietet eine Möglichkeit, diese nicht standardisierten USB-Geräte-Dienste im Web verfügbar zu machen. Dies bedeutet, dass Hardware-Hersteller eine Möglichkeit bereitstellen können, ihre Geräte vom Web aus zugänglich zu machen, ohne ihre eigene API bereitstellen zu müssen.

Beim Anschließen eines neuen WebUSB-kompatiblen Geräts zeigt der Browser eine Benachrichtigung mit einem Link zur Website des Herstellers an. Beim Besuch der Website fordert der Browser die Erlaubnis an, sich mit dem Gerät zu verbinden, und dann ist das Gerät einsatzbereit. Es müssen keine Treiber heruntergeladen und installiert werden.

## Schnittstellen

- [`USB`](/de/docs/Web/API/USB)
  - : Bietet Attribute und Methoden zum Auffinden und Herstellen von Verbindungen zu USB-Geräten von einer Webseite aus.
- [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent)
  - : Der Ereignistyp, der an `USB` [`connect`](/de/docs/Web/API/USB/connect_event) oder [`disconnect`](/de/docs/Web/API/USB/disconnect_event) Ereignisse übergeben wird, wenn der Benutzeragent ein neues USB-Gerät erkennt, das verbunden oder vom Host getrennt wurde.
- [`USBDevice`](/de/docs/Web/API/USBDevice)
  - : Bietet Zugriff auf Metadaten zu einem gekoppelten USB-Gerät und Methoden zur Steuerung desselben.
- [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult)
  - : Repräsentiert das Ergebnis der Anforderung einer Datenübertragung vom USB-Gerät zum USB-Host.
- [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult)
  - : Repräsentiert das Ergebnis der Anforderung einer Datenübertragung vom USB-Host zum USB-Gerät.
- [`USBIsochronousInTransferPacket`](/de/docs/Web/API/USBIsochronousInTransferPacket)
  - : Repräsentiert den Status eines einzelnen Pakets aus einer Anforderung zur Datenübertragung vom USB-Gerät zum USB-Host über einen isochronen Endpunkt.
- [`USBIsochronousInTransferResult`](/de/docs/Web/API/USBIsochronousInTransferResult)
  - : Repräsentiert das Ergebnis der Anforderung einer Datenübertragung vom USB-Gerät zum USB-Host.
- [`USBIsochronousOutTransferPacket`](/de/docs/Web/API/USBIsochronousOutTransferPacket)
  - : Repräsentiert den Status eines einzelnen Pakets aus einer Anforderung zur Datenübertragung vom USB-Host zum USB-Gerät über einen isochronen Endpunkt.
- [`USBIsochronousOutTransferResult`](/de/docs/Web/API/USBIsochronousOutTransferResult)
  - : Repräsentiert das Ergebnis der Anforderung einer Datenübertragung vom USB-Host zum USB-Gerät.
- [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)
  - : Bietet Informationen über eine bestimmte Konfiguration eines USB-Geräts und die Schnittstellen, die es unterstützt.
- [`USBInterface`](/de/docs/Web/API/USBInterface)
  - : Bietet Informationen über eine von dem USB-Gerät bereitgestellte Schnittstelle.
- [`USBAlternateInterface`](/de/docs/Web/API/USBAlternateInterface)
  - : Bietet Informationen über eine bestimmte Konfiguration einer von dem USB-Gerät bereitgestellten Schnittstelle.
- [`USBEndPoint`](/de/docs/Web/API/USBEndpoint)
  - : Bietet Informationen über einen von dem USB-Gerät bereitgestellten Endpunkt.

## Beispiele

### Zugriff auf ein verbundenes Gerät

Das folgende Beispiel zeigt, wie Sie auf ein verbundenes Arduino-Gerät zugreifen, das `USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice) verwendet und eine `vendorId` von `0x2341` hat.

```js
navigator.usb
  .requestDevice({ filters: [{ vendorId: 0x2341 }] })
  .then((device) => {
    console.log(device.productName); // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  })
  .catch((error) => {
    console.error(error);
  });
```

### Alle verbundenen Geräte finden

Sie können alle verbundenen Geräte mit [`USB.getDevices()`](/de/docs/Web/API/USB/getDevices) finden. Im folgenden Beispiel werden bei verbundenem Arduino-Gerät der Produkt- und Herstellername in die Konsole ausgegeben.

```js
navigator.usb.getDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device.productName); // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zugriff auf USB-Geräte im Web](https://developer.chrome.com/docs/capabilities/usb)
