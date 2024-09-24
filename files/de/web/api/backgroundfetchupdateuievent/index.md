---
title: BackgroundFetchUpdateUIEvent
slug: Web/API/BackgroundFetchUpdateUIEvent
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`BackgroundFetchUpdateUIEvent`**-Schnittstelle der {{domxref('Background Fetch API','','',' ')}} ist ein Ereignistyp für die {{domxref("ServiceWorkerGlobalScope.backgroundfetchsuccess_event", "backgroundfetchsuccess")}} und {{domxref("ServiceWorkerGlobalScope.backgroundfetchfail_event", "backgroundfetchfail")}} Ereignisse und bietet eine Methode zum Aktualisieren des Titels und des Symbols der App, um einen Benutzer über den Erfolg oder Misserfolg eines Hintergrundabrufs zu informieren.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("BackgroundFetchUpdateUIEvent.BackgroundFetchUpdateUIEvent()", "BackgroundFetchUpdateUIEvent()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `BackgroundFetchUIEvent`-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet, da der Browser diese Objekte selbst für die {{domxref("ServiceWorkerGlobalScope.backgroundfetchsuccess_event", "backgroundfetchsuccess")}} und {{domxref("ServiceWorkerGlobalScope.backgroundfetchfail_event", "backgroundfetchfail")}} Ereignisse erstellt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, {{domxref("BackgroundFetchEvent")}}._

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, {{domxref("BackgroundFetchEvent")}}._

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}} {{Experimental_Inline}}
  - : Aktualisiert den Titel und das Symbol in der Benutzeroberfläche, um den Status eines Hintergrundabrufs anzuzeigen. Löst ein {{jsxref("Promise")}} aus.

## Beispiele

In diesem Beispiel wird das `backgroundfetchsuccess`-Ereignis abgehört, was darauf hinweist, dass ein Abruf erfolgreich abgeschlossen wurde. Die {{domxref("BackgroundFetchUpdateUIEvent.updateUI()", "updateUI()")}}-Methode wird dann aufgerufen, um den Benutzer darüber zu informieren, dass die heruntergeladene Episode bereit ist.

```js
addEventListener("backgroundfetchsuccess", (event) => {
  const bgFetch = event.registration;

  event.waitUntil(
    (async () => {
      // Create/open a cache.
      const cache = await caches.open("downloads");
      // Get all the records.
      const records = await bgFetch.matchAll();
      // Copy each request/response across.
      const promises = records.map(async (record) => {
        const response = await record.responseReady;
        await cache.put(record.request, response);
      });

      // Wait for the copying to complete.
      await Promise.all(promises);

      // Update the progress notification.
      event.updateUI({ title: "Episode 5 ready to listen!" });
    })(),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
