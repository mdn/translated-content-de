---
title: WebUSB API
slug: Web/API/WebUSB_API
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{DefaultAPISidebar("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}{{AvailableInWorkers}}

Die **WebUSB API** bietet eine Möglichkeit, nicht-standardisierte Universal Serial Bus (USB)-kompatible Geräte-Dienste im Web verfügbar zu machen, um USB sicherer und benutzerfreundlicher zu gestalten.

## Konzepte und Nutzung

USB ist der De-facto-Standard für kabelgebundene Peripheriegeräte. Die USB-Geräte, die Sie an Ihren Computer anschließen, werden typischerweise in verschiedene Geräteklassen eingeteilt—wie Tastaturen, Mäuse, Videogeräte usw. Diese werden mithilfe des Klassentreibers des Betriebssystems unterstützt. Viele dieser Geräte sind auch über die [WebHID API](/de/docs/Web/API/WebHID_API) im Web zugänglich.

Zusätzlich zu diesen standardisierten Geräten gibt es eine große Anzahl von Geräten, die in keine Klasse passen. Diese benötigen benutzerdefinierte Treiber und sind aufgrund des benötigten nativen Codes nicht über das Web zugänglich. Die Installation eines dieser Geräte erfordert oft die Suche nach Treibern auf der Website eines Herstellers und, wenn Sie das Gerät auf einem anderen Computer verwenden möchten, das erneute Durchlaufen dieses Prozesses.

WebUSB ermöglicht es, dass diese nicht-standardisierten USB-Geräte-Dienste im Web verfügbar gemacht werden. Dies bedeutet, dass Hardwarehersteller eine Möglichkeit anbieten können, mit der ihr Gerät über das Web zugänglich ist, ohne ihre eigene API bereitstellen zu müssen.

Beim Anschließen eines neuen WebUSB-kompatiblen Geräts zeigt der Browser eine Benachrichtigung mit einem Link zur Website des Herstellers an. Beim Besuch der Seite fordert der Browser die Erlaubnis an, eine Verbindung zu dem Gerät herzustellen, und danach ist das Gerät einsatzbereit. Es müssen keine Treiber heruntergeladen und installiert werden.

## Schnittstellen

- [`USB`](/de/docs/Web/API/USB)
  - : Bietet Attribute und Methoden zum Suchen und Verbinden von USB-Geräten von einer Webseite aus.
- [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent)
  - : Der Ereignistyp, der an `USB`-[`connect`](/de/docs/Web/API/USB/connect_event) oder [`disconnect`](/de/docs/Web/API/USB/disconnect_event)-Ereignisse übergeben wird, wenn der User-Agent erkennt, dass ein neues USB-Gerät mit dem Host verbunden oder vom Host getrennt wurde.
- [`USBDevice`](/de/docs/Web/API/USBDevice)
  - : Bietet Zugriff auf Metadaten zu einem verbundenen USB-Gerät und Methoden zu dessen Steuerung.
- [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult)
  - : Repräsentiert das Ergebnis einer Datenübertragung vom USB-Gerät zum USB-Host.
- [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult)
  - : Repräsentiert das Ergebnis einer Datenübertragung vom USB-Host zum USB-Gerät.
- [`USBIsochronousInTransferPacket`](/de/docs/Web/API/USBIsochronousInTransferPacket)
  - : Repräsentiert den Status eines einzelnen Pakets aus einer Anfrage zur Datenübertragung vom USB-Gerät zum USB-Host über einen isochronen Endpunkt.
- [`USBIsochronousInTransferResult`](/de/docs/Web/API/USBIsochronousInTransferResult)
  - : Repräsentiert das Ergebnis einer Anfrage zur Datenübertragung vom USB-Gerät zum USB-Host.
- [`USBIsochronousOutTransferPacket`](/de/docs/Web/API/USBIsochronousOutTransferPacket)
  - : Repräsentiert den Status eines einzelnen Pakets aus einer Anfrage zur Datenübertragung vom USB-Host zum USB-Gerät über einen isochronen Endpunkt.
- [`USBIsochronousOutTransferResult`](/de/docs/Web/API/USBIsochronousOutTransferResult)
  - : Repräsentiert das Ergebnis einer Anfrage zur Datenübertragung vom USB-Host zum USB-Gerät.
- [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)
  - : Bietet Informationen über eine bestimmte Konfiguration eines USB-Geräts und die von ihm unterstützten Schnittstellen.
- [`USBInterface`](/de/docs/Web/API/USBInterface)
  - : Bietet Informationen über eine Schnittstelle, die vom USB-Gerät bereitgestellt wird.
- [`USBAlternateInterface`](/de/docs/Web/API/USBAlternateInterface)
  - : Bietet Informationen über eine bestimmte Konfiguration einer Schnittstelle, die vom USB-Gerät bereitgestellt wird.
- [`USBEndPoint`](/de/docs/Web/API/USBEndpoint)
  - : Bietet Informationen über einen Endpunkt, der vom USB-Gerät bereitgestellt wird.

## Beispiele

### Zugriff auf ein verbundenes Gerät

Das folgende Beispiel demonstriert, wie ein verbundenes Arduino-Gerät mit [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice), das eine `vendorId` von `0x2341` hat, zugegriffen wird.

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

### Finden aller verbundenen Geräte

Mit [`USB.getDevices()`](/de/docs/Web/API/USB/getDevices) können Sie alle verbundenen Geräte finden. Im folgenden Beispiel, mit dem verbundenen Arduino-Gerät, werden Produkt- und Herstellername in der Konsole ausgegeben.

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
