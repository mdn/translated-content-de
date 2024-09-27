---
title: "NDEFRecord: Methode toRecords()"
short-title: toRecords()
slug: Web/API/NDEFRecord/toRecords
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`toRecords()`** Methode der [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Schnittstelle konvertiert [`NDEFRecord.data`](/de/docs/Web/API/NDEFRecord/data) in eine Sequenz von Datensätzen basierend auf [`NDEFRecord.recordType`](/de/docs/Web/API/NDEFRecord/recordType) und gibt das Ergebnis zurück. Dies ermöglicht das Parsen von Nutzlasten von Datensatztypen, die möglicherweise verschachtelte Datensätze enthalten, wie etwa Smart-Poster und externe Typ-Datensätze.

## Syntax

```js-nolint
toRecords()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)s.

### Ausnahmen

- `NotSupported` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Gibt an, dass der [User Agent](/de/docs/Glossary/User_Agent) nicht weiß, wie diese Kombination von [`NDEFRecord.data`](/de/docs/Web/API/NDEFRecord/data) und [`NDEFRecord.recordType`](/de/docs/Web/API/NDEFRecord/recordType) zu parsen ist.

## Beispiele

Ein externes Datensatz mit einer NDEF-Nachricht als Nutzlast lesen

Das Beispiel verwendet externe Typ-Datensätze, um anwendungsdefinierte Datensätze zu erstellen. Diese Datensätze können eine [`NDEFMessage`](/de/docs/Web/API/NDEFMessage) als Nutzlast enthalten, mit ihren eigenen [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Objekten, einschließlich lokaler Typen, die im Kontext der Anwendung verwendet werden. Beachten Sie, dass der Smart-Poster-Datensatztyp ebenfalls eine NDEF-Nachricht als Nutzlast enthält.

Da NDEF keine Garantie für die Reihenfolge von Datensätzen gibt, kann die Verwendung eines externen Typ-Datensatzes mit einer NDEF-Nachricht als Nutzlast nützlich sein, um verwandte Daten zu kapseln.

Dieses Beispiel zeigt, wie man einen externen Datensatz für soziale Beiträge liest, der eine [`NDEFMessage`](/de/docs/Web/API/NDEFMessage) enthält, die einen Textdatensatz und einen Datensatz mit dem lokalen Typ "act" (Aktion) enthält, mit einer Definition, die aus dem Smart-Poster entlehnt ist, aber im lokalen Anwendungskontext verwendet wird.

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
