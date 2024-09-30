---
title: USBInterface
slug: Web/API/USBInterface
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBInterface` Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Informationen über eine Schnittstelle, die vom USB-Gerät bereitgestellt wird. Eine Schnittstelle stellt ein Merkmal des Geräts dar, das ein bestimmtes Protokoll implementiert und Endpunkte für die bidirektionale Kommunikation enthalten kann.

## Konstruktor

- [`USBInterface()`](/de/docs/Web/API/USBInterface/USBInterface) {{Experimental_Inline}}
  - : Erstellt ein neues `USBInterface` Objekt, welches mit Informationen über die Schnittstelle auf der bereitgestellten `USBConfiguration` mit der angegebenen Schnittstellennummer gefüllt wird.

## Instanzeigenschaften

- [`USBInterface.interfaceNumber`](/de/docs/Web/API/USBInterface/interfaceNumber) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Schnittstellennummer dieser Schnittstelle zurück. Diese ist gleich dem `bInterfaceNumber` Feld des Schnittstellen-Deskriptors, der diese Schnittstelle definiert.
- [`USBInterface.alternate`](/de/docs/Web/API/USBInterface/alternate) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die aktuell ausgewählte alternative Konfiguration dieser Schnittstelle zurück. Standardmäßig ist dies das `USBAlternateInterface` aus `alternates` mit `alternateSetting` gleich `0`. Es kann geändert werden, indem `USBDevice.selectAlternateInterface()` mit einem anderen Wert aus `alternates` aufgerufen wird.
- [`USBInterface.alternates`](/de/docs/Web/API/USBInterface/alternates) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen der `USBAlternateInterface` Schnittstelle enthält, die jede der möglichen alternativen Konfigurationen für diese Schnittstelle beschreibt.
- [`USBInterface.claimed`](/de/docs/Web/API/USBInterface/claimed) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt zurück, ob diese Schnittstelle von der aktuellen Seite beansprucht wurde, indem `USBDevice.claimInterface()` aufgerufen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
