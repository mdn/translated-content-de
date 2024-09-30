---
title: "NDEFRecord: data-Eigenschaft"
short-title: data
slug: Web/API/NDEFRecord/data
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`data`**-Eigenschaft des [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Interfaces gibt ein {{jsxref("DataView")}} zurück, das die Rohbytes der Nutzlast des Records enthält.

## Syntax

```js-nolint
NDEFRecord.data
```

### Wert

Ein {{jsxref("DataView")}}, das die kodierten Nutzlastdaten des Records enthält.

## Beispiele

Das folgende Beispiel durchläuft die Records in einem [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt, das aus [`NDEFReadingEvent.message`](/de/docs/Web/API/NDEFReadingEvent/message) abgerufen wird. Nachdem ein Record basierend auf seinem [`mediaType`](/de/docs/Web/API/NDEFRecord/mediaType) ausgewählt wurde, wird dekodiert, was in der `data`-Eigenschaft gespeichert ist.

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
