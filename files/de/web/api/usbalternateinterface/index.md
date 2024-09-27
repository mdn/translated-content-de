---
title: USBAlternateInterface
slug: Web/API/USBAlternateInterface
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBAlternateInterface`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert Informationen über eine bestimmte Konfiguration einer Schnittstelle, die vom USB-Gerät bereitgestellt wird. Eine Schnittstelle umfasst eine oder mehrere alternative Einstellungen, die eine Gruppe von Endpunkten basierend auf dem Betriebsmodus des Geräts konfigurieren können.

## Konstruktor

- [`USBAlternateInterface()`](/de/docs/Web/API/USBAlternateInterface/USBAlternateInterface) {{Experimental_Inline}}
  - : Erstellt ein neues `USBAlternateInterface`-Objekt, das mit Informationen über die alternative Schnittstelle der bereitgestellten `USBInterface` mit der gegebenen alternativen Einstellung gefüllt wird.

## Instanz-Eigenschaften

- [`USBAlternateInterface.alternateSetting`](/de/docs/Web/API/USBAlternateInterface/alternateSetting) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die alternative Einstellungsnummer dieser Schnittstelle zurück. Dies entspricht dem `bAlternateSetting`-Feld des Schnittstellenbeschreibers, der diese Schnittstelle definiert.
- [`USBAlternateInterface.interfaceClass`](/de/docs/Web/API/USBAlternateInterface/interfaceClass) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Klasse dieser Schnittstelle zurück. Dies entspricht dem `bInterfaceClass`-Feld des Schnittstellenbeschreibers, der diese Schnittstelle definiert. [Standardisierte Werte](https://www.usb.org/defined-class-codes) für dieses Feld werden vom USB Implementers Forum festgelegt. Ein Wert von `0xFF` zeigt eine durch den Anbieter definierte Schnittstelle an.
- [`USBAlternateInterface.interfaceSubclass`](/de/docs/Web/API/USBAlternateInterface/interfaceSubclass) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Subklasse dieser Schnittstelle zurück. Dies entspricht dem `bInterfaceSubClass`-Feld des Schnittstellenbeschreibers, der diese Schnittstelle definiert. Die Bedeutung dieses Wertes hängt vom `interfaceClass`-Feld ab.
- [`USBAlternateInterface.interfaceProtocol`](/de/docs/Web/API/USBAlternateInterface/interfaceProtocol) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das von dieser Schnittstelle unterstützte Protokoll zurück. Dies entspricht dem `bInterfaceProtocol`-Feld des Schnittstellenbeschreibers, der diese Schnittstelle definiert. Die Bedeutung dieses Wertes hängt von den Feldern `interfaceClass` und `interfaceSubclass` ab.
- [`USBAlternateInterface.interfaceName`](/de/docs/Web/API/USBAlternateInterface/interfaceName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Namen der Schnittstelle zurück, wenn vom Gerät bereitgestellt. Dies ist der Wert des Zeichenkettenbeschreibers mit dem Index, der durch das `iInterface`-Feld des Schnittstellenbeschreibers, der diese Schnittstelle definiert, angegeben wird.
- [`USBAlternateInterface.endpoints`](/de/docs/Web/API/USBAlternateInterface/endpoints) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen des `USBEndpoint`-Interfaces enthält, die jeweils die Endpunkte beschreiben, die Teil dieser Schnittstelle sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
