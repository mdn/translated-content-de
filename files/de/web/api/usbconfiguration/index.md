---
title: USBConfiguration
slug: Web/API/USBConfiguration
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die `USBConfiguration`-Schnittstelle der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert Informationen über eine bestimmte Konfiguration eines USB-Geräts und die Schnittstellen, die es unterstützt.

## Konstruktor

- {{domxref("USBConfiguration.USBConfiguration", "USBConfiguration()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `USBConfiguration`-Objekt, welches Informationen über die Konfiguration auf dem bereitgestellten `USBDevice` mit dem angegebenen Konfigurationswert enthält.

## Instanzeigenschaften

- {{domxref("USBConfiguration.configurationValue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Konfigurationswert dieser Konfiguration zurück. Dies entspricht dem [`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des vom Gerät bereitgestellten Konfigurationsdeskriptors, das diese Konfiguration definiert.
- {{domxref("USBConfiguration.configurationName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den vom Gerät bereitgestellten Namen zurück, um diese Konfiguration zu beschreiben. Dies entspricht dem Wert des String-Deskriptors mit dem Index, der im [`iConfiguration`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des Konfigurationsdeskriptors bereitgestellt wird, der diese Konfiguration definiert.
- {{domxref("USBConfiguration.interfaces")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen von {{domxref('USBInterface')}} enthält, die jede von dieser Konfiguration unterstützte Schnittstelle beschreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
