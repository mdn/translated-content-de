---
title: "BatteryManager: level-Eigenschaft"
short-title: level
slug: Web/API/BatteryManager/level
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die schreibgeschützte **`level`**-Eigenschaft des {{domxref("BatteryManager")}}-Interfaces gibt den aktuellen Ladestand des Akkus als einen Wert zwischen `0.0` und `1.0` an.
Ein Wert von `0.0` bedeutet, dass der Akku leer ist und das System kurz davor steht, in den Energiesparmodus zu wechseln.
Ein Wert von `1.0` bedeutet, dass der Akku voll ist oder der Benutzeragent nicht in der Lage ist, den Akkustatus anzugeben.
Wenn sich der Wert ändert, wird das {{domxref("BatteryManager/levelchange_event", "levelchange")}}-Ereignis ausgelöst.

## Wert

Eine Zahl.

## Beispiele

### Abrufen des Akkustands

#### HTML

```html
<button id="get-level">Get battery level</button>
<div id="output"></div>
```

#### JavaScript

```js
const getLevel = document.querySelector("#get-level");
const output = document.querySelector("#output");

getLevel.addEventListener("click", async () => {
  if (!navigator.getBattery) {
    output.textContent = "Battery manager is unsupported";
  } else {
    const manager = await navigator.getBattery();
    const level = manager.level;
    output.textContent = `Battery level: ${level}`;
  }
});
```

#### Ergebnis

{{ EmbedLiveSample('Getting the battery level') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
