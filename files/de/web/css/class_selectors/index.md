---
title: Klassenselektoren
slug: Web/CSS/Class_selectors
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der [CSS](/de/docs/Web/CSS) **Klassenselektor** wählt Elemente basierend auf dem Inhalt ihres [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attributs aus.

```css
/* All elements with class="spacious" */
.spacious {
  margin: 2em;
}

/* All <li> elements with class="spacious" */
li.spacious {
  margin: 2em;
}

/* All <li> elements with a class list that includes both "spacious" and "elegant" */
/* For example, class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}
```

## Syntax

```css
.class_name {
  /* … */
}
```

Beachten Sie, dass dies dem folgenden [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) entspricht:

```css
[class~="class_name"] {
  /* … */
}
```

Der Wert `class_name` muss ein gültiger [CSS-Identifikator](/de/docs/Web/CSS/ident) sein. HTML-`class`-Attribute, die keine gültigen CSS-Identifikatoren sind, müssen [escaped](/de/docs/Web/CSS/ident#escaping_characters) werden, bevor sie in Klassenselektoren verwendet werden können.

## Beispiele

### Gültige Klassenselektoren

#### HTML

```html
<p class="red">This paragraph has red text.</p>
<p class="red yellow-bg">
  This paragraph has red text and a yellow background.
</p>
<p class="red fancy">This paragraph has red text and "fancy" styling.</p>
<p>This is just a regular paragraph.</p>
```

```html
<!-- The next two paragraphs have class attributes
that contain characters which must be escaped in CSS -->

<p class="item?one">This paragraph has a pink background.</p>
<p class="123item">This paragraph has a yellow background.</p>
```

#### CSS

```css
.red {
  color: #f33;
}

.yellow-bg {
  background: #ffa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}
```

```css
/* In the next two rules, the class attributes must be escaped */

.item\?one {
  background-color: pink;
}

.\00003123item {
  background-color: yellow;
}
```

#### Ergebnis

{{EmbedLiveSample('Examples', "", 300)}}

### Ungültige Klassenselektoren

Die Klassenselektoren in den folgenden Regeln sind keine gültigen CSS-Identifikatoren und werden ignoriert.

```css example-bad
.item?one {
  background-color: green;
}

.123item {
  background-color: green;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [CSS Lernen: Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
