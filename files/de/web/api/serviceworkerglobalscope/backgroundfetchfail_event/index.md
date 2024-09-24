---
title: "ServiceWorkerGlobalScope: backgroundfetchfail-Ereignis"
short-title: backgroundfetchfail
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchfail`**-Ereignis der {{domxref("ServiceWorkerGlobalScope")}}-Schnittstelle wird ausgelöst, wenn ein [Background-Fetch](/de/docs/Web/API/Background_Fetch_API)-Vorgang fehlgeschlagen ist: Das heißt, wenn mindestens eine Netzwerkanforderung im Fetch nicht erfolgreich abgeschlossen wurde.

Dieses Ereignis kann nicht abgebrochen werden und propagiert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("backgroundfetchfail", (event) => {});

onbackgroundfetchfail = (event) => {};
```

## Ereignistyp

Ein {{domxref("BackgroundFetchUpdateUIEvent")}}.

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("BackgroundFetchEvent")}}._

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}}
  - : Aktualisiert die Benutzeroberfläche des Elements, das der Browser anzeigt, um den Fortschritt des Fetch-Vorgangs zu zeigen.

## Beschreibung

Wenn ein [Background-Fetch](/de/docs/Web/API/Background_Fetch_API)-Vorgang fehlschlägt (was bedeutet, dass mindestens eine der individuellen Netzwerkanfragen nicht erfolgreich abgeschlossen wurde), startet der Browser, falls erforderlich, den Service Worker und löst das `backgroundfetchfail`-Ereignis im globalen Bereich des Service Workers aus.

In der Background Fetch API zeigt der Browser dem Benutzer ein UI-Element an, um den Fortschritt des Vorgangs anzuzeigen. Im `backgroundfetchfail`-Handler kann der Service Worker diese UI aktualisieren, um anzuzeigen, dass der Vorgang fehlgeschlagen ist. Dazu ruft der Handler die {{domxref("BackgroundFetchUpdateUIEvent/updateUI", "updateUI()")}}-Methode des Ereignisses auf und übergibt einen neuen Titel und/oder Icons.

Im Handler für dieses `backgroundfetchfail` kann der Service Worker auch alle zugehörigen Daten für den Vorgang bereinigen. Er kann auch alle erfolgreichen Antworten abrufen und speichern (zum Beispiel unter Verwendung der {{domxref("Cache")}} API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die {{domxref("BackgroundFetchEvent/registration", "registration")}}-Eigenschaft des Ereignisses.

## Beispiele

### Aktualisierung der Benutzeroberfläche

Dieser Ereignishandler aktualisiert die Benutzeroberfläche, um dem Benutzer mitzuteilen, dass der Vorgang fehlgeschlagen ist.

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
