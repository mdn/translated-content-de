---
title: "NDEFRecord: mediaType-Eigenschaft"
short-title: mediaType
slug: Web/API/NDEFRecord/mediaType
l10n:
  sourceCommit: 5e3c69527de87e8ff9407de62e919db9254f0627
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`mediaType`**-Eigenschaft des [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Interfaces gibt den {{Glossary("MIME_type", "MIME-Typ")}} des Datensatzes zurück. Dieser Wert ist `null`, wenn `recordType` nicht `"mime"` entspricht.

## Wert

Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} der Datensatznutzlast enthält.

## Beispiele

Das folgende Beispiel durchläuft die Datensätze in einem [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt, das von [`NDEFReadingEvent.message`](/de/docs/Web/API/NDEFReadingEvent/message) abgerufen wird. Anschließend wird die `mediaType`-Eigenschaft verwendet, um zu bestimmen, welche der Datensätze analysiert werden sollen.

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
