---
title: USBAlternateInterface
slug: Web/API/USBAlternateInterface
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBAlternateInterface`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Informationen über eine bestimmte Konfiguration einer Schnittstelle, die vom USB-Gerät bereitgestellt wird. Eine Schnittstelle umfasst eine oder mehrere alternative Einstellungen, die eine Konfiguration einer Reihe von Endpunkten basierend auf dem Betriebsmodus des Geräts ermöglichen.

## Konstruktor

- [`USBAlternateInterface()`](/de/docs/Web/API/USBAlternateInterface/USBAlternateInterface) {{Experimental_Inline}}
  - : Erstellt ein neues `USBAlternateInterface`-Objekt, das mit Informationen über die alternative Schnittstelle der bereitgestellten `USBInterface` mit der angegebenen alternativen Einstellungsnummer gefüllt wird.

## Instanzeigenschaften

- [`USBAlternateInterface.alternateSetting`](/de/docs/Web/API/USBAlternateInterface/alternateSetting) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die alternative Einstellungsnummer dieser Schnittstelle zurück. Dies entspricht dem `bAlternateSetting`-Feld des Schnittstellen-Descriptors, der diese Schnittstelle definiert.
- [`USBAlternateInterface.interfaceClass`](/de/docs/Web/API/USBAlternateInterface/interfaceClass) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Klasse dieser Schnittstelle zurück. Dies entspricht dem `bInterfaceClass`-Feld des Schnittstellen-Descriptors, der diese Schnittstelle definiert. [Standardisierte Werte](https://www.usb.org/defined-class-codes) für dieses Feld werden vom USB Implementers Forum definiert. Ein Wert von `0xFF` zeigt eine herstellerspezifische Schnittstelle an.
- [`USBAlternateInterface.interfaceSubclass`](/de/docs/Web/API/USBAlternateInterface/interfaceSubclass) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Unterklasse dieser Schnittstelle zurück. Dies entspricht dem `bInterfaceSubClass`-Feld des Schnittstellen-Descriptors, der diese Schnittstelle definiert. Die Bedeutung dieses Wertes hängt vom `interfaceClass`-Feld ab.
- [`USBAlternateInterface.interfaceProtocol`](/de/docs/Web/API/USBAlternateInterface/interfaceProtocol) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das von dieser Schnittstelle unterstützte Protokoll zurück. Dies entspricht dem `bInterfaceProtocol`-Feld des Schnittstellen-Descriptors, der diese Schnittstelle definiert. Die Bedeutung dieses Wertes hängt von den Feldern `interfaceClass` und `interfaceSubclass` ab.
- [`USBAlternateInterface.interfaceName`](/de/docs/Web/API/USBAlternateInterface/interfaceName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Namen der Schnittstelle zurück, falls einer vom Gerät bereitgestellt wird. Dies ist der Wert des String-Descriptors mit dem Index, der durch das `iInterface`-Feld des Schnittstellen-Descriptors definiert wird.
- [`USBAlternateInterface.endpoints`](/de/docs/Web/API/USBAlternateInterface/endpoints) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen der `USBEndpoint`-Schnittstelle beschreibt, die Teil dieser Schnittstelle sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
