---
title: "`row-gap` CSS property"
short-title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
l10n:
  sourceCommit: 7b535c422322a8a330bd68075541abfc78efc4b7
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-gap`** legt die Größe des Abstands ({{Glossary("gutters", "gutter")}}) zwischen den Zeilen eines Elements in mehrspaltigen, Flexbox- und Grid-Layouts fest.

{{InteractiveExample("CSS Demo: row-gap")}}

```css interactive-example-choice
row-gap: 0;
```

```css interactive-example-choice
row-gap: 1ch;
```

```css interactive-example-choice
row-gap: 1em;
```

```css interactive-example-choice
row-gap: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntax

```css
/* Keyword value */
row-gap: normal;

/* <length-percentage> value */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;
row-gap: 10%;
row-gap: calc(10% - 6px);

/* <line-width> values */
row-gap: thin;
row-gap: medium;
row-gap: thick;

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### Werte

Diese Eigenschaft wird als einzelner Wert aus der folgenden Liste angegeben:

- `normal`
  - : Wird für mehrspaltige Layouts zu `1em` aufgelöst, andernfalls zu `0`. Dies ist der Standardwert.
- {{cssxref("&lt;line-width&gt;")}}
  - : Legt die Größe des Abstands mithilfe der Schlüsselwörter `thin`, `medium` oder `thick` oder eines positiven {{cssxref("length")}}-Werts fest.
- {{CSSxRef("length-percentage")}}
  - : Legt einen nicht negativen {{CSSxRef("&lt;length&gt;")}}- oder {{CSSxRef("&lt;percentage&gt;")}}-Wert fest. Prozentwerte beziehen sich auf die block-size der Content-Box oder auf `0`.

## Beschreibung

Die Eigenschaft `row-gap` legt die Größe des Abstands zwischen den Zeilen eines Elements fest.
Dieser Abstand kann als Abstanddekoration ein sichtbares Trennelement enthalten. Wenn sich zwischen den Zeilen eine Linie befindet, erscheint sie in der Mitte des Abstands, hat jedoch keinen Einfluss auf dessen Größe. Diese dekorativen Linien können dem ansonsten „leeren Raum“ mithilfe der Eigenschaft {{cssxref("row-rule")}} oder der Kurzform {{cssxref("rule")}} hinzugefügt werden.

Die in [CSS gaps](/de/docs/Web/CSS/Guides/Gaps) definierte Eigenschaft kann in mehrspaltigen, Flexbox- und Grid-Layouts verwendet werden. Die Eigenschaft `row-gap` kann zusammen mit der Eigenschaft {{cssxref("column-gap")}} auch über die Kurzform-Eigenschaft {{cssxref("gap")}} in dieser Reihenfolge festgelegt werden. Die Eigenschaft `row-gap` ersetzte die Eigenschaft `grid-row-gap`, die auf [CSS-Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout) beschränkt war. Jetzt ist `grid-row-gap` ein Alias für `row-gap`.

Die Eigenschaft legt einen Abstand mit fester Länge zwischen Elementen in einem Container fest und trennt Boxen entlang der Blockachse des Containers. Negative Werte sind ungültig. Der Standardwert `normal` wird bei mehrspaltigen Containern zu `1em` und überall sonst zu `0` aufgelöst.

Prozentwerte werden relativ zur Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements entlang seiner Blockachse aufgelöst, wenn diese Größe eindeutig ist, andernfalls relativ zu `0`. Eine Ausnahme bildet das Grid-Layout: Dort werden zyklische Prozentgrößen zur Bestimmung der Beiträge zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} gegen null aufgelöst, beim Layouten der Inhalte jedoch relativ zur Content-Box des Elements.

In Grid-Layouts wirkt sich der Abstand so aus, als hätten die Grid-Linien zwischen den Grid-Zeilen die Dicke des Eigenschaftswerts erhalten: Der Grid-Track zwischen zwei Zeilen ist der Raum zwischen den Abständen, die sie darstellen. Bei der Track-Größenbestimmung wird jeder Abstand als zusätzlicher, leerer Track mit fester Größe der angegebenen Größe behandelt, der von allen Grid-Elementen überspannt wird, die sich über mehr als eine Zeile erstrecken. Obwohl er bei der Größenbestimmung als leer behandelt wird, kann der erzeugte Abstand eine {{cssxref("row-rule")}} enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Layout

Dieses Beispiel zeigt die Verwendung der Eigenschaft `row-gap`, um horizontalen Platz zwischen benachbarten Zeilen von Flex-Elementen zu erzeugen. Es zeigt außerdem, dass die Größe von `row-gap` nicht durch die Größe der Zeilenlinie beeinflusst wird.

#### HTML

Wir fügen sechs Elemente in ein Containerelement ein:

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Wir setzen {{cssxref("display")}} auf `flex`, {{cssxref("flex-flow")}} auf `row wrap`, um einen Flex-Container mit Zeilen von Flex-Elementen zu erstellen, die bei Bedarf in neue Zeilen umbrochen werden, und begrenzen {{cssxref("width")}} auf `300px`. Außerdem fügen wir eine {{cssxref("row-rule")}} hinzu, die eine 30px breite, gestrichelte, magentafarbene Linie in der Mitte des Abstands zeichnet.

Der Wert von `row-gap` wird auf dem Flex-Container auf `20px` gesetzt, um einen Abstand von `20px` zwischen den benachbarten Flex-Zeilen zu erzeugen.

Wir setzen außerdem eine Hintergrundfarbe auf die Flex-Elemente, wobei die meisten halbtransparent sind, um zu zeigen, wie die Linie unter den Flex-Elementen sichtbar ist, wenn sie breiter als der Abstand ist.

```css
#flexbox {
  display: flex;
  flex-flow: row wrap;
  width: 300px;
  row-rule: 30px dashed magenta;

  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: #00ff0033;
  flex: 1 1 100px;
  height: 50px;
}
#flexbox > div:nth-of-type(3n-1) {
  background-color: lime;
}
```

#### Ergebnis

{{EmbedLiveSample('Flex_layout', "auto", "400")}}

Um vertikalen Abstand zwischen Flex-Elementen festzulegen, geben Sie einen von null verschiedenen Wert für die Eigenschaft {{cssxref("column-gap")}} an. Optional können Sie sowohl `row-gap` als auch `column-gap` mithilfe der Kurzform `gap` festlegen.

### Grid-Layout

Dieses Beispiel zeigt die Verwendung der Eigenschaft `row-gap` mit einem `<percentage>`-Wert in einem Grid-Layout.

#### HTML

Wir fügen fünf Elemente in ein Containerelement ein:

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Wir setzen die Eigenschaft {{cssxref("display")}} auf `grid`, {{cssxref("height")}} auf `240px`, {{cssxref("width")}} auf `350px` und {{cssxref("grid-template-rows")}} auf `repeat(3, 1fr)`, um einen 350px breiten Grid-Container mit drei Spalten und so vielen Zeilen wie erforderlich zu erstellen. Jede Zeile ist `100px` hoch, wie durch die Eigenschaft {{cssxref("grid-template-rows")}} definiert.

`row-gap` wird auf `5%` gesetzt. Die Höhe des Containers beträgt `240px`. Der Wert `5%` erzeugt einen Zeilenabstand von `12px` Höhe und lässt `216px` für drei Zeilen von Grid-Elementen übrig, was bedeutet, dass jede Zeile `72px` hoch ist.

```css
#grid {
  display: grid;
  height: 240px;
  width: 350px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 150px 1fr;

  row-gap: 5%;
}
```

```css hidden
body {
  padding: 1em;
}

#grid > div {
  outline: 1px solid green;
  background-color: lime;
}
@layer no-support {
  @supports not (row-gap: 5%) {
    body::before {
      content: "Your browser doesn't support percent values";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Grid_layout', 'auto', 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("column-gap")}}
- {{CSSxRef("row-rule")}}
- {{CSSxRef("rule")}}
- {{CSSxRef("gap")}}
- [Grundlegende Konzepte des Grid-Layouts: Abstände](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
