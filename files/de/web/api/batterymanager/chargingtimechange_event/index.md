---
title: "BatteryManager: chargingtimechange-Ereignis"
short-title: chargingtimechange
slug: Web/API/BatteryManager/chargingtimechange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Das Ereignis **`chargingtimechange`** der Schnittstelle [`BatteryManager`](/de/docs/Web/API/BatteryManager) wird ausgelöst, wenn die Eigenschaft [`chargingTime`](/de/docs/Web/API/BatteryManager/chargingTime) des Akkus aktualisiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("chargingtimechange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onchargingtimechange = (event) => { }
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
  battery.onchargingtimechange = () => {
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
