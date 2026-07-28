---
title: "ServiceWorkerGlobalScope: backgroundfetchfail Ereignis"
short-title: backgroundfetchfail
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchfail`** Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Schnittstelle wird ausgelöst, wenn ein [Hintergrund-Abruf](/de/docs/Web/API/Background_Fetch_API) fehlgeschlagen ist: Das bedeutet, dass mindestens eine Netzwerkanforderung im Abruf nicht erfolgreich abgeschlossen wurde.

Dieses Ereignis ist nicht abbruchfähig und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("backgroundfetchfail", (event) => { })

onbackgroundfetchfail = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent).

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Beschreibung

Wenn ein [Hintergrund-Abruf](/de/docs/Web/API/Background_Fetch_API) fehlschlägt (was bedeutet, dass mindestens eine der einzelnen Netzwerkanfragen nicht erfolgreich abgeschlossen wurde), startet der Browser den Service Worker, falls nötig, und löst das `backgroundfetchfail` Ereignis im globalen Bereich des Service Workers aus.

In der Hintergrund-Abruf-API zeigt der Browser dem Benutzer ein UI-Element an, um den Fortschritt der Operation anzuzeigen. Im `backgroundfetchfail`-Handler kann der Service Worker dieses UI-Element aktualisieren, um zu zeigen, dass die Operation fehlgeschlagen ist. Dazu ruft der Handler die [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI) Methode des Ereignisses auf und übergibt einen neuen Titel und/oder Symbole.

Im Handler für dieses `backgroundfetchfail` kann der Service Worker auch alle zugehörigen Daten für die Operation bereinigen. Er kann auch erfolgreiche Antworten abrufen und speichern (zum Beispiel durch Verwendung der [`Cache`](/de/docs/Web/API/Cache) API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration) Eigenschaft des Ereignisses.

## Beispiele

### Aktualisierung der Benutzeroberfläche

Dieser Ereignis-Handler aktualisiert die Benutzeroberfläche, um dem Benutzer mitzuteilen, dass die Operation fehlgeschlagen ist.

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
