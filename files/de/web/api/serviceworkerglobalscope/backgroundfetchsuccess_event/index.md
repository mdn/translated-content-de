---
title: "ServiceWorkerGlobalScope: backgroundfetchsuccess-Ereignis"
short-title: backgroundfetchsuccess
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchsuccess`**-Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Interfaces wird ausgelöst, wenn eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation erfolgreich abgeschlossen wurde: das heißt, wenn alle Netzwerk-Anfragen im Fetch erfolgreich beendet wurden.

Dieses Ereignis kann nicht abgebrochen werden und unterliegt nicht dem Bubbling.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("backgroundfetchsuccess", (event) => { })

onbackgroundfetchsuccess = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent).

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Beschreibung

Wenn eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation erfolgreich abgeschlossen wird (das bedeutet, dass alle individuellen Netzwerk-Anfragen erfolgreich abgeschlossen wurden), startet der Browser ggf. den Service Worker und löst das `backgroundfetchsuccess`-Ereignis im globalen Scope des Service Workers aus.

Im Handler für dieses Ereignis kann der Service Worker die Antworten abrufen und speichern (zum Beispiel durch Verwendung der [`Cache`](/de/docs/Web/API/Cache)-API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses.

In der Background-Fetch-API zeigt der Browser ein UI-Element an, um dem Benutzer den Fortschritt der Operation zu zeigen. Im `backgroundfetchsuccess`-Handler kann der Service Worker dieses UI aktualisieren, um anzuzeigen, dass die Operation erfolgreich abgeschlossen wurde. Dazu ruft der Handler die [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)-Methode des Ereignisses auf und übergibt einen neuen Titel und/oder Symbole.

## Beispiele

### Antworten speichern und UI aktualisieren

Dieser Ereignishandler speichert alle Antworten im Cache und aktualisiert die UI.

```js
addEventListener("backgroundfetchsuccess", (event) => {
  const registration = event.registration;

  event.waitUntil(async () => {
    // Open a cache
    const cache = await caches.open("movies");
    // Get all the records
    const records = await registration.matchAll();
    // Cache all responses
    const cachePromises = records.map(async (record) => {
      const response = await record.responseReady;
      await cache.put(record.request, response);
    });

    // Wait for caching to finish
    await Promise.all(cachePromises);

    // Update the browser's UI
    event.updateUI({ title: "Move download complete" });
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
