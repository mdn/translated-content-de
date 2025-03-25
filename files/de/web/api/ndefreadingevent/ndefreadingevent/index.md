---
title: "NDEFReadingEvent: NDEFReadingEvent() Konstruktor"
short-title: NDEFReadingEvent()
slug: Web/API/NDEFReadingEvent/NDEFReadingEvent
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{securecontext_header}}{{APIRef}}{{SeeCompatTable}}

Der **`NDEFReadingEvent()`** Konstruktor erstellt ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Objekt, das Ereignisse darstellt, die bei neuen NFC-Lesungen von [`NDEFReader`](/de/docs/Web/API/NDEFReader) ausgelöst werden.

## Syntax

```js-nolint
new NDEFReadingEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses.
    Es ist groß-/klein-schreibungssensitiv und Browser setzen es immer auf `reading`.
- `options`

  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `serialNumber` {{optional_inline}}
      - : Die Seriennummer des Geräts, von dem eine Nachricht gelesen wurde. Standardmäßig `""` und kann auf `null` gesetzt werden.
    - `message`

      - : Ein Objekt mit den folgenden Mitgliedern:

        - `data` {{optional_inline}}
          - : Enthält die zu übertragenden Daten. Es kann sich um einen String, einen {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}} oder ein Array verschachtelter Datensätze handeln.
        - `encoding` {{optional_inline}}
          - : Ein String, der die Kodierung des Datensatzes angibt.
        - `id` {{optional_inline}}
          - : Eine vom Entwickler definierte Kennung für den Datensatz.
        - `lang` {{optional_inline}}
          - : Ein gültiges Sprach-Tag gemäß {{RFC(5646, "Tags für die Identifizierung von Sprachen (auch bekannt als BCP 47)")}}.
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
              - : Ein Smart-Poster, wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter)-Spezifikation definiert.
            - `"text"`
              - : Text, wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text)-Spezifikation definiert.
            - `"unknown"`
              - : Der Datensatztyp ist nicht bekannt.
            - `"URL"`
              - : Eine URL, wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri)-Spezifikation definiert.

### Rückgabewert

Ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
