---
title: <ms>
slug: Web/MathML/Reference/Element/ms
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<ms>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert einen **String**-Literal, der von Programmiersprachen und Computer-Algebra-Systemen interpretiert werden soll.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

## Beispiele

### Standarddarstellung

```html
<math display="block">
  <ms>Hello World!</ms>
</math>
```

{{ EmbedLiveSample('default_rendering', 700, 200, "", "") }}

### Veraltete Quotenattribute

```html
<math display="block">
  <ms lquote="„" rquote="'">abc</ms>
</math>
```

{{ EmbedLiveSample('legacy_quote_attributes', 700, 200, "", "") }}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
