---
title: Stacking-Kontext
slug: Web/CSS/Guides/Positioned_layout/Stacking_context
l10n:
  sourceCommit: 4761340e600daad008747fb9aa48e28748a78422
---

Ein **Stacking-Kontext** ist eine dreidimensionale Vorstellung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, die Ansicht oder die Webseite zu betrachten. Der Stacking-Kontext bestimmt, wie Elemente entlang der z-Achse übereinander geschichtet werden (denken Sie daran als die "Tiefen"-Dimension auf Ihrem Bildschirm). Der Stacking-Kontext bestimmt die visuelle Reihenfolge, in der überlappender Inhalt gerendert wird.

Elemente innerhalb eines Stacking-Kontexts werden unabhängig von Elementen außerhalb dieses Stacking-Kontexts gestapelt, um sicherzustellen, dass Elemente in einem Stacking-Kontext nicht die Stapelreihenfolge von Elementen in einem anderen beeinflussen. Jeder Stacking-Kontext ist vollständig unabhängig von seinen Geschwistern: Nur Nachkommene werden berücksichtigt, wenn gestapelt wird.

Jeder Stacking-Kontext ist in sich geschlossen. Nachdem der Inhalt eines Elements gestapelt wurde, wird das gesamte Element als eine einzige Einheit in der Stapelreihenfolge seines übergeordneten Stacking-Kontexts betrachtet.

Innerhalb eines Stacking-Kontexts werden Kindelemente basierend auf den `z-index` Werten aller Geschwister gestapelt. Die Stacking-Kontexte dieser verschachtelten Elemente haben nur innerhalb dieses Elternteils Bedeutung. Stacking-Kontexte werden atomar als eine Einheit im übergeordneten Stacking-Kontext behandelt. Stacking-Kontexte können in anderen Stacking-Kontexten enthalten sein und zusammen eine Hierarchie von Stacking-Kontexten bilden.

Die Hierarchie der Stacking-Kontexte ist eine Untermenge der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stacking-Kontexte erstellen. Elemente, die keine eigenen Stacking-Kontexte erstellen, werden vom übergeordneten Stacking-Kontext _assimiliert_.

## Eigenschaften, die Stacking-Kontexte erstellen

Ein Stacking-Kontext wird überall im Dokument von jedem Element in den folgenden Szenarien erstellt:

- Wurzelelement des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert ungleich `auto`.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}}-Wert `size` oder `inline-size` gesetzt (siehe [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)).
- Element, das ein [Flex-Element](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element, das ein [Grid-Element](<>) mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element mit einem {{cssxref("opacity")}}-Wert kleiner als `1`.
- Element mit einem {{cssxref("mix-blend-mode")}}-Wert ungleich `normal`.
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

- Element mit dem {{cssxref("isolation")}}-Wert `isolate`.
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft spezifiziert, die einen Stacking-Kontext bei einem nicht-initialen Wert erstellen würde.
- Element mit einem {{cssxref("contain")}}-Wert von `layout` oder `paint`, oder einem zusammengesetzten Wert, der eine dieser Werte enthält (d.h. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "Top-Schicht")}} und sein entsprechendes {{cssxref("::backdrop")}} platziert wurde. Beispiele umfassen [Vollbild](/de/docs/Web/API/Fullscreen_API)- und [Popover](/de/docs/Web/API/Popover_API)-Elemente.
- Element, das Eigenschaften hat, die Stacking-Kontexte erstellen (wie `opacity`), die mit {{cssxref("@keyframes")}} animiert wurden, wobei {{cssxref("animation-fill-mode")}} auf [`forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) gesetzt ist.

## Verschachtelte Stacking-Kontexte

Stacking-Kontexte können in anderen Stacking-Kontexten enthalten sein und zusammen eine Hierarchie von Stacking-Kontexten erstellen.

Das Wurzelelement eines Dokuments ist ein Stacking-Kontext, der in den meisten Fällen verschachtelte Stacking-Kontexte enthält, von denen viele zusätzliche Stacking-Kontexte enthalten werden. Innerhalb jedes Stacking-Kontexts werden Kindelemente nach den gleichen Regeln gestapelt, die in [Using `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index) erklärt werden. Wichtig dabei ist, dass die `z-index`-Werte ihrer Kind-Stacking-Kontexte nur innerhalb des Stacking-Kontexts ihres übergeordneten Elements Bedeutung haben. Stacking-Kontexte werden atomar als eine Einheit im übergeordneten Stacking-Kontext behandelt.

