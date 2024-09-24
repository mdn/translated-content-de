---
title: BackgroundFetchRecord
slug: Web/API/BackgroundFetchRecord
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`BackgroundFetchRecord`**-Interface der {{domxref('Background Fetch API','','',' ')}} repräsentiert eine einzelne Anfrage und Antwort.

Ein `BackgroundFetchRecord` wird durch die Methode {{domxref("BackgroundFetchRegistration.match()","BackgroundFetchRegistration.matchAll()")}} erstellt, daher gibt es keinen Konstruktor für dieses Interface.

Es wird ein `BackgroundFetchRecord` für jede Ressource erstellt, die durch `fetch()` angefordert wird.

## Instanz-Eigenschaften

- {{domxref("BackgroundFetchRecord.request","request")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("Request")}} zurück.
- {{domxref("BackgroundFetchRecord.responseReady","responseReady")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das mit einer {{domxref("Response")}} aufgelöst wird.

## Beispiele

In diesem Beispiel wird ein individuelles `BackgroundFetchRecord` mithilfe von {{domxref("BackgroundFetchRegistration.match()","BackgroundFetchRegistration.matchAll()")}} zurückgegeben. Die {{domxref("BackgroundFetchRecord.request")}} und {{domxref("BackgroundFetchRecord.responseReady")}} werden zurückgegeben und im Konsolenfenster protokolliert.

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
