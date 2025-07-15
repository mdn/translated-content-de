---
title: Stapelkontext
slug: Web/CSS/CSS_positioned_layout/Stacking_context
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**Stapelkontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, das Ansichtsfenster oder die Webseite zu betrachten. Der Stapelkontext bestimmt, wie Elemente entlang der z-Achse übereinander geschichtet werden (denken Sie daran als die "Tiefen"-Dimension auf Ihrem Bildschirm). Der Stapelkontext bestimmt die visuelle Reihenfolge, in der sich überlappende Inhalte dargestellt werden.

Elemente innerhalb eines Stapelkontextes werden unabhängig von Elementen außerhalb dieses Stapelkontextes gestapelt, was sicherstellt, dass Elemente in einem Stapelkontext nicht die Stapelreihenfolge von Elementen in einem anderen beeinflussen. Jeder Stapelkontext ist völlig unabhängig von seinen Geschwistern: Nur Nachfolgeelemente werden bei der Stapelverarbeitung betrachtet.

Jeder Stapelkontext ist eigenständig. Nachdem die Inhalte eines Elements gestapelt sind, wird das gesamte Element als eine einzige Einheit in der Stapelordnung des übergeordneten Stapelkontextes betrachtet.

Innerhalb eines Stapelkontextes werden Kindelemente gemäß der `z-index`-Werte aller Geschwister gestapelt. Die Stapelkontexte dieser verschachtelten Elemente haben nur in diesem übergeordneten Element Bedeutung. Stapelkontexte werden atomar als eine einzige Einheit im übergeordneten Stapelkontext behandelt. Stapelkontexte können in andere Stapelkontexte eingebettet werden und zusammen eine Hierarchie von Stapelkontexten bilden.

Die Hierarchie von Stapelkontexten ist eine Teilmenge der Hierarchie von HTML-Elementen, da nur bestimmte Elemente Stapelkontexte erzeugen. Elemente, die ihre eigenen Stapelkontexte nicht erzeugen, werden vom übergeordneten Stapelkontext _assimiliert_.

## Merkmale, die Stapelkontexte erzeugen

Ein Stapelkontext wird im Dokument durch jedes Element in den folgenden Szenarien gebildet:

