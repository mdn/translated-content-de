---
title: "BackgroundFetchEvent: registration Eigenschaft"
short-title: registration
slug: Web/API/BackgroundFetchEvent/registration
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`registration`** Nur-Lese-Eigenschaft des [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent)-Interfaces gibt ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt zurück.

## Wert

Ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration).

## Beispiele

In diesem Beispiel löst ein Klick des Nutzers auf die Benutzeroberfläche, die den Download-Fortschritt anzeigt, das [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event)-Ereignis aus. Die aktuelle [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) wird durch Aufruf von `event.registration` zurückgegeben.

```js
addEventListener("backgroundfetchclick", (event) => {
  console.log(event.registration);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
