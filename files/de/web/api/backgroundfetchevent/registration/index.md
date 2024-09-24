---
title: "BackgroundFetchEvent: Eigenschaft registration"
short-title: registration
slug: Web/API/BackgroundFetchEvent/registration
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`registration`** schreibgeschützte Eigenschaft der {{domxref("BackgroundFetchEvent")}} Schnittstelle gibt ein {{domxref("BackgroundFetchRegistration")}} Objekt zurück.

## Wert

Ein {{domxref("BackgroundFetchRegistration")}}.

## Beispiele

In diesem Beispiel, wenn der Benutzer auf die Benutzeroberfläche klickt, die den Download-Fortschritt anzeigt, wird das {{domxref("ServiceWorkerGlobalScope/backgroundfetchclick_event", "backgroundfetchclick")}}-Ereignis ausgelöst. Die aktuelle {{domxref("BackgroundFetchRegistration")}} wird durch Aufruf von `event.registration` zurückgegeben.

```js
addEventListener("backgroundfetchclick", (event) => {
  console.log(event.registration);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
