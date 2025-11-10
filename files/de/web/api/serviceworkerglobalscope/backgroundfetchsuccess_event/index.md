---
title: "ServiceWorkerGlobalScope: backgroundfetchsuccess-Ereignis"
short-title: backgroundfetchsuccess
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchsuccess`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn eine [Background-Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation erfolgreich abgeschlossen wurde: das heißt, wenn alle Netzwerk-Anfragen in diesem Fetch erfolgreich abgeschlossen wurden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("backgroundfetchsuccess", (event) => { })

onbackgroundfetchsuccess = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent).

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent)._

- [`BackgroundFetchUpdateUIEvent.updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)
  - : Aktualisiert das UI des Elements, das der Browser anzeigt, um den Fortschritt der Fetch-Operation darzustellen.

## Beschreibung

Wenn eine [Background-Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation erfolgreich abgeschlossen wird (was bedeutet, dass alle individuellen Netzwerk-Anfragen erfolgreich abgeschlossen wurden), startet der Browser den Service Worker, falls erforderlich, und löst das `backgroundfetchsuccess`-Ereignis im globalen Bereich des Service Workers aus.

Im Handler für dieses Ereignis kann der Service Worker die Antworten abrufen und speichern (z. B. mit der [`Cache`](/de/docs/Web/API/Cache)-API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses.

In der Background-Fetch-API zeigt der Browser ein UI-Element an, um dem Benutzer den Fortschritt der Operation anzuzeigen. Im `backgroundfetchsuccess`-Handler kann der Service Worker dieses UI aktualisieren, um zu zeigen, dass die Operation erfolgreich abgeschlossen wurde. Dazu ruft der Handler die [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)-Methode des Ereignisses auf und übergibt einen neuen Titel und/oder Icons.

## Beispiele

### Antworten speichern und UI aktualisieren

Dieser Ereignis-Handler speichert alle Antworten im Cache und aktualisiert das UI.

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
