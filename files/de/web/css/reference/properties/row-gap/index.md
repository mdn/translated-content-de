---
title: "`row-gap` CSS property"
short-title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
l10n:
  sourceCommit: 53745a2089268ce62bf79695d7d347bcbd0abe57
---

Die **`row-gap`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Größe des Abstands ({{Glossary("gutters", "gutter")}}) zwischen den Reihen eines Elements fest.

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
/* keyword value */
row-gap: normal;

/* <length-percentage> value */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;
row-gap: 10%;
row-gap: calc(10% - 6px);

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### Werte

- `normal`
  - : Bei einem mehrspaltigen Layout wird `1em` verwendet; ansonsten `0`. Dies ist der Standardwert.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe des Abstands zwischen den Reihen als nicht-negativer {{CSSxRef("&lt;length&gt;")}}-Wert.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe des Abstands zwischen den Reihen, definiert als nicht-negativer {{CSSxRef("&lt;percentage&gt;")}}-Wert.

## Beschreibung

Die `row-gap`-Eigenschaft legt die Größe des Abstands zwischen den Reihen eines Elements fest.
Dieser Abstand kann einen sichtbaren Trenner als Dekoration enthalten. Wenn zwischen den Reihen eine Linie vorhanden ist, erscheint diese in der Mitte des Abstands, hat jedoch keinen Einfluss auf die Größe des Abstands. Diese dekorativen Linien können durch die Verwendung der {{cssxref("row-rule")}}-Eigenschaft oder der {{cssxref("rule")}}-Kurzschreibweise zu dem ansonsten "leeren Raum" hinzugefügt werden.

Definiert in [CSS gaps](/de/docs/Web/CSS/Guides/Gaps), kann die Eigenschaft in mehrspaltigen, Flexbox- und Grid-Layouts verwendet werden. Sie ersetzte die `grid-row-gap`-Eigenschaft, die auf [CSS-Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout) beschränkt war. Nun ist `grid-row-gap` ein Alias für `row-gap`.

Die Eigenschaft spezifiziert eine feste Länge für den Abstand zwischen Elementen in einem Container und trennt die Boxen entlang der Block-Achse des Containers. Negative Werte sind ungültig. Der Standardwert `normal` wird bei mehrspaltigen Containern zu `1em` und sonst zu `0`.

Prozentwerte werden berechnet basierend auf der Größe der [content box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) der Block-Achse des Containerelements, wenn diese Größe bestimmt ist, ansonsten basierend auf `0`, außer bei Grid-Layouts, wo zyklische Prozentgrößen zur Bestimmung der {{Glossary("intrinsic_size", "intrinsischen Größe")}} gegen 0 aufgelöst werden, jedoch gegen die content box des Elements aufgelöst werden, wenn der Inhalt angeordnet wird.

In Grid-Layouts ist die Wirkung des Abstands so, als ob die Rasterlinien zwischen den Rasterreihen die Dicke des Eigenschaftswertes annehmen: Der Rasterbereich zwischen zwei Reihen ist der Abstand zwischen den Elementen, die ihn repräsentieren. Was die Spurgröße angeht, wird jeder Abstand als zusätzliche, leere, festgelegte Spur der angegebenen Größe behandelt, die von jedem Rasterelement, das mehr als eine Reihe überspannt, überbrückt wird. Obwohl der Abstand für die Größenbestimmung als leer behandelt wird, kann der erzeugte Abstand eine {{cssxref("row-rule")}} enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flexibles Layout

#### HTML

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

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Ergebnis

{{EmbedLiveSample('Flex_layout', "auto", "120px")}}

### Grid-Layout

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 150px 1fr;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Ergebnis

{{EmbedLiveSample('Grid_layout', 'auto', 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}
- [Grundkonzepte des Grid-Layouts: Abstände (gutters)](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)-Modul
