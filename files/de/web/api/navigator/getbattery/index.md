---
title: "Navigator: getBattery() Methode"
short-title: getBattery()
slug: Web/API/Navigator/getBattery
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die **`getBattery()`** Methode liefert Informationen über den Akkustand des Systems.
Sie gibt ein Battery-Versprechen zurück, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager) Objekt aufgelöst wird, das einige Eigenschaften bereitstellt, um den Akkustatus zu ermitteln, sowie einige Ereignisse, die Sie nutzen können, um den Akkustatus zu überwachen.
Dies implementiert die [Battery Status API](/de/docs/Web/API/Battery_Status_API); für weitere Details, einen Leitfaden zur Verwendung der API und Beispielcode siehe diese Dokumentation.

Seit Chrome 103 wird die `Navigator.getBattery()` Methode der [Battery Status API](/de/docs/Web/API/Battery_Status_API) nur noch in sicheren Kontexten bereitgestellt.

> [!NOTE]
> Der Zugriff auf diese Funktion kann durch die {{HTTPHeader("Permissions-Policy")}} Direktive {{HTTPHeader("Permissions-Policy/battery", "battery")}} gesteuert werden.

## Syntax

```js-nolint
getBattery()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager) Objekt erfüllt wird, das Sie verwenden können, um Informationen über den Zustand des Akkus zu erhalten.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Verwendung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der User Agent gibt keine Akkuinformationen an unsichere Kontexte weiter und diese Methode wurde von einem unsicheren Kontext aus aufgerufen.

## Beispiele

Dieses Beispiel ermittelt den aktuellen Ladezustand des Akkus und definiert einen Handler für das [`chargingchange`](/de/docs/Web/API/BatteryManager/chargingchange_event) Ereignis, sodass der Ladezustand jedes Mal aufgezeichnet wird, wenn er sich ändert.

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
