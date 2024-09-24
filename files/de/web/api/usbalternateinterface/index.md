---
title: USBAlternateInterface
slug: Web/API/USBAlternateInterface
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBAlternateInterface`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Informationen über eine bestimmte Konfiguration einer Schnittstelle, die vom USB-Gerät bereitgestellt wird. Eine Schnittstelle umfasst eine oder mehrere alternative Einstellungen, die eine Gruppe von Endpunkten basierend auf dem Betriebsmodus des Geräts konfigurieren können.

## Konstruktor

- {{domxref("USBAlternateInterface.USBAlternateInterface", "USBAlternateInterface()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `USBAlternateInterface`-Objekt, das mit Informationen über die alternative Schnittstelle der bereitgestellten `USBInterface` mit der angegebenen alternativen Einstellungsnummer gefüllt wird.

## Instanz-Eigenschaften

- {{domxref("USBAlternateInterface.alternateSetting")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die alternative Einstellungsnummer dieser Schnittstelle zurück. Dies entspricht dem `bAlternateSetting`-Feld des Schnittstellenbeschreibers, der diese Schnittstelle definiert.
- {{domxref("USBAlternateInterface.interfaceClass")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Klasse dieser Schnittstelle zurück. Dies entspricht dem `bInterfaceClass`-Feld des Schnittstellenbeschreibers, der diese Schnittstelle definiert. [Standardisierte Werte](https://www.usb.org/defined-class-codes) für dieses Feld werden vom USB Implementers Forum festgelegt. Ein Wert von `0xFF` zeigt eine vom Hersteller definierte Schnittstelle an.
- {{domxref("USBAlternateInterface.interfaceSubclass")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Unterklasse dieser Schnittstelle zurück. Dies entspricht dem `bInterfaceSubClass`-Feld des Schnittstellenbeschreibers, der diese Schnittstelle definiert. Die Bedeutung dieses Wertes hängt vom `interfaceClass`-Feld ab.
- {{domxref("USBAlternateInterface.interfaceProtocol")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das von dieser Schnittstelle unterstützte Protokoll zurück. Dies entspricht dem `bInterfaceProtocol`-Feld des Schnittstellenbeschreibers, der diese Schnittstelle definiert. Die Bedeutung dieses Wertes hängt von den Feldern `interfaceClass` und `interfaceSubclass` ab.
- {{domxref("USBAlternateInterface.interfaceName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Namen der Schnittstelle zurück, falls das Gerät einen bereitstellt. Dies ist der Wert des Zeichenfolgenbeschreibers mit dem Index, der durch das `iInterface`-Feld des Schnittstellenbeschreibers definiert ist.
- {{domxref("USBAlternateInterface.endpoints")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen des `USBEndpoint`-Interfaces beschreibt, die jeweils zu den Endpunkten gehören, die Teil dieser Schnittstelle sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
