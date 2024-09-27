---
title: "USBConfiguration: USBConfiguration() Konstruktor"
short-title: USBConfiguration()
slug: Web/API/USBConfiguration/USBConfiguration
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Der **`USBConfiguration()`** Konstruktor
erstellt ein neues [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Objekt, das Informationen über
die Konfiguration auf dem angegebenen USBDevice mit dem gegebenen Konfigurationswert enthält.

## Syntax

```js-nolint
new USBConfiguration(device, configurationValue)
```

### Parameter

- `device`
  - : Gibt das [`USBDevice`](/de/docs/Web/API/USBDevice) an, das Sie konfigurieren möchten.
- `configurationValue`
  - : Gibt den [Konfigurationsdeskriptor](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) an, den Sie lesen möchten. Dies ist eine vorzeichenlose Ganzzahl im Bereich von 0 bis 255.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
