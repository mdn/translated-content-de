---
title: "USBDevice: clearHalt() Methode"
short-title: clearHalt()
slug: Web/API/USBDevice/clearHalt
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`clearHalt()`** Methode der [`USBDevice`](/de/docs/Web/API/USBDevice) Schnittstelle gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn eine Halt-Bedingung gelöscht wird. Eine Halt-Bedingung tritt auf, wenn ein Datentransfer zum oder vom Gerät den Status `'stall'` hat, was es erforderlich macht, dass die Webseite (das _Host_-System, in der USB-Terminologie) diese Bedingung aufhebt. Siehe die Details.

## Syntax

```js-nolint
clearHalt(direction, endpointNumber)
```

### Parameter

- `direction`
  - : Gibt an, ob die Eingabe oder Ausgabe des Geräts gelöscht werden soll. Gültige Werte sind `'in'` oder `'out'`.
- `endpointNumber`
  - : Gibt die Nummer des Endpunkts an, der gelöscht werden soll. Das Versprechen wird abgelehnt, wenn ein ungültiger Endpunkt angegeben wird.

### Rückgabewert

Ein {{jsxref("promise")}}.

## Beispiele

Das folgende Beispiel zeigt, wie man eine `'stall'` Bedingung im Ergebnis eines Datentransfers testet und löscht.

> [!NOTE]
> Welche Daten an ein USB-Gerät übermittelt werden können und wie sie übermittelt werden, ist spezifisch und einzigartig für jedes Gerät.

```js
while (true) {
  let result = await data.transferIn(1, 6);

  if (result.data && result.data.byteLength === 6) {
    console.log(`Channel 1: ${result.data.getUint16(0)}`);
    console.log(`Channel 2: ${result.data.getUint16(2)}`);
    console.log(`Channel 5: ${result.data.getUint16(4)}`);
  }

  if (result.status === "stall") {
    console.warn("Endpoint stalled. Clearing.");
    await device.clearHalt("in", 1);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
