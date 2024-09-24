---
title: "NDEFRecord: toRecords()-Methode"
short-title: toRecords()
slug: Web/API/NDEFRecord/toRecords
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`toRecords()`**-Methode des {{DOMxRef("NDEFRecord")}}-Interfaces konvertiert {{DOMxRef("NDEFRecord.data")}} in eine Sequenz von Datensätzen basierend auf {{DOMxRef("NDEFRecord.recordType")}} und gibt das Ergebnis zurück. Dies ermöglicht das Parsen der Nutzdaten von Datensatztypen, die verschachtelte Datensätze enthalten können, wie z.B. Smart-Poster- und Extern-Typ-Datensätze.

## Syntax

```js-nolint
toRecords()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von {{DOMxRef("NDEFRecord")}}-Objekten.

### Ausnahmen

- `NotSupported` {{domxref("DOMException")}}
  - : Gibt an, dass der {{Glossary("User Agent")}} nicht weiß, wie diese Kombination von {{DOMxRef("NDEFRecord.data")}} und {{DOMxRef("NDEFRecord.recordType")}} zu parsen ist.

## Beispiele

Ein externes Datensatz mit einer NDEF-Nachricht als Nutzlast lesen

Das Beispiel verwendet Extern-Typ-Datensätze, um anwendungsspezifische Datensätze zu erstellen. Diese Datensätze können eine {{domxref("NDEFMessage")}} als Nutzlast enthalten, die eigene {{domxref("NDEFRecord")}}-Objekte hat, einschließlich lokaler Typen, die im Kontext der Anwendung benutzt werden. Beachten Sie, dass der Smart-Poster-Datensatztyp ebenfalls eine NDEF-Nachricht als Nutzlast enthält.

Da NDEF keine Garantie für die Reihenfolge von Datensätzen bietet, kann die Verwendung eines Extern-Typs-Datensatzes mit einer NDEF-Nachricht als Nutzlast nützlich sein, um zusammengehörige Daten zu kapseln.

Dieses Beispiel zeigt, wie ein externer Datensatz für soziale Beiträge gelesen wird, der eine {{domxref("NDEFMessage")}} enthält, die einen Textdatensatz und einen Datensatz mit dem lokalen Typ "act" (Aktion), mit einer Definition von Smart-Poster ausgeliehen, aber im lokalen Anwendungskontext verwendet, enthält.

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
