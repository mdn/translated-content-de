---
title: USBInterface
slug: Web/API/USBInterface
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die `USBInterface`-Schnittstelle der [WebUSB-API](/de/docs/Web/API/WebUSB_API) bietet Informationen über eine Schnittstelle, die vom USB-Gerät bereitgestellt wird. Eine Schnittstelle stellt eine Funktion des Geräts dar, die ein bestimmtes Protokoll implementiert und Endpunkte für eine bidirektionale Kommunikation enthalten kann.

## Konstruktor

- {{domxref("USBInterface.USBInterface", "USBInterface()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `USBInterface`-Objekt, das mit Informationen über die Schnittstelle auf der bereitgestellten `USBConfiguration` mit der angegebenen Schnittstellennummer gefüllt wird.

## Instanz-Eigenschaften

- {{domxref("USBInterface.interfaceNumber")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Schnittstellennummer dieser Schnittstelle zurück. Dies entspricht dem `bInterfaceNumber`-Feld des Schnittstellenbeschreibers, der diese Schnittstelle definiert.
- {{domxref("USBInterface.alternate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die aktuell ausgewählte alternative Konfiguration dieser Schnittstelle zurück. Standardmäßig ist dies die `USBAlternateInterface` aus `alternates` mit `alternateSetting` gleich `0`. Es kann geändert werden, indem `USBDevice.selectAlternateInterface()` mit einem anderen in `alternates` gefundenen Wert aufgerufen wird.
- {{domxref("USBInterface.alternates")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array zurück, das Instanzen der `USBAlternateInterface`-Schnittstelle enthält, die jede der möglichen alternativen Konfigurationen für diese Schnittstelle beschreibt.
- {{domxref("USBInterface.claimed")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt zurück, ob diese Schnittstelle von der aktuellen Seite durch Aufruf von `USBDevice.claimInterface()` beansprucht wurde oder nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
