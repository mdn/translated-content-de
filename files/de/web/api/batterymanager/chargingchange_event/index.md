---
title: "BatteryManager: chargingchange-Ereignis"
short-title: chargingchange
slug: Web/API/BatteryManager/chargingchange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Das **`chargingchange`**-Ereignis der [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Schnittstelle wird ausgelöst, wenn die [`charging`](/de/docs/Web/API/BatteryManager/charging)-Eigenschaft der Batterie aktualisiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("chargingchange", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle eine Funktion zuweisen:

```js-nolint
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
