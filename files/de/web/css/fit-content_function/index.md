---
title: fit-content()
slug: Web/CSS/fit-content_function
l10n:
  sourceCommit: c9f96f06d4fbd265808f298eb9b2773f739860c5
---

{{CSSRef}}

Die **`fit-content()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) begrenzt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximum size, max(minimum size, argument))`.

{{EmbedInteractiveExample("pages/css/function-fit-content.html")}}

Die Funktion kann als Spurgröße in [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) Eigenschaften verwendet werden, wobei die maximale Größe durch `max-content` und die minimale Größe durch `auto` definiert wird, was ähnlich wie `auto` berechnet wird (d.h. [`minmax(auto, max-content)`](/de/docs/Web/CSS/minmax)), außer dass die Spurgröße auf das _Argument_ begrenzt wird, wenn es größer ist als das minimale `auto`.

Siehe die Seite {{cssxref("grid-template-columns")}} für weitere Informationen zu den Schlüsselwörtern `max-content` und `auto`.

Die `fit-content()` Funktion kann auch als Größe eines angeordneten Kastens für {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} und {{cssxref("max-height")}} verwendet werden, wobei sich die maximalen und minimalen Größen auf die Inhaltsgröße beziehen.

## Syntax

Die `fit-content()` Funktion akzeptiert ein `<length>` oder ein `<percentage>` als Argument.

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

    In Grid-Eigenschaften ist er relativ zur Inline-Größe des Grid-Containers bei Spalten-Spuren und zur Blockgröße des Grid-Containers für Zeilen-Spuren. Andernfalls ist er relativ zur verfügbaren Inline-Größe oder Blockgröße des angeordneten Kastens, abhängig vom Schreibmodus.

## Formale Syntax

{{CSSSyntax("fit-content")}}

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
- [CSS Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [Zeilenbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche: Kurzwörter für Grid-Definitionen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
