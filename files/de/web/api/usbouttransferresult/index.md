---
title: USBOutTransferResult
slug: Web/API/USBOutTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die `USBOutTransferResult`-Schnittstelle des [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der `transferOut()`- und `controlTransferOut()`-Methoden der `USBDevice`-Schnittstelle. Sie repräsentiert das Ergebnis einer Anfrage zur Übertragung von Daten vom USB-Host an das USB-Gerät.

## Konstruktor

- [`USBOutTransferResult()`](/de/docs/Web/API/USBOutTransferResult/USBOutTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBOutTransferResult`-Objekt mit den bereitgestellten Feldern `status` und `bytesWritten`.

## Instanz-Eigenschaften

- [`USBOutTransferResult.bytesWritten`](/de/docs/Web/API/USBOutTransferResult/bytesWritten) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Bytes zurück, die bei der Übertragungsanforderung an das Gerät gesendet wurden.
- [`USBOutTransferResult.status`](/de/docs/Web/API/USBOutTransferResult/status) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Übertragungsanforderung zurück, einer von:

    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät meldete einen Fehler, indem es eine Stall-Bedingung am Endpunkt erzeugte. Ein Stall an einem Bulk- oder Interrupt-Endpunkt muss durch Aufruf von `clearHalt()` aufgehoben werden, bevor `transferOut()` erneut aufgerufen werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
