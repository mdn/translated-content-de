---
title: "TextFormat: TextFormat() Konstruktor"
short-title: TextFormat()
slug: Web/API/TextFormat/TextFormat
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Der **`TextFormat()`** Konstruktor gibt ein neues {{DOMxRef("TextFormat")}}-Objekt zurück.

## Syntax

```js-nolint
new TextFormat()
new TextFormat(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `rangeStart`
      - : Eine Zahl, die die Startposition des Textbereichs darstellt, der formatiert werden muss.
    - `rangeEnd`
      - : Eine Zahl, die die Endposition des Textbereichs darstellt, der formatiert werden muss.
    - `underlineStyle`
      - : Ein String, der den Unterstreichungsstil des zu formatierenden Textbereichs darstellt.
    - `underlinerThickness`
      - : Ein String, der die Unterstreichungsdicke des zu formatierenden Textbereichs darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{DOMxRef("TextFormat")}} Schnittstelle, zu der es gehört.
