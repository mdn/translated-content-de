---
title: fit-content()
slug: Web/CSS/fit-content_function
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`fit-content()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) begrenzt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximale Größe, max(minimale Größe, Argument))`.

{{EmbedInteractiveExample("pages/css/function-fit-content.html")}}

Die Funktion kann als Spurengröße in [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout)-Eigenschaften verwendet werden, wobei die maximale Größe durch `max-content` und die minimale Größe durch `auto`, welches ähnlich wie `auto` berechnet wird (d.h., [`minmax(auto, max-content)`](/de/docs/Web/CSS/minmax)), definiert ist, außer dass die Spurgröße beim _Argument_ begrenzt wird, wenn es größer als das `auto` Minimum ist.

Siehe die Seite {{cssxref("grid-template-columns")}} für weitere Informationen zu den Keywords `max-content` und `auto`.

Die Funktion `fit-content()` kann auch als ausgelegte Boxgröße für {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} und {{cssxref("max-height")}} verwendet werden, wobei sich die maximalen und minimalen Größen auf die Inhaltsgröße beziehen.

## Syntax

Die Funktion `fit-content()` akzeptiert ein `<length>` oder ein `<percentage>` als Argument.

```css
/* <length> values */
fit-content(200px)
fit-content(5cm)
fit-content(30vw)
fit-content(100ch)

/* <percentage> value */
fit-content(40%)
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Eine absolute Länge.
- {{cssxref("&lt;percentage&gt;")}}

  - : Ein Prozentsatz relativ zum verfügbaren Platz in der gegebenen Achse.

    Bei Grid-Eigenschaften ist es relativ zur Inline-Größe des Grid-Containers in Spalten-Tracks und zur Blockgröße des Grid-Containers für Reihen-Tracks. Andernfalls ist es relativ zur verfügbaren Inline-Größe oder Blockgröße der ausgelegten Box, abhängig vom Schreibmodus.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grid-Spalten mit fit-content anpassen

#### HTML

```html
<div id="container">
  <div>Item as wide as the content.</div>
  <div>
    Item with more text in it. Because the contents of it are wider than the
    maximum width, it is clamped at 300 pixels.
  </div>
  <div>Flexible item</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### Ergebnis

{{EmbedLiveSample("Sizing_grid_columns_with_fit-content", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("min-content")}} Schlüsselbegriff
- {{cssxref("max-content")}} Schlüsselbegriff
- [CSS-Boxgröße](/de/docs/Web/CSS/CSS_box_sizing) Modul
- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche: Grid-Definitionskürzel](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
