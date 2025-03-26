---
title: Stapelkontext
slug: Web/CSS/CSS_positioned_layout/Stacking_context
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{CSSRef}}

Ein **Stapelkontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, dass er der Ansicht oder der Webseite gegenübersteht. Der Stapelkontext bestimmt, wie Elemente entlang der z-Achse übereinander geschichtet werden (denken Sie daran als die "Tiefendimension" auf Ihrem Bildschirm). Der Stapelkontext bestimmt die visuelle Reihenfolge, wie überlappender Inhalt gerendert wird.

Elemente innerhalb eines Stapelkontexts werden unabhängig von Elementen außerhalb dieses Stapelkontexts gestapelt, um sicherzustellen, dass Elemente in einem Stapelkontext nicht mit der Stapelreihenfolge von Elementen in einem anderen Stapelkontext interferieren. Jeder Stapelkontext ist vollständig unabhängig von seinen Geschwistern: Nur Nachkommenelemente werden betrachtet, wenn die Stapelverarbeitung durchgeführt wird.

Jeder Stapelkontext ist in sich geschlossen. Nachdem die Inhalte eines Elements gestapelt wurden, wird das gesamte Element als eine einzige Einheit in der Stapelreihenfolge seines übergeordneten Stapelkontexts behandelt.

Innerhalb eines Stapelkontexts werden Kinderelemente gemäß ihren `z-index` Werten aller Geschwister gestapelt. Die Stapelkontexte dieser geschachtelten Elemente haben nur in diesem Elternteil Bedeutung. Stapelkontexte werden atomar als eine einzige Einheit im übergeordneten Stapelkontext behandelt. Stapelkontexte können in anderen Stapelkontexten enthalten sein und zusammen eine Hierarchie von Stapelkontexten erstellen.

Die Hierarchie von Stapelkontexten ist eine Teilmenge der Hierarchie von HTML-Elementen, weil nur bestimmte Elemente Stapelkontexte erzeugen. Elemente, die keinen eigenen Stapelkontext erzeugen, werden vom übergeordneten Stapelkontext _assimiliert_.

## Merkmale, die Stapelkontexte erzeugen

Ein Stapelkontext wird irgendwo im Dokument von jedem Element in den folgenden Szenarien gebildet:

