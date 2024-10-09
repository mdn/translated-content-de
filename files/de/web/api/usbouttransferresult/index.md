---
title: USBOutTransferResult
slug: Web/API/USBOutTransferResult
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBOutTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der Methoden `transferOut()` und `controlTransferOut()` des `USBDevice`-Interfaces. Es repräsentiert das Ergebnis der Anforderung eines Datenübertrags vom USB-Host zum USB-Gerät.

## Konstruktor

- [`USBOutTransferResult()`](/de/docs/Web/API/USBOutTransferResult/USBOutTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBOutTransferResult`-Objekt mit den angegebenen Feldern `status` und `bytesWritten`.

## Instanz-Eigenschaften

- [`USBOutTransferResult.bytesWritten`](/de/docs/Web/API/USBOutTransferResult/bytesWritten) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Bytes zurück, die aus der Übertragungsanforderung an das Gerät gesendet wurden.
- [`USBOutTransferResult.status`](/de/docs/Web/API/USBOutTransferResult/status) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Übertragungsanforderung zurück, einer von:

    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler angezeigt, indem es eine Stall-Bedingung am Endpunkt erzeugt hat. Ein Stall an einem Bulk- oder Interrupt-Endpunkt muss durch einen Aufruf von `clearHalt()` aufgehoben werden, bevor `transferOut()` erneut aufgerufen werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
