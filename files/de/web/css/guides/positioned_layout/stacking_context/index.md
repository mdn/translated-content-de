---
title: Stacking-Kontext
slug: Web/CSS/Guides/Positioned_layout/Stacking_context
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Ein **Stacking-Kontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, dass er dem Ansichtsfenster oder der Webseite zugewandt ist. Der Stacking-Kontext bestimmt, wie Elemente entlang der z-Achse (denken Sie daran als die "Tiefen"-Dimension auf Ihrem Bildschirm) übereinander geschichtet werden. Der Stacking-Kontext bestimmt die visuelle Reihenfolge, in der überlappende Inhalte gerendert werden.

Elemente innerhalb eines Stacking-Kontexts werden unabhängig von Elementen außerhalb dieses Kontexts gestapelt, wodurch sichergestellt wird, dass Elemente in einem Stacking-Kontext die Stapelreihenfolge von Elementen in einem anderen Kontext nicht beeinflussen. Jeder Stacking-Kontext ist vollständig unabhängig von seinen Geschwistern: Nur Nachfahren-Elemente werden berücksichtigt, wenn das Stapeln verarbeitet wird.

Jeder Stacking-Kontext ist in sich geschlossen. Nachdem die Inhalte eines Elements gestapelt wurden, wird das gesamte Element als eine einzelne Einheit in der Stapelreihenfolge seines übergeordneten Stacking-Kontexts betrachtet.

Innerhalb eines Stacking-Kontexts werden untergeordnete Elemente entsprechend den `z-index`-Werten aller Geschwister gestapelt. Die Stacking-Kontexte dieser verschachtelten Elemente haben nur in diesem übergeordneten Kontext Bedeutung. Stacking-Kontexte werden atomar als eine einzige Einheit im übergeordneten Stacking-Kontext behandelt. Stacking-Kontexte können in andere Stacking-Kontexte eingebettet sein und zusammen eine Hierarchie von Stacking-Kontexten erstellen.

Die Hierarchie von Stacking-Kontexten ist ein Teilmengen der Hierarchie von HTML-Elementen, da nur bestimmte Elemente Stacking-Kontexte erstellen. Elemente, die ihre eigenen Stacking-Kontexte nicht erstellen, werden vom übergeordneten Stacking-Kontext _assimiliert_.

## Eigenschaften, die Stacking-Kontexte erstellen

Ein Stacking-Kontext wird überall im Dokument von jedem Element in folgenden Szenarien gebildet:

- Wurzelelement des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert ungleich `auto`.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}}-Wert `size` oder `inline-size` (siehe [Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)).
- Element, das ein [Flex-Element](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element, das ein [Grid-Element]() mit {{cssxref("z-index")}}-Wert ungleich `auto` ist.
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
- Element mit einem {{cssxref("will-change")}}-Wert, der eine beliebige Eigenschaft spezifiziert, die einen Stacking-Kontext auf Nicht-Initialwert erstellen würde.
- Element mit einem {{cssxref("contain")}}-Wert von `layout` oder `paint` oder einem zusammengesetzten Wert, der einen dieser Werte enthält (d.h. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "Top-Schicht")}} platziert wurde und seine entsprechende {{cssxref("::backdrop")}}. Beispiele beinhalten [Fullscreen](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API) Elemente.
- Element, das Eigenschaften, die Stacking-Kontexte erstellen (wie `opacity`), durch {{cssxref("@keyframes")}} animiert hat, mit {{cssxref("animation-fill-mode")}} auf [`forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) gesetzt.

## Verschachtelte Stacking-Kontexte

Stacking-Kontexte können in andere Stacking-Kontexte eingebettet sein und zusammen eine Hierarchie von Stacking-Kontexten erstellen.

Das Wurzelelement eines Dokuments ist ein Stacking-Kontext, das in den meisten Fällen verschachtelte Stacking-Kontexte enthält, von denen viele zusätzliche Stacking-Kontexte enthalten. Innerhalb jedes Stacking-Kontexts werden untergeordnete Elemente nach denselben Regeln gestapelt, die in [Verwendung von `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index) erklärt werden. Wichtig ist, dass die `z-index`-Werte seiner untergeordneten Stacking-Kontexte nur innerhalb des übergeordneten Stacking-Kontexts Bedeutung haben. Stacking-Kontexte werden atomar als einzige Einheit im übergeordneten Stacking-Kontext behandelt.

