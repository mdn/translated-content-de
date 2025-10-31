---
title: grid-template-rows
slug: Web/CSS/Reference/Properties/grid-template-rows
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`grid-template-rows`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Liniennamen und Track-Größenfunktionen der {{Glossary("grid_row", "Gitterzeilen")}}.

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

- entweder der Schlüsselwortwert `none`
- oder ein `<track-list>` Wert
- oder ein `<auto-track-list>` Wert.

### Werte

- `none`
  - : Ein Schlüsselwort, das bedeutet, dass kein explizites Gitter vorhanden ist. Alle Zeilen werden implizit generiert und ihre Größe wird durch die {{cssxref("grid-auto-rows")}} Eigenschaft bestimmt.
- `[line-name]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), das einen Namen für die Linie an dieser Stelle angibt. Die Identifikation kann jeder gültige String sein, außer den reservierten Wörtern `span` und `auto`. Linien können mehrere Namen haben, die durch Leerzeichen innerhalb der eckigen Klammern getrennt sind, zum Beispiel `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht negativer {{cssxref("percentage", "&lt;percentage&gt;")}} Wert, relativ zur Blockgröße des Grid-Containers. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, behandelt der Browser den Prozentsatz als `auto` für die Berechnung der intrinsischen Größe des Grid-Containers. Der Prozentsatz wird dann auf die resultierende Größe des Grid-Containers zur Anordnung des Grids und seiner Elemente angewendet. Der Browser kann die intrinsischen Größenbeiträge des Tracks an die Größe des Grid-Containers anpassen und kann die endgültige Größe des Tracks um das Minimum erhöhen, das erforderlich ist, um den Prozentsatz zu erfüllen.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Eine nicht negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-große Track nimmt einen Anteil des verbliebenen Raums im Verhältnis zu seinem Flex-Faktor ein. Wenn er außerhalb einer `minmax()`-Notation erscheint, impliziert er ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Grid-Elemente darstellt, die den Gittertrack ausfüllen.
- {{cssxref("min-content")}}
  - : Ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Grid-Elemente darstellt, die den Gittertrack ausfüllen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Als Maximum setzt ein `<flex>` Wert den Flex-Faktor des Tracks. Er ist als Minimum ungültig.
- `auto`
  - : Als Maximalwert stellt es die größte {{cssxref("max-content")}} Größe der Elemente in diesem Track dar.

    Als Minimalwert stellt es die größte Mindestgröße von Elementen in diesem Track dar (angegeben durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} Eigenschaften der Elemente). Dies entspricht oft der {{cssxref("min-content")}} Größe, aber nicht immer.

    Wenn es außerhalb der {{cssxref("minmax", "minmax()")}} Notation verwendet wird, stellt `auto` den Bereich zwischen den oben beschriebenen Minimal- und Maximalwerten dar. In den meisten Fällen verhält sich dies ähnlich wie `minmax(min-content,max-content)`.

    > [!NOTE]
    > `auto` Track-Größen (und nur `auto` Track-Größen) können durch die {{cssxref("align-content")}} und {{cssxref("justify-content")}} Eigenschaften gedehnt werden. Daher nimmt ein `auto`-größe Track standardmäßig jeden verbleibenden Raum im Grid-Container ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Stellt die Formel `min(max-content, max(auto, argument))` dar, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Track-Größe bei _argument_ geklemmt wird, wenn dieser größer als das `auto` Minimum ist.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Stellt ein wiederholtes Fragment der Track-Liste dar, das es ermöglicht, eine große Anzahl von Zeilen, die ein wiederkehrendes Muster aufweisen, in einer kompakteren Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Gibt an, dass diese Achse gemäß dem Mauerwerk-Algorithmus angeordnet werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Gibt an, dass das Gitter den überspannten Teil seines übergeordneten Gitters auf dieser Achse übernimmt. Anstatt explizit angegeben zu werden, werden die Größen der Gitterreihen/-spalten von der Definition des übergeordneten Gitters übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Gitterzeilengrößen

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
- [Grundkonzepte des Gitterlayouts: Gittertracks](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Definieren eines Gitters](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
