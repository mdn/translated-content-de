---
title: "`column-width` CSS property"
short-title: column-width
slug: Web/CSS/Reference/Properties/column-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`column-width`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die ideale Spaltenbreite in einem mehrspaltigen Layout fest. Der Container wird so viele Spalten enthalten, wie hineinpassen, ohne dass eine davon eine Breite kleiner als der `column-width`-Wert hat. Ist die Breite des Containers schmaler als der angegebene Wert, wird die Breite der einzelnen Spalte kleiner als die deklarierte Spaltenbreite sein.

Diese Eigenschaft kann Ihnen helfen, responsive Designs zu erstellen, die sich an verschiedene Bildschirmgrößen anpassen. Besonders in Verbindung mit der {{cssxref("column-count")}}-Eigenschaft (die Vorrang hat), müssen Sie alle zugehörigen Längenwerte angeben, um eine genaue Spaltenbreite zu erreichen. Bei horizontalem Text sind dies {{cssxref('width')}}, `column-width`, {{cssxref('column-gap')}} und {{cssxref('column-rule-width')}}.

Die Kurzschreibweise {{cssxref("columns")}} kann verwendet werden, um die Werte der Eigenschaften `column-width`, {{cssxref("column-count")}} und {{cssxref("column-height")}} in einer einzigen Deklaration festzulegen.

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

Die `column-width`-Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Gibt die optimale Spaltenbreite an. Die tatsächliche Spaltenbreite kann vom angegebenen Wert abweichen: Sie kann breiter sein, wenn es notwendig ist, den verfügbaren Platz zu füllen, und schmaler, wenn der verfügbare Platz zu klein ist. Der Wert muss streng positiv sein oder die Deklaration ist ungültig. Prozentwerte sind ebenfalls ungültig.
- `auto`
  - : Die Breite der Spalte wird durch andere CSS-Eigenschaften bestimmt, wie zum Beispiel {{cssxref("column-count")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spaltenbreite in Pixeln festlegen

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
- {{cssxref("columns")}}-Kurzschreibweise
- [Lernen: Mehrspaltige Layouts](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (Lernen Layout)
- [Grundkonzepte von Multicol](/de/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
