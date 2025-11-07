---
title: Stapelkontext
slug: Web/CSS/Guides/Positioned_layout/Stacking_context
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein **Stapelkontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, dass er dem Viewport oder der Webseite zugewandt ist. Der Stapelkontext bestimmt, wie Elemente entlang der z-Achse (siehe es als die "Tiefen"-Dimension auf Ihrem Bildschirm) übereinander geschichtet werden. Der Stapelkontext bestimmt die visuelle Reihenfolge, in der sich überschneidende Inhalte gerendert werden.

Elemente innerhalb eines Stapelkontexts werden unabhängig von Elementen außerhalb dieses Stapelkontexts gestapelt, wodurch sichergestellt wird, dass Elemente in einem Stapelkontext die Stapelreihenfolge von Elementen in einem anderen Stapelkontext nicht stören. Jeder Stapelkontext ist völlig unabhängig von seinen Geschwistern: Nur abgeleitete Elemente werden beim Stapeln berücksichtigt.

Jeder Stapelkontext ist in sich geschlossen. Nachdem die Inhalte eines Elements gestapelt wurden, wird das gesamte Element als eine einzige Einheit in der Stapelreihenfolge seines Eltern-Stapelkontexts betrachtet.

Innerhalb eines Stapelkontexts werden untergeordnete Elemente gemäß den `z-index`-Werten aller Geschwister gestapelt. Die Stapelkontexte dieser verschachtelten Elemente haben erst innerhalb dieses Eltern-Kontexts Bedeutung. Stapelkontexte werden atomar als eine einzige Einheit im Eltern-Stapelkontext behandelt. Stapelkontexte können in andere Stapelkontexte eingebettet sein und zusammen eine Hierarchie von Stapelkontexten bilden.

Die Hierarchie der Stapelkontexte ist ein Teil der Hierarchie der HTML-Elemente, weil nur bestimmte Elemente Stapelkontexte erstellen. Elemente, die keine eigenen Stapelkontexte erstellen, werden durch den Eltern-Stapelkontext _assimiliert_.

## Merkmale, die Stapelkontexte erstellen

Ein Stapelkontext bildet sich überall im Dokument durch jedes Element in den folgenden Szenarien:

