---
title: USBConfiguration
slug: Web/API/USBConfiguration
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBConfiguration` Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert Informationen über eine bestimmte Konfiguration eines USB-Geräts und die Schnittstellen, die sie unterstützt.

## Konstruktor

- [`USBConfiguration()`](/de/docs/Web/API/USBConfiguration/USBConfiguration) {{Experimental_Inline}}
  - : Erstellt ein neues `USBConfiguration`-Objekt, das Informationen über die Konfiguration auf dem angegebenen `USBDevice` mit dem gegebenen Konfigurationswert enthält.

## Instanzeigenschaften

- [`USBConfiguration.configurationValue`](/de/docs/Web/API/USBConfiguration/configurationValue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Konfigurationswert dieser Konfiguration zurück. Dieser entspricht dem [`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des vom Gerät bereitgestellten Konfigurationsdeskriptors, das diese Konfiguration definiert.
- [`USBConfiguration.configurationName`](/de/docs/Web/API/USBConfiguration/configurationName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den vom Gerät bereitgestellten Namen zur Beschreibung dieser Konfiguration zurück. Dies entspricht dem Wert des Stringdeskriptors mit dem Index, der im [`iConfiguration`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des den Konfiguration definierenden Konfigurationsdeskriptors bereitgestellt wird.
- [`USBConfiguration.interfaces`](/de/docs/Web/API/USBConfiguration/interfaces) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen der [`USBInterface`](/de/docs/Web/API/USBInterface) enthält, die jede von dieser Konfiguration unterstützte Schnittstelle beschreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
