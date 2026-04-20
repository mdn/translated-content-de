---
title: "`text-indent` CSS property"
short-title: text-indent
slug: Web/CSS/Reference/Properties/text-indent
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-indent`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Länge des leeren Raums (Einzug) fest, der vor den Textzeilen in einem Block eingefügt wird.

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

## Syntax

```css
/* <length-percentage> values */
text-indent: 3mm;
text-indent: 40px;
text-indent: 15%;

/* with keyword values */
text-indent: 5em each-line;
text-indent: 5vb hanging;
text-indent: 5% hanging each-line;

/* Global values */
text-indent: inherit;
text-indent: initial;
text-indent: revert;
text-indent: revert-layer;
text-indent: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Der Einzug wird als absoluter {{cssxref("&lt;length&gt;")}} angegeben. Negative Werte sind erlaubt. Siehe {{cssxref("&lt;length&gt;")}} Werte für mögliche Einheiten.
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Einzug ist ein {{cssxref("&lt;percentage&gt;")}}. Der Prozentsatz bezieht sich auf die eigene innere Inline-Größe des Containers.
- `each-line`
  - : Der Einzug betrifft die erste Zeile des Blockcontainers sowie jede Zeile nach einem _erzwungenen Zeilenumbruch_, beeinflusst jedoch nicht Zeilen nach einem _weichen Zeilenumbruch_.
- `hanging`
  - : Kehrt um, welche Zeilen eingerückt werden. Alle Zeilen _außer_ der ersten Zeile werden eingerückt.

## Beschreibung

Die `text-indent` [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Länge des leeren Raums (Einzug) fest, der vor den Textzeilen in einem Blockcontainer eingefügt wird. Der durch die Eigenschaft gesetzte Einzug erfolgt am Inline-Start-Rand des Inhaltsbereichs. Der Wert ist ein {{cssxref("length-percentage")}}, optional mit einem oder beiden der Schlüsselwörter `each-line` und/oder `hanging`. Der Standardwert ist `0`.

Prozentwerte beziehen sich auf die innere Größe der Inline-Achse des Blockcontainers, welche nur die Dimension des Inhaltsbereichs umfasst und das Padding und den Rand des Containers ausschließt.

Der `<length-percentage>`-Wert kann positiv oder negativ sein. Ein negativer Wert erzeugt einen negativen Einzug, der dem absoluten Wert des entsprechenden positiven `<length-percentage>`-Wertes entspricht. Ein negativer Wert verschiebt den Text effektiv um die Größe des Wertes, jedoch in die entgegengesetzte Richtung. Zum Beispiel rückt `text-indent: 3%;` die erste Textzeile ein, indem sie einen Leerraum hinzufügt, der 3 % der Innengröße des Containers entspricht, bevor der Text erscheint, und die erste Zeile des Inhalts in Richtung des Inline-Endrands verschiebt. Das Setzen von `text-indent: -3%` reduziert die erste Zeile des Textes und verschiebt den Beginn der ersten Textzeile 3 % der Innengröße des Containers über den Inline-Startrand des Inhaltsbereichs hinaus, in das Padding und den Rand hinein, wodurch der Container möglicherweise überläuft.

Ein negativer Wert unterscheidet sich davon, das `hanging`-Schlüsselwort zu einem positiven Wert hinzuzufügen. Im selben Beispiel rückt `text-indent: 3% hanging` die erste Zeile des Textes nicht aus. Stattdessen werden alle Textzeilen _außer_ der ersten Zeile um 3 % der Innengröße des Containers eingerückt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der `text-indent`-Eigenschaft.

#### HTML

Wir fügen zwei Textabsätze ein.

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

Wir verwenden die `text-indent`-Eigenschaft, um die erste Zeile jedes Absatzes um `5em` einzurücken.

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

#### Ergebnis

{{ EmbedLiveSample('Basic_usage','100%','100%') }}

### Prozentsatzeinzug

Unter Verwendung des gleichen HTML wie im vorherigen Beispiel zeigen wir hier die Verwendung von Prozentwerten und wie Prozentsätze im Verhältnis zum Inhaltsbereich des Elements in der Inline-Richtung stehen.

```html hidden
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

Wir setzen den `text-indent` auf einen Prozentwert. Zusätzlich haben wir Padding und vertikale Streifen hinzugefügt, um die Größe des Einzugs relativ zum Box-Modell des Elements besser zu beurteilen.

```css
p {
  text-indent: 30%;

  padding: 30px;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0 9.5%,
    #dedede 9.5% 10%
  );
  background-color: plum;
}
```

#### Ergebnis

{{ EmbedLiveSample('Percentage_indent','100%','100%') }}

### Einzug beim ersten Absatz überspringen

Eine allgemeine typografische Praxis bei vorhandenem Absatzeinzug besteht darin, den Einzug für den ersten Absatz zu überspringen. Wie _The Chicago Manual of Style_ sagt: "Die erste Textzeile nach einer Unterüberschrift kann bündig links beginnen oder mit dem üblichen Absatzeinzug eingerückt werden."

Erstes Absätze anders als nachfolgende Absätze zu behandeln, kann mit dem [Nachfolge-Geschwisterkombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) erfolgen, wie im folgenden Beispiel:

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften:
  - {{cssxref("text-justify")}}
  - {{cssxref("text-orientation")}}
  - {{cssxref("text-overflow")}}
  - {{cssxref("text-rendering")}}
  - {{cssxref("text-transform")}}
  - {{cssxref("hanging-punctuation")}}
- [CSS Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) Modul
- [CSS Text](/de/docs/Web/CSS/Guides/Text) Modul
- [Erlernen Sie HTML mit CSS zu gestalten](/de/docs/Learn_web_development/Core/Styling_basics)
