---
title: "BatteryManager: chargingchange-Ereignis"
short-title: chargingchange
slug: Web/API/BatteryManager/chargingchange_event
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Das **`chargingchange`**-Ereignis der {{domxref("BatteryManager")}}-Schnittstelle wird ausgelöst, wenn die {{domxref("BatteryManager.charging", "charging")}}-Eigenschaft der Batterie aktualisiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("chargingchange", (event) => { })

onchargingchange = (event) => { }
```

## Ereignistyp

_Ein generisches {{domxref("Event")}}._

## Beispiel

### HTML

```html
<div id="level">(Batteriestand unbekannt)</div>
<div id="chargingTime">(Ladezeit unbekannt)</div>
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

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
