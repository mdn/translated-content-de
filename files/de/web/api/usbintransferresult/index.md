---
title: USBInTransferResult
slug: Web/API/USBInTransferResult
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBInTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der Methoden `transferIn()` und `controlTransferIn()` des `USBDevice`-Interfaces. Es repräsentiert das Ergebnis einer Anfrage zum Datentransfer vom USB-Gerät zum USB-Host.

## Konstruktor

- [`USBInTransferResult()`](/de/docs/Web/API/USBInTransferResult/USBInTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBInTransferResult`-Objekt mit den bereitgestellten Feldern `status` und `data`.

## Instanz-Eigenschaften

- [`USBInTransferResult.data`](/de/docs/Web/API/USBInTransferResult/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, welches die vom USB-Gerät empfangenen Daten enthält, falls vorhanden.
- [`USBInTransferResult.status`](/de/docs/Web/API/USBInTransferResult/status) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Transferanfrage zurück, einer von:

    - `"ok"` - Der Transfer war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler durch das Erzeugen eines Stall-Zustands am Endpunkt angegeben. Ein Stall am Steuerendpunkt muss nicht behoben werden. Ein Stall an einem Bulk- oder Interrupt-Endpunkt muss durch Aufrufen von `clearHalt()` behoben werden, bevor `transferIn()` erneut aufgerufen werden kann.
    - `"babble"` - Das Gerät hat mit mehr Daten geantwortet als erwartet wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
