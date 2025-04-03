---
title: NDEFRecord
slug: Web/API/NDEFRecord
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Das **`NDEFRecord`**-Interface der [Web NFC API](/de/docs/Web/API/Web_NFC_API) stellt Daten bereit, die von kompatiblen NFC-Geräten wie NDEF-unterstützenden NFC-Tags gelesen oder auf diese geschrieben werden können.

## Konstruktor

- [`NDEFRecord()`](/de/docs/Web/API/NDEFRecord/NDEFRecord) {{Experimental_Inline}}
  - : Gibt ein neues `NDEFRecord` zurück.

## Instanzeigenschaften

- [`NDEFRecord.recordType`](/de/docs/Web/API/NDEFRecord/recordType) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Aufzeichnungstyp des Datensatzes zurück. Datensätze müssen entweder einen standardisierten bekannten Typnamen wie `"empty"`, `"text"`, `"url"`, `"smart-poster"`, `"absolute-url"`, `"mime"` oder `"unknown"` haben, oder einen externen Typnamen, der aus einem Domainnamen und einem benutzerdefinierten Typnamen besteht, getrennt durch einen Doppelpunkt (":").
- [`NDEFRecord.mediaType`](/de/docs/Web/API/NDEFRecord/mediaType) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den {{Glossary("MIME_type", "MIME-Typ")}} des Datensatzes zurück. Dieser Wert ist `null`, wenn `recordType` nicht `"mime"` entspricht.
- [`NDEFRecord.id`](/de/docs/Web/API/NDEFRecord/id) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Kennung des Datensatzes zurück, die eine absolute oder relative URL ist, die zur Identifizierung des Datensatzes verwendet wird.
    > [!NOTE]
    > Die Einzigartigkeit der Kennung wird nur durch den Ersteller des Datensatzes gewährleistet.
- [`NDEFRecord.data`](/de/docs/Web/API/NDEFRecord/data) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("DataView")}} zurück, das die Rohbytes der Nutzlast des Datensatzes enthält.
- [`NDEFRecord.encoding`](/de/docs/Web/API/NDEFRecord/encoding) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Kodierung einer textuellen Nutzlast zurück oder `null` andernfalls.
- [`NDEFRecord.lang`](/de/docs/Web/API/NDEFRecord/lang) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die Sprache einer textuellen Nutzlast zurück oder `null`, wenn keine angegeben wurde.

## Instanzmethoden

- [`NDEFRecord.toRecords()`](/de/docs/Web/API/NDEFRecord/toRecords) {{Experimental_Inline}}
  - : Wandelt [`NDEFRecord.data`](/de/docs/Web/API/NDEFRecord/data) in eine Sequenz von Datensätzen um. Dies ermöglicht das Parsen der Nutzdaten von Aufzeichnungstypen, die verschachtelte Datensätze enthalten können, wie z.B. Smart Poster und externe Typdatensätze.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
