---
title: BackgroundFetchUpdateUIEvent
slug: Web/API/BackgroundFetchUpdateUIEvent
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

---

title: "BackgroundFetchUpdateUIEvent"
slug: Web/API/BackgroundFetchUpdateUIEvent
page-type: web-api-interface
status:

- experimental
  browser-compat: api.BackgroundFetchUpdateUIEvent

---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`BackgroundFetchUpdateUIEvent`**-Schnittstelle der [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) ist ein Ereignistyp für die [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event)- und [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event)-Ereignisse und bietet eine Methode, um den Titel und das Icon der App zu aktualisieren, um den Benutzer über den Erfolg oder Misserfolg eines Hintergrundabrufs zu informieren.

{{InheritanceDiagram}}

## Konstruktor

- [`BackgroundFetchUpdateUIEvent()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/BackgroundFetchUpdateUIEvent) {{Experimental_Inline}}
  - : Erstellt ein neues `BackgroundFetchUIEvent`-Objekt. Dieser Konstruktor wird typischerweise nicht verwendet, da der Browser diese Objekte selbst für die [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event)- und [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event)-Ereignisse erstellt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent)._

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent)._

- [`BackgroundFetchUpdateUIEvent.updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI) {{Experimental_Inline}}
  - : Aktualisiert den Titel und das Icon in der Benutzeroberfläche, um den Status eines Hintergrundabrufs anzuzeigen. Löst sich mit einem {{jsxref("Promise")}} auf.

## Beispiele

In diesem Beispiel wird auf das `backgroundfetchsuccess`-Ereignis gehört, was darauf hinweist, dass ein Abruf erfolgreich abgeschlossen wurde. Die [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)-Methode wird dann mit einer Nachricht aufgerufen, um den Benutzer wissen zu lassen, dass die heruntergeladene Episode bereit ist.

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
