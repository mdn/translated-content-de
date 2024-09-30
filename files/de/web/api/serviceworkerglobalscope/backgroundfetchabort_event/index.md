---
title: "ServiceWorkerGlobalScope: backgroundfetchabort Ereignis"
short-title: backgroundfetchabort
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchabort`** Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Interface wird ausgelöst, wenn der Benutzer oder die App selbst eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Operation abbricht.

Dieses Ereignis ist nicht abbruchbar und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandler-Eigenschaft fest.

```js
addEventListener("backgroundfetchabort", (event) => {});

onbackgroundfetchabort = (event) => {};
```

## Ereignistyp

Ein [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent).

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`BackgroundFetchEvent.registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)
  - : Gibt die [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) für das abgebrochene Fetch zurück.

## Beschreibung

In der Background Fetch API zeigt der Browser dem Benutzer ein UI-Element an, um den Fortschritt der Operation anzuzeigen. Dieses Element ermöglicht es dem Benutzer auch, das Fetch abzubrechen. Die App selbst kann das Fetch ebenfalls abbrechen, indem sie [`BackgroundFetchRegistration.abort()`](/de/docs/Web/API/BackgroundFetchRegistration/abort) aufruft.

Wenn das Fetch abgebrochen wird, bricht der Browser das Fetch ab, startet den Service Worker, falls erforderlich, und löst das `backgroundfetchabort` Ereignis im globalen Bereich des Service Workers aus.

Im Handler für dieses Ereignis kann der Service Worker sämtliche zugehörigen Daten der Operation bereinigen. Er kann auch alle erfolgreichen Antworten abrufen und speichern (zum Beispiel mit der [`Cache`](/de/docs/Web/API/Cache) API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration) Eigenschaft des Ereignisses.

## Beispiele

### Bereinigung

Dieser Ereignis-Handler könnte eine Bereinigung der mit dem abgebrochenen Fetch verbundenen Daten durchführen.

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
