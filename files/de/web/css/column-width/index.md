---
title: column-width
slug: Web/CSS/column-width
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`column-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die ideale Spaltenbreite in einem Mehrspalten-Layout fest. Der Container wird so viele Spalten haben, wie ohne eine Reduzierung der Spaltenbreite unter den `column-width` Wert hineinpassen. Wenn die Breite des Containers schmaler ist als der angegebene Wert, wird die Breite einer einzigen Spalte kleiner als die deklarierte Spaltenbreite sein.

{{EmbedInteractiveExample("pages/css/column-width.html")}}

Diese Eigenschaft kann Ihnen helfen, responsive Designs zu erstellen, die zu verschiedenen Bildschirmgrößen passen. Besonders in Anwesenheit der {{cssxref("column-count")}} Eigenschaft (die Vorrang hat), müssen Sie alle verwandten Längenwerte angeben, um eine exakte Spaltenbreite zu erzielen. In horizontalem Text sind dies {{cssxref('width')}}, `column-width`, {{cssxref('column-gap')}}, und {{cssxref('column-rule-width')}}.

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
  - : Gibt die optimale Spaltenbreite an. Die tatsächliche Spaltenbreite kann vom angegebenen Wert abweichen: Sie kann breiter sein, wenn dies notwendig ist, um den verfügbaren Raum zu füllen, und schmaler, wenn der verfügbare Raum zu klein ist. Der Wert muss strikt positiv sein, andernfalls ist die Deklaration ungültig. Prozentwerte sind ebenfalls ungültig.
- `auto`
  - : Die Breite der Spalte wird durch andere CSS-Eigenschaften bestimmt, wie {{cssxref("column-count")}}.

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

- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (Learn Layout)
- [Grundlegende Konzepte von Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
