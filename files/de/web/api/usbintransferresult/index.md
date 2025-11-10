---
title: USBInTransferResult
slug: Web/API/USBInTransferResult
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBInTransferResult`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der Methoden `transferIn()` und `controlTransferIn()` des `USBDevice`-Interfaces. Es repräsentiert das Ergebnis einer Anfrage zur Datenübertragung vom USB-Gerät zum USB-Host.

## Konstruktor

- [`USBInTransferResult()`](/de/docs/Web/API/USBInTransferResult/USBInTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBInTransferResult`-Objekt mit den bereitgestellten Feldern `status` und `data`.

## Instanz-Eigenschaften

- [`USBInTransferResult.data`](/de/docs/Web/API/USBInTransferResult/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die vom USB-Gerät empfangenen Daten enthält, falls vorhanden.
- [`USBInTransferResult.status`](/de/docs/Web/API/USBInTransferResult/status) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Status der Übertragungsanforderung zurück, einer der folgenden:
    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät gab einen Fehler an, indem es einen Stillstand auf dem Endpunkt erzeugte. Ein Stillstand auf dem Steuerungsendpunkt muss nicht gelöscht werden. Ein Stillstand auf einem Bulk- oder Interrupt-Endpunkt muss durch Aufruf von `clearHalt()` gelöscht werden, bevor `transferIn()` erneut aufgerufen werden kann.
    - `"babble"` - Das Gerät antwortete mit mehr Daten als erwartet wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
