---
title: "`column-gap` CSS property"
short-title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
l10n:
  sourceCommit: e57c161bccdd08db7e46922255e1dc3ea74058d4
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-gap`** legt die Größe des Abstands ({{Glossary("Gutters", "Gutter")}}) zwischen den Spalten eines Elements in mehrspaltigen Layouts, Flexbox-Layouts und Grid-Layouts fest.

{{InteractiveExample("CSS Demo: column-gap")}}

```css interactive-example-choice
column-gap: 0;
```

```css interactive-example-choice
column-gap: 10%;
```

```css interactive-example-choice
column-gap: 1em;
```

```css interactive-example-choice
column-gap: 20px;
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
column-gap: normal;

/* <length-percentage> value */
column-gap: 3px;
column-gap: 2.5em;
column-gap: 3%;
column-gap: calc(3% - 6px);

/* <line-width> keyword value */
column-gap: thin;
column-gap: medium;
column-gap: thick;

/* Global values */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

### Werte

Diese Eigenschaft wird durch einen einzelnen Wert aus der folgenden Liste angegeben:

- `normal`
  - : Setzt den Abstand in mehrspaltigen Layouts auf `1em`, andernfalls auf `0`. Dies ist der Standardwert.
- {{cssxref("&lt;line-width&gt;")}}
  - : Legt die Größe des Abstands mit den Schlüsselwörtern `thin`, `medium` oder `thick` oder mit einem positiven {{cssxref("length")}}-Wert fest.
- {{CSSxRef("length-percentage")}}
  - : Legt einen nicht negativen {{CSSxRef("&lt;length&gt;")}}- oder {{CSSxRef("&lt;percentage&gt;")}}-Wert fest. Prozentwerte beziehen sich auf die Inline-Größe der Content-Box.

## Beschreibung

Die Eigenschaft `column-gap` legt die Größe des Abstands zwischen den Spalten eines Elements fest. Sie definiert einen Abstand fester Länge zwischen Elementen in einem Container und trennt damit Boxen entlang der Inline-Achse des Containers. Negative Werte sind ungültig. In mehrspaltigen Containern sind die Spaltenabstände standardmäßig `1em` breit; zwischen Grid-Spalten sowie zwischen Flex-Elementen oder -Zeilen wird standardmäßig kein Abstand eingefügt. Weitere Informationen zu Abständen je nach Layouttyp finden Sie unter [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps).

Prozentwerte werden anhand der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area)-Größe des Container-Elements entlang seiner Inline-Achse berechnet, wenn diese Größe eindeutig bestimmt ist; andernfalls werden sie anhand von `0` berechnet. Eine Ausnahme bildet das Grid-Layout: Dort werden zyklische Prozentwerte bei der Bestimmung von Beiträgen zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} als null aufgelöst, beim Layout der Inhalte jedoch anhand der Content-Box des Elements. Weitere Informationen finden Sie unter [Abstandswerte als Prozentwerte angeben](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps#specifying_gap_values_as_percentages).

Der Spaltenabstand kann als [Abstandsdekoration](/de/docs/Web/CSS/Guides/Gaps) eine sichtbare Trennlinie enthalten. Verwenden Sie die Kurzschreibweise {{cssxref("column-rule")}} oder {{cssxref("rule")}}, um eine Linie zwischen den Spalten zu zeichnen. Die Linie erscheint in der Mitte des Abstands, beeinflusst aber nicht dessen Größe.

Die Eigenschaft `column-gap` kann zusammen mit der Eigenschaft {{cssxref("row-gap")}} auch über die Kurzschreibweise {{cssxref("gap")}} festgelegt werden. Diese setzt `row-gap` und `column-gap` in genau dieser Reihenfolge mit einer einzigen Deklaration.

Die Eigenschaft `column-gap` hat die Eigenschaft `grid-column-gap` ersetzt, die ursprünglich im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) zum Erzeugen von Abständen zwischen Grid-Spalten definiert wurde. `grid-column-gap` ist jetzt ein Alias für `column-gap`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Layout

Dieses Beispiel zeigt, wie Sie mit der Eigenschaft `column-gap` horizontalen Abstand zwischen benachbarten Flex-Elementen erzeugen.

#### HTML

Wir fügen sechs Elemente in ein Container-Element ein:

