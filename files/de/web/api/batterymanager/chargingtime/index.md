---
title: "BatteryManager: chargingTime-Eigenschaft"
short-title: chargingTime
slug: Web/API/BatteryManager/chargingTime
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die schreibgeschützte **`chargingTime`**-Eigenschaft des [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Interfaces gibt die Anzahl der Sekunden an, die verbleiben, bis der Akku vollständig geladen ist, oder `0`, wenn der Akku bereits vollständig geladen ist oder der Benutzeragent den Akkustatus nicht melden kann. Wenn der Akku derzeit entladen wird, ist sein Wert {{jsxref("Infinity")}}. Wenn sich der Wert ändert, wird das [`chargingtimechange`](/de/docs/Web/API/BatteryManager/chargingtimechange_event)-Ereignis ausgelöst.

> [!NOTE]
> Auch wenn die zurückgegebene Zeit sekundengenau ist,
> runden Browser sie aus Datenschutzgründen auf ein höheres Intervall
> (typischerweise auf die nächsten 15 Minuten).

## Wert

Eine Zahl.

## Beispiele

### HTML

```html
<div id="chargingTime">(charging time unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const time = battery.chargingTime;

  document.querySelector("#chargingTime").textContent =
    `Time to fully charge the battery: ${time}s`;
});
```

{{ EmbedLiveSample('Examples', '100%', 30) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BatteryManager`](/de/docs/Web/API/BatteryManager)
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery)
