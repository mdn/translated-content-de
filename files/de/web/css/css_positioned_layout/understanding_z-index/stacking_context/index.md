---
title: Stapelkontext
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Ein **Stapelkontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären Z-Achse relativ zum Benutzer, der angenommen wird, dass er dem Ansichtsfenster oder der Webseite gegenübersteht. HTML-Elemente belegen diesen Raum in einer Prioritätsreihenfolge basierend auf den Eigenschaften der Elemente.

## Beschreibung

Im vorherigen Artikel dieses Leitfadens, [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index), haben wir gezeigt, dass die Reihenfolge der Darstellung bestimmter Elemente von ihrem `z-index`-Wert beeinflusst wird. Dies geschieht, weil diese Elemente besondere Eigenschaften haben, die sie dazu veranlassen, einen _Stapelkontext_ zu bilden.

Ein Stapelkontext wird überall im Dokument von jedem Element unter den folgenden Szenarien gebildet:

- Root-Element des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky` (sticky für alle mobilen Browser, aber nicht für ältere Desktop-Browser).
- Element mit einem {{cssxref("container-type")}}-Wert `size` oder `inline-size` gesetzt, vorgesehen für [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).
- Element, das ein Kind eines [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)-Containers ist, mit einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element, das ein Kind eines {{cssxref("grid")}}-Containers ist, mit einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("opacity")}}-Wert kleiner als `1`.
- Element mit einem {{cssxref("mix-blend-mode")}}-Wert, der nicht `normal` ist.
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

- Element mit einem {{cssxref("isolation")}}-Wert `isolate`.
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft spezifiziert, die einen Stapelkontext bei einem nicht-initialen Wert erzeugen würde.
- Element mit einem {{cssxref("contain")}}-Wert `layout`, oder `paint`, oder einem zusammengesetzten Wert, der entweder `layout` oder `paint` einschließt (z.B. `contain: strict`, `contain: content`).
- Element, das in den [obersten Schicht](/de/docs/Glossary/Top_layer) platziert wurde und seinem entsprechenden {{cssxref("::backdrop")}}. Beispiele sind [Fullscreen](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API)-Elemente.
- Element, das Stapelkontext-erzeugende Eigenschaften (wie `opacity`) mithilfe von {{cssxref("@keyframes")}} animiert hat, mit [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) auf [`forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) gesetzt.

Innerhalb eines Stapelkontextes werden Kindelemente gemäß den oben erläuterten Regeln gestapelt. Wichtig ist, dass die `z-index`-Werte seiner Kindstapelkontexte nur innerhalb dieses Elternkontextes Bedeutung haben. Stapelkontexte werden atomar als eine einzige Einheit im übergeordneten Stapelkontext behandelt.

Zusammenfassend:

- Stapelkontexte können in anderen Stapelkontexten enthalten sein und zusammen eine Hierarchie von Stapelkontexten schaffen.
- Jeder Stapelkontext ist vollständig unabhängig von seinen Geschwistern: Nur Nachfahren-Elemente werden berücksichtigt, wenn das Stapeln verarbeitet wird.
- Jeder Stapelkontext ist in sich geschlossen: Nachdem der Inhalt des Elements gestapelt wurde, wird das gesamte Element in der Stapelreihenfolge des übergeordneten Stapelkontextes berücksichtigt.

> [!NOTE]
> Die Hierarchie der Stapelkontexte ist eine Teilmenge der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stapelkontexte erzeugen. Man kann sagen, dass Elemente, die ihre eigenen Stapelkontexte nicht erzeugen, vom übergeordneten Stapelkontext _assimiliert_ werden.

## Beispiel

![Beispiel für Stapelregeln, die mit z-index modifiziert wurden](understanding_zindex_04.png)

In diesem Beispiel erzeugt jedes positionierte Element seinen eigenen Stapelkontext aufgrund seiner Positionierung und `z-index`-Werte. Die Hierarchie der Stapelkontexte ist wie folgt organisiert:

- Root

  - DIV #1
  - DIV #2
  - DIV #3

    - DIV #4
    - DIV #5
    - DIV #6

