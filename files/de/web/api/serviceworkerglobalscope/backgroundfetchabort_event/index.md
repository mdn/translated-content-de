---
title: "ServiceWorkerGlobalScope: backgroundfetchabort-Ereignis"
short-title: backgroundfetchabort
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchabort`**-Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Interfaces wird ausgelöst, wenn der Benutzer oder die App selbst eine [Hintergrundanforderung](/de/docs/Web/API/Background_Fetch_API) abbricht.

Dieses Ereignis kann nicht abgebrochen werden und löst sich nicht in Kettenreaktionen aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("backgroundfetchabort", (event) => { })

onbackgroundfetchabort = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent).

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`BackgroundFetchEvent.registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)
  - : Gibt die [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) für die abgebrochene Anforderung zurück.

## Beschreibung

In der Hintergrundabruf-API zeigt der Browser ein UI-Element an, um dem Benutzer den Fortschritt der Operation anzuzeigen. Dieses Element ermöglicht es dem Benutzer auch, die Anforderung abzubrechen. Die App selbst kann die Anforderung auch abbrechen, indem sie [`BackgroundFetchRegistration.abort()`](/de/docs/Web/API/BackgroundFetchRegistration/abort) aufruft.

Wenn die Anforderung abgebrochen wird, bricht der Browser die Anforderung ab, startet bei Bedarf den Service Worker und löst das `backgroundfetchabort`-Ereignis im globalen Bereich des Service Workers aus.

Im Handler für dieses Ereignis kann der Service Worker alle zugehörigen Daten der Operation bereinigen. Er kann auch erfolgreiche Antworten abrufen und speichern (zum Beispiel mit der [`Cache`](/de/docs/Web/API/Cache) API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses.

## Beispiele

### Aufräumen

Dieser Ereignis-Handler könnte eine Bereinigung der Daten durchführen, die mit der abgebrochenen Anforderung verbunden sind.

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
