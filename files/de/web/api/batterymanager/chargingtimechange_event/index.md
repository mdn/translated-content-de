---
title: "BatteryManager: chargingtimechange Ereignis"
short-title: chargingtimechange
slug: Web/API/BatteryManager/chargingtimechange_event
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Das **`chargingtimechange`** Ereignis des {{domxref("BatteryManager")}} Interfaces wird ausgelöst, wenn die {{domxref("BatteryManager.chargingTime", "chargingTime")}} Eigenschaft der Batterie aktualisiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("chargingtimechange", (event) => { })

onchargingtimechange = (event) => { }
```

## Ereignistyp

_Ein generisches {{domxref("Event")}}._

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

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
