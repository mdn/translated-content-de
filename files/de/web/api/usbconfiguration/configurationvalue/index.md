---
title: "USBConfiguration: configurationValue-Eigenschaft"
short-title: configurationValue
slug: Web/API/USBConfiguration/configurationValue
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configurationValue`**-Eigenschaft der [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Konfigurationswert dieser Konfiguration zurückgibt. Dieser ist gleich dem [`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des vom Gerät bereitgestellten Konfigurationsdeskriptors, das diese Konfiguration definiert.

## Wert

Der [Konfigurationsdeskriptor](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) des in dem Konstruktor der aktuellen [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Instanz angegebenen [`USBDevice`](/de/docs/Web/API/USBDevice).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
