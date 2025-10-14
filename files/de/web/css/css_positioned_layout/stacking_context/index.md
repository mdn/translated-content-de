---
title: Stapelkontext
slug: Web/CSS/CSS_positioned_layout/Stacking_context
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

Ein **Stapelkontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, der auf das Ansichtsfenster oder die Webseite schaut. Der Stapelkontext bestimmt, wie Elemente entlang der z-Achse übereinander geschichtet werden (denken Sie dies als die "Tiefendimension" auf Ihrem Bildschirm). Der Stapelkontext bestimmt die visuelle Reihenfolge, in der sich überlagernder Inhalt gerendert wird.

Elemente innerhalb eines Stapelkontexts werden unabhängig von Elementen außerhalb dieses Stapelkontexts gestapelt, um sicherzustellen, dass Elemente in einem Stapelkontext die Stapelreihenfolge von Elementen in einem anderen nicht stören. Jeder Stapelkontext ist völlig unabhängig von seinen Geschwistern: Nur untergeordnete Elemente werden berücksichtigt, wenn das Stapeln verarbeitet wird.

Jeder Stapelkontext ist in sich geschlossen. Nachdem der Inhalt eines Elements gestapelt ist, wird das gesamte Element als eine einzelne Einheit in der Stapelreihenfolge des übergeordneten Stapelkontexts betrachtet.

Innerhalb eines Stapelkontexts werden Kindelemente entsprechend den `z-index`-Werten aller Geschwister gestapelt. Die Stapelkontexte dieser verschachtelten Elemente haben nur in diesem Elternteil Bedeutung. Stapelkontexte werden atomar als eine einzelne Einheit im übergeordneten Stapelkontext behandelt. Stapelkontexte können andere Stapelkontexte enthalten und bilden zusammen eine Hierarchie von Stapelkontexten.

Die Hierarchie der Stapelkontexte ist ein Teil der Hierarchie von HTML-Elementen, da nur bestimmte Elemente Stapelkontexte erstellen. Elemente, die ihre eigenen Stapelkontexte nicht erstellen, werden vom übergeordneten Stapelkontext _assimiliert_.

## Funktionen zur Erstellung von Stapelkontexten

Ein Stapelkontext wird überall im Dokument von jedem Element in folgenden Szenarien gebildet:

