---
title: "NDEFRecord: data-Eigenschaft"
short-title: data
slug: Web/API/NDEFRecord/data
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`data`**-Eigenschaft des {{DOMxRef("NDEFRecord")}}-Interfaces gibt ein
{{jsxref("DataView")}} zurück, das die Rohbytes der Nutzlast des Datensatzes enthält.

## Syntax

```js-nolint
NDEFRecord.data
```

### Wert

Ein {{jsxref("DataView")}}, das die kodierten Nutzlastdaten des Datensatzes enthält.

## Beispiele

Das folgende Beispiel iteriert über die Datensätze in einem {{domxref("NDEFMessage")}}
Objekt, das von {{domxref("NDEFReadingEvent.message")}} abgerufen wird. Nachdem ein Datensatz basierend auf seinem {{domxref("NDEFRecord.mediaType", "mediaType")}} ausgewählt wurde, wird das, was in der `data`-Eigenschaft gespeichert ist, dekodiert.

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
