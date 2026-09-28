---
title: Stapelkontext
slug: Web/CSS/Guides/Positioned_layout/Stacking_context
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

Ein **Stapelkontext** ist ein dreidimensionales Modell von HTML-Elementen entlang einer gedachten z-Achse. Ausgangspunkt ist die Perspektive einer Person, die auf den Viewport oder die Webseite blickt. Der Stapelkontext bestimmt, wie Elemente entlang der z-Achse übereinanderliegen – die z-Achse entspricht dabei der „Tiefe“ auf dem Bildschirm. Er legt die sichtbare Reihenfolge fest, in der sich überlappende Inhalte gerendert werden.

Elemente innerhalb eines Stapelkontexts werden unabhängig von Elementen außerhalb dieses Kontexts gestapelt. So beeinflussen Elemente eines Stapelkontexts nicht die Stapelreihenfolge in einem anderen. Jeder Stapelkontext ist vollständig unabhängig von seinen gleichgeordneten Stapelkontexten: Bei der Stapelung werden nur seine Nachfahren berücksichtigt.

Jeder Stapelkontext bildet eine abgeschlossene Einheit. Nachdem die Inhalte eines Elements gestapelt wurden, wird das gesamte Element in der Stapelreihenfolge des übergeordneten Stapelkontexts als eine Einheit behandelt.

Innerhalb eines Stapelkontexts werden Kindelemente anhand der `z-index`-Werte aller gleichgeordneten Elemente gestapelt. Die Stapelkontexte dieser verschachtelten Elemente sind nur innerhalb ihres übergeordneten Stapelkontexts relevant. Dort werden sie jeweils als unteilbare Einheit behandelt. Stapelkontexte können weitere Stapelkontexte enthalten und bilden so gemeinsam eine Hierarchie.

Die Hierarchie der Stapelkontexte ist eine Teilmenge der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stapelkontexte erzeugen. Elemente, die keinen eigenen Stapelkontext erzeugen, werden vom übergeordneten Stapelkontext _aufgenommen_.

## Eigenschaften, die Stapelkontexte erzeugen

Ein Element erzeugt an beliebiger Stelle im Dokument einen Stapelkontext, wenn eine der folgenden Bedingungen zutrifft:

