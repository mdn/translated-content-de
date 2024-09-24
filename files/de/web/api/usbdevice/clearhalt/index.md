---
title: "USBDevice: clearHalt()-Methode"
short-title: clearHalt()
slug: Web/API/USBDevice/clearHalt
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`clearHalt()`**-Methode des {{domxref("USBDevice")}}-Interfaces gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn ein Haltezustand behoben ist. Ein Haltezustand tritt auf, wenn ein Datentransfer zu oder von dem Gerät den Status `'stall'` hat, was von der Webseite (dem _Host_-System in der USB-Terminologie) eine Klärung dieses Zustands erfordert. Siehe für Details.

## Syntax

```js-nolint
clearHalt(direction, endpointNumber)
```

### Parameter

- `direction`
  - : Gibt an, ob die Eingabe oder Ausgabe des Geräts gelöscht werden soll. Gültige Werte sind `'in'` oder `'out'`.
- `endpointNumber`
  - : Gibt die Nummer des Endpunkts an, der gelöscht werden soll. Das Promise wird abgelehnt, wenn ein ungültiger Endpunkt angegeben wird.

### Rückgabewert

Ein {{jsxref("promise")}}.

## Beispiele

Das folgende Beispiel zeigt, wie ein `'stall'`-Zustand im Ergebnis eines Datentransfers getestet und behoben wird.

> [!NOTE]
> Welche Daten an ein USB-Gerät übertragen werden können und wie sie übertragen werden, ist speziell und einzigartig für jedes Gerät.

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
