---
title: "NDEFRecord: recordType-Eigenschaft"
short-title: recordType
slug: Web/API/NDEFRecord/recordType
l10n:
  sourceCommit: 5e3c69527de87e8ff9407de62e919db9254f0627
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`recordType`**-Eigenschaft der [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Schnittstelle gibt den Record-Typ des Datensatzes zurück.

## Wert

Ein String, der einer der folgenden Werte sein kann:

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
  - : Ein {{Glossary("MIME_type", "MIME-Typ")}}-NDEF-Datensatz.
- `"unknown"`
  - : Der NDEF-Datensatztyp ist nicht bekannt.
- lokaler Typname
  - : Repräsentiert einen lokalen Typnamen, der häufig verwendet wird, um einen NDEF-Datensatz zu spezifizieren, der in einem anderen Datensatz eingebettet ist.
- externer Typname
  - : Ein benutzerdefinierter String, der aus einem Domainnamen und einem benutzerdefinierten Typnamen besteht, getrennt durch einen Doppelpunkt (":").

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
