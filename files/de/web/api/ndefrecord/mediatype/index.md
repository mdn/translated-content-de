---
title: "NDEFRecord: mediaType-Eigenschaft"
short-title: mediaType
slug: Web/API/NDEFRecord/mediaType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`mediaType`**-Eigenschaft der {{DOMxRef("NDEFRecord")}}-Schnittstelle gibt den {{Glossary("MIME type")}} des Datensatzes zurück. Dieser Wert ist `null`, wenn `recordType` nicht gleich `"mime"` ist.

## Syntax

```js-nolint
NDEFRecord.mediaType
```

### Wert

Ein String, der den {{Glossary("MIME type")}} der Datensatz-Nutzlast enthält.

## Beispiele

Das folgende Beispiel durchläuft die Datensätze in einem {{domxref("NDEFMessage")}}-Objekt, das von {{domxref("NDEFReadingEvent.message")}} abgerufen wird. Es verwendet dann die `mediaType`-Eigenschaft, um zu bestimmen, welche der Datensätze zu parsen sind.

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
