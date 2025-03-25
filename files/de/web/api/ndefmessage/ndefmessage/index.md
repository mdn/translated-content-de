---
title: "NDEFMessage: NDEFMessage() Konstruktor"
short-title: NDEFMessage()
slug: Web/API/NDEFMessage/NDEFMessage
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{SecureContext_Header}}{{APIRef("Web NFC API")}}{{SeeCompatTable}}

Der **`NDEFMessage()`** Konstruktor erstellt ein neues [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt, das mit den angegebenen NDEF-Datensätzen initialisiert wird.

## Syntax

```js-nolint
new NDEFMessage(records)
```

### Parameter

- `records`

  - : Ein Array von Objekten mit den folgenden Elementen:

    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten; entweder ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein Array von verschachtelten Datensätzen.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Codierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Ein vom Entwickler definierter Bezeichner für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiger Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
    - `recordType`
      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Er muss einen der folgenden Werte haben:
        - `"absolute-url"`
          - : Eine absolute URL zu den Daten.
        - `"empty"`
          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).
        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
        - `"smart-poster"`
          - : Ein Smart Poster, wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) Spezifikation definiert.
        - `"text"`
          - : Text, wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) Spezifikation definiert.
        - `"unknown"`
          - : Der Datensatztyp ist nicht bekannt.
        - `"URL"`
          - : Eine URL, wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) Spezifikation definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
