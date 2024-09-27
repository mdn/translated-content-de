---
title: WebUSB API
slug: Web/API/WebUSB_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}{{SeeCompatTable}}

Die **WebUSB API** bietet eine Möglichkeit, nicht standardisierte Universal Serial Bus (USB)-kompatible Gerätedienste im Web zu exponieren, um die Nutzung von USB sicherer und einfacher zu gestalten.

## Konzepte und Nutzung

USB ist der De-facto-Standard für kabelgebundene Peripheriegeräte. Die USB-Geräte, die Sie mit Ihrem Computer verbinden, werden typischerweise in mehrere Gerätekategorien eingeteilt—wie Tastaturen, Mäuse, Videogeräte usw. Diese werden durch den Klassentreiber des Betriebssystems unterstützt. Viele davon sind über die [WebHID API](/de/docs/Web/API/WebHID_API) auch im Web zugänglich.

Neben diesen standardisierten Geräten gibt es eine große Anzahl von Geräten, die in keine Kategorie passen. Diese benötigen benutzerdefinierte Treiber und sind aufgrund des benötigten nativen Codes nicht über das Web zugänglich. Die Installation eines solchen Geräts erfordert oft das Suchen nach Treibern auf der Website des Herstellers und, sollte man das Gerät auf einem anderen Computer nutzen wollen, das Wiederholen des Prozesses.

WebUSB bietet eine Möglichkeit, diese nicht standardisierten USB-Gerätedienste im Web zugänglich zu machen. Dies bedeutet, dass Hardwarehersteller eine Möglichkeit bereitstellen können, auf ihre Geräte über das Web zuzugreifen, ohne eine eigene API bereitstellen zu müssen.

Beim Anschluss eines neuen WebUSB-kompatiblen Geräts zeigt der Browser eine Benachrichtigung an, die einen Link zur Website des Herstellers enthält. Beim Besuch der Website wird der Browser um Erlaubnis zur Verbindung mit dem Gerät bitten, danach ist das Gerät einsatzbereit. Es müssen keine Treiber heruntergeladen und installiert werden.

## Schnittstellen

- [`USB`](/de/docs/Web/API/USB)
  - : Bietet Attribute und Methoden zum Auffinden und Verbinden von USB-Geräten von einer Webseite aus.
- [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent)
  - : Der Ereignistyp, der an `USB`- [connect](/de/docs/Web/API/USB/connect_event) oder [disconnect](/de/docs/Web/API/USB/disconnect_event) Ereignisse übergeben wird, wenn der Benutzeragent ein neues USB-Gerät erkennt, das mit dem Host verbunden oder vom Host getrennt wurde.
- [`USBDevice`](/de/docs/Web/API/USBDevice)
  - : Bietet Zugriff auf Metadaten über ein gekoppeltes USB-Gerät und Methoden zu dessen Steuerung.
- [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult)
  - : Stellt das Ergebnis einer Anforderung zum Übertragen von Daten vom USB-Gerät zum USB-Host dar.
- [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult)
  - : Stellt das Ergebnis einer Anforderung zum Übertragen von Daten vom USB-Host zum USB-Gerät dar.
- [`USBIsochronousInTransferPacket`](/de/docs/Web/API/USBIsochronousInTransferPacket)
  - : Repräsentiert den Status eines einzelnen Pakets von einer Anforderung zur Datenübertragung vom USB-Gerät zum USB-Host über einen isochronen Endpunkt.
- [`USBIsochronousInTransferResult`](/de/docs/Web/API/USBIsochronousInTransferResult)
  - : Stellt das Ergebnis einer Anforderung zum Übertragen von Daten vom USB-Gerät zum USB-Host dar.
- [`USBIsochronousOutTransferPacket`](/de/docs/Web/API/USBIsochronousOutTransferPacket)
  - : Repräsentiert den Status eines einzelnen Pakets von einer Anforderung zur Datenübertragung vom USB-Host zum USB-Gerät über einen isochronen Endpunkt.
- [`USBIsochronousOutTransferResult`](/de/docs/Web/API/USBIsochronousOutTransferResult)
  - : Stellt das Ergebnis einer Anforderung zum Übertragen von Daten vom USB-Host zum USB-Gerät dar.
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

Das folgende Beispiel demonstriert, wie man mit einem verbundenen Arduino-Gerät unter Verwendung von [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice) mit einer vendorId von `0x2341` zugreift.

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

Sie können alle verbundenen Geräte mit [`USB.getDevices()`](/de/docs/Web/API/USB/getDevices) finden. Im folgenden Beispiel werden mit dem verbundenen Arduino-Gerät der Produkt- und Herstellername in die Konsole ausgegeben.

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

- [Access USB Devices on the Web](https://developer.chrome.com/docs/capabilities/usb)
