---
title: USBIsochronousInTransferPacket
slug: Web/API/USBIsochronousInTransferPacket
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBIsochronousInTransferPacket`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) ist Teil der Antwort auf einen Aufruf der `isochronousTransferIn()`-Methode des `USBDevice`-Interfaces. Es repräsentiert den Status eines einzelnen Pakets aus einer Anfrage, um Daten vom USB-Gerät zum USB-Host über einen isochronen Endpunkt zu übertragen.

## Konstruktor

- [`USBIsochronousInTransferPacket()`](/de/docs/Web/API/USBIsochronousInTransferPacket/USBIsochronousInTransferPacket) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousInTransferPacket`-Objekt mit den bereitgestellten Feldern `status` und `data`.

## Instanz-Eigenschaften

- [`USBIsochronousInTransferPacket.data`](/de/docs/Web/API/USBIsochronousInTransferPacket/data) {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die in diesem Paket vom USB-Gerät empfangenen Daten enthält, falls vorhanden.
- [`USBIsochronousInTransferPacket.status`](/de/docs/Web/API/USBIsochronousInTransferPacket/status) {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Transferanfrage zurück, einer von:

    - `"ok"` - Der Transfer war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler angezeigt, indem es eine Stall-Bedingung am Endpunkt erzeugte. Ein Stall auf einem isochronen Endpunkt muss nicht bereinigt werden.
    - `"babble"` - Das Gerät hat mit mehr Daten geantwortet als erwartet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
