---
title: "NDEFRecord: Methode toRecords()"
short-title: toRecords()
slug: Web/API/NDEFRecord/toRecords
l10n:
  sourceCommit: 6e52a630cb324d0d74e5968661b7e270ac7df93e
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die Methode **`toRecords()`** der Schnittstelle [`NDEFRecord`](/de/docs/Web/API/NDEFRecord) wandelt [`NDEFRecord.data`](/de/docs/Web/API/NDEFRecord/data) anhand von [`NDEFRecord.recordType`](/de/docs/Web/API/NDEFRecord/recordType) in eine Folge von Datensätzen um und gibt das Ergebnis zurück. Damit lassen sich die Nutzdaten von Datensatztypen auswerten, die verschachtelte Datensätze enthalten können, beispielsweise Smart-Poster-Datensätze und externe Typdatensätze.

## Syntax

```js-nolint
toRecords()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Objekten.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Gibt an, dass der {{Glossary("User_Agent", "User-Agent")}} nicht weiß, wie diese Kombination aus [`NDEFRecord.data`](/de/docs/Web/API/NDEFRecord/data) und [`NDEFRecord.recordType`](/de/docs/Web/API/NDEFRecord/recordType) auszuwerten ist.

## Beispiele

Einen externen Datensatz mit einer NDEF-Nachricht als Nutzdaten lesen

Das Beispiel verwendet externe Typdatensätze, um anwendungsdefinierte Datensätze zu erstellen. Diese Datensätze können eine [`NDEFMessage`](/de/docs/Web/API/NDEFMessage) als Nutzdaten enthalten, die ihrerseits [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Objekte umfasst. Dazu gehören lokale Typen, die im Kontext der Anwendung verwendet werden. Beachten Sie, dass auch der Smart-Poster-Datensatztyp eine NDEF-Nachricht als Nutzdaten enthält.

Da NDEF keine Reihenfolge der Datensätze garantiert, kann es nützlich sein, zusammengehörige Daten in einem externen Typdatensatz mit einer NDEF-Nachricht als Nutzdaten zu kapseln.

Dieses Beispiel zeigt, wie ein externer Datensatz für Social-Media-Beiträge gelesen wird. Er enthält eine [`NDEFMessage`](/de/docs/Web/API/NDEFMessage) mit einem Textdatensatz und einem Datensatz des lokalen Typs „act“ (Aktion). Die Definition dieses Typs ist vom Smart Poster übernommen, wird hier aber im lokalen Anwendungskontext verwendet.

```js
const ndefReader = new NDEFReader();
await ndefReader.scan();
ndefReader.onreading = (event) => {
  const externalRecord = event.message.records.find(
    (record) => record.type === "example.com:smart-poster",
  );

  let action, text;

  for (const record of externalRecord.toRecords()) {
    if (record.recordType === "text") {
      const decoder = new TextDecoder(record.encoding);
      text = decoder.decode(record.data);
    } else if (record.recordType === ":act") {
      action = record.data.getUint8(0);
    }
  }

  switch (action) {
    case 0: // do the action
      console.log(`Post "${text}" to timeline`);
      break;
    case 1: // save for later
      console.log(`Save "${text}" as a draft`);
      break;
    case 2: // open for editing
      console.log(`Show editable post with "${text}"`);
      break;
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
