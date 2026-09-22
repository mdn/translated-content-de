---
title: Stapelkontext
slug: Web/CSS/Guides/Positioned_layout/Stacking_context
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

Ein **Stapelkontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zur Benutzerin oder zum Benutzer, die bzw. der sich dem Viewport oder der Webseite zugewandt befindet. Der Stapelkontext bestimmt, wie Elemente entlang der z-Achse übereinander geschichtet werden (stellen Sie sich dies als die „Tiefen“-Dimension auf Ihrem Bildschirm vor). Der Stapelkontext bestimmt die visuelle Reihenfolge, in der überlappende Inhalte gerendert werden.

Elemente innerhalb eines Stapelkontexts werden unabhängig von Elementen außerhalb dieses Stapelkontexts gestapelt. Dadurch wird sichergestellt, dass Elemente in einem Stapelkontext die Stapelreihenfolge von Elementen in einem anderen nicht beeinflussen. Jeder Stapelkontext ist vollständig unabhängig von seinen Geschwisterelementen: Bei der Verarbeitung der Stapelung werden nur Nachfahrenelemente berücksichtigt.

Jeder Stapelkontext ist in sich geschlossen. Nachdem der Inhalt eines Elements gestapelt wurde, wird das gesamte Element als einzelne Einheit in der Stapelreihenfolge seines übergeordneten Stapelkontexts betrachtet.

Innerhalb eines Stapelkontexts werden Kindelemente entsprechend den `z-index`-Werten aller Geschwisterelemente gestapelt. Die Stapelkontexte dieser verschachtelten Elemente haben nur in diesem übergeordneten Kontext eine Bedeutung. Stapelkontexte werden im übergeordneten Stapelkontext atomar als einzelne Einheit behandelt. Stapelkontexte können in anderen Stapelkontexten enthalten sein und bilden zusammen eine Hierarchie von Stapelkontexten.

Die Hierarchie der Stapelkontexte ist eine Teilmenge der Hierarchie von HTML-Elementen, da nur bestimmte Elemente Stapelkontexte erzeugen. Elemente, die keinen eigenen Stapelkontext erzeugen, werden vom übergeordneten Stapelkontext _assimiliert_.

## Merkmale, die Stapelkontexte erzeugen

Ein Stapelkontext wird an jeder Stelle im Dokument durch jedes Element in den folgenden Szenarien gebildet:

- Wurzelelement des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert von `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert ungleich `auto`.
- Element mit einem {{cssxref("position")}}-Wert von `fixed` oder `sticky`.
- Element mit einem gesetzten {{cssxref("container-type")}}-Wert von `size` oder `inline-size` (siehe [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)).
- Element, das ein [Flex-Element](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element, das ein {{Glossary("Grid_Item", "Grid-Element")}} mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element mit einem {{cssxref("opacity")}}-Wert kleiner als `1`.
- Element mit einem {{cssxref("mix-blend-mode")}}-Wert ungleich `normal`.
- Element mit einer der folgenden Eigenschaften und einem Wert ungleich `none`:
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
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft angibt, die bei einem nicht initialen Wert einen Stapelkontext erzeugen würde.
- Element mit einem {{cssxref("contain")}}-Wert von `layout` oder `paint` oder einem zusammengesetzten Wert, der einen dieser Werte enthält (d.h. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "oberste Ebene")}} eingefügt wurde, sowie sein zugehöriges {{cssxref("::backdrop")}}. Beispiele sind Elemente für [Vollbild](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API).
- Element, dessen Stapelkontext erzeugende Eigenschaften (wie `opacity`) mithilfe von {{cssxref("@keyframes")}} animiert wurden und bei dem {{cssxref("animation-fill-mode")}} auf [`forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) gesetzt ist.

## Verschachtelte Stapelkontexte

Stapelkontexte können in anderen Stapelkontexten enthalten sein und zusammen eine Hierarchie von Stapelkontexten bilden.

