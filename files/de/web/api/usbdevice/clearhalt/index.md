---
title: "USBDevice: clearHalt()-Methode"
short-title: clearHalt()
slug: Web/API/USBDevice/clearHalt
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`clearHalt()`**-Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn eine Halt-Bedingung bereinigt ist. Eine Halt-Bedingung tritt auf, wenn ein Datenübertragungsstatus zu oder von dem Gerät `'stall'` ist, was erfordert, dass die Webseite (das _Host_-System in USB-Terminologie) diese Bedingung bereinigt. Weitere Details sind im Leitfaden zu finden.

## Syntax

```js-nolint
clearHalt(direction, endpointNumber)
```

### Parameter

- `direction`
  - : Gibt an, ob der Eingang oder Ausgang des Geräts bereinigt werden soll. Gültige Werte sind `'in'` oder `'out'`.
- `endpointNumber`
  - : Gibt die Nummer des zu bereinigenden Endpunkts an. Das Versprechen wird abgelehnt, wenn ein ungültiger Endpunkt angegeben wird.

### Rückgabewert

Ein {{jsxref("promise")}}.

## Beispiele

Das folgende Beispiel zeigt, wie eine `'stall'`-Bedingung im Ergebnis einer Datenübertragung getestet und bereinigt wird.

> [!NOTE]
> Welche Daten an ein USB-Gerät übergeben werden können und wie dies geschieht, ist spezifisch und einzigartig für jedes Gerät.

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
