---
title: "ServiceWorkerGlobalScope: backgroundfetchabort-Ereignis"
short-title: backgroundfetchabort
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchabort`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn der Benutzer oder die App selbst eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation abbricht.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

## Ereignistyp

Ein [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent).

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem übergeordneten [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`BackgroundFetchEvent.registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)
  - : Gibt die [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) für den abgebrochenen Fetch zurück.

## Beschreibung

In der Background Fetch API zeigt der Browser dem Benutzer ein UI-Element an, um den Fortschritt der Operation anzuzeigen. Dieses Element ermöglicht es dem Benutzer auch, den Fetch abzubrechen. Die App selbst kann den Fetch ebenfalls abbrechen, indem sie [`BackgroundFetchRegistration.abort()`](/de/docs/Web/API/BackgroundFetchRegistration/abort) aufruft.

Wenn der Fetch abgebrochen wird, bricht der Browser den Fetch ab, startet bei Bedarf den Service Worker und löst das `backgroundfetchabort`-Ereignis im globalen Bereich des Service Workers aus.

Im Handler für dieses Ereignis kann der Service Worker alle zugehörigen Daten für die Operation bereinigen. Er kann auch alle erfolgreichen Antworten abrufen und speichern (z. B. unter Verwendung der [`Cache`](/de/docs/Web/API/Cache) API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses.

## Beispiele

### Aufräumen

Dieser Ereignishandler könnte jegliche Bereinigung von Daten durchführen, die mit dem abgebrochenen Fetch verbunden sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
