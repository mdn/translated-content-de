---
title: "ServiceWorkerGlobalScope: backgroundfetchabort-Ereignis"
short-title: backgroundfetchabort
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchabort`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird ausgelöst, wenn der Benutzer oder die App selbst einen [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Vorgang abbricht.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("backgroundfetchabort", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbackgroundfetchabort = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent).

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Beschreibung

Bei der Background Fetch API zeigt der Browser dem Benutzer ein UI-Element an, das den Fortschritt des Vorgangs darstellt. Über dieses Element kann der Benutzer den Fetch auch abbrechen. Die App selbst kann den Fetch ebenfalls abbrechen, indem sie [`BackgroundFetchRegistration.abort()`](/de/docs/Web/API/BackgroundFetchRegistration/abort) aufruft.

Wird der Fetch abgebrochen, stoppt der Browser den Fetch, startet bei Bedarf den Service Worker und löst das `backgroundfetchabort`-Ereignis im globalen Gültigkeitsbereich des Service Workers aus.

Im Handler für dieses Ereignis kann der Service Worker zugehörige Daten des Vorgangs bereinigen. Er kann auch erfolgreiche Antworten abrufen und speichern, beispielsweise mithilfe der [`Cache`](/de/docs/Web/API/Cache)-API. Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses.

## Beispiele

### Bereinigung

Dieser Ereignishandler könnte Daten bereinigen, die mit dem abgebrochenen Fetch zusammenhängen.

```js
addEventListener("backgroundfetchabort", (event) => {
  // clean up any related data
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
