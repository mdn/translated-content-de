---
title: BackgroundFetchRecord
slug: Web/API/BackgroundFetchRecord
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`BackgroundFetchRecord`**-Schnittstelle der [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) repräsentiert eine einzelne Anfrage und Antwort.

Ein `BackgroundFetchRecord` wird durch die [`BackgroundFetchRegistration.matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/match)-Methode erstellt, daher gibt es keinen Konstruktor für diese Schnittstelle.

Es wird ein `BackgroundFetchRecord` für jede von `fetch()` angeforderte Ressource geben.

## Instanzeigenschaften

- [`request`](/de/docs/Web/API/BackgroundFetchRecord/request) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Request`](/de/docs/Web/API/Request) zurück.
- [`responseReady`](/de/docs/Web/API/BackgroundFetchRecord/responseReady) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Versprechen zurück, das mit einer [`Response`](/de/docs/Web/API/Response) erfüllt wird.

## Beispiele

In diesem Beispiel wird ein einzelnes `BackgroundFetchRecord` unter Verwendung von [`BackgroundFetchRegistration.matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/match) zurückgegeben. Die [`BackgroundFetchRecord.request`](/de/docs/Web/API/BackgroundFetchRecord/request) und [`BackgroundFetchRecord.responseReady`](/de/docs/Web/API/BackgroundFetchRecord/responseReady) werden zurückgegeben und im Konsolenprotokoll ausgegeben.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Here's the request`, record.request);
  const response = await record.responseReady;
  console.log(`And here's the response`, response);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
