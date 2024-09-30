---
title: "NDEFRecord: NDEFRecord() Konstruktor"
short-title: NDEFRecord()
slug: Web/API/NDEFRecord/NDEFRecord
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Der **`NDEFRecord()`** Konstruktor der [Web NFC API](/de/docs/Web/API/Web_NFC_API) gibt ein neu erstelltes [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)-Objekt zurück, das Daten repräsentiert, die von kompatiblen NFC-Geräten gelesen oder auf diese geschrieben werden können, z. B. NFC-Tags, die NDEF unterstützen.

## Syntax

```js-nolint
new NDEFRecord(options)
```

### Parameter

- `options`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten. Es kann sich um einen String, einen {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}} oder ein Array verschachtelter Datensätze handeln.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Codierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler festgelegte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiger Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
    - `recordType`

      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Es muss einer der folgenden Werte sein:

        - `"absolute-url"`

          Eine absolute URL zu den Daten.

          `"empty"`

          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).

        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
        - `"smart-poster"`
          - : Ein Smart Poster wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) Spezifikation definiert.
        - `"text"`
          - : Text wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) Spezifikation definiert.
        - `"unknown"`
          - : Der Datensatztyp ist nicht bekannt.
        - `"URL"`
          - : Eine URL wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) Spezifikation definiert.

### Rückgabewert

Ein neues [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
