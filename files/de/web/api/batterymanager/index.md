---
title: BatteryManager
slug: Web/API/BatteryManager
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die **`BatteryManager`** Schnittstelle der [Battery Status API](/de/docs/Web/API/Battery_Status_API) bietet Informationen über den Batterieladestand des Systems. Die Methode [`navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery) gibt ein `Promise` zurück, das mit einer `BatteryManager`-Schnittstelle aufgelöst wird.

Seit Chrome 103 wird die `BatteryManager`-Schnittstelle der [Battery Status API](/de/docs/Web/API/Battery_Status_API) nur in sicheren Kontexten angeboten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`BatteryManager.charging`](/de/docs/Web/API/BatteryManager/charging) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Batterie derzeit geladen wird.
- [`BatteryManager.chargingTime`](/de/docs/Web/API/BatteryManager/chargingTime) {{ReadOnlyInline}}
  - : Eine Zahl, die die verbleibende Zeit in Sekunden angibt, bis die Batterie vollständig geladen ist, oder 0, wenn die Batterie bereits vollständig geladen ist.
- [`BatteryManager.dischargingTime`](/de/docs/Web/API/BatteryManager/dischargingTime) {{ReadOnlyInline}}
  - : Eine Zahl, die die verbleibende Zeit in Sekunden angibt, bis die Batterie vollständig entladen ist und das System in den Ruhezustand wechselt.
- [`BatteryManager.level`](/de/docs/Web/API/BatteryManager/level) {{ReadOnlyInline}}
  - : Eine Zahl, die den Batterieladestand des Systems auf einen Wert zwischen 0,0 und 1,0 skaliert darstellt.

## Instanz-Methoden

_Erbt auch Methoden von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Events

_Erbt auch Events von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`chargingchange`](/de/docs/Web/API/BatteryManager/chargingchange_event)
  - : Wird ausgelöst, wenn der Ladezustand der Batterie (die [`charging`](/de/docs/Web/API/BatteryManager/charging)-Eigenschaft) aktualisiert wird.
- [`chargingtimechange`](/de/docs/Web/API/BatteryManager/chargingtimechange_event)
  - : Wird ausgelöst, wenn die Ladezeit der Batterie (die [`chargingTime`](/de/docs/Web/API/BatteryManager/chargingTime)-Eigenschaft) aktualisiert wird.
- [`dischargingtimechange`](/de/docs/Web/API/BatteryManager/dischargingtimechange_event)
  - : Wird ausgelöst, wenn die Entladezeit der Batterie (die [`dischargingTime`](/de/docs/Web/API/BatteryManager/dischargingTime)-Eigenschaft) aktualisiert wird.
- [`levelchange`](/de/docs/Web/API/BatteryManager/levelchange_event)
  - : Wird ausgelöst, wenn der Batterieladestand (die [`level`](/de/docs/Web/API/BatteryManager/level)-Eigenschaft) aktualisiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API)
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery)