Um die _Rendering-Reihenfolge_ gestapelter Elemente entlang der z-Achse herauszufinden, denken Sie an jeden Indexwert als eine Art "Versionsnummer", wobei untergeordnete Elemente die kleineren Versionsnummern unterhalb der größeren Versionsnummern ihrer Eltern darstellen.

Um zu zeigen, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer Vorfahren-Stacking-Kontexte teilnimmt, sehen wir uns eine Beispielseite mit sechs Container-Elementen an. Es gibt drei {{htmlelement("article")}}-Elemente als Geschwister. Das letzte `<article>` enthält drei {{htmlelement("section")}}-Elemente als Geschwister, wobei das {{htmlelement("heading_elements", "&lt;h1&gt;")}} und {{htmlelement("code")}} dieses dritten Artikels zwischen dem ersten und zweiten `<section>`-Element erscheinen.

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

Jedes Container-Element hat eine {{cssxref("opacity")}} von weniger als `1` und eine {{cssxref("position")}} von entweder `relative` oder `absolute` gesetzt. Diese Eigenschaften-Wert-Paare erstellen einen Stacking-Kontext, wenn das Element einen `z-index`-Wert ungleich `auto` hat.

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

Die CSS-Eigenschaften für Farben, Schriftarten, Ausrichtung und das [Box-Model](/de/docs/Web/CSS/Guides/Box_model/Introduction) wurden der Einfachheit halber ausgeblendet.

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
  ├────  ARTICLE #3 content
  ├── SECTION #5
  └── SECTION #6
```

Die drei `<section>`-Elemente sind Kinder von ARTICLE #3. Daher wird das Stapeln der Sektionselemente vollständig innerhalb von ARTICLE #3 gelöst. Sobald das Stapeln und Rendern innerhalb von ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3-Element zum Stapeln im Wurzelelement in Bezug auf seine Geschwister-`<article>`-Elemente weitergegeben.

Indem wir den `z-index` als "Versionsnummern" vergleichen, können wir sehen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt ist, und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt ist.
SECTION #4 wird unter ARTICLE #1 gerendert, weil ARTICLE #1's z-index (`5`) innerhalb des Stacking-Kontexts des Wurzelelements gültig ist, während SECTION #4's z-index (`6`) innerhalb des Stacking-Kontexts von ARTICLE #3 (`z-index: 4`) gültig ist. Somit wird SECTION #4 unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, welches einen niedrigeren z-index-Wert (`4-6` ist kleiner als `5-0`) hat.

Aus dem gleichen Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, das einen höheren z-index-Wert (`2-0` ist kleiner als `4-1`) hat.

ARTICLE #3's z-index ist `4`, aber dieser Wert ist unabhängig von den `z-index` der drei darin verschachtelten Abteilungen, da sie zu einem anderen Stacking-Kontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Rendering-Reihenfolge):

- Wurzel
  - ARTICLE #2: (`z-index`: 2), was in einer Rendering-Reihenfolge von `2-0` resultiert
  - ARTICLE #3: (`z-index`: 4), was in einer Rendering-Reihenfolge von `4-0` resultiert
    - SECTION #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was in einer Rendering-Reihenfolge von `4-1` resultiert
    - SECTION #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was in einer Rendering-Reihenfolge von `4-3` resultiert
    - SECTION #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was in einer Rendering-Reihenfolge von `4-6` resultiert

  - ARTICLE #1: (`z-index`: 5), was in einer Rendering-Reihenfolge von `5-0` resultiert

## Zusätzliche Beispiele

Zusätzliche Beispiele umfassen eine [2-Ebenen-Hierarchie mit `z-index` auf der letzten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1), eine [2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2), und eine [3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3).

## Siehe auch

- [Verständnis von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [Schwebende Elemente stapeln](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [Verwendung von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Top-Schicht")}}
- [CSS positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
