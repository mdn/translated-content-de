---
title: ID-Selektoren
slug: Web/CSS/ID_selectors
l10n:
  sourceCommit: ca3898124ecc30356f1a638d3da727b38379dc82
---

{{CSSRef}}

Der CSS-**ID-Selektor** wählt ein Element basierend auf dem Wert des [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributs des Elements aus. Damit das Element ausgewählt wird, muss sein `id`-Attribut exakt mit dem im Selektor angegebenen Wert übereinstimmen.

```css
/* The element with id="demo" */
#demo {
  border: red 2px solid;
}
```

## Syntax

```css
#id_value { style properties }
```

Beachten Sie, dass dies syntaktisch (aber nicht hinsichtlich der Spezifität) dem folgenden [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) entspricht:

```css
[id=id_value] { style properties }
```

Der `id_value`-Wert muss ein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. HTML-`id`-Attribute, die keine gültigen CSS-Bezeichner sind, müssen [escapet](/de/docs/Web/CSS/ident#escaping_characters) werden, bevor sie in ID-Selektoren verwendet werden können.

## Beispiele

### Gültige ID-Selektoren

#### HTML

```html
<p id="blue">This paragraph has a blue background.</p>
<p>This is just a regular paragraph.</p>
```

```html
<!-- The next two paragraphs have id attributes
that contain characters which must be escaped in CSS -->

<p id="item?one">This paragraph has a pink background.</p>
<p id="123item">This paragraph has a yellow background.</p>
```

#### CSS

```css
#blue {
  background-color: skyblue;
}
```

```css
/* In the next two rules, the id attributes must be escaped */

#item\?one {
  background-color: pink;
}

#\00003123item {
  background-color: yellow;
}
```

#### Ergebnis

{{EmbedLiveSample("Examples", '100%', 200)}}

### Ungültige ID-Selektoren

Die ID-Selektoren in den folgenden Regeln sind keine gültigen CSS-Bezeichner und werden ignoriert.

```css example-bad
#item?one {
  background-color: green;
}

#123item {
  background-color: green;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [CSS lernen: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)
