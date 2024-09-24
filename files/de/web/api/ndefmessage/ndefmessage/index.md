---
title: "NDEFMessage: NDEFMessage()-Konstruktor"
short-title: NDEFMessage()
slug: Web/API/NDEFMessage/NDEFMessage
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{SecureContext_Header}}{{APIRef("Web NFC API")}}{{SeeCompatTable}}

Der **`NDEFMessage()`**-Konstruktor erzeugt ein neues [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt, das mit den angegebenen NDEF-Datensätzen initialisiert wird.

## Syntax

```js-nolint
new NDEFMessage(records)
```

### Parameter

- `records`

  - : Ein Array von Objekten mit den folgenden Mitgliedern:

    - `data` {{optional_inline}}
      - : Enthält die zu übertragenden Daten; entweder ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein Array von verschachtelten Datensätzen.
    - `encoding` {{optional_inline}}
      - : Ein String, der die Kodierung des Datensatzes angibt.
    - `id` {{optional_inline}}
      - : Eine von Entwicklern definierte Kennung für den Datensatz.
    - `lang` {{optional_inline}}
      - : Ein gültiges Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/MIME_types).
    - `recordType`

      - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Dieser muss einen der folgenden Werte haben:

        - `"absolute-url"`

          Eine absolute URL zu den Daten.

          `"empty"`

          - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).

        - `"mime"`
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/MIME_types).
        - `"smart-poster"`
          - : Ein Smart Poster, wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter)-Spezifikation definiert.
        - `"text"`
          - : Text, wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text)-Spezifikation definiert.
        - `"unknown"`
          - : Der Datensatztyp ist unbekannt.
        - `"URL"`
          - : Eine URL, wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri)-Spezifikation definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
