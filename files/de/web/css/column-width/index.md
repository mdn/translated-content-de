---
title: Spaltenbreite
slug: Web/CSS/column-width
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`column-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die ideale Spaltenbreite in einem mehrspaltigen Layout fest. Der Container wird so viele Spalten haben, wie passen, ohne dass eine von ihnen eine Breite unter dem `column-width` Wert hat. Wenn die Breite des Containers kleiner als der angegebene Wert ist, wird die Breite der einzelnen Spalte kleiner als die deklarierte Spaltenbreite sein.

{{EmbedInteractiveExample("pages/css/column-width.html")}}

Diese Eigenschaft kann Ihnen helfen, responsive Designs zu erstellen, die zu verschiedenen Bildschirmgrößen passen. Besonders in Anwesenheit der {{cssxref("column-count")}} Eigenschaft (die Vorrang hat), müssen Sie alle zugehörigen Längenwerte angeben, um eine exakte Spaltenbreite zu erreichen. In horizontalem Text sind diese {{cssxref('width')}}, `column-width`, {{cssxref('column-gap')}}, und {{cssxref('column-rule-width')}}.

## Syntax

```css
/* Schlüsselwortwert */
column-width: auto;

/* <length> Werte */
column-width: 60px;
column-width: 15.5em;
column-width: 3.3vw;

/* Globale Werte */
column-width: inherit;
column-width: initial;
column-width: revert;
column-width: revert-layer;
column-width: unset;
```

Die `column-width` Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Gibt die optimale Spaltenbreite an. Die tatsächliche Spaltenbreite kann vom angegebenen Wert abweichen: Sie kann breiter sein, wenn nötig, um verfügbaren Platz zu füllen, und enger, wenn der verfügbare Platz zu klein ist. Der Wert muss strikt positiv sein, sonst ist die Deklaration ungültig. Prozentwerte sind ebenfalls ungültig.
- `auto`
  - : Die Breite der Spalte wird durch andere CSS-Eigenschaften bestimmt, wie z.B. {{cssxref("column-count")}}.

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

- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) (Learn Layout)
- [Grundkonzepte von Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
