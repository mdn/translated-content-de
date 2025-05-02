---
title: "ServiceWorkerGlobalScope: backgroundfetchfail Ereignis"
short-title: backgroundfetchfail
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchfail`** Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Schnittstelle wird ausgelöst, wenn eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Operation fehlgeschlagen ist: das heißt, wenn mindestens eine Netzwerk-Anfrage im Fetch nicht erfolgreich abgeschlossen wurde.

Dieses Ereignis ist nicht abbruchfähig und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("backgroundfetchfail", (event) => { })

onbackgroundfetchfail = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent).

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem übergeordneten [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent)._

- [`BackgroundFetchUpdateUIEvent.updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)
  - : Aktualisiert die Benutzeroberfläche des Elements, das der Browser anzeigt, um den Fortschritt der Fetch-Operation darzustellen.

## Beschreibung

Wenn eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Operation fehlschlägt (bedeutet, dass mindestens eine der einzelnen Netzwerk-Anfragen nicht erfolgreich abgeschlossen wurde), startet der Browser den Service Worker gegebenenfalls und löst das `backgroundfetchfail` Ereignis im globalen Bereich des Service Workers aus.

In der Background Fetch API zeigt der Browser der Benutzeroberfläche ein UI-Element an, um den Fortschritt der Operation anzuzeigen. Im `backgroundfetchfail` Handler kann der Service Worker diese Benutzeroberfläche aktualisieren, um anzuzeigen, dass die Operation fehlgeschlagen ist. Um dies zu tun, ruft der Handler die [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI) Methode des Ereignisses auf und übergibt einen neuen Titel und/oder Symbole.

Im Handler für dieses `backgroundfetchfail` kann der Service Worker auch alle zugehörigen Daten der Operation bereinigen. Er kann auch erfolgreich empfangene Antworten abrufen und speichern (zum Beispiel mit der [`Cache`](/de/docs/Web/API/Cache) API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration) Eigenschaft des Ereignisses.

## Beispiele

### Aktualisierung der Benutzeroberfläche

Dieser Ereignishandler aktualisiert die Benutzeroberfläche, um dem Benutzer mitzuteilen, dass die Operation fehlgeschlagen ist.

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
