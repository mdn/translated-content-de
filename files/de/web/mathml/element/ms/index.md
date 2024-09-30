---
title: <ms>
slug: Web/MathML/Element/ms
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

Das **`<ms>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert ein **string** Literal, das von Programmiersprachen und Computeralgebrasystemen interpretiert werden soll.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

Einige Browser können auch die folgenden veralteten Attribute unterstützen und den Inhalt des `<ms>`-Elements von den angegebenen Eröffnungs- und Schlusszeichen umgeben darstellen:

- `lquote`

  - : Das Eröffnungszeichen, um den Inhalt einzuschließen. Der Standardwert ist `&quot;`.

- `rquote`
  - : Das Schlusszeichen, um den Inhalt einzuschließen. Der Standardwert ist `&quot;`.

## Beispiele

### Standarddarstellung

```html
<math display="block">
  <ms>Hello World!</ms>
</math>
```

{{ EmbedLiveSample('default_rendering', 700, 200, "", "") }}

### Veraltete Zitat-Attribute

```html
<math display="block">
  <ms lquote="„" rquote="'">abc</ms>
</math>
```

{{ EmbedLiveSample('legacy_quote_attributes', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
