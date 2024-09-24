---
title: USBIsochronousOutTransferResult
slug: Web/API/USBIsochronousOutTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBIsochronousOutTransferResult` Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der `isochronousTransferOut()`-Methode des `USBDevice` Interfaces. Es stellt das Ergebnis einer Anfrage zur Datenübertragung vom USB-Host zum USB-Gerät dar.

## Konstruktor

- {{domxref("USBIsochronousOutTransferResult.USBIsochronousOutTransferResult", "USBIsochronousOutTransferResult()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousOutTransferResult` Objekt mit dem bereitgestellten `packet`-Feld.

## Instanz-Eigenschaften

- {{domxref("USBIsochronousOutTransferResult.packets")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von `USBIsochronousOutTransferPacket` Objekten zurück, das das Ergebnis jeder Anfrage zum Senden eines Pakets an das Gerät enthält.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
