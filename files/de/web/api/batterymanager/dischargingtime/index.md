---
title: "BatteryManager: Eigenschaft dischargingTime"
short-title: dischargingTime
slug: Web/API/BatteryManager/dischargingTime
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die **`dischargingTime`**-Eigenschaft des {{domxref("BatteryManager")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die die verbleibende Zeit in Sekunden anzeigt, bis der Akku vollständig entladen ist, oder {{jsxref("Infinity")}}, wenn der Akku aktuell geladen wird, anstatt entladen zu werden, oder wenn der User-Agent nicht in der Lage ist, die Akku-Statusinformationen zu melden. Wenn sich der Wert ändert, wird das {{domxref("BatteryManager/dischargingtimechange_event", "dischargingtimechange")}}-Ereignis ausgelöst.

> [!NOTE]
> Auch wenn die zurückgegebene Zeit auf die Sekunde genau ist, runden Browser diese auf ein höheres
> Intervall (in der Regel auf die nächsten 15 Minuten) aus Datenschutzgründen.

## Wert

Eine Zahl.

## Beispiele

### HTML

```html
<div id="dischargingTime">(Entladezeit unbekannt)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const time = battery.dischargingTime;

  document.querySelector("#dischargingTime").textContent =
    `Verbleibende Zeit bis zur vollständigen Entladung des Akkus: ${time}s`;
});
```

{{ EmbedLiveSample('Examples', '100%', 30) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
