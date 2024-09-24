---
title: "ServiceWorkerGlobalScope: backgroundfetchclick-Ereignis"
short-title: backgroundfetchclick
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchclick`**-Ereignis des {{domxref("ServiceWorkerGlobalScope")}}-Interfaces wird ausgelöst, wenn der Benutzer auf die Benutzeroberfläche klickt, die der Browser zur Anzeige des Fortschritts der [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation bereitstellt.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("backgroundfetchclick", (event) => {});

onbackgroundfetchclick = (event) => {};
```

## Ereignistyp

Ein {{domxref("BackgroundFetchEvent")}}.

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("ExtendableEvent")}}._

- {{domxref("BackgroundFetchEvent.registration")}}
  - : Gibt die {{domxref("BackgroundFetchRegistration")}} zurück, deren Fortschrittsdialog vom Benutzer angeklickt wurde.

## Beschreibung

Wenn eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation startet, zeigt der Browser ein UI-Element an, um dem Benutzer den Fortschritt der Operation anzuzeigen. Wenn der Benutzer auf dieses Element klickt, startet der Browser, falls erforderlich, den Service Worker und löst das `backgroundfetchclick`-Ereignis im globalen Scope des Service Workers aus.

Eine übliche Aufgabe des Handlers in dieser Situation besteht darin, ein Fenster zu öffnen, das dem Benutzer mehr Details zu der Fetch-Operation gibt.

## Beispiele

### Öffnen eines Fensters mit weiteren Details

Dieser Ereignishandler verwendet die globale {{domxref("ServiceWorkerGlobalScope.clients", "clients")}}-Eigenschaft, um ein Fenster zu öffnen, das dem Benutzer mehr Details über den Fetch bietet. Je nachdem, ob der Fetch abgeschlossen ist oder nicht, wird ein unterschiedliches Fenster geöffnet.

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
