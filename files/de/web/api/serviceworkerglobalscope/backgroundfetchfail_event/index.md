---
title: "ServiceWorkerGlobalScope: backgroundfetchfail Ereignis"
short-title: backgroundfetchfail
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchfail`** Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Schnittstelle wird ausgelöst, wenn ein [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Vorgang fehlgeschlagen ist, was bedeutet, dass mindestens eine Netzwerkanfrage in dem Fetch nicht erfolgreich abgeschlossen wurde.

Dieses Ereignis ist nicht abbruchfähig und wird nicht hochgeblasen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("backgroundfetchfail", (event) => {});

onbackgroundfetchfail = (event) => {};
```

## Ereignistyp

Ein [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent).

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent)._

- [`BackgroundFetchUpdateUIEvent.updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)
  - : Aktualisiert die UI des Elements, das der Browser anzeigt, um den Fortschritt des Fetch-Vorgangs darzustellen.

## Beschreibung

Wenn ein [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Vorgang fehlschlägt (was bedeutet, dass mindestens eine der einzelnen Netzwerkanfragen nicht erfolgreich abgeschlossen wurde), startet der Browser, falls erforderlich, den Service-Worker und löst das `backgroundfetchfail` Ereignis im globalen Gültigkeitsbereich des Service-Workers aus.

In der Background Fetch API zeigt der Browser ein UI-Element an, um dem Benutzer den Fortschritt des Vorgangs anzuzeigen. Im `backgroundfetchfail` Handler kann der Service-Worker diese UI aktualisieren, um anzuzeigen, dass der Vorgang fehlgeschlagen ist. Dazu ruft der Handler die [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI) Methode des Ereignisses auf und übergibt einen neuen Titel und/oder Icons.

Im Handler für dieses `backgroundfetchfail` kann der Service-Worker auch alle zugehörigen Daten für den Vorgang bereinigen. Er kann auch alle erfolgreichen Antworten abrufen und speichern (zum Beispiel mit der [`Cache`](/de/docs/Web/API/Cache) API). Um auf die Antwortdaten zuzugreifen, verwendet der Service-Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration) Eigenschaft des Ereignisses.

## Beispiele

### UI-Aktualisierung

Dieser Ereignishandler aktualisiert die UI, um den Benutzer darüber zu informieren, dass der Vorgang fehlgeschlagen ist.

```js
addEventListener("backgroundfetchfail", (event) => {
  event.updateUI({ title: "Could not complete download" });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
