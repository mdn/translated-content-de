---
title: text-indent
slug: Web/CSS/Reference/Properties/text-indent
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-indent`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Länge des leeren Raums (Einzug) fest, der vor Zeilen von Text in einem Block eingefügt wird.

{{InteractiveExample("CSS Demo: text-indent")}}

```css interactive-example-choice
text-indent: 0;
```

```css interactive-example-choice
text-indent: 30%;
```

```css interactive-example-choice
text-indent: -3em;
```

```css interactive-example-choice
text-indent: 3em each-line;
```

```css interactive-example-choice
text-indent: 3em hanging;
```

```css interactive-example-choice
text-indent: 3em hanging each-line;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      This text is contained within a single paragraph. This paragraph is two
      sentences long.
    </p>
    <p>
      This is a new paragraph. There is a line break element
      <code>&lt;br&gt;</code> after this sentence.<br />There it is! Notice how
      it affects the indentation.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-size: 1.25em;
  background-color: darkslateblue;
  align-items: start;
}

#example-element {
  text-align: left;
  margin-left: 3em;
  background-color: slateblue;
  color: white;
}
```

Der horizontale Abstand bezieht sich auf den linken (oder rechten, bei einem von rechts nach links verlaufenden Layout) Rand des Inhaltsbereichs des umschließenden Blockelementes.

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
  - : Der Einzug wird als absoluter {{cssxref("&lt;length&gt;")}} angegeben. Negative Werte sind erlaubt. Siehe {{cssxref("&lt;length&gt;")}}-Werte für mögliche Einheiten.
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Einzug beträgt einen {{cssxref("&lt;percentage&gt;")}} der Breite des umschließenden Blocks.
- `each-line`
  - : Der Einzug betrifft die erste Zeile des Blockcontainers sowie jede Zeile nach einem _erzwungenen Zeilenumbruch_, betrifft jedoch nicht Zeilen nach einem _weichen Zeilenumbruch_.
- `hanging`
  - : Kehrt um, welche Zeilen eingerückt werden. Alle Zeilen _außer_ der ersten Zeile werden eingerückt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundeinzug

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

### Auslassen des Einzugs im ersten Absatz

Eine gängige typografische Praxis, wenn Absatzeinzüge vorhanden sind, besteht darin, den Einzug beim ersten Absatz auszulassen. Wie _The Chicago Manual of Style_ es ausdrückt: „Die erste Textzeile nach einer Zwischenüberschrift kann linksbündig oder mit dem üblichen Absatzeinzug beginnen.“

Die unterschiedliche Behandlung des ersten Absatzes gegenüber den nachfolgenden Absätzen kann durch die Verwendung des [nächsten Geschwisterkombinators](/de/docs/Web/CSS/Next-sibling_combinator) erreicht werden, wie im folgenden Beispiel:

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

### Prozentuale Einrückung

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

- [HTML mit CSS gestalten lernen](/de/docs/Learn_web_development/Core/Styling_basics)
- Verwandte CSS-Eigenschaften:
  - [`text-justify`](/de/docs/Web/CSS/Reference/Properties/text-justify)
  - [`text-orientation`](/de/docs/Web/CSS/Reference/Properties/text-orientation)
  - [`text-overflow`](/de/docs/Web/CSS/Reference/Properties/text-overflow)
  - [`text-rendering`](/de/docs/Web/CSS/Reference/Properties/text-rendering)
  - [`text-transform`](/de/docs/Web/CSS/Reference/Properties/text-transform)
  - {{cssxref('hanging-punctuation')}}

- [CSS Text Decoration](/de/docs/Web/CSS/CSS_text_decoration) CSS-Modul
- [CSS Text Modul](/de/docs/Web/CSS/CSS_text)
