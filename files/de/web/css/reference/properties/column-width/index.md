---
title: "`column-width` CSS property"
short-title: column-width
slug: Web/CSS/Reference/Properties/column-width
l10n:
  sourceCommit: d1cf7346516383565b51a125c064ae3d5d893526
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-width`** legt die ideale Spaltenbreite in einem mehrspaltigen Layout fest.

{{InteractiveExample("CSS Demo: column-width")}}

```css interactive-example-choice
column-width: auto;
```

```css interactive-example-choice
column-width: 6rem;
```

```css interactive-example-choice
column-width: 120px;
```

```css interactive-example-choice
column-width: 18ch;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  columns: auto;
  text-align: left;
}
```

## Syntax

```css
/* Keyword value */
column-width: auto;

/* <length> values */
column-width: 60px;
column-width: 15.5em;
column-width: 3.3vw;

/* Global values */
column-width: inherit;
column-width: initial;
column-width: revert;
column-width: revert-layer;
column-width: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Werte angegeben:

- {{cssxref("&lt;length&gt;")}}
  - : Gibt die optimale Spaltenbreite an. Die tatsächliche Spaltenbreite kann vom angegebenen Wert abweichen: Sie kann breiter sein, wenn dies zum Ausfüllen des verfügbaren Platzes erforderlich ist, und schmaler, wenn der verfügbare Platz zu gering ist. Der Wert muss strikt positiv sein, andernfalls ist die Deklaration ungültig. Prozentwerte sind ebenfalls ungültig.
- `auto`
  - : Die Breite der Spalte wird durch andere CSS-Eigenschaften bestimmt, beispielsweise durch {{cssxref("column-count")}}.

## Beschreibung

Die Eigenschaft `column-width` gibt die bevorzugte Spaltenbreite in einem mehrspaltigen Layout an. Der Container erhält so viele Spalten, wie hineinpassen, ohne dass eine von ihnen eine Breite kleiner als der Wert von `column-width` hat. Wenn die Breite des Containers schmaler als der angegebene Wert ist, ist die Breite der einzelnen Spalte kleiner als die deklarierte Spaltenbreite.

Diese Eigenschaft kann Ihnen helfen, responsive Designs zu erstellen, die zu verschiedenen Bildschirmgrößen passen. Insbesondere bei Verwendung der Eigenschaft {{cssxref("column-count")}} (die Vorrang hat) müssen Sie alle zugehörigen Längenwerte angeben, um eine exakte Spaltenbreite zu erreichen. Bei horizontalem Text sind dies {{cssxref('width')}}, `column-width`, {{cssxref('column-gap')}} und {{cssxref('column-rule-width')}}.

Die Eigenschaft `column-width` kann zusammen mit den Eigenschaften {{cssxref("column-height")}} und {{cssxref("column-count")}} auch über die Kurzform {{cssxref("columns")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Spaltenbreite in Pixeln

#### HTML

```html
<p class="content-box">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
  enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis
  nisl ut aliquip ex ea commodo consequat.
</p>
```

#### CSS

```css
.content-box {
  column-width: 100px;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_column_width_in_pixels', 'auto', 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-count")}}
- {{cssxref("column-height")}}
- Kurzform {{cssxref("columns")}}
- [Lernen: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (Layout lernen)
- [Grundlegende Konzepte von Multicol](/de/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
