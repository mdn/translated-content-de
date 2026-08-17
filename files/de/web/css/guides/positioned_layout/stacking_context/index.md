---
title: Stacking-Kontext
slug: Web/CSS/Guides/Positioned_layout/Stacking_context
l10n:
  sourceCommit: d1a90acef8a6fb1f75a3e4d937f78d7038d7bfc4
---

Ein **Stacking-Kontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, dem Viewport oder der Webseite gegenüberzustehen. Der Stacking-Kontext bestimmt, wie Elemente entlang der z-Achse übereinander geschichtet werden (denken Sie daran als die "Tiefen"-Dimension auf Ihrem Bildschirm). Der Stacking-Kontext bestimmt die visuelle Reihenfolge, in der überlappende Inhalte gerendert werden.

Elemente innerhalb eines Stacking-Kontexts werden unabhängig von Elementen außerhalb dieses Stacking-Kontextes gestapelt, was sicherstellt, dass Elemente in einem Stacking-Kontext die Stapelreihenfolge von Elementen in einem anderen nicht stören. Jeder Stacking-Kontext ist völlig unabhängig von seinen Geschwistern: Nur nachfolgende Elemente werden berücksichtigt, wenn eine Stapelung verarbeitet wird.

Jeder Stacking-Kontext ist in sich geschlossen. Nachdem die Inhalte eines Elements gestapelt wurden, wird das gesamte Element als eine einzige Einheit in der Stapelreihenfolge des übergeordneten Stacking-Kontexts betrachtet.

Innerhalb eines Stacking-Kontexts werden Kindelemente gemäß den `z-index`-Werten aller Geschwister gestapelt. Die Stacking-Kontexte dieser verschachtelten Elemente haben nur innerhalb dieses Elternteils Bedeutung. Stacking-Kontexte werden atomar als eine einzige Einheit im übergeordneten Stacking-Kontext behandelt. Stacking-Kontexte können in andere Stacking-Kontexte eingebettet sein und zusammen eine Hierarchie von Stacking-Kontexten bilden.

Die Hierarchie der Stacking-Kontexte ist eine Teilmenge der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stacking-Kontexte erstellen. Elemente, die keinen eigenen Stacking-Kontext erstellen, werden vom übergeordneten Stacking-Kontext _assimilated_.

## Merkmale, die Stacking-Kontexte erstellen

Ein Stacking-Kontext wird überall im Dokument durch ein beliebiges Element in den folgenden Szenarien erstellt:

- Wurzelelement des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}}-Wert `size` oder `inline-size` gesetzt (siehe [Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)).
- Element, das ein [Flex-Item](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) mit einem {{cssxref("z-index")}}-Wert ist, der nicht `auto` ist.
- Element, das ein [Grid-Item](<>) mit einem {{cssxref("z-index")}}-Wert ist, der nicht `auto` ist.
- Element mit einem {{cssxref("opacity")}}-Wert kleiner als `1`.
- Element mit einem {{cssxref("mix-blend-mode")}}-Wert, der nicht `normal` ist.
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

- Element mit dem {{cssxref("isolation")}}-Wert `isolate`.
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft angibt, die einen Stacking-Kontext bei Nicht-Standard-Wert erstellen würde.
- Element mit einem {{cssxref("contain")}}-Wert `layout` oder `paint` oder einem zusammengesetzten Wert, der einen dieser Werte umfasst (d.h. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "obere Schicht")}} und deren entsprechendes {{cssxref("::backdrop")}} platziert wurde. Beispiele umfassen [Fullscreen](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API) Elemente.
- Element, bei dem stapelkontext-erzeugende Eigenschaften (wie `opacity`) mit {{cssxref("@keyframes")}} animiert wurden, mit {{cssxref("animation-fill-mode")}} auf [`forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) gesetzt.

## Verschachtelte Stacking-Kontexte

Stacking-Kontexte können in andere Stacking-Kontexte eingebettet sein, und sie können zusammen eine Hierarchie von Stacking-Kontexten erstellen.

Das Wurzelelement eines Dokuments ist ein Stacking-Kontext, der in den meisten Fällen verschachtelte Stacking-Kontexte enthält, von denen viele zusätzliche Stacking-Kontexte enthalten. Innerhalb jedes Stacking-Kontextes werden Kindelemente gemäß den gleichen Regeln gestapelt, die in [Verwendung von `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index) erklärt werden. Wichtig ist, dass die `z-index`-Werte seiner Kinder-Stapelungskontexte nur innerhalb des Eltern-Stapelungskontextes Bedeutung haben. Stacking-Kontexte werden atomar als eine einzige Einheit im Eltern-Stapelungskontext behandelt.

