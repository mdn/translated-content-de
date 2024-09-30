---
title: USBInTransferResult
slug: Web/API/USBInTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Das `USBInTransferResult`-Interface der [WebUSB-API](/de/docs/Web/API/WebUSB_API) liefert das Ergebnis eines Aufrufs der Methoden `transferIn()` und `controlTransferIn()` des `USBDevice`-Interfaces. Es repräsentiert das Ergebnis der Anforderung einer Datenübertragung vom USB-Gerät zum USB-Host.

## Konstruktor

- [`USBInTransferResult()`](/de/docs/Web/API/USBInTransferResult/USBInTransferResult) {{Experimental_Inline}}
  - : Erstellt ein neues `USBInTransferResult`-Objekt mit den angegebenen Feldern `status` und `data`.

## Instanzeigenschaften

- [`USBInTransferResult.data`](/de/docs/Web/API/USBInTransferResult/data) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `DataView`-Objekt zurück, das die vom USB-Gerät empfangenen Daten enthält, falls vorhanden.
- [`USBInTransferResult.status`](/de/docs/Web/API/USBInTransferResult/status) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Status der Übertragungsanfrage zurück, einer der folgenden:

    - `"ok"` - Die Übertragung war erfolgreich.
    - `"stall"` - Das Gerät hat einen Fehler angezeigt, indem es eine Stallsituation am Endpunkt erzeugt hat. Ein Stall am Steuerendpunkt muss nicht entfernt werden. Ein Stall an einem Bulk- oder Interrupt-Endpunkt muss durch Aufruf von `clearHalt()` entfernt werden, bevor `transferIn()` erneut aufgerufen werden kann.
    - `"babble"` - Das Gerät hat mehr Daten als erwartet zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
