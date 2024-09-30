---
title: USBIsochronousOutTransferPacket
slug: Web/API/USBIsochronousOutTransferPacket
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBIsochronousOutTransferPacket`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) ist Teil der Antwort auf einen Aufruf der Methode `isochronousTransferOut()` des `USBDevice`-Interfaces. Es repräsentiert den Status eines einzelnen Pakets aus einer Anfrage, um Daten vom USB-Host an das USB-Gerät über einen isochronen Endpunkt zu übertragen.

## Konstruktor

- [`USBIsochronousOutTransferPacket()`](/de/docs/Web/API/USBIsochronousOutTransferPacket/USBIsochronousOutTransferPacket) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousOutTransferPacket`-Objekt mit den bereitgestellten Feldern `status` und `bytesWritten`.

## Instanzeigenschaften

- [`USBIsochronousOutTransferPacket.bytesWritten`](/de/docs/Web/API/USBIsochronousOutTransferPacket/bytesWritten) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Bytes aus dem Paket zurück, die an das Gerät gesendet wurden.
- [`USBIsochronousOutTransferPacket.status`](/de/docs/Web/API/USBIsochronousOutTransferPacket/status) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Übertragungsanfrage zurück, einer der folgenden:

    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler angezeigt, indem es eine Stall-Bedingung am Endpunkt erzeugte. Ein Stall an einem isochronen Endpunkt muss nicht geklärt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