- Wurzelelement des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}}-Wert `size` oder `inline-size` eingestellt (siehe [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)).
- Element, das ein [flex-Element](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element, das ein [Raster-Element]() mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element mit einem {{cssxref("opacity")}}-Wert kleiner als `1`.
- Element mit einem {{cssxref("mix-blend-mode")}}-Wert ungleich `normal`.
- Element mit einem der folgenden Eigenschaften mit einem Wert ungleich `none`:
  - {{cssxref("transform")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - {{cssxref("translate")}}
  - {{cssxref("filter")}}
  - {{cssxref("backdrop-filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- Element mit dem {{cssxref("isolation")}}-Wert `isolate`.
- Element mit einem {{cssxref("will-change")}}-Wert, der jede Eigenschaft angibt, die einen Stapelkontext auf einem nicht-initialen Wert erstellen würde.
- Element mit einem {{cssxref("contain")}}-Wert von `layout` oder `paint`, oder einem zusammengesetzten Wert, der entweder dieser Werte umfasst (d.h. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "oberste Schicht")}} und seine entsprechende {{cssxref("::backdrop")}} platziert wurde. Beispiele umfassen [Vollbild](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API)-Elemente.
- Element, das Eigenschaften erstellt hat, die den Stapelkontext erstellen (wie `opacity`), die mit {{cssxref("@keyframes")}} animiert wurden, mit [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) auf [`forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) eingestellt.

## Verschachtelte Stapelkontexte

Stapelkontexte können in andere Stapelkontexte eingebettet sein, und sie können zusammen eine Hierarchie von Stapelkontexten bilden.

Das Wurzelelement eines Dokuments ist ein Stapelkontext, der in den meisten Fällen verschachtelte Stapelkontexte enthält, von denen viele zusätzliche Stapelkontexte enthalten werden. Innerhalb jedes Stapelkontexts werden Kindelemente nach den gleichen Regeln gestapelt, die in [Using `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index) erklärt werden. Wichtig ist, dass die `z-index`-Werte ihrer Kindstapelkontexte nur innerhalb des übergeordneten Stapelkontexts Bedeutung haben. Stapelkontexte werden atomar als eine einzelne Einheit im übergeordneten Stapelkontext behandelt.

Um herauszufinden, in welcher _Reihenfolge_ gestapelte Elemente entlang der z-Achse gerendert werden, denken Sie an jeden Indexwert als eine Art "Versionsnummer", wobei Kindelemente unter ihren übergeordneten Hauptelementsnummern als Nebenversionen erscheinen.

Um zu demonstrieren, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer Vorfahren-Stapelkontexte teilnimmt, betrachten wir eine Beispielseite mit sechs Containerelementen. Es gibt drei Geschwister-{{htmlelement("article")}}-Elemente. Das letzte `<article>` enthält drei Geschwister-{{htmlelement("section")}}-Elemente, wobei die {{htmlelement("heading_elements", "&lt;h1&gt;")}} und {{htmlelement("code")}} dieses dritten Artikels zwischen den ersten und zweiten Geschwister-`<section>`-Elementen erscheinen.

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

Jedes Containerelement hat eine {{cssxref("opacity")}} von weniger als `1` und eine {{cssxref("position")}} von entweder `relative` oder `absolute` gesetzt. Diese Eigenschaft-Wert-Paare erstellen einen Stapelkontext, wenn das Element einen `z-index`-Wert hat, der nicht `auto` ist.

```css hidden
* {
  margin: 0;
}
html {
  padding: 20px;
  font:
    12px/20px "Arial",
    sans-serif;
}
h1 {
  font-size: 1.25em;
}
#container1,
#container2 {
  border: 1px dashed #669966;
  padding: 10px;
  background-color: #ccffcc;
}
#container1 {
  margin-bottom: 190px;
}
#container3 {
  border: 1px dashed #990000;
  background-color: #ffdddd;
  padding: 40px 20px 20px;
  width: 330px;
}
#container4 {
  border: 1px dashed #999966;
  background-color: #ffffcc;
  padding: 25px 10px 5px;
  margin-bottom: 15px;
}
#container5 {
  border: 1px dashed #999966;
  background-color: #ffffcc;
  margin-top: 15px;
  padding: 5px 10px;
}
#container6 {
  background-color: #ddddff;
  border: 1px dashed #000099;
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

Die CSS-Eigenschaften für Farben, Schriften, Ausrichtung und [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wurden der Übersichtlichkeit halber ausgeblendet.

{{ EmbedLiveSample('Nested stacking contexts', '100%', '396') }}

Die Hierarchie der Stapelkontexte in diesem Beispiel ist wie folgt:

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

Die drei `<section>`-Elemente sind Kinder von ARTICLE #3. Daher wird das Stapeln der Abschnittselemente vollständig innerhalb von ARTICLE #3 gelöst. Sobald das Stapeln und Rendern in ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3-Element zur Stapelung im Wurzelelement übergeben, in Bezug auf seine Geschwister-`<article>`-Elemente.

Durch den Vergleich der `z-index`-Werte als "Versionsnummern" können wir sehen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt ist, und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt ist.
SECTION #4 wird unter ARTICLE #1 gerendert, weil der z-index von ARTICLE #1 (`5`) innerhalb des Stapelkontexts des Wurzelelements gültig ist, während der z-index von SECTION #4 (`6`) innerhalb des Stapelkontexts von ARTICLE #3 (`z-index: 4`) gültig ist. So befindet sich SECTION #4 unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren z-index-Wert (`4-6` ist weniger als `5-0`) hat.

Aus dem gleichen Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 gehört (`z-index: 4`), das einen höheren z-index-Wert hat (`2-0` ist weniger als `4-1`).

ARTICLE #3's z-index ist `4`, aber dieser Wert ist unabhängig vom `z-index` der drei darin verschachtelten Sektionen, da sie zu einem anderen Stapelkontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Renderreihenfolge):

- Root
  - ARTICLE #2: (`z-index`: 2), was zu einer Renderreihenfolge von `2-0` führt
  - ARTICLE #3: (`z-index`: 4), was zu einer Renderreihenfolge von `4-0` führt
    - SECTION #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von `4-1` führt
    - SECTION #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von `4-3` führt
    - SECTION #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von `4-6` führt

  - ARTICLE #1: (`z-index`: 5), was zu einer Renderreihenfolge von `5-0` führt

## Zusätzliche Beispiele

Zusätzliche Beispiele umfassen eine [2-Ebenen-Hierarchie mit `z-index` auf der letzten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1), eine [2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2), und eine [3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3).

## Siehe auch

- [Understanding z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Using z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Oberste Schicht")}}
- [CSS positioned layout](/de/docs/Web/CSS/CSS_positioned_layout)-Modul
