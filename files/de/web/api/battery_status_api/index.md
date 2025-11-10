---
title: Battery Status API
slug: Web/API/Battery_Status_API
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Battery API")}}{{securecontext_header}}

Die **Battery Status API**, häufiger als **Battery API** bezeichnet, liefert Informationen über den Ladezustand des Akkusystems und ermöglicht es Ihnen, durch Ereignisse benachrichtigt zu werden, die gesendet werden, wenn sich der Batteriestand oder der Ladezustand ändert. Dies kann verwendet werden, um die Ressourcennutzung Ihrer App anzupassen, um den Batterieabfluss zu verringern, wenn der Batteriestand niedrig ist, oder um Änderungen zu speichern, bevor der Akku leer ist, um Datenverlust zu verhindern.

> [!NOTE]
> Diese API ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) _nicht verfügbar_ (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

## Schnittstellen

- [`BatteryManager`](/de/docs/Web/API/BatteryManager)
  - : Liefert Informationen über den Ladezustand des Akkusystems.

### Erweiterungen für andere Schnittstellen

- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery)
  - : Gibt ein {{JSxRef("Promise")}} zurück, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Objekt aufgelöst wird.

## Beispiel

In diesem Beispiel überwachen wir sowohl Änderungen des Ladezustands (ob wir angeschlossen und aufgeladen werden) als auch Änderungen des Batteriestands und der Zeit. Dies geschieht, indem wir auf die Ereignisse [`chargingchange`](/de/docs/Web/API/BatteryManager/chargingchange_event), [`levelchange`](/de/docs/Web/API/BatteryManager/levelchange_event), [`chargingtimechange`](/de/docs/Web/API/BatteryManager/chargingtimechange_event), [`dischargingtimechange`](/de/docs/Web/API/BatteryManager/dischargingtimechange_event) lauschen.

```js
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log(`Battery level: ${battery.level * 100}%`);
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(`Battery charging time: ${battery.chargingTime} seconds`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
  }
});
```

Siehe auch [das Beispiel in der Spezifikation](https://w3c.github.io/battery/#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Hacks Blog-Post - Using the Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
