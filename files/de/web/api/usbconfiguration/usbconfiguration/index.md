---
title: "USBConfiguration: USBConfiguration() Konstruktor"
short-title: USBConfiguration()
slug: Web/API/USBConfiguration/USBConfiguration
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Der **`USBConfiguration()`** Konstruktor
erstellt ein neues [`USBConfiguration`](/de/docs/Web/API/USBConfiguration) Objekt, das Informationen über
die Konfiguration auf dem bereitgestellten `USBDevice` mit dem gegebenen Konfigurationswert enthält.

## Syntax

```js-nolint
new USBConfiguration(device, configurationValue)
```

### Parameter

- `device`
  - : Gibt das [`USBDevice`](/de/docs/Web/API/USBDevice) an, das Sie konfigurieren möchten.
- `configurationValue`
  - : Gibt den [Konfigurationsdeskriptor](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) an, den Sie lesen möchten. Dies ist eine nicht signierte Ganzzahl im Bereich von 0 bis 255.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
