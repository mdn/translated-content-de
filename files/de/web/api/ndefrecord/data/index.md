---
title: "NDEFRecord: data-Eigenschaft"
short-title: data
slug: Web/API/NDEFRecord/data
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`data`**-Eigenschaft des [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Interfaces gibt eine {{jsxref("DataView")}} zurück, die die rohen Bytes der Nutzlast des Datensatzes enthält.

### Wert

Eine {{jsxref("DataView")}}, die die kodierten Nutzlastdaten des Datensatzes enthält.

## Beispiele

Das folgende Beispiel durchläuft die Datensätze in einem [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt, das aus [`NDEFReadingEvent.message`](/de/docs/Web/API/NDEFReadingEvent/message) abgerufen wird. Nachdem ein Datensatz basierend auf seinem [`mediaType`](/de/docs/Web/API/NDEFRecord/mediaType) ausgewählt wurde, wird das, was in der `data`-Eigenschaft gespeichert ist, dekodiert.

```js
const ndef = new NDEFReader();
await ndef.scan();
ndef.onreading = (event) => {
  const decoder = new TextDecoder();
  for (const record of event.message.records) {
    if (record.mediaType === "application/json") {
      const json = JSON.parse(decoder.decode(record.data));
      const article = /^[aeio]/i.test(json.title) ? "an" : "a";
      console.log(`${json.name} is ${article} ${json.title}`);
    }
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
