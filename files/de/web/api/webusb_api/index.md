---
title: WebUSB API
slug: Web/API/WebUSB_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}{{SeeCompatTable}}

Die **WebUSB API** bietet eine Möglichkeit, nicht standardisierte Universal Serial Bus (USB)-kompatible Geräte-Dienste im Web bereitzustellen, um USB sicherer und benutzerfreundlicher zu machen.

## Konzepte und Verwendung

USB ist der De-facto-Standard für kabelgebundene Peripheriegeräte. Die USB-Geräte, die Sie mit Ihrem Computer verbinden, sind typischerweise in eine Reihe von Geräteklassen eingeteilt—wie Tastaturen, Mäuse, Videogeräte und so weiter. Diese werden vom Klassentreiber des Betriebssystems unterstützt. Viele von ihnen sind auch über die [WebHID API](/de/docs/Web/API/WebHID_API) im Web zugänglich.

Zusätzlich zu diesen standardisierten Geräten gibt es eine Vielzahl von Geräten, die in keine Klasse passen. Diese benötigen benutzerdefinierte Treiber und sind aufgrund des erforderlichen nativen Codes für ihre Nutzung vom Web aus nicht zugänglich. Die Installation eines dieser Geräte erfordert oft das Suchen nach Treibern auf der Website eines Herstellers, und wenn Sie das Gerät auf einem anderen Computer verwenden möchten, müssen Sie den Vorgang erneut durchführen.

WebUSB bietet eine Möglichkeit, diese nicht standardisierten USB-Geräte-Dienste dem Web zugänglich zu machen. Das bedeutet, dass Hardwarehersteller die Möglichkeit haben, den Zugriff auf ihre Geräte über das Web bereitzustellen, ohne eine eigene API zur Verfügung stellen zu müssen.

Beim Anschließen eines neuen WebUSB-kompatiblen Geräts zeigt der Browser eine Benachrichtigung mit einem Link zur Herstellerseite an. Wenn Sie die Seite erreichen, fordert der Browser die Erlaubnis zum Verbinden mit dem Gerät an, und danach ist das Gerät einsatzbereit. Es müssen keine Treiber heruntergeladen und installiert werden.

## Schnittstellen

- [`USB`](/de/docs/Web/API/USB)
  - : Bietet Attribute und Methoden zum Auffinden und Verbinden von USB-Geräten von einer Webseite aus.
- [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent)
  - : Der Ereignistyp, der an `USB` [`connect`](/de/docs/Web/API/USB/connect_event) oder [`disconnect`](/de/docs/Web/API/USB/disconnect_event) Ereignisse übergeben wird, wenn die Benutzeragent einen neuen USB-Gerät erkannte, das verbunden oder vom Host getrennt wurde.
- [`USBDevice`](/de/docs/Web/API/USBDevice)
  - : Bietet Zugriff auf Metadaten eines gekoppelten USB-Geräts und Methoden zu dessen Steuerung.
- [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult)
  - : Repräsentiert das Ergebnis einer Anforderung zur Datenübertragung vom USB-Gerät zum USB-Host.
- [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult)
  - : Repräsentiert das Ergebnis einer Anforderung zur Datenübertragung vom USB-Host zum USB-Gerät.
- [`USBIsochronousInTransferPacket`](/de/docs/Web/API/USBIsochronousInTransferPacket)
  - : Repräsentiert den Status eines einzelnen Pakets einer Anforderung zur Datenübertragung vom USB-Gerät zum USB-Host über einen isochronen Endpunkt.
- [`USBIsochronousInTransferResult`](/de/docs/Web/API/USBIsochronousInTransferResult)
  - : Repräsentiert das Ergebnis einer Anforderung zur Datenübertragung vom USB-Gerät zum USB-Host.
- [`USBIsochronousOutTransferPacket`](/de/docs/Web/API/USBIsochronousOutTransferPacket)
  - : Repräsentiert den Status eines einzelnen Pakets einer Anforderung zur Datenübertragung vom USB-Host zum USB-Gerät über einen isochronen Endpunkt.
- [`USBIsochronousOutTransferResult`](/de/docs/Web/API/USBIsochronousOutTransferResult)
  - : Repräsentiert das Ergebnis einer Anforderung zur Datenübertragung vom USB-Host zum USB-Gerät.
- [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)
  - : Bietet Informationen über eine bestimmte Konfiguration eines USB-Geräts und die von ihm unterstützten Schnittstellen.
- [`USBInterface`](/de/docs/Web/API/USBInterface)
  - : Bietet Informationen über eine vom USB-Gerät bereitgestellte Schnittstelle.
- [`USBAlternateInterface`](/de/docs/Web/API/USBAlternateInterface)
  - : Bietet Informationen über eine bestimmte Konfiguration einer vom USB-Gerät bereitgestellten Schnittstelle.
- [`USBEndPoint`](/de/docs/Web/API/USBEndPoint)
  - : Bietet Informationen über einen vom USB-Gerät bereitgestellten Endpunkt.

## Beispiele

### Zugriff auf ein verbundenes Gerät

Das folgende Beispiel demonstriert, wie man auf ein verbundenes Arduino-Gerät mit [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice) zugreift, welches eine `vendorId` von `0x2341` hat.

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

Sie können alle verbundenen Geräte mit [`USB.getDevices()`](/de/docs/Web/API/USB/getDevices) finden. Im folgenden Beispiel wird bei angeschlossenem Arduino-Gerät der Produkt- und Herstellername in der Konsole ausgegeben.

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

## Siehe auch

- [Zugriff auf USB-Geräte im Web](https://developer.chrome.com/docs/capabilities/usb)
