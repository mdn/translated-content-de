---
title: "ServiceWorkerGlobalScope: backgroundfetchsuccess-Ereignis"
short-title: backgroundfetchsuccess
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchsuccess`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird ausgelöst, wenn ein [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Vorgang erfolgreich abgeschlossen wurde, das heißt, wenn alle Netzwerk-Anfragen in dem Fetch erfolgreich abgeschlossen wurden.

Dieses Ereignis kann nicht abgebrochen werden und es blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("backgroundfetchsuccess", (event) => {});

onbackgroundfetchsuccess = (event) => {};
```

## Ereignistyp

Ein [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent).

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Ereigniseigenschaften

Erbt Eigenschaften von seinem Elternteil, [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent).

- [`BackgroundFetchUpdateUIEvent.updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)
  - : Aktualisiert die Benutzeroberfläche des Elements, das der Browser anzeigt, um den Fortschritt des Fetch-Vorgangs zu zeigen.

## Beschreibung

Wenn ein [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Vorgang erfolgreich abgeschlossen wird (was bedeutet, dass alle einzelnen Netzwerk-Anfragen erfolgreich abgeschlossen wurden), startet der Browser den Service Worker, falls erforderlich, und löst das `backgroundfetchsuccess`-Ereignis im globalen Bereich des Service Workers aus.

Im Handler für dieses Ereignis kann der Service Worker die Antworten abrufen und speichern (zum Beispiel unter Verwendung der [`Cache`](/de/docs/Web/API/Cache)-API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses.

In der Background Fetch API zeigt der Browser ein UI-Element an, um den Fortschritt des Vorgangs anzuzeigen. Im `backgroundfetchsuccess`-Handler kann der Service Worker dieses UI-Element aktualisieren, um anzuzeigen, dass der Vorgang erfolgreich abgeschlossen wurde. Dazu ruft der Handler die [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)-Methode des Ereignisses auf, wobei er einen neuen Titel und/oder Symbole übergibt.

## Beispiele

### Antworten speichern und UI aktualisieren

Dieser Ereignishandler speichert alle Antworten im Cache und aktualisiert die Benutzeroberfläche.

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
