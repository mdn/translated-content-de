---
title: "NDEFRecord: NDEFRecord() Konstruktor"
short-title: NDEFRecord()
slug: Web/API/NDEFRecord/NDEFRecord
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Der **`NDEFRecord()`**-Konstruktor der [Web NFC API](/de/docs/Web/API/Web_NFC_API) gibt ein neu konstruiertes [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Objekt zurück, das Daten repräsentiert, die von kompatiblen NFC-Geräten, wie z. B. NFC-Tags, die NDEF unterstützen, gelesen oder auf diese geschrieben werden können.

## Syntax

```js-nolint
new NDEFRecord(options)
```

### Parameter

- `options`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `data` {{optional_inline}}
      - : Enthält die zu übermittelnden Daten. Es kann ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein Array verschachtelter Datensätze sein.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Kodierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler definierte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiges Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/MIME_types).
    - `recordType`

      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Es muss einer der folgenden Werte sein:

        - `"absolute-url"`

          Eine absolute URL zu den Daten.

          `"empty"`

          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).

        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/MIME_types).
        - `"smart-poster"`
          - : Ein Smart-Poster gemäß der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) Spezifikation.
        - `"text"`
          - : Text gemäß der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) Spezifikation.
        - `"unknown"`
          - : Der Typ des Datensatzes ist nicht bekannt.
        - `"URL"`
          - : Eine URL gemäß der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) Spezifikation.

### Rückgabewert

Ein neues [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