```html
<div class="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Wir setzen die Eigenschaft {{cssxref("display")}} auf `flex` und die Eigenschaft {{cssxref("flex-flow")}} auf `row wrap`. So entsteht ein Flex-Container mit Zeilen von Elementen, die bei Bedarf in neue Zeilen umgebrochen werden. Die Flex-Elemente erhalten jeweils eine Flex-Basis von `200px` oder `300px`.

Mit der Eigenschaft {{cssxref("column-rule")}} definieren wir eine Spaltentrennlinie. Der Wert von `column-gap` wird für den Flex-Container auf `20px` gesetzt. Dadurch entsteht zwischen benachbarten Flex-Elementen jeder Zeile ein Abstand von `20px`. Die Spaltentrennlinie wird in der Mitte des Abstands gezeichnet.

```css
.flexbox {
  display: flex;
  flex-flow: row wrap;
  column-rule: 1px solid magenta;

  column-gap: 20px;
}

.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  height: 35px;
  flex: 200px;
}
div:nth-of-type(3n) {
  flex: 300px;
}
```

#### Ergebnis

{{EmbedLiveSample("Flex_layout", "auto", "170")}}

Um vertikalen Abstand zwischen Flex-Zeilen festzulegen, geben Sie für die Eigenschaft {{cssxref("row-gap")}} einen Wert ungleich null an. Optional können Sie `row-gap` und `column-gap` gemeinsam über die Kurzschreibweise `gap` setzen.

### Grid-Layout

Dieses Beispiel zeigt die Verwendung der Eigenschaft `column-gap` mit einem `<percentage>`-Wert in einem Grid-Layout. Es zeigt außerdem, dass die Größe von `column-gap` nicht von der Breite der Spaltentrennlinie beeinflusst wird.

#### HTML

Wir fügen sieben Elemente in ein Container-Element ein:

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Wir setzen {{cssxref("display")}} auf `grid`, {{cssxref("width")}} auf `400px` und {{cssxref("grid-template-columns")}} auf `repeat(3, 1fr)`. Dadurch entsteht ein 400px breiter Grid-Container mit drei Spalten und so vielen Zeilen wie nötig. Jede Zeile ist `100px` hoch, wie durch die Eigenschaft {{cssxref("grid-auto-rows")}} festgelegt. Jedes Grid-Element an einer ungeraden Position hat die Hintergrundfarbe `lime`; die Grid-Elemente an geraden Positionen sind halbtransparent.

Außerdem haben wir eine sehr breite, halbtransparente `column-rule` festgelegt. Damit zeigen wir, dass die Linie hinter dem Inhalt gezeichnet wird und ihre Breite keinen Einfluss auf die Größe des Abstands hat. `column-gap` ist auf `5%` gesetzt, wodurch ein `20px` breiter Abstand entsteht.

```css
#grid {
  display: grid;
  width: 400px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  column-rule: 30px solid #ff00ff33;

  column-gap: 5%;
}

#grid > div {
  outline: 1px solid green;
  background-color: lime;
}
#grid > div:nth-of-type(even) {
  background-color: #00ff0033;
}
```

```css hidden
@layer no-support {
  @supports not (column-gap: 5%) {
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

{{EmbedLiveSample("Grid_layout", "auto", "330")}}

Die Spaltentrennlinie ist breiter als der Spaltenabstand und nur dort sichtbar, wo die darüber gezeichneten Elemente halbtransparent sind.

### Mehrspaltiges Layout

Dieses Beispiel zeigt die Verwendung der Eigenschaft `column-gap` mit einem `<line-width>`-Schlüsselwort in einem mehrspaltigen Layout.

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a thin column gap created with the CSS
  `column-gap` property. The `normal` default value for the `column-gap`
  property in multi-col layout is 1em.
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: thin;
}
```

```css hidden
@layer no-support {
  @supports not (column-gap: thick) {
    body::before {
      content: "Your browser doesn't support the <line-width> keyword values";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("gap")}}
- {{CSSxRef("column-rule")}}
- {{CSSxRef("rule")}}
- [Überblick über CSS-Abstände und Eigenschaften zur Abstandsdekoration](/de/docs/Web/CSS/Guides/Gaps/Overview)
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [CSS-Trennlinien definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_rules)
- [Grundkonzepte des Grid-Layouts: Abstände](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [Spalten gestalten](/de/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
