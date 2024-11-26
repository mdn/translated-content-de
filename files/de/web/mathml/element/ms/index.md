---
title: <ms>
slug: Web/MathML/Element/ms
l10n:
  sourceCommit: eca69f5c4e847794f000d52c8e55d7c3b1073c91
---

{{MathMLRef}}

Das **`<ms>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert ein **string** Literal, das von Programmiersprachen und Computer-Algebra-Systemen interpretiert werden soll.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiele

### Standarddarstellung

```html
<math display="block">
  <ms>Hello World!</ms>
</math>
```

{{ EmbedLiveSample('default_rendering', 700, 200, "", "") }}

### Alte Quotenattribute

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
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
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
