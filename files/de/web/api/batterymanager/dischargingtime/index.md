---
title: "BatteryManager: Eigenschaft dischargingTime"
short-title: dischargingTime
slug: Web/API/BatteryManager/dischargingTime
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`dischargingTime`** des [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Interfaces gibt die verbleibende Zeit in Sekunden an, bis die Batterie vollständig entladen ist, oder {{jsxref("Infinity")}}, wenn die Batterie gerade geladen wird und nicht entladen wird oder der Benutzer-Agent nicht in der Lage ist, die Batterie-Statusinformationen zu melden. Wenn sich ihr Wert ändert, wird das [`dischargingtimechange`](/de/docs/Web/API/BatteryManager/dischargingtimechange_event)-Ereignis ausgelöst.

> [!NOTE]
> Auch wenn die zurückgegebene Zeit auf die Sekunde genau ist, runden Browser diese in ein höheres Intervall (typischerweise auf die nächsten 15 Minuten) aus Datenschutzgründen.

## Wert

Eine Zahl.

## Beispiele

### HTML

```html
<div id="dischargingTime">(discharging time unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const time = battery.dischargingTime;

  document.querySelector("#dischargingTime").textContent =
    `Remaining time to fully discharge the battery: ${time}s`;
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