- Wurzelelement des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert ungleich `auto`.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky`.
- Element mit einem {{cssxref("container-type")}}-Wert, der `size` oder `inline-size` gesetzt hat (siehe [Container-Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)).
- Element, das ein [Flex-Item](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
- Element, das ein [Grid-Item]() mit einem {{cssxref("z-index")}}-Wert ungleich `auto` ist.
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
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft spezifiziert, die einen Stapelkontext auf nicht-initialem Wert erzeugen würde.
- Element mit dem {{cssxref("contain")}}-Wert `layout` oder `paint`, oder einem zusammengesetzten Wert, der eines dieser Werte einschließt (d.h. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "Top-Ebene")}} platziert wurde und dem entsprechenden {{cssxref("::backdrop")}}. Beispiele beinhalten [Vollbildmodus](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API)-Elemente.
- Element, das Stapelkontext-erstellende Eigenschaften (wie `opacity`) durch Animationen mit {{cssxref("@keyframes")}} animiert hat, mit `[`animation-fill-mode`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode)` gesetzt auf `[`forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards)`.

## Verschachtelte Stapelkontexte

Stapelkontexte können in andere Stapelkontexte eingebettet sein und sie können zusammen eine Hierarchie von Stapelkontexten bilden.

Das Wurzelelement eines Dokuments ist ein Stapelkontext, der in den meisten Fällen verschachtelte Stapelkontexte enthält, von denen viele zusätzliche Stapelkontexte enthalten werden. Innerhalb jedes Stapelkontexts werden untergeordnete Elemente nach denselben Regeln gestapelt, die in [Verwendung von `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index) erklärt werden. Wichtig ist, dass die `z-index`-Werte seiner untergeordneten Stapelkontexte nur innerhalb des elterlichen Stapelkontexts von Bedeutung sind. Stapelkontexte werden atomar als eine einzelne Einheit in der übergeordneten Stapelkontext behandelt.

Um die _Render-Reihenfolge_ der gestapelten Elemente entlang der z-Achse herauszufinden, denken Sie an jeden Indexwert als eine Art "Versionsnummer", wobei untergeordnete Elemente kleinere Versionsnummern unterhalb der größeren Versionsnummer ihres Elternteils repräsentieren.

Um zu demonstrieren, wie die Stapelreihenfolge jedes Elements an der Stapelreihenfolge ihrer Vorfahren-Stapelkontexte teilnimmt, betrachten wir eine Beispielseite mit sechs Containerelementen. Es gibt drei Geschwister-{{htmlelement("article")}} Elemente. Das letzte `<article>` enthält drei Geschwister-{{htmlelement("section")}} Elemente, mit dem {{htmlelement("heading_elements", "&lt;h1&gt;")}} und dem {{htmlelement("code")}} dieses dritten Artikels, die zwischen dem ersten und zweiten Geschwister-`<section>`-Element erscheinen.

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

Jedes Containerelement hat eine {{cssxref("opacity")}} von weniger als `1` und eine {{cssxref("position")}} von entweder `relative` oder `absolute` gesetzt. Diese Eigenschaft-Wert-Paare erstellen einen Stapelkontext, wenn das Element einen `z-index` Wert ungleich `auto` hat.

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

Die CSS-Eigenschaften für Farben, Schriftarten, Ausrichtung und [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) wurden der Kürze halber versteckt.

{{ EmbedLiveSample('Verschachtelte Stapelkontexte', '100%', '396') }}

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

Die drei `<section>`-Elemente sind Kinder von ARTICLE #3. Daher wird das Stapeln der Sektionselemente vollständig innerhalb von ARTICLE #3 gelöst. Sobald das Stapeln und Rendern innerhalb von ARTICLE #3 abgeschlossen ist, wird das gesamte ARTICLE #3-Element zur Stapelung im Wurzelelement in Bezug auf seine Geschwister-`<article>`-Elemente weitergeleitet.

Indem wir den `z-index` als "Versionsnummern" vergleichen, können wir sehen, wie ein Element mit einem `z-index` von `1` (SECTION #5) über einem Element mit einem `z-index` von `2` (ARTICLE #2) und wie ein Element mit einem `z-index` von `6` (SECTION #4) unter einem Element mit einem `z-index` von `5` (ARTICLE #1) gestapelt wird.
SECTION #4 wird unter ARTICLE #1 gerendert, weil ARTICLE #1's z-index (`5`) innerhalb des Stapelkontexts des Wurzelelements gültig ist, während SECTION #4's z-index (`6`) innerhalb des Stapelkontexts von ARTICLE #3 (`z-index: 4`) gültig ist. Also, SECTION #4 ist unter ARTICLE #1, weil SECTION #4 zu ARTICLE #3 gehört, welches einen niedrigeren z-index-Wert hat (`4-6` ist weniger als `5-0`).

Aus dem gleichen Grund wird ARTICLE #2 (`z-index: 2`) unter SECTION #5 (`z-index`: 1) gerendert, weil SECTION #5 zu ARTICLE #3 (`z-index: 4`) gehört, welches einen höheren z-index-Wert hat (`2-0` ist weniger als `4-1`).

Der z-index von ARTICLE #3 ist `4`, aber dieser Wert ist unabhängig vom `z-index` der drei darin verschachtelten Sektionen, da sie zu einem anderen Stapelkontext gehören.

In unserem Beispiel (sortiert nach der endgültigen Render-Reihenfolge):

- Root
  - ARTICLE #2: (`z-index`: 2), was in einer Render-Reihenfolge von `2-0` resultiert
  - ARTICLE #3: (`z-index`: 4), was in einer Render-Reihenfolge von `4-0` resultiert
    - SECTION #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was in einer Render-Reihenfolge von `4-1` resultiert
    - SECTION #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was in einer Render-Reihenfolge von `4-3` resultiert
    - SECTION #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was in einer Render-Reihenfolge von `4-6` resultiert

  - ARTICLE #1: (`z-index`: 5), was in einer Render-Reihenfolge von `5-0` resultiert

## Zusätzliche Beispiele

Zusätzliche Beispiele beinhalten eine [2-Ebenen-Hierarchie mit `z-index` auf der letzten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1), eine [2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2) und eine [3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3).

## Siehe auch

- [Verständnis von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [Stapelung schwimmender Elemente](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [Verwendung von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- {{Glossary("Top_layer", "Top-Ebene")}}
- [CSS positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
