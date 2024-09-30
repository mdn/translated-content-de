---
title: column-width
slug: Web/CSS/column-width
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die CSS-Eigenschaft **`column-width`** setzt die ideale Spaltenbreite in einem mehrspaltigen Layout. Der Container wird so viele Spalten haben, wie ohne jede Spalte mit einer Breite kleiner als der `column-width`-Wert unterzubringen sind. Wenn die Breite des Containers schmaler ist als der angegebene Wert, wird die Breite der einzelnen Spalte kleiner sein als die deklarierte Spaltenbreite.

{{EmbedInteractiveExample("pages/css/column-width.html")}}

Diese Eigenschaft kann Ihnen helfen, responsive Designs zu erstellen, die auf unterschiedliche Bildschirmgrößen passen. Besonders in Anwesenheit der {{cssxref("column-count")}}-Eigenschaft (die Vorrang hat), müssen Sie alle verwandten Längenwerte angeben, um eine genaue Spaltenbreite zu erreichen. In horizontalem Text sind dies {{cssxref('width')}}, `column-width`, {{cssxref('column-gap')}} und {{cssxref('column-rule-width')}}.

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
  - : Gibt die optimale Spaltenbreite an. Die tatsächliche Spaltenbreite kann von dem angegebenen Wert abweichen: Sie kann breiter sein, wenn nötig, um den verfügbaren Platz auszufüllen, und schmaler, wenn der verfügbare Platz zu klein ist. Der Wert muss streng positiv sein, sonst ist die Deklaration ungültig. Prozentwerte sind ebenfalls ungültig.
- `auto`
  - : Die Breite der Spalte wird durch andere CSS-Eigenschaften, wie {{cssxref("column-count")}}, bestimmt.

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

- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) (Leitfaden zum Layout)
- [Grundlegende Konzepte von Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
