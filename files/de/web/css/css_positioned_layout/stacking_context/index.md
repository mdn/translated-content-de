---
title: Stapelkontext
slug: Web/CSS/CSS_positioned_layout/Stacking_context
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

**Stapelkontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, von dem angenommen wird, dass er dem Viewport oder der Webseite zugewandt ist. Der Stapelkontext bestimmt, wie Elemente entlang der z-Achse übereinander geschichtet werden (denken Sie daran als die "Tiefendimension" auf Ihrem Bildschirm). Der Stapelkontext bestimmt die visuelle Reihenfolge, wie sich überlappende Inhalte dargestellt werden.

Elemente innerhalb eines Stapelkontexts werden unabhängig von Elementen außerhalb dieses Stapelkontexts gestapelt, um sicherzustellen, dass Elemente in einem Stapelkontext nicht die Stapelreihenfolge von Elementen in einem anderen stören. Jeder Stapelkontext ist vollständig unabhängig von seinen Geschwistern: Nur Nachkommenelemente werden beim Stapelvorgang berücksichtigt.

Jeder Stapelkontext ist in sich geschlossen. Nachdem der Inhalt eines Elements gestapelt wurde, wird das gesamte Element als eine einzelne Einheit in der Stapelreihenfolge seines übergeordneten Stapelkontexts betrachtet.

Innerhalb eines Stapelkontexts werden Kindelemente entsprechend den `z-index` Werten aller Geschwister gestapelt. Die Stapelkontexte dieser verschachtelten Elemente haben nur in diesem übergeordneten Element eine Bedeutung. Stapelkontexte werden atomar als eine Einheit im übergeordneten Stapelkontext behandelt. Stapelkontexte können in anderen Stapelkontexten enthalten sein und bilden zusammen eine Hierarchie der Stapelkontexte.

Die Hierarchie der Stapelkontexte ist eine Teilmenge der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stapelkontexte erstellen. Elemente, die keinen eigenen Stapelkontext erstellen, werden vom übergeordneten Stapelkontext _assimiliert_.

## Merkmale, die Stapelkontexte erstellen

Ein Stapelkontext wird an jeder Stelle im Dokument durch ein beliebiges Element in folgenden Szenarien gebildet:

- Wurzelelement des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}} Wert `absolute` oder `relative` und einem {{cssxref("z-index")}} Wert ungleich `auto`.
- Element mit einem {{cssxref("position")}} Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}} Wert `size` oder `inline-size` gesetzt (siehe [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)).
- Element, das ein [Flex-Element](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) mit einem {{cssxref("z-index")}} Wert ungleich `auto` ist.
- Element, das ein [Grid-Element]() mit einem {{cssxref("z-index")}} Wert ungleich `auto` ist.
- Element mit einem {{cssxref("opacity")}} Wert kleiner als `1`.
- Element mit einem {{cssxref("mix-blend-mode")}} Wert ungleich `normal`.
- Element mit einer der folgenden Eigenschaften mit einem Wert ungleich `none`:

  - {{cssxref("transform")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - {{cssxref("translate")}}
  - {{cssxref("filter")}}
  - {{cssxref("backdrop-filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- Element mit dem {{cssxref("isolation")}} Wert `isolate`.
- Element mit einem {{cssxref("will-change")}} Wert, der eine Eigenschaft spezifiziert, die bei einem nicht-initialen Wert einen Stapelkontext erstellen würde.
- Element mit einem {{cssxref("contain")}} Wert von `layout` oder `paint`, oder einem zusammengesetzten Wert, der eine dieser Werte beinhaltet (d.h. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "Top-Schicht")}} und das zugehörige {{cssxref("::backdrop")}} eingebracht wurde. Beispiele beinhalten [Vollbild](/de/docs/Web/API/Fullscreen_API) und [Dialogfeld](/de/docs/Web/API/Popover_API) Elemente.
- Element, das Eigenschaften zum Erstellen von Stapelkontexten (wie `opacity`) animiert hat, indem {{cssxref("@keyframes")}} verwendet wurde, mit [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode), das auf [`forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) gesetzt ist.

## Verschachtelte Stapelkontexte

Stapelkontexte können in anderen Stapelkontexten enthalten sein und zusammen eine Hierarchie von Stapelkontexten bilden.

Das Wurzelelement eines Dokuments ist ein Stapelkontext, der in den meisten Fällen verschachtelte Stapelkontexte enthält, von denen viele zusätzliche Stapelkontexte enthalten. Innerhalb jedes Stapelkontexts werden Kindelemente nach den gleichen in [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index) erläuterten Regeln gestapelt. Wichtig ist, dass die `z-index` Werte seiner Kindelemente nur innerhalb des Stapelkontexts des Elternteils Bedeutung haben. Stapelkontexte werden atomar als eine Einheit im Stapelkontext des übergeordneten Elements behandelt.

Um die _Render-Reihenfolge_ gestapelter Elemente entlang der z-Achse zu ermitteln, können Sie jeden Indexwert als eine Art "Versionsnummer" betrachten, bei der Kindelemente kleinere Versionsnummern unterhalb der Hauptversionsnummer ihres übergeordneten Elements darstellen.

Um zu demonstrieren, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer übergeordneten Stapelkontexte beteiligt ist, betrachten wir eine Beispielseite mit sechs Container-Elementen. Es gibt drei benachbarte {{htmlelement("article")}} Elemente. Der letzte `<article>` enthält drei benachbarte {{htmlelement("section")}} Elemente, wobei das {{htmlelement("heading_elements", "&lt;h1&gt;")}} und {{htmlelement("code")}} dieses dritten Artikels zwischen dem ersten und zweiten benachbarten `<section>` Element erscheint.

```html
<article id="container1">
  <h1>Article element #1</h1>
  <code>
    position: relative;<br />
    z-index: 5;
  </code>
</article>

<article id="container2">
  <h1>Article Element #2</h1>
  <code>
    position: relative;<br />
    z-index: 2;
  </code>
</article>

<article id="container3">
  <section id="container4">
    <h1>Section Element #4</h1>
    <code>
      position: relative;<br />
      z-index: 6;
    </code>
  </section>

  <h1>Article Element #3</h1>
  <code>
    position: absolute;<br />
    z-index: 4;
  </code>

  <section id="container5">
    <h1>Section Element #5</h1>
    <code>
      position: relative;<br />
      z-index: 1;
    </code>
  </section>

  <section id="container6">
    <h1>Section Element #6</h1>
    <code>
      position: absolute;<br />
      z-index: 3;
    </code>
  </section>
</article>
```

Jedes Container-Element hat eine {{cssxref("opacity")}} von weniger als `1` und eine {{cssxref("position")}} von entweder `relative` oder `absolute` gesetzt. Diese Eigenschaft-Werte-Paare erstellen einen Stapelkontext, wenn das Element einen `z-index` Wert ungleich `auto` hat.

```css hidden
* {
  margin: 0;
}
html {
  padding: 20px;
  font:
    12px/20px Arial,
    sans-serif;
}
h1 {
  font-size: 1.25em;
}
#container1,
#container2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#container1 {
  margin-bottom: 190px;
}
#container3 {
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
  width: 330px;
}
#container4 {
  border: 1px dashed #996;
  background-color: #ffc;
  padding: 25px 10px 5px;
  margin-bottom: 15px;
}
#container5 {
  border: 1px dashed #996;
  background-color: #ffc;
  margin-top: 15px;
  padding: 5px 10px;
}
#container6 {
  background-color: #ddf;
  border: 1px dashed #009;
  padding-left: 20px;
  padding-top: 125px;
  width: 150px;
  height: 125px;
}
```

```css
section,
article {
  opacity: 0.85;
  position: relative;
}
#container1 {
  z-index: 5;
}
#container2 {
  z-index: 2;
}
#container3 {
  z-index: 4;
  position: absolute;
  top: 40px;
  left: 180px;
}
#container4 {
  z-index: 6;
}
#container5 {
  z-index: 1;
}
#container6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
}
```

Die CSS-Eigenschaften für Farben, Schriften, Ausrichtung und [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wurden der Kürze halber ausgeblendet.

{{ EmbedLiveSample('Verschachtelte Stapelkontexte', '100%', '396') }}

Die Hierarchie der Stapelkontexte im obigen Beispiel ist wie folgt:

```plain no-lint
Root
│
├── ARTICLE #1
├── ARTICLE #2
└── ARTICLE #3
  │
  ├── SECTION #4
  ├────  ARTICLE #3 content
  ├── SECTION #5
  └── SECTION #6
