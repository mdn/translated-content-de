---
title: text-indent
slug: Web/CSS/text-indent
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die **`text-indent`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Länge des Leerraums (Einrückung) fest, die vor Zeilen von Text in einem Block eingefügt wird.

{{EmbedInteractiveExample("pages/css/text-indent.html")}}

Der horizontale Abstand bezieht sich auf die linke (oder rechte, bei rechts-nach-links-Layout) Kante des Inhaltsrahmens des umgebenden block-level Elements.

## Syntax

```css
/* <length> values */
text-indent: 3mm;
text-indent: 40px;

/* <percentage> value
   relative to the containing block width */
text-indent: 15%;

/* Keyword values */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;

/* Global values */
text-indent: inherit;
text-indent: initial;
text-indent: revert;
text-indent: revert-layer;
text-indent: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Einrückung wird als absoluter {{cssxref("&lt;length&gt;")}} angegeben. Negative Werte sind erlaubt. Siehe {{cssxref("&lt;length&gt;")}} Werte für mögliche Einheiten.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Einrückung beträgt einen {{cssxref("&lt;percentage&gt;")}} der Breite des umgebenden Blocks.
- `each-line`
  - : Die Einrückung betrifft die erste Zeile des Blockcontainers sowie jede Zeile nach einem _erzwungenen Zeilenumbruch_, aber nicht die Zeilen nach einem _weichen Zeilenumbruch_.
- `hanging`
  - : Kehrt um, welche Zeilen eingerückt werden. Alle Zeilen _außer_ der ersten Zeile werden eingerückt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Einrückung

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

#### CSS

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

#### Ergebnis

{{ EmbedLiveSample('Basic_indent','100%','100%') }}

### Einrückung im ersten Absatz überspringen

Eine häufige typografische Praxis, wenn Absatzeinrückung vorhanden ist, besteht darin, die Einrückung für den ersten Absatz zu überspringen. Wie es im _The Chicago Manual of Style_ heißt: "the first line of text following a subhead may begin flush left or be indented by the usual paragraph indention."

Das unterschiedliche Behandeln des ersten Absatzes im Vergleich zu den folgenden Absätzen kann unter Verwendung des [nächster-Geschwister-Kombinators](/de/docs/Web/CSS/Next-sibling_combinator) erfolgen, wie im folgenden Beispiel:

#### HTML

```html
<h2>Lorem ipsum</h2>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
  venenatis quam. Vivamus euismod eleifend metus vitae pharetra. In vel tempor
  metus. Donec dapibus feugiat euismod. Vivamus interdum tellus dolor. Vivamus
  blandit eros et imperdiet auctor. Mauris sapien nunc, condimentum a efficitur
  non, elementum ac sapien. Cras consequat turpis non augue ullamcorper, sit
  amet porttitor dui interdum.
</p>

<p>
  Sed laoreet luctus erat at rutrum. Proin velit metus, luctus in sapien in,
  tincidunt mattis ex. Praesent venenatis orci at sagittis eleifend. Nulla
  facilisi. In feugiat vehicula magna iaculis vehicula. Nulla suscipit tempor
  odio a semper. Donec vitae dapibus ipsum. Donec libero purus, convallis eu
  efficitur id, pulvinar elementum diam. Maecenas mollis blandit placerat. Ut
  gravida pellentesque nunc, in eleifend ante convallis sit amet.
</p>

<h2>Donec ullamcorper elit nisl</h2>

<p>
  Donec ullamcorper elit nisl, sagittis bibendum massa gravida in. Fusce tempor
  in ante gravida iaculis. Integer posuere tempor metus. Vestibulum lacinia,
  nunc et dictum viverra, urna massa aliquam tellus, id mollis sem velit
  vestibulum nulla. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Donec vulputate leo ut iaculis ultrices.
  Cras egestas rhoncus lorem. Nunc blandit tempus lectus, rutrum hendrerit orci
  eleifend id. Ut at quam velit.
</p>

<p>
  Aenean rutrum tempor ligula, at luctus ligula auctor vestibulum. Sed
  sollicitudin velit in leo fringilla sollicitudin. Proin eu gravida arcu. Nam
  iaculis malesuada massa, eget aliquet turpis sagittis sed. Sed mollis tellus
  ac dui ullamcorper, nec lobortis diam pellentesque. Quisque dapibus accumsan
  libero, sed euismod ipsum ullamcorper sed.
</p>
```

#### CSS

```css
p {
  text-align: justify;
  margin: 1em 0 0 0;
}
p + p {
  text-indent: 2em;
  margin: 0;
}
```

#### Ergebnis

{{ EmbedLiveSample('Skipping_indentation_on_the_first_paragraph','','500px') }}

### Prozentsatzeinrückung

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

#### CSS

```css
p {
  text-indent: 30%;
  background: plum;
}
```

#### Ergebnis

{{ EmbedLiveSample('Percentage_indent','100%','100%') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen, HTML mit CSS zu stylen](/de/docs/Learn/CSS)
- Verwandte CSS-Eigenschaften:

  - [`text-justify`](/de/docs/Web/CSS/text-justify)
  - [`text-orientation`](/de/docs/Web/CSS/text-orientation)
  - [`text-overflow`](/de/docs/Web/CSS/text-overflow)
  - [`text-rendering`](/de/docs/Web/CSS/text-rendering)
  - [`text-transform`](/de/docs/Web/CSS/text-transform)
  - {{cssxref('hanging-punctuation')}}

- [CSS Textdekoration](/de/docs/Web/CSS/CSS_text_decoration) CSS-Modul
- [CSS Textmodul](/de/docs/Web/CSS/CSS_text)
