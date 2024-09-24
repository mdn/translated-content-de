---
title: "BatteryManager: levelchange-Ereignis"
short-title: levelchange
slug: Web/API/BatteryManager/levelchange_event
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Das **`levelchange`**-Ereignis der {{domxref("BatteryManager")}}-Schnittstelle wird ausgelöst, wenn die {{domxref("BatteryManager.level", "level")}}-Eigenschaft des Akkus aktualisiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("levelchange", (event) => { })

onlevelchange = (event) => { }
```

## Ereignistyp

_Ein generisches {{domxref("Event")}}._

## Beispiel

### HTML

```html
<div id="level">(Akkustand unbekannt)</div>
<div id="stateBattery">(Ladezustand unbekannt)</div>
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

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