Das Wurzelelement eines Dokuments ist ein Stapelkontext, der in den meisten Fällen verschachtelte Stapelkontexte enthält, von denen viele weitere Stapelkontexte enthalten. Innerhalb jedes Stapelkontexts werden Kindelemente gemäß denselben Regeln gestapelt, die unter [Verwenden von `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index) erläutert werden. Wichtig ist, dass die `z-index`-Werte seiner untergeordneten Stapelkontexte nur innerhalb des Stapelkontexts ihres Elternelements Bedeutung haben. Stapelkontexte werden im übergeordneten Stapelkontext atomar als einzelne Einheit behandelt.

Um die _Render-Reihenfolge_ gestapelter Elemente entlang der z-Achse zu bestimmen, können Sie sich jeden Indexwert als eine Art „Versionsnummer“ vorstellen, wobei Kindelemente kleinere Versionsnummern unterhalb der Hauptversionsnummer ihres Elternelements darstellen.

Um zu veranschaulichen, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge seiner Vorfahren-Stapelkontexte beteiligt ist, betrachten wir eine Beispielseite mit sechs Containerelementen. Es gibt drei gleichrangige {{htmlelement("article")}}-Elemente. Das letzte `<article>` enthält drei gleichrangige {{htmlelement("section")}}-Elemente, wobei {{htmlelement("heading_elements", "&lt;h1&gt;")}} und {{htmlelement("code")}} dieses dritten Artikels zwischen dem ersten und zweiten gleichrangigen `<section>`-Element erscheinen.

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

Jedes Containerelement hat eine {{cssxref("opacity")}} von weniger als `1` (wodurch ein Stapelkontext erzeugt wird) und eine {{cssxref("position")}} von entweder `relative` oder `absolute` (wodurch ein Stapelkontext erzeugt wird, wenn das Element außerdem einen `z-index`-Wert ungleich `auto` hat).

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

Die Hierarchie der Stapelkontexte im obigen Beispiel lautet wie folgt:

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

Die drei `<section>`-Elemente sind Kindelemente von ARTICLE #3. Daher wird die Stapelung der Section-Elemente vollständig innerhalb von ARTICLE #3 aufgelöst. Sobald die Stapelung und das Rendern innerhalb von ARTICLE #3 abgeschlossen sind, wird das gesamte Element ARTICLE #3 zur Stapelung im Wurzelelement in Bezug auf seine gleichrangigen `<article>`-Elemente übergeben.

Wenn wir `z-index` als „Versionsnummern“ vergleichen, sehen wir, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt wird und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt wird.
SECTION #4 wird unter ARTICLE #1 gerendert, weil der z-index von ARTICLE #1 (`5`) innerhalb des Stapelkontexts des Wurzelelements gültig ist, während der z-index von SECTION #4 (`6`) innerhalb des Stapelkontexts von ARTICLE #3 (`z-index: 4`) gültig ist. SECTION #4 befindet sich also unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren z-index-Wert hat (`4-6` ist kleiner als `5-0`).

Aus demselben Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, das einen höheren z-index-Wert hat (`2-0` ist kleiner als `4-1`).

Der z-index von ARTICLE #3 ist `4`, aber dieser Wert ist unabhängig vom `z-index` der drei darin verschachtelten Sections, da sie zu einem anderen Stapelkontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Render-Reihenfolge):

- Root
  - ARTICLE #2: (`z-index`: 2), was zu einer Render-Reihenfolge von `2-0` führt
  - ARTICLE #3: (`z-index`: 4), was zu einer Render-Reihenfolge von `4-0` führt
    - SECTION #5: (`z-index`: 1), unter einem Element (`z-index`: 4) gestapelt, was zu einer Render-Reihenfolge von `4-1` führt
    - SECTION #6: (`z-index`: 3), unter einem Element (`z-index`: 4) gestapelt, was zu einer Render-Reihenfolge von `4-3` führt
    - SECTION #4: (`z-index`: 6), unter einem Element (`z-index`: 4) gestapelt, was zu einer Render-Reihenfolge von `4-6` führt

  - ARTICLE #1: (`z-index`: 5), was zu einer Render-Reihenfolge von `5-0` führt

## Weitere Beispiele

Weitere Beispiele umfassen eine [Hierarchie mit zwei Ebenen und `z-index` auf der letzten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1), eine [HTML-Hierarchie mit zwei Ebenen, `z-index` auf allen Ebenen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2) und eine [HTML-Hierarchie mit drei Ebenen, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3).

## Siehe auch

- [z-index verstehen](/de/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [Stapelung von Float-Elementen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [Verwenden von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Oberste Ebene")}}
- [CSS Positioned Layout](/de/docs/Web/CSS/Guides/Positioned_layout)-Modul
