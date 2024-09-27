---
title: "USBConfiguration: configurationValue-Eigenschaft"
short-title: configurationValue
slug: Web/API/USBConfiguration/configurationValue
l10n:
  sourceCommit: c919dcbb83bc360299b21f3b35bf645b7860eb43
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`configurationValue`** der [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Schnittstelle gibt den Konfigurationswert dieser Konfiguration zurück. Dieser entspricht dem [`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des vom Gerät definierten Konfigurationsdeskriptors.

## Wert

Der [Konfigurationsdeskriptor](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) des [`USBDevice`](/de/docs/Web/API/USBDevice), der im Konstruktor der aktuellen [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Instanz angegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
