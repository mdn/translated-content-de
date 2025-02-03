---
title: "NDEFRecord: mediaType Eigenschaft"
short-title: mediaType
slug: Web/API/NDEFRecord/mediaType
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`mediaType`**-Eigenschaft der [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Schnittstelle gibt den {{Glossary("MIME_type", "MIME-Typ")}} des Datensatzes zurück. Dieser Wert ist `null`, wenn `recordType` nicht gleich `"mime"` ist.

### Wert

Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} der Nutzlast des Datensatzes enthält.

## Beispiele

Das folgende Beispiel iteriert über die Datensätze in einem [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt, das aus [`NDEFReadingEvent.message`](/de/docs/Web/API/NDEFReadingEvent/message) abgerufen wird. Es verwendet dann die `mediaType`-Eigenschaft, um zu bestimmen, welche der Datensätze analysiert werden sollen.

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
