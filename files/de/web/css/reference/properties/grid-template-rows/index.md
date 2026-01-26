---
title: grid-template-rows
slug: Web/CSS/Reference/Properties/grid-template-rows
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`grid-template-rows`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Linennamen und Spurgrößenfunktionen der {{Glossary("grid_row", "Rasterzeilen")}}.

{{InteractiveExample("CSS Demo: grid-template-rows")}}

```css interactive-example-choice
grid-template-rows: auto;
```

```css interactive-example-choice
grid-template-rows: 40px 4em 40px;
```

```css interactive-example-choice
grid-template-rows: 1fr 2fr 1fr;
```

```css interactive-example-choice
grid-template-rows: 3ch auto minmax(10px, 60px);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntax

```css
/* Keyword value */
grid-template-rows: none;

/* <track-list> values */
grid-template-rows: 100px 1fr;
grid-template-rows: [line-name] 100px;
grid-template-rows: [line-name1] 100px [line-name2 line-name3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);
grid-template-rows: subgrid;
grid-template-rows: masonry;

/* <auto-track-list> values */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-rows:
  [line-name1] 100px [line-name2]
  repeat(auto-fit, [line-name3 line-name4] 300px)
  100px;
grid-template-rows:
  [line-name1 line-name2] 100px
  repeat(auto-fit, [line-name1] 300px) [line-name3];

/* Global values */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: revert;
grid-template-rows: revert-layer;
grid-template-rows: unset;
```

Diese Eigenschaft kann wie folgt angegeben werden:

- entweder als Schlüsselwortwert `none`
- oder als `<track-list>`-Wert
- oder als `<auto-track-list>`-Wert.

### Werte

- `none`
  - : Ein Schlüsselwort, das bedeutet, dass es kein explizites Raster gibt. Jegliche Zeilen werden implizit generiert und ihre Größe wird durch die {{cssxref("grid-auto-rows")}}-Eigenschaft bestimmt.
- `[line-name]`
  - : Ein {{cssxref("custom-ident")}}, das einen Namen für die Linie an dieser Stelle angibt. Der Identifikator kann jeder gültige String sein, außer den reservierten Wörtern `span` und `auto`. Linien können mehrere Namen haben, die innerhalb der eckigen Klammern durch ein Leerzeichen getrennt sind, zum Beispiel `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert, bezogen auf die Blockgröße des Rastercontainers. Wenn die Größe des Rastercontainers von der Größe seiner Spuren abhängt, behandelt der Browser den Prozentwert als `auto` für die Berechnung der intrinsischen Größe des Rastercontainers. Der Prozentsatz wird dann auf die resultierende Größe des Rastercontainers angewendet, um das Raster und seine Elemente zu layouten. Der Browser kann die intrinsischen Größenbeiträge der Spur an die Größe des Rastercontainers anpassen und die endgültige Größe der Spur um den minimalen Betrag erhöhen, der erforderlich ist, um den Prozentsatz einzuhalten.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flexfaktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Raumes proportional zu ihrem Flexfaktor ein. Wenn außerhalb einer `minmax()`-Notation erscheinend, impliziert es ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Rasterelemente, die die Rasterspur belegen, bezeichnet.
- {{cssxref("min-content")}}
  - : Ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Rasterelemente, die die Rasterspur belegen, bezeichnet.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner ist als _min_, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flexfaktor der Spur. Es ist als Minimum ungültig.
- `auto`
  - : Als Maximalwert repräsentiert es die größte {{cssxref("max-content")}}-Größe der Elemente in dieser Spur.

    Als Minimalwert repräsentiert es die größte Minimalgröße der Elemente in dieser Spur (angegeben durch die {{cssxref("min-width")}}/{{cssxref("min-height")}}-Eigenschaften der Elemente). Dies entspricht oft der {{cssxref("min-content")}}-Größe, aber nicht immer.

    Wenn außerhalb der {{cssxref("minmax()")}}-Notation verwendet, repräsentiert `auto` den Bereich zwischen den oben beschriebenen Minimal- und Maximalwerten. In den meisten Fällen verhält es sich ähnlich wie `minmax(min-content,max-content)`.

    > [!NOTE]
    > `auto`-Spurgrößen (und nur `auto`-Spurgrößen) können durch die {{cssxref("align-content")}}- und {{cssxref("justify-content")}}-Eigenschaften gestreckt werden. Daher nimmt eine `auto`-große Spur standardmäßig jeden verbleibenden Raum im Rastercontainer ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` (d.h. `minmax(auto, max-content)`) berechnet wird, außer dass die Spurgröße auf _argument_ begrenzt ist, wenn dieser größer ist als das `auto`-Minimum.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Spurliste, das es ermöglicht, eine große Anzahl von Reihen, die ein wiederkehrendes Muster aufweisen, in kompakter Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : Gibt an, dass diese Achse gemäß dem „Masonry“-Algorithmus ausgelegt werden sollte.
- [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Gibt an, dass das Raster den über die Spanne reichenden Abschnitt des Elterraster in dieser Achse übernehmen wird. Anstatt explizit spezifiziert zu werden, werden die Größen der Rasterzeilen/-spalten von der Definition des Elterraster übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Rasterzeilengrößen

#### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-rows: 30px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Ergebnis

{{EmbedLiveSample("Specifying_grid_row_sizes", "40px", "100px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- [Grundkonzepte des Rasters: Rasterspuren](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#grid_tracks)
- Video: [Definieren eines Rasters](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
