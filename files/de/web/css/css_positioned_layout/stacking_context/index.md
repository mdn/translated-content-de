---
title: Stacking-Kontext
slug: Web/CSS/CSS_positioned_layout/Stacking_context
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

**Stacking-Kontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, dass er das Ansichtsfenster oder die Webseite betrachtet. Der Stacking-Kontext bestimmt, wie Elemente entlang der z-Achse übereinander geschichtet sind (denken Sie an die "Tiefendimension" auf Ihrem Bildschirm). Der Stacking-Kontext bestimmt die visuelle Reihenfolge, in der überlappende Inhalte dargestellt werden.

Elemente innerhalb eines Stacking-Kontextes werden unabhängig von Elementen außerhalb dieses Stacking-Kontextes gestapelt. Dies stellt sicher, dass Elemente in einem Stacking-Kontext nicht die Stapelreihenfolge von Elementen in einem anderen beeinflussen. Jeder Stacking-Kontext ist komplett unabhängig von seinen Geschwistern: Nur Nachfahren-Elemente werden berücksichtigt, wenn die Stapelverarbeitung durchgeführt wird.

Jeder Stacking-Kontext ist in sich abgeschlossen. Nachdem die Inhalte eines Elements gestapelt wurden, wird das gesamte Element als eine einzelne Einheit in der Stapelreihenfolge seines übergeordneten Stacking-Kontextes betrachtet.

Innerhalb eines Stacking-Kontextes werden Kindelemente entsprechend der `z-index`-Werte aller Geschwister gestapelt. Die Stacking-Kontexte dieser verschachtelten Elemente haben nur innerhalb dieses übergeordneten Kontextes Bedeutung. Stacking-Kontexte werden atomar als eine einzelne Einheit im übergeordneten Stacking-Kontext behandelt. Stacking-Kontexte können in anderen Stacking-Kontexten enthalten sein und zusammen eine Hierarchie von Stacking-Kontexten bilden.

Die Hierarchie der Stacking-Kontexte ist eine Teilmenge der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stacking-Kontexte erzeugen. Elemente, die ihre eigenen Stacking-Kontexte nicht erzeugen, werden vom übergeordneten Stacking-Kontext _assimiliert_.

## Eigenschaften, die Stacking-Kontexte erzeugen

Ein Stacking-Kontext wird an jeder Stelle im Dokument durch ein beliebiges Element in den folgenden Szenarien gebildet:

