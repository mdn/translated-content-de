---
title: column-width
slug: Web/CSS/Reference/Properties/column-width
l10n:
  sourceCommit: 04defe50e601cf53adde40c4bd652a7a4e6eae55
---

Die **`column-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die ideale Spaltenbreite in einem Mehrspaltenlayout fest. Der Container hat so viele Spalten, wie hineinpassen, ohne dass eine von ihnen eine Breite hat, die kleiner als der `column-width` Wert ist. Wenn die Breite des Containers schmaler als der angegebene Wert ist, wird die Breite der einzelnen Spalte kleiner als die deklarierte Spaltenbreite sein.

Diese Eigenschaft kann Ihnen helfen, responsive Designs zu erstellen, die zu verschiedenen Bildschirmgrößen passen. Besonders in Anwesenheit der {{cssxref("column-count")}} Eigenschaft (die Vorrang hat), müssen Sie alle verwandten Längenwerte angeben, um eine exakte Spaltenbreite zu erreichen. In horizontalem Text sind diese {{cssxref('width')}}, `column-width`, {{cssxref('column-gap')}}, und {{cssxref('column-rule-width')}}.

Die {{cssxref("columns")}} Kurzschreibweise kann verwendet werden, um die Werte der Eigenschaften `column-width`, {{cssxref("column-count")}}, und {{cssxref("column-height")}} in einer einzigen Deklaration festzulegen.

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

Die `column-width` Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Gibt die optimale Spaltenbreite an. Die tatsächliche Spaltenbreite kann vom angegebenen Wert abweichen: Sie kann breiter sein, wenn nötig, um den verfügbaren Raum zu füllen, und schmaler, wenn der verfügbare Raum zu klein ist. Der Wert muss strikt positiv sein, sonst ist die Deklaration ungültig. Prozentwerte sind ebenfalls ungültig.
- `auto`
  - : Die Breite der Spalte wird durch andere CSS-Eigenschaften bestimmt, wie zum Beispiel {{cssxref("column-count")}}.

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
- {{cssxref("columns")}} Kurzschreibweise
- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (Layout lernen)
- [Grundlagen des Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