Es ist wichtig zu beachten, dass DIV #4, DIV #5 und DIV #6 Kinder von DIV #3 sind, sodass das Stapeln dieser Elemente vollständig innerhalb von DIV #3 gelöst wird. Sobald das Stapeln und Rendern innerhalb von DIV #3 abgeschlossen ist, wird das gesamte DIV #3 für das Stapeln im Root-Element in Bezug auf seine Geschwister-DIV übergeben.

DIV #4 wird unter DIV #1 gerendert, weil DIV #1's z-index (5) innerhalb des Stapelkontextes des Root-Elements gültig ist, während DIV #4's z-index (6) innerhalb des Stapelkontextes von DIV #3 gültig ist. Daher befindet sich DIV #4 unter DIV #1, weil DIV #4 zu DIV #3 gehört, das einen niedrigeren z-index-Wert hat.

Aus dem gleichen Grund wird DIV #2 (`z-index`: 2) unter DIV #5 (`z-index`: 1) gerendert, weil DIV #5 zu DIV #3 gehört, das einen höheren z-index-Wert hat.

DIV #3's z-index ist 4, aber dieser Wert ist unabhängig von den z-index-Werten von DIV #4, DIV #5 und DIV #6, weil es zu einem anderen Stapelkontext gehört.

Ein einfacher Weg, die _Renderreihenfolge_ von gestapelten Elementen entlang der Z-Achse zu verstehen, ist, es als eine Art "Versionsnummer" zu betrachten, bei der die Kindelemente eine geringere Versionsnummer unter der größeren Versionsnummer der Eltern haben. So können wir leicht sehen, wie ein Element mit einem z-index von 1 (DIV #5) über einem Element mit einem z-index von 2 (DIV #2) gestapelt wird und wie ein Element mit einem z-index von 6 (DIV #4) unter einem Element mit einem z-index von 5 (DIV #1) gestapelt wird.

In unserem Beispiel (sortiert nach der endgültigen Renderreihenfolge):

- Root

  - DIV #2: (`z-index`: 2)
  - DIV #3: (`z-index`: 4)

    - DIV #5: (`z-index`: 1), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von 4.1 führt
    - DIV #6: (`z-index`: 3), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von 4.3 führt
    - DIV #4: (`z-index`: 6), gestapelt unter einem Element (`z-index`: 4), was zu einer Renderreihenfolge von 4.6 führt

  - DIV #1: (`z-index`: 5)

### HTML

```html
<div id="div1">
  <h1>Division Element #1</h1>
  <code>
    position: relative;<br />
    z-index: 5;
  </code>
</div>

<div id="div2">
  <h1>Division Element #2</h1>
  <code>
    position: relative;<br />
    z-index: 2;
  </code>
</div>

<div id="div3">
  <div id="div4">
    <h1>Division Element #4</h1>
    <code>
      position: relative;<br />
      z-index: 6;
    </code>
  </div>

  <h1>Division Element #3</h1>
  <code>
    position: absolute;<br />
    z-index: 4;
  </code>

  <div id="div5">
    <h1>Division Element #5</h1>
    <code>
      position: relative;<br />
      z-index: 1;
    </code>
  </div>

  <div id="div6">
    <h1>Division Element #6</h1>
    <code>
      position: absolute;<br />
      z-index: 3;
    </code>
  </div>
</div>
```

### CSS

```css
* {
  margin: 0;
}
html {
  padding: 20px;
  font:
    12px/20px Arial,
    sans-serif;
}
div {
  opacity: 0.7;
  position: relative;
}
h1 {
  font: inherit;
  font-weight: bold;
}
#div1,
#div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#div1 {
  z-index: 5;
  margin-bottom: 190px;
}
#div2 {
  z-index: 2;
}
#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}
#div4,
#div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}
#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: center;
}
```

## Ergebnis

{{ EmbedLiveSample('Example', '100%', '396') }}

## Siehe auch

- [Stapel ohne die z-index Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelnde schwebende Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente beim Stapeln behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie `z-index` verwendet wird, um die Standardstapelung zu ändern.
- [Stapelkontext-Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Stapelkontext-Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Stapelkontext-Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene
- [Oberste Schicht](/de/docs/Glossary/Top_layer)
