---
title: "ServiceWorkerGlobalScope: backgroundfetchabort Ereignis"
short-title: backgroundfetchabort
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchabort`** Ereignis des {{domxref("ServiceWorkerGlobalScope")}}-Interfaces wird ausgelöst, wenn der Benutzer oder die App selbst eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation abbricht.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("backgroundfetchabort", (event) => {});

onbackgroundfetchabort = (event) => {};
```

## Ereignistyp

Ein {{domxref("BackgroundFetchEvent")}}.

{{InheritanceDiagram("BackgroundFetchEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("ExtendableEvent")}}._

- {{domxref("BackgroundFetchEvent.registration")}}
  - : Gibt die {{domxref("BackgroundFetchRegistration")}} für den abgebrochenen Fetch zurück.

## Beschreibung

In der Background Fetch API zeigt der Browser dem Benutzer ein UI-Element an, um den Fortschritt der Operation anzuzeigen. Dieses Element ermöglicht es dem Benutzer auch, den Fetch abzubrechen. Die App selbst kann den Fetch ebenfalls abbrechen, indem sie {{domxref("BackgroundFetchRegistration.abort()")}} aufruft.

Wenn der Fetch abgebrochen wird, bricht der Browser den Fetch ab, startet gegebenenfalls den Servicearbeiter und löst das `backgroundfetchabort` Ereignis im globalen Scope des Servicearbeiters aus.

Im Handler für dieses Ereignis kann der Servicearbeiter alle zugehörigen Daten für die Operation bereinigen. Er kann auch alle erfolgreichen Antworten abrufen und speichern (zum Beispiel mit der {{domxref("Cache")}} API). Um auf die Antwortdaten zuzugreifen, verwendet der Servicearbeiter die {{domxref("BackgroundFetchEvent/registration", "registration")}}-Eigenschaft des Ereignisses.

## Beispiele

### Bereinigung

Dieser Ereignishandler könnte alle mit dem abgebrochenen Fetch verbundenen Daten bereinigen.

```js
addEventListener("backgroundfetchabort", (event) => {
  // Bereinigung von zugehörigen Daten
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
