---
title: "`column-gap` CSS property"
short-title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
l10n:
  sourceCommit: 7b535c422322a8a330bd68075541abfc78efc4b7
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-gap`** legt die Größe des Abstands ({{Glossary("Gutters", "gutter")}}) zwischen den Spalten eines Elements in mehrspaltigen, Flexbox- und Grid-Layouts fest.

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

Diese Eigenschaft wird als einzelner Wert aus der folgenden Liste angegeben:

- `normal`
  - : Legt für mehrspaltige Layouts den Abstand auf `1em` fest, andernfalls auf `0`. Dies ist der Standardwert.
- {{cssxref("&lt;line-width&gt;")}}
  - : Legt die Größe des Abstands mithilfe der Schlüsselwörter `thin`, `medium` oder `thick` oder eines positiven {{cssxref("length")}}-Werts fest.
- {{CSSxRef("length-percentage")}}
  - : Legt einen nicht negativen {{CSSxRef("&lt;length&gt;")}}- oder {{CSSxRef("&lt;percentage&gt;")}}-Wert fest. Prozentwerte beziehen sich auf die Inline-Größe der Content-Box.

## Beschreibung

Die Eigenschaft `column-gap` legt die Größe des Abstands zwischen den Spalten eines Elements fest. Die Eigenschaft definiert einen Abstand mit fester Länge zwischen Elementen in einem Container und trennt Boxen entlang der Inline-Achse des Containers. Negative Werte sind ungültig. Spaltenabstände in Multi-Col-Containern sind standardmäßig `1em` breit, während zwischen Grid-Spalten oder Flex-Elementen beziehungsweise -Zeilen kein Abstand hinzugefügt wird.

Prozentwerte werden anhand der Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) der Inline-Achse des Container-Elements berechnet, wenn diese Größe bestimmt ist, andernfalls anhand von `0`. Eine Ausnahme bildet das Grid-Layout: Dort werden zyklische prozentuale Größen bei der Bestimmung der Beiträge zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} gegen null aufgelöst, beim Layouten der Inhalte jedoch gegen die Content-Box des Elements.

Der Spaltenabstand kann eine sichtbare Trennung als [Abstandsdekoration](/de/docs/Web/CSS/Guides/Gaps) enthalten. Um eine Linie zwischen den Spalten zu zeichnen, verwenden Sie die Kurzform {{cssxref("column-rule")}} oder {{cssxref("rule")}}. Die Linie erscheint in der Mitte des Abstands, hat jedoch keinen Einfluss auf dessen Größe zwischen den Spalten.

Die Eigenschaft `column-gap` kann zusammen mit der Eigenschaft {{cssxref("row-gap")}} auch über die Kurzform {{cssxref("gap")}} festgelegt werden, die sowohl `row-gap` als auch `column-gap` in einer Deklaration festlegt, in dieser Reihenfolge.

Die Eigenschaft `column-gap` ersetzte die Eigenschaft `grid-column-gap`, die ursprünglich im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert wurde, um Abstände zwischen Grid-Spalten zu erzeugen. `grid-column-gap` ist jetzt ein Alias für `column-gap`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Layout

Dieses Beispiel demonstriert die Verwendung der Eigenschaft `column-gap`, um horizontalen Abstand zwischen benachbarten Flex-Elementen zu erzeugen.

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

Wir setzen die Eigenschaft {{cssxref("display")}} auf `flex` und die Eigenschaft {{cssxref("flex-flow")}} auf `row wrap`, um einen Flex-Container mit Zeilen von Elementen zu erstellen. Dadurch können die Elemente bei Bedarf in neue Zeilen umbrochen werden. Den Flex-Elementen wird jeweils eine Flex-Basis von entweder `200px` oder `300px` zugewiesen.

Wir definieren mit der Eigenschaft {{cssxref("column-rule")}} eine Spaltenlinie. Der Wert von `column-gap` wird auf dem Flex-Container auf `20px` gesetzt, wodurch zwischen den benachbarten Flex-Elementen in jeder Zeile ein Abstand von `20px` entsteht. Die Spaltenlinie wird in der Mitte des Abstands gezeichnet.

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

Um vertikalen Abstand zwischen Flex-Zeilen festzulegen, geben Sie für die Eigenschaft {{cssxref("row-gap")}} einen Wert ungleich null an. Optional können Sie sowohl `row-gap` als auch `column-gap` mit der Kurzform `gap` festlegen.

### Grid-Layout

Dieses Beispiel demonstriert die Verwendung der Eigenschaft `column-gap` mit einem `<percentage>`-Wert in einem Grid-Layout. Es zeigt außerdem, dass die Größe von `column-gap` nicht von der Größe der Spaltenlinie beeinflusst wird.

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

Wir setzen {{cssxref("display")}} auf `grid`, {{cssxref("width")}} auf `400px` und {{cssxref("grid-template-columns")}} auf `repeat(3, 1fr)`, um einen `400px` breiten Grid-Container mit drei Spalten und so vielen Zeilen wie nötig zu erstellen. Jede Zeile ist, wie durch die Eigenschaft {{cssxref("grid-auto-rows")}} definiert, `100px` hoch. Jedes ungerade Grid-Element hat die Hintergrundfarbe `lime`, und die geraden Grid-Elemente sind halbtransparent.

Wir haben außerdem eine sehr breite, halbtransparente `column-rule` festgelegt, um zu demonstrieren, dass die Linie hinter dem Inhalt gezeichnet wird und ihre Breite keinen Einfluss auf die Größe des Abstands hat. `column-gap` ist auf `5%` festgelegt, wodurch ein `20px` breiter Abstand entsteht.

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

Die Spaltenlinie ist breiter als der Spaltenabstand und nur dort sichtbar, wo die darüber gezeichneten Elemente halbtransparent sind.

### Mehrspaltiges Layout

Dieses Beispiel demonstriert die Verwendung der Eigenschaft `column-gap` mit einem `<line-width>`-Schlüsselwortwert in einem Multi-Col-Layout.

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
- [Grundlegende Konzepte des Grid-Layouts: Abstände](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [Spalten gestalten](/de/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
- [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)-Modul
