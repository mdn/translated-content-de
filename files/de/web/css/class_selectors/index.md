---
title: Klassenselektoren
slug: Web/CSS/Class_selectors
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Der [CSS](/de/docs/Web/CSS) **Klassenselektor** selektiert Elemente basierend auf dem Inhalt ihres [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attributs.

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

Der `class_name`-Wert muss ein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) sein. HTML-`class`-Attribute, die keine gültigen CSS-Bezeichner sind, müssen [escaped](/de/docs/Web/CSS/ident#escaping_characters) werden, bevor sie in Klassenselektoren verwendet werden können.

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
  color: #ff3333;
}

.yellow-bg {
  background: #ffffaa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #7777ff;
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

Die Klassenselektoren in den folgenden Regeln sind keine gültigen CSS-Bezeichner und werden ignoriert.

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
