---
title: "BatteryManager: levelchange-Ereignis"
short-title: levelchange
slug: Web/API/BatteryManager/levelchange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Das **`levelchange`**-Ereignis der [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Schnittstelle wird ausgelöst, wenn die Batterieeigenschaft [`level`](/de/docs/Web/API/BatteryManager/level) aktualisiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("levelchange", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onlevelchange = (event) => { }
```

## Ereignistyp

_Ein generisches [`Event`](/de/docs/Web/API/Event)._

## Beispiel

### HTML

```html
<div id="level">(battery level unknown)</div>
<div id="stateBattery">(charging state unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  battery.onlevelchange = () => {
    document.querySelector("#level").textContent = battery.level;

    if (battery.charging) {
      document.querySelector("#stateBattery").textContent = `Charging time: ${
        battery.chargingTime / 60
      }`;
    } else {
      document.querySelector("#stateBattery").textContent =
        `Discharging time: ${battery.dischargingTime / 60}`;
    }
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
