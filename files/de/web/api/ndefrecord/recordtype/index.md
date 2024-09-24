---
title: "NDEFRecord: Eigenschaft recordType"
short-title: recordType
slug: Web/API/NDEFRecord/recordType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`recordType`**-Eigenschaft der {{DOMxRef("NDEFRecord")}}-Schnittstelle gibt den Datensatztyp des Datensatzes zurück.

## Syntax

```js-nolint
NDEFRecord.recordType
```

### Wert

Ein String, der einer der folgenden Werte sein kann:

- `"empty"`
  - : Ein leerer NDEF-Datensatz.
- `"text"`
  - : Ein Text-NDEF-Datensatz.
- `"url"`
  - : Ein URI-NDEF-Datensatz.
- `"smart-poster"`
  - : Ein "Smart Poster" NDEF-Datensatz.
- `"absolute-url"`
  - : Ein absoluter URL-NDEF-Datensatz.
- `"mime"`
  - : Ein {{Glossary("MIME type")}} NDEF-Datensatz.
- `"unknown"`
  - : Der NDEF-Datensatztyp ist nicht bekannt.
- lokaler Typname
  - : Repräsentiert einen lokalen Typnamen, häufig verwendet, um einen eingebetteten NDEF-Datensatz
    in einem anderen Datensatz zu spezifizieren.
- externer Typname
  - : Ein benutzerdefinierter String, bestehend aus einem Domain-Namen und einem benutzerdefinierten Typnamen, getrennt durch einen Doppelpunkt (":").

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
