---
title: NDEFRecord
slug: Web/API/NDEFRecord
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`NDEFRecord`**-Schnittstelle der [Web NFC API](/de/docs/Web/API/Web_NFC_API) stellt Daten bereit, die von kompatiblen NFC-Geräten, z.B. NDEF-unterstützenden NFC-Tags, gelesen oder geschrieben werden können.

## Konstruktor

- [`NDEFRecord()`](/de/docs/Web/API/NDEFRecord/NDEFRecord) {{Experimental_Inline}}
  - : Gibt ein neues `NDEFRecord` zurück.

## Instanz-Eigenschaften

- [`NDEFRecord.recordType`](/de/docs/Web/API/NDEFRecord/recordType) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Datensatztyp des Datensatzes zurück. Datensätze müssen entweder einen standardisierten, bekannten Typnamen wie `"empty"`, `"text"`, `"url"`, `"smart-poster"`, `"absolute-url"`, `"mime"` oder `"unknown"` haben oder einen externen Typnamen, der aus einem Domainnamen und einem benutzerdefinierten Typnamen, getrennt durch einen Doppelpunkt (":"), besteht.
- [`NDEFRecord.mediaType`](/de/docs/Web/API/NDEFRecord/mediaType) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den [MIME-Typ](/de/docs/Glossary/MIME_type) des Datensatzes zurück. Dieser Wert ist `null`, wenn `recordType` nicht gleich `"mime"` ist.
- [`NDEFRecord.id`](/de/docs/Web/API/NDEFRecord/id) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Datensatzkennung zurück, die eine absolute oder relative URL ist, die zur Identifizierung des Datensatzes verwendet wird.
    > [!NOTE]
    > Die Einzigartigkeit der Kennung wird nur durch den Ersteller des Datensatzes erzwungen.
- [`NDEFRecord.data`](/de/docs/Web/API/NDEFRecord/data) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine {{jsxref("DataView")}} mit den Rohdaten des Datensatzes zurück.
- [`NDEFRecord.encoding`](/de/docs/Web/API/NDEFRecord/encoding) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Kodierung einer textuellen Nutzlast zurück oder `null` andernfalls.
- [`NDEFRecord.lang`](/de/docs/Web/API/NDEFRecord/lang) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Sprache einer textuellen Nutzlast zurück oder `null`, wenn keine angegeben wurde.

## Instanz-Methoden

- [`NDEFRecord.toRecords()`](/de/docs/Web/API/NDEFRecord/toRecords) {{Experimental_Inline}}
  - : Konvertiert [`NDEFRecord.data`](/de/docs/Web/API/NDEFRecord/data) in eine Sequenz von Datensätzen. Dies ermöglicht das Parsen der Nutzlasten von Datensatztypen, die verschachtelte Datensätze enthalten können, wie z.B. Smart Poster und externe Typdatensätze.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
