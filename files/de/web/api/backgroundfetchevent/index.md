---
title: BackgroundFetchEvent
slug: Web/API/BackgroundFetchEvent
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Das **`BackgroundFetchEvent`** Interface der [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) ist der Ereignistyp für Background Fetch-Ereignisse, die im [Service Worker-Global Scope](/de/docs/Web/API/ServiceWorkerGlobalScope) gesendet werden.

Es ist der Ereignistyp, der an das [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) Ereignis und das [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) Ereignis übergeben wird.

{{InheritanceDiagram}}

## Konstruktor

- [`BackgroundFetchEvent()`](/de/docs/Web/API/BackgroundFetchEvent/BackgroundFetchEvent) {{Experimental_Inline}}
  - : Erstellt ein neues `BackgroundFetchEvent` Objekt. Dieser Konstruktor wird normalerweise nicht verwendet, da der Browser diese Objekte selbst erstellt und sie den Background Fetch-Ereignisrückrufen zur Verfügung stellt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`BackgroundFetchEvent.registration`](/de/docs/Web/API/BackgroundFetchEvent/registration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) zurück, mit der das Ereignis initialisiert wurde.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

Keine.

## Beispiele

In diesem Beispiel öffnet sich ein neues Fenster, wenn der Benutzer auf die Benutzeroberfläche klickt, die den Fortschritt des Downloads anzeigt. Die aktuelle [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) wird durch Aufrufen von `event.registration` zurückgegeben.

```js
addEventListener("backgroundfetchclick", (event) => {
  const bgFetch = event.registration;

  if (bgFetch.result === "success") {
    clients.openWindow("/latest-podcasts");
  } else {
    clients.openWindow("/download-progress");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
