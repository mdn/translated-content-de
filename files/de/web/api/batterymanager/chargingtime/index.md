---
title: "BatteryManager: chargingTime Eigenschaft"
short-title: chargingTime
slug: Web/API/BatteryManager/chargingTime
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die schreibgeschützte **`chargingTime`**-Eigenschaft des [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Interfaces zeigt die verbleibende Zeit in Sekunden an, bis der Akku vollständig aufgeladen ist, oder `0`, wenn der Akku bereits vollständig geladen ist oder der User-Agent nicht in der Lage ist, Informationen über den Batteriestatus zu melden.
Wenn der Akku derzeit entladen wird, ist sein Wert {{jsxref("Infinity")}}.
Wenn sich dieser Wert ändert, wird das [`chargingtimechange`](/de/docs/Web/API/BatteryManager/chargingtimechange_event)-Ereignis ausgelöst.

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
