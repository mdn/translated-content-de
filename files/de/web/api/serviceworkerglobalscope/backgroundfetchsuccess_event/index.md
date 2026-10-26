---
title: "ServiceWorkerGlobalScope: backgroundfetchsuccess-Ereignis"
short-title: backgroundfetchsuccess
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchsuccess`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn ein [Background Fetch](/de/docs/Web/API/Background_Fetch_API) erfolgreich abgeschlossen wurde, das heißt, wenn alle zugehörigen Netzwerkanfragen erfolgreich abgeschlossen wurden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("backgroundfetchsuccess", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbackgroundfetchsuccess = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent).

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Beschreibung

Wenn ein [Background Fetch](/de/docs/Web/API/Background_Fetch_API) erfolgreich abgeschlossen wird (das heißt, wenn alle einzelnen Netzwerkanfragen erfolgreich abgeschlossen wurden), startet der Browser bei Bedarf den Service Worker und löst das `backgroundfetchsuccess`-Ereignis im globalen Gültigkeitsbereich des Service Workers aus.

Im Handler für dieses Ereignis kann der Service Worker die Antworten abrufen und speichern, beispielsweise mithilfe der [`Cache`](/de/docs/Web/API/Cache)-API. Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses.

Bei der Background Fetch API zeigt der Browser dem Benutzer ein UI-Element an, das den Fortschritt des Vorgangs angibt. Im `backgroundfetchsuccess`-Handler kann der Service Worker dieses UI aktualisieren, um anzuzeigen, dass der Vorgang erfolgreich abgeschlossen wurde. Dazu ruft der Handler die [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)-Methode des Ereignisses auf und übergibt einen neuen Titel und/oder Icons.

## Beispiele

### Antworten speichern und UI aktualisieren

Dieser Event-Handler speichert alle Antworten im Cache und aktualisiert das UI.

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