```

Die drei `<section>` Elemente sind Kinder von ARTICLE #3. Daher wird das Stapeln der Sektionselemente vollständig innerhalb von ARTICLE #3 gelöst. Sobald das Stapeln und Rendern innerhalb von ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3 Element zur Stapelung im Wurzelelement im Hinblick auf seine benachbarten `<article>` Elemente übergeben.

Indem wir den `z-index` als "Versionsnummern" vergleichen, können wir erkennen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt wird und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt wird.
SECTION #4 wird unter ARTICLE #1 gerendert, weil der `z-index` von ARTICLE #1 (`5`) im Stapelkontext des Wurzelelements, während der `z-index` von SECTION #4 (`6`) im Stapelkontext von ARTICLE #3 (`z-index: 4`) gültig ist. Daher liegt SECTION #4 unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren `z-index` Wert (`4-6` ist kleiner als `5-0`) hat.

Aus dem gleichen Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, das einen höheren `z-index` Wert (`2-0` ist kleiner als `4-1`) hat.

ARTICLE #3 hat einen `z-index` von `4`, aber dieser Wert ist unabhängig vom `z-index` der drei darin verschachtelten Sektionen, weil sie zu einem anderen Stapelkontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Render-Reihenfolge):

- Wurzel

  - ARTICLE #2: (`z-index`: 2), was zu einer Render-Reihenfolge von `2-0` führt
  - ARTICLE #3: (`z-index`: 4), was zu einer Render-Reihenfolge von `4-0` führt

    - SECTION #5: (`z-index`: 1), unter einem Element gestapelt (`z-index`: 4), was zu einer Render-Reihenfolge von `4-1` führt
    - SECTION #6: (`z-index`: 3), unter einem Element gestapelt (`z-index`: 4), was zu einer Render-Reihenfolge von `4-3` führt
    - SECTION #4: (`z-index`: 6), unter einem Element gestapelt (`z-index`: 4), was zu einer Render-Reihenfolge von `4-6` führt

  - ARTICLE #1: (`z-index`: 5), was zu einer Render-Reihenfolge von `5-0` führt

## Zusätzliche Beispiele

Zusätzliche Beispiele beinhalten eine [2-Stufen-Hierarchie mit `z-index` auf der letzten Stufe](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1), eine [2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2), und eine [3-stufige HTML-Hierarchie, `z-index` auf der zweiten Stufe](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3).

## Siehe auch

- [Verständnis des z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Stapelung ohne die `z-index` Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Top-Schicht")}}
- [CSS Positioned Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
