---
title: "NDEFMessage: NDEFMessage()-Konstruktor"
short-title: NDEFMessage()
slug: Web/API/NDEFMessage/NDEFMessage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SecureContext_Header}}{{APIRef("Web NFC API")}}{{SeeCompatTable}}

Der **`NDEFMessage()`**-Konstuktor erstellt ein neues [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt, das mit den angegebenen NDEF-Records initialisiert wird.

## Syntax

```js-nolint
new NDEFMessage(records)
```

### Parameter

- `records`
  - : Ein Array von Objekten mit folgenden Mitgliedern:
    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten; eines von einem String, einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}}, einem {{jsxref("DataView")}} oder einem Array von verschachtelten Records.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Kodierung des Records angibt.
    - `id` {{optional_inline}}
      - : Eine von der Entwicklerin / dem Entwickler definierte Kennung für den Record.
    - `lang` {{optional_inline}}
      - : Ein gültiger Sprachcode gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
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
          - : Ein Smart Poster wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter)-Spezifikation definiert.
        - `"text"`
          - : Text wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text)-Spezifikation definiert.
        - `"unknown"`
          - : Der Recordtyp ist nicht bekannt.
        - `"URL"`
          - : Eine URL wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri)-Spezifikation definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
