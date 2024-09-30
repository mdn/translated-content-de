---
title: BatteryManager
slug: Web/API/BatteryManager
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Das **`BatteryManager`** Interface der [Battery Status API](/de/docs/Web/API/Battery_Status_API) liefert Informationen über den Ladezustand des Systems. Die Methode [`navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery) gibt ein Promise zurück, das mit einem `BatteryManager`-Interface aufgelöst wird.

Seit Chrome 103 wird das `BatteryManager`-Interface der [Battery Status API](/de/docs/Web/API/Battery_Status_API) nur in einem sicheren Kontext bereitgestellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`BatteryManager.charging`](/de/docs/Web/API/BatteryManager/charging) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der anzeigt, ob der Akku derzeit geladen wird.
- [`BatteryManager.chargingTime`](/de/docs/Web/API/BatteryManager/chargingTime) {{ReadOnlyInline}}
  - : Eine Zahl, die die verbleibende Zeit in Sekunden bis zur vollständigen Aufladung des Akkus darstellt, oder 0, wenn der Akku bereits vollständig geladen ist.
- [`BatteryManager.dischargingTime`](/de/docs/Web/API/BatteryManager/dischargingTime) {{ReadOnlyInline}}
  - : Eine Zahl, die die verbleibende Zeit in Sekunden bis zur vollständigen Entladung des Akkus angibt und das System in den Ruhezustand versetzt.
- [`BatteryManager.level`](/de/docs/Web/API/BatteryManager/level) {{ReadOnlyInline}}
  - : Eine Zahl, die den Ladezustand des Systems auf einen Wert zwischen 0,0 und 1,0 skaliert darstellt.

## Instanzmethoden

_Erbt auch Methoden von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_Erbt auch Ereignisse von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`chargingchange`](/de/docs/Web/API/BatteryManager/chargingchange_event)
  - : Wird ausgelöst, wenn sich der Ladezustand des Akkus (die [`charging`](/de/docs/Web/API/BatteryManager/charging)-Eigenschaft) ändert.
- [`chargingtimechange`](/de/docs/Web/API/BatteryManager/chargingtimechange_event)
  - : Wird ausgelöst, wenn sich die Ladezeit des Akkus (die [`chargingTime`](/de/docs/Web/API/BatteryManager/chargingTime)-Eigenschaft) ändert.
- [`dischargingtimechange`](/de/docs/Web/API/BatteryManager/dischargingtimechange_event)
  - : Wird ausgelöst, wenn sich die Entladezeit des Akkus (die [`dischargingTime`](/de/docs/Web/API/BatteryManager/dischargingTime)-Eigenschaft) ändert.
- [`levelchange`](/de/docs/Web/API/BatteryManager/levelchange_event)
  - : Wird ausgelöst, wenn sich der Akkuladestand (die [`level`](/de/docs/Web/API/BatteryManager/level)-Eigenschaft) ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API)
- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery)
