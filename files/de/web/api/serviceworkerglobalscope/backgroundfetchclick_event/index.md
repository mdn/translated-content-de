---
title: "ServiceWorkerGlobalScope: backgroundfetchclick-Ereignis"
short-title: backgroundfetchclick
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchclick`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn der Benutzer auf die vom Browser bereitgestellte Benutzeroberfläche klickt, die dem Benutzer den Fortschritt der [Background-Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation anzeigt.

Dieses Ereignis ist nicht abbruchbar und löst keine Blasenbildung (Bubble-Effekt) aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("backgroundfetchclick", (event) => { })

onbackgroundfetchclick = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent).

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem übergeordneten [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`BackgroundFetchEvent.registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)
  - : Gibt die [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) zurück, deren Fortschrittsdialog der Benutzer angeklickt hat.

## Beschreibung

Wenn eine [Background-Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation startet, zeigt der Browser dem Benutzer ein UI-Element an, um den Fortschritt der Operation anzuzeigen. Wenn der Benutzer auf dieses Element klickt, startet der Browser den Service-Worker, falls erforderlich, und löst das `backgroundfetchclick`-Ereignis im globalen Scope des Service-Workers aus.

Eine häufige Aufgabe für den Handler in dieser Situation ist es, ein Fenster zu öffnen, das dem Benutzer mehr Details über die Fetch-Operation bietet.

## Beispiele

### Öffnen eines Fensters mit mehr Details

Dieser Ereignishandler verwendet die globale [`clients`](/de/docs/Web/API/ServiceWorkerGlobalScope/clients)-Eigenschaft, um ein Fenster zu öffnen, das dem Benutzer mehr Details über den Fetch bietet. Es wird ein anderes Fenster geöffnet, je nachdem, ob der Fetch abgeschlossen ist oder nicht.

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
