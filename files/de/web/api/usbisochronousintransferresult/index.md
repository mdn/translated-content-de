---
title: USBIsochronousInTransferResult
slug: Web/API/USBIsochronousInTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBIsochronousInTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der Methode `isochronousTransferIn()` des `USBDevice`-Interfaces. Es repräsentiert das Ergebnis der Anforderung eines Datentransfers vom USB-Gerät zum USB-Host.

## Konstruktor

- [`USBIsochronousInTransferResult()`](/de/docs/Web/API/USBIsochronousInTransferResult/USBIsochronousInTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousInTransferResult`-Objekt mit den angegebenen Feldern `packets` und `data`.

## Instanz-Eigenschaften

- [`USBIsochronousInTransferResult.data`](/de/docs/Web/API/USBIsochronousInTransferResult/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die vom Gerät empfangenen Daten enthält. Dies sind die kombinierten Daten aller Pakete. Siehe die individuellen `DataView`-Objekte im `packets`-Array für den Teil dieses Puffers, der Daten aus jedem Paket enthält.
- [`USBIsochronousInTransferResult.packets`](/de/docs/Web/API/USBIsochronousInTransferResult/packets) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von `USBIsochronousInTransferPacket`-Objekten zurück, das das Ergebnis jeder Anforderung zum Empfang eines Pakets vom Gerät enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
