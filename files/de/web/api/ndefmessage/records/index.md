---
title: "NDEFMessage: records-Eigenschaft"
short-title: records
slug: Web/API/NDEFMessage/records
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `records`-Eigenschaft der {{DOMxRef("NDEFMessage")}}-Schnittstelle repräsentiert eine Liste von {{DOMxRef("NDEFRecord")}}, die in der NDEF-Nachricht vorhanden sind.

## Wert

Eine Liste von {{DOMxRef("NDEFRecord")}}-Objekten, die die in der Nachricht aufgezeichneten Daten darstellen.

## Beispiele

Das folgende Beispiel zeigt, wie man den Inhalt einer NDEF-Nachricht liest. Zuerst wird ein Ereignishandler für {{domxref("NDEFReader.reading_event", "onreading")}} eingerichtet, dem eine Instanz von {{domxref("NDEFReadingEvent")}} übergeben wird. Ein `NDEFMessage`-Objekt wird von {{domxref("NDEFReadingEvent.message")}} zurückgegeben. Es wird durch `message.records` iteriert und jeder Datensatz basierend auf seinem Nachrichtentyp verarbeitet. Das Datenmitglied ist ein {{jsxref("DataView")}}, das die Handhabung von Daten ermöglicht, die in UTF-16 codiert sind.

```js
ndefReaderInst.onreading = (event) => {
  const ndefMessage = event.message;
  for (const record of ndefMessage.records) {
    console.log(`Record type:  ${record.recordType}`);
    console.log(`MIME type:    ${record.mediaType}`);
    console.log(`Record id:    ${record.id}`);
    switch (record.recordType) {
      case "text":
        // TODO: Read text record with record data, lang, and encoding.
        break;
      case "url":
        // TODO: Read URL record with record data.
        break;
      default:
      // TODO: Handle other records with record data.
    }
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
