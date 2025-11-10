---
title: "NDEFMessage: records-Eigenschaft"
short-title: records
slug: Web/API/NDEFMessage/records
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die `records`-Eigenschaft der [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Schnittstelle repräsentiert eine Liste von [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)s, die in der NDEF-Nachricht vorhanden sind.

## Wert

Eine Liste von [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Objekte, die die in der Nachricht aufgezeichneten Daten darstellen.

## Beispiele

Das folgende Beispiel zeigt, wie der Inhalt einer NDEF-Nachricht gelesen wird. Zuerst wird ein Ereignis-Handler für [`onreading`](/de/docs/Web/API/NDEFReader/reading_event) eingerichtet, der eine Instanz von [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent) übergeben bekommt. Ein `NDEFMessage`-Objekt wird von [`NDEFReadingEvent.message`](/de/docs/Web/API/NDEFReadingEvent/message) zurückgegeben. Es durchläuft `message.records` und verarbeitet jedes `record` basierend auf seinem Nachrichtentyp. Das Datenmitglied ist ein {{jsxref("DataView")}}, das es ermöglicht, mit in {{Glossary("UTF-16", "UTF-16")}} kodierten Daten umzugehen.

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
