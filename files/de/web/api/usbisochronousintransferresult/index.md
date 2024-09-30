---
title: USBIsochronousInTransferResult
slug: Web/API/USBIsochronousInTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBIsochronousInTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der Methode `isochronousTransferIn()` des `USBDevice`-Interfaces. Es repräsentiert das Ergebnis der Anforderung, Daten vom USB-Gerät zum USB-Host zu übertragen.

## Konstruktor

- [`USBIsochronousInTransferResult()`](/de/docs/Web/API/USBIsochronousInTransferResult/USBIsochronousInTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousInTransferResult`-Objekt mit den bereitgestellten Feldern `packets` und `data`.

## Instanz-Eigenschaften

- [`USBIsochronousInTransferResult.data`](/de/docs/Web/API/USBIsochronousInTransferResult/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die vom Gerät empfangenen Daten enthält. Dies sind die kombinierten Daten aller Pakete. Die einzelnen `DataView`-Objekte im `packets`-Array zeigen die Teile dieses Puffers an, die die Daten jedes Pakets enthalten.
- [`USBIsochronousInTransferResult.packets`](/de/docs/Web/API/USBIsochronousInTransferResult/packets) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von `USBIsochronousInTransferPacket`-Objekten zurück, die das Ergebnis jeder Anforderung enthalten, ein Paket vom Gerät zu empfangen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
