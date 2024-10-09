---
title: USBAlternateInterface
slug: Web/API/USBAlternateInterface
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `USBAlternateInterface`-Schnittstelle der [WebUSB API](/de/docs/Web/API/WebUSB_API) stellt Informationen über eine bestimmte Konfiguration einer vom USB-Gerät bereitgestellten Schnittstelle bereit. Eine Schnittstelle umfasst eine oder mehrere alternative Einstellungen, die eine Reihe von Endpunkten basierend auf dem Betriebsmodus des Geräts konfigurieren können.

## Konstruktor

- [`USBAlternateInterface()`](/de/docs/Web/API/USBAlternateInterface/USBAlternateInterface) {{Experimental_Inline}}
  - : Erstellt ein neues `USBAlternateInterface`-Objekt, das mit Informationen über die alternative Schnittstelle der bereitgestellten `USBInterface` mit der angegebenen alternativen Einstellungsnummer gefüllt wird.

## Instanzeigenschaften

- [`USBAlternateInterface.alternateSetting`](/de/docs/Web/API/USBAlternateInterface/alternateSetting) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die alternative Einstellungsnummer dieser Schnittstelle zurück. Diese entspricht dem `bAlternateSetting`-Feld des die Schnittstelle definierenden Schnittstellenbeschreibers.
- [`USBAlternateInterface.interfaceClass`](/de/docs/Web/API/USBAlternateInterface/interfaceClass) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Klasse dieser Schnittstelle zurück. Diese entspricht dem `bInterfaceClass`-Feld des die Schnittstelle definierenden Schnittstellenbeschreibers. [Standardisierte Werte](https://www.usb.org/defined-class-codes) für dieses Feld sind vom USB-Implementers Forum definiert. Ein Wert von `0xFF` zeigt eine herstellerspezifische Schnittstelle an.
- [`USBAlternateInterface.interfaceSubclass`](/de/docs/Web/API/USBAlternateInterface/interfaceSubclass) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Unterklasse dieser Schnittstelle zurück. Diese entspricht dem `bInterfaceSubClass`-Feld des die Schnittstelle definierenden Schnittstellenbeschreibers. Die Bedeutung dieses Wertes hängt vom `interfaceClass`-Feld ab.
- [`USBAlternateInterface.interfaceProtocol`](/de/docs/Web/API/USBAlternateInterface/interfaceProtocol) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das von dieser Schnittstelle unterstützte Protokoll zurück. Diese entspricht dem `bInterfaceProtocol`-Feld des die Schnittstelle definierenden Schnittstellenbeschreibers. Die Bedeutung dieses Wertes hängt von den Feldern `interfaceClass` und `interfaceSubclass` ab.
- [`USBAlternateInterface.interfaceName`](/de/docs/Web/API/USBAlternateInterface/interfaceName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Namen der Schnittstelle zurück, falls einer vom Gerät bereitgestellt wird. Dies ist der Wert des String-Beschreibers mit dem durch das `iInterface`-Feld des die Schnittstelle definierenden Schnittstellenbeschreibers spezifizierten Index.
- [`USBAlternateInterface.endpoints`](/de/docs/Web/API/USBAlternateInterface/endpoints) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen der `USBEndpoint`-Schnittstelle enthält, die jeden der Endpunkte beschreiben, die Teil dieser Schnittstelle sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
