---
title: USBOutTransferResult
slug: Web/API/USBOutTransferResult
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBOutTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis aus einem Aufruf der Methoden `transferOut()` und `controlTransferOut()` des `USBDevice`-Interfaces. Es stellt das Ergebnis eines Antrags auf Datenübertragung vom USB-Host zum USB-Gerät dar.

## Konstruktor

- [`USBOutTransferResult()`](/de/docs/Web/API/USBOutTransferResult/USBOutTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBOutTransferResult`-Objekt mit den bereitgestellten Feldern `status` und `bytesWritten`.

## Instanz-Eigenschaften

- [`USBOutTransferResult.bytesWritten`](/de/docs/Web/API/USBOutTransferResult/bytesWritten) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl von Bytes zurück, die im Übertragungsantrag an das Gerät gesendet wurden.
- [`USBOutTransferResult.status`](/de/docs/Web/API/USBOutTransferResult/status) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Status des Übertragungsantrags zurück, einer von:
    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät hat auf dem Endpunkt einen Fehler angezeigt, indem es eine Stall-Bedingung erzeugt hat. Ein Stall auf einem Bulk- oder Interrupt-Endpunkt muss durch Aufruf von `clearHalt()` beseitigt werden, bevor `transferOut()` erneut aufgerufen werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
