---
title: Klassenselektoren
slug: Web/CSS/Class_selectors
l10n:
  sourceCommit: 20bdf7642c972e32e3ebf5ce4ac5631b84308b8f
---

{{CSSRef}}

Der [CSS](/de/docs/Web/CSS) **Klassenselektor** wählt Elemente basierend auf dem Inhalt ihres [`class`](/de/docs/Web/HTML/Global_attributes#class)-Attributs aus.

```css
/* Alle Elemente mit class="spacious" */
.spacious {
  margin: 2em;
}

/* Alle <li>-Elemente mit class="spacious" */
li.spacious {
  margin: 2em;
}

/* Alle <li>-Elemente mit einer Klassenliste, die sowohl "spacious" als auch "elegant" umfasst */
/* Zum Beispiel, class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}
```

## Syntax

```css
.class_name { style properties }
```

Beachten Sie, dass dies dem folgenden [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) entspricht:

```css
[class~=class_name] { style properties }
```

Der Wert `class_name` muss ein gültiger [CSS-Identifier](/de/docs/Web/CSS/ident) sein. HTML-`class`-Attribute, die keine gültigen CSS-Identifier sind, müssen [escaped](/de/docs/Web/CSS/ident#escaping_characters) werden, bevor sie in Klassenselektoren verwendet werden können.

## Beispiele

### Gültige Klassenselektoren

#### HTML

```html
<p class="red">Dieser Absatz hat roten Text.</p>
<p class="red yellow-bg">
  Dieser Absatz hat roten Text und einen gelben Hintergrund.
</p>
<p class="red fancy">Dieser Absatz hat roten Text und "fancy"-Styling.</p>
<p>Dies ist nur ein normaler Absatz.</p>
```

```html
<!-- Die nächsten zwei Absätze haben class-Attribute,
die Zeichen enthalten, die in CSS escaped werden müssen -->

<p class="item?one">Dieser Absatz hat einen rosa Hintergrund.</p>
<p class="123item">Dieser Absatz hat einen gelben Hintergrund.</p>
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
/* In den nächsten zwei Regeln müssen die class-Attribute escaped werden */

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

Die Klassenselektoren in den folgenden Regeln sind keine gültigen CSS-Identifier und werden ignoriert.

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
- [CSS lernen: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)