- Root-Element des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert ungleich `auto`.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}}-Wert `size` oder `inline-size` gesetzt (siehe [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)).
- Element, das ein [Flexelement](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element, das ein [Grid-Element]() mit {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element mit einem {{cssxref("opacity")}}-Wert kleiner als `1`.
- Element mit einem {{cssxref("mix-blend-mode")}}-Wert ungleich `normal`.
- Element mit einem der folgenden Eigenschaften ungleich `none`:
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
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft spezifiziert, die einen Stapelkontext auf einem nicht-initialen Wert erzeugen würde.
- Element mit einem {{cssxref("contain")}}-Wert von `layout` oder `paint`, oder ein zusammengesetzter Wert, der einen dieser Werte umfasst (d.h. `contain: strict`, `contain: content`).
- Element im {{Glossary("Top_layer", "Top-Layer")}} und das entsprechende {{cssxref("::backdrop")}}. Beispiele umfassen [Fullscreen](/de/docs/Web/API/Fullscreen_API)- und [Popover](/de/docs/Web/API/Popover_API)-Elemente.
- Element, das Stapelkontext-erzeugende Eigenschaften (wie `opacity`) animiert hat unter Verwendung von {{cssxref("@keyframes")}}, wobei [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) auf [`forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) gesetzt ist.

## Verschachtelte Stapelkontexte

Stapelkontexte können in andere Stapelkontexte eingebettet werden und zusammen eine Hierarchie von Stapelkontexten bilden.

Das Root-Element eines Dokuments ist ein Stapelkontext, der in den meisten Fällen verschachtelte Stapelkontexte enthält, von denen viele zusätzliche Stapelkontexte enthalten werden. Innerhalb jedes Stapelkontextes werden Kindelemente nach denselben Regeln gestapelt, die in [Using `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index) erklärt werden. Wichtig ist, dass die `z-index`-Werte seiner Kinderstapelkontexte nur innerhalb des Stapelkontextes des Elternteils Bedeutung haben. Stapelkontexte werden atomar als eine einzige Einheit im übergeordneten Stapelkontext behandelt.

Um die _Darstellungsreihenfolge_ von gestapelten Elementen entlang der z-Achse zu ermitteln, betrachten Sie jeden Indexwert als eine Art "Versionsnummer", wobei Kindelemente kleinere Versionsnummern unterhalb der größeren Versionsnummer des Elternteils darstellen.

Um zu demonstrieren, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer übergeordneten Stapelkontexte teilnimmt, betrachten wir eine Beispielseite mit sechs Container-Elementen. Es gibt drei benachbarte {{htmlelement("article")}}-Elemente. Das letzte `<article>` enthält drei benachbarte {{htmlelement("section")}}-Elemente, mit den {{htmlelement("heading_elements", "&lt;h1&gt;")}} und {{htmlelement("code")}} dieses dritten Artikels, die zwischen den ersten und zweiten benachbarten `<section>`-Elementen erscheinen.

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

Jedes Containerelement hat eine {{cssxref("opacity")}} von weniger als `1` und eine {{cssxref("position")}} von entweder `relative` oder `absolute` gesetzt. Diese Eigenschaft-Wert-Paare erzeugen einen Stapelkontext, wenn das Element einen `z-index`-Wert ungleich `auto` hat.

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

Die CSS-Eigenschaften für Farben, Schriftarten, Ausrichtung und [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wurden aus Gründen der Kürze verborgen.

{{ EmbedLiveSample('Nested stacking contexts', '100%', '396') }}

Die Hierarchie von Stapelkontexten im obigen Beispiel ist wie folgt:

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

Die drei `<section>`-Elemente sind Kinder von ARTICLE #3. Daher wird das Stapeln der Abschnittselemente vollständig innerhalb von ARTICLE #3 gelöst. Sobald das Stapeln und Darstellen innerhalb von ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3-Element für das Stapeln im Root-Element im Verhältnis zu seinen Geschwister-`<article>`-Elementen übergeben.

Durch den Vergleich der `z-index` als "Versionsnummern", können wir sehen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt wird, und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt wird. SECTION #4 wird unter ARTICLE #1 dargestellt, weil ARTICLE #1's z-index (`5`) innerhalb des Stapelkontextes des Root-Elements gültig ist, während SECTION #4's z-index (`6`) innerhalb des Stapelkontexts von ARTICLE #3 (`z-index: 4`) gültig ist. Daher ist SECTION #4 unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren z-index-Wert hat (`4-6` ist weniger als `5-0`).

Aus dem gleichen Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) dargestellt, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, das einen höheren z-index-Wert hat (`2-0` ist weniger als `4-1`).

ARTICLE #3's z-index ist `4`, aber dieser Wert ist unabhängig vom `z-index` der drei darin verschachtelten Abschnitte, weil sie zu einem anderen Stapelkontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Darstellungsreihenfolge):

- Root
  - ARTICLE #2: (`z-index`: 2), was zu einer Darstellungsreihenfolge von `2-0` führt
  - ARTICLE #3: (`z-index`: 4), was zu einer Darstellungsreihenfolge von `4-0` führt
    - SECTION #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was zu einer Darstellungsreihenfolge von `4-1` führt
    - SECTION #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was zu einer Darstellungsreihenfolge von `4-3` führt
    - SECTION #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was zu einer Darstellungsreihenfolge von `4-6` führt

  - ARTICLE #1: (`z-index`: 5), was zu einer Darstellungsreihenfolge von `5-0` führt

## Weitere Beispiele

Weitere Beispiele umfassen eine [2-stufige Hierarchie mit `z-index` auf der letzten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1), eine [2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2), und eine [3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3).

## Siehe auch

- [Verständnis von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stapeln von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Top-Layer")}}
- [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
