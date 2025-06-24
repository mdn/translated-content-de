---
title: "NDEFRecord: NDEFRecord() Konstruktor"
short-title: NDEFRecord()
slug: Web/API/NDEFRecord/NDEFRecord
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Der **`NDEFRecord()`**
Konstruktor der [Web NFC API](/de/docs/Web/API/Web_NFC_API) gibt ein neu konstruiertes [`NDEFRecord`](/de/docs/Web/API/NDEFRecord) Objekt zurück, das Daten repräsentiert, die von kompatiblen NFC-Geräten gelesen oder auf diese geschrieben werden können; z. B. NFC-Tags, die NDEF unterstützen.

## Syntax

```js-nolint
new NDEFRecord(options)
```

### Parameter

- `options`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten. Es kann sich um einen String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein Array aus verschachtelten Datensätzen handeln.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Kodierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler definierte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiger Sprach-Tag gemäß {{RFC(5646, "Tags zur Identifizierung von Sprachen (auch bekannt als BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
    - `recordType`
      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Er muss einer der folgenden Werte sein:
        - `"absolute-url"`
          - : Eine absolute URL zu den Daten.
        - `"empty"`
          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).
        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
        - `"smart-poster"`
          - : Ein Smartposter, wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) Spezifikation definiert.
        - `"text"`
          - : Text, wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) Spezifikation definiert.
        - `"unknown"`
          - : Der Typ des Datensatzes ist nicht bekannt.
        - `"URL"`
          - : Eine URL, wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) Spezifikation definiert.

### Rückgabewert

Ein neues [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
