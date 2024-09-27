---
title: USBIsochronousInTransferPacket
slug: Web/API/USBIsochronousInTransferPacket
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBIsochronousInTransferPacket`-Interface der [WebUSB-API](/de/docs/Web/API/WebUSB_API) ist Teil der Antwort auf einen Aufruf der Methode `isochronousTransferIn()` des `USBDevice`-Interfaces. Es repräsentiert den Status eines einzelnen Pakets aus einer Anfrage zum Übertragen von Daten vom USB-Gerät zum USB-Host über einen isochronen Endpunkt.

## Konstruktor

- [`USBIsochronousInTransferPacket()`](/de/docs/Web/API/USBIsochronousInTransferPacket/USBIsochronousInTransferPacket) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousInTransferPacket`-Objekt mit den bereitgestellten `status`- und `data`-Feldern.

## Instanzeigenschaften

- [`USBIsochronousInTransferPacket.data`](/de/docs/Web/API/USBIsochronousInTransferPacket/data) {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die in diesem Paket vom USB-Gerät empfangenen Daten enthält, falls vorhanden.
- [`USBIsochronousInTransferPacket.status`](/de/docs/Web/API/USBIsochronousInTransferPacket/status) {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Transferanfrage zurück, einer von:

    - `"ok"` - Der Transfer war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler angezeigt, indem es eine Blockierbedingung am Endpunkt erzeugt hat. Eine Blockierung an einem isochronen Endpunkt muss nicht entfernt werden.
    - `"babble"` - Das Gerät hat mit mehr Daten geantwortet, als erwartet wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
