---
title: "BatteryManager: charging-Eigenschaft"
short-title: charging
slug: Web/API/BatteryManager/charging
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die schreibgeschützte **`charging`**-Eigenschaft der {{domxref("BatteryManager")}}-Schnittstelle ist ein Boolean-Wert, der angibt, ob der Akku des Geräts derzeit geladen wird oder nicht. Wenn sich der Wert ändert, wird das {{domxref("BatteryManager/chargingchange_event", "chargingchange")}}-Ereignis ausgelöst.

Wenn der Akku geladen wird oder der Benutzeragent den Akkustatus nicht melden kann, ist dieser Wert `true`. Andernfalls ist er `false`.

## Wert

Ein Boolean.

## Beispiele

### HTML

```html
<div id="charging">(Ladestatus unbekannt)</div>
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

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
