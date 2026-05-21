---
title: "USBDevice: clearHalt() Methode"
short-title: clearHalt()
slug: Web/API/USBDevice/clearHalt
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`clearHalt()`** Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)
Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn eine Blockierung beseitigt wird. Eine Blockierung liegt vor, wenn ein Datentransfer zu oder von dem Gerät den Status `'stall'` hat, was erfordert, dass die Webseite (das _Host_-System, in USB-Terminologie) diesen Zustand beseitigt. Weitere Details finden Sie in der Beschreibung.

## Syntax

```js-nolint
clearHalt(direction, endpointNumber)
```

### Parameter

- `direction`
  - : Gibt an, ob die Eingabe oder Ausgabe des Geräts gelöscht werden soll. Gültige Werte
    sind `'in'` oder `'out'`.
- `endpointNumber`
  - : Gibt die Nummer des Endpunkts an, der gelöscht werden soll. Das Versprechen wird abgewiesen, wenn ein ungültiger Endpunkt angegeben wird.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Beispiele

Das folgende Beispiel zeigt, wie man eine `'stall'` Bedingung im Ergebnis eines Datentransfers testet und beseitigt.

> [!NOTE]
> Welche Daten an ein USB-Gerät übertragen werden können und wie dies geschieht, ist spezifisch und einzigartig für jedes Gerät.

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
