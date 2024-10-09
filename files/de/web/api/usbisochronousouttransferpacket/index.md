---
title: USBIsochronousOutTransferPacket
slug: Web/API/USBIsochronousOutTransferPacket
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `USBIsochronousOutTransferPacket`-Schnittstelle der [WebUSB API](/de/docs/Web/API/WebUSB_API) ist Teil der Antwort von einem Aufruf der `isochronousTransferOut()`-Methode der `USBDevice`-Schnittstelle. Sie repräsentiert den Status eines einzelnen Pakets aus einer Anforderung, Daten vom USB-Host zu einem USB-Gerät über einen Isochronen-Endpunkt zu übertragen.

## Konstruktor

- [`USBIsochronousOutTransferPacket()`](/de/docs/Web/API/USBIsochronousOutTransferPacket/USBIsochronousOutTransferPacket) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousOutTransferPacket`-Objekt mit den bereitgestellten Feldern `status` und `bytesWritten`.

## Instanzeigenschaften

- [`USBIsochronousOutTransferPacket.bytesWritten`](/de/docs/Web/API/USBIsochronousOutTransferPacket/bytesWritten) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Bytes aus dem Paket zurück, die an das Gerät gesendet wurden.
- [`USBIsochronousOutTransferPacket.status`](/de/docs/Web/API/USBIsochronousOutTransferPacket/status) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Transferanfrage zurück, eine der folgenden Optionen:

    - `"ok"` - Der Transfer war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler angezeigt, indem es eine Stallsituation auf dem Endpunkt erzeugt hat. Ein Stall auf einem Isochronen-Endpunkt muss nicht behoben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
