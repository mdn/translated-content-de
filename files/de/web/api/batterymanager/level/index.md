---
title: "BatteryManager: level-Eigenschaft"
short-title: level
slug: Web/API/BatteryManager/level
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die schreibgeschützte **`level`**-Eigenschaft des [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Interfaces gibt den aktuellen Ladezustand der Batterie als einen Wert zwischen `0.0` und `1.0` an. Ein Wert von `0.0` bedeutet, dass die Batterie leer ist und das System kurz vor dem Aussetzen steht. Ein Wert von `1.0` bedeutet, dass die Batterie voll ist oder der User-Agent nicht in der Lage ist, Informationen zum Batteriestatus zu berichten. Wenn sich ihr Wert ändert, wird das [`levelchange`](/de/docs/Web/API/BatteryManager/levelchange_event)-Ereignis ausgelöst.

## Wert

Eine Zahl.

## Beispiele

### Den Batteriestand abrufen

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

- [`BatteryManager`](/de/docs/Web/API/BatteryManager)
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery)