- Es ist das Wurzelelement des Dokuments (`<html>`).
- Sein {{cssxref("position")}}-Wert ist `absolute` oder `relative` und sein {{cssxref("z-index")}}-Wert ist nicht `auto`.
- Sein {{cssxref("position")}}-Wert ist `fixed` oder `sticky`.
- Sein {{cssxref("container-type")}}-Wert ist `size` oder `inline-size` (siehe [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)).
- Es ist ein [Flex-Element](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) mit einem {{cssxref("z-index")}}-Wert ungleich `auto`.
- Es ist ein [Grid-Element](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#layering_items_with_z-index) mit einem {{cssxref("z-index")}}-Wert ungleich `auto`.
- Sein {{cssxref("opacity")}}-Wert ist kleiner als `1`.
- Sein {{cssxref("mix-blend-mode")}}-Wert ist nicht `normal`.
- Mindestens eine der folgenden Eigenschaften hat einen anderen Wert als `none`:
  - {{cssxref("transform")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - {{cssxref("translate")}}
  - {{cssxref("filter")}}
  - {{cssxref("backdrop-filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- Sein {{cssxref("isolation")}}-Wert ist `isolate`.
- Sein {{cssxref("will-change")}}-Wert bezeichnet eine Eigenschaft, die bei einem nicht initialen Wert einen Stapelkontext erzeugen würde.
- Sein {{cssxref("contain")}}-Wert ist `layout` oder `paint` oder ein zusammengesetzter Wert, der einen dieser Werte enthält (z. B. `contain: strict` oder `contain: content`).
- Es wurde in den {{Glossary("Top_layer", "Top Layer")}} aufgenommen; auch das zugehörige {{cssxref("::backdrop")}} erzeugt einen Stapelkontext. Beispiele sind Elemente im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API)-Elemente.
- Eine stapelkontexterzeugende Eigenschaft des Elements (etwa `opacity`) wurde mit {{cssxref("@keyframes")}} animiert und {{cssxref("animation-fill-mode")}} ist auf [`forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) gesetzt.

## Verschachtelte Stapelkontexte

Stapelkontexte können in anderen Stapelkontexten enthalten sein und gemeinsam eine Hierarchie bilden.

Das Wurzelelement eines Dokuments ist ein Stapelkontext, der in den meisten Fällen verschachtelte Stapelkontexte enthält. Viele davon enthalten wiederum weitere Stapelkontexte. Innerhalb jedes Stapelkontexts werden Kindelemente nach denselben Regeln gestapelt, die unter [`z-index` verwenden](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index) erläutert werden. Entscheidend ist, dass die `z-index`-Werte untergeordneter Stapelkontexte nur innerhalb des übergeordneten Stapelkontexts relevant sind. Im übergeordneten Stapelkontext wird jeder Stapelkontext als unteilbare Einheit behandelt.

Um die _Rendering-Reihenfolge_ gestapelter Elemente entlang der z-Achse nachzuvollziehen, können Sie sich jeden Indexwert als eine Art „Versionsnummer“ vorstellen: Kindelemente erhalten eine Nebenversionsnummer unter der Hauptversionsnummer ihres Elternelements.

Wie sich die Stapelreihenfolge jedes Elements in die Stapelreihenfolge seiner übergeordneten Stapelkontexte einfügt, zeigt eine Beispielseite mit sechs Containerelementen. Sie enthält drei gleichgeordnete {{htmlelement("article")}}-Elemente. Das letzte `<article>` enthält drei gleichgeordnete {{htmlelement("section")}}-Elemente. Die {{htmlelement("heading_elements", "&lt;h1&gt;")}} und das {{htmlelement("code")}} dieses dritten Artikels stehen zwischen dem ersten und zweiten dieser `<section>`-Elemente.

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

Jedes Containerelement hat einen {{cssxref("opacity")}}-Wert kleiner als `1` (wodurch ein Stapelkontext entsteht) und einen {{cssxref("position")}}-Wert von entweder `relative` oder `absolute` (wodurch ein Stapelkontext entsteht, wenn das Element außerdem einen anderen `z-index`-Wert als `auto` hat).

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

Die Hierarchie der Stapelkontexte im obigen Beispiel sieht wie folgt aus:

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

Die drei `<section>`-Elemente sind Kinder von ARTICLE #3. Daher wird ihre Stapelreihenfolge vollständig innerhalb von ARTICLE #3 bestimmt. Sobald die Stapelung und das Rendering innerhalb von ARTICLE #3 abgeschlossen sind, wird ARTICLE #3 als Ganzes im Wurzelelement relativ zu seinen gleichgeordneten `<article>`-Elementen gestapelt.

Wenn wir die `z-index`-Werte als „Versionsnummern“ vergleichen, erkennen wir, warum ein Element mit `z-index: 1` (SECTION #5) über einem Element mit `z-index: 2` (ARTICLE #2) liegt und ein Element mit `z-index: 6` (SECTION #4) unter einem Element mit `z-index: 5` (ARTICLE #1).
SECTION #4 wird unter ARTICLE #1 gerendert, weil der z-index von ARTICLE #1 (`5`) im Stapelkontext des Wurzelelements gilt, während der z-index von SECTION #4 (`6`) im Stapelkontext von ARTICLE #3 (`z-index: 4`) gilt. SECTION #4 liegt somit unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, dessen z-index-Wert niedriger ist (`4-6` ist kleiner als `5-0`).

Aus demselben Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert: SECTION #5 gehört zu ARTICLE #3 (`z-index: 4`), das einen höheren z-index-Wert hat (`2-0` ist kleiner als `4-1`).

Der z-index von ARTICLE #3 ist `4`. Dieser Wert ist jedoch unabhängig vom `z-index` der drei darin verschachtelten Sections, da diese zu einem anderen Stapelkontext gehören.

In unserem Beispiel ergibt sich – nach der endgültigen Rendering-Reihenfolge sortiert – Folgendes:

- Wurzelelement
  - ARTICLE #2: (`z-index`: 2), daraus ergibt sich die Rendering-Reihenfolge `2-0`
  - ARTICLE #3: (`z-index`: 4), daraus ergibt sich die Rendering-Reihenfolge `4-0`
    - SECTION #5: (`z-index`: 1), innerhalb eines Elements mit `z-index: 4` gestapelt; daraus ergibt sich die Rendering-Reihenfolge `4-1`
    - SECTION #6: (`z-index`: 3), innerhalb eines Elements mit `z-index: 4` gestapelt; daraus ergibt sich die Rendering-Reihenfolge `4-3`
    - SECTION #4: (`z-index`: 6), innerhalb eines Elements mit `z-index: 4` gestapelt; daraus ergibt sich die Rendering-Reihenfolge `4-6`

  - ARTICLE #1: (`z-index`: 5), daraus ergibt sich die Rendering-Reihenfolge `5-0`

## Weitere Beispiele

Weitere Beispiele zeigen eine [Hierarchie mit zwei Ebenen und `z-index` auf der untersten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1), eine [HTML-Hierarchie mit zwei Ebenen und `z-index` auf allen Ebenen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2) sowie eine [HTML-Hierarchie mit drei Ebenen und `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3).

## Siehe auch

- [z-index verstehen](/de/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [Stapelung ohne die Eigenschaft `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [Stapelung von Floats](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [z-index verwenden](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Top Layer")}}
- Modul [CSS-Layout für positionierte Elemente](/de/docs/Web/CSS/Guides/Positioned_layout)
