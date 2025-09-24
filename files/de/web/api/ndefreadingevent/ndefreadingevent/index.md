---
title: "NDEFReadingEvent: NDEFReadingEvent() Konstruktor"
short-title: NDEFReadingEvent()
slug: Web/API/NDEFReadingEvent/NDEFReadingEvent
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{securecontext_header}}{{APIRef}}{{SeeCompatTable}}

Der **`NDEFReadingEvent()`** Konstruktor erstellt ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent) Objekt, das Ereignisse darstellt, die bei neuen NFC-Lesungen von [`NDEFReader`](/de/docs/Web/API/NDEFReader) ausgelöst werden.

## Syntax

```js-nolint
new NDEFReadingEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es immer auf `reading`.
- `options`
  - : Ein Objekt, das neben den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften auch die folgenden Eigenschaften haben kann:
    - `serialNumber` {{optional_inline}}
      - : Die Seriennummer des Geräts, von dem eine Nachricht gelesen wurde. Der Standardwert ist `""` und kann auf `null` gesetzt werden.
    - `message`
      - : Ein Objekt mit den folgenden Mitgliedern:
        - `data` {{optional_inline}}
          - : Beinhaltet die zu übertragenden Daten. Es kann ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}} oder ein Array von verschachtelten Datensätzen sein.
        - `encoding` {{optional_inline}}
          - : Ein String, der die Codierung des Datensatzes angibt.
        - `id` {{optional_inline}}
          - : Eine vom Entwickler definierte Kennung für den Datensatz.
        - `lang` {{optional_inline}}
          - : Ein gültiger {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}.
        - `mediaType` {{optional_inline}}
          - : Ein gültiger [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types).
        - `recordType`
          - : Ein String, der den Datentyp in `data` angibt. Er muss einer der folgenden Werte sein:
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

### Rückgabewert

Ein neues [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
