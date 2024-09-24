---
title: Batterie-Status-API
slug: Web/API/Battery_Status_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Battery API")}}{{securecontext_header}}

Die **Batterie-Status-API**, häufiger als **Battery API** bezeichnet, liefert Informationen über den Ladezustand der Systembatterie und benachrichtigt Sie über Ereignisse, die gesendet werden, wenn sich der Batteriestand oder der Ladezustand ändert. Dies kann verwendet werden, um die Ressourcennutzung Ihrer App anzupassen, um den Batterieverbrauch zu reduzieren, wenn der Batteriestand niedrig ist, oder um Änderungen zu speichern, bevor die Batterie leer ist, um Datenverlust zu vermeiden.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über {{domxref("WorkerNavigator")}} zugänglich).

## Schnittstellen

- {{domxref("BatteryManager")}}
  - : Bietet Informationen über den Ladezustand der Systembatterie.

### Erweiterungen für andere Schnittstellen

- {{domxref("Navigator.getBattery()")}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das mit einem {{DOMxRef("BatteryManager")}} Objekt aufgelöst wird.

## Beispiel

In diesem Beispiel beobachten wir Änderungen sowohl des Ladezustands (ob wir eingesteckt und am Laden sind oder nicht) als auch Änderungen des Batteriestands und der Ladezeit. Dies wird durch das Abhören der {{domxref("BatteryManager.chargingchange_event", "chargingchange")}}, {{domxref("BatteryManager.levelchange_event", "levelchange")}}, {{domxref("BatteryManager.chargingtimechange_event", "chargingtimechange")}}, {{domxref("BatteryManager.dischargingtimechange_event", "dischargingtimechange")}} Ereignisse erreicht.

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

- [Hacks Blogbeitrag - Verwendung der Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
