---
title: "NDEFRecord: NDEFRecord()-Konstruktor"
short-title: NDEFRecord()
slug: Web/API/NDEFRecord/NDEFRecord
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Der **`NDEFRecord()`**
Konstruktor der [Web NFC API](/de/docs/Web/API/Web_NFC_API) gibt ein
neu konstruiertes [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Objekt zurück, das Daten darstellt, die von kompatiblen NFC-Geräten gelesen oder auf diese geschrieben werden können, z.B. NFC-Tags, die NDEF unterstützen.

## Syntax

```js-nolint
new NDEFRecord(options)
```

### Parameter

- `options`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten. Es kann sich um einen String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein Array verschachtelter Datensätze handeln.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Codierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler definierte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiger {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcode")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
    - `recordType`
      - : Ein String, der den Datentyp angibt, der in `data` gespeichert ist. Er muss einen der folgenden Werte haben:
        - `"absolute-url"`
          - : Eine absolute URL zu den Daten.
        - `"empty"`
          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).
        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
        - `"smart-poster"`
          - : Ein Smart-Poster gemäß der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) Spezifikation.
        - `"text"`
          - : Text gemäß der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) Spezifikation.
        - `"unknown"`
          - : Der Datensatztyp ist nicht bekannt.
        - `"URL"`
          - : Eine URL gemäß der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) Spezifikation.

### Rückgabewert

Ein neues [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
