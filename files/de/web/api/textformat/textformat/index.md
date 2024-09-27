---
title: "TextFormat: TextFormat() Konstruktor"
short-title: TextFormat()
slug: Web/API/TextFormat/TextFormat
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Der **`TextFormat()`** Konstruktor gibt ein neues [`TextFormat`](/de/docs/Web/API/TextFormat) Objekt zurück.

## Syntax

```js-nolint
new TextFormat()
new TextFormat(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `rangeStart`
      - : Eine Zahl, die die Startposition des zu formatierenden Textrahmens angibt.
    - `rangeEnd`
      - : Eine Zahl, die die Endposition des zu formatierenden Textrahmens angibt.
    - `underlineStyle`
      - : Ein String, der den Unterstreichungsstil des zu formatierenden Textrahmens darstellt.
    - `underlinerThickness`
      - : Ein String, der die Unterstreichungsdicke des zu formatierenden Textrahmens darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TextFormat`](/de/docs/Web/API/TextFormat) Schnittstelle, zu der es gehört.
