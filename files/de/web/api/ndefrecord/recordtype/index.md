---
title: "NDEFRecord: recordType-Eigenschaft"
short-title: recordType
slug: Web/API/NDEFRecord/recordType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`recordType`**-Eigenschaft der [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Schnittstelle gibt den Typ des Datensatzes zurück.

## Syntax

```js-nolint
NDEFRecord.recordType
```

### Wert

Ein String, der einer der folgenden sein kann:

- `"empty"`
  - : Ein leerer NDEF-Datensatz.
- `"text"`
  - : Ein Text-NDEF-Datensatz.
- `"url"`
  - : Ein URI-NDEF-Datensatz.
- `"smart-poster"`
  - : Ein "Smart Poster"-NDEF-Datensatz.
- `"absolute-url"`
  - : Ein absoluter URL-NDEF-Datensatz.
- `"mime"`
  - : Ein [MIME-Typ](/de/docs/Glossary/MIME_type)-NDEF-Datensatz.
- `"unknown"`
  - : Der NDEF-Datensatztyp ist nicht bekannt.
- lokaler Typname
  - : Repräsentiert einen lokalen Typnamen, der häufig verwendet wird, um einen NDEF-Datensatz anzugeben, der in einem anderen Datensatz eingebettet ist.
- externer Typname
  - : Ein benutzerdefinierter String bestehend aus einem Domainnamen und einem benutzerdefinierten Typnamen, getrennt durch einen Doppelpunkt (":").

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
