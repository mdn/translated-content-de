---
title: "NDEFMessage: NDEFMessage() Konstruktor"
short-title: NDEFMessage()
slug: Web/API/NDEFMessage/NDEFMessage
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{SecureContext_Header}}{{APIRef("Web NFC API")}}{{SeeCompatTable}}

Der **`NDEFMessage()`** Konstruktor erstellt ein neues [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt, das mit den angegebenen NDEF-Datensätzen initialisiert wird.

## Syntax

```js-nolint
new NDEFMessage(records)
```

### Parameter

- `records`
  - : Ein Array von Objekten mit den folgenden Mitgliedern:
    - `data` {{optional_inline}}
      - : Beinhaltet die zu übertragenden Daten; entweder ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein Array von verschachtelten Datensätzen.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Kodierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine vom Entwickler definierte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
    - `recordType`
      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Es muss einer der folgenden Werte sein:
        - `"absolute-url"`
          - : Eine absolute URL zu den Daten.
        - `"empty"`
          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).
        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
        - `"smart-poster"`
          - : Ein Smart-Poster, wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) Spezifikation definiert.
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