- Root-Element des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}} Wert `absolute` oder `relative` und einem {{cssxref("z-index")}} Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("position")}} Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}} Wert, der auf `size` oder `inline-size` gesetzt ist (siehe [Container-Anfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)).
- Element, das ein [Flex-Item](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist mit einem {{cssxref("z-index")}} Wert, der nicht `auto` ist.
- Element, das ein [Grid-Item](/de/docs/Web/CSS/CSS_grid_layout) ist mit einem {{cssxref("z-index")}} Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("opacity")}} Wert kleiner `1`.
- Element mit einem {{cssxref("mix-blend-mode")}} Wert, der nicht `normal` ist.
- Element mit einem der folgenden Eigenschaften mit einem Wert, der nicht `none` ist:

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
- Element mit einem {{cssxref("will-change")}} Wert, der eine Eigenschaft angibt, die bei einem nicht-initiierten Wert einen Stapelkontext erzeugen würde.
- Element mit einem {{cssxref("contain")}} Wert von `layout` oder `paint`, oder einem zusammengesetzten Wert, der einen dieser Werte beinhaltet (z.B. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "Frontschicht")}} gestellt wurde und dessen entsprechendes {{cssxref("::backdrop")}}. Beispiele beinhalten [Vollbild](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API) Elemente.
- Element, das Stapelkontext-erzeugende Eigenschaften (wie `opacity`) animiert hatte, unter Verwendung von {{cssxref("@keyframes")}}, mit [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) auf [`forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) gesetzt.

## Geschachtelte Stapelkontexte

Stapelkontexte können in anderen Stapelkontexten enthalten sein und zusammen eine Hierarchie von Stapelkontexten erstellen.

Das Root-Element eines Dokuments ist ein Stapelkontext, der in den meisten Fällen geschachtelte Stapelkontexte enthält, von denen viele zusätzliche Stapelkontexte enthalten werden. Innerhalb jedes Stapelkontexts werden Kinderelemente nach denselben in [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index) erklärten Regeln gestapelt. Wichtig ist, dass die `z-index`-Werte der Kind-Stapelkontexte nur innerhalb des Stapelkontexts ihrer Eltern Bedeutung haben. Stapelkontexte werden atomar als eine einzige Einheit im übergeordneten Stapelkontext behandelt.

Um die _Render-Reihenfolge_ von gestapelten Elementen entlang der z-Achse herauszufinden, denken Sie sich jeden Indexwert als eine Art "Versionsnummer", wobei Kind-Elemente kleinere Versionsnummern unterhalb der größeren Versionsnummer ihrer Eltern repräsentieren.

Um zu demonstrieren, wie die Stapelreihenfolge jedes Elements in der Stapelreihenfolge ihrer Vorfahren-Stapelkontexte teilnimmt, betrachten wir eine Beispielseite mit sechs Container-Elementen. Es gibt drei Geschwister-{{htmlelement("article")}} Elemente. Das letzte `<article>` enthält drei Geschwister-{{htmlelement("section")}} Elemente, wobei die {{htmlelement("heading_elements", "&lt;h1&gt;")}} und {{htmlelement("code")}} dieses dritten Artikels zwischen dem ersten und zweiten Geschwister-`<section>` Element erscheinen.

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

Jedes Container-Element hat eine {{cssxref("opacity")}} von weniger als `1` und eine {{cssxref("position")}} von entweder `relative` oder `absolute` gesetzt. Diese Eigenschaft-Wert-Paare erzeugen einen Stapelkontext, wenn das Element einen `z-index` Wert hat, der nicht `auto` ist.

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

Die CSS Eigenschaften für Farben, Schriften, Ausrichtung und [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wurden der Kürze halber ausgeblendet.

{{ EmbedLiveSample('Geschachtelte Stapelkontexte', '100%', '396') }}

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

Die drei `<section>` Elemente sind Kinder des ARTICLE #3. Daher wird die Stapelung der Section-Elemente vollständig innerhalb von ARTICLE #3 gelöst. Sobald die Stapelung und das Rendering innerhalb SECTION #3 abgeschlossen sind, wird das ganze SECTION #3 Element zur Stapelung mit den Geschwister-`<article>` Elementen im Root-Element übergeben.

Indem `z-index` als "Versionsnummern" verglichen werden, können wir sehen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) gestapelt ist, und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt ist.
SECTION #4 wird unter ARTICLE #1 gerendert, da der `z-index` von ARTICLE #1 (`5`) gültig im Stapelkontext des Root-Elements ist, während der `z-index` von SECTION #4 (`6`) im Stapelkontext von ARTICLE #3 (`z-index: 4`) gültig ist. Also wird SECTION #4 unter ARTICLE #1 dargestellt, weil SECTION #4 zu ARTICLE #3 gehört, das einen niedrigeren `z-index` Wert hat (`4-6` ist kleiner als `5-0`).

Aus demselben Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, welches einen höheren `z-index` Wert hat (`2-0` ist kleiner als `4-1`).

Der `z-index` von ARTICLE #3 ist `4`, aber dieser Wert ist unabhängig von dem `z-index` der drei darin verschachtelten Abschnitte, weil sie zu einem anderen Stapelkontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Render-Reihenfolge):

- Root

  - ARTICLE #2: (`z-index`: 2), was in einer Render-Reihenfolge von `2-0` resultiert
  - ARTICLE #3: (`z-index`: 4), was in einer Render-Reihenfolge von `4-0` resultiert

    - SECTION #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was in einer Render-Reihenfolge von `4-1` resultiert
    - SECTION #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was in einer Render-Reihenfolge von `4-3` resultiert
    - SECTION #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was in einer Render-Reihenfolge von `4-6` resultiert

  - ARTICLE #1: (`z-index`: 5), was in einer Render-Reihenfolge von `5-0` resultiert

## Weitere Beispiele

Weitere Beispiele beinhalten eine [2-Stufen-Hierarchie mit `z-index` auf der letzten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1), eine [2-Stufen HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2), und eine [3-Ebenen HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3).

## Siehe auch

- [Verständnis von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Stapelung ohne die `z-index` Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Gestapelte schwebende Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Frontschicht")}}
- Modul für [CSS Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)
