---
title: WebUSB-API
slug: Web/API/WebUSB_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}{{SeeCompatTable}}

Die **WebUSB-API** bietet eine Möglichkeit, nicht-standardisierte Universal Serial Bus (USB) kompatible Geräteservices im Web zugänglich zu machen, um USB sicherer und benutzerfreundlicher zu gestalten.

## Konzepte und Nutzung

USB ist der De-facto-Standard für kabelgebundene Peripheriegeräte. Die USB-Geräte, die Sie mit Ihrem Computer verbinden, sind typischerweise in eine Reihe von Geräteklassen gruppiert - wie Tastaturen, Mäuse, Videogeräte und so weiter. Diese werden durch den Klassentreiber des Betriebssystems unterstützt. Viele dieser Geräte sind auch über die [WebHID-API](/de/docs/Web/API/WebHID_API) im Web zugänglich.

Zusätzlich zu diesen standardisierten Geräten gibt es eine große Anzahl von Geräten, die in keine Klasse passen. Diese benötigen benutzerdefinierte Treiber und sind aufgrund des erforderlichen nativen Codes vom Web aus nicht zugänglich. Die Installation eines dieser Geräte erfordert oft die Suche nach Treibern auf der Website des Herstellers und, wenn Sie das Gerät auf einem anderen Computer verwenden möchten, das wiederholte Durchlaufen des Prozesses.

WebUSB bietet einen Weg, um diese nicht-standardisierten USB-Geräteservices im Web zugänglich zu machen. Das bedeutet, dass Hardwarehersteller eine Möglichkeit bereitstellen können, damit auf ihr Gerät vom Web aus zugegriffen werden kann, ohne dass sie eine eigene API bereitstellen müssen.

Beim Anschließen eines neuen WebUSB-kompatiblen Geräts zeigt der Browser eine Benachrichtigung an, die einen Link zur Website des Herstellers bereitstellt. Beim Besuch der Website fordert der Browser die Erlaubnis zum Verbinden mit dem Gerät an, und dann ist das Gerät einsatzbereit. Es müssen keine Treiber heruntergeladen und installiert werden.

## Schnittstellen

- {{domxref("USB")}}
  - : Bietet Attribute und Methoden zum Finden und Verbinden von USB-Geräten von einer Webseite aus.
- {{domxref("USBConnectionEvent")}}
  - : Der Ereignistyp, der an `USB` {{domxref("USB.connect_event", "connect")}} oder {{domxref("USB.disconnect_event", "disconnect")}} Ereignisse übergeben wird, wenn der Benutzeragent erkennt, dass ein neues USB-Gerät verbunden oder vom Host getrennt wurde.
- {{domxref("USBDevice")}}
  - : Bietet Zugriff auf Metadaten über ein verbundenes USB-Gerät und Methoden zu seiner Steuerung.
- {{domxref("USBInTransferResult")}}
  - : Stellt das Ergebnis eines Anforderungstransfers von Daten vom USB-Gerät zum USB-Host dar.
- {{domxref("USBOutTransferResult")}}
  - : Stellt das Ergebnis eines Anforderungstransfers von Daten vom USB-Host zum USB-Gerät dar.
- {{domxref("USBIsochronousInTransferPacket")}}
  - : Stellt den Status eines individuellen Pakets einer Anforderung zum Datentransfer vom USB-Gerät zum USB-Host über einen isochronen Endpunkt dar.
- {{domxref("USBIsochronousInTransferResult")}}
  - : Stellt das Ergebnis eines Anforderungstransfers von Daten vom USB-Gerät zum USB-Host dar.
- {{domxref("USBIsochronousOutTransferPacket")}}
  - : Stellt den Status eines individuellen Pakets einer Anforderung zum Datentransfer vom USB-Host zum USB-Gerät über einen isochronen Endpunkt dar.
- {{domxref("USBIsochronousOutTransferResult")}}
  - : Stellt das Ergebnis eines Anforderungstransfers von Daten vom USB-Host zum USB-Gerät dar.
- {{domxref("USBConfiguration")}}
  - : Bietet Informationen über eine bestimmte Konfiguration eines USB-Geräts und die Schnittstellen, die es unterstützt.
- {{domxref("USBInterface")}}
  - : Bietet Informationen über eine von dem USB-Gerät bereitgestellte Schnittstelle.
- {{domxref("USBAlternateInterface")}}
  - : Bietet Informationen über eine bestimmte Konfiguration einer von dem USB-Gerät bereitgestellten Schnittstelle.
- {{domxref("USBEndPoint")}}
  - : Bietet Informationen über einen von dem USB-Gerät bereitgestellten Endpunkt.

## Beispiele

### Zugriff auf ein verbundenes Gerät

Das folgende Beispiel zeigt, wie Sie mit {{domxref("USB.requestDevice()")}} auf ein verbundenes Arduino-Gerät zugreifen können, das eine vendorId von `0x2341` hat.

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

Sie können alle verbundenen Geräte mit {{domxref("USB.getDevices()")}} finden. Im folgenden Beispiel werden, mit dem verbundenen Arduino-Gerät, der Produkt- und Herstellername in die Konsole ausgegeben.

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
