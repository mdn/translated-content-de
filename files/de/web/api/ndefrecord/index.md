---
title: NDEFRecord
slug: Web/API/NDEFRecord
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`NDEFRecord`**-Schnittstelle der [Web NFC API](/de/docs/Web/API/Web_NFC_API) stellt Daten bereit, die von kompatiblen NFC-Geräten, z. B. NFC-Tags, die NDEF unterstützen, gelesen oder auf diese geschrieben werden können.

## Konstruktor

- {{DOMxRef("NDEFRecord.NDEFRecord", "NDEFRecord()")}} {{Experimental_Inline}}
  - : Gibt ein neues `NDEFRecord` zurück.

## Instanz-Eigenschaften

- {{DOMxRef("NDEFRecord.recordType")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Typ des Datensatzes zurück. Datensätze müssen entweder einen standardisierten, bekannten Typnamen wie `"empty"`, `"text"`, `"url"`, `"smart-poster"`, `"absolute-url"`, `"mime"` oder `"unknown"` haben oder einen externen Typnamen, der aus einem Domainnamen und einem benutzerdefinierten Typnamen besteht, getrennt durch einen Doppelpunkt (":").
- {{DOMxRef("NDEFRecord.mediaType")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den {{Glossary("MIME type")}} des Datensatzes zurück. Dieser Wert ist `null`, wenn `recordType` nicht gleich `"mime"` ist.
- {{DOMxRef("NDEFRecord.id")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Kennung des Datensatzes zurück, die eine absolute oder relative URL ist, die zur Identifizierung des Datensatzes verwendet wird.
    > [!NOTE]
    > Die Einzigartigkeit des Identifikators wird nur vom Ersteller des Datensatzes durchgesetzt.
- {{DOMxRef("NDEFRecord.data")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine {{jsxref("DataView")}} zurück, die die Rohbytes der Nutzlast des Datensatzes enthält.
- {{DOMxRef("NDEFRecord.encoding")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Codierung einer textuellen Nutzlast zurück oder `null` in anderen Fällen.
- {{DOMxRef("NDEFRecord.lang")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Sprache einer textuellen Nutzlast zurück oder `null`, wenn keine angegeben wurde.

## Instanz-Methoden

- {{DOMxRef("NDEFRecord.toRecords", "NDEFRecord.toRecords()")}} {{Experimental_Inline}}
  - : Konvertiert {{DOMxRef("NDEFRecord.data")}} in eine Sequenz von Datensätzen. Dies ermöglicht das Parsen von Nutzlasten von Datensatztypen, die verschachtelte Datensätze enthalten können, wie z.B. Smartposter- und externe Typ-Datensätze.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
