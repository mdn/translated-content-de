---
title: "ServiceWorkerGlobalScope: backgroundfetchsuccess Ereignis"
short-title: backgroundfetchsuccess
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchsuccess`** Ereignis der {{domxref("ServiceWorkerGlobalScope")}}-Schnittstelle wird ausgelöst, wenn ein [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Vorgang erfolgreich abgeschlossen wurde, d.h. wenn alle Netzwerkaufrufe im Fetch erfolgreich abgeschlossen wurden.

Dieses Ereignis ist nicht abbruchbar und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("backgroundfetchsuccess", (event) => {});

onbackgroundfetchsuccess = (event) => {};
```

## Ereignistyp

Ein {{domxref("BackgroundFetchUpdateUIEvent")}}.

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem übergeordneten {{domxref("BackgroundFetchEvent")}}._

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}}
  - : Aktualisiert die Benutzeroberfläche des Elements, das der Browser anzeigt, um den Fortschritt des Fetch-Vorgangs zu zeigen.

## Beschreibung

Wenn ein [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Vorgang erfolgreich abgeschlossen wird (was bedeutet, dass alle einzelnen Netzwerkaufrufe erfolgreich abgeschlossen wurden), startet der Browser gegebenenfalls den Service Worker und löst das `backgroundfetchsuccess` Ereignis im globalen Scope des Service Workers aus.

Im Handler für dieses Ereignis kann der Service Worker die Antworten abrufen und speichern (zum Beispiel unter Verwendung der {{domxref("Cache")}} API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die {{domxref("BackgroundFetchEvent/registration", "registration")}} Eigenschaft des Ereignisses.

In der Background Fetch API zeigt der Browser dem Benutzer ein UI-Element, um den Fortschritt des Vorgangs anzuzeigen. Im `backgroundfetchsuccess` Handler kann der Service Worker diese Benutzeroberfläche aktualisieren, um zu zeigen, dass der Vorgang erfolgreich abgeschlossen wurde. Hierzu ruft der Handler die {{domxref("BackgroundFetchUpdateUIEvent/updateUI", "updateUI()")}} Methode des Ereignisses auf und übergibt einen neuen Titel und/oder Symbole.

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
