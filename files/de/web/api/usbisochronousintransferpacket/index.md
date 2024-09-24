---
title: USBIsochronousInTransferPacket
slug: Web/API/USBIsochronousInTransferPacket
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBIsochronousInTransferPacket`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) ist Teil der Antwort eines Aufrufs der `isochronousTransferIn()`-Methode des `USBDevice`-Interfaces. Es repräsentiert den Status eines einzelnen Pakets aus einem Anforderungsvorgang zum Übertragen von Daten vom USB-Gerät zum USB-Host über einen isochronen Endpunkt.

## Konstruktor

- {{domxref("USBIsochronousInTransferPacket.USBIsochronousInTransferPacket", "USBIsochronousInTransferPacket()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `USBIsochronousInTransferPacket`-Objekt mit den bereitgestellten `status`- und `data`-Feldern.

## Instanz-Eigenschaften

- {{domxref("USBIsochronousInTransferPacket.data")}} {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die vom USB-Gerät empfangenen Daten in diesem Paket enthält, falls vorhanden.
- {{domxref("USBIsochronousInTransferPacket.status")}} {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Übertragungsanforderung zurück, einer der folgenden:

    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler angezeigt, indem es eine Stallsituation am Endpunkt erzeugt hat. Ein Stall bei einem isochronen Endpunkt muss nicht behoben werden.
    - `"babble"` - Das Gerät hat mit mehr Daten geantwortet, als erwartet wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
