---
title: "NDEFMessage: records Eigenschaft"
short-title: records
slug: Web/API/NDEFMessage/records
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die Eigenschaft `records` der [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Schnittstelle repräsentiert eine Liste von [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Objekten, die in der NDEF-Nachricht vorhanden sind.

## Wert

Eine Liste von [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Objekten, die die in der Nachricht aufgezeichneten Daten darstellen.

## Beispiele

Das folgende Beispiel zeigt, wie der Inhalt einer NDEF-Nachricht gelesen wird. Es wird zunächst ein Ereignishandler für [`onreading`](/de/docs/Web/API/NDEFReader/reading_event) eingerichtet, dem eine Instanz von [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent) übergeben wird. Ein `NDEFMessage`-Objekt wird aus [`NDEFReadingEvent.message`](/de/docs/Web/API/NDEFReadingEvent/message) zurückgegeben. Es wird über `message.records` iteriert und jeder Datensatz basierend auf seinem Nachrichtentyp verarbeitet. Das Datenmitglied ist ein {{jsxref("DataView")}}, das den Umgang mit in UTF-16 kodierten Daten ermöglicht.

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
