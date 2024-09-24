---
title: "NDEFReadingEvent: NDEFReadingEvent() Konstruktor"
short-title: NDEFReadingEvent()
slug: Web/API/NDEFReadingEvent/NDEFReadingEvent
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{securecontext_header}}{{APIRef}}{{SeeCompatTable}}

Der **`NDEFReadingEvent()`** Konstruktor erstellt ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent) Objekt, das Ereignisse darstellt, die bei neuen NFC-Lesungen durch den [`NDEFReader`](/de/docs/Web/API/NDEFReader) ausgelöst werden.

## Syntax

```js-nolint
new NDEFReadingEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/klein-schreibungsempfindlich und wird von Browsern immer auf `reading` gesetzt.
- `options`

  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `serialNumber` {{optional_inline}}
      - : Die Seriennummer des Geräts, von dem die Nachricht gelesen wurde. Standardmäßig `""`, und kann auf `null` gesetzt werden.
    - `message`

      - : Ein Objekt mit den folgenden Mitgliedern:

        - `data` {{optional_inline}}
          - : Enthält die zu übertragenden Daten. Dies kann ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein Array von verschachtelten Datensätzen sein.
        - `encoding` {{optional_inline}}
          - : Ein String, der die Codierung des Datensatzes angibt.
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
              - : Ein Smart-Poster wie in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) Spezifikation definiert.
            - `"text"`
              - : Text wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) Spezifikation definiert.
            - `"unknown"`
              - : Der Datensatztyp ist unbekannt.
            - `"URL"`
              - : Eine URL wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) Spezifikation definiert.

### Rückgabewert

Ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
