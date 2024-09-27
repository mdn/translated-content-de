---
title: USBInterface
slug: Web/API/USBInterface
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBInterface`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Informationen über eine Schnittstelle, die vom USB-Gerät bereitgestellt wird. Eine Schnittstelle stellt ein Merkmal des Geräts dar, das ein bestimmtes Protokoll implementiert und Endpunkte für die bidirektionale Kommunikation enthalten kann.

## Konstruktor

- [`USBInterface()`](/de/docs/Web/API/USBInterface/USBInterface) {{Experimental_Inline}}
  - : Erstellt ein neues `USBInterface`-Objekt, das mit Informationen über die Schnittstelle in der bereitgestellten `USBConfiguration` mit der angegebenen Schnittstellennummer ausgefüllt wird.

## Instanz-Eigenschaften

- [`USBInterface.interfaceNumber`](/de/docs/Web/API/USBInterface/interfaceNumber) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Schnittstellennummer dieser Schnittstelle zurück. Diese ist gleich dem `bInterfaceNumber`-Feld des Schnittstellen-Descriptors, der diese Schnittstelle definiert.
- [`USBInterface.alternate`](/de/docs/Web/API/USBInterface/alternate) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die derzeit ausgewählte alternative Konfiguration dieser Schnittstelle zurück. Standardmäßig ist dies die `USBAlternateInterface` aus `alternates` mit `alternateSetting` gleich `0`. Es kann durch einen Aufruf von `USBDevice.selectAlternateInterface()` mit einem anderen in `alternates` gefundenen Wert geändert werden.
- [`USBInterface.alternates`](/de/docs/Web/API/USBInterface/alternates) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen des `USBAlternateInterface`-Interfaces enthält, die jede der möglichen alternativen Konfigurationen für diese Schnittstelle beschreiben.
- [`USBInterface.claimed`](/de/docs/Web/API/USBInterface/claimed) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt zurück, ob diese Schnittstelle von der aktuellen Seite durch Aufruf von `USBDevice.claimInterface()` beansprucht wurde oder nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
