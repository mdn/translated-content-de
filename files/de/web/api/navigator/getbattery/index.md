---
title: "Navigator: getBattery() Methode"
short-title: getBattery()
slug: Web/API/Navigator/getBattery
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die **`getBattery()`**-Methode liefert Informationen über den Akku des Systems.
Sie gibt ein Battery Promise zurück, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Objekt aufgelöst wird, das einige Eigenschaften zur Abfrage des Akkustatus sowie einige Ereignisse bereitstellt, die Sie verwenden können, um den Akkustatus zu überwachen.
Dies implementiert die [Battery Status API](/de/docs/Web/API/Battery_Status_API); siehe diese Dokumentation für weitere Details, einen Leitfaden zur Nutzung der API und Beispielcode.

Seit Chrome 103 wird die `Navigator.getBattery()` Methode der [Battery Status API](/de/docs/Web/API/Battery_Status_API) nur in sicheren Kontexten zur Verfügung gestellt.

> [!NOTE]
> Der Zugriff auf diese Funktion kann durch die {{HTTPHeader("Permissions-Policy")}}-Direktive {{HTTPHeader("Permissions-Policy/battery", "battery")}} gesteuert werden.

## Syntax

```js-nolint
getBattery()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, der mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Objekt erfüllt wird, das Sie verwenden können, um Informationen über den Zustand des Akkus zu erhalten.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der User Agent gibt keine Batterieinformationen für unsichere Kontexte preis und diese Methode wurde von einem unsicheren Kontext aus aufgerufen.

## Beispiele

Dieses Beispiel ruft den aktuellen Ladezustand der Batterie ab und richtet einen Handler für das [`chargingchange`](/de/docs/Web/API/BatteryManager/chargingchange_event)-Ereignis ein, sodass der Ladezustand immer dann aufgezeichnet wird, wenn er sich ändert.

```js
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});
```

Für weitere Beispiele und Details siehe [Battery Status API](/de/docs/Web/API/Battery_Status_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
- {{HTTPHeader("Permissions-Policy")}} {{HTTPHeader("Permissions-Policy/battery", "battery")}}-Direktive
