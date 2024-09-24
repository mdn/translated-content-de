---
title: USBIsochronousInTransferResult
slug: Web/API/USBIsochronousInTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die `USBIsochronousInTransferResult`-Schnittstelle der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der `isochronousTransferIn()`-Methode der `USBDevice`-Schnittstelle. Sie repräsentiert das Ergebnis einer Anfrage zur Übertragung von Daten vom USB-Gerät zum USB-Host.

## Konstruktor

- {{domxref("USBIsochronousInTransferResult.USBIsochronousInTransferResult", "USBIsochronousInTransferResult()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousInTransferResult`-Objekt mit den bereitgestellten `packets`- und `data`-Feldern.

## Instanzeigenschaften

- {{domxref("USBIsochronousInTransferResult.data")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die vom Gerät empfangenen Daten enthält. Dies sind die kombinierten Daten aus allen Paketen. Siehe die einzelnen `DataView`-Objekte im `packets`-Array für den Teil dieses Puffers, der Daten aus jedem Paket enthält.
- {{domxref("USBIsochronousInTransferResult.packets")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von `USBIsochronousInTransferPacket`-Objekten zurück, das das Ergebnis jeder Anfrage zum Empfang eines Pakets vom Gerät enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
