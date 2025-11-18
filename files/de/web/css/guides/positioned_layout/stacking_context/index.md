---
title: Stacking-Kontext
slug: Web/CSS/Guides/Positioned_layout/Stacking_context
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Ein **Stacking-Kontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse, relativ zum Benutzer, der angenommen wird, direkt auf das Ansichtsfenster oder die Webseite zu schauen. Der Stacking-Kontext bestimmt, wie Elemente auf der z-Achse übereinander geschichtet werden (denken Sie an die „Tiefen“-Dimension auf Ihrem Bildschirm). Der Stacking-Kontext bestimmt die visuelle Reihenfolge, in der sich überlappende Inhalte dargestellt werden.

Elemente innerhalb eines Stacking-Kontextes werden unabhängig von Elementen außerhalb dieses Stacking-Kontextes gestapelt, was sicherstellt, dass Elemente in einem Stacking-Kontext die Stapelreihenfolge von Elementen in einem anderen nicht beeinträchtigen. Jeder Stacking-Kontext ist von seinen Geschwistern vollständig unabhängig: Nur Nachkommenelemente werden bei der Stapelverarbeitung berücksichtigt.

Jeder Stacking-Kontext ist eigenständig. Nachdem die Inhalte eines Elements gestapelt sind, wird das gesamte Element als eine Einheit in der Stapelreihenfolge seines übergeordneten Stacking-Kontextes betrachtet.

Innerhalb eines Stacking-Kontextes werden Kind-Elemente entsprechend der `z-index`-Werte aller Geschwister gestapelt. Die Stacking-Kontexte dieser verschachtelten Elemente haben nur innerhalb dieses Elternteils Bedeutung. Stacking-Kontexte werden im übergeordneten Stacking-Kontext als eine einzige Einheit behandelt. Stacking-Kontexte können in anderen Stacking-Kontexten enthalten sein und bilden zusammen eine Hierarchie von Stacking-Kontexten.

Die Hierarchie der Stacking-Kontexte ist eine Untermenge der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stacking-Kontexte erzeugen. Elemente, die keine eigenen Stacking-Kontexte erzeugen, werden vom übergeordneten Stacking-Kontext „assimiliert“.

## Funktionen, die Stacking-Kontexte erstellen

Ein Stacking-Kontext wird überall im Dokument von einem beliebigen Element in den folgenden Szenarien gebildet:

- Root-Element des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert von `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("position")}}-Wert von `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}}-Wert von `size` oder `inline-size` gesetzt (siehe [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)).
- Element, das ein [Flex-Item](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) mit einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element, das ein [Grid-Item]() mit einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
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
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft angibt, die bei Nicht-Standardwert einen Stacking-Kontext erzeugen würde.
- Element mit einem {{cssxref("contain")}}-Wert von `layout` oder `paint` oder einem zusammengesetzten Wert, der eine dieser Werte einschließt (d.h. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "oberste Ebene")}} gelegt wird und sein entsprechendes {{cssxref("::backdrop")}}. Beispiele beinhalten [Fullscreen](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API) Elemente.
- Element, das Stacking-Kontext erzeugende Eigenschaften (wie `opacity`) animiert hat, wobei {{cssxref("@keyframes")}} mit [`animation-fill-mode`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode) auf [`forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) gesetzt.

## Verschachtelte Stacking-Kontexte

Stacking-Kontexte können in anderen Stacking-Kontexten enthalten sein und gemeinsam eine Hierarchie von Stacking-Kontexten bilden.

Das Root-Element eines Dokuments ist ein Stacking-Kontext, der in den meisten Fällen verschachtelte Stacking-Kontexte enthält, von denen viele weitere Stacking-Kontexte beinhalten werden. Innerhalb jedes Stacking-Kontextes werden Kindelemente nach denselben Regeln gestapelt, die in [Verwendung von `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index) erklärt werden. Wichtig ist, dass die `z-index`-Werte seiner Kind-Stacking-Kontexte nur innerhalb des Eltern-Stacking-Kontextes Bedeutung haben. Stacking-Kontexte werden im übergeordneten Stacking-Kontext als eine Einheit behandelt.

Um herauszufinden, in welcher _Reihenfolge_ gestapelte Elemente entlang der z-Achse gerendert werden, denken Sie an jeden Indexwert als eine „Versionsnummer“, bei der Kindelemente minderwertige Versionsnummern unter ihrer Eltern-Versionsnummer darstellen.

Um zu demonstrieren, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer übergeordneten Stacking-Kontexte teilnimmt, schauen wir uns eine Beispielseite mit sechs Containerelementen an. Es gibt drei {{htmlelement("article")}}-Elemente als Geschwister. Das letzte `<article>` enthält drei {{htmlelement("section")}}-Elemente als Geschwister, wobei die {{htmlelement("heading_elements", "&lt;h1&gt;")}} und {{htmlelement("code")}} dieses dritten Artikels zwischen dem ersten und zweiten Geschwister-`<section>`-Element erscheinen.

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

Die CSS-Eigenschaften für Farben, Schriften, Ausrichtung und [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) wurden aus Gründen der Kürze verborgen.

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

Die drei `<section>`-Elemente sind Kinder von ARTICLE #3. Daher wird das Stapeln der Abschnittselemente vollständig innerhalb von ARTICLE #3 gelöst. Nachdem das Stapeln und Rendern innerhalb von ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3-Element zur Stapelung im Root-Element im Hinblick auf seine Geschwister-`<article>`-Elemente weitergegeben.

Indem wir `z-index` als „Versionsnummern“ vergleichen, können wir sehen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt wird und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt wird.
SECTION #4 wird unter ARTICLE #1 gerendert, weil der z-index von ARTICLE #1 (`5`) im Stacking-Kontext des Root-Elements gültig ist, während der z-index von SECTION #4 (`6`) nur im Stacking-Kontext von ARTICLE #3 (`z-index: 4`) gültig ist. Daher befindet sich SECTION #4 unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren z-index-Wert hat (`4-6` ist geringer als `5-0`).

Aus demselben Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, das einen höheren z-index-Wert hat (`2-0` ist geringer als `4-1`).

ARTICLE #3's z-index ist `4`, aber dieser Wert ist unabhängig vom `z-index` der drei darin verschachtelten Abschnitte, weil sie zu einem anderen Stacking-Kontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Renderreihenfolge):

- Root
  - ARTICLE #2: (`z-index`: 2), was zu einer Renderreihenfolge von `2-0` führt
  - ARTICLE #3: (`z-index`: 4), was zu einer Renderreihenfolge von `4-0` führt
    - SECTION #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von `4-1` führt
    - SECTION #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von `4-3` führt
    - SECTION #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von `4-6` führt

  - ARTICLE #1: (`z-index`: 5), was zu einer Renderreihenfolge von `5-0` führt

## Zusätzliche Beispiele

Zusätzliche Beispiele umfassen eine [2-stufige Hierarchie mit `z-index` auf der letzten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1), eine [2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2) und eine [3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3).

## Siehe auch

- [z-index verstehen](/de/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [Verwendung von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Oberste Ebene")}}
- [CSS-Positionierungslayout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
