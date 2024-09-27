---
title: Battery Status API
slug: Web/API/Battery_Status_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Battery API")}}{{securecontext_header}}

Die **Battery Status API**, oft als **Battery API** bezeichnet, bietet Informationen über den Ladezustand der Systembatterie und ermöglicht es Ihnen, über Ereignisse benachrichtigt zu werden, die gesendet werden, wenn sich der Batteriestand oder der Ladezustand ändert. Dies kann verwendet werden, um die Ressourcennutzung Ihrer App anzupassen, um den Batterieverbrauch zu verringern, wenn die Batterie schwach ist, oder um Änderungen zu speichern, bevor die Batterie leer ist, um Datenverlust zu vermeiden.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) verfügbar).

## Schnittstellen

- [`BatteryManager`](/de/docs/Web/API/BatteryManager)
  - : Bietet Informationen über den Ladezustand der Systembatterie.

### Erweiterungen anderer Schnittstellen

- [`Navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery)
  - : Gibt ein {{JSxRef("Promise")}} zurück, das mit einem [`BatteryManager`](/de/docs/Web/API/BatteryManager)-Objekt aufgelöst wird.

## Beispiel

In diesem Beispiel überwachen wir sowohl Änderungen des Ladezustands (ob wir eingesteckt und am Laden sind) als auch Änderungen des Batteriestands und der Ladezeit. Dies wird durch das Lauschen auf die Ereignisse [`chargingchange`](/de/docs/Web/API/BatteryManager/chargingchange_event), [`levelchange`](/de/docs/Web/API/BatteryManager/levelchange_event), [`chargingtimechange`](/de/docs/Web/API/BatteryManager/chargingtimechange_event), [`dischargingtimechange`](/de/docs/Web/API/BatteryManager/dischargingtimechange_event) durchgeführt.

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

Siehe auch [das Beispiel in der Spezifikation](https://www.w3.org/TR/battery-status/#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Hacks-Blogbeitrag - Verwendung der Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
