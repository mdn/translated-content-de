---
title: USBIsochronousInTransferPacket
slug: Web/API/USBIsochronousInTransferPacket
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBIsochronousInTransferPacket` Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) ist Teil der Antwort auf einen Aufruf der `isochronousTransferIn()` Methode des `USBDevice` Interfaces. Es repräsentiert den Status eines einzelnen Pakets von einer Anfrage zum Datenübertragung vom USB-Gerät zum USB-Host über einen isochronen Endpunkt.

## Konstruktor

- [`USBIsochronousInTransferPacket()`](/de/docs/Web/API/USBIsochronousInTransferPacket/USBIsochronousInTransferPacket) {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousInTransferPacket` Objekt mit den bereitgestellten `status` und `data` Feldern.

## Instanzeigenschaften

- [`USBIsochronousInTransferPacket.data`](/de/docs/Web/API/USBIsochronousInTransferPacket/data) {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView` Objekt zurück, das die vom USB-Gerät in diesem Paket empfangenen Daten enthält, falls vorhanden.
- [`USBIsochronousInTransferPacket.status`](/de/docs/Web/API/USBIsochronousInTransferPacket/status) {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Status der Übertragungsanforderung zurück, einer der folgenden:
    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät meldete einen Fehler durch Erzeugung eines Stall-Zustands am Endpunkt. Ein Stall an einem isochronen Endpunkt muss nicht behoben werden.
    - `"babble"` - Das Gerät hat mit mehr Daten geantwortet als erwartet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
