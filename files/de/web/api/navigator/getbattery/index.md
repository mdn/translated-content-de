---
title: "Navigator: getBattery() Methode"
short-title: getBattery()
slug: Web/API/Navigator/getBattery
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die **`getBattery()`** Methode liefert Informationen über den Batteriezustand des Systems.
Sie gibt ein Batterie-Versprechen zurück, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager) Objekt auflöst, welches einige Eigenschaften bereitstellt, um den Batteriestatus zu ermitteln, und einige Ereignisse, die Sie abhandeln können, um den Batteriestatus zu überwachen.
Dies implementiert die [Battery Status API](/de/docs/Web/API/Battery_Status_API); siehe diese Dokumentation für zusätzliche Details, einen Leitfaden zur Verwendung der API und Beispielcode.

Seit Chrome 103 wird die `Navigator.getBattery()` Methode der [Battery Status API](/de/docs/Web/API/Battery_Status_API) nur in sicheren Kontexten zur Verfügung gestellt.

> [!NOTE]
> Der Zugriff auf diese Funktion kann durch die {{HTTPHeader("Permissions-Policy")}} Direktive {{HTTPHeader("Permissions-Policy/battery", "battery")}} gesteuert werden.

## Syntax

```js-nolint
getBattery()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager) Objekt erfüllt wird, welches zur Abfrage des Batterie-Zustandes verwendet werden kann.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Benutzeragent stellt keine Batterieinformationen in unsicheren Kontexten zur Verfügung, und diese Methode wurde aus einem unsicheren Kontext aufgerufen.

## Beispiele

Dieses Beispiel ermittelt den aktuellen Ladezustand der Batterie und richtet einen Handler für das [`chargingchange`](/de/docs/Web/API/BatteryManager/chargingchange_event) Ereignis ein, sodass der Ladezustand immer dann erfasst wird, wenn er sich ändert.

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
- {{HTTPHeader("Permissions-Policy")}} {{HTTPHeader("Permissions-Policy/battery", "battery")}} Direktive
