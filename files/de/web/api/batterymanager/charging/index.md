---
title: "BatteryManager: Eigenschaft charging"
short-title: charging
slug: Web/API/BatteryManager/charging
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`charging`** des [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Interfaces ist ein Boolescher Wert, der angibt, ob der Akku des Geräts momentan geladen wird oder nicht. Wenn sich der Wert ändert, wird das [`chargingchange`](/de/docs/Web/API/BatteryManager/chargingchange_event)-Ereignis ausgelöst.

Wenn der Akku geladen wird oder der Benutzeragent den Akkustatus nicht melden kann, ist dieser Wert `true`. Andernfalls ist er `false`.

## Wert

Ein boolescher Wert.

## Beispiele

### HTML

```html
<div id="charging">(charging state unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const charging = battery.charging;

  document.querySelector("#charging").textContent = charging;
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
