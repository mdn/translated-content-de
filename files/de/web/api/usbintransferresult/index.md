---
title: USBInTransferResult
slug: Web/API/USBInTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBInTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet das Ergebnis eines Aufrufs der Methoden `transferIn()` und `controlTransferIn()` des `USBDevice`-Interfaces. Es repräsentiert das Ergebnis der Anforderung eines Datentransfers vom USB-Gerät zum USB-Host.

## Konstruktor

- [`USBInTransferResult()`](/de/docs/Web/API/USBInTransferResult/USBInTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBInTransferResult`-Objekt mit den bereitgestellten Feldern `status` und `data`.

## Instanz-Eigenschaften

- [`USBInTransferResult.data`](/de/docs/Web/API/USBInTransferResult/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die vom USB-Gerät empfangenen Daten enthält, falls vorhanden.
- [`USBInTransferResult.status`](/de/docs/Web/API/USBInTransferResult/status) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Transferanforderung zurück, einer von:

    - `"ok"` - Der Transfer war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler angezeigt, indem es eine Stall-Bedingung am Endpunkt erzeugt hat. Ein Stall am Steuerendpunkt muss nicht beseitigt werden. Ein Stall an einem Bulk- oder Interrupt-Endpunkt muss durch Aufruf von `clearHalt()` beseitigt werden, bevor `transferIn()` erneut aufgerufen werden kann.
    - `"babble"` - Das Gerät hat mit mehr Daten als erwartet geantwortet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
