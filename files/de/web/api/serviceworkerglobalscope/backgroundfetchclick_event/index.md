---
title: "ServiceWorkerGlobalScope: backgroundfetchclick-Ereignis"
short-title: backgroundfetchclick
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchclick`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird ausgelöst, wenn der Benutzer auf das UI-Element klickt, das der Browser bereitstellt, um den Fortschritt eines [Background-Fetch-Vorgangs](/de/docs/Web/API/Background_Fetch_API) anzuzeigen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("backgroundfetchclick", (event) => { })
```

Alternativ können Sie den [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onbackgroundfetchclick = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent).

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Beschreibung

Wenn ein [Background-Fetch-Vorgang](/de/docs/Web/API/Background_Fetch_API) beginnt, zeigt der Browser dem Benutzer ein UI-Element an, das den Fortschritt des Vorgangs angibt. Klickt der Benutzer auf dieses Element, startet der Browser bei Bedarf den Service Worker und löst das `backgroundfetchclick`-Ereignis im globalen Gültigkeitsbereich des Service Workers aus.

Eine typische Aufgabe des Event-Handlers besteht in diesem Fall darin, ein Fenster mit weiteren Details zum Abrufvorgang zu öffnen.

## Beispiele

### Ein Fenster mit weiteren Details öffnen

Dieser Event-Handler verwendet die globale Eigenschaft [`clients`](/de/docs/Web/API/ServiceWorkerGlobalScope/clients), um ein Fenster mit weiteren Details zum Abrufvorgang zu öffnen. Je nachdem, ob der Abruf abgeschlossen ist oder nicht, öffnet er ein anderes Fenster.

```js
addEventListener("backgroundfetchclick", (event) => {
  const registration = event.registration;

  if (registration.result === "success") {
    clients.openWindow("/play-movie");
  } else {
    clients.openWindow("/movie-download-progress");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
