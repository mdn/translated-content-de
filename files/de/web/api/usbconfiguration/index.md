---
title: USBConfiguration
slug: Web/API/USBConfiguration
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBConfiguration`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert Informationen über eine bestimmte Konfiguration eines USB-Geräts und die Schnittstellen, die es unterstützt.

## Konstruktor

- [`USBConfiguration()`](/de/docs/Web/API/USBConfiguration/USBConfiguration) {{Experimental_Inline}}
  - : Erstellt ein neues `USBConfiguration`-Objekt, das Informationen über die Konfiguration auf dem angegebenen `USBDevice` mit dem gegebenen Konfigurationswert enthält.

## Instanz-Eigenschaften

- [`USBConfiguration.configurationValue`](/de/docs/Web/API/USBConfiguration/configurationValue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Konfigurationswert dieser Konfiguration zurück. Dies entspricht dem [`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des Konfigurationsdeskriptors, das vom Gerät bereitgestellt wird, das diese Konfiguration definiert.
- [`USBConfiguration.configurationName`](/de/docs/Web/API/USBConfiguration/configurationName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den vom Gerät bereitgestellten Namen zurück, der diese Konfiguration beschreibt. Dies entspricht dem Wert des String-Deskriptors mit dem Index, der im [`iConfiguration`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des Konfigurationsdeskriptors angegeben ist, das diese Konfiguration definiert.
- [`USBConfiguration.interfaces`](/de/docs/Web/API/USBConfiguration/interfaces) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen von [`USBInterface`](/de/docs/Web/API/USBInterface) enthält, die jede vom dieser Konfiguration unterstützte Schnittstelle beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
