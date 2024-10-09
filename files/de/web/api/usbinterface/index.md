---
title: USBInterface
slug: Web/API/USBInterface
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `USBInterface`-Schnittstelle der [WebUSB API](/de/docs/Web/API/WebUSB_API) stellt Informationen über eine Schnittstelle bereit, die vom USB-Gerät angeboten wird. Eine Schnittstelle repräsentiert eine Funktion des Geräts, die ein bestimmtes Protokoll implementiert und Endpunkte für bidirektionale Kommunikation enthalten kann.

## Konstruktor

- [`USBInterface()`](/de/docs/Web/API/USBInterface/USBInterface) {{Experimental_Inline}}
  - : Erstellt ein neues `USBInterface`-Objekt, das mit Informationen über die Schnittstelle auf der bereitgestellten `USBConfiguration` mit der angegebenen Schnittstellennummer gefüllt wird.

## Instanz-Eigenschaften

- [`USBInterface.interfaceNumber`](/de/docs/Web/API/USBInterface/interfaceNumber) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Schnittstellennummer dieser Schnittstelle zurück. Dies entspricht dem `bInterfaceNumber`-Feld des Schnittstellen-Descriptors, der diese Schnittstelle definiert.
- [`USBInterface.alternate`](/de/docs/Web/API/USBInterface/alternate) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die aktuell ausgewählte alternative Konfiguration dieser Schnittstelle zurück. Standardmäßig ist dies das `USBAlternateInterface` aus `alternates` mit `alternateSetting` gleich `0`. Es kann geändert werden, indem `USBDevice.selectAlternateInterface()` mit einem anderen Wert aufgerufen wird, der in `alternates` gefunden wird.
- [`USBInterface.alternates`](/de/docs/Web/API/USBInterface/alternates) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen der `USBAlternateInterface`-Schnittstelle enthält, die jede der möglichen alternativen Konfigurationen für diese Schnittstelle beschreibt.
- [`USBInterface.claimed`](/de/docs/Web/API/USBInterface/claimed) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt zurück, ob diese Schnittstelle von der aktuellen Seite beansprucht wurde, indem `USBDevice.claimInterface()` aufgerufen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
