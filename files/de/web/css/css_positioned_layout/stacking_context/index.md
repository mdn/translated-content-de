---
title: Stapelkontext
slug: Web/CSS/CSS_positioned_layout/Stacking_context
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Ein **Stapelkontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, dem Ansichtsfenster oder der Webseite zugewandt zu sein. Der Stapelkontext bestimmt, wie Elemente entlang der z-Achse übereinander geschichtet werden (stellen Sie es sich als die "Tiefen"-Dimension auf Ihrem Bildschirm vor). Der Stapelkontext bestimmt die visuelle Reihenfolge, in der sich überlappender Inhalt gerendert wird.

Elemente innerhalb eines Stapelkontextes werden unabhängig von Elementen außerhalb dieses Stapelkontextes gestapelt, was sicherstellt, dass Elemente in einem Stapelkontext die Stapelreihenfolge von Elementen in einem anderen Stapelkontext nicht stören. Jeder Stapelkontext ist völlig unabhängig von seinen Geschwistern: Nur Nachkommenelemente werden beim Stapeln berücksichtigt.

Jeder Stapelkontext ist in sich geschlossen. Nachdem der Inhalt eines Elements gestapelt wurde, wird das gesamte Element als eine einzige Einheit in der Stapelreihenfolge des übergeordneten Stapelkontextes betrachtet.

Innerhalb eines Stapelkontextes werden Kind-Elemente entsprechend den `z-index`-Werten aller Geschwister gestapelt. Die Stapelkontexte dieser verschachtelten Elemente haben nur in diesem übergeordneten Kontext Bedeutung. Stapelkontexte werden in dem übergeordneten Stapelkontext als eine einzelne Einheit atomar behandelt. Stapelkontexte können in anderen Stapelkontexten enthalten sein und gemeinsam eine Hierarchie von Stapelkontexten bilden.

Die Hierarchie der Stapelkontexte ist ein Teil der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stapelkontexte erzeugen. Elemente, die keine eigenen Stapelkontexte erzeugen, werden vom übergeordneten Stapelkontext _assimiliert_.

## Merkmale, die Stapelkontexte erzeugen

Ein Stapelkontext wird an jeder beliebigen Stelle im Dokument von jedem Element in folgenden Szenarien gebildet:

- Root-Element des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert ungleich `auto`.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}}-Wert `size` oder `inline-size` gesetzt (siehe [Container-Anfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)).
- Element, das ein [Flex-Element](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element, das ein [Grid-Element]() mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
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

- Element mit einem {{cssxref("isolation")}}-Wert `isolate`.
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft angibt, die bei einem nicht-initialen Wert einen Stapelkontext erzeugen würde.
- Element mit einem {{cssxref("contain")}}-Wert `layout` oder `paint`, oder einem zusammengesetzten Wert, der eine dieser Werte einschließt (d.h. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "Top-Ebene")}} und dessen entsprechendes {{cssxref("::backdrop")}} platziert wird. Beispiele sind [Vollbild](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API)-Elemente.
- Element, das stapelkontext-erzeugende Eigenschaften (wie `opacity`) mithilfe von {{cssxref("@keyframes")}} animiert hat, mit [`animation-fill-mode`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode) auf [`forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards).

## Verschachtelte Stapelkontexte

Stapelkontexte können in anderen Stapelkontexten enthalten sein, und sie können zusammen eine Hierarchie von Stapelkontexten bilden.

Das Root-Element eines Dokuments ist ein Stapelkontext, der in den meisten Fällen verschachtelte Stapelkontexte enthält, von denen viele zusätzliche Stapelkontexte enthalten werden. Innerhalb jedes Stapelkontextes werden Kind-Elemente nach den gleichen Regeln gestapelt, die in [Verwenden von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index) erklärt werden. Wichtig ist, dass die `z-index`-Werte seiner Kind-Stapelkontexte nur innerhalb des Stapelkontextes der Eltern Bedeutung haben. Stapelkontexte werden in dem übergeordneten Stapelkontext als eine einzelne Einheit atomar behandelt.

Um die _Renderreihenfolge_ der entlang der z-Achse gestapelten Elemente zu ermitteln, betrachten Sie jeden Indexwert als eine Art "Versionsnummer", wobei die Kindelemente das Nebenversionsnummer unter der Hauptversionsnummer ihrer Eltern darstellen.

Um zu veranschaulichen, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer Vorfahren-Stapelkontexte teilnimmt, schauen wir uns eine Beispielseite mit sechs Containerelementen an. Es gibt drei geschwisterliche {{htmlelement("article")}}-Elemente. Das letzte `<article>` enthält drei geschwisterliche {{htmlelement("section")}}-Elemente, wobei die {{htmlelement("heading_elements", "&lt;h1&gt;")}} und {{htmlelement("code")}} dieses dritten Artikels zwischen dem ersten und zweiten geschwisterlichen `<section>`-Element erscheinen.

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

Jedes Containerelement hat eine {{cssxref("opacity")}} von weniger als `1` und eine {{cssxref("position")}} entweder `relative` oder `absolute` gesetzt. Diese Eigenschaften-Wert-Paare erzeugen einen Stapelkontext, wenn das Element einen `z-index`-Wert ungleich `auto` hat.

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

Die CSS-Eigenschaften für Farben, Schriftarten, Ausrichtung und [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wurden der Kürze halber ausgeblendet.

{{ EmbedLiveSample('Nested stacking contexts', '100%', '396') }}

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

Die drei `<section>`-Elemente sind Kinder von ARTICLE #3. Daher wird die Stapelung der Bereichselemente vollständig innerhalb von ARTICLE #3 gelöst. Sobald das Stapeln und Rendern innerhalb von ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3-Element zur Stapelung im Root-Element im Hinblick auf seine geschwisterlichen `<article>`-Elemente übergeben.

Indem man den `z-index` als "Versionsnummern" vergleicht, sieht man, wie ein Element mit einem `z-index` von `1` (SECTION #5) über ein Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt wird, und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt wird.
SECTION #4 wird unter ARTICLE #1 gerendert, weil ARTICLE #1's z-index (`5`) im Stapelkontext des Root-Elements gültig ist, während SECTION #4's z-index (`6`) im Stapelkontext von ARTICLE #3 (`z-index: 4`) gültig ist. Daher befindet sich SECTION #4 unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren z-index-Wert hat (`4-6` ist kleiner als `5-0`).

Aus dem gleichen Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, das einen höheren z-index-Wert hat (`2-0` ist kleiner als `4-1`).

ARTICLE #3's z-index ist `4`, aber dieser Wert ist unabhängig vom `z-index` der drei darin verschachtelten Bereiche, da sie zu einem anderen Stapelkontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Renderreihenfolge):

- Root
  - ARTICLE #2: (`z-index`: 2), das eine Renderreihenfolge von `2-0` ergibt
  - ARTICLE #3: (`z-index`: 4), das eine Renderreihenfolge von `4-0` ergibt
    - SECTION #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), das eine Renderreihenfolge von `4-1` ergibt
    - SECTION #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), das eine Renderreihenfolge von `4-3` ergibt
    - SECTION #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), das eine Renderreihenfolge von `4-6` ergibt

  - ARTICLE #1: (`z-index`: 5), das eine Renderreihenfolge von `5-0` ergibt

## Zusätzliche Beispiele

Zusätzliche Beispiele umfassen eine [2-Ebenen-Hierarchie mit `z-index` auf der letzten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1), eine [2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2) und eine [3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3).

## Siehe auch

- [z-index verstehen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Verwenden von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Top-Ebene")}}
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)-Modul