- Wurzelelement des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}}-Wert `size` oder `inline-size` (siehe [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)).
- Element, das ein [Flex-Item](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) mit einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element, das ein [Grid-Item]() mit einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("opacity")}}-Wert, der kleiner als `1` ist.
- Element mit einem {{cssxref("mix-blend-mode")}}-Wert, der nicht `normal` ist.
- Element mit einer der folgenden Eigenschaften, deren Wert nicht `none` ist:
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
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft angibt, die bei nicht-initialem Wert einen Stacking-Kontext erzeugen würde.
- Element mit einem {{cssxref("contain")}}-Wert von `layout` oder `paint`, oder einem zusammengesetzten Wert, der eine dieser Werte einschließt (z. B. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "Obere Ebene")}} platziert wurde, und sein entsprechendes {{cssxref("::backdrop")}}. Beispiele umfassen [Vollbild](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API)-Elemente.
- Element, das Eigenschaften, die einen Stacking-Kontext erzeugen (wie `opacity`), durch {{cssxref("@keyframes")}} animiert hat, mit [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) auf [`forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) gesetzt.

## Verschachtelte Stacking-Kontexte

Stacking-Kontexte können in anderen Stacking-Kontexten enthalten sein und zusammen eine Hierarchie von Stacking-Kontexten bilden.

Das Wurzelelement eines Dokuments ist ein Stacking-Kontext, der in den meisten Fällen verschachtelte Stacking-Kontexte enthält, von denen viele zusätzliche Stacking-Kontexte beinhalten werden. Innerhalb jedes Stacking-Kontextes werden Kindelemente gemäß den gleichen Regeln gestapelt, die in [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index) erklärt werden. Wichtig ist, dass die `z-index`-Werte seiner Kind-Stacking-Kontexte nur innerhalb des Stacking-Kontextes seines Elternteils Bedeutung haben. Stacking-Kontexte werden atomar als eine einzelne Einheit im übergeordneten Stacking-Kontext behandelt.

Um die _Darstellungsreihenfolge_ von gestapelten Elementen entlang der z-Achse zu ermitteln, denken Sie an jeden Indexwert wie an eine Art "Versionsnummer", bei der Kindelemente die Nebenversionsnummern unter der Hauptversionsnummer ihres Elternteils darstellen.

Um zu demonstrieren, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer Vorfahren-Stacking-Kontexte teilnimmt, schauen wir uns eine Beispielseite mit sechs Container-Elementen an. Es gibt drei Geschwister-{{htmlelement("article")}}-Elemente. Das letzte `<article>` enthält drei Geschwister-{{htmlelement("section")}}-Elemente, wobei die {{htmlelement("heading_elements", "&lt;h1&gt;")}}- und {{htmlelement("code")}}-Elemente dieses dritten Artikels zwischen den ersten und zweiten Geschwister-`<section>`-Elementen erscheinen.

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

Jedes Containerelement hat eine {{cssxref("opacity")}} von weniger als `1` und eine {{cssxref("position")}} von entweder `relative` oder `absolute` gesetzt. Diese Eigenschaft-Wert-Paare erzeugen einen Stacking-Kontext, wenn das Element einen `z-index`-Wert hat, der nicht `auto` ist.

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

Die drei `<section>` Elemente sind Kinder von ARTICLE #3. Daher wird die Stapelung der Abschnittselemente komplett innerhalb von ARTICLE #3 gelöst. Sobald die Stapelung und Darstellung innerhalb von ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3-Element zur Stapelung im Wurzelelement im Hinblick auf seine Geschwister-`<article>`-Elemente weitergereicht.

Durch den Vergleich des `z-index` als "Versionsnummern" können wir sehen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt wird und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt wird.
SECTION #4 wird unter ARTICLE #1 gerendert, weil ARTICLE #1's z-index (`5`) im Stacking-Kontext des Wurzelelements gültig ist, während SECTION #4's z-index (`6`) im Stacking-Kontext von ARTICLE #3 (`z-index: 4`) gültig ist. Daher gehört SECTION #4 unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren z-index-Wert hat (`4-6` ist kleiner als `5-0`).

Aus dem gleichen Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, das einen höheren z-index-Wert hat (`2-0` ist kleiner als `4-1`).

ARTICLE #3's z-index ist `4`, aber dieser Wert ist unabhängig vom `z-index` der drei darin verschachtelten Abschnitte, da sie zu einem anderen Stacking-Kontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Darstellungsreihenfolge):

- Root
  - ARTICLE #2: (`z-index`: 2), was zu einer Darstellungsreihenfolge von `2-0` führt
  - ARTICLE #3: (`z-index`: 4), was zu einer Darstellungsreihenfolge von `4-0` führt
    - SECTION #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was zu einer Darstellungsreihenfolge von `4-1` führt
    - SECTION #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was zu einer Darstellungsreihenfolge von `4-3` führt
    - SECTION #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was zu einer Darstellungsreihenfolge von `4-6` führt

  - ARTICLE #1: (`z-index`: 5), was zu einer Darstellungsreihenfolge von `5-0` führt

## Zusätzliche Beispiele

Zusätzliche Beispiele umfassen eine [2-Ebenen-Hierarchie mit `z-index` auf der letzten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1), eine [2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2), und eine [3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3).

## Siehe auch

- [Verständnis von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Obere Ebene")}}
- [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)-Modul
