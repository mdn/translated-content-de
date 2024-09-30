---
title: "NDEFReadingEvent: NDEFReadingEvent() Konstruktor"
short-title: NDEFReadingEvent()
slug: Web/API/NDEFReadingEvent/NDEFReadingEvent
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{securecontext_header}}{{APIRef}}{{SeeCompatTable}}

Der **`NDEFReadingEvent()`**-Konstruktor erstellt ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Objekt, welches Ereignisse darstellt, die bei neuen NFC-Ablesungen durch den [`NDEFReader`](/de/docs/Web/API/NDEFReader) ausgelöst werden.

## Syntax

```js-nolint
new NDEFReadingEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es immer auf `reading`.
- `options`

  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `serialNumber` {{optional_inline}}
      - : Die Seriennummer des Geräts, von dem eine Nachricht gelesen wurde. Standardmäßig ist es `""` und kann auf `null` gesetzt werden.
    - `message`

      - : Ein Objekt mit den folgenden Eigenschaften:

        - `data` {{optional_inline}}
          - : Enthält die zu übertragenden Daten. Es kann sich um einen String, einen {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}} oder ein Array verschachtelter Datensätze handeln.
        - `encoding` {{optional_inline}}
          - : Ein String, der die Kodierung des Datensatzes angibt.
        - `id` {{optional_inline}}
          - : Eine vom Entwickler definierte Kennung für den Datensatz.
        - `lang` {{optional_inline}}
          - : Ein gültiger Sprachcode gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
        - `mediaType` {{optional_inline}}
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
        - `recordType`

          - : Ein String, der den Typ der in `data` gespeicherten Daten angibt. Er muss einen der folgenden Werte haben:

            - `"absolute-url"`

              Eine absolute URL zu den Daten.

              `"empty"`

              - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).

            - `"mime"`
              - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
            - `"smart-poster"`
              - : Ein Smart-Poster, wie es in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter)-Spezifikation definiert ist.
            - `"text"`
              - : Text, wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text)-Spezifikation definiert.
            - `"unknown"`
              - : Der Typ des Datensatzes ist unbekannt.
            - `"URL"`
              - : Eine URL, wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri)-Spezifikation definiert.

### Rückgabewert

Ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
