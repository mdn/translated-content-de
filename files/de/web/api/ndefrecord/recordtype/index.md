---
title: "NDEFRecord: recordType-Eigenschaft"
short-title: recordType
slug: Web/API/NDEFRecord/recordType
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Die **`recordType`**-Eigenschaft des [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Interfaces gibt den Rekordtyp des Datensatzes zurück.

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
  - : Ein {{Glossary("MIME_type", "MIME-Typ")}} NDEF-Datensatz.
- `"unknown"`
  - : Der NDEF-Datensatztyp ist unbekannt.
- lokale Typbezeichnung
  - : Stellt eine lokale Typbezeichnung dar, die häufig verwendet wird, um einen NDEF-Datensatz innerhalb eines anderen Datensatzes anzugeben.
- externe Typbezeichnung
  - : Ein benutzerdefinierter String, der aus einem Domainnamen und einer benutzerdefinierten Typbezeichnung besteht, getrennt durch einen Doppelpunkt (":").

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
