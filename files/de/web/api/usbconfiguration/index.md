---
title: USBConfiguration
slug: Web/API/USBConfiguration
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die `USBConfiguration`-Schnittstelle der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Informationen über eine bestimmte Konfiguration eines USB-Geräts und die Schnittstellen, die sie unterstützt.

## Konstruktor

- [`USBConfiguration()`](/de/docs/Web/API/USBConfiguration/USBConfiguration) {{Experimental_Inline}}
  - : Erstellt ein neues `USBConfiguration`-Objekt, das Informationen über die Konfiguration am bereitgestellten `USBDevice` mit dem angegebenen Konfigurationswert enthält.

## Instanzeigenschaften

- [`USBConfiguration.configurationValue`](/de/docs/Web/API/USBConfiguration/configurationValue) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Konfigurationswert dieser Konfiguration zurück. Dies entspricht dem [`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des von dem Gerät definierten Konfigurationsdeskriptors, das diese Konfiguration beschreibt.
- [`USBConfiguration.configurationName`](/de/docs/Web/API/USBConfiguration/configurationName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Namen zurück, der von dem Gerät bereitgestellt wird, um diese Konfiguration zu beschreiben. Dies entspricht dem Wert des Zeichenfolgendeskriptors mit dem Index, der im [`iConfiguration`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des Konfigurationsdeskriptors bereitgestellt wird, der diese Konfiguration definiert.
- [`USBConfiguration.interfaces`](/de/docs/Web/API/USBConfiguration/interfaces) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen der [`USBInterface`](/de/docs/Web/API/USBInterface) enthält und jede von dieser Konfiguration unterstützte Schnittstelle beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
