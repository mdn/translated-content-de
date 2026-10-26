---
title: "ServiceWorkerGlobalScope: backgroundfetchfail-Ereignis"
short-title: backgroundfetchfail
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`backgroundfetchfail`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn ein [Background Fetch](/de/docs/Web/API/Background_Fetch_API) fehlgeschlagen ist: wenn also mindestens eine Netzwerkanfrage im Rahmen des Abrufs nicht erfolgreich abgeschlossen wurde.

Dieses Ereignis kann nicht abgebrochen werden und durchläuft keine Ereignisweitergabe nach oben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("backgroundfetchfail", (event) => { })
```

Alternativ können Sie die [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbackgroundfetchfail = (event) => { }
```

## Ereignistyp

Ein [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent).

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## Beschreibung

Wenn ein [Background Fetch](/de/docs/Web/API/Background_Fetch_API) fehlschlägt (das heißt, mindestens eine der einzelnen Netzwerkanfragen wurde nicht erfolgreich abgeschlossen), startet der Browser bei Bedarf den Service Worker und löst das `backgroundfetchfail`-Ereignis in dessen globalem Gültigkeitsbereich aus.

Bei der Background Fetch API zeigt der Browser dem Benutzer ein UI-Element an, das den Fortschritt des Vorgangs angibt. Im `backgroundfetchfail`-Handler kann der Service Worker dieses UI aktualisieren, um anzuzeigen, dass der Vorgang fehlgeschlagen ist. Dazu ruft der Handler die [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)-Methode des Ereignisses auf und übergibt einen neuen Titel und/oder Symbole.

Im Handler für dieses `backgroundfetchfail`-Ereignis kann der Service Worker außerdem zugehörige Daten des Vorgangs bereinigen. Er kann auch erfolgreiche Antworten abrufen und speichern (beispielsweise mit der [`Cache`](/de/docs/Web/API/Cache)-API). Um auf die Antwortdaten zuzugreifen, verwendet der Service Worker die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses.

## Beispiele

### UI aktualisieren

Dieser Ereignishandler aktualisiert das UI, um den Benutzer darüber zu informieren, dass der Vorgang fehlgeschlagen ist.

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
