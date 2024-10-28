---
title: <ms>
slug: Web/MathML/Element/ms
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<ms>`** [MathML](/de/docs/Web/MathML) Element repräsentiert ein **String**-Literal, das von Programmiersprachen und Computeralgebrasystemen interpretiert werden soll.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

Einige Browser unterstützen möglicherweise auch die folgenden veralteten Attribute und rendern den Inhalt des `<ms>`-Elements umgeben von den angegebenen Anfangs- und Schlusszeichen:

- `lquote`

  - : Das öffnende Anführungszeichen, um den Inhalt einzuschließen. Der Standardwert ist `&quot;`.

- `rquote`
  - : Das schließende Anführungszeichen, um den Inhalt einzuschließen. Der Standardwert ist `&quot;`.

## Beispiele

### Standardmäßige Darstellung

```html
<math display="block">
  <ms>Hello World!</ms>
</math>
```

{{ EmbedLiveSample('default_rendering', 700, 200, "", "") }}

### Veraltete Anführungsattributen

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
