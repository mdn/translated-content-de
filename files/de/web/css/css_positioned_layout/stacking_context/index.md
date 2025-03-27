---
title: Stacking-Kontext
slug: Web/CSS/CSS_positioned_layout/Stacking_context
l10n:
  sourceCommit: 583dde0bc91456598715e17d10e469da00b7cc1d
---

{{CSSRef}}

Ein **Stacking-Kontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, dass er dem Viewport oder der Webseite gegenübersteht. Der Stacking-Kontext bestimmt, wie Elemente entlang der z-Achse (denken Sie an die "Tiefen"-Dimension auf Ihrem Bildschirm) übereinander geschichtet werden. Der Stacking-Kontext bestimmt die visuelle Reihenfolge, in der sich überlappende Inhalte gerendert werden.

Elemente innerhalb eines Stacking-Kontexts werden unabhängig von Elementen außerhalb dieses Stacking-Kontexts gestapelt, wodurch sichergestellt wird, dass Elemente in einem Stacking-Kontext die Stapelreihenfolge von Elementen in einem anderen nicht stören. Jeder Stacking-Kontext ist völlig unabhängig von seinen Geschwistern: Nur Nachkommenelemente werden berücksichtigt, wenn das Stapeln verarbeitet wird.

Jeder Stacking-Kontext ist in sich geschlossen. Nachdem die Inhalte eines Elements gestapelt wurden, wird das gesamte Element als eine Einheit in der Stapelreihenfolge des übergeordneten Stacking-Kontexts betrachtet.

Innerhalb eines Stacking-Kontexts werden Kindelemente entsprechend den `z-index`-Werten aller Geschwister gestapelt. Die Stacking-Kontexte dieser verschachtelten Elemente haben nur Bedeutung in diesem übergeordneten Kontext. Stacking-Kontexte werden atomar als eine Einheit im übergeordneten Stacking-Kontext behandelt. Stacking-Kontexte können in anderen Stacking-Kontexten enthalten sein und zusammen eine Hierarchie von Stacking-Kontexten erstellen.

Die Hierarchie von Stacking-Kontexten ist eine Teilmenge der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stacking-Kontexte erstellen. Elemente, die keine eigenen Stacking-Kontexte erstellen, werden vom übergeordneten Stacking-Kontext _assimiliert_.

## Eigenschaften, die Stacking-Kontexte erstellen

Ein Stacking-Kontext wird überall im Dokument von jedem Element in den folgenden Szenarien gebildet:

- Wurzelelement des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}} Wert `absolute` oder `relative` und einem {{cssxref("z-index")}} Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("position")}} Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}} Wert `size` oder `inline-size` gesetzt (siehe [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)).
- Element, das ein [Flex-Item](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) mit einem {{cssxref("z-index")}} Wert, der nicht `auto` ist, ist.
- Element, das ein [Grid-Item]() mit einem {{cssxref("z-index")}} Wert, der nicht `auto` ist, ist.
- Element mit einem {{cssxref("opacity")}} Wert kleiner als `1`.
- Element mit einem {{cssxref("mix-blend-mode")}} Wert, der nicht `normal` ist.
- Element mit einer der folgenden Eigenschaften mit einem Wert, der nicht `none` ist:

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
- Element mit einem {{cssxref("will-change")}} Wert, der eine beliebige Eigenschaft angibt, die einen Stacking-Kontext auf einem Nicht-Initialwert erzeugen würde.
- Element mit einem {{cssxref("contain")}} Wert von `layout` oder `paint`, oder einem zusammengesetzten Wert, der eine dieser Werte einschließt (z. B. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "Top-Ebene")}} und seinen entsprechenden {{cssxref("::backdrop")}} platziert wird. Beispiele sind [Fullscreen](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API) Elemente.
- Element, bei dem die Stacking-Kontext-erzeugenden Eigenschaften (wie `opacity`) mit {{cssxref("@keyframes")}} animiert wurden, mit [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) auf [`forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards).

## Verschachtelte Stacking-Kontexte

Stacking-Kontexte können in anderen Stacking-Kontexten enthalten sein, und sie können zusammen eine Hierarchie von Stacking-Kontexten erstellen.

Das Wurzelelement eines Dokuments ist ein Stacking-Kontext, der in den meisten Fällen verschachtelte Stacking-Kontexte enthält, von denen viele zusätzliche Stacking-Kontexte enthalten werden. Innerhalb jedes Stacking-Kontexts werden Kindelemente gemäß den in [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index) erklärten Regeln gestapelt. Wichtig ist, dass die `z-index`-Werte seiner Kinder-Stacking-Kontexte nur innerhalb des Stacking-Kontexts des übergeordneten Elements Bedeutung haben. Stacking-Kontexte werden atomar als eine Einheit im übergeordneten Stacking-Kontext behandelt.

Um die _Renderreihenfolge_ gestapelter Elemente entlang der z-Achse zu bestimmen, denken Sie an jeden Indexwert als eine Art "Versionsnummer", wobei Kindelemente kleine Versionsnummern unter der Hauptversionsnummer ihres Elternteils darstellen.

Um zu demonstrieren, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer Vorfahren-Stapling-Kontexte teilnimmt, betrachten wir eine Beispielseite mit sechs Container-Elementen. Es gibt drei Schwester-{{htmlelement("article")}}-Elemente. Das letzte `<article>` enthält drei Schwester-{{htmlelement("section")}}-Elemente, wobei die {{htmlelement("heading_elements", "&lt;h1&gt;")}} und {{htmlelement("code")}} dieses dritten Artikels zwischen den ersten und zweiten Schwester-`<section>`-Elementen erscheinen.

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

Jedes Container-Element hat eine {{cssxref("opacity")}} von weniger als `1` und eine {{cssxref("position")}} von entweder `relative` oder `absolute` eingestellt. Diese Eigenschafts-Wert-Paare erstellen einen Stacking-Kontext, wenn das Element `z-index`-Wert außer `auto` hat.

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

{{ EmbedLiveSample('Verschachtelte Stacking-Kontexte', '100%', '396') }}

Die Hierarchie der Stacking-Kontexte im obigen Beispiel ist wie folgt:

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

Die drei `<section>`-Elemente sind Kinder von ARTICLE #3. Daher wird das Stapeln der Abschnittselemente vollständig innerhalb von ARTICLE #3 gelöst. Sobald das Stapeln und Rendern innerhalb von ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3-Element zur Stapelverarbeitung im Wurzelelement in Bezug zu seinen Schwester-`<article>`-Elementen übergeben.

Indem Sie den `z-index` als "Versionsnummern" vergleichen, können wir sehen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt wird und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt wird.
SECTION #4 wird unter ARTICLE #1 gerendert, weil der z-Index von ARTICLE #1 (`5`) im Stacking-Kontext des Wurzelelements gültig ist, während der `z-index` von SECTION #4 (`6`) im Stacking-Kontext von ARTICLE #3 (`z-index: 4`) gültig ist. So wird SECTION #4 unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren z-Index-Wert (`4-6` ist weniger als `5-0`) hat.

Aus dem gleichen Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, das einen höheren z-Index-Wert (`2-0` ist weniger als `4-1`) hat.

Der z-Index von ARTICLE #3 ist `4`, aber dieser Wert ist unabhängig von dem `z-index` der drei darin verschachtelten Abschnitte, da sie zu einem anderen Stacking-Kontext gehören.

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

- [Verständnis von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stapelung von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Top-Ebene")}}
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
