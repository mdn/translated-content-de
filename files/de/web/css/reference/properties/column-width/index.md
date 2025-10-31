---
title: column-width
slug: Web/CSS/Reference/Properties/column-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`column-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die ideale Spaltenbreite in einem mehrspaltigen Layout fest. Der Container wird so viele Spalten haben, wie hineinpassen, ohne dass eine von ihnen eine Breite kleiner als der Wert von `column-width` hat. Wenn die Breite des Containers schmaler ist als der angegebene Wert, wird die Breite der einzelnen Spalte kleiner sein als die deklarierte Spaltenbreite.

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

Diese Eigenschaft kann Ihnen helfen, responsive Designs zu erstellen, die sich an unterschiedliche Bildschirmgrößen anpassen. Besonders in der Anwesenheit der {{cssxref("column-count")}} Eigenschaft (die Vorrang hat), müssen Sie alle verwandten Längenwerte angeben, um eine genaue Spaltenbreite zu erreichen. Bei horizontalem Text sind dies {{cssxref('width')}}, `column-width`, {{cssxref('column-gap')}} und {{cssxref('column-rule-width')}}.

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

Die `column-width` Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Gibt die optimale Spaltenbreite an. Die tatsächliche Spaltenbreite kann vom angegebenen Wert abweichen: Sie kann breiter sein, wenn nötig, um den verfügbaren Raum auszufüllen, und schmaler, wenn der verfügbare Raum zu klein ist. Der Wert muss strikt positiv sein, andernfalls ist die Deklaration ungültig. Prozentwerte sind ebenfalls ungültig.
- `auto`
  - : Die Breite der Spalte wird durch andere CSS-Eigenschaften bestimmt, wie z.B. {{cssxref("column-count")}}.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Spaltenbreite in Pixel festlegen

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

- [Lernen: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (Layout lernen)
- [Grundlegende Konzepte von Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
