---
title: "BatteryManager: chargingchange-Ereignis"
short-title: chargingchange
slug: Web/API/BatteryManager/chargingchange_event
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Das **`chargingchange`**-Ereignis der [`BatteryManager`](/de/docs/Web/API/BatteryManager) Schnittstelle wird ausgelöst, wenn die Batterie-Eigenschaft [`charging`](/de/docs/Web/API/BatteryManager/charging) aktualisiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("chargingchange", (event) => { })

onchargingchange = (event) => { }
```

## Ereignistyp

_Ein generisches [`Event`](/de/docs/Web/API/Event)._

## Beispiel

### HTML

```html
<div id="level">(battery level unknown)</div>
<div id="chargingTime">(charging time unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  battery.onchargingchange = () => {
    document.querySelector("#level").textContent = battery.level;
    document.querySelector("#chargingTime").textContent = battery.chargingTime;
  };
});
```

{{ EmbedLiveSample('Example', '100%', 40) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BatteryManager`](/de/docs/Web/API/BatteryManager)
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery)
