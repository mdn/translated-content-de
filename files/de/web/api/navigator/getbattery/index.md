---
title: "Navigator: getBattery() Methode"
short-title: getBattery()
slug: Web/API/Navigator/getBattery
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die **`getBattery()`** Methode liefert Informationen über die Batterie des Systems. Sie gibt ein Batterie-Promise zurück, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager) Objekt aufgelöst wird. Dieses Objekt bietet einige Eigenschaften, um den Batteriestatus abzurufen, sowie einige Ereignisse, die Sie handhaben können, um den Batteriestatus zu überwachen. Dies implementiert die [Battery Status API](/de/docs/Web/API/Battery_Status_API); sehen Sie in dieser Dokumentation für weitere Details, einen Leitfaden zur Verwendung der API und Beispielcode nach.

Seit Chrome 103 wird die `Navigator.getBattery()` Methode der [Battery Status API](/de/docs/Web/API/Battery_Status_API) nur in sicheren Kontexten zur Verfügung gestellt.

> [!NOTE]
> Der Zugriff auf diese Funktion kann durch die {{HTTPHeader("Permissions-Policy")}} Direktive {{HTTPHeader("Permissions-Policy/battery", "battery")}} kontrolliert werden.

## Syntax

```js-nolint
getBattery()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager) Objekt erfüllt wird, das Sie verwenden können, um Informationen über den Zustand der Batterie zu erhalten.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der User-Agent gibt keine Batterieinformationen an unsichere Kontexte weiter und diese Methode wurde von einem unsicheren Kontext aus aufgerufen.

## Beispiele

Dieses Beispiel ruft den aktuellen Ladevorgang der Batterie ab und richtet einen Handler für das [`chargingchange`](/de/docs/Web/API/BatteryManager/chargingchange_event) Ereignis ein, sodass der Ladevorgang aufgezeichnet wird, wann immer er sich ändert.

```js
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});
```

Für weitere Beispiele und Details, siehe [Battery Status API](/de/docs/Web/API/Battery_Status_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
- {{HTTPHeader("Permissions-Policy")}} {{HTTPHeader("Permissions-Policy/battery", "battery")}} Direktive
