---
title: "NDEFRecord: mediaType-Eigenschaft"
short-title: mediaType
slug: Web/API/NDEFRecord/mediaType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`mediaType`**-Eigenschaft der [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Schnittstelle gibt den [MIME-Typ](/de/docs/Glossary/MIME_type) des Datensatzes zurück. Dieser Wert ist `null`, wenn `recordType` nicht gleich `"mime"` ist.

## Syntax

```js-nolint
NDEFRecord.mediaType
```

### Wert

Ein String, der den [MIME-Typ](/de/docs/Glossary/MIME_type) der Nutzlast des Datensatzes enthält.

## Beispiele

Das folgende Beispiel durchläuft die Datensätze in einem [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt, das aus [`NDEFReadingEvent.message`](/de/docs/Web/API/NDEFReadingEvent/message) abgerufen wird. Anschließend wird die `mediaType`-Eigenschaft verwendet, um festzustellen, welche der Datensätze zu analysieren sind.

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
