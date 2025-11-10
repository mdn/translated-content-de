---
title: grid-template-rows
slug: Web/CSS/Reference/Properties/grid-template-rows
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`grid-template-rows`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Linennamen und Spurgrößenfunktionen der {{Glossary("grid_row", "Grid-Reihen")}}.

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

Diese Eigenschaft kann folgendermaßen angegeben werden:

- entweder der Schlüsselwortwert `none`
- oder ein `<track-list>`-Wert
- oder ein `<auto-track-list>`-Wert.

### Werte

- `none`
  - : Ein Schlüsselwort, das bedeutet, dass es kein explizites Grid gibt. Alle Reihen werden implizit generiert und ihre Größe wird durch die Eigenschaft {{cssxref("grid-auto-rows")}} bestimmt.
- `[line-name]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/Reference/Values/custom-ident), der einen Namen für die Linie an diesem Ort angibt. Der Identifikator kann jeder gültige String außer den reservierten Wörtern `span` und `auto` sein. Linien können mehrere Namen haben, die innerhalb der eckigen Klammern durch ein Leerzeichen getrennt sind, z. B. `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert, relativ zur Blockgröße des Grid-Containers. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, behandelt der Browser den Prozentsatz für die Berechnung der intrinsischen Größe des Grid-Containers als `auto`. Der Prozentsatz wird dann gegen die resultierende Grid-Containergröße zur Anordnung des Grids und seiner Elemente aufgelöst. Der Browser kann die intrinsischen Größenbeiträge der Spur an die Größe des Grid-Containers anpassen und die endgültige Größe der Spur um den minimalen Betrag erhöhen, der zur Achtung des Prozentsatzes erforderlich ist.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Raums proportional zu ihrem Flex-Faktor ein. Wenn sie außerhalb einer `minmax()`-Notation erscheint, impliziert sie ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der die Grid-Spur belegenden Grid-Elemente darstellt.
- {{cssxref("min-content")}}
  - : Ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der die Grid-Spur belegenden Grid-Elemente darstellt.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner ist als _min_, wird _max_ ignoriert und die Funktion als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flex-Faktor der Spur. Es ist als Minimum ungültig.
- `auto`

  - : Als maximaler Wert repräsentiert es die größte {{cssxref("max-content")}}-Größe der Elemente in dieser Spur.

    Als Minimalwert repräsentiert es die größte minimale Größe der Elemente in dieser Spur (definiert durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} Eigenschaften der Elemente). Dies entspricht oft der {{cssxref("min-content")}}-Größe, aber nicht immer.

    Wird es außerhalb der {{cssxref("minmax", "minmax()")}}-Notation verwendet, repräsentiert `auto` den Bereich zwischen den oben beschriebenen Minimal- und Maximalwerten. In den meisten Fällen verhält es sich ähnlich wie `minmax(min-content,max-content)`.

    > [!NOTE] > `auto`-Spurgrößen (und nur `auto`-Spurgrößen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher wird eine `auto`-große Spur standardmäßig jeden verbleibenden Platz im Grid-Container einnehmen.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Spurgröße auf _argument_ begrenzt wird, wenn dieser größer als das `auto` Minimum ist.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Spurliste, das es erlaubt, eine große Anzahl von Reihen mit einem wiederkehrenden Muster in kompakterer Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : Gibt an, dass diese Achse nach dem Masonry-Algorithmus angeordnet werden soll.
- [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Gibt an, dass das Grid den überspannten Teil seines übergeordneten Grids auf dieser Achse übernehmen wird. Statt explizit angegeben zu werden, werden die Größen der Grid-Reihen/Spalten aus der Definition des übergeordneten Grids übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größen von Grid-Reihen spezifizieren

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
- [Grundlegende Konzepte des Grid-Layouts: Grid-Spuren](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#grid_tracks)
- Video: [Definieren eines Grids](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
