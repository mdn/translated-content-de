---
title: Stacking context
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

**Stacking-Kontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, der angenommen wird, dass er dem Ansichtsfenster oder der Webseite gegenübersteht. HTML-Elemente besetzen diesen Raum in einer Prioritätenreihenfolge basierend auf den Attributen der Elemente.

## Beschreibung

Im vorherigen Artikel dieses Leitfadens, [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index), haben wir gezeigt, dass die Rendering-Reihenfolge bestimmter Elemente durch ihren `z-index`-Wert beeinflusst wird. Dies geschieht, weil diese Elemente spezielle Eigenschaften haben, die sie dazu veranlassen, einen _Stacking-Kontext_ zu bilden.

Ein Stacking-Kontext wird an jeder Stelle im Dokument durch ein beliebiges Element in folgenden Szenarien gebildet:

- Stamm-Element des Dokuments (`<html>`).
- Element mit einem {{cssxref("position")}}-Wert `absolute` oder `relative` und einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element mit einem {{cssxref("position")}}-Wert `fixed` oder `sticky` (sticky für alle mobilen Browser, aber nicht für ältere Desktop-Browser).
- Element mit einem {{cssxref("container-type")}}-Wert `size` oder `inline-size` gesetzt, gedacht für [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).
- Element, das ein Kind eines [flex](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)-Containers ist, mit einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
- Element, das ein Kind eines {{cssxref("grid")}}-Containers ist, mit einem {{cssxref("z-index")}}-Wert, der nicht `auto` ist.
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

- Element mit einem {{cssxref("isolation")}}-Wert `isolate`.
- Element mit einem {{cssxref("will-change")}}-Wert, der eine Eigenschaft angibt, die bei nicht-initialem Wert einen Stacking-Kontext erstellen würde.
- Element mit einem {{cssxref("contain")}}-Wert von `layout`, `paint` oder einem zusammengesetzten Wert, der eine von ihnen enthält (d.h. `contain: strict`, `contain: content`).
- Element, das in die {{Glossary("Top_layer", "Top-Schicht")}} und seine entsprechende {{cssxref("::backdrop")}} gesetzt wurde. Beispiele umfassen [Fullscreen](/de/docs/Web/API/Fullscreen_API) und [Popover](/de/docs/Web/API/Popover_API)-Elemente.
- Element, das Eigenschaften eines Stacking-Kontextes erzeugt hat (wie `opacity`), die mittels {{cssxref("@keyframes")}} animiert wurden, mit [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) auf [`forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) gesetzt.

Innerhalb eines Stacking-Kontexts werden Kindelemente gemäß den oben erläuterten Regeln gestapelt. Wichtig ist, dass die `z-index`-Werte seiner Kinder-Stacking-Kontexte nur in diesem übergeordneten Kontext Bedeutung haben. Stacking-Kontexte werden atomar als eine einzelne Einheit im übergeordneten Stacking-Kontext behandelt.

Zusammenfassend:

- Stacking-Kontexte können in anderen Stacking-Kontexten enthalten sein und zusammen eine Hierarchie von Stacking-Kontexten bilden.
- Jeder Stacking-Kontext ist völlig unabhängig von seinen Geschwistern: Nur nachkommende Elemente werden beim Stapeln berücksichtigt.
- Jeder Stacking-Kontext ist in sich abgeschlossen: Nachdem der Inhalt des Elements gestapelt wurde, wird das gesamte Element in der Stapelreihenfolge des übergeordneten Stacking-Kontexts betrachtet.

> [!NOTE]
> Die Hierarchie der Stacking-Kontexte ist eine Teilmenge der Hierarchie von HTML-Elementen, da nur bestimmte Elemente Stacking-Kontexte erstellen. Man kann sagen, dass Elemente, die ihre eigenen Stacking-Kontexte nicht erstellen, vom übergeordneten Stacking-Kontext _assimiliert_ werden.

## Beispiel

![Beispiel für Stacking-Regeln, die mit z-index geändert werden](understanding_zindex_04.png)

In diesem Beispiel erstellt jedes positionierte Element seinen eigenen Stacking-Kontext, aufgrund seiner Positionierung und `z-index`-Werte. Die Hierarchie der Stacking-Kontexte ist wie folgt organisiert:

- Wurzel

  - DIV #1
  - DIV #2
  - DIV #3

    - DIV #4
    - DIV #5
    - DIV #6

Es ist wichtig zu beachten, dass DIV #4, DIV #5 und DIV #6 Kinder von DIV #3 sind, sodass das Stapeln dieser Elemente vollständig innerhalb von DIV #3 gelöst wird. Sobald das Stapeln und Rendern innerhalb von DIV #3 abgeschlossen ist, wird das gesamte DIV #3-Element zum Stapeln im Stamm-Element in Bezug auf die Geschwister-DIV weitergegeben.

DIV #4 wird unter DIV #1 gerendert, weil der z-index von DIV #1 (5) im Stacking-Kontext des Stamm-Elements gültig ist, während der z-index von DIV #4 (6) im Stacking-Kontext von DIV #3 gültig ist. Daher befindet sich DIV #4 unter DIV #1, weil DIV #4 zu DIV #3 gehört, das einen niedrigeren z-index-Wert hat.

Aus demselben Grund wird DIV #2 (`z-index`: 2) unter DIV #5 (`z-index`: 1) gerendert, weil DIV #5 zu DIV #3 gehört, das einen höheren z-index-Wert hat.

Der z-index von DIV #3 ist 4, aber dieser Wert ist unabhängig vom z-index von DIV #4, DIV #5 und DIV #6, da er zu einem anderen Stacking-Kontext gehört.

Eine einfache Methode, die _Render-Reihenfolge_ von gestapelten Elementen entlang der z-Achse zu bestimmen, besteht darin, sie als eine Art "Versionsnummer" zu betrachten, wobei Kindelemente kleinere Versionsnummern unter den größeren Versionsnummern ihrer Eltern haben. Auf diese Weise können wir leicht sehen, wie ein Element mit einem z-index von 1 (DIV #5) über einem Element mit einem z-index von 2 (DIV #2) gestapelt ist und wie ein Element mit einem z-index von 6 (DIV #4) unter einem Element mit einem z-index von 5 (DIV #1) gestapelt ist.

In unserem Beispiel (sortiert nach der endgültigen Render-Reihenfolge):

- Wurzel

  - DIV #2: (`z-index`: 2)
  - DIV #3: (`z-index`: 4)

    - DIV #5: (`z-index`: 1), unter einem Element gestapelt (`z-index`: 4), was zu einer Render-Reihenfolge von 4.1 führt
    - DIV #6: (`z-index`: 3), unter einem Element gestapelt (`z-index`: 4), was zu einer Render-Reihenfolge von 4.3 führt
    - DIV #4: (`z-index`: 6), unter einem Element gestapelt (`z-index`: 4), was zu einer Render-Reihenfolge von 4.6 führt

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

## Resultat

{{ EmbedLiveSample('Example', '100%', '396') }}

## Siehe auch

- [Stacking ohne die z-index Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stacking-Regeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelnde schwebende Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente beim Stapeln behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie man `z-index` verwendet, um die Standardstapelung zu ändern.
- [Stacking Kontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
- [Stacking Kontext Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Stacking Kontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene
- {{Glossary("Top_layer", "Top-Schicht")}}
