---
title: USBOutTransferResult
slug: Web/API/USBOutTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBOutTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der `transferOut()` und `controlTransferOut()`-Methoden des `USBDevice`-Interface. Es stellt das Ergebnis einer Anforderung zur Datenübertragung vom USB-Host zum USB-Gerät dar.

## Konstruktor

- [`USBOutTransferResult()`](/de/docs/Web/API/USBOutTransferResult/USBOutTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBOutTransferResult`-Objekt mit den bereitgestellten Feldern `status` und `bytesWritten`.

## Instanzeigenschaften

- [`USBOutTransferResult.bytesWritten`](/de/docs/Web/API/USBOutTransferResult/bytesWritten) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Bytes aus der Übertragungsanforderung zurück, die an das Gerät gesendet wurden.
- [`USBOutTransferResult.status`](/de/docs/Web/API/USBOutTransferResult/status) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Übertragungsanforderung zurück, einer von:

    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät zeigte einen Fehler an, indem es eine Blockierungsbedingung am Endpunkt generierte. Eine Blockierung an einem Bulk- oder Interrupt-Endpunkt muss durch Aufruf von `clearHalt()` gelöst werden, bevor `transferOut()` erneut aufgerufen werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
