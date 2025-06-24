---
title: USBIsochronousOutTransferPacket
slug: Web/API/USBIsochronousOutTransferPacket
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBIsochronousOutTransferPacket`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) ist Teil der Antwort eines Aufrufs der `isochronousTransferOut()`-Methode des `USBDevice`-Interfaces. Es repräsentiert den Status eines einzelnen Pakets aus einer Anfrage, Daten vom USB-Host zu einem USB-Gerät über einen isochronen Endpunkt zu übertragen.

## Konstruktor

- [`USBIsochronousOutTransferPacket()`](/de/docs/Web/API/USBIsochronousOutTransferPacket/USBIsochronousOutTransferPacket) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousOutTransferPacket`-Objekt mit den bereitgestellten Feldern `status` und `bytesWritten`.

## Instanzeigenschaften

- [`USBIsochronousOutTransferPacket.bytesWritten`](/de/docs/Web/API/USBIsochronousOutTransferPacket/bytesWritten) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Bytes zurück, die vom Paket an das Gerät gesendet wurden.
- [`USBIsochronousOutTransferPacket.status`](/de/docs/Web/API/USBIsochronousOutTransferPacket/status) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Status der Übertragungsanfrage zurück, einer von:
    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler angezeigt, indem es eine Stallsituation am Endpunkt generiert hat. Ein Stall auf einem isochronen Endpunkt muss nicht behoben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
