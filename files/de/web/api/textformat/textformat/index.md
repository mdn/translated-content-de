---
title: "TextFormat: Konstruktor von TextFormat()"
short-title: TextFormat()
slug: Web/API/TextFormat/TextFormat
l10n:
  sourceCommit: 3dda2abfd568a9eab92223f8d52832f7b27ec567
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Der **`TextFormat()`**-Konstruktor gibt ein neues [`TextFormat`](/de/docs/Web/API/TextFormat)-Objekt zurück.

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
      - : Ein String, der den Unterstreichungsstil des Textbereichs darstellt, der formatiert werden muss.
    - `underlineThickness`
      - : Ein String, der die Unterstreichungsdicke des Textbereichs darstellt, der formatiert werden muss.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TextFormat`](/de/docs/Web/API/TextFormat)-Interface, zu dem es gehört.
