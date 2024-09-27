---
title: USBIsochronousOutTransferResult
slug: Web/API/USBIsochronousOutTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

---

title: USBIsochronousOutTransferResult
slug: Web/API/USBIsochronousOutTransferResult
page-type: web-api-interface
status:

- experimental
  browser-compat: api.USBIsochronousOutTransferResult

---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBIsochronousOutTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der `isochronousTransferOut()`-Methode des `USBDevice`-Interfaces. Es repräsentiert das Ergebnis einer Anfrage zur Übertragung von Daten vom USB-Host zum USB-Gerät.

## Konstruktor

- [`USBIsochronousOutTransferResult()`](/de/docs/Web/API/USBIsochronousOutTransferResult/USBIsochronousOutTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousOutTransferResult`-Objekt mit dem bereitgestellten `packet`-Feld.

## Instanzeigenschaften

- [`USBIsochronousOutTransferResult.packets`](/de/docs/Web/API/USBIsochronousOutTransferResult/packets) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von `USBIsochronousOutTransferPacket`-Objekten zurück, das das Ergebnis jeder Anfrage zum Senden eines Pakets an das Gerät enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
