---
title: "ServiceWorkerGlobalScope: backgroundfetchclick Ereignis"
short-title: backgroundfetchclick
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchclick`** Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Interfaces wird ausgelöst, wenn der Benutzer auf die vom Browser bereitgestellte Benutzeroberfläche klickt, um dem Benutzer den Fortschritt der [Hintergrundabruf](/de/docs/Web/API/Background_Fetch_API) Operation anzuzeigen.

Dieses Ereignis ist nicht abbruchsicher und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("backgroundfetchclick", (event) => {});

onbackgroundfetchclick = (event) => {};
```

## Ereignistyp

Ein [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent).

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`BackgroundFetchEvent.registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)
  - : Gibt die [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) zurück, deren Fortschrittsdialogfeld der Benutzer angeklickt hat.

## Beschreibung

Wenn eine [Hintergrundabruf](/de/docs/Web/API/Background_Fetch_API) Operation startet, zeigt der Browser dem Benutzer ein UI-Element, um den Fortschritt der Operation anzuzeigen. Wenn der Benutzer auf dieses Element klickt, startet der Browser den Service Worker, falls erforderlich, und löst das `backgroundfetchclick` Ereignis im globalen Bereich des Service Workers aus.

Eine häufige Aufgabe für den Handler in dieser Situation besteht darin, ein Fenster zu öffnen, das dem Benutzer mehr Details über die Abrufoperation bietet.

## Beispiele

### Öffnen eines Fensters mit mehr Details

Dieser Ereignishandler verwendet die globale [`clients`](/de/docs/Web/API/ServiceWorkerGlobalScope/clients) Eigenschaft, um ein Fenster zu öffnen, das dem Benutzer mehr Details über den Abruf bietet. Es öffnet ein anderes Fenster, je nachdem, ob der Abruf abgeschlossen ist oder nicht.

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
