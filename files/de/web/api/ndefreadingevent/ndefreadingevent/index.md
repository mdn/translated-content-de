---
title: "NDEFReadingEvent: NDEFReadingEvent() Konstruktor"
short-title: NDEFReadingEvent()
slug: Web/API/NDEFReadingEvent/NDEFReadingEvent
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
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
    Er ist groß-/klein-schreibungsempfindlich und Browser setzen ihn immer auf `reading`.
- `options`

  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `serialNumber` {{optional_inline}}
      - : Die Seriennummer des Geräts, von dem eine Nachricht gelesen wurde. Standardmäßig `""` und kann auf `null` gesetzt werden.
    - `message`

      - : Ein Objekt mit den folgenden Mitgliedern:

        - `data` {{optional_inline}}
          - : Enthält die zu übertragenden Daten. Es kann sich um einen String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein Array von geschachtelten Einträgen handeln.
        - `encoding` {{optional_inline}}
          - : Ein String, der die Kodierung des Eintrags spezifiziert.
        - `id` {{optional_inline}}
          - : Eine vom Entwickler definierte Kennung für den Eintrag.
        - `lang` {{optional_inline}}
          - : Ein gültiges Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
        - `mediaType` {{optional_inline}}
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
        - `recordType`

          - : Ein String, der den in `data` gespeicherten Datentyp angibt. Er muss einer der folgenden Werte sein:

            - `"absolute-url"`

              Eine absolute URL zu den Daten.

              `"empty"`

              - : Ein leerer [`NDEFRecord`](/de/docs/Web/API/NDEFRecord).

            - `"mime"`
              - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
            - `"smart-poster"`
              - : Ein Smartposter, wie es in der [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) Spezifikation definiert ist.
            - `"text"`
              - : Text, wie in der [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) Spezifikation definiert.
            - `"unknown"`
              - : Der Eintragstyp ist unbekannt.
            - `"URL"`
              - : Eine URL, wie in der [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) Spezifikation definiert.

### Rückgabewert

Ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
