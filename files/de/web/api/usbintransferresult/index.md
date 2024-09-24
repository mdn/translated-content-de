---
title: USBInTransferResult
slug: Web/API/USBInTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBInTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der `transferIn()`- und `controlTransferIn()`-Methoden des `USBDevice`-Interfaces. Es repräsentiert das Ergebnis einer Anfrage für die Datenübertragung vom USB-Gerät zum USB-Host.

## Konstruktor

- {{domxref("USBInTransferResult.USBInTransferResult", "USBInTransferResult()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `USBInTransferResult`-Objekt mit den bereitgestellten Feldern `status` und `data`.

## Instanz-Eigenschaften

- {{domxref("USBInTransferResult.data")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die vom USB-Gerät empfangenen Daten enthält, falls vorhanden.
- {{domxref("USBInTransferResult.status")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Übertragungsanforderung zurück, einer von:

    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät zeigte einen Fehler an, indem es eine Stall-Bedingung am Endpunkt erzeugte. Ein Stall am Steuerendpunkt muss nicht aufgehoben werden. Ein Stall an einem Bulk- oder Interrupt-Endpunkt muss durch Aufrufen von `clearHalt()` aufgehoben werden, bevor `transferIn()` erneut aufgerufen werden kann.
    - `"babble"` - Das Gerät hat mit mehr Daten geantwortet, als erwartet wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