Um die _Renderreihenfolge_ der gestapelten Elemente entlang der z-Achse herauszufinden, können sie sich jeden Indexwert als eine Art "Versionsnummer" vorstellen, wobei die Kindelemente nicht bedeutsame Versionsnummern unterhalb der übergeordneten Hauptversionsnummer repräsentieren.

Um zu demonstrieren, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer Vorfahren-Stapelungskontexte teilnimmt, betrachten wir eine Beispielseite mit sechs Container-Elementen. Es gibt drei Geschwister-{{htmlelement("article")}}-Elemente. Das letzte `<article>` enthält drei Geschwister-{{htmlelement("section")}}-Elemente, wobei das {{htmlelement("heading_elements", "&lt;h1&gt;")}} und das {{htmlelement("code")}} dieses dritten Artikels zwischen den ersten und zweiten Geschwister-<section>-Elementen erscheinen.

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

Jedes Container-Element hat eine {{cssxref("opacity")}} von weniger als `1` (was einen Stacking-Kontext erzeugt) und eine {{cssxref("position")}} von entweder `relative` oder `absolute` (was einen Stacking-Kontext erzeugt, wenn das Element auch einen `z-index`-Wert hat, der nicht `auto` ist).

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

Die CSS-Eigenschaften für Farben, Schriftarten, Ausrichtung und das [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) wurden der Kürze halber ausgeblendet.

{{ EmbedLiveSample('Nested stacking contexts', '100%', '396') }}

Die Hierarchie der Stacking-Kontexte im obigen Beispiel ist wie folgt:

```plain no-lint
Root
│
├── ARTICLE #1
├── ARTICLE #2
└── ARTICLE #3
  │
  ├── SECTION #4
  ├── SECTION #5
  └── SECTION #6
```

Die drei `<section>`-Elemente sind Kinder von ARTICLE #3. Daher wird das Stapeln der Abschnittselemente vollständig innerhalb von ARTICLE #3 gelöst. Sobald das Stapeln und Rendern innerhalb von ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3-Element zur Stapelung im Wurzelelement hinsichtlich seiner Geschwister `<article>`-Elemente weitergereicht.

Durch den Vergleich des `z-index` als "Versionsnummern" können wir sehen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt ist und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt ist.
SECTION #4 wird unter ARTICLE #1 gerendert, weil der `z-index` von ARTICLE #1 (`5`) im Stacking-Kontext des Wurzelelements gültig ist, während der `z-index` von SECTION #4 (`6`) im Stacking-Kontext von ARTICLE #3 (`z-index: 4`) gültig ist. SECTION #4 wird also unter ARTICLE #1 gerendert, da SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren z-index-Wert hat (`4-6` ist kleiner als `5-0`).

Aus dem gleichen Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, das einen höheren z-index-Wert hat (`2-0` ist kleiner als `4-1`).

Der `z-index` von ARTICLE #3 ist `4`, aber dieser Wert ist unabhängig von dem `z-index` der drei darin verschachtelten Abschnitte, weil sie zu einem anderen Stacking-Kontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Renderreihenfolge):

- Root
  - ARTICLE #2: (`z-index`: 2), was zu einer Renderreihenfolge von `2-0` führt
  - ARTICLE #3: (`z-index`: 4), was zu einer Renderreihenfolge von `4-0` führt
    - SECTION #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von `4-1` führt
    - SECTION #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von `4-3` führt
    - SECTION #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von `4-6` führt

  - ARTICLE #1: (`z-index`: 5), was zu einer Renderreihenfolge von `5-0` führt

## Zusätzliche Beispiele

Zusätzliche Beispiele umfassen eine [2-stufige Hierarchie mit `z-index` auf der letzten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1), eine [2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2), und eine [3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3).

## Siehe auch

- [Verstehen von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [Stapeln schwebender Elemente](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [Verwendung von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Obere Schicht")}}
- [Modul für positioniertes Layout in CSS](/de/docs/Web/CSS/Guides/Positioned_layout)
