---
title: "ServiceWorkerGlobalScope: backgroundfetchclick Ereignis"
short-title: backgroundfetchclick
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchclick`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn der Benutzer auf die Benutzeroberfläche klickt, die der Browser bereitstellt, um dem Benutzer den Fortschritt der [Hintergrundabruf](/de/docs/Web/API/Background_Fetch_API)-Operation anzuzeigen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("backgroundfetchclick", (event) => { })

onbackgroundfetchclick = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent).

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Beschreibung

Wenn eine [Hintergrundabruf](/de/docs/Web/API/Background_Fetch_API)-Operation startet, zeigt der Browser ein UI-Element an, um dem Benutzer den Fortschritt der Operation anzuzeigen. Wenn der Benutzer auf dieses Element klickt, startet der Browser den Service Worker, falls erforderlich, und löst das `backgroundfetchclick`-Ereignis im globalen Bereich des Service Workers aus.

Eine häufige Aufgabe für den Handler in dieser Situation ist es, ein Fenster zu öffnen, das dem Benutzer mehr Details über die Abrufoperation gibt.

## Beispiele

### Öffnen eines Fensters mit mehr Details

Dieser Ereignishandler verwendet die globale [`clients`](/de/docs/Web/API/ServiceWorkerGlobalScope/clients)-Eigenschaft, um ein Fenster zu öffnen, das dem Benutzer mehr Details über den Abruf gibt. Es öffnet ein anderes Fenster, je nachdem, ob der Abruf abgeschlossen ist oder nicht.

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
