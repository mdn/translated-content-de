---
title: BackgroundFetchEvent
slug: Web/API/BackgroundFetchEvent
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`BackgroundFetchEvent`**-Schnittstelle der {{domxref('Background Fetch API', "", "", "nocode")}} ist der Ereignistyp für Hintergrund-Abrufe, die im {{domxref("ServiceWorkerGlobalScope", "Service Worker global scope", "", "nocode")}} ausgelöst werden.

Es ist der Ereignistyp, der an das {{domxref("ServiceWorkerGlobalScope/backgroundfetchclick_event", "backgroundfetchclick")}}-Ereignis und das {{domxref("ServiceWorkerGlobalScope/backgroundfetchabort_event", "backgroundfetchabort")}}-Ereignis übergeben wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("BackgroundFetchEvent.BackgroundFetchEvent()", "BackgroundFetchEvent()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `BackgroundFetchEvent`-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet, da der Browser diese Objekte selbst erstellt und sie den Rückrufen für Hintergrund-Abrufereignisse bereitstellt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, {{domxref("ExtendableEvent")}}._

- {{domxref("BackgroundFetchEvent.registration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die {{domxref("BackgroundFetchRegistration")}} zurück, die zur Initialisierung des Ereignisses verwendet wurde.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, {{domxref("ExtendableEvent")}}._

Keine.

## Beispiele

In diesem Beispiel öffnet sich ein neues Fenster, wenn der Benutzer auf die Benutzeroberfläche klickt, die den Download-Fortschritt anzeigt. Die aktuelle {{domxref("BackgroundFetchRegistration")}} wird durch den Aufruf von `event.registration` zurückgegeben.

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
