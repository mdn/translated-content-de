---
title: USBIsochronousOutTransferPacket
slug: Web/API/USBIsochronousOutTransferPacket
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBIsochronousOutTransferPacket`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) ist Teil der Antwort auf einen Aufruf der `isochronousTransferOut()`-Methode des `USBDevice`-Interfaces. Es repräsentiert den Status eines einzelnen Pakets aus einer Anforderung zum Übertragen von Daten vom USB-Host zum USB-Gerät über ein isochrones Endpunkt.

## Konstruktor

- {{domxref("USBIsochronousOutTransferPacket.USBIsochronousOutTransferPacket", "USBIsochronousOutTransferPacket()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousOutTransferPacket`-Objekt mit den bereitgestellten Feldern `status` und `bytesWritten`.

## Instanzeigenschaften

- {{domxref("USBIsochronousOutTransferPacket.bytesWritten")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Bytes aus dem Paket zurück, die an das Gerät gesendet wurden.
- {{domxref("USBIsochronousOutTransferPacket.status")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status des Übertragungsanforderung zurück, einer der folgenden:

    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler angezeigt, indem es eine Stall-Bedingung am Endpunkt generiert hat. Ein Stall an einem isochnen Endpunkt muss nicht behoben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
