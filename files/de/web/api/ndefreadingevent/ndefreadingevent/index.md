---
title: "NDEFReadingEvent: NDEFReadingEvent() Konstruktor"
short-title: NDEFReadingEvent()
slug: Web/API/NDEFReadingEvent/NDEFReadingEvent
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web NFC API")}}{{securecontext_header}}{{SeeCompatTable}}

Der **`NDEFReadingEvent()`**-Konstruktor erstellt ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Objekt, das Ereignisse darstellt, die bei neuen NFC-Lesungen durch einen [`NDEFReader`](/de/docs/Web/API/NDEFReader) ausgelöst werden.

## Syntax

```js-nolint
new NDEFReadingEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist Groß-/Kleinschreibungssensitiv und Browser setzen es immer auf `reading`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `serialNumber` {{optional_inline}}
      - : Die Seriennummer des Geräts, von dem eine Nachricht gelesen wurde. Standardmäßig ist es `""`, und es kann auf `null` gesetzt werden.
    - `message`
      - : Ein Objekt mit den folgenden Mitgliedern:
        - `data` {{optional_inline}}
          - : Enthält die zu übertragenden Daten. Es kann ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein Array von verschachtelten Datensätzen sein.
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
              - : Ein Smart-Poster, wie es in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter)-Spezifikation definiert ist.
            - `"text"`
              - : Text, wie er in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text)-Spezifikation definiert ist.
            - `"unknown"`
              - : Der Datensatztyp ist nicht bekannt.
            - `"URL"`
              - : Eine URL, wie sie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri)-Spezifikation definiert ist.

### Rückgabewert

Ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
