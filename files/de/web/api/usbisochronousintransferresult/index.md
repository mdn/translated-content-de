---
title: USBIsochronousInTransferResult
slug: Web/API/USBIsochronousInTransferResult
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBIsochronousInTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der `isochronousTransferIn()`-Methode des `USBDevice`-Interfaces. Es repräsentiert das Ergebnis einer Anforderung zum Datentransfer vom USB-Gerät zum USB-Host.

## Konstruktor

- [`USBIsochronousInTransferResult()`](/de/docs/Web/API/USBIsochronousInTransferResult/USBIsochronousInTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousInTransferResult`-Objekt mit den bereitgestellten `packets`- und `data`-Feldern.

## Instanzeigenschaften

- [`USBIsochronousInTransferResult.data`](/de/docs/Web/API/USBIsochronousInTransferResult/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die vom Gerät empfangenen Daten enthält. Dies sind die kombinierten Daten aus allen Paketen. Siehe die einzelnen `DataView`-Objekte im `packets`-Array für den Teil dieses Puffers, der Daten aus jedem Paket enthält.
- [`USBIsochronousInTransferResult.packets`](/de/docs/Web/API/USBIsochronousInTransferResult/packets) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von `USBIsochronousInTransferPacket`-Objekten zurück, das das Ergebnis jeder Anfrage zum Empfang eines Pakets vom Gerät enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
