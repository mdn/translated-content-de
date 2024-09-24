---
title: BatteryManager
slug: Web/API/BatteryManager
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Das **`BatteryManager`** Interface der {{domxref("Battery Status API", "", "", "nocode")}} bietet Informationen über den Ladezustand der Systembatterie. Die Methode {{domxref("navigator.getBattery()")}} gibt ein Versprechen zurück, das mit einem `BatteryManager` Interface aufgelöst wird.

Seit Chrome 103 wird das `BatteryManager` Interface der {{domxref("Battery Status API", "", "", "nocode")}} nur in einem sicheren Kontext bereitgestellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, {{domxref("EventTarget")}}._

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob die Batterie derzeit geladen wird.
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die verbleibende Zeit in Sekunden angibt, bis die Batterie vollständig geladen ist, oder 0, wenn die Batterie bereits vollständig geladen ist.
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die verbleibende Zeit in Sekunden angibt, bis die Batterie vollständig entladen ist und das System in den Ruhezustand versetzt wird.
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Ladezustand der Systembatterie angibt, skaliert auf einen Wert zwischen 0,0 und 1,0.

## Instanzmethoden

_Erbt auch Methoden von seinem Eltern-Interface, {{domxref("EventTarget")}}._

## Ereignisse

_Erbt auch Ereignisse von seinem Eltern-Interface, {{domxref("EventTarget")}}._

- {{domxref("BatteryManager/chargingchange_event", "chargingchange")}}
  - : Wird ausgelöst, wenn der Ladezustand der Batterie (die {{domxref("BatteryManager.charging", "charging")}} Eigenschaft) aktualisiert wird.
- {{domxref("BatteryManager/chargingtimechange_event", "chargingtimechange")}}
  - : Wird ausgelöst, wenn die Ladezeit der Batterie (die {{domxref("BatteryManager.chargingTime", "chargingTime")}} Eigenschaft) aktualisiert wird.
- {{domxref("BatteryManager/dischargingtimechange_event", "dischargingtimechange")}}
  - : Wird ausgelöst, wenn die Entladezeit der Batterie (die {{domxref("BatteryManager.dischargingTime", "dischargingTime")}} Eigenschaft) aktualisiert wird.
- {{domxref("BatteryManager/levelchange_event", "levelchange")}}
  - : Wird ausgelöst, wenn der Ladezustand der Batterie (die {{domxref("BatteryManager.level", "level")}} Eigenschaft) aktualisiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("Battery Status API", "", "", "nocode")}}
- {{domxref("Navigator.getBattery()")}}