Um die _Rendering-Reihenfolge_ gestapelter Elemente entlang der z-Achse zu verstehen, denken Sie an jeden Indexwert als eine Art "Versionsnummer", wobei Kindelemente kleinere Versionsnummern unter der größeren Versionsnummer ihres übergeordneten Elements darstellen.

Um zu demonstrieren, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer Vorfahren-Stacking-Kontexte teilnimmt, schauen wir uns eine Beispielseite mit sechs Container-Elementen an. Es gibt drei Geschwister-{{htmlelement("article")}}-Elemente. Das letzte `<article>` enthält drei Geschwister-{{htmlelement("section")}}-Elemente, wobei die {{htmlelement("heading_elements", "&lt;h1&gt;")}} und {{htmlelement("code")}} dieses dritten Artikels zwischen den ersten und zweiten Geschwister-`<section>`-Elementen erscheinen.

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

Jedes Containerelement hat eine {{cssxref("opacity")}} von weniger als `1` (was einen Stacking-Kontext erzeugt), und eine {{cssxref("position")}} entweder `relative` oder `absolute` (was einen Stacking-Kontext erzeugt, wenn das Element ebenfalls einen `z-index`-Wert ungleich `auto` hat).

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

Die CSS-Eigenschaften für Farben, Schriftarten, Ausrichtung und [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) wurden der Kürze halber ausgeblendet.

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

Die drei `<section>`-Elemente sind Kinder von ARTICLE #3. Daher wird das Stapeln der Abschnittselemente vollständig innerhalb von ARTICLE #3 aufgelöst. Nachdem das Stapeln und Rendern innerhalb von ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3-Element zum Stapeln im Wurzelelement in Bezug auf seine Geschwister-`<article>`-Elemente weitergegeben.

Indem wir `z-index` als "Versionsnummern" vergleichen, können wir sehen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt wird, und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt wird.
SECTION #4 wird unter ARTICLE #1 gerendert, weil ARTICLE #1's z-index (`5`) im Stacking-Kontext des Wurzelelements gültig ist, während SECTION #4's z-index (`6`) im Stacking-Kontext von ARTICLE #3 (`z-index: 4`) gültig ist. Daher ist SECTION #4 unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren z-index-Wert (`4-6` ist kleiner als `5-0`) hat.

Aus dem gleichen Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, das einen höheren z-index-Wert (`2-0` ist kleiner als `4-1`) hat.

Der z-index von ARTICLE #3 ist `4`, aber dieser Wert ist unabhängig vom `z-index` der drei darin verschachtelten Abschnitte, da sie zu einem anderen Stacking-Kontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Rendering-Reihenfolge):

- Root
  - ARTICLE #2: (`z-index`: 2), was zu einer Rendering-Reihenfolge von `2-0` führt
  - ARTICLE #3: (`z-index`: 4), was zu einer Rendering-Reihenfolge von `4-0` führt
    - SECTION #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was zu einer Rendering-Reihenfolge von `4-1` führt
    - SECTION #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was zu einer Rendering-Reihenfolge von `4-3` führt
    - SECTION #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was zu einer Rendering-Reihenfolge von `4-6` führt

  - ARTICLE #1: (`z-index`: 5), was zu einer Rendering-Reihenfolge von `5-0` führt

## Zusätzliche Beispiele

Zusätzliche Beispiele umfassen eine [2-Ebenen-Hierarchie mit `z-index` auf der letzten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1), eine [2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2) und eine [3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3).

## Siehe auch

- [Z-Index verstehen](/de/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [Stapelreihenfolge ohne die Eigenschaft `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [Verwendung von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Top-Schicht")}}
- [CSS-Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout)-Modul
