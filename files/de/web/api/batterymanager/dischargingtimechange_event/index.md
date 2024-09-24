---
title: "BatteryManager: dischargingtimechange-Ereignis"
short-title: dischargingtimechange
slug: Web/API/BatteryManager/dischargingtimechange_event
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Das **`dischargingtimechange`**-Ereignis der {{domxref("BatteryManager")}}-Schnittstelle wird ausgelöst, wenn die {{domxref("BatteryManager.dischargingTime", "dischargingTime")}}-Eigenschaft des Akkus aktualisiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js-nolint
addEventListener("dischargingtimechange", (event) => { })

ondischargingtimechange = (event) => { }
```

## Ereignistyp

_Ein generisches {{domxref("Event")}}._

## Beispiel

### HTML

```html
<div id="level">(Akkustand unbekannt)</div>
<div id="chargingTime">(Ladezeit unbekannt)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  battery.ondischargingtimechange = () => {
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
