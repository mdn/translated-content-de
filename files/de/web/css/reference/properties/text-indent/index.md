---
title: text-indent
slug: Web/CSS/Reference/Properties/text-indent
l10n:
  sourceCommit: 8d521c461c52730012ec7a06c36841e44ca98090
---

Die **`text-indent`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Länge des Leerraums (Einzug) fest, der vor Textzeilen in einem Block eingefügt wird.

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
  - : Der Einzug wird als absolute {{cssxref("&lt;length&gt;")}} angegeben. Negative Werte sind erlaubt. Siehe {{cssxref("&lt;length&gt;")}}-Werte für mögliche Einheiten.
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Einzug ist ein {{cssxref("&lt;percentage&gt;")}}. Der Prozentsatz bezieht sich auf die eigene innere Inline-Größe des Containers.
- `each-line`
  - : Der Einzug betrifft die erste Zeile des Blockcontainers sowie jede Zeile nach einem _erzwungenen Zeilenumbruch_, aber nicht nach einem _weichen Umbruch_.
- `hanging`
  - : Kehrt um, welche Zeilen eingerückt werden. Alle Zeilen _außer_ der ersten Zeile werden eingerückt.

## Beschreibung

Die `text-indent` [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Länge des Leerraums (Einzug) fest, der vor Textzeilen in einem Blockcontainer eingefügt wird. Der durch die Eigenschaft gesetzte Einzug erfolgt am Inline-Start-Rand der Content Box. Der Wert ist ein {{cssxref("length-percentage")}}, optional mit einem oder beiden Schlüsselwörtern `each-line` und/oder `hanging`. Der Anfangswert ist `0`.

Prozentwerte sind relativ zur inneren Inline-Achse des Blockcontainers bemessen, was die Dimension des Inhaltsbereichs ohne Berücksichtigung von Polsterung und Rand des Containers ist.

Das `<length-percentage>` kann einen positiven oder negativen Wert haben. Ein negativer Wert erzeugt einen Austritt, der dem absoluten Wert des positiven `<length-percentage>`-Äquivalents entspricht. Ein negativer Wert verschiebt den Text effektiv um die Größe des Wertes, aber in die entgegengesetzte Richtung. Zum Beispiel rückt `text-indent: 3%;` die erste Zeile des Textes ein, fügt weißen Raum ein, der 3% der inneren Größe des Containers vor dem Text entspricht, und schiebt die erste Zeile des Inhalts in Richtung Inline-End. Das Setzen von `text-indent: -3%` rückt die erste Zeile des Textes aus, indem es den Anfang der ersten Zeile des Textes 3% der inneren Größe des Containers über den Inline-Start des Inhaltsbereichs hinaus in die Polsterung und den Rand verschiebt, was möglicherweise zum Überlaufen des Containers führt.

Ein negativer Wert unterscheidet sich von der Hinzufügung des Schlüsselwortes `hanging` zu einem positiven Wert. In demselben Beispiel rückt `text-indent: 3% hanging` nicht die erste Zeile des Textes aus. Es rückt vielmehr alle Zeilen des Textes _außer_ der ersten Zeile um 3% der inneren Größe des Containers ein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel demonstriert die grundlegende Nutzung der `text-indent`-Eigenschaft.

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

### Prozentsatz-Einzug

Mit demselben HTML wie im vorherigen Beispiel zeigen wir hier die Verwendung von Prozentwerten und wie diese relativ zum Inhaltsbereich des Elements in Richtung Inline-Achse sind.

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

Wir setzen die `text-indent`-Eigenschaft auf einen Prozentwert. Wir haben auch Polsterung und vertikale Streifen hinzugefügt, um die Größe des Einzugs im Verhältnis zum Boxmodell des Elements besser beurteilen zu können.

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

### Überspringen des Einzugs beim ersten Absatz

Eine gängige typografische Praxis bei vorhandenem Absatzeinzug ist das Überspringen des Einzugs für den ersten Absatz. Wie im _The Chicago Manual of Style_ beschrieben, "kann die erste Zeile des Textes nach einer Unterüberschrift linksbündig beginnen oder durch den üblichen Absatzeinzug eingerückt werden."

Die unterschiedliche Behandlung des ersten Absatzes gegenüber den folgenden Absätzen kann mit dem [Next-Sibling-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) erreicht werden, wie im folgenden Beispiel:

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
- [CSS-Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration)-Modul
- [CSS-Text](/de/docs/Web/CSS/Guides/Text)-Modul
- [Lernen, HTML mit CSS zu stylen](/de/docs/Learn_web_development/Core/Styling_basics)
