---
title: "BatteryManager: Eigenschaft chargingTime"
short-title: chargingTime
slug: Web/API/BatteryManager/chargingTime
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`chargingTime`** des {{domxref("BatteryManager")}}-Interfaces zeigt die verbleibende Zeit in Sekunden an, bis die Batterie vollständig aufgeladen ist, oder `0`, wenn die Batterie bereits vollständig geladen ist oder der Benutzeragent nicht in der Lage ist, die Batteriestatusinformationen zu melden. Wenn der Akku derzeit entladen wird, ist sein Wert {{jsxref("Infinity")}}. Wenn sich der Wert ändert, wird das {{domxref("BatteryManager/chargingtimechange_event", "chargingtimechange")}}-Ereignis ausgelöst.

> [!NOTE]
> Selbst wenn die zurückgegebene Zeit auf die Sekunde genau ist,
> runden Browser sie aus Datenschutzgründen auf ein höheres Intervall
> (typischerweise auf die nächsten 15 Minuten).

## Wert

Eine Zahl.

## Beispiele

### HTML

```html
<div id="chargingTime">(Ladezeit unbekannt)</div>
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

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
