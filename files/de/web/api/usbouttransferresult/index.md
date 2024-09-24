---
title: USBOutTransferResult
slug: Web/API/USBOutTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die Schnittstelle `USBOutTransferResult` der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der Methoden `transferOut()` und `controlTransferOut()` der `USBDevice`-Schnittstelle. Sie repräsentiert das Ergebnis der Anfrage, Daten vom USB-Host an das USB-Gerät zu übertragen.

## Konstruktor

- {{domxref("USBOutTransferResult.USBOutTransferResult", "USBOutTransferResult()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `USBOutTransferResult`-Objekt mit den angegebenen Feldern `status` und `bytesWritten`.

## Instanzeigenschaften

- {{domxref("USBOutTransferResult.bytesWritten")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Bytes zurück, die im Rahmen der Transferanfrage an das Gerät gesendet wurden.
- {{domxref("USBOutTransferResult.status")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Transferanfrage zurück, einer von:

    - `"ok"` - Der Transfer war erfolgreich.
    - `"stall"` - Das Gerät signalisierte einen Fehler, indem es eine Stall-Bedingung am Endpunkt erzeugte. Ein Stall an einem Bulk- oder Interrupt-Endpunkt muss durch Aufruf von `clearHalt()` entfernt werden, bevor `transferOut()` erneut aufgerufen werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
