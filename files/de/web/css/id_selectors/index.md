---
title: ID-Selektoren
slug: Web/CSS/ID_selectors
l10n:
  sourceCommit: ca3898124ecc30356f1a638d3da727b38379dc82
---

{{CSSRef}}

Der CSS-**ID-Selektor** wählt ein Element basierend auf dem Wert des [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributs des Elements aus. Damit das Element ausgewählt wird, muss dessen `id`-Attribut genau mit dem im Selektor angegebenen Wert übereinstimmen.

```css
/* Das Element mit id="demo" */
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

Der `id_value`-Wert muss ein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. HTML-`id`-Attribute, die keine gültigen CSS-Bezeichner sind, müssen [escaped](/de/docs/Web/CSS/ident#escaping_characters) werden, bevor sie in ID-Selektoren verwendet werden können.

## Beispiele

### Gültige ID-Selektoren

#### HTML

```html
<p id="blue">Dieser Absatz hat einen blauen Hintergrund.</p>
<p>Dies ist einfach ein normaler Absatz.</p>
```

```html
<!-- Die nächsten beiden Absätze haben id-Attribute,
die Zeichen enthalten, die im CSS escaped werden müssen -->

<p id="item?one">Dieser Absatz hat einen rosa Hintergrund.</p>
<p id="123item">Dieser Absatz hat einen gelben Hintergrund.</p>
```

#### CSS

```css
#blue {
  background-color: skyblue;
}
```

```css
/* In den nächsten beiden Regeln müssen die id-Attribute escaped werden */

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

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [Lernen Sie CSS: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)
