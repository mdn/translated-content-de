---
title: fit-content()
slug: Web/CSS/fit-content_function
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`fit-content()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) begrenzt eine gegebene Größe auf eine verfügbare Größe gemäß der Formel `min(maximal Größe, max(minimal Größe, Argument))`.

{{InteractiveExample("CSS Demo: fit-content()")}}

```css interactive-example-choice
grid-template-columns: fit-content(8ch) fit-content(8ch) 1fr;
```

```css interactive-example-choice
grid-template-columns: fit-content(100px) fit-content(100px) 1fr;
```

```css interactive-example-choice
grid-template-columns: fit-content(40%) fit-content(40%) 1fr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One. This column has more text in it.</div>
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
  grid-gap: 10px;
  width: 250px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  text-align: left;
}
```

Die Funktion kann als Spurgröße in [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout)-Eigenschaften verwendet werden, wobei die maximale Größe durch `max-content` und die minimale Größe durch `auto` definiert wird, was ähnlich wie `auto` berechnet wird (z.B. [`minmax(auto, max-content)`](/de/docs/Web/CSS/minmax)), außer dass die Spurgröße bei _Argument_ beschränkt wird, wenn es größer als das `auto`-Minimum ist.

Sehen Sie auf der Seite {{cssxref("grid-template-columns")}} für mehr Informationen über die Schlüsselwörter `max-content` und `auto` nach.

Die `fit-content()`-Funktion kann auch als ausgelegte Box-Größe für {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} und {{cssxref("max-height")}} verwendet werden, wobei sich die maximalen und minimalen Größen auf die Inhaltsgröße beziehen.

## Syntax

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

    In Grid-Eigenschaften ist es relativ zur Inline-Größe des Grid-Containers in Spalten-Spuren und zur Block-Größe des Grid-Containers für Reihen-Spuren. Andernfalls ist es relativ zur verfügbaren Inline-Größe oder Block-Größe der ausgelegten Box, abhängig vom Schreibrichtungmodus.

## Formale Syntax

{{CSSSyntax("fit-content")}}

## Beispiele

### Größenanpassung von Grid-Spalten mit fit-content

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
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_sizing) Modul
- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche: Grid-Definition Abkürzungen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
