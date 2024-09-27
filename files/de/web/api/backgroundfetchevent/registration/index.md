---
title: "BackgroundFetchEvent: registration-Eigenschaft"
short-title: registration
slug: Web/API/BackgroundFetchEvent/registration
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`registration`** schreibgeschützte Eigenschaft der [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent)-Schnittstelle gibt ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt zurück.

## Wert

Ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration).

## Beispiele

In diesem Beispiel wird das [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event)-Ereignis ausgelöst, wenn der Nutzer auf die Benutzeroberfläche klickt, die den Download-Fortschritt anzeigt. Die aktuelle [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) wird durch Aufruf von `event.registration` zurückgegeben.

```js
addEventListener("backgroundfetchclick", (event) => {
  console.log(event.registration);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
