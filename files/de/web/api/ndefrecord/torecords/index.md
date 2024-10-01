---
title: "NDEFRecord: Methode toRecords()"
short-title: toRecords()
slug: Web/API/NDEFRecord/toRecords
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die Methode **`toRecords()`** der [`NDEFRecord`](/de/docs/Web/API/NDEFRecord) Schnittstelle konvertiert [`NDEFRecord.data`](/de/docs/Web/API/NDEFRecord/data) in eine Sequenz von Datensätzen basierend auf [`NDEFRecord.recordType`](/de/docs/Web/API/NDEFRecord/recordType) und gibt das Ergebnis zurück. Dies ermöglicht das Parsen von Nutzlasten von Datentypen, die möglicherweise verschachtelte Datensätze enthalten, wie z.B. Smart-Poster- und externe Typ-Datensätze.

## Syntax

```js-nolint
toRecords()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).

### Ausnahmen

- `NotSupported` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Gibt an, dass der {{Glossary("User_Agent", "User Agent")}} nicht weiß, wie diese Kombination aus [`NDEFRecord.data`](/de/docs/Web/API/NDEFRecord/data) und [`NDEFRecord.recordType`](/de/docs/Web/API/NDEFRecord/recordType) zu parsen ist.

## Beispiele

Ein externes Datenelement mit einer NDEF-Nachricht als Nutzlast lesen

Das Beispiel verwendet externe Typ-Datensätze, um anwendungsspezifische Datensätze zu erstellen. Diese Datensätze können eine [`NDEFMessage`](/de/docs/Web/API/NDEFMessage) als Nutzlast enthalten, mit ihren eigenen [`NDEFRecord`](/de/docs/Web/API/NDEFRecord) Objekten, einschließlich lokaler Typen, die im Kontext der Anwendung verwendet werden. Beachten Sie, dass der Smart-Poster-Datentyp ebenfalls eine NDEF-Nachricht als Nutzlast enthält.

Da NDEF keine Garantie für die Reihenfolge der Datensätze gibt, kann es nützlich sein, einen externen Typ-Datensatz mit einer NDEF-Nachricht als Nutzlast zu verwenden, um verwandte Daten zu kapseln.

Dieses Beispiel zeigt, wie man einen externen Datensatz für soziale Beiträge liest, der eine [`NDEFMessage`](/de/docs/Web/API/NDEFMessage) enthält, in der sich ein Textdatensatz und ein Datensatz mit dem lokalen Typ „act“ (Aktion) befinden, mit einer Definition, die von Smart Poster entlehnt, aber im lokalen Anwendungskontext verwendet wird.

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
