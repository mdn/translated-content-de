---
title: "USBConfiguration: Eigenschaft configurationValue"
short-title: configurationValue
slug: Web/API/USBConfiguration/configurationValue
l10n:
  sourceCommit: c919dcbb83bc360299b21f3b35bf645b7860eb43
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`configurationValue`** der {{domxref("USBConfiguration")}}-Schnittstelle gibt den Konfigurationswert dieser Konfiguration zurück. Dies entspricht dem [`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des vom Gerät bereitgestellten Konfigurationsdeskriptors, das diese Konfiguration definiert.

## Wert

Der [Konfigurationsdeskriptor](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) des im Konstruktor der aktuellen {{domxref("USBConfiguration")}}-Instanz angegebenen {{domxref("USBDevice")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
