---
title: USBIsochronousOutTransferResult
slug: Web/API/USBIsochronousOutTransferResult
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBIsochronousOutTransferResult`-Interface der [WebUSB-API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der Methode `isochronousTransferOut()` des `USBDevice`-Interfaces. Es stellt das Ergebnis der Anforderung eines Datenübertrags vom USB-Host an das USB-Gerät dar.

## Konstruktor

- [`USBIsochronousOutTransferResult()`](/de/docs/Web/API/USBIsochronousOutTransferResult/USBIsochronousOutTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousOutTransferResult`-Objekt mit dem bereitgestellten `packet`-Feld.

## Instanzeigenschaften

- [`USBIsochronousOutTransferResult.packets`](/de/docs/Web/API/USBIsochronousOutTransferResult/packets) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von `USBIsochronousOutTransferPacket`-Objekten zurück, die das Ergebnis jeder Anforderung zur Übertragung eines Pakets an das Gerät enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
